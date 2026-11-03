import styles from './page.module.css';

import AdminTools from "@/components/(admin)/adminTools";
import Link from "next/link";

export default function AdminToolsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Admin Tools</h1>
      <p className="text-lg text-gray-600">Welcome to the admin tools page. Here you can manage your application settings and configurations.</p>
      <div className={styles.buttonContainer}>
        <AdminTools />
      </div>
      <Link href="/" className={styles.backButton}>Back to Home</Link>
    </div>
  );
}