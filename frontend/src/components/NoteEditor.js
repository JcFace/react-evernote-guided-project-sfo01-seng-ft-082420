import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    title: this.props.chosen.title,
    body: this.props.chosen.body,
    id: this.props.chosen.id
  }
  
  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" />
        <textarea name="body" />
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick={(e) => this.props.handleEditSave(e, this.state)}/>
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
