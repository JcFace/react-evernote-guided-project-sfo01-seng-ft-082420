import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.props.notes} chosen={this.props.chosen} edited={this.props.edited} filtered={this.props.filtered} handleChosen={this.props.handleChosen}/>
          <Content chosen={this.props.chosen} edited={this.props.edited} handleEdit={this.props.handleEdit}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
