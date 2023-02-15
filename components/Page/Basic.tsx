import { useResizeDetector } from "react-resize-detector";

function Page_Basic({ settings, children, refToUse, isPrinting }) {
  // console.log("Page_Basic", { settings, children, refToUse, isPrinting });
  const drawBorderIcon = (
    imageUrl,
    imageSize,
    height,
    width,
    top = false,
    bottom = false,
    left = false,
    right = false
  ) => {
    //const imageSize= 50;
    if (!(top || bottom || left || right)) return null;
    let gapPx = 0;
    if (left || right) {
      gapPx = imageSize * 2 + 10;
    }
    const numberOfIconVertically = Math.round(height / imageSize);
    const numberOfIconHorizontally = Math.round((width - gapPx) / imageSize);
    const icons = [];

    for (let index = 0; index < numberOfIconVertically; index++) {
      icons.push(
        <>
          {/*left*/}
          {left ? (
            <image
              key={"left_" + index}
              href={imageUrl}
              height={imageSize}
              width={imageSize}
              x={10}
              y={imageSize * index}
            />
          ) : null}
          {/*right*/}
          {right ? (
            <image
              key={"right_" + index}
              href={imageUrl}
              height={imageSize}
              width={imageSize}
              x={width - (10 + imageSize)}
              y={imageSize * index}
            />
          ) : null}
        </>
      );
    }

    for (let index = 0; index < numberOfIconHorizontally; index++) {
      icons.push(
        <>
          {/*top*/}
          {top ? (
            <image
              key={"top_" + index}
              href={imageUrl}
              height={imageSize}
              width={imageSize}
              x={imageSize * index + (gapPx !== 0 ? gapPx / 2 : gapPx)}
              y={0}
            />
          ) : null}
          {/*bottom*/}
          {bottom ? (
            <image
              key={"bottom_" + index}
              href={imageUrl}
              height={imageSize}
              width={imageSize}
              x={imageSize * index + (gapPx !== 0 ? gapPx / 2 : gapPx)}
              y={height - imageSize}
            />
          ) : null}
        </>
      );
    }

    return icons;
  };

  const isBleed = settings.pagebleed === true;

  const margin = (settings.margin || 35) / 100;
  const outerMargin = isBleed
    ? 0
    : settings.strictMargin && settings.strictMargin[1];
  const innerMargin = isBleed
    ? 0
    : settings.strictMargin && settings.strictMargin[0];
  const iR = settings.right;
  const [pagewidth, pageheight] = JSON.parse(settings.pagesize);

  const bWidth = ((settings && pagewidth) || 500) + (isBleed ? 12 : 0);
  const bHeight = ((settings && pageheight) || 500) + (isBleed ? 24 : 0);

  const { width, height, ref } = useResizeDetector();

  return (
    <svg
      ref={refToUse}
      width="100%"
      height="100%"
      viewBox={`0 0 ${bWidth} ${bHeight}`}
      preserveAspectRatio="xMidYMid meet"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x={0}
        y={0}
        width={bWidth}
        height={bHeight}
        fill="white"
        stroke="gray"
        strokeWidth={isPrinting ? "0" : "0"}
      />

      {drawBorderIcon(
        settings.page_border.imageUrl,
        settings.page_border.imageSize,
        bHeight,
        bWidth,
        settings.page_border.borderSides.top,
        settings.page_border.borderSides.bottom,
        settings.page_border.borderSides.left,
        settings.page_border.borderSides.right
      )}

      <foreignObject x={0} y={0} width={bWidth} height={bHeight}>
        <div
          ref={ref}
          className="h-full border-0 border-black"
          style={{
            padding: `${outerMargin}in`,
            paddingLeft: `${iR ? innerMargin : outerMargin}in`,
            paddingRight: `${iR ? outerMargin : innerMargin}in`,
          }}
        >
          <div className={`h-full`} style={{ padding: `${margin}in` }}>
            {children}
          </div>
        </div>
      </foreignObject>
    </svg>
  );
}

export default Page_Basic;
