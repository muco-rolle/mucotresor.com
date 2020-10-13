import React from 'react';
import { Flex, IconButton, Tooltip, useColorMode } from '@chakra-ui/core';
import { Contact } from './Contact';
import { FaWhatsapp } from 'react-icons/fa';
import { FiTwitter, FiFacebook } from 'react-icons/fi';

export const Contacts = () => {
    const { colorMode } = useColorMode();
    return (
        <Flex justify="start" mt={4} mb={4}>
            <Contact
                url="https://github.com/muco-rolle"
                mr={2}
                aria-label="github"
                icon="github"
            />

            <Tooltip
                hasArrow
                label="+257 69151210"
                placement="top"
                bg={colorMode === 'light' ? 'gray.900' : 'gray.100'}
                aria-label="whatsapp number"
            >
                <IconButton
                    aria-label="whatsapp number"
                    rounded="100px"
                    _focus={{ border: 'none' }}
                    icon={FaWhatsapp}
                    mr={4}
                />
            </Tooltip>

            <Contact
                url="https://twitter.com/dev_muco"
                mr={2}
                aria-label="Twitter"
                icon="twitter"
            />

            <Contact
                url="https://www.linkedin.com/in/muco-tresor-949b131a7/"
                mr={2}
                aria-label="Linkedin"
                icon="linkedin"
            />

            <Contact
                url="mailto:mucotresor@gmail.com"
                mr={2}
                aria-label="Gmail"
                icon="mail"
            />

            <Contact
                url="https://www.facebook.com/tresor.muco/"
                mr={2}
                aria-label="Facebook"
                icon={FiFacebook}
            />

            {/* {<Link
        
            href="https://twitter.com/leeerob"
            title="Twitter"
            target="_blank"
        >
            <IconButton
                aria-label="Twitter"
                icon="twitter"
                size="lg"
                color="gray.500"
                variant="ghost"
            />
        </Link>
        <Link href="https://github.com/leerob" title="GitHub" isExternal>
            <IconButton
                aria-label="GitHub"
                icon="github"
                size="lg"
                color="gray.500"
                variant="ghost"
            />
        </Link>
        <Link
            href="https://www.linkedin.com/in/leejamesrobinson/"
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
        <Link href="mailto:me@leerob.io" title="Email" isExternal>
            <IconButton
                aria-label="Email"
                icon="mail"
                size="lg"
                color="gray.500"
                variant="ghost"
            />
        </Link>} */}
        </Flex>
    );
};
