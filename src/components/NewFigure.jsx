import { useState } from "react";
import { Button, Modal, Form, Container, Row, Col } from "react-bootstrap";

export default function NewFigure({ setArtists, setFemaleLeaders, setTudors }) {
  //destructuring props//
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] = useState();
  const [person, setPerson] = useState("Cleopatra");
  const [bio, setBio] = useState("Cleopatra VII, the final pharaoh of ancient Egypt, ruled with beauty, intelligence, and political acumen. She formed alliances with Julius Caesar and Mark Antony, strategically navigating the complexities of Roman politics. Despite her tragic end, Cleopatra's reign and captivating legacy have made her an enduring symbol of power and intrigue.");
  const [picture, setPicture] = useState("https://firebasestorage.googleapis.com/v0/b/how-they-look-today-api.appspot.com/o/cleopatra.jpeg?alt=media");

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const addNew = () => {
    fetch("https://how-they-look-today-api.web.app/figures", {
      //connecting to the backend
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ person, category, bio, picture }), // this is what goes in the body of the request
    })
      .then((resp) => resp.json())
      .then((data) => {
        // set your categories just like in useEffect in Categories.jsx
        setArtists(data.filter((person) => person.category === "Artists"));
        setTudors(data.filter((person) => person.category === "Tudors"));
        setFemaleLeaders(
          data.filter((person) => person.category === "Female Leaders")
        );
      })
      .catch(alert)
      .finally(handleClose);
  };

  return (
    <>
      <section className="category-page">
        <Container className="card-container">
          <Row className="d-flex flex-row text-center">
            <Col md={{ span: 3, offset: 9 }}>
            <button className="button-8" onClick={handleOpen} role="button">
              Add Figure
            </button>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal show={openModal} onHide={handleClose}>
        <Modal.Header className="header-text" closeButton>
          <Modal.Title>Add New Figure</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formNewFigure">
              <Form.Label>New Figure</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cleopatra"
                value={person}
                onChange={(e) => setPerson(e.target.value)}
              />
            </Form.Group>

            <Form.Select
              aria-label="Default select example"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Open this select menu</option>
              <option>Artists</option>
              <option>Tudors</option>
              <option>Female Leaders</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="formBio">
              <Form.Label>Add Short Biography</Form.Label>
              <Form.Control
                type="type"
                placeholder="Cleopatra VII, the final pharaoh of ancient Egypt, ruled with beauty, intelligence, and political acumen. She formed alliances with Julius Caesar and Mark Antony, strategically navigating the complexities of Roman politics. Despite her tragic end, Cleopatra's reign and captivating legacy have made her an enduring symbol of power and intrigue."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImage">
              <Form.Label>Add Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="picture"
                value={picture}
                onChange={(e) => setPicture(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button type="submit" change onClick={addNew}>
            Enter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
