import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function CaseRat() {
    return (
        <div className={"p-1"}>
            <p className={"m-0"}>Fuel Rat 1</p>
            <p className={"m-0"}>
                <ButtonGroup size={"sm"} aria-label="Basic example">
                    <Button variant="secondary">fr</Button>
                    <Button variant="secondary">sysconf</Button>
                    <Button variant="secondary">mmconf</Button>
                    <Button variant="secondary">wr</Button>
                    <Button variant="secondary">bc</Button>
                    <Button variant="secondary">fuel</Button>
                </ButtonGroup>
            </p>
        </div>
    );
}

export default CaseRat;
