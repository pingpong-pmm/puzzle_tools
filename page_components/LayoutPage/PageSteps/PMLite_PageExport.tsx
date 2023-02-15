import ComButton from "../../../components/Button1";

export default function PMLite_PageExport({ exportPage }) {
  return (
    <div className="animate__animated animate__fadeIn animate__faster flex flex-col justify-center items-center min-h-[40vh]">
      <h1 className="text-3xl">Congratulations! Your Book is Done!</h1>
      <br />
      <ComButton action={exportPage} text="Go to Download Page" />
    </div>
  );
}
