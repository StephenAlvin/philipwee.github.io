import React from "react";
import MainPage from "pages/main-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuittingSchool from "components/quit-school";
import TenMinsYC from "components/ten-mins-yc";
import ArticleLayout from "components/article-layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/articles" element={<ArticleLayout />}>
          <Route path="quit-school" element={<QuittingSchool />}></Route>
          <Route path="ten-mins-yc" element={<TenMinsYC />}></Route>
          <Route index element={<TenMinsYC />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
