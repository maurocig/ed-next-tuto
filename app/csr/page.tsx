'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CSR() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-xl text-red-500">Client side rendered</h1>
      {todos.map((todo: { id: string; title: string }) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </main>
  );
}
