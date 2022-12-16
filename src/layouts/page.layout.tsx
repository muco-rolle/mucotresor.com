import { ReactNode } from "react";
import { Container } from "~/components";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
