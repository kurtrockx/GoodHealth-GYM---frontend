import gymLogo from "../assets/gymLogo.png";

export default function LoginPanel() {
  return (
    <div className="flex flex-row">
      <div className="bg-red-400">
        <img src={gymLogo} alt="gymLogo" />
      </div>
      <h1>J CRUZ GOODHEALTH GYM</h1>

      <div className="h-20 max-w-2xl bg-black">h</div>
    </div>
  );
}
