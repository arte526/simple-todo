const axios = require('axios').default;

const sendParams = async (obj) => {
    try{
        await axios.post(`http://localhost:8021/todos/`, obj);
    }catch(e){
        console.log(e);
    }
}

const editParams = async (id, obj) => {
    try{
        await axios.put(`http://localhost:8021/todos/${id}`, obj);
        
    }catch(e){
        console.log(e);
    }
}

const getPosts = async (obj) => {
    try{
        const posts = await axios.get('http://localhost:8021/todos/');
        return posts
    }catch(e){
        console.log(e);
    }
}

const deletePost = async (id) => {
    try{
        await axios.delete(`http://localhost:8021/todos/${id}`)
    }catch(e){
        console.log(e);
    }
}

export {
    sendParams,
    getPosts,
    editParams,
    deletePost}