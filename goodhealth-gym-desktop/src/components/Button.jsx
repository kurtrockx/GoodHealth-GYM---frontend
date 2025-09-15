export default function Button({ children, styles, onClick }) {
  return (
    <button onClick={onClick}
      className="block cursor-pointer rounded-xl bg-black px-26 py-5 text-[#DB9500] duration-200 hover:-translate-y-1 active:scale-95"
      style={styles}
    >
      {children}
    </button>
  );
}
