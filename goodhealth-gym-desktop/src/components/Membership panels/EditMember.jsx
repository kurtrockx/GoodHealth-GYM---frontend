import { useState } from "react";
import Button from "../Button";

export default function EditMember({ member, onMembersPanel }) {
  // create local editable state
  const [formData, setFormData] = useState({
    name: member.name || "",
    contactNumber: member.contactNumber || "",
    email: member.email || "",
    water: member.water || "", // optional
  });

  // update state on input change
  function changeValue(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit() {
    console.log("Updated member:", formData);
    // call a parent callback here if you want to save changes
  }

  return (
    <>
      {" "}
      <Button
        onClick={() => onMembersPanel("listMembers")}
        styles={{ alignSelf: "self-end" }}
      >
        Back
      </Button>
      <div className="space-y-4 pt-10">
        <div className="editMember mx-auto flex max-w-6xl flex-1 flex-col bg-[#d9d9d9] pt-8">
          <h1 className="text-center text-4xl">Input Member New Credentials</h1>
          <div className="flex flex-1 flex-col gap-4 px-40 py-16 text-2xl">
            <div className="flex flex-1 items-center gap-2 bg-white px-4 py-2">
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={changeValue}
              />
            </div>
            <div className="flex flex-1 items-center gap-2 bg-white px-4 py-2">
              <h1>Dropdown (pending function)</h1>
            </div>
            <div className="flex flex-1 items-center gap-2 bg-white px-4 py-2">
              <h1>Dropdown (pending function)</h1>
            </div>
            <div className="flex flex-1 items-center gap-2 bg-white px-4 py-2">
              <label>Contact: </label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={changeValue}
              />
            </div>

            <div className="flex flex-1 items-center gap-2 bg-white px-4 py-2">
              <label>Email Address: </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={changeValue}
              />
            </div>

            <div className="flex flex-1 items-center gap-10 bg-white px-4 py-2">
              <label>Water (Monthly): </label>
              <div className="flex gap-10">
                <div className="flex gap-2">
                  <label htmlFor="YES">YES</label>
                  <input
                    type="radio"
                    name="water"
                    id="YES"
                    value="YES"
                    checked={formData.water === "YES"}
                    onChange={changeValue}
                  />
                </div>
                <div className="flex gap-2">
                  <label htmlFor="NO">NO</label>
                  <input
                    type="radio"
                    name="water"
                    id="NO"
                    value="NO"
                    checked={formData.water === "NO"}
                    onChange={changeValue}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button styles={{ margin: "auto" }} onClick={handleSubmit}>
          SUBMIT
        </Button>
      </div>
    </>
  );
}
