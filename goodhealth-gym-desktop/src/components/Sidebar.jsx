export default function Sidebar() {
  const panel = [
    "Dashboard",
    "Log Session",
    "Membership",
    "Daily Log",
    "Inventory",
    "Revenue",
  ];

  return (
    <div className="relative z-2 flex flex-col justify-between shadow-md shadow-black/50">
      <ul className="flex max-w-[20em] flex-1 flex-col gap-8 bg-[#efefef] px-20 py-16 text-2xl">
        {panel.map((p) => (
          <li className="group relative cursor-pointer">
            <p>{p}</p>
            <div className="absolute h-1 w-full -translate-y-0 bg-[#f9a826] opacity-0 duration-100 group-hover:translate-y-[100%] group-hover:opacity-100"></div>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 border-t-[#f9a826] bg-black px-4 py-[2em] text-center">
        <h4 className="flex-1 text-white">Logged in as:</h4>
        <h4 className="flex-1 text-[#f9a826]">Admin/Server</h4>
      </div>
    </div>
  );
}
