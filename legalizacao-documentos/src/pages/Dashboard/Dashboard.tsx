import Sidebar from "../../components/Sidebar/Sidebar";


export default function Dashboard() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <h1>Dashboard</h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", marginTop: "20px" }}>
          <div className="card">📄 Documentos<br /><strong>128</strong></div>
          <div className="card">🏛 Licitações<br /><strong>12</strong></div>
          <div className="card">⏰ Pendências<br /><strong>7</strong></div>
          <div className="card">✅ Concluídos<br /><strong>89</strong></div>
        </div>
      </main>
    </div>
  );
}
