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
        email: "",
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
        email,
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
            user_email: email,
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

    const emailCheck = (email) => {
        let regEmail = /[a-z0-9]{4,16}$/;
        if (regEmail.test(email)) {
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

    const checkEmail = () => {
        axios.get(`/user/checkemail/${email}`)
            .then((res)=>{
                if(res.data==true){
                    alert("이미 사용중인 아이디입니다.");
                }else{
                    alert("사용 가능한 아이디입니다.");
                }
            })
            .catch((err)=>{
                console.log(err);
            })
    };

    const checkNick = () => {
        axios.get(`/user/checknick/${nick}`)
            .then((res)=>{
                if(res.data==true){
                    alert("이미 사용중인 닉네임입니다.");
                }else{
                    alert("사용 가능한 닉네임입니다.");
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
                        onBlur={() => emailCheck(email)}
                        name="email"
                    />
                    <div className="inputDescription">{idAlertSentence}</div>
                </div>
                <CheckBtn onClick={checkEmail}
                          disabled={
                              !(
                                  email.length > 3
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
                                  nick.length >=2 && nick.length <=12
                              )}>닉네임 중복확인</CheckBtn>
            </InputContainer>

            <Button
                onClick={addUser}
                className="signupBtn"
                disabled={
                    !(
                        email.length > 3 &&
                        pw2.length > 3 &&
                        nick.length >=2 && nick.length <=12
                    )
                }
            >
                회원가입
            </Button>
        </SignContainer>
    )
}

export default Sign