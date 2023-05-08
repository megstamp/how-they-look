import { Container, Row, Col } from "react-bootstrap";

export default function Cards() {

    return(
        <section>
            <Container className="card-container">
                <Row className="text-center">
                    <Col>
                    <h2>Artists</h2>
                    </Col>

                    <Col>
                    <h2>Tudors</h2>
                    </Col>

                    <Col>
                    <h2>Female Leaders</h2>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}