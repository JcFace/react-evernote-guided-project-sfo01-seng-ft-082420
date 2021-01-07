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

  handleEdit = () => {
    this.setState({
      editNote: true
    })
  }

  render() {
    const { notes, theNote, editNote } = this.state
    const { filterNotes } = this
    return (
      <div className="app">
        <Header />
        <NoteContainer notes={notes} chosen={theNote} edited={editNote} filtered={filterNotes()} handleChosen={this.handleChosen} handleEdit={this.handleEdit}/>
      </div>
    );
  }
}

export default App;
