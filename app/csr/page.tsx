'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CSR() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetch('/api/todos');
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-xl text-red-500" onClick={fetchTodos}>
        Client side rendered
      </h1>
      {todos.map((todo: { id: string; title: string }) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </main>
  );
}
