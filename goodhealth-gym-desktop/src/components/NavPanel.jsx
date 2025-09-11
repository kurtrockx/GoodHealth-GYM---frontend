
export default function NavPanel() {
  return (
    <div className="relative z-2 flex flex-col justify-between shadow-md shadow-black/50">
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
  );
}
