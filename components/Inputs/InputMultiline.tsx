// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IComInpMulti {
  label: string;
  icon?: any;
  value?: any;
  setValue?: Function;
  placeholder?: string;
  rows?: number;
  onEnter?: Function;
}

function ComInputMultiLine({
  label,
  icon,
  value,
  setValue,
  placeholder,
  rows = 5,
  onEnter = () => {},
}: IComInpMulti) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEnter();
    }
  };

  return (
    <div className="flex flex-col mb-5">
      <label className="mb-1 font-bold tracking-wide text-gray-600">
        {label}:
      </label>
      <div className="relative">
        <div
          className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
        >

        </div>

        <textarea
          name={label}
          className="
                    text-sm
                    placeholder-gray-500
                    pl-2
                    pr-4
                    rounded-md
                    border border-gray-200
                    w-full
                    py-2
                    focus:outline-none focus:border-primCol1-400
                  "
          rows={rows}
          placeholder={
            placeholder
              ? placeholder
              : `Enter your ${String(label).toLowerCase()}`
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default ComInputMultiLine;
