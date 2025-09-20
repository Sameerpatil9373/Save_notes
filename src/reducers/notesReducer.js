import { v4 as uuid } from "uuid";

export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return { ...state, title: payload };

    case "TEXT":
      return { ...state, text: payload };

    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: uuid(),
            title: state.title,
            text: state.text,
            isPinned: false,
            isImportant: false,
          },
        ],
      };

    case "CLEAR_INPUT":
      return { ...state, title: "", text: "" };

    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload ? { ...note, isPinned: !note.isPinned } : note
        ),
      };

    case "IMPORTANT":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload
            ? { ...note, isImportant: !note.isImportant }
            : note
        ),
      };

    case "DELETE":
      const noteToDelete = state.notes.find((n) => n.id === payload);
      console.log("Deleting note:", noteToDelete); 
      console.log("Current bin:", state.bin); 
      
      return {
        ...state,
        bin: [...state.bin, noteToDelete],
        notes: state.notes.filter((n) => n.id !== payload),
      };

    case "RESTORE_FROM_BIN":
      const noteToRestore = state.bin.find((n) => n.id === payload);
      return {
        ...state,
        notes: [...state.notes, noteToRestore],
        bin: state.bin.filter((n) => n.id !== payload),
      };

    case "PERMANENT_DELETE":
      return {
        ...state,
        bin: state.bin.filter((n) => n.id !== payload),
      };

 
    case "LOAD_NOTES":
      return {
        ...state,
        notes: payload,
      };

    case "LOAD_BIN":
      return {
        ...state,
        bin: payload,
      };

    default:
      return state;
  }
};

