import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import axios from "axios";

const LoginContainer = styled.div`
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
  width: 500px;
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
  cursor: pointer;
`;

const SignIna = styled.a`
  width: 500px;
  height: 45px;
  margin: 10px 5px 10px 5px;
  background-color: var(--color-maingreen--100);
  border: 0px solid var(--color-maingreen--100);
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: black;
  line-height: 45px;
`;

const LoginFooter = styled.div`
  display: flex;
  flexDirection: row;
  justifyContent: center;
`;

const SignIn = ({connect}) => {
    const Navigate = useNavigate();

    const [inputValue, setInputValue] = useState({
        id:"",
        pw:"",
    });

    const {
        id,
        pw,
    } = inputValue;

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const toLogin = () => {
        axios.post("/user/login",{
            user_id : id,
            user_pw : pw,
        }).then((res) => {
            const user_info = res.data;
            if(inputValue.id === user_info.user_id){
                window.sessionStorage.setItem('user_info', JSON.stringify(user_info));
                // let user_nick = user_info.user_nick;
                Navigate("/");
                connect();
            }
        })
            .catch((err)=>{
                console.log(err);
            })
    }

    const toSignUp = () =>{
        Navigate("/Sign")
    }
    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            toLogin(); // Enter 입력이 되면 클릭 이벤트 실행
        }
    };

    return (
        <LoginContainer>
            <h1>로그인을 해주세요.</h1>
            <P>아이디</P>
            <div>
                <Input
                    className="idInput"
                    onChange={handleInput}
                    type="text"
                    name="id"/>
            </div>
            <P>비밀번호</P>
            <div>
                <Input
                    className="pwInput"
                    onChange={handleInput}
                    type="password"
                    name="pw"
                    onKeyPress={handleOnKeyPress} // Enter 입력 이벤트 함수
                />
            </div>
            <LoginFooter>
                <Button
                    className="signBtn"
                    onClick={toLogin}
                >
                    로그인
                </Button>
                <Button onClick={toSignUp}>회원가입</Button>
            </LoginFooter>
            <LoginFooter>
                <SignIna>카카오 로그인</SignIna>
            </LoginFooter>
            <LoginFooter>
                <Button>네이버 로그인</Button>
            </LoginFooter>
        </LoginContainer>
    )
}

export default SignIn