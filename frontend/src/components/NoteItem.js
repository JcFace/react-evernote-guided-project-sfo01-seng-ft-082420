import React from 'react';

const NoteItem = (props) => (
  <li onClick={() => props.handleChosen(props.note)}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.slice(0,50) + ("...")}</p>
  </li>
);

export default NoteItem;
