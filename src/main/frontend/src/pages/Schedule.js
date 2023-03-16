import React from 'react';
import styled from "styled-components";
import media from "styled-media-query";

const Container = styled.div`
  min-height: calc(100vh - 73px - 343.72px);
  min-height: calc(var(--vh, 1vh) * 100 - 73px - 343.72px);
  width: 100%;
  max-width: 48rem;
  margin: auto;
  padding: 4rem 2rem;
  ${media.lessThan("medium")`
    max-width: none;
    padding: 2rem 1rem;
  `}
`;
const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  ${media.lessThan("medium")`
    margin-bottom: 1rem;
  `}
`;
const Btn = styled.button`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  color: var(--color-gray);
  background-color: var(--color-darkwhite);
  border: 1px solid var(--color-lightgray);
  transition: background-color 100ms ease-out, color 100ms ease-out, border-color 100ms ease-out;
  svg {
    margin-right: 0.5rem;
    transition: color 100ms ease-out;
  }
`;
const Upcoming = styled(Btn)`
  &.active,
  :hover {
    color: var(--color-black);
    background-color: var(--color-yellow--10);
    border-color: var(--color-yellow);
    svg {
      color: var(--color-yellow);
    }
  }
`;
const Passed = styled(Btn)`
  &.active,
  :hover {
    color: var(--color-black);
    background-color: var(--color-green--10);
    border-color: var(--color-green);
    svg {
      color: var(--color-green);
    }
  }
`;
const LoadingContainer = styled.div`
  width: 100%;
  height: 20rem;
`;
const Gatherings = styled.div`
  display: grid;
  grid-gap: 1rem;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, auto));
`;
const EmptyContainer = styled.div`
  height: 20rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
`;
const Schedule = () => {
    return (
        <Container>
            <BtnContainer>
                <Upcoming type="button">
                    다가오는 일정
                </Upcoming>
                <Passed type="button">
                    지나간 일정
                </Passed>
            </BtnContainer>
                <LoadingContainer>
                    LoadingContainer
                </LoadingContainer>
                    <EmptyContainer>일정이 없어요</EmptyContainer>
                    <Gatherings>
                    </Gatherings>
        </Container>
    );
};

export default Schedule;
