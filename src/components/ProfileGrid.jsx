import ProfileCard from './ProfileCard';
import imgOne from '../assets/profile.jpg';
import imgTwo from '../assets/profile1.jpg';
import imgThree from '../assets/profile2.jpg';
import imgFour from '../assets/profile3.jpg';

const profiles = [
  {
    title: 'Alice D.',
    imageSrc: imgOne,
    job: 'Manager',
    description: 'Alice loves animals and is a great volunteer.',
  },
  {
    title: 'Charlee J.',
    imageSrc: imgTwo,
    job: 'Receptionist',
    description:
      'Charlee is dedicated to animal welfare and is a skilled foster.',
  },
  {
    title: 'Blair O.',
    imageSrc: imgThree,
    job: 'Vet',
    description: 'Blair is a passionate advocate for animal rights.',
  },
  {
    title: 'Tim Z.',
    imageSrc: imgFour,
    job: 'Adoption Intake',
    description: 'Tim has been helping animals for over 10 years.',
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
            job={profile.job}
            imageSrc={profile.imageSrc}
            description={profile.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileGrid;
