import React from 'react';
import { Container } from './Tag.styles';

const Tag = ({label, color}) => {

    return (
        <Container css={{ backgroundColor: color }}>
            {false && label}
        </Container>
    );
};

export default Tag;