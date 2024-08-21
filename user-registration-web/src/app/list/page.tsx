'use client';

import { Button } from '@/components/ui/button';
import api from '@/services/api';
import { useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

export default function User() {
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    async function getUses() {
      const { data } = await api.get<User[]>('/');
      setUser(data);
    }
    getUses();
  }, []);

  async function deleteUsers(id: string) {
    await api.delete(`/${id}`);
    const updatedUsers = user.filter((item) => item.id !== id);
    setUser(updatedUsers);
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-4 p-24'>
      <h1 className='font-bold'>Lista de usuários</h1>
      {user.map((item: { id: string; name: string; email: string }) => (
        <div
          className='w-96 flex items-center justify-between gap-4 border p-4 rounded bg-background'
          key={item.id}
        >
          <div>
            <p>{item.name} </p>
            <p>{item.email} </p>
          </div>
          <Button
            type='button'
            className='hover:bg-red-600 hover:text-white'
            onClick={() => deleteUsers(item.id)}
          >
            Deletar
          </Button>
        </div>
      ))}
    </main>
  );
}
