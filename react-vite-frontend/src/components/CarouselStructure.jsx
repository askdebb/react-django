import PropTypes from 'prop-types';

import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CustomImage = styled('img')({
  width: '90%',
  height: '60vh', 
  borderRadius: '10px',
  objectFit: 'cover',
});

const CarouselStructure = ({ slide }) => {
  const imageURL = "http://127.0.0.1:8000";

  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: '8px' }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection= "column"
        textAlign="center"
      >
        <CustomImage src={`${imageURL}${slide.image}`} alt="Slide Image" />
        <Typography variant="h6" component="h2">
          {slide.title}
        </Typography>
      </Box>
    </Paper>
  );
};

CarouselStructure.propTypes = {
    slide: PropTypes.array.isRequired,
  };
  
export default CarouselStructure


