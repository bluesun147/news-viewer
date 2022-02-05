import React from "react";
import { Route } from "react-router-dom";
import NewsPage from "./pages/NewsPages";
// App.js
const App = () => {
  // 물음표는 category값이 선택적(optional) 이라는 뜻
  // 즉 있을수도 있고 없을수도 있다는 뜻
  // category URL 파라미터가 없다면 전체 카테고리 택한것으로 간주
  return <Route path = '/:category?' component = {NewsPage} />;
};

export default App;