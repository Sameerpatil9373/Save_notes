import { Fragment } from "react/jsx-runtime";
import { Sidebar } from "../../components/Sidebar";
import { Navbar } from "../../components/Navbar";
import { useNotes } from "../../context/notes_context";
import { NotesCard } from "../../components/Navbar/NotesCard";

export const Important = () => {
  const { notes } = useNotes();
  const importantNotes = notes.filter((note) => note.isImportant);

  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-4">
        <Sidebar />
        <div className="flex flex-col w-screen mt-7 p-4">
          <h2 className="text-lg font-semibold mb-4">⭐ Important Notes</h2>

          {importantNotes?.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {importantNotes.map(({ id, title, text, isPinned, isImportant }) => (
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                  isImportant={isImportant}
                  isImportantPage={true} // ✅ hides pin
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No Important notes yet.</p>
          )}
        </div>
      </main>
    </Fragment>
  );
};
