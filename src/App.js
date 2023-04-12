import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { GlobalStyles } from '@mui/material';
import PokemonGallery from './components/PokemonGallery';
import { Provider } from 'react-redux';
import store from './redux/store'; // assuming you've created a Redux store
function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles
          styles={(theme) => ({
            body: { margin: 0, padding: 0, boxSizing: 'border-box', backgroundColor: '#e3e5d8' }
          })}
        />
        <Navbar />
        <PokemonGallery />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
