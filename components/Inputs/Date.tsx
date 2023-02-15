// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IComDate {
  label: string;
  icon: any;
  value: any;
  setValue: Function;
  placeholder?: string;
  type?: string;
  onEnter?: Function;
  params?: any;
}

function ComDate({
  label,
  icon,
  value,
  setValue,
  placeholder,
  type,
  onEnter = () => {},
  params = {},
}: IComDate) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEnter();
    }
  };

  // console.log(value)

  return (
    <div className="flex flex-col mb-5 w-full">
      <label className="mb-1 text-xs tracking-wide text-gray-600">
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
          {/*{icon ? (*/}
          {/*  <FontAwesomeIcon className="h-4" icon={["fas", icon]} />*/}
          {/*) : (*/}
          {/*  <></>*/}
          {/*)}*/}
        </div>

        <input
          name={label}
          className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-md
                    border border-gray-200
                    w-full
                    py-2
                    focus:outline-none focus:border-primCol1-400
                  "
          type={"date"}
          placeholder={
            placeholder
              ? placeholder
              : `Enter your ${String(label).toLowerCase()}`
          }
          value={new Date(value).toISOString().substring(0, 10)}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          {...params}
        />
      </div>
    </div>
  );
}

export default ComDate;
