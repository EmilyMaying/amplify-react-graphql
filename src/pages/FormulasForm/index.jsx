import React, { createContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { API } from "aws-amplify";

import { Flex, Input, Label, View } from "@aws-amplify/ui-react";

import { Typography, Button, TextField, Grid } from "@mui/material";

import { getFormula } from "../../graphql/queries";

import {
  createFormula as createFormulaMutation,
  deleteFormula as deleteFormulaMutation,
  updateFormula as updateFormulaMutation,
} from "../../graphql/mutations";

const FormulaForm = () => {
  const [formulaData, setFormulaData] = useState({
    id: "",
    nome: "",
    custo: 0,
    observacao: "",
    total: 0,
  });

  const [isFormulaNew, setIsFormulaNew] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState([]);
  const [warningDialogOpen, setWarningDialog] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  async function createFormula(event) {
    event.preventdefault();
    const form = new FormData(event.target);
    const data = {
      nome: form.get("nome"),
      custo: form.get("custo"),
      observacao: form.get("observacao"),
      total: form.get("total"),
    };
    await API.graphql({
      query: createFormulaMutation,
      variables: { input: data },
    });
    event.target.reset();
    navigate("/formulas");
  }

  async function updateFormulaById(event) {
    const form = new FormData(event.target);
    const data = {
      id: formulaData.id,
      nome: form.get("nome"),
      custo: form.get("custo"),
      observacao: form.get("observacao"),
      total: form.get("total"),
    };

    await API.graphql({
      query: updateFormulaMutation,
      variables: { input: data },
    });
  }

  useEffect(() => {
    async function getFormulaById(id) {
      const selectedFormula = await API.graphql({
        query: getFormula,
        variables: { id: id },
      });
      console.log(selectedFormula.data.getFormula);
      setFormulaData(selectedFormula.data.getFormula);
    }

    if (params.id !== undefined) {
      getFormulaById(params.id);
      setIsFormulaNew(false);
      return;
    }
  }, []);

  return (
    <View
      as="form"
      margin="3rem 0"
      onSubmit={isFormulaNew ? createFormula : updateFormulaById}
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
                        Formula
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
                        value={formulaData.nome}
                        onChange={(event) =>
                          setFormulaData({
                            ...formulaData,
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
                        value={formulaData.custo}
                        onChange={(event) =>
                          setFormulaData({
                            ...formulaData,
                            custo: event.target.value,
                          })
                        }
                        required
                      />
                      <TextField
                        name="observacao"
                        placeholder="Observação"
                        label="Observação"
                        variation="quiet"
                        value={formulaData.observacao}
                        onChange={(event) =>
                          setFormulaData({
                            ...formulaData,
                            observacao: event.target.value,
                          })
                        }
                        required
                      />
                      <TextField
                        name="total"
                        placeholder="Total"
                        label="Total"
                        inputProps={{
                          inputMode: "numeric",
                          pattern: "[0-9]*",
                        }}
                        variation="quiet"
                        value={formulaData.total}
                        onChange={(event) =>
                          setFormulaData({
                            ...formulaData,
                            total: event.target.value,
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
            onClick={() => navigate("/formulas")}
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

export default FormulaForm;
