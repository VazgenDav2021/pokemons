import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonImages, setPageSize } from '../redux/pokemonSlice';
import Pokemon from './Pokemon';
import { useStyles } from '../theme';

const PAGE_SIZE = [10, 20, 50]; // Number of Pokemon to display on each page

const PokemonGallery = () => {
  const dispatch = useDispatch();

  const styles = useStyles();

  const {
    pokemonsDetailed,
    page,
    pageSize,
    pokemonList,
    isLoading,
    searchingResult,
    searchingValue,
    isSearching
  } = useSelector((state) => state.pokemon);
  useEffect(() => {
    dispatch(fetchPokemonImages());
  }, [dispatch, page, pageSize]);

  const handlePageSizeClick = (size) => {
    dispatch(setPageSize(size));
  };
  return (
    <>
      {!isLoading && searchingValue && isSearching && (
        <Typography className={styles.searchResult}>
          По зарпосу "{searchingValue}" мы нашли {searchingResult.length} результатов
        </Typography>
      )}
      <Box className={styles.box}>
        {/* // Map through the array of pokemonsDetailed objects and render a Pokemon component for each object, passing in index, img, pokemon, and pokemonList props
         */}
        {isLoading ? (
          <CircularProgress />
        ) : isSearching ? (
          searchingResult.map((pokemon, index) => {
            const { img } = pokemon;
            return (
              <Pokemon
                index={index}
                key={`${index}-${pokemon.id}`}
                img={img}
                pokemon={pokemon}
                pokemonList={pokemonList}
              />
            );
          })
        ) : (
          pokemonsDetailed?.map((pokemon, index) => {
            const { img, id } = pokemon;
            return (
              <Pokemon
                index={index}
                key={`${index}-${pokemon.id}`}
                img={img}
                pokemon={pokemon}
                pokemonList={pokemonList}
              />
            );
          })
        )}
      </Box>
      <Box className={styles.pagination}>
        {PAGE_SIZE.map((size) => (
          <Button key={size} onClick={() => handlePageSizeClick(size)}>
            {size}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default PokemonGallery;
