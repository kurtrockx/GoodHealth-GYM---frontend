import Button from "../../Button";

export default function InputCreds() {
  return (
    <div className="space-y-4 pt-10">
      <div className="editMember mx-auto flex max-w-6xl flex-1 flex-col bg-[#d9d9d9] pt-8">
        <h1 className="text-center text-4xl">Input Member New Credentials</h1>
        <div className="flex flex-1 flex-col gap-4 px-40 py-10 text-2xl">
          <div className="flex flex-1 items-center gap-2 bg-white px-4 py-2">
            <label>Name: </label>
            <input type="text" name="name" />
          </div>
          <div className="flex flex-1 items-center gap-2 bg-white px-4 py-2">
            <h1>Dropdown (pending function)</h1>
          </div>
          <div className="flex flex-1 items-center gap-2 bg-white px-4 py-2">
            <h1>Dropdown (pending function)</h1>
          </div>
          <div className="flex flex-1 items-center gap-2 bg-white px-4 py-2">
            <label>Contact: </label>
            <input type="text" name="contactNumber" />
          </div>

          <div className="flex flex-1 items-center gap-2 bg-white px-4 py-2">
            <label>Email Address: </label>
            <input type="text" name="email" />
          </div>

          <div className="flex flex-1 items-center gap-10 bg-white px-4 py-2">
            <label>Water (Monthly): </label>
            <div className="flex gap-10">
              <div className="flex gap-2">
                <label htmlFor="YES">YES</label>
                <input type="radio" name="water" id="YES" />
              </div>
              <div className="flex gap-2">
                <label htmlFor="NO">NO</label>
                <input type="radio" name="water" id="NO" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button styles={{ margin: "auto" }}>SUBMIT</Button>
    </div>
  );
}
