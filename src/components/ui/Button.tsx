import Link from "next/link";
import styles from "./Button.module.css";

export type ButtonProps = {
  href: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  children,
}: ButtonProps) {
  return (
    <Link href={href} className={`${styles.btn} ${styles[variant]}`}>
      {children}
    </Link>
  );
}
