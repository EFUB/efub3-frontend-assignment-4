import { useEffect, useState } from "react";
import client from "./client";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "./Comment";

const DetailPost = () => {
    const { postId } = useParams();
    const [post, setPost] = useState();

    const [edit, setEdit] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedContent, setEditedContent] = useState('');
    const [file, setFile] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const getDetailPost = async () => {
            try {
                const response = await client.get(`/posts/${postId}`);
                setPost(response.data);
                setEditedTitle(response.data.title);
                setEditedContent(response.data.content);
                setFile(response.data.image);
            } catch (err) {
                console.log(err);
            }
        }
        getDetailPost();
    }, []);

    const handleEdit = (e) => {
        e.preventDefault();
        const request = {
            title: editedTitle,
            content: editedContent
        }
        editPost(request, file);
    }
    
    const editPost = async (request, image) => {
        console.log(editedTitle, editedContent);
        try {
            const formData = new FormData();
            formData.append('image', image);
            /*
            formData.append(
                'request',
                [JSON.stringify(request)]
            );
            */
            //formData.append('title', request.title);
            //formData.append('content', request.content);
            formData.append('request', 
                new Blob([JSON.stringify(request)], { type: 'application/json' })
            );

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            await client.put(`/posts/${postId}`, formData, config);
        } catch (err) {
            console.log("수정 에러", err);
        }
        setEdit(false);

    }

    const handleDelete = async () => {
        try {
            await client.delete(`/posts/${postId}`);
            window.location.replace('/');
        } catch(err) {
            alert("삭제 불가");
        }
    }

    const [hearts, setHearts] = useState(0);

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

    return (
        <Div>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            {edit ? (
                <form
                    onSubmit={handleEdit}
                >
                    <input 
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        type="text"
                        name="edit_title"
                    />
                    <br />
                    <input
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        type="text"
                        name="edit_content"
                    />
                    <br />
                    <img src={file} alt="" style={{ width: "100px" }}/>
                    <button type="submit">저장</button>
                </form>
            ) : (
                <>
                {post &&
                    <div>
                        <button onClick={() => setEdit(true)}>수정</button>
                        <button onClick={handleDelete}>삭제</button>
                        <p>postId: {post.postId}</p>
                        <p>nickname: {post.nickname}</p>
                        <p>title: {post.title}</p>
                        <p>content: {post.content}</p>
                        <img src={post.image} alt="" style={{ width: "100px" }}/>
                        <br />
                        <button onClick={handleHeart}>좋아요</button>
                        <button onClick={handleUndoHeart}>좋아요 취소</button>
                        <p>{hearts}</p>
                        <Comment postId={postId}/>
                    </div>
                }
                </>
            )}
        </Div>
    );
}

const Div = styled.div`
    width: 800px;
    padding: 10px;
    border: 1px solid gray;
    text-align: center;
    margin: auto;
`;

export default DetailPost;