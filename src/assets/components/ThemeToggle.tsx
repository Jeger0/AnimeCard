type ThemeToggleProps = {
  dark: boolean;
  onToggle: () => void;
};

function ThemeToggle({ dark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="border p-2 rounded mb-4 transition dark:text-white dark:border-white"
    >
      {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
export default ThemeToggle;
