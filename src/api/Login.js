import { useState, useEffect } from "react";
import client from "./client";
import Post from "./Post";
import PostWrite from "./PostWrite";
import HeartPost from "./HeartPost";
import Register from "./Register";
import styled from "styled-components";


const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const savedToken = localStorage.getItem("efubtoken");
    useEffect(() => {
        if (savedToken) {
            setIsLoggedIn(true);
        }
    }, []);   

    const handleClick = () => {
        const request = {
            userName: userName,
            password: password,
        };
        logIn(request);
    }

    const logIn = async (request) => {
        try {
            const response = await client.post('/users/login', request);
            console.log(response);
            const token = response.data.accessToken;
            localStorage.setItem('efubtoken', token);
            setIsLoggedIn(true);
            window.location.reload();
        } catch (error) {
            console.log("로그인 에러", error);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("efubtoken");
        setIsLoggedIn(false);
    }


    return (
        <>
            {isLoggedIn ? (
                <>
                    <button onClick={handleLogout}>로그아웃</button>
                    <br />
                    <PostWrite />
                    <br />
                    <HeartPost />
                    <br />
                    <Post/>
                </>
            ) : (
                <Div>
                    <Register />
                    <LoginDiv>
                        <input type="text" name="userName" placeholder="이름" onChange={(e) => setUserName(e.target.value)}/>
                        <input type="text" name="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}/>
                        <button type="submit" onClick={handleClick}>로그인</button>
                    </LoginDiv>
                </Div>
            )}
        </>
    );
}

const Div = styled.div`
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const LoginDiv = styled.div`
    display: flex;
`;

export default Login;