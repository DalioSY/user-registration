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
  const [users, setUsers] = useState<User[]>([]);
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get<User[]>('/');
      setUsers(data);
    }
    getUsers();
  }, []);

  async function updateUser(id: string) {
    await api.put(`/${id}`, {
      name: editName,
      email: editEmail,
    });

    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, name: editName, email: editEmail } : user
    );
    setUsers(updatedUsers);
    setEditId(null);
  }

  async function deleteUsers(id: string) {
    await api.delete(`/${id}`);
    const updatedUsers = users.filter((item) => item.id !== id);
    setUsers(updatedUsers);
  }

  function startEditing(user: User) {
    setEditId(user.id);
    setEditName(user.name);
    setEditEmail(user.email);
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-4 p-24'>
      <h1 className='font-bold'>Lista de usuários</h1>
      {users.map((item: User) => (
        <div
          className='w-96 flex items-center justify-between gap-4 border p-4 rounded bg-background'
          key={item.id}
        >
          {editId === item.id ? (
            <div>
              <input
                className='border p-1 mb-2'
                type='text'
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder='Nome'
              />
              <input
                className='border p-1'
                type='email'
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
                placeholder='Email'
              />
            </div>
          ) : (
            <div>
              <p>{item.name}</p>
              <p>{item.email}</p>
            </div>
          )}
          <div className='flex gap-4'>
            {editId === item.id ? (
              <Button
                type='button'
                className='hover:bg-green-700 hover:text-white'
                onClick={() => updateUser(item.id)}
              >
                Save
              </Button>
            ) : (
              <Button
                type='button'
                className='hover:bg-green-700 hover:text-white'
                onClick={() => startEditing(item)}
              >
                Edit
              </Button>
            )}
            <Button
              type='button'
              className='hover:bg-red-600 hover:text-white'
              onClick={() => deleteUsers(item.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </main>
  );
}
