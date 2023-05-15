import classNames from 'classnames';
import { FC, useContext } from 'react';
import { NoteContext } from '../NoteContext';
import { Note } from '../../types/Note';
import './ListItem.scss';

type Props = {
  item: Note;
};

export const ListItem: FC<Props> = ({ item }) => {
  const { title, text } = item;
  const {
    selectedNote, searchQuery, setSelectedNote, setSearchQuery, setIsEditable,
  } = useContext(NoteContext);

  const handleSelectNote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (searchQuery) {
      setSearchQuery('');
    }

    if (item.id !== selectedNote?.id) {
      setIsEditable(false);
      setSelectedNote(item);
    }
  };

  const getDate = () => {
    const today = new Date().toLocaleDateString(
      'en-US', { month: 'numeric', year: '2-digit', day: 'numeric' },
    );
    const noteDate = item.date.toLocaleDateString(
      'en-US', { month: 'numeric', year: '2-digit', day: 'numeric' },
    );
    const time = item.date.toLocaleString(
      'en-US', { hour: 'numeric', minute: 'numeric', hour12: true },
    );

    if (today === noteDate) {
      return time;
    }

    return noteDate;
  };

  return (
    <a
      href="/"
      className={classNames(
        'ListItem',
        { 'ListItem--active': item.id === selectedNote?.id },
      )}
      onClick={handleSelectNote}
    >
      <h2 className="ListItem__title">
        {!title ? 'No title' : title}
      </h2>

      <div className="ListItem__details">
        <span className="ListItem__date">{getDate()}</span>

        <p className="ListItem__text">
          {!text ? 'Empty note' : text}
        </p>
      </div>
    </a>
  );
};
