import React from 'react';
import styled from '@emotion/styled';
import { useColorMode } from '@chakra-ui/core';
import Link from 'next/link';

const StyledLogo = styled.div`
    a {
        display: flex;
        align-items: center;

        .circle {
            border: 5px solid
                ${({ colorMode }) =>
                    colorMode === 'light'
                        ? 'hsl(146, 48%, 42%)'
                        : 'hsl(146, 48%, 42%)'};
            display: flex;
            justify-content: center;
            align-items: center;
            width: 45px;
            height: 45px;
            border-radius: 30px;
            font-weight: 900;
            font-size: 10px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

            background-color: black;
            color: hsl(146, 48%, 80%);
            .letter {
            }
        }

        .text {
            font-weight: 900;
            font-size: 18px;
            margin-left: 8px;
        }
    }
`;

export const Logo = () => {
    const { colorMode } = useColorMode();

    return (
        <StyledLogo colorMode={colorMode}>
            <Link href="/">
                <a>
                    <span className="circle">
                        <span className="letter">T</span>
                    </span>{' '}
                    {/* <span className="text">Trésor</span> */}
                </a>
            </Link>
        </StyledLogo>
    );
};
