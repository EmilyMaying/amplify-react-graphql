import {
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Row from "../RowFormula";

const DataTable = ({ data, count, page, setPage, loading }) => {
  return (
    <>
      <TableContainer component={Paper} className="h-table full-height">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "32%" }}>Nome</TableCell>
              <TableCell sx={{ width: "15%" }}>Custo</TableCell>
              <TableCell sx={{ width: "12%" }}>Fornecedor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length ? (
              data.map((row, index) => (
                <Row
                  key={index}
                  data={row}
                  index={index}
                  page={page}
                  dataSize={data.length}
                  count={count}
                  setPage={setPage}
                />
              ))
            ) : (
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  colSpan={8}
                  sx={{ border: 0 }}
                >
                  <Typography sx={{ textAlign: "center", marginTop: 4 }}>
                    Nenhum dado a ser exibido
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <LinearProgress
        variant={loading ? "indeterminate" : "determinate"}
        value={0}
      />
      <Typography variant="h6">Total Formulas: {count}</Typography>
    </>
  );
};

export default DataTable;
