import React, {useEffect, useRef} from 'react';
import Table from 'react-bootstrap/Table';

interface IMessagesProps {
    messages: string[]
}

export default function Messages(props: IMessagesProps) {
    const {messages} = props

    const scrollableRef = useRef(null)

    const scrollToBottom = () => {
        if (scrollableRef.current) {
            // @ts-ignore
            scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
        }
    }

    useEffect(scrollToBottom, [messages]);

    return (
        <div ref={scrollableRef}  className='overflow-auto border border-primary messages h-100'>
            <Table striped borderless hover size='sm' className='m-0'>
                <tbody>
                    {
                        (
                            messages.length > 0 &&
                            React.Children.map(messages, (n) => <tr>
                                <td>{n}</td>
                            </tr>)
                        ) ||
                        <tr>
                            <td>No events</td>
                        </tr>
                    }
                </tbody>
            </Table>
        </div>
    );
}
