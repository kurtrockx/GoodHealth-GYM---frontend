import cameraTemp from "../../../assets/cameraTemp.png";
import Button from "../../Button";

export default function StudentId() {
  return (
    <div className="flex flex-1 flex-col gap-4 px-24 py-12">
      <div className="flex h-full flex-1 flex-col items-center justify-center gap-8 bg-[#d9d9d9]">
        <h1 className="text-center text-4xl">PROVIDE STUDENT ID</h1>
        <img src={cameraTemp} alt="webcamPic" className="w-80" />
      </div>
      <Button styles={{ margin: "auto" }}>SUBMIT</Button>
    </div>
  );
}
