import { fetchData } from '../../../ApiCalls/Api';
import './App.css';

const App = () => {
  const [articleData, setArticleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((data) => {
        setLibraryData(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <section className="article-container">
      <header className="home-title">
        <h1>New York Times Reader</h1>
      </header>
    </section>
  );
}

export default App;
