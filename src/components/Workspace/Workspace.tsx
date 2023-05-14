import { useContext } from 'react';
import { NoteContext } from '../NoteContext';
import { ViewNote } from '../ViewNote';

import './Workspace.scss';

export const Workspace = () => {
  const { selectedNote } = useContext(NoteContext);

  return (
    <div className="Workspace">
      {selectedNote
        ? <ViewNote note={selectedNote} />
        : <span className="Workspace__unselected">Please, select note.</span>}
    </div>
  );
};
