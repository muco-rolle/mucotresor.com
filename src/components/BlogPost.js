import React from 'react';
import NextLink from 'next/link';
import { getSlug } from 'utils';
import { useColorMode, Heading, Text, Flex, Box, Link } from '@chakra-ui/core';

export const BlogPost = (frontMatter) => {
    const { title, summary } = frontMatter;
    const { colorMode } = useColorMode();
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400'
    };

    const slug = getSlug(frontMatter.__resourcePath);

    console.log(slug);
    return (
        <NextLink href={`blog/${slug}`} passHref>
            <Link
                w="100%"
                _hover={{ textDecoration: 'none' }}
                _focus={{ border: 'none' }}
            >
                <Box mb={8} display="block" width="100%">
                    <Flex
                        width="100%"
                        align="flex-start"
                        justifyContent="space-between"
                        flexDirection={['column', 'row']}
                    >
                        <Heading size="md" as="h3" mb={2} fontWeight="medium">
                            {title}
                        </Heading>
                    </Flex>
                    <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
                </Box>
            </Link>
        </NextLink>
    );
};
