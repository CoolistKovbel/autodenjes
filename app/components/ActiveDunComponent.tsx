import Image from "next/image";

interface ActiveDunComponentProps {
  dun: {
    name: string;
    description: string;
    image: string;
    tokenUsed: string;
    totalSupply: number;
    currentPrice: number;
    dailyDrop: string;
    totalSupplyInfo: string;
    hourlyDistributed: string;
    totalDistributed: string;
  };
}

const ActiveDunComponent = ({ dun }: ActiveDunComponentProps) => {
  return (
    <section 
        className="w-full gap-6 text-center grid grid-cols-1 md:grid-cols-2 grid-rows-[auto,auto,auto] grid-areas-layout px-4 md:px-8 lg:px-16">
     
      {/* Header */}
      <header className="area-header flex flex-col md:flex-row items-start md:items-center justify-between col-span-1 md:col-span-2 mb-6">
        
        <div className="mb-4 md:mb-0 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-2">{dun.name}</h2>
          <p className="text-gray-600 text-sm md:text-base">{dun.description}</p>
        </div>

        <div className="w-full md:w-[40%] bg-gray-800 p-4 rounded-lg text-left shadow-lg">
          <p className="flex justify-between text-sm md:text-base">
            <span>Token used:</span> <span>{dun.tokenUsed}</span>
          </p>
          <p className="flex justify-between text-sm md:text-base">
            <span>Token Total Supply:</span> <span>{dun.totalSupply.toLocaleString()}</span>
          </p>
          <p className="flex justify-between text-sm md:text-base">
            <span>Current Price:</span> <span>{dun.currentPrice.toFixed(6)}</span>
          </p>
        </div>
      </header>

      {/* User Play Section */}
      <div className="area-image relative col-span-1 mx-auto">
        <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] mx-auto">
          <Image
            src={dun.image}
            alt={dun.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="area-info col-span-1 p-5 drop-shadow-lg bg-gray-900 text-white rounded-lg flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Get Your Place</h3>
        <p className="text-sm md:text-base mb-3">Unlock your spot and earn for life</p>
        <div>
          <p className="font-semibold text-lg">
            Earned: <span className="text-blue-500">43</span>
          </p>
        </div>
        <form className="mt-4 flex flex-wrap items-center gap-2">
          <input
            type="number"
            name="earned"
            id="earned"
            className="bg-gray-200 text-black p-2 rounded-lg focus:ring-2 focus:ring-blue-400 w-[70%] md:w-[60%]"
            placeholder="Enter amount"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Withdraw
          </button>
        </form>
      </div>

      {/* Info Tab */}
      <div className="area-footer col-span-1 md:col-span-2 flex flex-col md:flex-row items-center justify-around gap-4 p-4 bg-gray-100 rounded-lg shadow-md mt-6">
        <p className="text-gray-700 font-medium">{dun.dailyDrop}</p>
        <p className="text-gray-700 font-medium">Total Supply: {dun.totalSupplyInfo}</p>
        <p className="text-gray-700 font-medium">Hourly Distributed: {dun.hourlyDistributed}</p>
        <p className="text-gray-700 font-medium">Total Distributed: {dun.totalDistributed}</p>
      </div>
    </section>
  );
};

export default ActiveDunComponent;
