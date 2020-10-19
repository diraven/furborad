import React from 'react';
import Table from 'react-bootstrap/Table';

interface IMessagesProps {
    messages: string[]
}

export default function Messages(props: IMessagesProps) {
    const {messages} = props
    return (
        <>
            <div className='pre-scrollable h-100 w-100 border border-dark messages'>
                <Table striped borderless hover size='sm' className='m-0'>
                    <tbody>
                        {
                            messages.length > 0 &&
                            React.Children.map(messages, (n) => <tr>
                                <td>{n}</td>
                            </tr>) ||
                            <tr>
                                <td>No events</td>
                            </tr>
                        }
                    </tbody>
                </Table>
            </div>
        </>
    );
}
