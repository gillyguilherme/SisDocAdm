import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Documentos from "../pages/Documentos";
import Licitacoes from "../pages/Licitacoes";
import DocumentoDetalhe from "../pages/DocumentoDetalhe";
import LicitacaoDetalhe from "../pages/LicitacaoDetalhe";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/documentos/:id" element={<DocumentoDetalhe />} />
        <Route path="/licitacoes" element={<Licitacoes />} />
        <Route path="/licitacoes/:id" element={<LicitacaoDetalhe />} />
      </Routes>
    </BrowserRouter>
  );
}
