import React from 'react';
import { NextSeo } from 'next-seo';
import styled from '@emotion/styled';
import {
    Avatar,
    Stack,
    Box,
    Heading,
    useColorMode,
    Text,
    Link
} from '@chakra-ui/core';
import { Container, Contacts } from 'components';

const url = 'https://mucotresor.com/about';
const title = 'About Me – Muco Rolle Trésor';

const StyledAboutView = styled(Container)``;

export const About = () => {
    const { colorMode } = useColorMode();
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400'
    };

    return (
        <StyledAboutView>
            <NextSeo
                title={title}
                canonical={url}
                openGraph={{
                    url,
                    title
                }}
            />
            <Stack
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
                    <Text color={secondaryTextColor[colorMode]} mb={3}>
                        Hello, I'm<strong> Muco Trésor</strong>, a self taught
                        Fullstack developer, I build things with code, mainly
                        with <strong>Javascript/Typescript,</strong>{' '}
                        <strong>ReactJS, </strong>
                        <strong>NodeJS, </strong>
                        <strong>and GraphQL</strong>. I'm currently working as a
                        Freelance developer at{' '}
                        <Link
                            href="https://edgco.fr"
                            target="_blank"
                            fontWeight="900"
                        >
                            EDGCo
                        </Link>
                        .
                    </Text>

                    <Text color={secondaryTextColor[colorMode]} mb={3}>
                        Back in 2018, I graduated in a computer science and
                        telecoms school, my primary goal was to learn computer
                        programming, but I was not satisfied with how we learned
                        to program, so I decided to take time and learn it on my
                        own.
                    </Text>

                    <Text color={secondaryTextColor[colorMode]} mb={3}>
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

                    <Contacts />
                </Box>
            </Stack>
        </StyledAboutView>
    );
};
export default About;
