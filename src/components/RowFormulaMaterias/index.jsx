import { Link, TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Row = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <TableRow>

        <TableCell>
        </TableCell>
        <TableCell>
           {data.quantidade}
        </TableCell>
      </TableRow>
    </>
  );
};

export default Row;
