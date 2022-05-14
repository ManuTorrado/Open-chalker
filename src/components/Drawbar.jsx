import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import BrushIcon from "@mui/icons-material/Brush";
import PanToolIcon from "@mui/icons-material/PanTool";
import { useDispatch } from "react-redux";
const Drawbar = () => {
  const dispatch = useDispatch();

  const setMouseMode = (mode) => {
    console.log("lol");
    dispatch({ type: "MOUSE_MODE", payload: false });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <BrushIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            setMouseMode(false);
          }}
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <PanToolIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Drawbar;
