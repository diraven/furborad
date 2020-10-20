import React, {useEffect, useRef} from 'react';
import Table from 'react-bootstrap/Table';


interface IMessagesProps {
    messages: string[]
}

const formatters = [
    [/\d+j/gi, '<strong class="text-info">$&</strong>'],
    [/^[^:]+:/gi, '<strong class="text-info">$&</strong>'],
    [/#\d+/gi, '<strong class="text-info">$&</strong>'],
    [
        /stdn|fr[+-]?|wr[+-]?|bc[+1]/gi,
        '<strong class="text-info">$&</strong>',
    ],
]
function formatMessage(m: string): string {
    // @ts-ignore
    formatters.forEach(formatter => m = m.replace(formatter[0], formatter[1]))
    return m
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
        <div ref={scrollableRef} className='overflow-auto border border-primary messages h-100'>
            <Table striped borderless hover size='sm' className='m-0'>
                <tbody>
                    {
                        (
                            messages.length > 0 &&
                            React.Children.map(messages, (m) => <tr>
                                <td dangerouslySetInnerHTML={{
                                    __html: formatMessage(m)
                                }}/>
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
