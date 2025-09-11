import burgerIcon from "../assets/burgerIcon.svg";
import gymLogo from "../assets/gymLogo.png";
import Navbar from "./Navbar";
import NavPanel from "./NavPanel";

export default function DashboardPanel() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col">
      <Navbar />
      <div className="flex flex-1">
        <NavPanel />
        <div className="relative z-1 flex flex-1 flex-col">
          <div className="flex h-[40%] flex-1 flex-col justify-between bg-[#f9a826] p-12 pb-0">
            <h1 className="mx-auto w-[88%] text-5xl">Dashboard</h1>
            <div className="mx-auto flex h-[56%] w-[88%] flex-col justify-between rounded-tl-2xl rounded-tr-2xl border-1 bg-white px-8 pt-10">
              <h1 className="text-5xl">Welcome to J Cruz Gym Dashboard!</h1>
              <h4 className="text-2xl">
                A dashboard gym system ensures a seamless experience by
              </h4>
            </div>
          </div>
          <div className="flex h-[60%] flex-col bg-[#ebebeb] p-12 pt-0">
            <div className="mx-auto flex h-[36%] w-[88%] flex-col justify-between rounded-br-2xl rounded-bl-2xl bg-black px-8">
              <h4 className="text-2xl text-white">
                streamlining all aspects of gym management in one centralized
                platform.
              </h4>
            </div>
            <div className="flex flex-1 justify-between bg-red-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
