import { useState } from "react";
import client from "./client";
import styled from "styled-components";

const PostWrite = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);

    const handlePost = (e) => {
        e.preventDefault();
        const request = {
            title: title,
            content: content,
        };
        postNewOne(request, file);
    }

    const postNewOne = async (request, image) => {
        try {
            const formData = new FormData();
            formData.append('image', image);
            formData.append(
                'request', 
                new Blob([JSON.stringify(request)], { type: 'application/json' })
            );


            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            await client.post('/posts', formData, config);
            setTitle('');
            setContent('');
            setFile(null);
            window.location.reload();
        } catch (err) {
            console.log("글쓰기 에러", err);
        }
    }

    return (
        <Div>
            <input
                placeholder="제목"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                name="post_title"
            />
            <input
                placeholder="내용"
                onChange={(e) => setContent(e.target.value)}
                type="text"
                name="post_content"
            />
            <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])}/>
            <button onClick={handlePost}>작성하기</button>

        </Div>

    );
}

const Div = styled.div`
    display: flex;
    justify-content: center;
`;

export default PostWrite;