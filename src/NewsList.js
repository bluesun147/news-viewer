import React, {useState, useEffect} from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from 'axios';

// NewsList.js
// API 요청하고 뉴스 데이터가 들어있는 배열을 
// 컴포넌트 배열로 변환해 렌더링해주는 컴포넌트
const NewsListBlock = styled.div`
box-sizing:border-box;
padding-bottom:3rem;
width:768px;
margin:0 auto;
margin-top: 2rem
@media screen and (max-width:768px) {
width:100%
padding-left:1rem
padding-right:1rem
}`

// 나중에 이 컴포넌트에서 API 요청하게 됨
// 아직 데이터 불러오고 있지 않으니 예시 데이터 넣고 보이게.
const sapmleArticle = {
    title: 'title',
    description: 'des',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160'
};

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    // API 요청 대기중일때 true, 끝나면 false
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // async 사용하는 함수 따로 선언
        const fetchData = async() => {
            setLoading(true); // 요청 대기중
            try{
                const response = await axios.get(
                    'https://newsapi.org/v2/top-headlines?country=us&apiKey=b1018dcfde7246b2a3924270fb22d4b1'
                );
                setArticles(response.data.articles); // 위 주소에서 받아온 데이터에서 articles 꺼냄
            } catch (e) {
                console.log(e);
            }
            setLoading(false); // 요청 끝남
        };
        fetchData();
    }, []);

    // 대기 중일 때
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    }
    // 아직 articles 값 설정안됐을 때
    if (!articles) { // 현재값 null 아닌지 검사 필수
        return null;
    }
    // articles 값 유효할 때
    return (
        <NewsListBlock>
            {// 데이터를 불러와서 뉴스 테이터 배열을 map함수 사용해 컴포넌트 배열로 변환
            // 주의할 점은 map 사용하기 전에 꼭 현재 값이 null이 아닌지 검사해야 함
            // 데이터 없을 때 null에는 map함수 없기때문에 렌더링 과정에서 오류 발생함
                articles.map(article => (
                    <NewsItem key = {article.url} article = {article}/>
                ))
            }
        </NewsListBlock>
    );
};

export default NewsList;