import { Children, FC, useEffect, useState } from "react";
import { GridProps } from "../../types";

const AutoLayout: FC<GridProps> = ({ 
  children, 
  columns, 
  align = 'center', 
  gap = 0, 
  className = "", 
  custom,
  order 
}) => {
  const childArray = Children.toArray(children);
  const itemCount = childArray.length;
  const [width, setWidth] = useState(window.innerWidth);

  const alignStyles: Record<NonNullable<GridProps["align"]>, string> = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    stretch: "stretch",
    baseline: "baseline",
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let columnCount = columns || 1;
  if (!columns) {
    if (width >= 1280) columnCount = Math.min(itemCount, 6);
    else if (width >= 1024) columnCount = Math.min(itemCount, 4);
    else if (width >= 768) columnCount = Math.min(itemCount, 3);
    else columnCount = Math.min(itemCount, 2);
  }

  const containerStyle: React.CSSProperties = {
    gap,
    alignItems: alignStyles[align],
  };

  // Apply order to children if order prop is provided
  const orderedChildren = order 
    ? order.map((index) => childArray[index - 1])
    : childArray;

  return (
    <div style={containerStyle} className={`d-grid grid-cols-${custom ? custom : columnCount} ${className}`}>
      {orderedChildren}
    </div>
  );
};

export default AutoLayout;


// usage example
//  <Grid>
//   <div className="bg-blue-500 p-4 text-white">Item 1</div>
//   <div className="bg-green-500 p-4 text-white">Item 2</div>
//   <div className="bg-red-500 p-4 text-white">Item 3</div>
//   <div className="bg-yellow-500 p-4 text-white">Item 4</div>
//   <div className="bg-purple-500 p-4 text-white">Item 5</div>
//   <div className="bg-pink-500 p-4 text-white">Item 6</div>
// </Grid>


// <Grid columns={4}>
//   <div className="bg-blue-500 p-4 text-white">Item 1</div>
//   <div className="bg-green-500 p-4 text-white">Item 2</div>
//   <div className="bg-red-500 p-4 text-white">Item 3</div>
//   <div className="bg-yellow-500 p-4 text-white">Item 4</div>
// </Grid>

// <Grid columns={2}>
//   <Grid columns={2} className="bg-gray-100 p-4">
//     <div className="bg-blue-400 p-4 text-white">Nested 1</div>
//     <div className="bg-green-400 p-4 text-white">Nested 2</div>
//   </Grid>
//   <div className="bg-red-400 p-4 text-white">Outer Item</div>
// </Grid>
