import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Page",
  description: "About Page",
};

export default function About() {
  return (
    <h1>About Page</h1>
  );
}
