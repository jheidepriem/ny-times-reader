import "../ArticleDeets/ArticleDeets.css";
import { Link } from "react-router-dom";

const ArticleDeets = ({ articleData }) => {
  return (
    <main className="main-article-container">
      <h1>{articleData.title}</h1>
      <p>{articleData.byline}</p>
      <img
        className="article-image"
        src={articleData.multimedia[0].url}
        alt="article image"
      />
      <section className="article-details-container">
        <p>{articleData.published_date}</p>
        <p>{articleData.section}</p>
        <p>{articleData.abstract}</p>
        <Link
            to={{
              pathname:{articleData.url},
            }}
            target="_blank"
          >
          </Link>
      </section>
    </main>
  );
};

export default ArticleDeets;
