import { useNotes } from "../../../context/notes_context";

export const NotesCard = ({
  id,
  title,
  text,
  isPinned,
  isImportant,
  isBinPage,
  isImportantPage,
}) => {
  const { notesDispatch } = useNotes();

  return (
    <div className="w-64 border border-neutral-300 p-3 rounded-md shadow-sm relative bg-white">
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="font-medium flex-1">{title}</p>

        {/* Hide Pin in Bin + Important pages */}
        {!isBinPage && !isImportantPage && (
          <button onClick={() => notesDispatch({ type: "PIN", payload: id })}>
            <span
              className={`material-symbols-outlined cursor-pointer ${
                isPinned ? "text-yellow-500" : "text-gray-500"
              }`}
            >
              push_pin
            </span>
          </button>
        )}

        {/* Hide Star in Bin */}
        {!isBinPage && (
          <button
            onClick={() => notesDispatch({ type: "IMPORTANT", payload: id })}
          >
            <span
              className={`material-symbols-outlined cursor-pointer ${
                isImportant ? "text-red-500" : "text-gray-500"
              }`}
            >
              star
            </span>
          </button>
        )}
      </div>

      {/* Text */}
      <p className="mt-2 text-sm text-gray-700">{text}</p>

      {/* Actions */}
      <div className="absolute bottom-2 right-2 flex gap-2">
        {!isBinPage ? (
          // Normal actions
          <button
            onClick={() => notesDispatch({ type: "DELETE", payload: id })}
            className="text-gray-500 hover:text-red-600"
          >
            <span className="material-symbols-outlined">delete</span>
          </button>
        ) : (
          // Bin actions
          <>
            <button
              onClick={() =>
                notesDispatch({ type: "RESTORE_FROM_BIN", payload: id })
              }
              className="text-green-600 hover:text-green-800"
            >
              <span className="material-symbols-outlined">restore</span>
            </button>

            <button
              onClick={() =>
                notesDispatch({ type: "PERMANENT_DELETE", payload: id })
              }
              className="text-red-500 hover:text-red-700"
            >
              <span className="material-symbols-outlined">delete_forever</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};




