// axios를 사용한 HTTP 요청
import axios from 'axios';

// 서버 API의 기본 URL 설정
const API_URL = 'http://localhost:4000'; // 실제 서버의 URL로 대체 필요

export function getPosts() {
    return axios.get(`${API_URL}/getPosts`);
}

export function getPostById(id) {
    return axios.get(`${API_URL}/getPosts/${id}`);
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

export function updatePost(id, data) {
    return axios.patch(`${API_URL}/posts/${id}`, data);
}

export function deletePost(id) {
    return axios.delete(`${API_URL}/posts/${id}`);
}