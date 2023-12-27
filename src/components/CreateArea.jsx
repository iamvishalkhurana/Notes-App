import React, { useState } from "react";
import AddIcon from "../../node_modules/@mui/icons-material/Add";
import Fab from "../../node_modules/@mui/material/Fab/Fab";
import Zoom from "../../node_modules/@mui/material/Zoom/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [noteclick, setNoteclick] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function divClicked() {
    setNoteclick(true);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div onClick={divClicked}>
      <form className="create-note">
        {noteclick && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={noteclick ? "3" : "1"}
        />

        {noteclick && (
          <Zoom in={noteclick}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
