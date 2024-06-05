import Box from '@mui/material/Box'
import Loader from '@core/components/ux/Loader'


const LoaderWithBox: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Loader />
    </Box>
  );
};

export default LoaderWithBox;