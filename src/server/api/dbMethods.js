const axios = require('axios').default;

const sendParams = async (obj) => {
    try{
        await axios.post(`http://simple-todo-mocha.vercel.app/todos/`, obj);
    }catch(e){
        console.log(e);
    }
}

const editParams = async (id, obj) => {
    try{
        await axios.put(`http://simple-todo-mocha.vercel.app/todos/${id}`, obj);
        
    }catch(e){
        console.log(e);
    }
}

const getPosts = async (obj) => {
    try{
        const posts = await axios.get('http://simple-todo-mocha.vercel.app/todos/');
        return posts
    }catch(e){
        console.log(e);
    }
}

const deletePost = async (id) => {
    try{
        await axios.delete(`http://simple-todo-mocha.vercel.app/todos/${id}`)
    }catch(e){
        console.log(e);
    }
}

export {
    sendParams,
    getPosts,
    editParams,
    deletePost}