import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.get.map(note => {
        return <NoteItem note={note} handleChosen={props.handleChosen}/>
      })}
    </ul>
  );
}

export default NoteList;
