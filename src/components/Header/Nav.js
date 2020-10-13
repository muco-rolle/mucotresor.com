import { Box } from '@chakra-ui/core';
import { NavLink } from './NavLink';
import { ThemeToggle } from './ThemeToggle';
import styled from '@emotion/styled';

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 425px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        .themeToggleBox {
            margin-left: 10px;
        }
    }
`;

export const Nav = () => {
    return (
        <StyledNav>
            <Box>
                <ul className="navList">
                    <NavLink url="/">Home</NavLink>

                    <NavLink url="/blog">Blog</NavLink>
                    <NavLink url="/about">About me</NavLink>
                </ul>
            </Box>

            <Box ml="50px" className="themeToggleBox">
                <ThemeToggle />
            </Box>
        </StyledNav>
    );
};
