export function GoldDivider() {
  return (
    <div className="flex items-center justify-center py-8 px-4">
      <svg width="280" height="32" viewBox="0 0 280 32" fill="none" className="max-w-full">
        <line x1="0" y1="16" x2="100" y2="16" stroke="#E8D5A3" strokeWidth="1" />
        <line x1="180" y1="16" x2="280" y2="16" stroke="#E8D5A3" strokeWidth="1" />
        {/* Lotus center */}
        <g transform="translate(140, 16)">
          <ellipse cx="0" cy="-4" rx="6" ry="10" fill="#C9A84C" opacity="0.7" transform="rotate(-30)" />
          <ellipse cx="0" cy="-4" rx="6" ry="10" fill="#C9A84C" opacity="0.7" transform="rotate(30)" />
          <ellipse cx="0" cy="-4" rx="6" ry="10" fill="#C9A84C" opacity="0.8" />
          <ellipse cx="0" cy="-4" rx="5" ry="8" fill="#E8D5A3" opacity="0.5" transform="rotate(-60)" />
          <ellipse cx="0" cy="-4" rx="5" ry="8" fill="#E8D5A3" opacity="0.5" transform="rotate(60)" />
          <circle cx="0" cy="0" r="3" fill="#C9A84C" />
        </g>
        {/* Small diamonds */}
        <rect x="108" y="13" width="6" height="6" fill="#C9A84C" opacity="0.5" transform="rotate(45 111 16)" />
        <rect x="166" y="13" width="6" height="6" fill="#C9A84C" opacity="0.5" transform="rotate(45 169 16)" />
      </svg>
    </div>
  );
}
