const members = [
  {
    name: "John Doe",
    type: "Regular",
    membership: "Gold",
    contactNumber: "123-456-7890",
    email: "johndoe@example.com",
  },
  {
    name: "Jane Smith",
    type: "Premium",
    membership: "Platinum",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
  },
  {
    name: "Alice Johnson",
    type: "Regular",
    membership: "Silver",
    contactNumber: "456-789-0123",
    email: "alicejohnson@example.com",
  },
  {
    name: "Bob Brown",
    type: "Guest",
    membership: "Day Pass",
    contactNumber: "321-654-0987",
    email: "bobbrown@example.com",
  },
  {
    name: "Charlie Davis",
    type: "Regular",
    membership: "Gold",
    contactNumber: "789-012-3456",
    email: "charliedavis@example.com",
  },
];

export default function Membership() {
  return (
    <div className="relative z-1 flex flex-1 flex-col p-12">
      <h1 className="text-5xl text-[#414141]">Members</h1>
      <div className="flex flex-1 flex-col items-center gap-4">
        <input
          type="text"
          className="rounded-xl bg-[#d9d9d9] px-12 py-4 text-4xl text-[#575757] outline-0 placeholder:text-[#575757]"
          placeholder="Search"
        />
        <div className="flex w-full flex-1 flex-col bg-[#d9d9d9]">
          <h2 className="border-b py-4 text-center text-4xl">
            Members Information
          </h2>
          <div className="flex flex-1">
            {members.map((m) => {
              <div className="flex text-black">
                <h4 className="border-r px-4 py-2">{m.name}</h4>
                <h4 className="border-r px-4 py-2">{m.type}</h4>
                <h4 className="border-r px-4 py-2">{m.membership}</h4>
                <h4 className="border-r px-4 py-2">{m.contactNumber}</h4>
                <h4 className="border-r px-4 py-2">{m.email}</h4>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
