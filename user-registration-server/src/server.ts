import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import cors from 'cors';

const prisma = new PrismaClient();
const PORT = 4000;

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req: Request, res: Response) => {
  try {
    const allUser = await prisma.user.findMany();
    return res.status(200).json(allUser);
  } catch (e) {
    return res.status(500).json({ message: `Error fetching users: ${e}` });
  }
});

app.post('/', async (req: Request, res: Response) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
      },
    });
    return res.status(201).json(newUser);
  } catch (e) {
    return res.status(500).json({ message: `Error creating user: ${e}` });
  }
});

app.put('/:id', async (req: Request, res: Response) => {
  try {
    const updateUser = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        email: req.body.email,
      },
    });
    return res.status(201).json(updateUser);
  } catch (e) {
    return res.status(500).json({ message: `Error updating user: ${e}` });
  }
});

app.delete('/:id', async (req: Request, res: Response) => {
  try {
    await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    return res.status(204).json({ message: 'User deleted successfully' });
  } catch (e) {
    return res.status(500).json({ message: `Error deleting user: ${e}` });
  }
});

app.listen(PORT, () => console.log(`⏳ Connected ${PORT}`));
