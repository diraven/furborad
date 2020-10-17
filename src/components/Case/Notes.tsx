import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default function Notes({notes}: {notes: string[]}) {
    return (
        <div className='pre-scrollable' style={{'height': 300}}>
            <Table striped bordered hover size='sm'>
                <tbody>
                    {React.Children.map(notes, (n) => <tr>
                        <td>{n}</td>
                    </tr>)}
                    <tr>
                        <td>
                            <Form>
                                <Form.Group controlId='formBasicEmail'>
                                    <Form.Control
                                        type='text'
                                        placeholder='Note'
                                    />
                                </Form.Group>
                            </Form>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

Notes.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.string),
};
