import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.filtered.map(note => {
        return <NoteItem note={note} handleChosen={props.handleChosen}/>
      })}
    </ul>
  );
}

export default NoteList;
