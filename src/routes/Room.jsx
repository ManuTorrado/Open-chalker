import Board from "../components/Board";
import Toolbar from "../components/Drawbar";
import Mathkeyboard from "../components/Mathkeyboard";
const Room = () => {
  return (
    <div>
      <Toolbar />
      <Board />
      <Mathkeyboard />
    </div>
  );
};

export default Room;
