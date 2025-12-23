type ThemeToggleProps = {
  dark: boolean;
  onToggle: () => void;
};

function ThemeToggle({ dark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="px-4 py-2 rounded
          bg-gray-900 text-white hover:bg-gray-700
          dark:bg-gray-200 dark:text-black dark:hover:bg-gray-300"
    >
      {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
export default ThemeToggle;
