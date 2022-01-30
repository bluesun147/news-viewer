import React from "react";
import styled, {css} from "styled-components";
// Categories.js
// categories 배열 안에 name과 text값 들어있는
// 객체 넣어 한글로 된 카테고리와 실제 카테고리 값 연결시킴
const categories = [
    {
        name: 'all', // 실제 카테고리 값
        text: '전체보기' // 렌더링 시 사용할 한글 카테고리
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '비즈니스'
    },
    {
        name: 'technology',
        text: '기술'
    },
];

const CategoriesBlock = styled.div`
display: flex;
padding: 1rem;
width:768px;
margin:0 auto;
margin-top: 2rem;
@media screen and (max-width:768px) {
width:100%;
overflow-x:auto;
}`

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }

  ${props =>
    props.active && css`
      font-weight: 600;
      border-bottom: 2px solid #22b8cf;
      color: #22b8cf;
      &:hover {
        color: #3bc9db;
      }
  `}

& + & {
    margin-left: 1rem;
  }
`;

const Categories = ({onSelect, category}) => { // 파라미터에 props
    return (
        <CategoriesBlock>
            
            {categories.map(c => ( // categories배열을 Category컴포넌트 배열로 변환
                <Category key = {c.name} 
                active = {category === c.name} 
                onClick={() => onSelect(c.name)}>{c.text}</Category>
        ))}
        </CategoriesBlock>
    );
};

export default Categories;