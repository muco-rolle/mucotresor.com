import { Box, Image } from '@chakra-ui/react';

export const Avatar = () => {
    return (
        <Box textAlign={'center'} display={'flex'} justifyContent="center">
            <Image
                src="/assets/muco.jpeg"
                placeholder="blur"
                borderRadius="full"
                boxSize="200px"
                alt="Tresor Muco"
            />
        </Box>
    );
};
