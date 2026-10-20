// Small stroke-based SVG icons, sized via CSS (currentColor) — used instead
// of emoji (no generic robots/brains) so the service cards, nav and flow
// diagram share one consistent icon language.

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconWorkflow(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <rect x="15" y="3" width="6" height="6" rx="1.5" />
      <path d="M9 6h3a3 3 0 0 1 3 3v3" />
      <path d="M18 9v3a3 3 0 0 1-3 3H9" />
    </svg>
  );
}

export function IconGlobe(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9Z" />
    </svg>
  );
}

export function IconLink(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 6.5 12.6 4.9a3.6 3.6 0 0 1 5.1 5.1L16.1 11.6" />
      <path d="M13 17.5 11.4 19.1a3.6 3.6 0 0 1-5.1-5.1L7.9 12.4" />
    </svg>
  );
}

export function IconLeaf(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19c7 1 13-3.5 14-13C11 5 5 10 5 17" />
      <path d="M5 19c0-3.5 1.6-6.5 4.5-9" />
    </svg>
  );
}

export function IconChat(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8 9.5h8" />
      <path d="M8 12.5h5" />
    </svg>
  );
}

export function IconChart(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <rect x="7" y="13" width="2.6" height="7" />
      <rect x="12" y="9" width="2.6" height="11" />
      <rect x="17" y="5" width="2.6" height="15" />
    </svg>
  );
}

export function IconDocument(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3h7l4 4v14H7Z" />
      <path d="M14 3v4h4" />
      <path d="M9.5 13h5" />
      <path d="M9.5 16.5h5" />
    </svg>
  );
}

export function IconClock(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

export function IconArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconCheck(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12.5 9 17l10.5-11" />
    </svg>
  );
}

export function IconCross(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function IconInbox(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h4l2 3h4l2-3h4" />
      <path d="M5.5 5h13l1.5 7v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Z" />
    </svg>
  );
}

export function IconLayers(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}
