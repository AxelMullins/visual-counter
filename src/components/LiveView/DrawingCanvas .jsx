import { useRef, useState, useEffect } from "react";
import { Stage, Layer, Line, Image } from "react-konva";
import liveImg from "../../assets/img/live-view-img.png";
import DeviceConfiguration from "./DeviceConfiguration";

const DrawingCanvas = () => {
  const [image, setImage] = useState(null);
  const [lines, setLines] = useState([]);
  const [containerWidth, setContainerWidth] = useState(500);
  const [containerHeight, setContainerHeight] = useState(null);
  const [isDrawingEnabled, setIsDrawingEnabled] = useState(false);
  const [startPoint, setStartPoint] = useState(null);
  const [currentLine, setCurrentLine] = useState([]);

  const isDrawing = useRef(false);

  const handleMouseDown = (event) => {
    if (isDrawingEnabled) {
      isDrawing.current = true;
      const pos = event.target.getStage().getPointerPosition();
      setStartPoint({ x: pos.x, y: pos.y });
      setCurrentLine([{ ...pos }]);
    }
  };

  const handleMouseMove = (event) => {
    if (!isDrawingEnabled || !isDrawing.current) return;

    const stage = event.target.getStage();
    const pointerPosition = stage.getPointerPosition();

    setCurrentLine([{ ...startPoint }, { ...pointerPosition }]);
  };

  const handleMouseUp = () => {
    if (isDrawingEnabled && currentLine.length === 2) {
      isDrawing.current = false;
      setLines([...lines, currentLine]);
      setCurrentLine([]);
    }
  };

  const handleDraw = () => {
    setIsDrawingEnabled(!isDrawingEnabled);
  };

  const handleErase = () => {
    setLines([]);
  };

  const handleExport = () => {
    console.log("Export:", lines);
  };

  useEffect(() => {
    const img = new window.Image();
    img.src = liveImg;
    img.onload = () => {
      setImage(img);
      setContainerHeight(img.height);
      setContainerWidth(img.width);
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: containerHeight,
          overflow: "hidden",
          cursor: isDrawingEnabled && "crosshair",
          background: "#d1d1d1"
        }}
      >
        <Stage
          width={containerWidth}
          height={containerHeight}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Layer>
            {image && (
              <Image
                image={image}
                width={containerWidth}
                height={containerHeight}
              />
            )}
            {lines.map((line, index) => (
              <Line
                key={index}
                points={[line[0].x, line[0].y, line[1].x, line[1].y]}
                stroke="green"
                strokeWidth={5}
                lineCap="round"
                globalCompositeOperation="source-over"
              />
            ))}
            {currentLine.length === 2 && (
              <Line
                points={[
                  currentLine[0].x,
                  currentLine[0].y,
                  currentLine[1].x,
                  currentLine[1].y,
                ]}
                stroke="green"
                strokeWidth={5}
                lineCap="round"
                globalCompositeOperation="source-over"
              />
            )}
          </Layer>
        </Stage>
      </div>
      <DeviceConfiguration
        handleDraw={handleDraw}
        handleErase={handleErase}
        handleExport={handleExport}
      />
    </>
  );
};

export default DrawingCanvas;
