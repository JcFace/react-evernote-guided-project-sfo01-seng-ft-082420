import React from 'react';
import NoteList from './NoteList';

const Sidebar  = (props) => {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={props.notes} get={props.get} handleChosen={props.handleChosen}/>
        <button onClick={() => props.new()}>New</button>
      </div>
    );
}

export default Sidebar;
