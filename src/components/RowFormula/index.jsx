import { Link, TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Row = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <TableRow>
        <TableCell>
          <Link
            onClick={() => {
              navigate(`/editarmateria/${data.id}`);
            }}
            sx={{ cursor: "pointer" }}
          >
            {data.nome}
          </Link>
          &nbsp;
        </TableCell>
        <TableCell>{data.custo}</TableCell>
        <TableCell>{data.fornecedor}</TableCell>
      </TableRow>
    </>
  );
};

export default Row;
