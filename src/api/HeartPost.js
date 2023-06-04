import { useState } from "react";
import client from "./client";
import PostItem from "./PostItem";
import styled from "styled-components";

const HeartPost = () => {
    const [posts, setPosts] = useState([]);
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        getHeartPost();
        setVisible(true);
    }

    const getHeartPost = async () => {
        try {
            const response = await client.get('/hearts/user');
            setPosts(response.data);
        } catch(err) {
            console.log("좋아요 게시물 오류", err);
        }
    }

    return (
        <>
            <button onClick={handleClick}>좋아요 누른 게시물 보기</button>
            <div>
                {visible && (
                    <>
                        <button onClick={() => setVisible(false)}>닫기</button>
                        <Div>
                            {posts && (
                                posts.map((post) => {
                                    return (
                                        <PostItem
                                            key={post.postId}
                                            postId={post.postId}
                                            nickname={post.nickname}
                                            title={post.title}
                                            content={post.content}
                                            image={post.image}
                                        />
                                    )
                                })
                            )}
                        </Div>
                    </>
                )}
            </div>
        </>
    );
}

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default HeartPost;