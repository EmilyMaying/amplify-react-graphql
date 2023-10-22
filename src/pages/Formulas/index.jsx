import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "aws-amplify";

import DataTable from "../../components/DataTableFormulas";
// import TableFilter from '../../components/TableFilter'
// import TableSearch from '../../components/TableSearch'

import { listFormulas } from "../../graphql/queries";

const Formula = () => {
  const navigate = useNavigate();

  const [formulaData, setFormulaData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchOptions, setSearchOptions] = useState([]);

  const [page, setPage] = useState(0);
  const [count, setCount] = useState(10);

  useEffect(() => {
    fetchFormulas();
  }, []);

  async function fetchFormulas() {
    const apiData = await API.graphql({
      query: listFormulas,
      variables: {
        limit: count,
      },
    });
    const formulalFromAPI = apiData.data.listFormulas.items;
    setFormulaData(formulalFromAPI);
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
                    navigate("/novaformula");
                  }}
                >
                  Nova Formula
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <DataTable
          data={formulaData}
          page={page}
          count={count}
          setPage={setPage}
          loading={false}
        />
      </Grid>
    </Grid>
  );
};

export default Formula;
