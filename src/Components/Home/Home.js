import "./Home.css";
import Article from "../Article/Article";

const Home = ({ allArticles }) => {
  const mappedArticles = allArticles.map((article) => {
    return (
      <Article
        title={article.title}
        section={article.section}
        subsection={article.subsection}
        byline={article.byline}
        id={article.uri}
        key={article.uri}
        abstract={article.abstract}
        url={article.url}
        image={article.multimedia[0].url}
        published_date={article.published_date}
      />
    );
  });

  return <section className="articles-container">{mappedArticles}</section>;
};

export default Home;
