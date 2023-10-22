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
              navigate(`/editarformula/${data.id}`);
            }}
            sx={{ cursor: "pointer" }}
          >
            {data.nome}
          </Link>
          &nbsp;
        </TableCell>
        <TableCell>{data.custo}</TableCell>
        <TableCell>{data.total}</TableCell>
      </TableRow>
    </>
  );
};

export default Row;
