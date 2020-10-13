import React from 'react';
import NextLink from 'next/link';
import { Button } from '@chakra-ui/core';

export const NavLink = (props) => {
    const { children, url } = props;

    return (
        <NextLink href={url}>
            <a>
                <Button
                    variant="ghost"
                    height="1.8rem"
                    _focus={{ border: 'none' }}
                >
                    {children}
                </Button>
            </a>
        </NextLink>
    );
};
