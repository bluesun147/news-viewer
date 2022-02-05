import React from "react";
import Categories from "../Categories";
import NewsList from "../NewsList";
// NewsPages.js
const NewsPage = ({match}) => {
    // 카테고리가 선택안됐으면 기본값 all로 사용
    const category = match.params.category || 'all';
    return (
        <>
        <Categories />
        <NewsList category = {category} />
        </>
    );
};

export default NewsPage;