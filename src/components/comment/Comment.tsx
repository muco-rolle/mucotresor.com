import { Box, BoxProps, chakra } from '@chakra-ui/react';
import React from 'react';

export const Comment = React.forwardRef((props: BoxProps, commentBox: any) => (
    <Box w="700px" maxW="100%" {...props} ref={commentBox} />
));
