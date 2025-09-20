
import { createContext, useContext, useReducer, useEffect } from "react";
import { notesReducer } from "../reducers/notesReducer";

const NotesContext = createContext();


const initialState = {
  title: "",
  text: "",
  notes: [],
  bin: [], 
};

export const NotesProvider = ({ children }) => {
  const [state, notesDispatch] = useReducer(notesReducer, initialState);

  
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