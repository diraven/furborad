import React from 'react';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import System from "./System";
import Notes from "./Notes";
import Header from "./Header";
import Rats from "./Rats";
import Call from "./Call";

export default function Case({"case": the_case}) {
    return (
        <Card border={"primary"}>
            <Header case={the_case}/>
            <Card.Body>
                <System system={the_case.system}/>

                <ButtonGroup size={"sm"} aria-label="Basic example">
                    <Call name={"mmconf"} value={the_case.mmconf}/>
                    <Call name={"sysconf"} value={the_case.sysconf}/>
                    <Call name={"prep"} value={the_case.prep}/>
                    <Call name={"fuel"} value={the_case.prep}/>
                </ButtonGroup>

                <Rats rats={the_case.rats}/>
                <Notes notes={the_case.notes}/>

                {/*<Card.Link href="#">Card Link</Card.Link>*/}
                {/*<Card.Link href="#">Another Link</Card.Link>*/}
            </Card.Body>
        </Card>
    );
}
