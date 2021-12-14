import Link from "next/link";

export default function BackButton({ href }) {
  return (
    <Link href={href} passHref>
      <button className="absolute left-6 top-6 px-4 py-2 border-2 border-gray-300 rounded-lg transition duration-300  hover:border-gray-500 hover:shadow-lg">
        Go back
      </button>
    </Link>
  );
}
