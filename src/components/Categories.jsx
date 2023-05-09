import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


//fetch will be inside useEffect
//data  .filter by category
//in useEffect once all db is returned, .filter to separate and store like categories, we are going to store them in 3 state variables


export default function Categories() {
    const [artists, setArtists] = useState()
    const [tudors, setTudors] = useState()
    const [femaleLeaders, setFemaleLeaders] = useState()
    

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
                                    <div 
                                        key={artist.id}>
                                        {artist.person}
                                    </div>) )}
                    </Col>

                    <Col sm={12} md={4}>
                    <h2>Tudors</h2>
                        {!tudors
                        ? "loading"
                            : tudors.map(
                                (tudors) => (
                                    <div
                                        key={tudors.id}>
                                            {tudors.person}
                                    </div>))}
                    </Col>

                    <Col sm={12} md={4}>
                    <h2>Female Leaders</h2>
                        {!femaleLeaders
                        ? "loading"
                            : femaleLeaders.map(
                                (femaleLeaders) => (
                                    <div
                                        key={femaleLeaders.id}>
                                            {femaleLeaders.person}
                                    </div>)  ) }
                    </Col>

                </Row>
            </Container>
        </section>
    )
}