import Button from "../Button";

export default function LogCredentials() {
  return (
    <div className="flex flex-1 flex-col gap-4 px-12">
      <div className="flex flex-1 flex-col gap-10 bg-[#d9d9d9] p-8 text-3xl">
        <h2>Enter you credentials:</h2>
        <div className="flex flex-1 flex-col gap-12 px-12 text-white">
          <div className="flex max-h-fit flex-1 items-center gap-4 rounded-xl bg-[#8a8a8a] px-4 py-6">
            <label>Name:</label>
            <input type="text" className="flex-1 outline-0" />
          </div>
          <div className="flex max-h-fit flex-1 items-center gap-4 rounded-xl bg-[#8a8a8a] px-4 py-6">
            <label>Enter Password:</label>
            <input type="password" className="flex-1 outline-0" />
          </div>
        </div>
      </div>
      <Button styles={{ alignSelf: "self-end" }}>SUBMIT</Button>
    </div>
  );
}
