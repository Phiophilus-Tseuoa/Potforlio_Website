export default function Badge({
  children,
  variant = "primary",
}) {
  const styles = {
    primary: "bg-blue-600",
    success: "bg-green-600",
    warning: "bg-yellow-600 text-black",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[variant]}`}
    >
      {children}
    </span>
  );
}