import Link from "next/link";
import Modal from "../components/modal";

export default function IndexPage() {
  return (
    <div>
      <h1>Unstoppable Domains (UAuth) Web3Modal Demo
        </h1>
      <div>
        <Link href="/ud">UD</Link>
      </div>
      <div>
        <Modal />
      </div>
    </div>
  );
}
