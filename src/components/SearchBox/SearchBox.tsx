import {
  useContext, useEffect, useRef, useState,
} from 'react';
import classNames from 'classnames';
import { NoteContext } from '../NoteContext';

import './SearchBox.scss';

export const SearchBox = () => {
  const { searchQuery, setSearchQuery } = useContext(NoteContext);
  const [onFocus, setOnFocus] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = searchInput.current;

    if (input) {
      input.addEventListener('focus', () => {
        setOnFocus(true);
      });

      input.addEventListener('blur', () => {
        setOnFocus(false);
      });
    }
  }, []);

  return (
    <form
      className={classNames(
        'SearchBox',
        { 'SearchBox--onFocus': onFocus || searchQuery },
      )}
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="SearchBox__label">
        <input
          ref={searchInput}
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
