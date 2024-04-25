// axios를 사용한 HTTP 요청
import axios from 'axios';

// 서버 API의 기본 URL 설정
const API_URL = 'http://localhost:4000'; // 실제 서버의 URL로 대체 필요

export function getPosts() {
    return axios.get(`${API_URL}/getPosts`);
}

export function getBoards() {
    return axios.get(`${API_URL}/getBoards`);
}


export function postLikeCount(num, id) {
    return axios.post(`${API_URL}/upLikeCount`,
{
    likeCount: num,
    boardId:id
});
}

export function getPostById(id) {
    return axios.get(`${API_URL}/getDetail`,
{params: {
    boardId: id
}});
}

export function getBoardById(board_id) {
    return axios.get(`${API_URL}/getBoardDetail`,
{params: {
    boardId: board_id
}});
}
// FormData를 사용하여 게시글 데이터를 서버에 전송
export function createPost(formData) {
    return axios.post(`${API_URL}/posts`, 
    formData, 
    {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export function createBoard(userData){
    return axios.post(`${API_URL}/createBoard`, userData);
}


export function updatePost(data) {
    return axios.post(`${API_URL}/updatePost`, data);
}

export function updateBoard(data) {
    return axios.post(`${API_URL}/updateBoard`, data);
}
export function deletePost(id) {
    return axios.post(`${API_URL}/delPost`,{boardId:id});
}

export function deleteBoard(id) {
    return axios.post(`${API_URL}/delBoard`,{boardId:id});
}

export function createId(userData){
    return axios.post(`${API_URL}/signIn`, userData);
}

export function checkUser(userId, userPwd){
        console.log('js:'+userId);
        console.log('js:'+userPwd);
        // let userData={
        //     userid: userid,
        //     userPwd: userPwd
        // }
    return axios.post(`${API_URL}/login`, { userId: userId,
            userPwd: userPwd});

    
}
