import './App.css';
import "./style/landingPage.css"
import SearchBar from './components/SearchBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HeadBar from './components/HeadBar';


function App() {
  return (
    <div>
      <div className="myBG">
      <HeadBar />
      </div>
      <div className='SearchButton'>
        <SearchBar />
      </div>
  </div>
  );
}

export default App;




