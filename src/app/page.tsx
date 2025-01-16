import Header from "./_components/Header";
import PieChart from "./_components/PieChart";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-start">
      <Header />
      <div className="min-w-2xl flex h-full min-h-[32rem] w-full max-w-2xl items-center justify-center">
        <PieChart  /> 
      </div>
    </div>
  );
}