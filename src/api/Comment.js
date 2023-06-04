import { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import CommentWrite from "./CommentWrite";
import client from "./client";
import styled from "styled-components";

const Comment = ({postId}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComment = async () => {
            try {
                const response = await client.get(`/comment/${postId}`);
                setComments(response.data);
            } catch (err) {
                console.log("댓글 가져오기 에러", err);
            }
        }
        getComment();
    }, []);

    return (
        <>
            <Div>
                {comments && (
                    comments.map((comment) => {
                        return (
                            <CommentItem
                                key={comment.commentId}
                                commentId={comment.commentId}
                                commentAuthorNickname={comment.commentAuthorNickname}
                                contents={comment.contents}
                            />
                        )
                    })
                )}
            </Div>
            <CommentWrite postId={postId} />
        </>
    );
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default Comment;