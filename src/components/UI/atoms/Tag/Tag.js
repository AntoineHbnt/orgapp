import React from 'react';
import { Container } from './Tag.styles';

const Tag = ({label, color}) => {

    return (
        <Container css={{ backgroundColor: color }}>
            {label && label.toUpperCase()}
        </Container>
    );
};

export default Tag;