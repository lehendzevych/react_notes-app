import { ListItem } from '../ListItem';
import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <aside className="Sidebar">
      <ul className="Sidebar__list">
        <li className="Sidebar__list-item">
          <ListItem />
        </li>

        <li className="Sidebar__list-item">
          <ListItem />
        </li>

        <li className="Sidebar__list-item">
          <ListItem />
        </li>
      </ul>
    </aside>
  );
};
