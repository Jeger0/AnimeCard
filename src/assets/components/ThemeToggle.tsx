type ThemeToggleProps = {
  dark: boolean;
  onToggle: () => void;
};

function ThemeToggle(props: ThemeToggleProps) {
  return (
    <button
      onClick={props.onToggle}
      className="border p-2 rounded mb-4 transition dark:text-white dark:border-white"
    >
      {props.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
export default ThemeToggle;
