import { Toast } from "flowbite-react";

const ToastComponent = ({
  message,
  isError = false,
  onTimeUpdate,
  onCLickToggle,
}) => {
  return (
    <div className="absolute right-0 top-0 z-50">
      <Toast duration={75}>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
          {/*{isError ? <HiExclamation className="h-5 w-5"/> : <HiCheck className="h-5 w-5"/>}*/}
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <Toast.Toggle onTimeUpdate={onTimeUpdate} onClick={onCLickToggle} />
      </Toast>
    </div>
  );
};

export default ToastComponent;
