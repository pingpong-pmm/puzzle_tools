interface ICheckBox {
  label: string;
  value;
  setValue;
  disabled?: boolean;
}

function ComCheckboxes({ label, value, setValue }: ICheckBox) {
  function setChecked(index) {
    let nV = { ...value };
    nV[index] = !nV[index];
    setValue(nV);
  }

  return (
    <div className="flex flex-col mb-5">
      <label className="mb-1 text-xs tracking-wide text-gray-600">
        {label}:
      </label>
      <div className="p-2">
        {Object.keys(value).map((e, i) => (
          <div
            key={`mu${label.replace(/ /g, "").slice(0, 4)}_${i}`}
            className="form-check cursor-pointer"
            onClick={() => setChecked(e)}
          >
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primCol1-600 checked:border-primCol1-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              checked={value[e]}
              onChange={() => setChecked(e)}
            />
            <label className="form-check-label inline-block text-gray-800 cursor-pointer">
              {e}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComCheckboxes;
