import cautionIcon from "../assets/cautionIcon.png";
import Button from "./Button";

export default function Confirm() {
  return (
    <div className="flex flex-1 flex-col gap-4 px-24 py-12">
      <div className="flex flex-col items-center justify-center gap-12 bg-[#d9d9d9] py-8">
        <div className="flex flex-col items-center">
          <img src={cautionIcon} alt="caution" />
          <h1 className="text-center text-5xl">INPUT PASSWORD</h1>
        </div>
        <div className="flex h-[4em] w-[44em] items-center gap-6 rounded-2xl bg-[#8a8a8a] px-6 py-3 text-white">
          <label className="text-2xl">Enter Password: </label>
          <input
            type="password"
            maxLength={6}
            className="flex-1 overflow-hidden text-2xl tracking-[2.5em] text-white outline-0"
          />
        </div>
        <Button>SUBMIT</Button>
      </div>
    </div>
  );
}
