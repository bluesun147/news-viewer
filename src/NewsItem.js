import React from "react";
import styled from "styled-components";
// NewsItem.js
// 각 뉴스 정보를 보여주는 컴포넌트
const NewsItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
    display: block;
    width: 160px;
    height: 100px;
    object-fit: cover;
    }
}
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;
// article 객체를 props로 통째로 받아와 사용
const NewsItem = ({article}) => {
    // 객체 구조 분해 할당
    const {title, description, url, urlToImage} = article;
    return (
        <NewsItemBlock>
            {urlToImage && ( // 이미지
                <div className="thumbnail">
                    <a href = {url} target = "_blank" rel = "noopener noreferrer">
                        <img src = {urlToImage} alt = 'thumbnail' />
                    </a>
                </div>
            )}

            <div className="contents">
                <h2>
                    <a href = {url} target = "_blank" rel = "noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    )
}

export default NewsItem;