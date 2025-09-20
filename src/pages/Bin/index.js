import { Fragment } from "react/jsx-runtime";
import { Sidebar } from "../../components/Sidebar";
import { Navbar } from "../../components/Navbar";
import { useNotes } from "../../context/notes_context";
import { NotesCard } from "../../components/Navbar/NotesCard";

export const Bin = () => {
  const { bin } = useNotes();

  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-4">
        <Sidebar />
        <div className="flex flex-col w-screen mt-7 p-4">
          <h2 className="text-lg font-semibold mb-4">🗑️ Bin</h2>

          {bin?.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {bin.map(({ id, title, text, isPinned, isImportant }) => (
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                  isImportant={isImportant}
                  isBinPage={true} // disable pin/star + show restore/delete_forever
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No notes in Bin.</p>
          )}
        </div>
      </main>
    </Fragment>
  );
};
