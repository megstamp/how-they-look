import { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button, Image, Card } from "react-bootstrap";


export default function Categories() {
  const [artists, setArtists] = useState();
  const [tudors, setTudors] = useState();
  const [femaleLeaders, setFemaleLeaders] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [thisFigure, setThisFigure] = useState();

  const handleOpen = (person) => {
    setThisFigure(person);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    fetch("https://how-they-look-today-api.web.app/figures") //connecting to the backend
      .then((resp) => resp.json())
      .then((data) => {
        setArtists(data.filter((person) => person.category === "Artists"));
        setTudors(data.filter((person) => person.category === "Tudors"));
        setFemaleLeaders(
          data.filter((person) => person.category === "Female Leaders")
        );
      })
      .catch(alert); //filtering all the figures by category and putting them into the state variables
  }, []);

  return (
    <section className="category-page">
      <Container className="card-container">
        <Row className="text-center">
          <Col sm={12} md={4}>
            <Card sm={12} md={4} style={{ backgroundColor: '#ffffff66'}}>
              <Card.Img variant="top" src="/images/bg_artisti_02.jpg" />
              <Card.Body>
                <Card.Title>Artists</Card.Title>
                <Card.Text>
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
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={4}>
            <h2>Tudors</h2>
            {!tudors
              ? "loading"
              : tudors.map((tudor) => (
                  <Button onClick={() => handleOpen(tudor)} key={tudor.id}>
                    {tudor.person}
                  </Button>
                ))}
          </Col>

          <Col sm={12} md={4}>
            <h2>Female Leaders</h2>
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
          </Col>
        </Row>
        <Modal size="lg" show={openModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <h3>{thisFigure?.person}</h3>
          </Modal.Header>
          <Modal.Body>
            <Image fluid src={thisFigure?.picture} alt={thisFigure?.name} />
            <p className="fs-5 text-start mt-4 px-5">{thisFigure?.bio}</p>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}
