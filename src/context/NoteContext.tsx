import React, {
  FC, useEffect, useMemo, useState,
} from 'react';
import { initDB, useIndexedDB } from 'react-indexed-db';
import { DBConfig } from '../DBConfig';
import { Note } from '../types/Note';

initDB(DBConfig);

interface State {
  notes: Note[],
  selectedNote: Note | null,
  isEditable: boolean,
  searchQuery: string,

  setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
  setSelectedNote: React.Dispatch<React.SetStateAction<Note | null>>,
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>,
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>,

  newNote: () => void,
  deleteNote: (id: number) => void,
  updateNote: (updatedNote: Note) => void,
}

const initialState: State = {
  notes: [],
  selectedNote: null,
  isEditable: false,
  searchQuery: '',

  setNotes: () => {},
  setSelectedNote: () => {},
  setIsEditable: () => {},
  setSearchQuery: () => {},

  newNote: () => {},
  deleteNote: () => {},
  updateNote: () => {},
};

export const NoteContext = React.createContext(initialState);

type Props = {
  children: JSX.Element;
};

export const NoteProvider: FC<Props> = ({ children }) => {
  const db = useIndexedDB('notes');
  const [notes, setNotes] = useState(initialState.notes);
  const [selectedNote, setSelectedNote] = useState(initialState.selectedNote);
  const [isEditable, setIsEditable] = useState(initialState.isEditable);
  const [searchQuery, setSearchQuery] = useState(initialState.searchQuery);

  const getNote = async (id: number): Promise<Note> => {
    const note = await db.getByID(id);

    return note;
  };

  const newNote = async () => {
    await db.add({ title: '', date: new Date(), text: '' })
      .then(e => {
        getNote(e).then(n => setSelectedNote(n));
      });

    setIsEditable(true);
  };

  const deleteNote = (id: number) => {
    db.deleteRecord(id);
  };

  const updateNote = (updatedNote: Note) => {
    db.update(updatedNote)
      .then(() => {
        setSelectedNote(updatedNote);
      });
  };

  const contextValue = useMemo(() => {
    return {
      notes,
      selectedNote,
      isEditable,
      searchQuery,

      setNotes,
      setSelectedNote,
      setIsEditable,
      setSearchQuery,

      newNote,
      deleteNote,
      updateNote,
    };
  }, [notes, selectedNote, isEditable, db]);

  useEffect(() => {
    db.getAll().then(result => {
      setNotes(result);
    });
  }, [db]);

  return (
    <NoteContext.Provider value={contextValue}>
      {children}
    </NoteContext.Provider>
  );
};
