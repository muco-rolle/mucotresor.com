import {
    Box,
    Button,
    Heading,
    HStack,
    Icon,
    Text,
    VStack,
} from '@chakra-ui/react';
import { MainLayout } from '@layouts';

const HomePage = () => {
    return (
        <MainLayout>
            {/**********************************************************
             *  HOME PAGE
             *  Intro Section
             * ********************************************************* */}
            <Box>
                <VStack align="flex-start" spacing={5}>
                    <Heading as="h1" size="2xl" fontWeight="900">
                        Hey, I'm Muco Trésor
                    </Heading>
                    <Text>
                        I'm a Fullstack web developer, I build things with code,
                        mainly with{' '}
                        <Box as="strong">: Javascript/Typescript</Box>,{' '}
                        <Box as="strong">ReactJS</Box>,{' '}
                        <Box as="strong">NodeJS</Box>, and{' '}
                        <Box as="strong">GraphQL</Box>.
                    </Text>

                    <Box
                        bg="green.50"
                        borderLeft="5px solid"
                        borderColor="green.500"
                        py={5}
                        px={5}
                    >
                        <VStack align="flex-start" spacing={5}>
                            <HStack>
                                <Icon
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="css-1xzrexu"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                </Icon>
                                <Heading
                                    as="h3"
                                    color="green.700"
                                    fontSize="2xl"
                                >
                                    Hire me!
                                </Heading>
                            </HStack>
                            <Text color="green.700">
                                I build <b>web apps</b> for <b>startups</b>,
                                <b>agencies</b> <b>businesses</b> and{' '}
                                <b>public institutions</b> as a freelance web
                                developer and designer. Let's discuss your needs
                                and what solutions I can bring.
                            </Text>
                            <HStack>
                                <Button colorScheme="green">Contact me</Button>
                                <Button
                                    bg="green.100"
                                    color="green.700"
                                    _hover={{
                                        bg: 'green.200',
                                    }}
                                >
                                    More about me
                                </Button>
                            </HStack>
                        </VStack>
                    </Box>
                </VStack>
            </Box>

            {/**********************************************************
             *  HOME PAGE
             *  Testimonials and Trusted by section
             * ********************************************************* */}
            {/* Trusted by section */}
            <Box mt={20}>
                <Heading as="h2" size="xl" fontWeight="900">
                    Trusted by
                </Heading>
            </Box>
            <Button colorScheme="green">Helloooooooooooo button</Button>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto minima commodi ipsa quo harum. Voluptatum commodi
                adipisci itaque porro sint exercitationem dolorum quo quis iure
                sit. Totam earum libero maxime.
            </Text>
        </MainLayout>
    );
};

export default HomePage;
