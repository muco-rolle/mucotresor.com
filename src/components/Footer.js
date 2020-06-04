import React from 'react';
import { Flex, Link, IconButton } from '@chakra-ui/core';

export const Contacts = () => (
    <Flex justify="start">
        <IconButton
            as="a"
            aria-label="Twitter"
            icon="twitter"
            size="lg"
            color="gray.500"
            variant="ghost"
            href="https://twitter.com/Muco31073256"
            title="Twitter"
            isExternal
            borderRadius="100%"
        />
        <Link href="https://github.com/muco-rolle" title="GitHub" isExternal>
            <IconButton
                aria-label="GitHub"
                icon="github"
                size="lg"
                color="gray.500"
                variant="ghost"
            />
        </Link>
        <Link
            href="https://www.linkedin.com/in/muco-tresor-949b131a7/"
            title="LinkedIn"
            isExternal
        >
            <IconButton
                aria-label="LinkedIn"
                icon="linkedin"
                size="lg"
                color="gray.500"
                variant="ghost"
            />
        </Link>
        <Link href="mailto:mucotresor@gmail.com" title="Email" isExternal>
            <IconButton
                aria-label="Email"
                icon="mail"
                size="lg"
                color="gray.500"
                variant="ghost"
            />
        </Link>
    </Flex>
);
