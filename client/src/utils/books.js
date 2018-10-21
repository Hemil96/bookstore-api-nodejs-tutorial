async function handleResponse(res) {
  if (!res.ok) throw Error(res.statusText);
  const { data } = await res.json();
  return data;
}

function fetchBooks() {
  return fetch('/books').then(handleResponse);
}

function saveBook(newBook) {
  return fetch('/books', {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then(handleResponse);
}

function getBookById(id) {
  return fetch(`/books/${id}`).then(handleResponse);
}

function updateBook(id, updatedBook) {
  return fetch(`/books/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedBook),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then(handleResponse);
}

function deleteBook(id) {
  return fetch(`/books/${id}`, { method: 'DELETE' }).then(handleResponse);
}

const api = {
  fetchBooks,
  saveBook,
  getBookById,
  updateBook,
  deleteBook,
};

export default api;
export { fetchBooks, saveBook, getBookById, updateBook, deleteBook };
