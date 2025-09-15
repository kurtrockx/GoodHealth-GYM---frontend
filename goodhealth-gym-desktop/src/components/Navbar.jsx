import burgerIcon from "../assets/burgerIcon.svg";
import gymLogo from "../assets/gymLogo.png";

export default function Navbar({ onSidebarOpen }) {
  return (
    <nav className="z-99 flex max-h-[10dvh] justify-between overflow-hidden px-4 py-4 shadow">
      <div className="flex items-center gap-[4em]">
        <img
          className="h-full cursor-pointer"
          src={burgerIcon}
          alt="burgerIcon"
          onClick={() => onSidebarOpen(curr => !curr)}
        />
        <h1 className="text-2xl text-black">J CRUZ GOODHEALTH GYM</h1>
      </div>
      <div className="flex justify-end">
        <img className="object-contain" src={gymLogo} alt="gymLogo" />
      </div>
    </nav>
  );
}
