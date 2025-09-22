import editIcon from "../../assets/editIcon.png";
import addMembersIcon from "../../assets/addMembersIcon.png";

function Categories() {
  return (
    <div className="flex items-center border-b border-black bg-[#414141] text-center text-2xl text-white">
      <h4 className="flex-1 border-r border-black px-4 py-4">Name</h4>
      <h4 className="flex-1 border-r border-black px-4 py-4">Type</h4>
      <h4 className="flex-1 border-r border-black px-4 py-4">Membership</h4>
      <h4 className="flex-1 border-r border-black px-4 py-4">Contact Number</h4>
      <h4 className="flex-2 border-r border-transparent px-4 py-2">Email</h4>
      <button className="block">
        <img src={editIcon} className="opacity-0" alt="edit" />
      </button>
    </div>
  );
}
export function ListMembers({ onMembersPanel, members, onChosenMember }) {
  return (
    <>
      <button
        onClick={() => onMembersPanel("addMember")}
        className="flex cursor-pointer items-center self-end rounded-xl bg-[#db9500] p-2 duration-200 hover:-translate-y-0.5 active:scale-95"
      >
        <img src={addMembersIcon} alt="add" />
        <p>+ Members</p>
      </button>

      <div className="flex flex-1 flex-col items-center gap-4">
        <input
          type="text"
          className="rounded-xl bg-[#d9d9d9] px-12 py-4 text-4xl text-[#575757] outline-0 placeholder:text-[#575757]"
          placeholder="Search"
        />
        <div className="flex w-full flex-1 flex-col bg-[#d9d9d9] shadow-[inset_0px_-10px_10px_rgba(0,0,0,0.25)]">
          <h2 className="border-b py-4 text-center text-4xl">
            Members Information
          </h2>
          <Categories />
          <div className="gutter flex max-h-[45dvh] flex-1 flex-col overflow-y-scroll">
            {members.map((m) => (
              <div key={m.name} className="flex border-b text-2xl text-black">
                <h4 className="flex-1 border-r px-4 py-2">{m.name}</h4>
                <h4 className="flex-1 border-r px-4 py-2">{m.type}</h4>
                <h4 className="flex-1 border-r px-4 py-2">{m.membership}</h4>
                <h4 className="flex-1 border-r px-4 py-2">{m.contactNumber}</h4>
                <h4 className="flex-2 border-r px-4 py-2 text-center text-lg">
                  {m.email}
                </h4>
                <button
                  onClick={() => {
                    onChosenMember(m);
                    onMembersPanel("editMember");
                  }}
                  className="block cursor-pointer duration-200 hover:-translate-y-0.5 active:scale-95"
                >
                  <img src={editIcon} alt="edit" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
