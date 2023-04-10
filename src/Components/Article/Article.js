// import { Link } from "react-router-dom";
import "../Article/Article.css";

const Article = ({ title, id }) => {
  return (
    <section className="article-title">
      <h1>{title}</h1>
    </section>
    );
};

export default Article;