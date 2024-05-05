import { AppBar, Toolbar, Typography } from '@mui/material';
import ColorFinder from './Components/ColorFinder';

function App() {
  return (
    <>

    <AppBar
    position="static"
    style={{
      backgroundImage:
        "linear-gradient(to right, #FFAEBC 0%, #B4F8C8 100%)",
    }}
  >
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit" component="div">
        Color Finder
      </Typography>
    </Toolbar>
    
  </AppBar>
  <ColorFinder/>
    <div
    style={{
      position: "fixed",
      backgroundImage: "url('https://example.com/background-image.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px",
      color: "black",
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
      fontStyle:"italic"
    }}
  >
    <div>
      <Typography variant="h4" gutterBottom>
        "Life is a canvas painted with the vibrant hues of joy, sorrow, love,
        and perseverance, each color blending to create a masterpiece uniquely
        our own."
      </Typography>
    </div>
    </div>
    </>
  );
}

export default App;
