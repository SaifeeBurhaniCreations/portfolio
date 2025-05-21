import {
  Children,
  useEffect,
  useState,
  CSSProperties,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { GridProps, VStackProps } from "../../types";

const AutoLayout = forwardRef<HTMLDivElement, GridProps>(({
  children,
  columns,
  align = "center",
  justify = "center",
  gap = 0,
  className = "",
  custom,
  style = {},
  order,
}, ref) => {
  const childArray = Children.toArray(children);
  const itemCount = childArray.length;
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const containerRef = useRef<HTMLDivElement>(null);

  // Expose the ref to parent
  useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

  const alignStyles: Record<NonNullable<GridProps["align"]>, string> = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    stretch: "stretch",
    baseline: "baseline",
  };

  const justifyStyles: Record<NonNullable<VStackProps["justify"]>, string> = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
    evenly: "space-evenly",
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

  const gridTemplate = custom
    ? custom
        .split("-")
        .map((v) => `${parseInt(v)}fr`)
        .join(" ")
    : `repeat(${columnCount}, minmax(0, 1fr))`;

  const containerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: gridTemplate,
    gap: typeof gap === "number" ? `${gap}px` : gap,
    alignItems: alignStyles[align],
    justifyContent: justifyStyles[justify],
    ...style,
  };

  const orderedChildren = order
    ? order.map((index) => childArray[index - 1])
    : childArray;

  return (
    <div ref={containerRef} style={containerStyle} className={className}>
      {orderedChildren}
    </div>
  );
});

AutoLayout.displayName = "AutoLayout"; // Necessary for forwardRef

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
