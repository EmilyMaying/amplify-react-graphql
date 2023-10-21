import { Container } from "@mui/material";
import { HashRouter, Route, Routes as RoutesRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";

import Materia from "../pages/Materiais";
import Formulas from "../pages/Formulas";
import MateriaisForm from "../pages/MateriaisForm";
import { BrowserRouter } from "react-router-dom/dist";

const Routes = () => (
  <BrowserRouter>
    <Container maxWidth="xl" sx={{ paddingTop: "80px" }}>
      <BaseLayout />
      <RoutesRouter>
        <Route index path="/" element={<Materia />} />
        <Route path="/materias" element={<Materia />} />
        <Route path="/formulas" element={<Formulas />} />
        <Route path="/novamateria" element={<MateriaisForm />} />
        <Route path="/editarmateria/:id" element={<MateriaisForm />} />
        {/* <Route path="/home" element={<List />} />
        <Route path="/cadastro" element={<HorseForm />} />
        <Route path="/editar/:id" element={<HorseForm />} />
        <Route path="/premiacao/:id" element={<Award />} />
        <Route path="/genealogia/:id" element={<Genealogy />} />
        <Route path="/parentesco/:id" element={<Parenting />} />
        <Route path="/relatorios" element={<Reports />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Splash />} />
        <Route path="*" element={<NotFound />} /> */}
      </RoutesRouter>
    </Container>
  </BrowserRouter>
);

export default Routes;
