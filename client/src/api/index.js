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
  return fetch(`/book/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedBook),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then(handleResponse);
}

function deleteBook(id) {
  return fetch(`/book/${id}`, { method: 'DELETE' }).then(handleResponse);
}

async function handleResponse(res) {
  if (!res.ok) return console.error(res.statusText);
  const { data } = await res.json();
  return Promise.resolve(data);
}

export default {
  fetchBooks,
  saveBook,
  getBookById,
  updateBook,
  deleteBook,
};
