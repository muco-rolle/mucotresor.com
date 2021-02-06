import React from 'react';
import { MainLayout } from '@layouts';
import { NextSeo } from 'next-seo';
import {
    Box,
    Avatar,
    Heading,
    VStack,
    Text,
    HStack,
    IconButton,
} from '@chakra-ui/react';

import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const AboutPage = () => {
    return (
        <MainLayout>
            <NextSeo
                title="About Me – Muco Trésor"
                canonical="https://mucotoresor.com/about"
                openGraph={{
                    url: 'https://mucotoresor.com/about',
                    title: 'About Me – Muco Trésor',
                }}
            />

            <VStack
                as="main"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m="0 auto 4rem auto"
                maxWidth="700px"
            >
                <Box textAlign="center" width="100%">
                    <Heading
                        letterSpacing="tight"
                        mb={2}
                        as="h1"
                        size="2xl"
                        fontWeight={900}
                    >
                        About me
                    </Heading>
                    <Avatar
                        size="2xl"
                        name="Muco Trésor"
                        src="./assets/muco.jpg"
                        textAlign="center"
                    />
                </Box>

                <Box>
                    <Text mb={3}>
                        I'm a self taught Fullstack web developer, I build
                        things with code, mainly with{' '}
                        <Box as="strong">: Javascript/Typescript</Box>,{' '}
                        <Box as="strong">ReactJS</Box>,{' '}
                        <Box as="strong">NodeJS</Box>, and{' '}
                        <Box as="strong">GraphQL</Box>.
                    </Text>

                    <Text mb={3}>
                        Back in 2018, I graduated in a computer science and
                        telecoms school, my primary goal was to learn computer
                        programming, but I was not satisfied with how we learned
                        to program, so I decided to take time and learn it on my
                        own.
                    </Text>

                    <Text mb={3}>
                        I made a lot of mistakes along the way, but thanks to
                        the community of programmers, I learned from them, and
                        now, I think it's my time to give something in return,
                        I'm on a mission to help you, motivate you, and give
                        some tips that can help you to advance in programming
                        journey. As I know how hard it is to teach yourself
                        programming reach out to me if you need help I'll be
                        glad to help. Get in touch with me on any of these
                        platforms below.
                    </Text>

                    <Box>
                        <HStack>
                            <HStack spacing={3}>
                                <IconButton
                                    as="a"
                                    href="https://github.com/muco-rolle"
                                    aria-label="Github"
                                    icon={<FiGithub />}
                                    borderRadius="100%"
                                />

                                <IconButton
                                    as="a"
                                    href="https://twitter.com/dev_muco"
                                    aria-label="Twitter"
                                    borderRadius="100%"
                                    icon={<FiTwitter />}
                                />

                                <IconButton
                                    as="a"
                                    href="https://www.linkedin.com/in/muco-tresor-949b131a7/"
                                    aria-label="Twitter"
                                    borderRadius="100%"
                                    icon={<FaLinkedinIn />}
                                />

                                <IconButton
                                    as="a"
                                    href="mailto:mucotresor@gmail.com"
                                    aria-label="Gmail"
                                    icon={<FiMail />}
                                    borderRadius="100%"
                                />
                            </HStack>
                        </HStack>
                    </Box>
                </Box>
            </VStack>
        </MainLayout>
    );
};

export default AboutPage;
