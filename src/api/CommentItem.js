import styled from "styled-components";
import client from "./client";

const CommentItem = ({commentId, commentAuthorNickname, contents}) => {

    const deleteComment = async () => {
        try {
            await client.delete(`/comment/${commentId}`);
            window.location.replace('/');
        } catch (err) {
            console.log("삭제 오류", err);
            alert(err.message);
        }
    }

    return (
        <Div>
            <p>{commentAuthorNickname}</p>
            <Line></Line>
            <p>{contents}</p>
            <button onClick={deleteComment}>삭제</button>
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    padding: 0;
    margin: auto;
    border: 1px solid lightgray;
    margin-top: 5px;
    margin-bottom: 5px;
    p {
        padding: 0;
        margin: 0 5px;
    }
`;
const Line = styled.div`
    border: 1px solid lightgray;
`;

export default CommentItem;