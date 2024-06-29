export default function CustomButton({
  onClick,
  text,
  className,
}: {
  onClick: () => void;
  text: string;
  className: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`${className} w-28 h-8 font-bold rounded transition-all flex justify-center items-center hover:scale-105 active:scale-95`}
    >
      {text}
    </button>
  );
}
