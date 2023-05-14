import { useContext } from 'react';
import { NoteContext } from '../NoteContext';
import { Note } from '../../types/Note';
import { ListItem } from '../ListItem';

import './Sidebar.scss';

export const Sidebar = () => {
  const { notes, searchQuery } = useContext(NoteContext);

  const filterByQuery = ((note: Note) => {
    const title = note.title.toLocaleLowerCase();
    const text = note.text.toLocaleLowerCase();
    const query = searchQuery.toLocaleLowerCase();

    return title.includes(query) || text.includes(query);
  });

  const visibleNotes = notes.filter(filterByQuery).reverse();

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
