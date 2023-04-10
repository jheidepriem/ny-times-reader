import { Link } from "react-router-dom";
import "../Article/Article.css";

const Article = ({ title }) => {
  return (
    <Link to={`/article/${id}`} key={id}>
      <section className="article-title">
        <h1>{title}</h1>
      </section>
    </Link>
  );
};

export default Article;