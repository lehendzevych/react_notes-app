import { useContext } from 'react';
import { NoteContext } from '../NoteContext';

import { ReactComponent as IconAdd } from '../../svg/add.svg';
import { ReactComponent as IconEdit } from '../../svg/edit.svg';
import { ReactComponent as IconDone } from '../../svg/done.svg';
import { ReactComponent as IconRemove } from '../../svg/trash.svg';
import { ReactComponent as IconArrowLeft } from '../../svg/arrow-left.svg';

import './ControlButtons.scss';

export const ControlButtons = () => {
  const {
    selectedNote,
    isEditable,
    createNote,
    deleteNote,
    setIsEditable,
    setSelectedNote,
  } = useContext(NoteContext);

  const onDeleteNote = () => {
    if (window.confirm('Delete this note?') && selectedNote) {
      deleteNote(selectedNote.id);
    }
  };

  const unselectNote = () => {
    setSelectedNote(null);
    setIsEditable(false);
  };

  return (
    <div className="ControlButtons">
      {!selectedNote || (
        <button
          type="button"
          className="ControlButtons__button ControlButtons__back"
          onClick={unselectNote}
        >
          <IconArrowLeft className="ControlButtons__icon" />
        </button>
      )}

      <button
        type="button"
        className="ControlButtons__button"
        onClick={() => createNote()}
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
