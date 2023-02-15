import { pageSizesInPx } from "../../../constants/pageSizes";

export default function PMLite_PageSizeList({
  changePageSize,
  generalValueSource,
}) {
  return (
    <div className="animate__animated animate__fadeIn animate__faster">
      <h2 className="text-center text-2xl font-bold">
        Recommended <span className="text-secCol1">Page Sizes</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {[
          '8.5" x 11" (21.59 x 27.94 cm)',
          '8.27" x 11.69" (21 x 29.7 cm)',
          '6" x 9" (15.24 x 22.86 cm)',
        ].map((e, i) => (
          <div
            key={`psize_${i}`}
            className={`w-full lg:w-1/4 border shadow-md rounded-md flex flex-col justify-center items-center h-40 ${
              generalValueSource.general.pagesize ===
              JSON.stringify(pageSizesInPx[e])
                ? "bg-secCol1-500"
                : "bg-secCol1-300"
            } cursor-pointer`}
            onClick={changePageSize.bind(
              this,
              JSON.stringify(pageSizesInPx[e])
            )}
          >
            {generalValueSource.general.pagesize ==
              JSON.stringify(pageSizesInPx[e]) && <p>Selected</p>}
            <div
              className="h-3/5 bg-white border shadow"
              style={{
                aspectRatio: `${pageSizesInPx[e][0]}/${pageSizesInPx[e][1]}`,
              }}
            ></div>
            <p>{e.split("(")[0].trim()}</p>
          </div>
        ))}
      </div>
      <br />
      <br />
      <h2 className="text-center text-2xl font-bold">
        All <span className="text-secCol1">Page Sizes</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {Object.keys(pageSizesInPx).map((e, i) => (
          <div
            key={`psize_${i}`}
            className={`w-full lg:w-1/4 border shadow-md rounded-md flex flex-col justify-center items-center h-40 ${
              generalValueSource.general.pagesize ==
              JSON.stringify(pageSizesInPx[e])
                ? "bg-secCol1-500"
                : "bg-secCol1-300"
            } cursor-pointer`}
            onClick={changePageSize.bind(
              this,
              JSON.stringify(pageSizesInPx[e])
            )}
          >
            <div
              className="h-3/5 bg-white border shadow"
              style={{
                aspectRatio: `${pageSizesInPx[e][0]}/${pageSizesInPx[e][1]}`,
              }}
            ></div>
            <p>{e.split("(")[0].trim()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
