
import "./Home.css";
import Article from '../Article/Article';

const Home = () => {
  const mappedArticles = allArticles.map((article) => {
    return (
      <Article/>

    );
  });

  return (
   <section className="articles-container">{mappedArticles}</section>
  );
};

export default Library;