import React from 'react';
import styled from "styled-components";

const GlobalStyle = styled.div`
  * {
    box-sizing: border-box;
  }
`;

const ChatContainer = styled.div`
  width: 100%;
  height: 640px;
  background: #eff3f7;
  margin: 0 auto;
  font-size: 0;
  border-radius: 5px;
  overflow: hidden;
`;

const Aside = styled.div`
  width: 260px;
  height: 800px;
  background-color: RGB(54,204,200,0.5);
  display: inline-block;
  font-size: 15px;
  vertical-align: top;
`;

const Main = styled.div`
  width: 490px;
  height: 800px;
  display: inline-block;
  font-size: 15px;
  vertical-align: top;
`;

const AsideHeader = styled.header`
  padding: 30px 20px;
`;

const AsideUl = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style-type: none;
  overflow-y: auto;
  height: 690px;
`;

const AsideLiH2 = styled.h2`
  font-size: 14px;
  color: #000000;
  font-weight: normal;
  margin-bottom: 5px;
`;

const AsideLiH3 = styled.h3`
  font-size: 12px;
  color: #7e818a;
  font-weight: normal;
`;

const MainHeader = styled.header`
  height: 110px;
  padding: 30px 20px 30px 30px;
`;

const MainHeaderDiv = styled.div`
  margin-left: 10px;
  margin-right: 145px;
`;

const MainFooter = styled.div`
  display: flex;
  height: 155px;
  padding: 20px 30px 10px 20px;
`

const FooterTextarea = styled.textarea`
resize: none;
border: none;
display: block;
width: 100%;
height: 80px;
border-radius: 3px;
padding: 20px;
font-size: 13px;
margin-bottom: 13px;
`;

const FooterBtn = styled.button`
`

const Chat = () => {
    return (
        <GlobalStyle>
            <ChatContainer>
                <Aside>
                    <AsideHeader>닉네임검색</AsideHeader>
                    <AsideUl></AsideUl>
                </Aside>
                <Main>
                    <MainHeader>
                        <MainHeaderDiv>
                            <AsideLiH2>님과의 채팅입니다.</AsideLiH2>
                            <AsideLiH3>제목</AsideLiH3>
                        </MainHeaderDiv>
                    </MainHeader>
                    <>
                    </>
                    <MainFooter>
                        <FooterTextarea placeholder="메시지를 입력하세요."/>
                        <FooterBtn>Send</FooterBtn>
                    </MainFooter>
                </Main>
            </ChatContainer>
        </GlobalStyle>
    );
};


export default Chat;
