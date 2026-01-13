import Sidebar from "../components/Sidebar/Sidebar";
import { useParams } from "react-router-dom";

export default function LicitacaoDetalhe() {
  const { id } = useParams();

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <h1>Licitação #{id}</h1>

        <div className="card">
          <p><strong>Modalidade:</strong> Pregão</p>
          <p><strong>Situação:</strong> Em andamento</p>
          <p><strong>Objeto:</strong> Aquisição de serviços</p>
        </div>
      </main>
    </div>
  );
}
