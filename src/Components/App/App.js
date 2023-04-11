import { fetchData } from '../../ApiCalls/Api';
// import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from '../Home/Home'
import Form from '../Form/Form';
import "../App/App.css"


const App = () => {
  const [articleData, setArticleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((data) => { 
      setArticleData(data.results)
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
 
    <section className="app-container">
      <header className="home-title">
        <h1>New York Times Reader</h1>
        <Form filterArticles={filterArticles}/>
        <Home allArticles={articleData}/>
    </header>
    </section>

    </main>
  );
}

export default App;
