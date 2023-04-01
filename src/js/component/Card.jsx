import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Galery() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-md-6 col-12 my-1 mb-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-md-6 col-12 my-1 mb-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-md-6 col-12 my-1 mb-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-md-6 col-12 my-1 mb-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Galery;
