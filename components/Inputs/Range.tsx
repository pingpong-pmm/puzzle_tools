
import { KeyboardEventHandler } from "react";

interface IComRange {
  label: string;
  icon: any;
  options: any;
  value: any;
  setValue: Function;
  handleKeyDown?: KeyboardEventHandler;
  params?: any;
}

function ComRange({
  label,
  icon,
  options,
  value,
  setValue,
  handleKeyDown = () => {},
  params,
}: IComRange) {
  return (
    <div className="flex flex-col mb-5">
      <label className="mb-1 font-bold tracking-wide text-gray-600">
        {label}:
      </label>
      <div className="relative">
        {/*<div*/}
        {/*  className="*/}
        {/*            inline-flex*/}
        {/*            items-center*/}
        {/*            justify-center*/}
        {/*            absolute*/}
        {/*            left-0*/}
        {/*            top-0*/}
        {/*            h-full*/}
        {/*            w-10*/}
        {/*            text-gray-400*/}
        {/*          "*/}
        {/*>*/}
        {/*  {icon ? (*/}
        {/*    <FontAwesomeIcon className="h-4" icon={["fas", icon]} />*/}
        {/*  ) : (*/}
        {/*    <></>*/}
        {/*  )}*/}
        {/*</div>*/}
        <div
          className="
            flex
            rounded-2xl
            border border-gray-400
            justify-center
            items-center
            h-9
          "
        >


          <input
            type="range"
            className="
              form-range
              appearance-none
              w-9/12
              h-1
              bg-secCol1-300
              mx-2

              focus:outline-none focus:ring-0 focus:shadow-none
            "
            min={options.min}
            max={options.max}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <input
              className="rounded-xl h-9 w-[50px] p-1"
              type="number"
              min={options.min}
              max={options.max}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
          />

        </div>
      </div>
    </div>
  );
}

export default ComRange;
