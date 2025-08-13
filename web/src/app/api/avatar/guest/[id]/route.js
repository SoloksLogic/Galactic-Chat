// Generate space-themed avatars for guest users
export async function GET(request, { params }) {
  const { id } = params;
  
  // Space-themed avatar options
  const avatarTypes = [
    'planet', 'star', 'galaxy', 'nebula', 'comet', 'asteroid', 'spaceship', 'alien'
  ];
  
  const colors = [
    '#8B5CF6', '#A855F7', '#C084FC', '#E879F9', '#F472B6', '#FB7185',
    '#60A5FA', '#34D399', '#FBBF24', '#F87171', '#A78BFA', '#06B6D4'
  ];
  
  // Use ID to deterministically select avatar type and color
  const avatarIndex = parseInt(id) % avatarTypes.length;
  const colorIndex = parseInt(id) % colors.length;
  const avatarType = avatarTypes[avatarIndex];
  const color = colors[colorIndex];
  
  // Generate SVG based on avatar type
  let svg = '';
  
  switch (avatarType) {
    case 'planet':
      svg = `
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="${color}" opacity="0.8"/>
          <circle cx="20" cy="20" r="15" fill="${color}" opacity="0.6"/>
          <circle cx="25" cy="15" r="3" fill="white" opacity="0.3"/>
          <circle cx="15" cy="25" r="2" fill="white" opacity="0.2"/>
        </svg>
      `;
      break;
    case 'star':
      svg = `
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <polygon points="20,2 24,14 36,14 27,22 31,34 20,26 9,34 13,22 4,14 16,14" fill="${color}"/>
          <polygon points="20,6 22,12 28,12 24,16 26,22 20,18 14,22 16,16 12,12 18,12" fill="white" opacity="0.6"/>
        </svg>
      `;
      break;
    case 'galaxy':
      svg = `
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="20" cy="20" rx="18" ry="8" fill="${color}" opacity="0.6" transform="rotate(45 20 20)"/>
          <ellipse cx="20" cy="20" rx="15" ry="6" fill="${color}" opacity="0.8" transform="rotate(45 20 20)"/>
          <circle cx="20" cy="20" r="4" fill="white" opacity="0.9"/>
        </svg>
      `;
      break;
    case 'nebula':
      svg = `
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="8" fill="${color}" opacity="0.4"/>
          <circle cx="25" cy="20" r="10" fill="${color}" opacity="0.3"/>
          <circle cx="20" cy="25" r="6" fill="${color}" opacity="0.5"/>
          <circle cx="18" cy="18" r="2" fill="white" opacity="0.8"/>
        </svg>
      `;
      break;
    case 'comet':
      svg = `
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="10" r="4" fill="${color}"/>
          <path d="M26 14 L10 30 L8 28 L24 12 Z" fill="${color}" opacity="0.6"/>
          <path d="M24 12 L6 30 L4 28 L22 10 Z" fill="${color}" opacity="0.3"/>
        </svg>
      `;
      break;
    case 'asteroid':
      svg = `
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <polygon points="20,5 30,12 35,25 25,35 15,35 5,25 10,12" fill="${color}" opacity="0.8"/>
          <circle cx="18" cy="15" r="2" fill="white" opacity="0.4"/>
          <circle cx="25" cy="22" r="1.5" fill="white" opacity="0.3"/>
          <circle cx="15" cy="28" r="1" fill="white" opacity="0.2"/>
        </svg>
      `;
      break;
    case 'spaceship':
      svg = `
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <polygon points="20,5 30,20 25,30 15,30 10,20" fill="${color}"/>
          <polygon points="20,8 26,18 22,26 18,26 14,18" fill="white" opacity="0.6"/>
          <circle cx="20" cy="15" r="3" fill="${color}" opacity="0.8"/>
        </svg>
      `;
      break;
    case 'alien':
      svg = `
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="20" cy="25" rx="12" ry="10" fill="${color}" opacity="0.8"/>
          <ellipse cx="20" cy="15" rx="8" ry="12" fill="${color}"/>
          <circle cx="17" cy="12" r="2" fill="white"/>
          <circle cx="23" cy="12" r="2" fill="white"/>
          <circle cx="17" cy="12" r="1" fill="black"/>
          <circle cx="23" cy="12" r="1" fill="black"/>
        </svg>
      `;
      break;
    default:
      svg = `
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="${color}"/>
        </svg>
      `;
  }
  
  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
    },
  });
}