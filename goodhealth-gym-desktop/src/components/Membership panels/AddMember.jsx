import { useState } from "react";
import Button from "../Button";
import Loading from "../Loading";
import Facecam from "./Add Member States/Facecam";
import StudentId from "./Add Member States/StudentId";
import InputCreds from "./Add Member States/InputCreds";
import Confirm from "../Confirm";

export default function AddMember({ onMembersPanel }) {
  //loading, facecam, studentId, inputCreds, confirm, emailNotif
  const [memberState, setMemberState] = useState("loading");

  return (
    <>
      <Button
        onClick={() => onMembersPanel("listMembers")}
        styles={{ alignSelf: "self-end" }}
      >
        Back
      </Button>

      {memberState === "loading" && <Loading />}
      {memberState === "facecam" && <Facecam />}
      {memberState === "studentId" && <StudentId />}
      {memberState === "inputCreds" && <InputCreds />}
      {memberState === "confirm" && <Confirm />}
    </>
  );
}
