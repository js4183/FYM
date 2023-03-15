import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import media from "styled-media-query";

const ButtonContainer = styled(Link)`
  min-width: 10.8rem;
  padding: 0.6rem 1.2rem;
  display: flex;
  align-items: center;
  color: var(--color-white);
  background-color: var(--color-maingreen--75);
  font-family: Interop-SemiBold;
  border-radius: 0.6rem;
  :hover {
    opacity: 0.8;
  }
  ${media.greaterThan("small")`
    width: fit-content;
  `};
  ${media.lessThan("small")`
    width: 100%;
    height: 2.8rem;
    /* max-width: 25rem; */
    min-width: 20rem;
    justify-content: center;
  `};
`;

const Icon = styled.div`
  font-size: 1.2rem;
  margin-right: 0.6rem;
`;

const Text = styled.div`
  font-size: 1rem;
`;
const OnMapBtn = () => {
    return (
        <ButtonContainer>
            <Icon>🗺</Icon>
            <Text>지도로 전체 보기</Text>
        </ButtonContainer>
    );
};

export default OnMapBtn;