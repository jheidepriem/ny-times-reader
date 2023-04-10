import "./Home.css";
import Article from "../Article/Article";

const Home = ({ allArticles }) => {
  const mappedArticles = allArticles.map((article) => {
    return (
      <Article
        title={article.title}
        byline={article.byline}
        id={article.id}
        key={article.id}
        abstract={article.abstract}
        uri={article.uri}
        url={article.url}
        image={article.multimedia[0].url}
      />
    );
  });

  return <section className="articles-container">{mappedArticles}</section>;
};

export default Home;
