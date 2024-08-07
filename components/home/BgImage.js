/* eslint-disable @next/next/no-img-element */
export default function BgImage() {
  return (
    <>
      <img
        src="/bg-people-hands.png"
        alt="People Hands Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src="/bg-the-earth.png"
        alt="The Earth Background"
        className="absolute inset-0 w-full h-full object-cover opacity-45"
      />
    </>
  );
}
