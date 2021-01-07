import React, { Fragment } from 'react';

const NoteViewer = ({chosen, handleEditClick}) => {
  return (
    <Fragment>
      <h2>{chosen.title}</h2>
      <p>{chosen.body}</p>
      <button onClick={() => handleEditClick(chosen)}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
