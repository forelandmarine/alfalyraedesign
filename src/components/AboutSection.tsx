export default function AboutSection() {
  return (
    <section
      id="studio"
      className="bg-[#f5f0e8] text-[#0c1a2e] px-8 md:px-20 py-28 md:py-40"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div>
          <h2
            className="font-light leading-[1.15] text-[#0c1a2e]"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(30px, 3.2vw, 52px)',
              fontStyle: 'italic',
            }}
          >
            A studio of naval architecture and yacht design,
            <br />
            <span style={{ color: '#b8966b' }}>based in Rome.</span>
          </h2>
        </div>

        <div className="md:pt-2">
          <p className="text-[14px] md:text-[15px] leading-[1.85] text-[#3a3530] font-light">
            Alpha Lyrae Design works on yacht design, product design, 3D
            printing and project management for the marine industry. The studio
            handles each project from initial concept through to detailed
            digital twin models, adapting its workflow to customisations,
            rebuilds and new builds.
          </p>

          <p className="mt-6 text-[14px] md:text-[15px] leading-[1.85] text-[#3a3530] font-light">
            The practice is small. Four partners cover naval architecture,
            yacht and product design, marine engineering and project
            management. Most commissions are taken in long collaboration with a
            few trusted yards and design houses.
          </p>
        </div>
      </div>
    </section>
  );
}
