interface IComButton {
  text: any;
  action?: any;
  bgColor?: string;
  textColor?: string;
  extraParams?: any;
  disabled?: boolean;
}

function ComButton({
  text,
  action,
  bgColor = "bg-secCol1-400 hover:bg-secCol1-500",
  textColor = "text-white",
  extraParams,
  disabled = false,
}: IComButton) {
  return (
    <button
      className={`${bgColor} ${textColor} transition-colors p-4 py-2 rounded-lg m-1 disabled:opacity-25`}
      onClick={action}
      disabled={disabled}
      {...extraParams}
    >
      {text}
    </button>
  );
}

export default ComButton;
