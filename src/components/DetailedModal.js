import { Box, Modal, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { setModalOpen, setSelectedPokemon } from '../redux/pokemonSlice';
import { useStyles } from '../theme';

export const DetailedModal = () => {
  const dispatch = useDispatch();
  const styles = useStyles();

  const { selectedPokemon, modalOpen } = useSelector((state) => state.pokemon);

  const handleCloseModal = () => {
    dispatch(setModalOpen(false));
    dispatch(setSelectedPokemon(null));
  };
  // Define a modal component which will show information about pokemons
  return (
    <Modal
      open={modalOpen}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box className={styles.modal}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Name: {selectedPokemon?.name?.charAt(0).toUpperCase() + selectedPokemon?.name?.slice(1)}
        </Typography>
        <Typography variant="body1">
          Height: {selectedPokemon?.height ? selectedPokemon.height : ''}
        </Typography>
        <Typography variant="body1">
          Weight: {selectedPokemon?.weight ? selectedPokemon.weight : ''}
        </Typography>
        <Typography variant="body1">
          Abilities:{' '}
          {selectedPokemon?.abilities
            ? selectedPokemon?.abilities.map((ability) => ability?.ability?.name).join(', ')
            : ''}
        </Typography>
      </Box>
    </Modal>
  );
};
