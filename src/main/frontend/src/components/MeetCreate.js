import React, { useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DetailContainer = styled.div`
  width: calc(100vw - 6rem);
  height: calc(100vh - 8rem);
  height: calc(var(--vh, 1vh) * 100 - 8rem);
  max-width: 50rem;
  max-height: 60rem;
  ${media.lessThan("medium")`
    width: 100vw;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
  `};
  color: var(--color-black);
  display: flex;
  flex-direction: column;
  .join {
    background-color: var(--color-maingreen--75);
    color: var(--color-white);
  }
  .disabled {
    opacity: 0.5;
    :hover {
      opacity: 0.5;
    }
  }
  .to-chat {
    background-color: var(--color-maingreen--25);
    color: var(--color-maingreen--100);
    border: 1px solid var(--color-maingreen--25);
    :hover {
      border: 1px solid var(--color-maingreen--75);
      opacity: 1;
    }
  }
  #sport,
  #date,
  #time {
    font-size: 1rem;
    display: flex;
  }
  #place,
  #users {
    font-size: 1rem;
    display: flex;
    margin-bottom: 1rem;
    color: var(--color-darkgray);
  }
  .icon {
    flex: 0 0 1;
    margin-right: 0.8em;
  }
  .marker {
    font-size: 1.2em;
    flex: 0 0 1;
    margin-right: 0.4em;
  }
  .text {
    flex: 1 1 1;
  }
  .divider {
    line-height: 1em;
    margin: 0 0.6em;
    overflow: hidden;
    color: var(--color-lightgray);
  }
`;

const DetailHeader = styled.div`
  flex: 0 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 1.5rem;
  ${media.between("small", "medium")`
    padding: 4rem 2rem 1.5rem;
  `};
  ${media.lessThan("small")`
    padding: 4rem 1rem 1rem;
  `};
`;

const GathTitle = styled.h1`
  margin: 0 0 0.75rem;
  font-size: 1.5rem;
  font-family: Interop-Medium;
`;

const GathDescription = styled.p`
  font-size: 1rem;
  font-family: Interop-Regular;
  word-wrap: break-word;
  color: var(--color-darkgray);
`;

const DetailBody = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: flex-start;
  width: 100%;
  ${media.lessThan("medium")`
    flex-direction: column;
    justify-content: flex-start;
  `};
  overflow: scroll;
`;

const BodyColumn = styled.div`
  width: 100%;
  :last-of-type {
    max-width: 14rem;
  }
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
  ${media.between("small", "medium")`
    width: calc(100% - 4rem);
    `};
  ${media.lessThan("small")`
    width: calc(100% - 2rem);
    margin: 0 1rem;
  `};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  ${media.lessThan("medium")`
    margin-top: 1rem;
  `};
`;

const InfoTitle = styled.h3`
  margin: 0.5rem 0 0.75rem;
  font-size: 0.925rem;
  font-family: Interop-Regular;
  color: var(--color-gray);
`;

const InfoBody = styled.div`
  border-radius: 1rem;
  padding: 1rem 1.25rem;
  filter: drop-shadow(1px 1px 3px var(--color-shadow));
  background-color: var(--color-white);
  margin-bottom: 1rem;
  :last-of-type {
    ${media.lessThan("medium")`
      margin-bottom: 0;
    `};
  }
`;

const MapBox = styled.div`
  border-radius: 1rem;
  width: 100%;
  height: 15rem;
  > * {
    filter: drop-shadow(1px 1px 3px var(--color-shadow)) !important;
  }
`;

const UserBox = styled.div`
  border-radius: 1rem;
  margin: 0.25rem 0;
  padding: 0.5rem 0;
  color: var(--color-darkgray);
`;

const DetailFooter = styled(DetailHeader)`
  padding: 1.5rem 2rem 2rem;
  ${media.lessThan("small")`
    padding: 1rem 1rem 2rem ;
  `};
  .disabled {
    cursor: not-allowed;
  }
`;

const MeetCreate = () => {

    let maker = JSON.parse(sessionStorage.getItem("user_info")).user_nick;

    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        title: "",
        desc: "",
        type: "",
        date: "",
        time: "",
        place: "",
        member: "",
    });

    const {
        title,
        desc,
        type,
        date,
        time,
        place,
        member,
    } = inputValue;

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const register = () => {
        axios.post("/meet/create",{
            mt_maker: maker,
            mt_title: title,
            mt_desc: desc,
            mt_type: type,
            mt_date: date,
            mt_time: time,
            mt_place: place,
            mt_member: member,
        }).then((res) => {
            alert("등록되었습니다.")
            // navigate("/meet/detail");
        })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <DetailContainer>
            <DetailHeader>
                <GathTitle><input type="text" placeholder="제목을 정해주세요" onChange={handleInput} name="title"/></GathTitle>
                <GathDescription><input type="text" placeholder="설명을 적어주세요." onChange={handleInput} name="desc"/></GathDescription>
            </DetailHeader>
            <DetailBody>
                <BodyColumn>
                    <InfoContainer>
                        <InfoTitle>어떤 모임인가요?</InfoTitle>
                        <InfoBody>
                            <div id="sport">
                                <div className="icon">🔍</div>
                                <div className="text">모임</div>
                                <div className="divider">|</div>
                                <div className="text"><input type="text" placeholder="어떤 모임인가요?" onChange={handleInput} name="type"/></div>
                            </div>
                        </InfoBody>
                    </InfoContainer>
                    <InfoContainer>
                        <InfoTitle>언제 하나요?</InfoTitle>
                        {/* <BodyText>날짜</BodyText> */}
                        <InfoBody>
                            <div id="date">
                                <div className="icon">🗓</div>
                                <div className="text">날짜</div>
                                <div className="divider">|</div>
                                <div className="text"><input type="text" placeholder="날짜 입력 '2023-03-02'" onChange={handleInput} name="date"/></div>
                            </div>
                        </InfoBody>
                        <InfoBody>
                            <div id="time">
                                <div className="icon">⏰</div>
                                <div className="text">시간</div>
                                <div className="divider">|</div>
                                <div className="text"><input type="text" placeholder="시간 입력 ex) '2시'" onChange={handleInput} name="time"/></div>
                            </div>
                        </InfoBody>
                    </InfoContainer>
                    <InfoContainer>
                        <InfoTitle>어디서 하나요?</InfoTitle>
                        <div id="place">
                            <div><input type="text" placeholder="장소를 정해주세요" onChange={handleInput} name="place"/></div>
                        </div>
                    </InfoContainer>
                </BodyColumn>
                <BodyColumn id="user-column">
                    <InfoContainer>
                        <InfoTitle>함께 할 사람들</InfoTitle>
                        <div id="users">
                            <div><input type="text" placeholder="인원을 정해주세요." onChange={handleInput} name="member"/></div>
                        </div>
                        <UserBox>
                            유저 프로필
                        </UserBox>
                    </InfoContainer>
                </BodyColumn>
            </DetailBody>
            <DetailFooter>
                <button className="join" onClick={register}>
                    모임 등록하기
                </button>
            </DetailFooter>
        </DetailContainer>
    );
}

export default MeetCreate;