import { Button, Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "aws-amplify";

import DataTable from "../../components/DataTableMaterias";
// import TableFilter from '../../components/TableFilter'
// import TableSearch from '../../components/TableSearch'

import { listMaterias } from "../../graphql/queries";

const Materia = () => {
  const navigate = useNavigate();

  const [materiaData, setMateriaData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchOptions, setSearchOptions] = useState([]);

  const [page, setPage] = useState(0);
  const [count, setCount] = useState(3);

  useEffect(() => {
    fetchMaterias();
  }, []);

  async function fetchMaterias() {
    const apiData = await API.graphql({
      query: listMaterias,
      variables: {
        limit: count,
      },
    });
    const materialFromAPI = apiData.data.listMaterias.items;
    setMateriaData(materialFromAPI);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={4} lg={6}></Grid>
          <Grid item xs={8} lg={6}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={6}
                lg={9}
                style={{ height: "70px", textAlign: "center" }}
              ></Grid>
              <Grid
                item
                xs={6}
                lg={3}
                style={{ height: "70px", textAlign: "right" }}
              >
                <Button
                  style={{ height: "100%" }}
                  onClick={() => {
                    navigate("/novamateria");
                  }}
                >
                  Nova Materia
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <DataTable data={materiaData} />
      </Grid>
    </Grid>
  );
};

export default Materia;
