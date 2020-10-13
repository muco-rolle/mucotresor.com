import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/core';

export const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            rounded="100px"
            aria-label="Toggle dark mode"
            icon={colorMode === 'dark' ? 'sun' : 'moon'}
            onClick={toggleColorMode}
            _focus={{ border: 'none' }}
        />
    );
};
