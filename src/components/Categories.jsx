import { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

// function BlockButton() {
//     return (
//       <div>
//         <Button variant="primary" size="lg">
//           Block level button
//         </Button>
//         <Button variant="secondary" size="lg">
//           Block level button
//         </Button>
//       </div>
//     );
//   }
//   export default BlockButton;


export default function Categories() {
    const [artists, setArtists] = useState()
    const [tudors, setTudors] = useState()
    const [femaleLeaders, setFemaleLeaders] = useState()
    const [openModal, setOpenModal] = useState(false)
    const [thisFigure, setThisFigure] = useState()

    const handleOpen = (person) => {
        setThisFigure(person)
        setOpenModal(true)
    }

    const handleClose = () => {
        setOpenModal(false)
    }


    useEffect(() => {
        fetch("https://how-they-look-today-api.web.app/figures")
        .then(resp => resp.json())
        .then(data => {
            setArtists(data.filter(person => person.category === "Artists"))
            setTudors(data.filter(person => person.category === "Tudors"))
            setFemaleLeaders(data.filter(person => person.category === "Female Leaders"))} )
        .catch(alert)
}, []);
    

    return(
        <section>
            <Container className="card-container">
                <Row className="text-center">

                    <Col sm={12} md={4}>
                        <h2>Artists</h2>
                            {!artists
                            ? "loading"
                                : artists.map(
                                    (artist) => (
                                        <Button class="bg-secondary" 
                                        onClick={
                                            () => handleOpen(artist)}
                                            key={artist.id}>
                                            {artist.person}
                                        </Button>) )}
                    </Col>

                    <Col sm={12} md={4}>
                        <h2>Tudors</h2>
                            {!tudors
                            ? "loading"
                                : tudors.map(
                                    (tudor) => (
                                        <Button onClick={
                                            () => handleOpen(tudor)}
                                            key={tudor.id}>
                                            {tudor.person}
                                        </Button>))}
                    </Col>

                    <Col sm={12} md={4}>
                        <h2>Female Leaders</h2>
                            {!femaleLeaders
                            ? "loading"
                                : femaleLeaders.map(
                                    (femaleLeader) => (
                                        <Button onClick={
                                            () => handleOpen(femaleLeader)}
                                            key={femaleLeader.id}>
                                            {femaleLeader.person}
                                        </Button>)  ) }
                    </Col>

                </Row>
            <Modal 
                size="lg"
                  show={openModal} onHide={handleClose}> 
                <Modal.Body><p>{thisFigure?.person}</p> 
                <img src={thisFigure?.picture} alt={thisFigure?.name} />
                {thisFigure?.bio}
                </Modal.Body>

            </Modal>
            </Container> 

        </section>
    )
}