import React, { createContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { API } from "aws-amplify";

import { Flex, Input, Label, View } from "@aws-amplify/ui-react";

import { Typography, Button, TextField, Grid } from "@mui/material";

import { getMateria } from "../../graphql/queries";

import {
  createMateria as createMateriaMutation,
  deleteMateria as deleteMateriaMutation,
  updateMateria as updateMateriaMutation,
} from "../../graphql/mutations";

const MateriaisForm = () => {
  const [materiaData, setMateriaData] = useState({
    id: "",
    nome: "",
    custo: 0,
    fornecedor: "",
  });

  const [isMateriaNew, setIsMateriaNew] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState([]);
  const [warningDialogOpen, setWarningDialog] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  async function createMateria(event) {
    event.preventdefault();
    const form = new FormData(event.target);
    const data = {
      nome: form.get("nome"),
      custo: form.get("custo"),
      fornecedor: form.get("fornecedor"),
    };
    await API.graphql({
      query: createMateriaMutation,
      variables: { input: data },
    });
    event.target.reset();
    navigate("/materias");
  }

  async function updateMateriaById(event) {
    const form = new FormData(event.target);
    const data = {
      id: materiaData.id,
      nome: form.get("nome"),
      custo: form.get("custo"),
      fornecedor: form.get("fornecedor"),
    };

    await API.graphql({
      query: updateMateriaMutation,
      variables: { input: data },
    });
  }

  useEffect(() => {
    async function getMateriaById(id) {
      const selectedMaterial = await API.graphql({
        query: getMateria,
        variables: { id: id },
      });
      console.log(selectedMaterial.data.getMateria);
      setMateriaData(selectedMaterial.data.getMateria);
    }

    if (params.id !== undefined) {
      getMateriaById(params.id);
      setIsMateriaNew(false);
      return;
    }
  }, []);

  return (
    <View
      as="form"
      margin="3rem 0"
      onSubmit={isMateriaNew ? createMateria : updateMateriaById}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} className="h-ficha-form-1-2">
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <Grid container spacing={2}>
                <Grid item xs={12} sx={{ marginRight: "16px" }}>
                  <Grid container spacing={2} className="h-grid-group">
                    <Grid item xs={12}>
                      <Typography variant="h4" className="h-grid-title">
                        Materia Prima
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{ marginTop: 1, paddingBottom: 1.5 }}
                    >
                      <TextField
                        name="nome"
                        placeholder="Nome"
                        label="Nome"
                        value={materiaData.nome}
                        onChange={(event) =>
                          setMateriaData({
                            ...materiaData,
                            nome: event.target.value,
                          })
                        }
                        required
                      />
                      <TextField
                        name="custo"
                        placeholder="Custo"
                        label="Custo"
                        inputProps={{
                          inputMode: "numeric",
                          pattern: "[0-9]*",
                        }}
                        variation="quiet"
                        value={materiaData.custo}
                        onChange={(event) =>
                          setMateriaData({
                            ...materiaData,
                            custo: event.target.value,
                          })
                        }
                        required
                      />
                      <TextField
                        name="fornecedor"
                        placeholder="Fornecedor"
                        label="Fornecedor"
                        variation="quiet"
                        value={materiaData.fornecedor}
                        onChange={(event) =>
                          setMateriaData({
                            ...materiaData,
                            fornecedor: event.target.value,
                          })
                        }
                        required
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            marginTop: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            onClick={() => navigate("/materias")}
            size="large"
            disabled={isLoading}
          >
            Voltar
          </Button>
          <Button type="submit" size="large">
            Salvar
          </Button>
        </Grid>
      </Grid>
    </View>
  );
};

export default MateriaisForm;
