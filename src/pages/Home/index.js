import { Fragment } from "react/jsx-runtime";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { useNotes } from "../../context/notes_context";
import { NotesCard } from "../../components/Navbar/NotesCard";

export const Home = () => {
  const { title, text, notes, notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const onAddClick = () => {
    notesDispatch({
      type: "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };

 
  const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-6 p-0">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1">
          {/* Input box */}
          <div className="w-[400px] border rounded-md shadow-sm p-3 relative">
            <input
              value={title}
              onChange={onTitleChange}
              className="w-full border-b border-neutral-300 focus:outline-none p-2"
              placeholder="Enter title"
            />

            <textarea
              value={text}
              onChange={onTextChange}
              className="w-full mt-2 border-b border-neutral-300 focus:outline-none p-2 resize-none"
              placeholder="Enter Text"
            />

            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className="absolute bottom-2 right-2 bg-indigo-700 text-white rounded-full  px-2 py-1 hover:bg-indigo-800 transition"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>

          {/* Pinned Notes */}
          {pinnedNotes?.length > 0 && (
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-3">Pinned Notes</h3>
              <div className="flex flex-wrap gap-4">
                {pinnedNotes.map(({ id, title, text, isPinned }) => (
                  <NotesCard
                    key={id}
                    id={id}
                    title={title}
                    text={text}
                    isPinned={isPinned}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other Notes */}
          {otherNotes?.length > 0 && (
            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-3">NOTES:-</h3>
              <div className="flex flex-wrap gap-4">
                {otherNotes.map(({ id, title, text, isPinned }) => (
                  <NotesCard
                    key={id}
                    id={id}
                    title={title}
                    text={text}
                    isPinned={isPinned}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </Fragment>
  );
};
