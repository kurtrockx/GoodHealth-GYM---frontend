import { useState } from "react";
import Button from "../Button";
import EditMemberInputs from "./Edit Member/EditMemberInputs";
import Confirm from "../Confirm";

export default function EditMember({ member, onMembersPanel }) {
  //inputCreds, confirm, saveNotif
  const [memberState, setMemberState] = useState("inputCreds");
  return (
    <>
      <Button
        onClick={() => onMembersPanel("listMembers")}
        styles={{ alignSelf: "self-end" }}
      >
        Back
      </Button>

      {memberState === "inputCreds" && (
        <EditMemberInputs member={member} onMembersPanel={onMembersPanel} />
      )}
      {memberState === "confirm" && <Confirm />}
    </>
  );
}
