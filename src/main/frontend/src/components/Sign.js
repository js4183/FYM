import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0px auto;
  margin-top: 25px;
  margin-bottom: 25px;
  border: 2px solid var(--color-maingreen--25);
  border-radius: 20px;
  padding: 70px 50px 70px 50px;
  background-color: var(--color-maingreen--25);
`;

const P = styled.p`
  font-size: 20px;
  margin: 0px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 350px;
  height: 40px;
  margin: 0px 0px 10px 0px;
  background-color: white;
`;

const InputContainer =styled.div`
  display: flex;
  flexDirection: row;
  justifyContent: center;
`;

const CheckInput = styled.input`
  width: 350px;
  height: 40px;
  margin: 0px 0px 10px 0px;
  background-color: white;
`;

const Button = styled.button`
  width: 500px;
  height: 45px;
  margin: 10px 5px 10px 5px;
  background-color: var(--color-maingreen--100);
  border: 0px solid var(--color-maingreen--100);
  border-radius: 5px;
`;
const CheckBtn = styled.button`
  width: 100%;
  height: 40px;
  margin-left: 10px;
  background-color: var(--color-maingreen--100);
  border: 0px solid var(--color-maingreen--100);
  border-radius: 5px;
`;

const Sign = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        id: "",
        pw1: "",
        pw2: "",
        nick: "",
    });

    const [idAlertSentence, setIdAlertSentence] = useState(
        "아이디를 입력해 주세요."
    );
    const [nickAlertSentence, setNickAlertSentence] = useState(
        "닉네임을 입력해 주세요."
    );
    const [pwAlertSentence, setPwAlertSentence] = useState("");
    const {
        id,
        pw1,
        pw2,
        nick,
    } = inputValue;

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const addUser = () => {
        axios.post("/user/sign",{
            user_id: id,
            user_pw: pw2,
            user_nick: nick,
        })
            .then((res) => {
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const idCheck = (id) => {
        let regId = /[a-z0-9]{4,16}$/;
        if (regId.test(id)) {
            setIdAlertSentence("사용가능한 아이디입니다");
        } else {
            setIdAlertSentence("올바르지 않은 아이디입니다");
        }
    };

    const pwCheck = (pw2) => {
        if (pw1 === pw2 && 3 < pw2.length && pw2.length < 17) {
            setPwAlertSentence("사용가능한 비밀번호입니다.");
        } else if (pw1 !== pw2) {
            setPwAlertSentence("비밀번호가 일치하지 않습니다.");
        } else {
            setPwAlertSentence("다시입력해 주세요");
        }
    };

    const checkId = () => {
        axios.post("/user/checkid",{
            user_id:id,
        })
            .then((res)=>{
                console.log(res.data);
                if(res.data===1){
                    setIdAlertSentence("이미 있는 아이디입니다");
                }else{
                    setIdAlertSentence("사용가능한 아이디입니다");
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    const checkNick = () => {
        axios.post("/user/checknick",{
            user_nick:nick,
        })
            .then((res)=>{
                console.log(res);
                if(res.data===1){
                    setNickAlertSentence("이미 있는 닉네임입니다");
                }else{
                    setNickAlertSentence("사용가능한 닉네임입니다");
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return (
        <SignContainer>
            <h1>회원가입을 해주세요.</h1>
            <P>아이디</P>
            <InputContainer>
                <div>
                    <CheckInput
                        type="text"
                        className="userInput"
                        onChange={handleInput}
                        onBlur={() => idCheck(id)}
                        name="id"
                    />
                    <div className="inputDescription">{idAlertSentence}</div>
                </div>
                <CheckBtn onClick={checkId}
                          disabled={
                              !(
                                  id.length > 3
                              )}>아이디 중복확인</CheckBtn>
            </InputContainer>
            <P>비밀번호</P>
            <div>
                <Input
                    type="password"
                    className="userInput"
                    onChange={handleInput}
                    name="pw1"
                />
                <div className="inputDescription">(영문 대소문자/숫자 4자~16자)</div>
            </div>
            <P>비밀번호 확인</P>
            <div>
                <Input
                    type="password"
                    className="userInput"
                    onChange={handleInput}
                    onBlur={() => pwCheck(pw2)}
                    name="pw2"
                />
                <div className="inputDescription">{pwAlertSentence}</div>
            </div>
            <P>닉네임</P>
            <InputContainer>
                <div>
                    <CheckInput
                        type="text"
                        className="nickInput"
                        onChange={handleInput}
                        name="nick"
                    />
                    <div className="inputDescription">{nickAlertSentence}</div>
                </div>
                <CheckBtn onClick={checkNick}
                          disabled={
                              !(
                                  nick.length >=2 && nick.length <=6
                              )}>닉네임 중복확인</CheckBtn>
            </InputContainer>

            <Button
                onClick={addUser}
                className="signupBtn"
                disabled={
                    !(
                        id.length > 3 &&
                        pw2.length > 3 &&
                        nick.length >=2 && nick.length <=6
                    )
                }
            >
                회원가입
            </Button>
        </SignContainer>
    )
}

export default Sign