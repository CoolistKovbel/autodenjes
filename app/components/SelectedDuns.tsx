import Image from "next/image";
import { useState } from "react";
import ActiveDunComponent from "./ActiveDunComponent";

// interface payment && user account
interface SelectedDunProps {
    activeDun: any
    duns:any
    setActiveDun: any
    UserAddress: any
    connect: any
}


const SelectedDun = ({ activeDun, duns, setActiveDun, UserAddress, connect}: SelectedDunProps) => {



    return (
<article className="w-full flex flex-col items-center mt-10 justify-center">
      {activeDun ? (
        <ActiveDunComponent 
          UserAddress={UserAddress} 
          dun={activeDun}
          connect={connect}
          />
          
      ) : (
        <p className="text-gray-600">No active dune selected.</p>
      )}

      {/* Buttons to change active dun */}
      {/* <div className="mt-4 flex gap-4">
        {duns.map((dun) => (
          <button
            key={dun.id}
            onClick={() => setActiveDun(dun.id)}
            className={`px-4 py-2 rounded-lg ${
              activeDun === dun.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-400`}
          >
            {dun.name}
          </button>
        ))}
      </div> */}

    </article>
    )

}

export default SelectedDun