import { useContext } from 'react';
import { NoteContext } from '../../context/NoteContext';

import { ReactComponent as IconAdd } from '../../svg/add.svg';
import { ReactComponent as IconEdit } from '../../svg/edit.svg';
import { ReactComponent as IconDone } from '../../svg/done.svg';
import { ReactComponent as IconRemove } from '../../svg/trash.svg';

import './ControlButtons.scss';

export const ControlButtons = () => {
  const {
    selectedNote,
    isEditable,
    newNote,
    deleteNote,
    setIsEditable,
    setSelectedNote,
  } = useContext(NoteContext);

  const onAddNote = () => {
    newNote();
  };

  const onDeleteNote = () => {
    if (window.confirm('Delete this note?') && selectedNote) {
      deleteNote(selectedNote.id);
      setSelectedNote(null);
      setIsEditable(false);
    }
  };

  return (
    <div className="ControlButtons">
      <button
        type="button"
        className="ControlButtons__button"
        onClick={onAddNote}
      >
        <IconAdd className="ControlButtons__icon" />
      </button>

      <button
        type="button"
        className="ControlButtons__button"
        disabled={!selectedNote}
        onClick={onDeleteNote}
      >
        <IconRemove className="ControlButtons__icon" />
      </button>

      <button
        type="button"
        className="ControlButtons__button"
        disabled={!selectedNote}
        onClick={() => setIsEditable(current => !current)}
      >
        {isEditable
          ? <IconDone className="ControlButtons__icon" />
          : <IconEdit className="ControlButtons__icon" />}
      </button>
    </div>
  );
};
