import { useContext } from 'react';
import classNames from 'classnames';

import { NoteContext } from './components/NoteContext';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Workspace } from './components/Workspace';

import './App.scss';

const App = () => {
  const { selectedNote, searchQuery } = useContext(NoteContext);

  return (
    <div
      className={classNames(
        'App',
        { 'App--unselected-note': !selectedNote || searchQuery },
      )}
    >
      <Header />

      <main className="App__main">
        <div className="App__sidebar">
          <Sidebar />
        </div>

        <div className="App__workspace">
          <Workspace />
        </div>
      </main>
    </div>
  );
};

export default App;
