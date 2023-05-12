import { useContext } from 'react';
import { NoteContext } from '../../context/NoteContext';
import { ListItem } from '../ListItem';

import './Sidebar.scss';

export const Sidebar = () => {
  const { notes, searchQuery } = useContext(NoteContext);

  const visibleNotes = notes.filter(note => {
    const title = note.title.toLocaleLowerCase();
    const query = searchQuery.toLocaleLowerCase();

    return title.includes(query);
  });

  return (
    <aside className="Sidebar">
      <ul className="Sidebar__list">
        {visibleNotes.map(note => (
          <li
            key={note.id}
            className="Sidebar__list-item"
          >
            <ListItem item={note} />
          </li>
        ))}
      </ul>
    </aside>
  );
};
