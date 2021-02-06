import {
    Box,
    Alert,
    Code,
    Heading,
    Kbd,
    Link,
    Text,
    Divider,
    useColorMode,
    TextProps,
    BoxProps,
    HeadingProps,
    AlertProps,
    HStack,
    IconButton,
    CodeProps,
    useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi';

// #0F9D58
const Table = (props) => (
    <Box as="table" textAlign="left" mt="32px" width="full" {...props} />
);

const THead = (props) => {
    const { colorMode } = useColorMode();
    const bg = {
        light: 'gray.50',
        dark: 'whiteAlpha.100',
    };

    return (
        <Box
            as="th"
            bg={bg[colorMode]}
            fontWeight="semibold"
            p={2}
            fontSize="sm"
            {...props}
        />
    );
};

const TData = (props) => (
    <Box
        as="td"
        p={2}
        borderTopWidth="1px"
        borderColor="inherit"
        fontSize="sm"
        whiteSpace="normal"
        {...props}
    />
);

const CustomLink = (props) => {
    const { colorMode } = useColorMode();
    const color = {
        light: 'hsl(146, 48%, 42%)',
        dark: 'hsl(146, 48%, 66%)',
    };

    const href = props.href;
    const isInternalLink =
        href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalLink) {
        return (
            <NextLink href={href} passHref>
                <Link color={color[colorMode]} {...props} fontWeight="900" />
            </NextLink>
        );
    }

    return (
        <Link
            color={color[colorMode]}
            isExternal
            {...props}
            fontWeight="900"
            _active={{ color: 'hsl(146, 48%, 42%)' }}
        />
    );
};

const Quote = (props: AlertProps) => {
    return (
        <Alert
            mt={4}
            w="98%"
            bg={useColorModeValue('green.50', 'green.900')}
            color={useColorModeValue('green.700', 'green.50')}
            variant="left-accent"
            status="success"
            {...props}
        />
    );
};

const DocsHeading = (props) => (
    <Heading
        css={{
            scrollMarginTop: '100px',
            scrollSnapMargin: '100px', // Safari
            '&[id]': {
                pointerEvents: 'none',
            },
            '&[id]:before': {
                display: 'block',
                height: ' 6rem',
                marginTop: '-6rem',
                visibility: 'hidden',
                content: `""`,
            },
            '&[id]:hover a': { opacity: 1 },
        }}
        {...props}
        mb="1em"
        mt="1em"
    >
        <Box pointerEvents="auto">
            {props.children}
            {props.id && (
                <Box
                    aria-label="anchor"
                    as="a"
                    color="green.500"
                    fontWeight="normal"
                    outline="none"
                    _focus={{
                        opacity: 1,
                        color: 'green.500',
                        boxShadow: 'outline',
                    }}
                    opacity="0"
                    ml="0.375rem"
                    href={`#${props.id}`}
                >
                    #
                </Box>
            )}
        </Box>
    </Heading>
);

const Hr = () => {
    const { colorMode } = useColorMode();
    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600',
    };

    return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

export const MDXComponents = {
    h1: (props: HeadingProps) => (
        <Heading as="h1" size="xl" fontWeight="bold" my={4} {...props} />
    ),
    h2: (props: HeadingProps) => (
        <DocsHeading as="h2" fontWeight="bold" size="lg" {...props} />
    ),
    h3: (props: HeadingProps) => (
        <DocsHeading as="h3" size="md" fontWeight="bold" {...props} />
    ),
    inlineCode: (props: CodeProps) => (
        <Code variantcolor="yellow" fontSize="0.84em" {...props} />
    ),
    kbd: Kbd,
    br: (props: BoxProps) => <Box height="24px" {...props} />,
    hr: Hr,
    table: Table,
    th: THead,
    td: TData,
    a: CustomLink,
    p: (props: TextProps) => (
        <Text as="p" my={5} lineHeight="tall" {...props} />
    ),
    ul: (props: BoxProps) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
    ol: (props: BoxProps) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
    li: (props: BoxProps) => <Box as="li" pb={1} {...props} />,
    blockquote: Quote,
    HStack,
    IconButton,
    FiTwitter,
    FiGithub,
    FiMail,
};
