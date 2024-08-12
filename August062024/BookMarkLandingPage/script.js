// Getting DOM elements
const urlInput = document.getElementById("urlInput");
const addBookmarkButton = document.getElementById("addBookmark");
const deleteAllButton = document.getElementById("deleteAll");
const bookMarkList = document.getElementById("bookmarkList");

// Function to validate URLs
function isValidURL(url) {
  const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
  return pattern.test(url);
}

// Function to load bookmarks from the backend
async function loadBookmarks() {
  const response = await fetch('http://localhost:8443/api/bookmarks');
  const bookmarks = await response.json();
  bookmarks.forEach(bookmark => {
    const bookmarkItem = document.createElement("li");
    bookmarkItem.classList.add("bookmark-item");
    bookmarkItem.innerHTML = `<a href="${bookmark.url}" target="_blank">${bookmark.url}</a>
      <div>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>`;
    bookMarkList.appendChild(bookmarkItem);
    addEditBookmarkListener(bookmarkItem, bookmark.id);
    addDeleteBookmarkListener(bookmarkItem, bookmark.id);
  });
}

// Event Listener for adding a bookmark
addBookmarkButton.addEventListener("click", async () => {
  const url = urlInput.value.trim();
  if (isValidURL(url)) {
    const response = await fetch('http://localhost:8443/api/bookmarks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    });

    if (response.ok) {
      const bookmark = await response.json();
      const bookmarkItem = document.createElement("li");
      bookmarkItem.classList.add("bookmark-item");
      bookmarkItem.innerHTML = `<a href="${bookmark.url}" target="_blank">${bookmark.url}</a>
        <div>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>`;
      bookMarkList.appendChild(bookmarkItem);
      urlInput.value = "";
      addEditBookmarkListener(bookmarkItem, bookmark.id);
      addDeleteBookmarkListener(bookmarkItem, bookmark.id);
    } else {
      alert("Failed to add bookmark");
    }
  } else {
    alert("Please enter a valid URL (http:// or https://).");
  }
});

// Event Listener for deleting all bookmarks
deleteAllButton.addEventListener("click", async () => {
  const response = await fetch('http://localhost:8443/api/bookmarks', {
    method: 'DELETE'
  });

  if (response.ok) {
    while (bookMarkList.firstChild) {
      bookMarkList.removeChild(bookMarkList.firstChild);
    }
  } else {
    alert("Failed to delete all bookmarks");
  }
});

// Function to add an edit bookmark listener
function addEditBookmarkListener(bookmarkItem, id) {
  const editButton = bookmarkItem.querySelector(".edit");
  const bookmarkLink = bookmarkItem.querySelector("a");

  editButton.addEventListener("click", async () => {
    const newURL = prompt("Edit the URL:", bookmarkLink.getAttribute("href"));
    if (newURL && isValidURL(newURL)) {
      const response = await fetch(`http://localhost:8443/api/bookmarks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: newURL })
      });

      if (response.ok) {
        bookmarkLink.setAttribute("href", newURL);
        bookmarkLink.innerHTML = newURL;
      } else {
        alert("Failed to update bookmark");
      }
    } else if (newURL) {
      alert("Please enter a valid URL (http:// or https://).");
    }
  });
}

// Function to add a delete bookmark listener
function addDeleteBookmarkListener(bookmarkItem, id) {
  const deleteButton = bookmarkItem.querySelector(".delete");
  deleteButton.addEventListener("click", async () => {
    const response = await fetch(`http://localhost:8443/api/bookmarks/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      bookmarkItem.remove();
    } else {
      alert("Failed to delete bookmark");
    }
  });
}

// Load bookmarks when the page loads
loadBookmarks();
