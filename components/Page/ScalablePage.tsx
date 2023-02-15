export function ScalablePage({ pWidth, pHeight, children }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${pWidth} ${pHeight}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <foreignObject x={0} y={0} width={pWidth} height={pHeight}>
          {children}
        </foreignObject>
      </svg>
    </div>
  );
}
