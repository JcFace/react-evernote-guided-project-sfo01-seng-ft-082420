import React, { Component } from 'react';
import NoteList from './NoteList';

const Sidebar  = (props) => {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={props.notes} get={props.get} handleChosen={props.handleChosen}/>
        <button onClick={(e) => props.new(e)}>New</button>
      </div>
    );
}

export default Sidebar;
