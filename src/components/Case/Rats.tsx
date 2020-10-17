import React from 'react';
import Rat, {IRat} from './Rat';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

export default function Rats({rats}: {rats: IRat[]}) {
    return (
        <Card.Text>
            {rats.map((r) => <Rat key={r.irc_nick} rat={r}/>)}
        </Card.Text>
    );
}

Rats.propTypes = {
    rats: PropTypes.arrayOf(PropTypes.object),
};
