import Image from "next/image";
import { useState } from "react";
import ActiveDunComponent from "./ActiveDunComponent";

// interface payment && user account
interface SelectedDunProps {
  activeDun: any
  duns: any
  setActiveDun: any
  UserAddress: any
  connect: any
}


const SelectedDun = ({ activeDun, duns, setActiveDun, UserAddress, connect }: SelectedDunProps) => {

  const [tokenStatus, setTokenStatus] = useState("Idle")

  console.log(UserAddress, "addres")

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

      {
        UserAddress !== null && (
          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-between w-full gap-4 p-4 bg-gray-700 rounded-lg shadow-md mt-6">
            <p>Status: { tokenStatus}</p>

            <div className="w-full flex items-center justify-between">

              <header>
                <h3>Use Signature NFT</h3>
                <p>Use your nft to mint you more rewards</p>
              </header>

              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={() => {
                // Call token contract
                const data = true
                if (data) {
                  setTokenStatus("Stake Avalable")
                } else {
                  setTokenStatus("Stake unAvalable")
                }
              }}>Check NFT Status</button>
              {
                tokenStatus === "Stake Avalable" ? (
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Stake NFT</button>
                ) : (
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Mint NFT</button>
                )
              }

            </div>

          </div>
        )
      }

    </article>
  )

}

export default SelectedDun