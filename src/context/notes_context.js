// notes_context.js
import { createContext, useContext, useReducer, useEffect } from "react";
import { notesReducer } from "../reducers/notesReducer";

const NotesContext = createContext();

// ✅ Make sure bin is initialized
const initialState = {
  title: "",
  text: "",
  notes: [],
  bin: [], // ← This is crucial!
};

export const NotesProvider = ({ children }) => {
  const [state, notesDispatch] = useReducer(notesReducer, initialState);

  // Load from localStorage on mount
  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    const savedBin = localStorage.getItem("bin");
    
    if (savedNotes) {
      notesDispatch({ 
        type: "LOAD_NOTES", 
        payload: JSON.parse(savedNotes) 
      });
    }
    
    if (savedBin) {
      notesDispatch({ 
        type: "LOAD_BIN", 
        payload: JSON.parse(savedBin) 
      });
    }
  }, []);

  // Save to localStorage whenever notes or bin changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(state.notes));
  }, [state.notes]);

  useEffect(() => {
    localStorage.setItem("bin", JSON.stringify(state.bin));
  }, [state.bin]);

  return (
    <NotesContext.Provider value={{ ...state, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotes must be used within NotesProvider");
  }
  return context;
};