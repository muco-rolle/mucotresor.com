import { chakra, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { seo } from "~/config/seo";
import { ProfileImage } from "./profile-image";

export function Bio() {
  return (
    <VStack align="start" spacing="8">
      <HStack spacing="6" align="center">
        <ProfileImage size="md" />
        <VStack align="start" spacing={0}>
          <Heading color="zinc.300" as="h1" size="xl">
            Trésor Muco
          </Heading>
          <Text fontSize="lg" color="zinc.500">
            Developer Advocate at{" "}
            <chakra.a
              href="https://leapa.co"
              fontWeight="bold"
              color="zinc.400"
              _hover={{ textDecor: "underline" }}
            >
              Leapa
            </chakra.a>
            .
          </Text>
        </VStack>
      </HStack>

      <Text color="zinc.300" fontSize="xl">
        {seo.description}
      </Text>
    </VStack>
  );
}
