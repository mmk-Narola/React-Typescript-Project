import { useState } from "react";
import { INote } from "./models/note.model";
import Header from "./components/Header";
import { Col, Container, Row } from "react-bootstrap";
import NoteList from "./components/NoteList";
import CreateNotes from "./components/CreateNotes";

function App() {
  const [notes, setNotes] = useState<INote[]>([]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NoteList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
