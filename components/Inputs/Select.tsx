

interface IComSelect {
  label: string;
  icon?: any;
  options?: any;
  value: any;
  setValue: Function;
}

function ComSelect({ label, icon, options, value, setValue }: IComSelect) {
  return (
    <div className="flex flex-col mb-5">
      <label className="mb-1 font-bold tracking-wide text-gray-600">
        {label}:
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

        <select
          className={`form-select appearance-none
          text-sm
          placeholder-gray-500
          ${icon ? "pl-10" : "pl-4"}
          pr-4
          rounded-2xl
          border border-gray-200
          w-full
          py-2
          focus:outline-none focus:border-primCol1-400`}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        >
          {options.map((e, i) => (
            <option
              className="p-6"
              key={`option_${e.label.substring(0, 3)}_${i}`}
              value={e.value}
            >
              {e.label === "True"
                ? "Yes"
                : e.label === "False"
                ? "No"
                : e.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default ComSelect;
