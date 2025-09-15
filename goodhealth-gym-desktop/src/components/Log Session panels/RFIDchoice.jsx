import Button from "../Button";

export default function RFID({ onRfid }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-20 bg-[#d9d9d9] p-32 text-2xl">
      <h2>CONSUMER LOG THROUGH RFID?</h2>
      <div className="flex gap-36">
        <Button>YES</Button>
        <Button onClick={() => onRfid("login")}>NO</Button>
      </div>
    </div>
  );
}
