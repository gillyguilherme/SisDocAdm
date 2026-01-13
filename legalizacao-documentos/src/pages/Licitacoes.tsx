import Sidebar from "../components/Sidebar/Sidebar";
import { Link } from "react-router-dom";

export default function Licitacoes() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <h1>Licitações</h1>

        <div className="card">
          <table width="100%">
            <tbody>
              <tr>
                <td>Pregão 001/2024</td>
                <td><Link to="/licitacoes/1">Ver</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
