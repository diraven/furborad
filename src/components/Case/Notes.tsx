import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export default function Notes({notes}: { notes: string[] }) {
    return (
        <>
            <div className='pre-scrollable' style={{'height': 300}}>
                <Table striped bordered hover size='sm'>
                    <tbody>
                        {React.Children.map(notes, (n) => <tr>
                            <td>{n}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
            <Form>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Add Note'
                    />
                </Form.Group>
            </Form>
        </>
    );
}
