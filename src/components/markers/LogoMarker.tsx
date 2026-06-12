interface Props {
  title: string;
  href?: string;
  src: string;
  alt?: string;
  shape?: 'circle' | 'square';
  aspectRatio?: string;
  size?: 'logo' | 'wide';
  objectFit?: 'contain' | 'cover';
}

export function LogoMarker({
  title,
  href,
  src,
  alt,
  shape = 'square',
  aspectRatio,
  size = 'logo',
  objectFit = 'contain',
}: Props) {
  const Tag = href ? 'a' : 'div';
  const isCircle = shape === 'circle';
  const cls = isCircle
    ? 'timeline-marker timeline-marker--circle'
    : size === 'wide'
      ? 'timeline-marker timeline-marker--square timeline-marker--image-wide'
      : 'timeline-marker timeline-marker--square timeline-marker--logo';

  const markerStyle = isCircle
    ? undefined
    : aspectRatio
      ? { height: 'auto', aspectRatio }
      : undefined;

  return (
    <Tag
      href={href}
      className={cls}
      style={markerStyle}
      aria-label={href ? `Open ${title}` : undefined}
    >
      {isCircle ? (
        <img
          src={src}
          alt={alt ?? `${title} icon`}
          loading="lazy"
          style={{
            position: 'static',
            width: '78%',
            height: '78%',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
      ) : (
        <img
          src={src}
          alt={alt ?? `${title} logo`}
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: objectFit,
            objectPosition: 'center',
          }}
        />
      )}
    </Tag>
  );
}
