import { chakra } from "@chakra-ui/react";
import Image from "next/image";

type Size = "sm" | "md";

type ProfileImageProps = {
  size: Size;
  isInteractive?: boolean;
};

export function ProfileImage({
  size = "md",
  isInteractive = false,
}: ProfileImageProps) {
  const paddings = { sm: "2px", md: "3px" };
  const sizes = {
    sm: { height: "36px", width: "36px" },
    md: { height: "64px", width: "64px" },
  };

  return (
    <chakra.div
      rounded="full"
      bg="linear(to-r, purple.700, rose.400)"
      boxShadow="lg"
      p={paddings[size]}
    >
      <chakra.div rounded="full" p="px" __css={sizes[size]}>
        <Image
          src="https://res.cloudinary.com/delba/image/twitter_name/c_thumb,g_face,h_380,w_380,q_100/delba_oliveira.jpg"
          alt="A photo of Delba"
          quality={95}
          priority={true}
          width={size === "sm" ? 36 : 64}
          height={size === "sm" ? 36 : 64}
          style={{ borderRadius: "100%" }}
        />
      </chakra.div>
    </chakra.div>
  );
}
