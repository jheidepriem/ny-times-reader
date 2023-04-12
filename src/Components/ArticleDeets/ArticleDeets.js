import "../ArticleDeets/ArticleDeets.css";
import { Link } from "react-router-dom";

const ArticleDeets = ({ articleDataDetails }) => {

  return (
    <main className="main-article-container">
      <h1 className="article-deets-title">{articleDataDetails.title}</h1>
      <p>{articleDataDetails.byline}</p>
      <img
        className="article-image"
        src={articleDataDetails.multimedia[0].url}
        alt="article"
      />
      <section className="article-details-container">
        <p>{articleDataDetails.abstract}</p>
        <Link className="article-link"
            to={{
              pathname:` ${articleDataDetails.url}`,
            }}
            target="_blank"
          > Visit the New York Times Full Article
          </Link>
      </section>
    </main>
  );
};

export default ArticleDeets;
