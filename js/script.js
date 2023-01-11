function checkPassword() {
    // Replace 'correctPassword' with the actual password
    if (document.getElementById('password').value === '@HelloWorld') {
      window.location.href = 'main.html';
      return false;
    } else {
      alert('Incorrect code');
      return false;
    }
  }


  function logout() {
    // Redirect to the login page
    window.location.href = 'login.html';
  }


const noteForm = document.getElementById("note-form");
const noteText = document.getElementById("note-text");
const saveButton = document.getElementById("save-button");
const notes = document.getElementById("notes");

saveButton.addEventListener("click", () => {
  const note = noteText.value;
  if (note === "") {
    return;
  }
  saveNote(note);
  noteText.value = "";
});

function saveNote(note) {
  const noteElement = document.createElement("div");
  noteElement.classList.add("note");
  noteElement.innerHTML = note;
  notes.appendChild(noteElement);
}
