import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useStyles } from '../theme';

export default function Footer() {
  const styles = useStyles();
  return (
    <Paper className={styles.footer} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            mb: 2,
            color: '#0c4a87',
            fontSize: '16px'
          }}>
          <Typography variant="caption">Copyright ©2023. Limited</Typography>
        </Box>
      </Container>
    </Paper>
  );
}
