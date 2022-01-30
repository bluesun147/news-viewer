import React, {useState, useCallback} from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";
// App.js
const App = () => {
  const [category, setCategory] = useState('all');
  // category값을 업데이트하는 함수
  const onSelect = useCallback(category => setCategory(category), []);
  return (
    <>
    {/* 만든 후 Categories, NewsList 컴포넌트에 props 로 전달. */}
    <Categories category = {category} onSelect={onSelect}/>
    <NewsList category = {category}/>
    </>
  );
};

export default App;