//your JS code here. If required.
// Select elements
const title = document.getElementById('title');
const author = document.getElementById('author');
const isbn = document.getElementById('isbn');
const submit = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Add Book Event
submit.addEventListener('click', function () {
  if (title.value === '' || author.value === '' || isbn.value === '') {
    alert('Please fill in all fields');
    return;
  }

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${title.value}</td>
    <td>${author.value}</td>
    <td>${isbn.value}</td>
    <td><button class="btn btn-danger btn-sm delete">X</button></td>
  `;

  bookList.appendChild(row);

  // Clear Fields
  title.value = '';
  author.value = '';
  isbn.value = '';
});

// Delete Book Event
bookList.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }
});
