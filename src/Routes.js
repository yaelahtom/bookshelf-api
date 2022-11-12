import {
  addBookHandler,
  deleteBookByIdHandler,
  editBookByIdHandler,
  getAllBooksHandler,
  getBookByIdHandler,
} from './Handler';

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books{booksId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books{booksId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books{booksId}',
    handler: deleteBookByIdHandler,
  },
];

export default routes;
