import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Image,
  Accordion,
} from "react-bootstrap";

export default function Categories({
  artists,
  setArtists,
  tudors,
  setTudors,
  femaleLeaders,
  setFemaleLeaders,
}) {
  //passing props//
  const [openModal, setOpenModal] = useState(false); // creating state variables//
  const [thisFigure, setThisFigure] = useState();

  const handleOpen = (person) => {
    setThisFigure(person);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const breakCategories = (data) => {
    setArtists(data.filter((person) => person.category === "Artists"));
    setTudors(data.filter((person) => person.category === "Tudors"));
    setFemaleLeaders(
      data.filter((person) => person.category === "Female Leaders")
    );
  };

  useEffect(() => {
    //GET request
    fetch("https://how-they-look-today-api.web.app/figures") //connecting to the backend
      .then((resp) => resp.json())
      .then(breakCategories)
      .catch(alert); //filtering all the figures by category and putting them into the state variables
  }, []);

  const handleDelete = async () => {
    const response = await fetch(
      `https://how-they-look-today-api.web.app/figures/${thisFigure.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    breakCategories(data);
    handleClose();
  };

  return (
    <>
      <section className="category-page">
        <Container className="card-container">
          <Row className="d-flex flex-row text-center">
            <Col sm={12} md={4} className="category-accordian">
              <Accordion>
                <Accordion.Item
                  style={{ backgroundColor: "#ffffff99" }}
                  eventKey="0"
                >
                  <Accordion.Header>
                  <Image
                    fluid
                    src="/images/image-artist.webp"
                    className="d-block"
                    />
                  </Accordion.Header>
                  
                  <Accordion.Body>
                    <h3>Artists</h3>
                    {!artists
                      ? "loading"
                      : artists.map((artist) => (
                          <Button 
                            class="bg-secondary"
                            onClick={() => handleOpen(artist)}
                            key={artist.id}
                          >
                            {artist.person}
                          </Button>
                        ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col sm={12} md={4} className="category-accordian">
              <Accordion>
                <Accordion.Item
                  style={{ backgroundColor: "#ffffff99" }}
                  eventKey="0"
                >
                  <Accordion.Header>
                    <Image
                      fluid
                      src="/images/image-tudors.webp"
                      className="d-block"
                    />
                  </Accordion.Header>
                  <Accordion.Body>
                    <h3>Tudors</h3>
                    {!tudors
                      ? "loading"
                      : tudors.map((tudor) => (
                          <Button
                            onClick={() => handleOpen(tudor)}
                            key={tudor.id}
                          >
                            {tudor.person}
                          </Button>
                        ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col sm={12} md={4} className="category-accordian">
              <Accordion>
                <Accordion.Item
                  style={{ backgroundColor: "#ffffff99" }}
                  eventKey="0"
                >
                  <Accordion.Header>
                    <Image
                      fluid
                      src="/images/image-women.webp"
                      className="d-block"
                    />
                  </Accordion.Header>
                  <Accordion.Body>
                    <h3>Female Leaders</h3>
                    {!femaleLeaders
                      ? "loading"
                      : femaleLeaders.map((femaleLeader) => (
                          <Button
                            onClick={() => handleOpen(femaleLeader)}
                            key={femaleLeader.id}
                          >
                            {femaleLeader.person}
                          </Button>
                        ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Modal size="lg" show={openModal} onHide={handleClose}>
              <Modal.Header closeButton>
                <h3>{thisFigure?.person}</h3>
              </Modal.Header>
              <Modal.Body>
                <Image fluid src={thisFigure?.picture} alt={thisFigure?.name} />
                <p className="fs-5 text-start mt-4 px-5">{thisFigure?.bio}</p>
              </Modal.Body>
              <Modal.Footer show={openModal} onHide={handleClose}>
                <Button type="submit" change onClick={handleDelete}>
                  Delete
                </Button>
              </Modal.Footer>
            </Modal>
          </Row>
        </Container>
      </section>
    </>
  );
}
