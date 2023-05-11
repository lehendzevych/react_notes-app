import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Workspace } from './components/Workspace';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="App__main">
        <Sidebar />

        <Workspace />
      </main>
    </div>
  );
}

export default App;
