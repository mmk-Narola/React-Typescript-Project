import * as React from "react";
import { INote } from "../models/note.model";
import Notes from "./Notes";

interface INoteListProps {
  notes: INote[];
  setNotes: React.Dispatch<React.SetStateAction<INote[]>>;
}

const NoteList: React.FC<INoteListProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: number) => {
    console.log(id);
    const filterData = notes.filter((data) => data.id !== id);
    console.log("Filter....", filterData);
    setNotes(filterData);
  };

  return (
    <>
      {notes && notes.length > 0 ? (
        notes.map((noteItem) => {
          return (
            <>
              <Notes
                key={noteItem.id}
                note={noteItem}
                handleDelete={handleDelete}
              />
            </>
          );
        })
      ) : (
        <>
          <h2 className="text-center mt-5">List Not Found</h2>
        </>
      )}
    </>
  );
};

export default NoteList;

// tsrsfc
