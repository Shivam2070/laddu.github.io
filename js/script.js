const addButton = document.querySelector('#add');

const updateLSData = () => {
  const textAreaData = document.querySelectorAll('textarea');
  const notes = [];
  // console.log(textAreaData);
  textAreaData.forEach((note) => {
    return notes.push(note.value);
  })
  // console.log(notes);
  localStorage.setItem('notes', JSON.stringify(notes));

}

const addNewNote = (text = "") => {

  const note = document.createElement('div');  
    note.classList.add('note');

    const htmlData = `
      <div class="operation">
              <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
              <button class="delete"><i class="fa-solid fa-trash"></i></button>
          </div>

          <div class="main ${text ? "" : "hidden"} "></div>
          <textarea class=" ${text ? "hidden" : ""} "></textarea>
    `
      note.insertAdjacentHTML('afterbegin',htmlData);

      const editButton = note.querySelector('.edit');
      const delButton = note.querySelector('.delete');
      const maindiv = note.querySelector('.main');
      const textArea = note.querySelector('textarea');

      delButton.addEventListener('click', () => {
        note.remove();
        updateLSData();
      })

      textArea.value = text;
      maindiv.innerHTML =text;

      editButton.addEventListener('click', () => {
        maindiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
      })

      textArea.addEventListener('change', (event) => {
        const value = event.target.value;
        maindiv.innerHTML = value;

        updateLSData();
      })

      document.body.appendChild(note);
}

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){ notes.forEach((note) => addNewNote(note))};

addButton.addEventListener('click', () => addNewNote() );







// const noteForm = document.getElementById("note-form");
// const noteText = document.getElementById("note-text");
// const saveButton = document.getElementById("save-button");
// const notes = document.getElementById("notes");

// saveButton.addEventListener("click", () => {
//   const note = noteText.value;
//   if (note === "") {
//     return;
//   }
//   saveNote(note);
//   noteText.value = "";
// });

// function saveNote(note) {
//   const noteElement = document.createElement("div");
//   noteElement.classList.add("note");
//   noteElement.innerHTML = note;
//   notes.appendChild(noteElement);
// }
