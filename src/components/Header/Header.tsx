import { ControlButtons } from '../ControlButtons';
import { SearchBox } from '../SearchBox';

import './Header.scss';

export const Header = () => {
  return (
    <header className="Header">
      <div className="Header__wrapper">
        <ControlButtons />

        <SearchBox />
      </div>
    </header>
  );
};
