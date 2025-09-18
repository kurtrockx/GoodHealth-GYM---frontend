import { useState } from "react";
import { ListMembers } from "../components/Membership panels/ListMembers";
import AddMember from "./Membership panels/AddMember";
import EditMember from "./Membership panels/EditMember";

const members = [
  {
    name: "John Doe",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "123-456-7890",
    email: "johndoe@example.com",
  },
  {
    name: "Jane Smith",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
  },
  {
    name: "Alice Johnson",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "456-789-0123",
    email: "alicejohnson@example.com",
  },
  {
    name: "Bob Brown",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "321-654-0987",
    email: "bobbrown@example.com",
  },
  {
    name: "Charlie Davis",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "789-012-3456",
    email: "charliedavis@example.com",
  },
  {
    name: "John Doe",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "123-456-7890",
    email: "johndoe@example.com",
  },
  {
    name: "Jane Smith",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
  },
  {
    name: "Alice Johnson",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "456-789-0123",
    email: "alicejohnson@example.com",
  },
  {
    name: "Bob Brown",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "321-654-0987",
    email: "bobbrown@example.com",
  },
  {
    name: "Charlie Davis",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "789-012-3456",
    email: "charliedavis@example.com",
  },
  {
    name: "John Doe",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "123-456-7890",
    email: "johndoe@example.com",
  },
  {
    name: "Jane Smith",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "987-654-3210",
    email: "janesmith@example.com",
  },
  {
    name: "Alice Johnson",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "456-789-0123",
    email: "alicejohnson@example.com",
  },
  {
    name: "Bob Brown",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "321-654-0987",
    email: "bobbrown@example.com",
  },
  {
    name: "Charlie Davis",
    type: "Student",
    membership: "4 1/2 months",
    contactNumber: "789-012-3456",
    email: "charliedavis@example.com",
  },
];

export default function Membership() {
  const [membersPanel, setMembersPanel] = useState("listMembers");
  const [chosenMember, setChosenMember] = useState(null);

  return (
    <div className="relative z-1 flex flex-1 flex-col p-12">
      <h1 className="text-5xl text-[#414141]">
        {membersPanel === "listMembers"
          ? "Members"
          : membersPanel === "addMember"
            ? "Members > Add Member"
            : membersPanel === "editMember"
              ? "Members > Edit Member"
              : "Members"}
      </h1>
      {membersPanel === "listMembers" && (
        <ListMembers
          onMembersPanel={setMembersPanel}
          members={members}
          onChosenMember={setChosenMember}
        />
      )}
      {membersPanel === "addMember" && (
        <AddMember onMembersPanel={setMembersPanel} />
      )}
      {membersPanel === "editMember" && chosenMember !== null && (
        <EditMember member={chosenMember} onMembersPanel={setMembersPanel} />
      )}
    </div>
  );
}
