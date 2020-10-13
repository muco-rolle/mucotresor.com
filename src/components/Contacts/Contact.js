import React from 'react';
import { IconButton, Link } from '@chakra-ui/core';

export const Contact = (props) => {
    return (
        <Link
            href={props.url}
            mr={props.mr}
            target="_blank"
            _focus={{ border: 'none' }}
        >
            <IconButton
                {...props}
                rounded="100px"
                aria-label={props['aria-label']}
                icon={props.icon}
                _focus={{ border: 'none' }}
            />
        </Link>
    );
};
