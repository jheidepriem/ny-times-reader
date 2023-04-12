// import { Link } from "react-router-dom";
import "../Article/Article.css";
import { Link } from "react-router-dom";

const Article = ({ title, byline }) => {
  return (
    <Link to={`article/${title}`} key={title}>
   <section key={title} className="article-title">
      <h1>{title}</h1>
      <p>{byline}</p>
    </section>
    </Link>
    );

};

export default Article;