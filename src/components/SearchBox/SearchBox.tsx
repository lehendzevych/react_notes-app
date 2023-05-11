import { useState } from 'react';
import classNames from 'classnames';

import './SearchBox.scss';

export const SearchBox = () => {
  const [query, setQuery] = useState<string>('');

  return (
    <form
      className={classNames('SearchBox', { 'SearchBox--hasValue': query })}
    >
      <label className="SearchBox__label">
        <input
          type="text"
          name="search"
          value={query}
          placeholder="Search"
          className="SearchBox__input"
          onChange={e => setQuery(e.target.value)}
        />

        <span className="SearchBox__icon" />
      </label>
    </form>
  );
};
