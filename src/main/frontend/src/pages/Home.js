import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import OnMapBtn from "../components/OnMapBtn";
import HomeSearchBar from "../components/HomeSearchBar";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > * {
    padding: 2rem;
    ${media.lessThan("medium")`
      padding: 2rem 1rem;
    `}
  }
  .pc {
    ${media.lessThan("medium")`
      display: none;
    `}
  }
  .mobile {
    display: none;
    ${media.lessThan("medium")`
      display: block;
    `}
  }
`;

const SearchContainer = styled.div`
  background-color: var(--color-maingreen--25);
  min-height: 20rem;
  flex: 0 0 1;
  padding: 4rem 2rem;
  ${media.lessThan("medium")`
    padding : 2rem 1rem;
  `}
  display: flex;
  flex-direction: column;
  align-items: center;
  .create-gathering {
    width: 16rem;
    ${media.lessThan("medium")`
      margin-bottom: 1.25rem;
    `}
    ${media.lessThan("small")`
      width: 100%;
      min-width: 20rem;
      height: 3.2rem;
    `}
    background-color: var(--color-maingreen--75);
    color: var(--color-white);
  }
`;

const SearchTitle = styled.h1`
  font-family: Interop-Regular;
  font-size: 1.25rem;
  line-height: var(--lineHeight-normal);
  color: var(--color-darkgray);
  text-align: center;
  margin: 2rem auto;
  ${media.lessThan("medium")`
    margin: 1.25rem auto;
    font-size: 1.125rem;
  `}
  ${media.lessThan("small")`
    font-size: 1.125rem;
  `}
`;

const ListContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const ListHeader = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.lessThan("small")`
    flex-direction: column;
    align-items: flex-start;
    > a {
      margin-top: 1rem;
    }
  `}
  #onMapBtn {
    flex: 0 0 1;
  }
`;

const ListTitle = styled.h1`
  font-family: Interop-Medium;
  font-size: 1.4rem;
  line-height: var(--lineHeight-normal);
  line-height: var(--lineHeight-loose);
  margin: 0 1rem 0 0;
`;

const ListSubTitle = styled.h3`
  font-family: Interop-Regular;
  color: var(--color-gray);
  font-size: 1.125rem;
  line-height: var(--lineHeight-normal);
  margin: 0;
  ${media.lessThan("medium")`
    margin-bottom: 0.5rem;
  `}
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

const Home = () => {
    return (
        <HomeContainer>
            <SearchContainer>
                <SearchTitle>어떤 운동 모임을 찾으시나요?</SearchTitle>
                <HomeSearchBar/>
                <SearchTitle>모임, 직접 만들어 보실래요?</SearchTitle>
                {/*<Btn className="create-gathering" onClick={handleCreateGath}>*/}
                {/*    모임 만들기*/}
                {/*</Btn>*/}
            </SearchContainer>
            <ListContainer>
                    <ListSubTitle>검색 결과</ListSubTitle>
                    <ListSubTitle>현재</ListSubTitle>
                <ListHeader>
                        <ListTitle>
                        </ListTitle>
                        <ListTitle>이런 모임들이 있어요!</ListTitle>
                    <OnMapBtn id="onMapBtn" />
                </ListHeader>
                    <Gatherings>
                    </Gatherings>
                    <EmptyContainer>모임이 없어요</EmptyContainer>
            </ListContainer>
        </HomeContainer>
    );
};

export default Home;
