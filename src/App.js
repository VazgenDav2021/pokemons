import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {GlobalStyles} from '@mui/material';
import PokemonGallery from './components/PokemonGallery';
import {Provider} from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles
          styles={() => ({
            body: {margin: 0, padding: 0, boxSizing: 'border-box'},
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
