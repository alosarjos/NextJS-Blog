import Image from "next/image";

export default function Profile() {
  return (
    <div className="">
      <Image
        src="/avatar.jpg"
        height="250"
        width="250"
        alt="Alosarjos avatar"
        className="rounded-full"
      ></Image>

      <h1 className="text-5xl">@alosarjos</h1>
    </div>
  );
}
