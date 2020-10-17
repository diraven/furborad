import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export default function Notes({notes}: { notes: string[] }) {
    return (
        <>
            <div className='pre-scrollable border border-dark' style={{'height': 300}}>
                <Table striped borderless hover size='sm'>
                    <tbody>
                        {React.Children.map(notes, (n) => <tr>
                            <td>{n}</td>
                        </tr>)}
                    </tbody>
                </Table>
            </div>
            <Form className='pt-3'>
                <Form.Group>
                    <Form.Control
                        size="sm"
                        type='text'
                        placeholder='Add Note'
                    />
                </Form.Group>
            </Form>
        </>
    );
}
