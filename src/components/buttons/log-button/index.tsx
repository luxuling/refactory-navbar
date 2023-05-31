interface LogButtonProps {
  isOutline: boolean;
  text: string;
}
export default function LogButton({ isOutline, text }: LogButtonProps) {
  return (
    <button
      type="button"
      className={`h-[44px] px-3 flex justify-center items-center rounded-md ring ring-white ${
        isOutline
          ? "hover:bg-white text-white hover:text-primary"
          : "bg-white text-primary"
      } transition-all ease-in-out duration-300`}>
      {text}
    </button>
  );
}
