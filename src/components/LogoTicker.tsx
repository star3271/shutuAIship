import Image from 'next/image';

const logos = [
  { src: "/images/acme.png", alt: "Acme Logo" },
  { src: "/images/quantum.png", alt: "Quantum Logo" },
  { src: "/images/echo.png", alt: "Echo Logo" },
  { src: "/images/celestial.png", alt: "Celestial Logo" },
  { src: "/images/pulse.png", alt: "Pulse Logo" },
  { src: "/images/apex.png", alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return(
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-lg text-center text-white/70 mb-16">Trusted by world&apos;s most innovative teams</h2>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  )
};
