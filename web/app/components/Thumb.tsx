type Props = { src?: string; alt: string; className: string; fallback?: string };

export default function Thumb({ src, alt, className, fallback }: Props) {
  if (!src) {
    return (
      <div className={`${className} w-full ${fallback ?? "bg-gradient-to-br from-gray-300 to-gray-200"}`} />
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={`${className} w-full object-cover`} />;
}
