import Image from 'next/image';
import type { ImageProps } from 'next/image';

type StockImageProps = Omit<ImageProps, 'alt'> & {
  alt?: string;
  containerClassName?: string;
};

export default function StockImage({
  containerClassName = '',
  alt = '',
  ...imgProps
}: StockImageProps) {
  return (
    <div className={`relative ${containerClassName}`} aria-label="Stock image placeholder">
      <Image alt={alt} {...imgProps} />

      {/* Subtle tint so the image visibly reads as a placeholder */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(12,26,46,0.28)' }}
      />

      {/* Diagonal watermark */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
      >
        <span
          style={{
            transform: 'rotate(-14deg)',
            fontFamily: 'var(--font-jost), sans-serif',
            fontWeight: 500,
            letterSpacing: '0.30em',
            textTransform: 'uppercase',
            fontSize: 'clamp(28px, 5vw, 64px)',
            color: 'rgba(245,240,232,0.55)',
            textShadow: '0 1px 2px rgba(0,0,0,0.45)',
            whiteSpace: 'nowrap',
          }}
        >
          Stock Image
        </span>
      </div>

      {/* Corner ribbon for unambiguous read at small sizes */}
      <div
        aria-hidden
        className="absolute top-3 left-3 pointer-events-none"
      >
        <span
          style={{
            fontFamily: 'var(--font-jost), sans-serif',
            fontWeight: 500,
            letterSpacing: '0.20em',
            textTransform: 'uppercase',
            fontSize: '9px',
            color: '#0c1a2e',
            background: '#b8966b',
            padding: '4px 8px',
            display: 'inline-block',
          }}
        >
          Placeholder
        </span>
      </div>
    </div>
  );
}
