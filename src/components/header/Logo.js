import React from 'react';
import styled from '@emotion/styled';
import { useColorMode } from '@chakra-ui/core';
import Link from 'next/link';

const StyledLogo = styled.div`
    a {
        display: flex;
        align-items: center;

        .circle {
            border: 3px solid
                ${({ colorMode }) =>
                    colorMode === 'light' ? 'black' : 'white'};
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            border-radius: 30px;
            font-weight: 900;
            font-size: 10px;
        }

        .text {
            font-weight: 900;
            font-size: 18px;
            margin-left: 5px;
        }
    }
`;

export const Logo = () => {
    const { colorMode } = useColorMode();

    return (
        <StyledLogo colorMode={colorMode}>
            <Link href="/">
                <a>
                    <span className="circle">T</span>{' '}
                    <span className="text">Trésor</span>
                </a>
            </Link>
        </StyledLogo>
    );
};
