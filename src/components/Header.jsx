import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";

export default function Header() {


return(
    <main>
        <Container className="container-header">  
            <Row className="d-flex justify-content-center">
                <Col md={8}>
                <h1 className="text-center">What would these famous historical figures look like today?</h1>
                </Col>
            </Row>
        </Container>

    </main>

    


)
}