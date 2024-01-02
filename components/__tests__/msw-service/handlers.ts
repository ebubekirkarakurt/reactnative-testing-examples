import { rest } from 'msw';

const mockTasks = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  }

const getTasksPath = 'https://jsonplaceholder.typicode.com/todos/1';

const tasksHandler = rest.get(getTasksPath, async (req, res, ctx) =>
  res(ctx.json(mockTasks))
);

export const tasksHandlerException = rest.get(
  getTasksPath,
  async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ message: 'Deliberately broken request' }))
);

export const handlers = [tasksHandler];