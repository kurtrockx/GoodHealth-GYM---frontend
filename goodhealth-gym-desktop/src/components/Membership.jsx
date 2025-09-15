import { useState } from "react";
import { ListMembers } from "../components/Membership panels/ListMembers";
import AddMember from "./Membership panels/AddMember";

export default function Membership() {
  const [membersPanel, setMembersPanel] = useState("listMembers");

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
        <ListMembers onMembersPanel={setMembersPanel} />
      )}
      {membersPanel === "addMember" && (
        <AddMember onMembersPanel={setMembersPanel} />
      )}
    </div>
  );
}
