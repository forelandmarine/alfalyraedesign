'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV = [
  { href: '/#studio',   label: 'Studio' },
  { href: '/#practice', label: 'Practice' },
  { href: '/#work',     label: 'Work' },
  { href: '/#team',     label: 'Team' },
  { href: '/#contact',  label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-colors duration-300',
        scrolled
          ? 'bg-[#0c1a2e]/92 backdrop-blur-md border-b border-[rgba(245,240,232,0.10)]'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="flex items-center justify-between px-8 md:px-14 py-5">
        <Link href="/" aria-label="Alpha Lyrae Design home" className="block">
          <span className="wordmark text-[14px] md:text-[15px] text-[#f5f0e8]">
            Alpha Lyrae &nbsp;<em>Design</em>
          </span>
        </Link>

        <nav>
          <ul className="flex items-center gap-7 md:gap-10">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[11px] md:text-[11.5px] font-normal tracking-[0.20em] uppercase text-[#f5f0e8] hover:text-[#b8966b] transition-colors"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
