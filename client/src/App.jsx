import { getImageUrl } from './utils/utils.js';

function Avatar({ person, size }) {
  let thumbnailSize = 's';
  if (thumbnailSize > 90) {
    thumbnailSize = 'b'
  }

  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function App() {
  return (
    <Avatar
      size={40}
      person={{
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP'
      }}
    />
  );
}