"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import PageContent from "./PageContent";

interface LoadsterComponentProps {
  countdownSeconds: number;
}

const LoadsterComponent = ({ countdownSeconds }: LoadsterComponentProps) => {
  const [timeLeft, setTimeLeft] = useState(countdownSeconds);
  const [amount, setAmount] = useState(""); // To store input amount
  const [isLoading, setIsLoading] = useState(true); // Controls timer-based loading
  const [isProcessingPayment, setIsProcessingPayment] = useState(false); // Controls payment processing state
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null); // To store user wallet address
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null); // Wallet provider

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsLoading(false); // Loading ends when timer reaches 0
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  // Function to connect wallet

  const connectWallet = async () => {
    if (!(window as any).ethereum) {
      alert("MetaMask is required to connect your wallet.");
      return;
    }
    try {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setWalletAddress(accounts[0]);
      setProvider(provider);
    } catch (error) {
      console.error("Wallet connection failed:", error);
    }
  };

  // Function to handle payment submission
  const sendPayment = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("sending funds", amount)

    if (!provider || !amount) {
      alert("Please connect your wallet and enter an amount.");
      return;
    }

    setIsProcessingPayment(true); // Start payment processing
    
    try {
      const signer = provider.getSigner();
      const sign = await signer.signMessage(`Sending ${amount} to "0x3rqwfea"`)
      console.log("user has signed", sign)
      await createTranasction(signer)

      setPaymentStatus("Payment successful!");
    } catch (error) {
      console.error("Payment failed:", error);
      setPaymentStatus("Payment failed. Please try again.");
    } finally {
      setIsProcessingPayment(false); // Stop payment processing
    }
  };

  const createTranasction = async (signer:any) => {
    console.log("Creating transaction...");
    const transaction = await signer.sendTransaction({
      to: "0x1978519a96A37b5f5ee52df866D62e743051c1F6", // Replace with the recipient address
      value: ethers.utils.parseEther(amount),
    });

    await transaction.wait();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#212] text-gray-200">
      {isLoading ? (
        <section className="flex flex-col items-center">
          {/* Add image...  */}

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
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
              <form onSubmit={sendPayment} className="p-3 flex items-center gap-5">
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
      ) : (
        <PageContent UserAddress={walletAddress} sendPaymentFunction={sendPayment} />
      )}
    </div>
  );
};

export default LoadsterComponent;
