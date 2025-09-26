import { useState } from "react";
import RFIDchoice from "./Log Session panels/RFIDchoice";
import LogCredentials from "./Log Session panels/LogCredentials";
import Loading from "./Loading";
import Button from "./Button";

export default function LogSession() {
  const [rfid, setRfid] = useState(null);

  return (
    <div className="relative z-1 flex flex-1 flex-col p-12">
      <h1 className="text-5xl text-[#414141]">Log Session</h1>
      <div className="flex flex-8 p-12">
        {!rfid && <RFIDchoice onRfid={setRfid} />}
        {rfid !== null && (
          <div className="flex flex-col flex-1 gap-4">
            <Button onClick={() => setRfid(null)} styles={{alignSelf: 'self-end'}}>Back</Button>
            {rfid === "login" && <LogCredentials />}
            {rfid === "rfid" && <Loading />}
          </div>
        )}
      </div>
    </div>
  );
}
