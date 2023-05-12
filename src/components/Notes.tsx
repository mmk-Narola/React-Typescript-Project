import * as React from "react";
import { INote } from "../models/note.model";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

interface INotesProps {
  note: INote;
  handleDelete: (id: number) => void;
}

const Notes: React.FC<INotesProps> = ({ note, handleDelete }) => {
  return (
    <>
      <Card style={{ backgroundColor: note.color }} className="mt-4">
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>
            <strong> Agenda:</strong>
            {note.text}
          </Card.Text>
          <Card.Text>{note.date}</Card.Text>
          <Button variant="danger" onClick={() => handleDelete(note.id)}>
            Delete
          </Button>{" "}
        </Card.Body>
      </Card>
    </>
  );
};

export default Notes;
