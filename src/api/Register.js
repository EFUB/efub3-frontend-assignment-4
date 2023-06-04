import { useState } from "react";
import styled from "styled-components";
import client from "./client";

const Register = () => {
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const handleClick = () => {
        const request = {
            userName: userName,
            password: password,
            nickname: nickname,
        };
        NewRegisterApi(request);
    }

    const NewRegisterApi = async (request) => {
        try {
            const response = await client.post('/users/register', request);
        } catch (error) {
            console.log("회원가입 에러", error);
        }
    }


    return (
        <Div>
            <input type="text" name="userName" placeholder="이름" onChange={(e) => setuserName(e.target.value)}/>
            <input type="text" name="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}/>
            <input type="text" name="nickname" placeholder="닉네임" onChange={(e) => setNickname(e.target.value)}/>
            <button type="submit" onClick={handleClick}>회원가입</button>
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    padding: 200px;
`;

export default Register;