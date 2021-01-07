import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    title: this.props.chosen.title,
    body: this.props.chosen.body,
    id: this.props.chosen.id
  }

  handleUpdate = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" value={this.state.title} onChange={this.handleUpdate}/>
        <textarea name="body" value={this.state.body} onChange={this.handleUpdate}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick={(e) => this.props.handleEditSave(e, this.state)}/>
          <button type="button" onClick={() => this.props.cancel(this.state)}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
