import Sidebar from "../components/Sidebar/Sidebar";
import { useParams } from "react-router-dom";

export default function DocumentoDetalhe() {
  const { id } = useParams();

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <h1>Documento #{id}</h1>

        <div className="card">
          <p><strong>Tipo:</strong> Contrato</p>
          <p><strong>Status:</strong> Ativo</p>
          <p><strong>Responsável:</strong> Setor Jurídico</p>
        </div>
      </main>
    </div>
  );
}
