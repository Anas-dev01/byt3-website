import { useState } from 'react';

const ImageWithSkeleton = ({
  src,
  alt,
  className = '',
  imageClassName = '',
  loading = 'lazy',
}) => {
  const [imageState, setImageState] = useState({ src: null, status: 'loading' });
  const status = imageState.src === src ? imageState.status : 'loading';

  return (
    <span className={`skeleton-image-frame skeleton-image-${status}${className ? ` ${className}` : ''}`}>
      {status === 'loading' && <span className="skeleton-image-placeholder" aria-hidden="true" />}
      {status === 'error' ? (
        <span className="skeleton-image-fallback" role="img" aria-label={`${alt} (image unavailable)`}>
          Image unavailable
        </span>
      ) : (
        <img
          className={imageClassName}
          src={src}
          alt={alt}
          loading={loading}
          onLoad={() => setImageState({ src, status: 'loaded' })}
          onError={() => setImageState({ src, status: 'error' })}
        />
      )}
    </span>
  );
};

export default ImageWithSkeleton;
