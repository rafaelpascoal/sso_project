// No seu arquivo de Dashboard ou qualquer outro onde você usa React Context
"use client"; // Declara que o componente é do lado do cliente

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo, {session?.user?.name}!</p>
    </div>
  );
}
