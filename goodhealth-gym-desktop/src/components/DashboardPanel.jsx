import burgerIcon from "../assets/burgerIcon.svg";
import gymLogo from "../assets/gymLogo.png";
import Navbar from "./Navbar";

export default function DashboardPanel() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <div className="flex flex-1">
        <div className="flex flex-col justify-between">
          <ul className="flex max-w-[20em] flex-1 flex-col gap-8 bg-[#efefef] px-20 py-16 text-2xl">
            <li>Dashboard</li>
            <li>Log Session</li>
            <li>Membership</li>
            <li>Daily Log</li>
            <li>Inventory</li>
            <li>Revenue</li>
          </ul>
          <div className="flex gap-2 border-t-[#f9a826] bg-black px-4 py-[2em] text-center">
            <h4 className="flex-1 text-white">Logged in as:</h4>
            <h4 className="flex-1 text-[#f9a826]">Admin/Server</h4>
          </div>
        </div>
        <div className="flex h-[40%] flex-1 flex-col bg-[#f9a826]">
          <h1>Dashboard</h1>
        </div>
      </div>
    </div>
  );
}
