export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  target = "_self",
  download = false,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1";

  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "border border-neutral-700 hover:border-blue-500 text-white",
  };

  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      download={download}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </a>
  );
}