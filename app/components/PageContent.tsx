"use client"

import { useState } from "react";
import PageHeader from "./PageHeader";
import DunsComponent from "./DunsComponent";

// interface payment && user account
interface PageContentProps {
  UserAddress: any;
  sendPaymentFunction: any;
  connect: any;
  userAccount: any;
}


const PageContent = ({ sendPaymentFunction, UserAddress, connect }: PageContentProps) => {
  const [activeDun, setActiveDun] = useState(1)

  const duns = [
    {
      id: 1,
      name: "Silver",
      description: "Connect to this dune and get a reward every 4 hours.",
      image: "/papa-elon.jpg",
      tokenUsed: "0c2efwwef",
      totalSupply: 1000000,
      currentPrice: 0.00003,
      dailyDrop: "Daily Free Token Drop",
      totalSupplyInfo: "2,100,000",
      hourlyDistributed: "0.003",
      totalDistributed: "5,000",
    },
    {
      id: 2,
      name: "Dun 2",
      description: "Connect to this dune and get a reward every 6 hours.",
      image: "/safeLife.jpg",
      tokenUsed: "0c2eabcd",
      totalSupply: 500000,
      currentPrice: 0.00005,
      dailyDrop: "Daily Token Drop",
      totalSupplyInfo: "1,000,000",
      hourlyDistributed: "0.006",
      totalDistributed: "2,000",
    },
    {
      id: 3,
      name: "Dun 3",
      description: "Connect to this dune and get a reward every hour.",
      image: "/safe.webp",
      tokenUsed: "0c2e1234",
      totalSupply: 200000,
      currentPrice: 0.0001,
      dailyDrop: "Hourly Free Token Drop",
      totalSupplyInfo: "500,000",
      hourlyDistributed: "0.01",
      totalDistributed: "10,000",
    },
  ];

  const getSituted = () => {
    console.log(getSituted)
  }


  const currentDun = duns.find((dun) => dun.id === activeDun);


  return (
    <section className="w-full h-min-full p-4  md:p-10 bg-gray-500 flex flex-col items-center">
      {/* Header Section */}
      <PageHeader
        UserAddress={UserAddress}
        connect={connect}
        sendPaymentFunction={sendPaymentFunction}

      />

      {/* Duns Section */}
      <DunsComponent
        setActiveDun={setActiveDun}
        activeDun={activeDun}
        currentDun={currentDun}
        duns={duns}
      />


      {/* Get More ref client and requst  */}
      <section>
        <h4>LeaderBoards</h4>
        <table>
            <thead>
              <tr>
                <td>User:</td>
                <td>amount:</td>
                <td>withdrawl:</td>
                <td>donated:</td>
                <td>messages:</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lyub</td>
                <td>14</td>
                <td>143131</td>
                <td>600</td>
                <td>2</td>
              </tr>
            </tbody>
        </table>
      </section>
    </section>

  );
};

export default PageContent;
