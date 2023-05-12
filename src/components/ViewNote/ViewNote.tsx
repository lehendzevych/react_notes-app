import {
  FC, useContext, useState, useEffect, useRef,
} from 'react';
import ReactMarkdown from 'react-markdown';
import { NoteContext } from '../../context/NoteContext';
import { Note } from '../../types/Note';

import './ViewNote.scss';

type Props = {
  note: Note;
};

export const ViewNote: FC<Props> = ({ note }) => {
  const { isEditable, updateNote } = useContext(NoteContext);
  const [title, setTitle] = useState<string>(note.title);
  const [text, setText] = useState<string>(note.text);
  const textInput = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setTitle(note.title);
    setText(note.text);
  }, [note.id]);

  useEffect(() => {
    if (textInput.current && isEditable) {
      textInput.current.focus();
    }
  }, [note.id, isEditable]);

  const getDateString = (date: Date) => {
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    const time = date.toLocaleString(
      'en-US', { hour: 'numeric', minute: 'numeric', hour12: true },
    );

    return `${month} ${day}, ${year} at ${time}`;
  };

  return (
    <div className="ViewNote">
      <span className="ViewNote__date">
        {getDateString(note.date)}
      </span>

      {!isEditable ? (
        <>
          <h1 className="ViewNote__title">
            {note.title ? note.title : 'No title'}
          </h1>

          <p className="ViewNote__text">
            <ReactMarkdown>
              {note.text ? note.text : 'Empty note'}
            </ReactMarkdown>
          </p>
        </>
      ) : (
        <>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            className="ViewNote__input ViewNote__title"
            onChange={(e) => {
              setTitle(e.target.value);
              updateNote({ ...note, title: e.target.value });
            }}
          />

          <textarea
            ref={textInput}
            name="markdown-text"
            value={text}
            placeholder="Note"
            className="ViewNote__input ViewNote__text"
            onChange={(e) => {
              setText(e.target.value);
              updateNote({ ...note, text: e.target.value });
            }}
          />
        </>
      )}
    </div>
  );
};
