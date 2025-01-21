"use client";

import Image from "next/image";

// interface payment && user account
interface LoadingContentProps {
  timeLeft: any;
  walletAddress: any;
  connectWallet: any;
  isProcessingPayment: any;
  amount: any;
  paymentStatus: any;
  sendPayment: any;
  setAmount: any;
}

const LoadingContent = ({
  timeLeft,
  walletAddress,
  connectWallet,
  isProcessingPayment,
  amount,
  paymentStatus,
  sendPayment,
  setAmount,
}: LoadingContentProps) => {
  return (
    <section className="w-full flex flex-col gap-4 items-center">
      <div className="w-[300px] h-[300px] relative">
        <Image
          src="/cat-fish.png"
          alt="singature image"
          fill
          className="rounded-full drop-shadow-lg inner-shadow-lg"
        />
      </div>
      {/* Loading Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mb-6"></div>

      {/* Countdown Timer */}
      <h3 className="text-xl font-semibold text-gray-400 mb-6">
        Loading... {timeLeft}s
      </h3>

      {/* Patment form */}
      <div className="w-[500px] flex flex-col gap-6 text-center">
        <h2 className="text-2xl font-bold text-emerald-400">
          Send me some ETH while we prepare things for you
        </h2>

        {/* Connect Wallet */}
        {!walletAddress ? (
          <button
            onClick={connectWallet}
            className="bg-emerald-500 text-white p-4  rounded hover:bg-blue-600"
            disabled={isProcessingPayment}
          >
            {isProcessingPayment ? "Connecting Wallet..." : "Connect Wallet"}
          </button>
        ) : (
          <p className="text-sm text-gray-400">
            Wallet Address: {walletAddress}
          </p>
        )}

        {/* Payment Form */}
        {walletAddress && (
          <form
            onSubmit={sendPayment}
            className="p-3 flex items-center justify-center gap-5"
          >
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-[#333] p-3 rounded drop-shadow-lg text-gray-200"
              placeholder="Amount in ETH"
              disabled={isProcessingPayment}
            />
            <button
              type="submit"
              className="bg-[firebrick] font-bold px-4 py-2 rounded drop-shadow-lg hover:bg-red-700"
              disabled={isProcessingPayment || !amount}
            >
              {isProcessingPayment ? "Processing..." : "Send to Support"}
            </button>
          </form>
        )}

        {paymentStatus && (
          <p className="text-sm text-gray-400 mt-4">{paymentStatus}</p>
        )}
      </div>
    </section>
  );
};

export default LoadingContent;
