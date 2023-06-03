import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import styled from "styled-components";
import client from "./client";

const Post = () => {
    const [visible, setVisible] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await client.get('/posts');
                setPosts(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        getPost();
    }, []);

    return (
        <>
            <button onClick={() => setVisible(!visible)}>리스트</button>
            {visible && (
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
            )}
        </>
    );
}

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default Post;