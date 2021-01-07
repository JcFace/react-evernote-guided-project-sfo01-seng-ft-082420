import React, { Component } from 'react';
import NoteList from './NoteList';

const Sidebar  = (props) => {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={props.notes} filtered={props.filtered} handleChosen={props.handleChosen}/>
        <button>New</button>
      </div>
    );
}

export default Sidebar;
