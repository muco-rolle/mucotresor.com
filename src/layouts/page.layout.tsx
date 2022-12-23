import { Container, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type PageLayoutProps = PropsWithChildren & {};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <Container
      display="flex"
      maxW="container.sm"
      minH={{ base: "auto", md: "100vh" }}
      px={{ base: 4, lg: 0 }}
      pt="44"
      pb="24"
      centerContent
    >
      <VStack alignItems="stretch" flex={1} w="full" spacing={16}>
        <VStack as="main" flex={1} w="full" spacing={16}>
          {children}
        </VStack>
        {/* <Footer /> */}
      </VStack>
    </Container>
  );
}
