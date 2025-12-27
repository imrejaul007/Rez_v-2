import React from 'react';

/**
 * Reusable Brand Logo Component
 * Displays brand logos with proper error handling and fallback
 */
const BrandLogo = ({
  src,
  alt,
  size = 'md',
  className = '',
  fallbackIcon = '🏪'
}) => {
  const sizeClasses = {
    'xs': 'w-8 h-8',
    'sm': 'w-12 h-12',
    'md': 'w-16 h-16',
    'lg': 'w-20 h-20',
    'xl': 'w-24 h-24'
  };

  const iconSizes = {
    'xs': 'text-lg',
    'sm': 'text-xl',
    'md': 'text-2xl',
    'lg': 'text-3xl',
    'xl': 'text-4xl'
  };

  const handleError = (e) => {
    e.target.style.display = 'none';
    const fallback = document.createElement('span');
    fallback.className = `${iconSizes[size]}`;
    fallback.textContent = fallbackIcon;
    e.target.parentElement.appendChild(fallback);
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center p-2 overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        onError={handleError}
        loading="lazy"
      />
    </div>
  );
};

export default BrandLogo;
