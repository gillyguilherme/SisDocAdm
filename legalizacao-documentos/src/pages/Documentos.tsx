import Sidebar from "../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function Documentos() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <h1>Documentos</h1>

        <div className="card" style={{ marginTop: "20px" }}>
          <table width="100%">
            <thead>
              <tr>
                <th>Nº</th>
                <th>Tipo</th>
                <th>Status</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Contrato</td>
                <td>Ativo</td>
                <td><Link to="/documentos/1">Ver</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
