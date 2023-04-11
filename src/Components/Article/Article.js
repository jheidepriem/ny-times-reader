// import { Link } from "react-router-dom";
import "../Article/Article.css";

const Article = ({ title, id, byline }) => {
  return (
   <section key={id} className="article-title">
      <h1>{title}</h1>
      <p>{byline}</p>
    </section>
    );
};

export default Article;