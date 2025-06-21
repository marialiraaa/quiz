import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastrar from "./componentes/Registro.tsx";
import BemVindo from "./componentes/BemVindo";
import Perguntas from "./componentes/Pergunta/Index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BemVindo />} />
        <Route path="/registro" element={<Cadastrar />} />
        <Route path="/perguntas" element={<Perguntas />} />
      </Routes>
    </BrowserRouter>
  );
}
