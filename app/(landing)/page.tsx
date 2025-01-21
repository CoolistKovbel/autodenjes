import LoadsterComponent from "../components/LoadsterComponent";


export default function Home() {

  const timer = 10

  return (
    <main className="w-full min-h-screen">
      <LoadsterComponent countdownSeconds={timer}  />
    </main>
  );
}
