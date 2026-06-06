export default function Footer() {
  return (
    <footer className="bg-[#0c1a2e] text-[#f5f0e8] px-8 md:px-20 pt-20 pb-10 border-t border-[rgba(245,240,232,0.10)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-10 border-b border-[rgba(245,240,232,0.10)]">
          <span className="wordmark text-[clamp(20px,2.2vw,30px)] text-[#f5f0e8]">
            Alpha Lyrae &nbsp;<em>Design</em>
          </span>

          <nav>
            <ul className="flex flex-wrap gap-8 text-[10px] tracking-[0.22em] uppercase text-[#f5f0e8]/65">
              <li><a href="#studio" className="hover:text-[#f5f0e8] transition-colors">Studio</a></li>
              <li><a href="#practice" className="hover:text-[#f5f0e8] transition-colors">Practice</a></li>
              <li><a href="#work" className="hover:text-[#f5f0e8] transition-colors">Work</a></li>
              <li><a href="#team" className="hover:text-[#f5f0e8] transition-colors">Team</a></li>
              <li><a href="#contact" className="hover:text-[#f5f0e8] transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 text-[10px] tracking-[0.14em] uppercase font-light text-[#f5f0e8]/55">
          <span>Alpha Lyrae Design</span>
          <span>A &amp; M Consulting S.r.l. · Via Courmayeur 12, 00135 Roma · P. IVA 01001521002</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
