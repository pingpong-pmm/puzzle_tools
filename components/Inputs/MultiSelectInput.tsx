

interface IMultiSelectInput {
  label: string;
  icon?: any;
  value?: any;
  setValue?: Function;
  placeholder?: string;
  type?: string;
  onEnter?: Function;
  params?: any;
}

function MultiSelectInput({
  label,
  icon,
  value,
  setValue,
  placeholder,
  type,
  onEnter = () => {},
  params = {},
}: IMultiSelectInput) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onEnter();
    }
  };

  return (
    <div className="flex flex-col mb-5 w-full">
      <label className="mb-1 font-bold tracking-wide text-gray-600">
        {label}
      </label>
      <div className="relative">
        {icon && (
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
            {/*<FontAwesomeIcon className="h-4" icon={["fas", icon]} />*/}
          </div>
        )}

        <input
          name={label}
          className={`text-sm
                    placeholder-gray-500
                    pr-4
                    ${icon ? "pl-10" : "pl-4"}
                    rounded-md
                    border border-gray-200
                    w-full
                    py-2
                    focus:outline-none focus:border-primCol1-400`}
          type={type ? type : "text"}
          placeholder={
            placeholder
              ? placeholder
              : `Enter your ${String(label).toLowerCase()}`
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          {...params}
        />
      </div>
    </div>
  );
}

export default MultiSelectInput;
