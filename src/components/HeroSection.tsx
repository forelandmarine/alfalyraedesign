import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative bg-[#0c1a2e] text-[#f5f0e8] min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image, dimmed */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1a2e]/70 via-[#0c1a2e]/40 to-[#0c1a2e]" />
      </div>

      {/* Centred wordmark */}
      <div className="relative z-10 px-8 text-center">
        <span className="wordmark text-[clamp(28px,3.6vw,46px)] text-[#f5f0e8]">
          Alpha Lyrae &nbsp;<em>Design</em>
        </span>
      </div>

      {/* Down-cue */}
      <a
        href="#featured"
        aria-label="Scroll to featured project"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[9px] tracking-[0.30em] uppercase text-[#f5f0e8]/55 hover:text-[#f5f0e8] transition-colors"
      >
        Scroll
      </a>
    </section>
  );
}
