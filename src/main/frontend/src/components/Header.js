import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled, {css} from "styled-components";
import media from "styled-media-query";

const StyledHeader = styled.header`
  background-color: var(--color-white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  width: 100%;
  border-bottom: 1px solid var(--color-lightgray);
  z-index: 10;
  ${media.lessThan("medium")`
    padding: 1rem;
  `}
`;

const LogoLink = styled(Link)`
  margin-right: 2rem;
  height: 2rem;
`;

const LongLogo = styled.div`
  height: 2rem;
  display: block;
  ${media.lessThan("medium")`
    display: none;
  `}
`;

const ShortLogo = styled.div`
  height: 2rem;
  display: none;
  ${media.lessThan("medium")`
    display: block;
  `}
`;

const Nav = styled.nav`
  display: flex;
  flex: 1;
  ${media.lessThan("medium")`
    display: ${({ isNav }) => (isNav ? "flex" : "none")};
    flex-direction: column;
    position: fixed;
    top: 4rem;
    left: 0;
    height: 0;
    width: 100vw;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    padding: 1rem;
    background-color: var(--color-white);
    border-top: 1px solid var(--color-lightgray);
  `}
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  transition: background-color, color 100ms ease-out;
  :hover {
    color: var(--color-maingreen--100);
  }
  ${media.lessThan("medium")`
    padding: 1rem;
    font-size: 1.68rem;
    margin-right: 0;
    margin-bottom: 0.5rem;
    border: none;
  `}
  &.active {
    background-color: var(--color-maingreen--25);
    color: var(--color-maingreen--100);
  }
`;

const Text = styled.span`
  font-size: 1rem;
  margin-left: 0.5rem;
  line-height: 1;
  ${media.lessThan("medium")`
    margin-left: 0.96rem;
    font-size: 1.2rem;
  `}
`;

const NonUserBtns = styled.div`
  .header-btn {
    color: var(--color-black);
  }
`;

const NonUserBtn = styled.button`
  font-size: 1rem;
  padding: 0.75rem 1rem;
  transition: background-color 100ms ease-out;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
  line-height: 1;
  ${({ main }) =>
    main &&
    css`
      color: var(--color-white);
      background-color: var(--color-maingreen--100);
    `}
  :hover {
    background-color: var(--color-darkwhite);
    ${({ main }) =>
    main &&
    css`
        background-color: var(--color-maingreen--100);
        opacity: 80%;
      `}
  }
  ${media.lessThan("medium")`
    padding: 0.5rem 0.75rem;
    margin-left: 0.25rem;
  `}
`;
const Header = () => {
    return (
        <StyledHeader>
          <LogoLink to="/">
            <LongLogo>FindYourMate</LongLogo>
            <ShortLogo>FYM</ShortLogo>
          </LogoLink>
          <Nav>
            <StyledNavLink to ="/home">
              <Text>홈</Text>
            </StyledNavLink>
            <StyledNavLink to="/chat">
              <Text>채팅</Text>
            </StyledNavLink>
            <StyledNavLink to="/schedule">
              <Text>일정</Text>
            </StyledNavLink>
          </Nav>
          <NonUserBtns>
            <NonUserBtn main>
              로그인
            </NonUserBtn>
            <NonUserBtn main>
              회원가입
            </NonUserBtn>
          </NonUserBtns>
        </StyledHeader>
    );
};

export default Header;
