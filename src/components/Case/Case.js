import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import CaseRat from "../CaseRat";

function Case() {
    return (
        <Card border={"primary"}>
            <Card.Body>
                <Card.Title><strong>#1</strong> DiRaven</Card.Title>
                <Card.Subtitle className="mb-2">PC EN</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-warning">COL 285 SECTOR JT-H C10-3</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">35 ly from fuelum</Card.Subtitle>
                <strong>Rats</strong>
                <Card.Text>
                    <CaseRat/>
                    <CaseRat/>
                    <CaseRat/>

                    <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows="3" value={"chat line 1\nchat line 2"}/>
                        </Form.Group>
                    </Form>
                </Card.Text>
                {/*<Card.Link href="#">Card Link</Card.Link>*/}
                {/*<Card.Link href="#">Another Link</Card.Link>*/}
            </Card.Body>
        </Card>
    );
}

export default Case;
