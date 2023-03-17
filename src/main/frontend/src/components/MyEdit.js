import React, { useRef, useState} from 'react';
import '../styles/mypage.css';
import axios from "axios";

const MyEdit = () => {

    const user_id = JSON.parse(sessionStorage.getItem("user_info")).user_id;
    const user_nick = JSON.parse(sessionStorage.getItem("user_info")).user_nick;

    //초기 설정
    const [pw, setPw] = useState();
    const [nick, setNick] = useState();
    const [pwConfirm, setPwConfirm] = useState();

    //오류메세지 상태 저장
    const [passwordMessage, setPasswordMessage] = useState("");
    const [nickMessage, setNickMessage] = useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

    //유효성 검사
    const [isPassword, setIsPassword] = useState(false);
    const [isNick, setIsNick] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

    // 변동값
    const nickRef = useRef();
    const pwRef = useRef();

    //수정하기 버튼
    const [editBtn, setEditBtn] = useState(true);

    //비밀번호 유효성 검사
    const onChangePassword = (e) => {
        const currentPassword = e.target.value;
        setPw(currentPassword);
        const passwordRegExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{6,12}$/;

        if(!passwordRegExp.test(currentPassword)){
            setPasswordMessage("숫자+영문자+특수문자 조합으로 6자리 이상 12자리 이하로 입력해주세요!");
            setIsPassword(false);
        }else{
            setPasswordMessage("안전한 비밀번호입니다.")
            setIsPassword(true);
        }
    };
    const onChangeNick = (e) => {
        const currentNick = e.target.value;
        setNick(currentNick);
        const nickRegExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

        if(!nickRegExp.test(currentNick)){
            setNickMessage("숫자+영문자+특수문자 조합으로 4자리 이상 12자리 이하로 입력해주세요!");
            setIsNick(false);
        }else{
            setNickMessage("가능한 닉네임 입니다.")
            setIsNick(true);
        }
    };

    //비밀번호 일치여부 확인
    const onChangePasswordConfirm = (e) => {
        const currentPwConfirm = e.target.value;
        setPwConfirm(currentPwConfirm);
        if (pw !== currentPwConfirm){
            setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
            setIsPasswordConfirm(false);
        }else{
            setPasswordConfirmMessage("비밀번호가 일치합니다");
            setIsPasswordConfirm(true);
        }
    };

    //수정하기 버튼 클릭 시
    const goToEdit = (e) => {
        axios.post("/user/update", {
                user_id: user_id,
                user_nick: nickRef.current.value,
                user_pw: pwRef.current.value,
            }).then((res)=>{
                alert("회원정보 수정이 완료되었습니다.")
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div className="userEdit">
            <h4>회원정보 수정</h4>
            <div className="editBox">
                <table className="editTable">
                    <tr>
                        <td className="editTitle">아이디</td>
                        <td className="editContent">{user_id}</td>
                    </tr>
                    <tr>
                        <td className="editTitle">닉네임</td>
                        <td className="editContent"><input type="nick" name="user_nick" placeholder="변경할 닉네임을 입력해주세요"
                                                           onChange={onChangeNick} ref={nickRef} maxLength='12'/>
                            <p className="message">{nickMessage}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="editTitle">비밀번호</td>
                        <td className="editContent"><input type="password" name="user_pw" placeholder="변경할 비밀번호를 입력해주세요" onChange={onChangePassword} ref={pwRef} maxlength='12'/>
                            <p className="message">{passwordMessage}</p>
                        </td>
                    </tr>
                    <tr>
                        <td className="editTitle">비밀번호 확인</td>
                        <td className="editContent"><input type="password" name="user_pw" placeholder="변경할 비밀번호를 입력해주세요" onChange={onChangePasswordConfirm} maxlength='12'/>
                            <p className="message">{passwordConfirmMessage}</p>
                        </td>
                    </tr>
                </table>
                <button className="editSubmit" onClick={goToEdit}>수정하기</button>
            </div>
        </div>
    );
};

export default MyEdit;