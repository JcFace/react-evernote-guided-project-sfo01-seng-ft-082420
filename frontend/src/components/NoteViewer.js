import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.chosen.title}</h2>
      <p>{props.chosen.body}</p>
      <button>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
