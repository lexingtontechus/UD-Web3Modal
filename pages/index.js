import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World. <Link href="/about">About</Link>
      <br />
      <div>
        <Link href="/ud">UD</Link>
      </div>
    </div>
  );
}
