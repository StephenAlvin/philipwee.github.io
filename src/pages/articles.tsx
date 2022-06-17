import QuittingSchool from "components/quit-school";
import TenMinsYC from "components/ten-mins-yc";
import ArticleLayout from "components/article-layout";
import { Route } from "react-router-dom";

export default function Articles() {
  return (
    <ArticleLayout>
      <Route path="quit-school" element={<QuittingSchool />}></Route>
      <Route path="ten-mins-yc" element={<TenMinsYC />}></Route>
      <Route index element={<TenMinsYC />}></Route>
    </ArticleLayout>
  );
}
