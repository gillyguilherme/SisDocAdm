import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Sistema de Legalização</h2>

        <input type="email" placeholder="E-mail" required />
        <input type="password" placeholder="Senha" required />

        <button className="btn-primary">Entrar</button>
      </form>
    </div>
  );
}
