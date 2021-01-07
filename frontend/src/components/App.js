import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

const notesURL = "http://localhost:3000/api/v1/notes"

class App extends Component {

  state = {
    notes: [],
    theNote: null,
    editNote: false,
    filtered: ""
  }

  
  componentDidMount = () => {
    fetch(notesURL)
    .then(res => res.json())
    .then(notes => {
      this.setState({
        notes: notes
      })
    })
  }

  filterNotes = () => {
    return this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.filtered.toLowerCase()))
  }

  handleChosen = (note) => {
    // console.log(note)
    this.setState({
      theNote: note, 
      editNote: false
    })
  }

  handleEditClick = () => {
    this.setState({
      editNote: true
    })
  }

  handleEditSave = (e, chosen) => {
    e.preventDefault()
    console.log(chosen.id)
    return fetch(`http://localhost:3000/api/v1/notes/${chosen.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(chosen)
    })
    .then(res => res.json())
    .then(note => {
      const newNote = this.state.notes.map(n => n.id === note.id ? note : n )
      this.setState({
        notes: newNote, 
        editNote: false,
        theNote: null
      })
    })
  }

  cancelEdit = () => {
    this.setState({
      editNote: false
    })
  }

  makeNote = (e) => {
    let placeholder = {
      title: "Create your Title",
      body: "Don't forget the Body",
      user_id: 1
    }
    this.postNote(notesURL, placeholder)
    .then(placeholder => this.setState({
      notes: [placeholder, ...this.state.notes],
      theNote: placeholder
    }))
  }

  postNote = (notesURL, placeholder) => {
    return fetch(notesURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(placeholder)
    })
    .then(res => res.json())
  }

  
  render() {
    const { notes, theNote, editNote } = this.state
    const { filterNotes } = this
    return (
      <div className="app">
        <Header />
        <NoteContainer notes={notes} chosen={theNote} edited={editNote} filtered={filterNotes()} handleChosen={this.handleChosen} handleEditClick={this.handleEditClick} handleEditSave={this.handleEditSave} cancel={this.cancelEdit} makeNote={this.makeNote}/>
      </div>
    );
  }
}

export default App;
