// src/app/login/page.tsx
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Faça Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn("credentials", { username: "admin", password: "admin" });
        }}
        className="flex flex-col space-y-4"
      >
        <input
          type="text"
          name="username"
          placeholder="Usuário"
          className="p-2 rounded border"
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="p-2 rounded border"
        />
        <button type="submit" className="bg-blue-500 p-2 rounded text-white">
          Entrar
        </button>
      </form>
    </div>
  );
}
