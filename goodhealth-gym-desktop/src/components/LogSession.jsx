import { useState } from "react";
import RFIDchoice from "./Log Session panels/RFIDchoice";
import LogCredentials from "./Log Session panels/LogCredentials";

export default function LogSession() {
  const [rfid, setRfid] = useState(null);

  return (
    <div className="relative z-1 flex flex-1 flex-col p-12">
      <h1 className="text-5xl text-[#414141]">Log Session</h1>
      <div className="flex flex-8 p-20">
        {!rfid && <RFIDchoice onRfid={setRfid} />}
        {rfid === "login" && <LogCredentials />}
      </div>
    </div>
  );
}
