export const DBConfig = {
  name: 'NotesDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'notes',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
        { name: 'date', keypath: 'date', options: { unique: false } },
        { name: 'text', keypath: 'text', options: { unique: false } },
      ],
    },
  ],
};
