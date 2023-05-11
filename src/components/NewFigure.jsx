import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Header from "./Header";
import Categories from "./Categories";

export default function NewFigure() {
  const [openModal, setOpenModal] = useState(false);
  const [figure, setFigure] = useState();
  const [bio, Setbio] = useState();
  const [image, Setimage] = useState();

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };


useEffect(() => {
  fetch("https://how-they-look-today-api.web.app/figures", {
    method: "POST",
    headers: { 
        "Content-Type": "application/json",
        "Authorization":
    },
    body: JSON.stringify( {figure, bio, image} )
})
.then(resp => resp.json())
.then(data => {
    if(data.message) {
        alert(data.message)
        return
    }
    setOpenModal(data)
    navigate("/")
})
.catch(alert)
}


  return (
    <>
    <div>
        <Button variant="primary" onClick={handleOpen}>
        Add Figure
        </Button>
    </div>    

      <Modal show={openModal} onHide={handleClose}>

        <Modal.Header className="header-text" closeButton>
          <Modal.Title>Add New Figure</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formNewFigure">
        <Form.Label>New Figure Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBio">
        <Form.Label>Add Short Biography</Form.Label>
        <Form.Control type="password" placeholder="3-4 sentences" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formImage">
        <Form.Label>Add Image</Form.Label>
        <Form.Control type="text" placeholder="picture" />
      </Form.Group>

      {/* <label htmlFor="poster">Poster
                <input
                    type="text"
                    value={poster}
                    onChange={ (e) => { setPoster(e.target.value)}} />
            </label> */}

      </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" type="submit" onClick={handleClose}>
            Enter
          </Button>
        </Modal.Footer>

        </Modal>
    </>

  )

}

