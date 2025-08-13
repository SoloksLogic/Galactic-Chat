// Generate space-themed usernames for guest users
export async function GET(request) {
  const spaceAdjectives = [
    'Cosmic', 'Stellar', 'Galactic', 'Nebula', 'Solar', 'Lunar', 'Astral', 'Celestial',
    'Quantum', 'Plasma', 'Void', 'Nova', 'Pulsar', 'Meteor', 'Comet', 'Orbital',
    'Binary', 'Photon', 'Neutron', 'Fusion', 'Warp', 'Hyper', 'Ultra', 'Mega',
    'Alpha', 'Beta', 'Gamma', 'Delta', 'Omega', 'Prime', 'Zero', 'Infinity'
  ];
  
  const spaceNouns = [
    'Wanderer', 'Explorer', 'Voyager', 'Drifter', 'Ranger', 'Guardian', 'Pilot', 'Navigator',
    'Hunter', 'Seeker', 'Rider', 'Walker', 'Runner', 'Jumper', 'Flyer', 'Glider',
    'Star', 'Moon', 'Sun', 'Planet', 'Galaxy', 'Nebula', 'Comet', 'Meteor',
    'Phoenix', 'Dragon', 'Tiger', 'Wolf', 'Eagle', 'Hawk', 'Falcon', 'Raven',
    'Shadow', 'Ghost', 'Spirit', 'Phantom', 'Wraith', 'Specter', 'Echo', 'Whisper',
    'Storm', 'Thunder', 'Lightning', 'Blaze', 'Flame', 'Frost', 'Ice', 'Crystal'
  ];
  
  // Generate random username
  const adjective = spaceAdjectives[Math.floor(Math.random() * spaceAdjectives.length)];
  const noun = spaceNouns[Math.floor(Math.random() * spaceNouns.length)];
  const number = Math.floor(Math.random() * 999) + 1;
  
  const username = `${adjective}${noun}${number}`;
  
  return Response.json({ username });
}