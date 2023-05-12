import ReactDOM from 'react-dom/client';
import App from './App';
import { NoteProvider } from './context/NoteContext';

import './styles/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <NoteProvider>
    <App />
  </NoteProvider>,
);
