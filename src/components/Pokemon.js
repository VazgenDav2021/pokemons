import { Card, CardActions, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalOpen, setSelectedPokemon } from '../redux/pokemonSlice';
import { DetailedModal } from './DetailedModal';
import { useStyles } from '../theme';

const Pokemon = ({ pokemonList, img, index, pokemon }) => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const handlePokemonClick = async () => {
    // pass to redux pokemon that has been selected
    dispatch(setSelectedPokemon(pokemon));
    dispatch(setModalOpen(true));
  };
  // A Card component that displays information about a Pokemon
  return (
    <Card className={styles.card}>
      <Typography variant="h5">
        {pokemonList[index]?.name.charAt(0).toUpperCase() + pokemonList[index]?.name.slice(1)}
      </Typography>
      <img
        src={img}
        alt={`Pokemon ${index}`}
        key={`pokemon-${index}`}
        onClick={handlePokemonClick}
        style={{ cursor: 'pointer' }}
      />
      <Typography>
        Type:{' '}
        {pokemon.types.map((pokemon) => {
          return pokemon.type.name.charAt(0).toUpperCase() + pokemon.type.name.slice(1);
        })}
      </Typography>
      <Typography>
        Stats:{' '}
        {pokemon.stats.reduce((prev, acc) => {
          return prev + acc.base_stat;
        }, 0)}
      </Typography>
      <CardActions>
        <DetailedModal />
      </CardActions>
    </Card>
  );
};

export default Pokemon;
