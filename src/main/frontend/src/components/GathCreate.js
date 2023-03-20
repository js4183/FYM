import React, { useEffect, useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import GathCard from "./GathCard";

const GathCreateContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: var(--color-white);
  border-radius: 1rem;
  color: var(--color-darkgray);
`;

const Info = styled.div`
  width: 44rem;
  padding: 2rem 2rem 1.5rem;
  * {
    margin: 1.2rem 0rem;
  }
  ${media.lessThan("medium")`
    /* screen width is between 768px (medium) and 1170px (large) */
    width: 20rem;
    padding: 0rem 0rem 1.5rem;
  `}
`;

const MovePageButtons = styled.div`
  position: relative;
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 44rem;
  height: 12rem;
  z-index: ${(props) => props.isOnSearch && -1};
  padding: 2rem 2rem 2rem;
  ${media.lessThan("medium")`
  /* screen width is between 768px (medium) and 1170px (large) */
    width: 20rem;
    margin-top: 2rem;
  `}
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  div {
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: calc(100% - 4rem);
  height: 15rem;
  z-index: 5;
  ${media.lessThan("medium")`
    width: 20rem;
  `};
`;

const StyledGathCard = styled(GathCard)`
  ${media.lessThan("medium")`
    display: none;
  `}
`;

const StyledBtn = styled.button`
  width: 5rem;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.4rem;
`;

const GathCreate = () => {

    return (
        <GathCreateContainer>
            <Info>
                <div style={{ width: "auto", height: "1rem", color: "var(--color-darkgray)" }}>
                    모임이름
                </div>
                <h2>ㅇㅇㅇ</h2>
            </Info>
            <Container>
                ㅁㄴㅇ
            </Container>
            <MovePageButtons>
                <button name="prev">
                </button>
                <button name="next">
                            <StyledBtn
                                color="var(--color-white)"
                                bgColor="var(--color-maingreen--75)"
                            >
                                등록하기
                            </StyledBtn>
                </button>
            </MovePageButtons>
        </GathCreateContainer>
    );
};

export default GathCreate;