import { fetchData } from "../../ApiCalls/Api";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import Home from "../Home/Home";
import Form from "../Form/Form";
import Error from "../Error/Error";
import "../App/App.css";
import ArticleDeets from "../ArticleDeets/ArticleDeets";

const App = () => {
  const [articleData, setArticleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((data) => {
        setArticleData(data.results);
        setFilteredData(data.results);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  const filterArticles = (searchValue) => {
    const filteredData = articleData.filter((article) =>
      article.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  return (
    <main className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Fragment>
                <section className="home-section">
                  <h1 className="home-title">New York Times Reader</h1>
                  <Form filterArticles={filterArticles} />
                  <Home allArticles={filteredData} />
                  {loading && <h1>Loading...</h1>}
                  {error && <Error />}
                </section>
              </Fragment>
            );
          }}
        />
        <Route
          exact
          path="/article/:id"
          render={({ match }) => {
            const findArticle = articleData.find(
              (article) => article.title === match.params.id
            );
            return (
              <ArticleDeets
                articleDataDetails={findArticle}
                id={match.params.id}
              />
            );
          }}
        />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
