<template>
    <h1>Form Data 관리</h1>
    <form class="form-container">
        <div class="input-group">
            <span class="span_text">텍스트</span>
            <input type="text" placeholder="여기에 입력하세요" v-model="inputText">
        </div>
        <div class="input-group">
            <span class="span_text">파일</span>
            <input type="file" ref="inputFile">
        </div>
        <input type="button" value="보내기" @click="inputFile">
    </form>
    <input type="button" value="데이터 받기" @click="getImage">
    <img id="imgTest">
    </template>
<script>
import axios from 'axios';

export default{
    name: 'formStudy',
   data() {
    return {
        inputText: '',
    }
   },
   methods: {
    inputFile() {
        let formData = new FormData();
        console.log(formData);
        formData.append('input', this.inputText);
        formData.append('inputFile', this.$refs.inputFile.files[0]);

        try {
            axios.post('http://localhost:3000/fileInput', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                console.log(res);
            })


        }
        catch(error) {
            console.error('err: ', error);
        }
    },
    getImage() {
        axios.get('http://localhost:3000/getImage')
            .then(res => {
                // 응답에서 이미지 데이터를 Base64로 인코딩
                console.log(res.data);
                let imageSrc = `data:image/jpeg;base64,${res.data.data[1]}`;
                document.getElementById('imgTest').src = imageSrc;
            })
    }
   }
}
</script>
<style scoped>
.form-container {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.input-group {
    margin-bottom: 20px;
}

.span_text {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    color: #333;
}

input[type="text"], input[type="file"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box; /* input size includes padding */
}

input[type="text"] {
    margin-bottom: 10px; /* Spacing between text input and file input */
}

input[type="file"] {
    background-color: #fff;
    cursor: pointer;
}

input[type="text"]::placeholder {
    color: #aaa;
}
</style>