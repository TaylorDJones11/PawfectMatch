import ProfileCard from './ProfileCard';

const profiles = [
  {
    title: 'Alice',
    imageSrc: 'path/to/alice.jpg',
    description: 'Alice loves animals and is a great volunteer.',
  },
  {
    title: 'Bob',
    imageSrc: 'path/to/bob.jpg',
    description: 'Bob is dedicated to animal welfare and is a skilled foster.',
  },
  {
    title: 'Charlie',
    imageSrc: 'path/to/charlie.jpg',
    description: 'Charlie is a passionate advocate for animal rights.',
  },
  {
    title: 'Diana',
    imageSrc: 'path/to/diana.jpg',
    description: 'Diana has been helping animals for over 10 years.',
  },
  // Add more profiles as needed
];

function ProfileGrid() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            title={profile.title}
            imageSrc={profile.imageSrc}
            description={profile.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileGrid;
