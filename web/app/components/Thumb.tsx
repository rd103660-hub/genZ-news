type Props = { src?: string; alt: string; className: string; fallback?: string };

export default function Thumb({ src, alt, className, fallback }: Props) {
  if (!src) {
    return (
      <div
        className={`${className} w-full flex items-center justify-center overflow-hidden ${fallback ?? "bg-gradient-to-br from-red-600 to-red-800"}`}
      >
        <span className="text-white/90 font-bold text-base tracking-wide">
          GenZ News
        </span>
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={`${className} w-full object-cover`} />;
}
