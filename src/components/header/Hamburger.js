import { Box } from '@chakra-ui/core';

export const Hamburger = () => {
    return (
        <Box display={{ sm: 'block' }}>
            <svg
                fill="white"
                width="12px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
        </Box>
    );
};
