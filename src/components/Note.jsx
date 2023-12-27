import React from "react";
import DeleteIcon from "../../node_modules/@mui/icons-material/Delete";
import Fab from "../../node_modules/@mui/material/Fab/Fab";
import Zoom from "../../node_modules/@mui/material/Zoom/Zoom";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <Zoom in={true}>
        <Fab onClick={handleClick}>
          <DeleteIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default Note;
