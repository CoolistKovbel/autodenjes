"use client"

import Image from "next/image";
import Link from "next/link";

// interface payment && user account
interface PageHeaderProps {
    UserAddress: any;
    sendPaymentFunction: any;
    connect: any
}


const PageHeader = ({ sendPaymentFunction, UserAddress, connect }: PageHeaderProps) => {

    console.log(UserAddress, "CURENT user")


    return (
        <header className="md:w-full max-w-4xl mb-10">

            {/* display user status */}
            <div className={`${UserAddress !== null ? "flex items-center" : null} bg-[#222] shadow-lg justify-around flex-col md:flex-row h-[720px]`}>

                <div className=" rounded-lg p-8 mb-8">
                    <h2 className="text-4xl font-bold text-gray-300 mb-4">Get Started Today</h2>
                    <p className="text-gray-600 mb-6">Connect your wallet or start earning effortlessly.</p>

                    {
                        UserAddress !== null ? (
                            <div className="w-full flex items-center justify-between">
                                <button className="bg-[firebrick] p-2 font-semi-bold rounded drop-shadow-lg inner-shadow">Auto compound</button>
                                <button className="bg-[firebrick] p-2 font-semi-bold rounded drop-shadow-lg inner-shadow">claim reward</button>
                                <Link href="/" className="bg-[firebrick] p-2 font-semi-bold rounded drop-shadow-lg inner-shadow"> enter chat</Link>
                            </div>
                        ) : (
                            <button
                                onClick={connect}
                                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                                Get Situated
                            </button>
                        )
                    }

                </div>

                {
                    UserAddress !== null && (
                        <div className="flex flex-col gap-3">
                            <div className="w-[200px] h-[200px] relative">
                                <Image src="/cat-fish.png" alt="user profile" fill />
                            </div>
                            <p className="w-full flex items-center justify-between">user: <span>{UserAddress.slice(0, 8)}</span></p>
                            <p className="w-full flex items-center justify-between">stake bal: <span>10</span></p>
                            <p className="w-full flex items-center justify-between">withdrawl: <span>200</span></p>
                            <p className="w-full flex items-center justify-between">DApp calls: <span>20</span></p>
                        </div>
                    )

                }
            </div>

            <div className="bg-[#333] shadow-lg rounded-lg p-8 mt-4">
                <h3 className="text-2xl font-bold text-gray-300 mb-2">Wanted to donate while the page loaded</h3>
                <p className="text-gray-600 mb-6">
                    Any amount will help out! Just enter an amount of Ether and hit send. Who knows? You may
                    receive a ticket!
                </p>
                {
                    UserAddress !== null ? (
                        <form onSubmit={sendPaymentFunction} className="flex items-center gap-4">
                            <input
                                step="any" // Allows decimals
                                min="0"
                                name="amount"
                                id="amount"
                                type="number"
                                className="bg-gray-200 p-3 rounded-lg w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter amount in ETH"
                            />
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                                Send
                            </button>
                        </form>
                    ) : (
                        <button
                            onClick={connect}
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                            connect now
                        </button>
                    )
                }
            </div>
        </header>
    )


}

export default PageHeader;