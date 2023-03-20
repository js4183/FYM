import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border-radius: 1rem;
  background-color: var(--color-white);
  filter: drop-shadow(2px 2px 6px var(--color-shadow));
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 25rem; */
  min-width: 20rem;
  > * {
    margin-bottom: 1.25rem;
  }
  .divider {
    margin: 0 0.4em 0.1em;
    overflow: hidden;
  }
  position: relative;
  .hovered {
    background-color: var(--color-maingreen--50);
  }
  cursor: pointer;
`;

const InfoHeader = styled.div`
  width: 100%;
  height: 0.875rem;
  font-size: 0.8rem;
  color: var(--color-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  > * {
    overflow: hidden;
    height: 100%;
    display: flex;
  }
`;

const InfoBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin-bottom: 0.625rem;
  }
  > #icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  > #title {
    font-size: 1.25rem;
    font-family: Interop-SemiBold;
  }
  > #location {
    height: 0.875rem;
    overflow: hidden;
    font-size: 0.8rem;
    color: var(--color-gray);
    margin-bottom: 0;
    display: flex;
    > * {
      display: flex;
      #marker {
        margin-right: 0.15em;
      }
    }
  }
`;

const InfoFooter = styled.div`
  width: 100%;
  color: var(--color-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
`;
const GathCard = () =>{
return (
    <CardContainer>
        <InfoHeader>
            <div>
                <div>월일</div>
                <div className="divider">|</div>
                <div>시간</div>
            </div>
            <div>
                <div>
                    지금 인원 : 다 찼어요
                </div>
                <div className="divider">|</div>
                <div>전체 인원</div>
            </div>
        </InfoHeader>
        <InfoBody>
            <div id="icon">🔍</div>
            <div id="title">제목</div>
            <div id="location">
                <div>지역</div>
                <div className="divider">|</div>
                <div>
                    <div>장소</div>
                </div>
            </div>
        </InfoBody>
        <InfoFooter>
            유저닉네임
        </InfoFooter>
    </CardContainer>
);
}

export default GathCard;