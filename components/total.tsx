export default function Total({ total }: { total: number }) {
  return (
    <div className="flex flex-col items-center justify-center shadow-md px-12 py-4">
      <div className="text-5xl font-bold">Total</div>
      <div className="text-3xl font-bold">{total}</div>
    </div>
  );
}
