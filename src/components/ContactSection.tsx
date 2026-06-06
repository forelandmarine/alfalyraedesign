'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#0c1a2e] text-[#f5f0e8] px-8 md:px-20 py-28 md:py-40 border-t border-[rgba(245,240,232,0.10)]"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 md:gap-24 items-start">
        <div>
          <h2
            className="font-light leading-[1.16] text-[#f5f0e8]"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(30px, 3.2vw, 52px)',
              fontStyle: 'italic',
            }}
          >
            Write to the <span style={{ color: '#b8966b' }}>studio.</span>
          </h2>

          <dl className="mt-12 grid grid-cols-[110px_1fr] gap-y-3 gap-x-6 text-[12px] leading-[1.85] font-light text-[#f5f0e8]/85">
            <dt className="text-[9px] tracking-[0.14em] uppercase text-[#f5f0e8]/55 font-medium pt-[3px]">Studio</dt>
            <dd>Alpha Lyrae Design<br/>A &amp; M Consulting S.r.l.<br/>Via Courmayeur 12<br/>00135 Roma, Italia</dd>
            <dt className="text-[9px] tracking-[0.14em] uppercase text-[#f5f0e8]/55 font-medium pt-[3px]">P. IVA</dt>
            <dd>01001521002</dd>
          </dl>
        </div>

        <form onSubmit={handleSubmit}>
          {sent ? (
            <div
              className="text-[16px] leading-[1.7] text-[#f5f0e8] font-light"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontStyle: 'italic' }}
            >
              Thank you. The studio will reply soon.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              <Field id="name" label="Name" value={name} onChange={setName} />
              <Field id="email" type="email" label="E-mail" value={email} onChange={setEmail} />
              <div className="sm:col-span-2">
                <Field id="subject" label="Subject" value={subject} onChange={setSubject} />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-[9px] tracking-[0.18em] uppercase text-[#f5f0e8]/55 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full bg-transparent border-b border-[rgba(245,240,232,0.32)] focus:border-[#f5f0e8] focus:outline-none py-2 text-[14px] leading-[1.75] font-light text-[#f5f0e8] resize-none"
                />
              </div>

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 border border-[#f5f0e8] px-7 py-3 text-[10px] tracking-[0.22em] uppercase font-medium text-[#f5f0e8] hover:bg-[#f5f0e8] hover:text-[#0c1a2e] transition-colors"
                >
                  Send
                  <span aria-hidden className="text-[#b8966b]">→</span>
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  id, label, value, onChange, type = 'text',
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[9px] tracking-[0.18em] uppercase text-[#f5f0e8]/55 mb-3"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-[rgba(245,240,232,0.32)] focus:border-[#f5f0e8] focus:outline-none py-2 text-[14px] leading-[1.75] font-light text-[#f5f0e8]"
      />
    </div>
  );
}
