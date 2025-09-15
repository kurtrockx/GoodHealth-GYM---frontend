import Button from "../Button";
import cautionIcon from "../../assets/cautionIcon.png";
import loadingIcon from "../../assets/loadingIcon.png";

export default function AddMember({ onMembersPanel }) {
  return (
    <>
      <Button
        onClick={() => onMembersPanel("listMembers")}
        styles={{ "align-self": "self-end" }}
      >
        Back
      </Button>
      <div className="flex-1 px-24 py-12">
        <div className="flex h-full flex-1 flex-col items-center justify-center gap-8 bg-[#d9d9d9]">
          <img src={cautionIcon} alt="caution" className="w-48" />
          <div className="flex flex-col items-center">
            <h1 className="text-4xl">Place the RFID Card on</h1>
            <h1 className="text-4xl">RFID Card Reader</h1>
          </div>
          <img src={loadingIcon} alt="loading" className="w-48 animate-spin" />
        </div>
      </div>
    </>
  );
}
