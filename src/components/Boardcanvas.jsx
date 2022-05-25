import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BoardCanvas = (props) => {
  const store = useSelector((state) => state);
  const dispatcher = useDispatch();
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }

    const { offsetX, offsetY } = nativeEvent;

    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 1;
    canvas.height = window.innerWidth * 1;
    canvas.style.width = `100%`;
    canvas.style.height = `100%`;
    // Avoids right click dialog
    canvas.oncontextmenu = (e) => {
      e.preventDefault();
    };
    const context = canvas.getContext("2d");

    context.scale(1, 1);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const keyPressed = () => {
    console.log("room: key pressed");
  };

  return (
    <canvas
      tabIndex={0}
      onKeyDown={keyPressed}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
      ref={canvasRef}
    />
  );
};

export default BoardCanvas;
