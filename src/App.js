import { Routes, Route } from "react-router-dom";
import MyNavbar from "./component/organisme/MyNavbar";
import Home from "./pages/Home";
import ArticleSaved from "./pages/ArticleSaved";
import ToTop from "./component/organisme/ToTop";
import PagesArticles from "./component/template/PageArticles";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="saved" element={<ArticleSaved />} />
          <Route path="/:article" element={<PagesArticles />} />
        </Routes>
        <ToTop />
      </div>
    </div>
  );
}

export default App;
