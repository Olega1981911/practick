import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Math.random() * 2
        }
        create(newPost);

        setPost({title: '', body: ''});
    }
    return (

        <form action="">
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="name post"/>
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="job description"/>
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>

    );
};

export default PostForm;
