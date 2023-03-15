import React from 'react';
import styled from "styled-components";
import media from "styled-media-query";

const StyledFooter = styled.footer`
  padding: 4rem 2rem;
  border-top: 1px solid var(--color-lightgray);
  font-family: Interop-Regular;
  ${media.lessThan("medium")`
    padding: 3rem 1rem;
  `};
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 3rem;
  gap: 3rem;
  ${media.lessThan("medium")`
    flex-direction:column;
    gap: 2rem;
  `}
`;

const DescWrapper = styled.div`
  flex: 2;
`;

const Wrapper = styled.div`
  flex: 1;
`;

const Heading = styled.h1`
  font-size: 1rem;
  margin-bottom: 1rem;
  font-family: Interop-Medium;
  color: var(--color-black);
  ${media.lessThan("medium")`
    margin-bottom: 0.5rem;
  `}
`;

const Paragraph = styled.p`
  word-break: keep-all;
  line-height: var(--lineHeight-relaxed);
`;

const Items = styled.ul``;

const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  svg {
    vertical-align: text-bottom;
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }
`;

const Copyright = styled.span``;

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <DescWrapper>
                    <Heading>소개</Heading>
                    <Paragraph>
                        FindYourMate(FYM)는 함께 운동할 사람을 찾고 싶지만 주기적으로 만나기 어렵거나 부담스러운
                        사람들을 위한 매칭 플랫폼입니다. 운동 종류, 지역, 운동, 날짜와 시간대에 따라 함께 운동할
                        사람을 간편하게 찾을 수 있습니다.
                    </Paragraph>
                </DescWrapper>
                <Wrapper>
                    <Heading>자료</Heading>
                    <Items>
                        <Item>
                            <Link href="https://github.com/js4183" target="_blank">
                                레포지토리
                            </Link>
                        </Item>
                    </Items>
                </Wrapper>
                <Wrapper>
                    <Heading>멤버</Heading>
                    <Items>
                        <Item>
                            <Link href="https://github.com/js4183" target="_blank">
                                주상민
                            </Link>
                        </Item>
                    </Items>
                </Wrapper>
            </Container>
            <Copyright>© 2023 FindYourMate. All rights reserved.</Copyright>
        </StyledFooter>
    );
};

export default Footer;
