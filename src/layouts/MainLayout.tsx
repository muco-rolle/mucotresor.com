import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { Header } from './Header';

type MainLayoutProps = {
    children: ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <Box>
            <Header />
            <Box w="800px" maxW="90%" m="0 auto">
                {children}
            </Box>
        </Box>
    );
};
