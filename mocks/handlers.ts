import { http, graphql, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/todos/1', () => {
    return HttpResponse.json({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    });
  }),
  graphql.query('TodoLists', () => {
    return HttpResponse.json({
      data: {
        movies: [
          {
            title: 'delectus aut autem',
          },
        ],
      },
    });
  }),
];
