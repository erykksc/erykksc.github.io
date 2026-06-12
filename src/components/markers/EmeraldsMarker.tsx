const IMAGE_URL =
  'https://github.com/user-attachments/assets/d6cc2b2b-15a3-46fa-baec-d78069b90d07';

export function EmeraldsMarker({
  title,
  href,
}: {
  title: string;
  href?: string;
}) {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      href={href}
      className="timeline-marker timeline-marker--square timeline-marker--image-wide"
      aria-label={href ? `Open ${title}` : undefined}
    >
      <img
        src={IMAGE_URL}
        alt={`Preview of ${title}`}
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </Tag>
  );
}
