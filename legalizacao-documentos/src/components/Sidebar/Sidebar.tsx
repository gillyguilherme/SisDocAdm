import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>SisDoc</h2>

      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/documentos">Documentos</Link></li>
        <li><Link to="/licitacoes">Licitações</Link></li>
      </ul>
    </aside>
  );
}