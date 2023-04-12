import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const theme = createTheme({
  // Define your theme configuration here
  palette: {
    primary: {
      main: '#0c4a87'
    },
    secondary: {
      main: '#fae41e'
    }
  }
  // Other configurations such as typography, spacing, etc.
});

console.log({ theme });

export const useStyles = makeStyles(() => {
  return {
    box: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
      alignItems: 'centr',
      paddingTop: '50px',
      paddingBottom: '50px',
      backgroundColor: '#e3e5d8'
    },

    pagination: {
      justifyContent: 'center',
      display: 'flex',
      backgroundColor: '#fae41e'
    },

    card: {
      maxWidth: 345,
      backgroundColor: '#efde4e !important',
      width: '270px',
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& > *': {
        color: '#0c4a87'
      }
    },

    modal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      backgroundColor: '#efde4e',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      justifyContent: 'center',
      alignItems: 'center'
    },

    footer: {
      padding: '10px',
      backgroundColor: '#fae41e !important'
    },

    logoBlock: {
      maxWidth: '270px',
      height: '50px',
      '& > a': {
        cursor: 'pointer'
      }
    },
    navbar: {
      flexGrow: 1,
      display: 'none',
      '& > button': {
        color: '#0c4a87',
        display: 'flex',
        width: 'max-content'
      },

      [theme.breakpoints.up('md')]: { display: 'flex' }
    },

    navbarMobile: {
      flexGrow: 1,
      display: 'flex',
      [theme.breakpoints.up('md')]: { display: 'none' }
    },

    toolbar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: '10px'
    },

    searchResult: {
      backgroundColor: '#e3e5d8',
      textAlign: 'center',
      padding: '30px',
      color: '#0c4a87'
    }
  };
});
