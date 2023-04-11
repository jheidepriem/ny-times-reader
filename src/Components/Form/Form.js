import { useState, useEffect } from "react";
import "../Form/Form.css";

const Form = ({ filterArticles }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    filterArticles(search);
  }, [search]);

  return (
    <section className="search-form-container">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search for books"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
    </section>
  );
};

export default Form;