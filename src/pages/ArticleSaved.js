import { useSelector } from "react-redux";
import ArticleFulfilled from "../component/organisme/ArticleFulfilled";
import ArticleTitle from "../component/organisme/ArticleTitle";
import IsPending from "../component/organisme/IsPending";

const ArticleSaved = () => {
  const newState = useSelector((state) => state.article);
  const articleSaveds = newState.entitiesSaved;
  // ini untuk menampilkan card card yang disimpan oleh user
  return (
    <>
      <section id="home" className="pt-24 pb-32 min-h-screen ">
        <div className="container px-20">
          {newState.isFetchPending && <IsPending />}
          {!newState.isFetchPending && <ArticleTitle title="saved" />}
          {newState.isFetchSuccess && (
            <div className="grid justify-center md:grid-cols-2 md:gap-8 xl:grid-cols-4">
              {articleSaveds.map((articleFetch, index) => (
                <ArticleFulfilled articleFetch={articleFetch} index={index} category="Saved" key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ArticleSaved;
