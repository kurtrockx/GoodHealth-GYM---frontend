import gymLogo from "../assets/gymLogo.png";
import rightArrow from "../assets/rightArrow.svg";

export default function LoginPage({ onCurrPage }) {
  return (
    <div className="flex h-dvh flex-col items-center justify-center space-y-[8em]">
      <div className="flex flex-col items-center">
        <img src={gymLogo} alt="gymLogo" />
        <h1 className="text-center text-5xl">J CRUZ GOODHEALTH GYM</h1>
      </div>
      <div className="flex h-[4em] w-[44em] rounded-2xl bg-black px-6 py-3 text-white">
        <input
          type="password"
          maxLength={6}
          className="flex-1 overflow-hidden text-2xl tracking-[3.5em] text-white outline-0"
        />
        <button
          onClick={() => onCurrPage("main")}
          className="aspect-square h-full cursor-pointer rounded-full bg-[#f2a32a] p-2 duration-200 hover:-translate-y-1 active:scale-95"
        >
          <img src={rightArrow} alt="continue" />
        </button>
      </div>
    </div>
  );
}
