import Sidebar from "../../components/Sidebar/Sidebar";


export default function Dashboard() {
return (
<div style={{ display: "flex" }}>
<Sidebar />


<main style={{ padding: "20px", flex: 1 }}>
<h1>Dashboard</h1>
<p>Bem-vindo ao sistema de legalização de documentos.</p>
</main>
</div>
);
}