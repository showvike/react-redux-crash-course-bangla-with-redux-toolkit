import Counter from "@/components/counter";
import Total from "@/components/total";

export default function Home() {
  return (
    <div className="flex gap-8 justify-evenly items-center h-screen">
      <div>
        <Counter />
        <Counter />
      </div>
      <Total total={0} />
    </div>
  );
}
