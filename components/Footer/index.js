import Image from "next/image";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Powered by{" "}
      <span className="mx-2 h-8">
        <Image
          src="/footer/nextjs-logo.svg"
          alt="Vercel Logo"
          width={50}
          height={30}
        />
      </span>
      {" and "}
      <span className="mx-2 h-5">
        <Image
          src="/footer/tailwind-logo.svg"
          alt="Vercel Logo"
          width={130}
          height={16}
        />
      </span>
    </footer>
  );
}
