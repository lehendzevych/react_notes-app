import { useContext } from 'react';
import classNames from 'classnames';
import { NoteContext } from '../../context/NoteContext';

import './SearchBox.scss';

export const SearchBox = () => {
  const { searchQuery, setSearchQuery } = useContext(NoteContext);

  return (
    <form
      className={classNames(
        'SearchBox',
        { 'SearchBox--hasValue': searchQuery },
      )}
    >
      <label className="SearchBox__label">
        <input
          type="text"
          name="search"
          value={searchQuery}
          placeholder="Search"
          className="SearchBox__input"
          onChange={e => setSearchQuery(e.target.value)}
        />

        <span className="SearchBox__icon" />
      </label>
    </form>
  );
};
