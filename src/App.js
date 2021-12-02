import './styles/app.scss'
import Song from './components/song/Song';
import { SongContextProvider } from './contexts/SongContext';


function App() {
  return (
    <div className="App">
      <SongContextProvider>
        <Song />
      </SongContextProvider>
    </div>
  );
}


export default App;