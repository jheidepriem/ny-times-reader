import { fetchData } from '../../ApiCalls/Api';
import { useState, useEffect } from 'react';
import Home from '../Home/Home'
import "../App/App.css"


const App = () => {
  const [articleData, setArticleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((data) => { 
      setArticleData(data.results)
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <section className="app-container">
      <header className="home-title">
        <h1>New York Times Reader</h1>
        <Home allArticles={articleData}/>

      </header>
    </section>
  );
}

export default App;
