import { useState } from "react";
import client from "./client";

const CommentWrite = ({ postId }) => {
    const [contents, setContents] = useState('');

    const handleClick = () => {
        const request = {
            postId: postId,
            contents: contents
        };
        writeComment(request);
    }

    const writeComment = async (request) => {
        try {
            await client.post(`/comment`, request);
            window.location.reload();
        } catch (err) {
            console.log("댓글 작성 오류", err);
        }
    }

    return (
        <>
            <input
                type="text"
                onChange={(e) => setContents(e.target.value)}
                placeholder="댓글 내용"
                name="comment_contents"
            />
            <button onClick={handleClick}>댓글 달기</button>
        </>
    );
}

export default CommentWrite;