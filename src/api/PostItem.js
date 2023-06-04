import { useState } from "react";
import client from "./client";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostItem = ({postId, nickname, title, content, image}) => {
    const [hearts, setHearts] = useState(0);
    const navigate = useNavigate();

    const handleHeart = async () => {
        try {
            await client.post(`/hearts/${postId}`);
            countHearts();
        } catch(err) {
            alert("이미 좋아요를 누른 글입니다.");
        }
    }

    const handleUndoHeart = async () => {
        try {
            await client.delete(`/hearts/${postId}`);
            countHearts();
        } catch(err) {
            alert("좋아요를 누르지 않은 글입니다.");
        }
    }


    const countHearts = async () => {
        try {
            const response = await client.get(`/hearts/${postId}`);
            setHearts(response.data);
        } catch(err) {
            console.log("좋아요 가져오기 오류", err);
        }
    }
    countHearts();

    const handleDelete = async () => {
        try {
            await client.delete(`/posts/${postId}`);
            alert("삭제 완료");
            window.location.reload();
        } catch(err) {
            alert("삭제 불가");
        }
    }

    return (
        <>
                <Div>
                    <button onClick={handleDelete}>삭제</button>
                    <button onClick={() => navigate(`${postId}`)}>상세보기</button>
                    <p>postId: {postId}</p>
                    <p>nickname: {nickname}</p>
                    <p>title: {title}</p>
                    <p>content: {content}</p>
                    <img src={image} alt="" style={{ width: "100px" }}/>
                    <br />
                    <button onClick={handleHeart}>좋아요</button>
                    <button onClick={handleUndoHeart}>좋아요 취소</button>
                    <p>{hearts}</p>
                </Div>
        </>
    );
}

const Div = styled.div`
    margin: 10px;
    width: 500px;
    border: 1px solid gray;
    text-align: center;
    padding: 10px;
`;

export default PostItem;