function ProfileCard({ title, job, imageSrc, description }) {
  return (
    <div className='bg-white p-4 rounded-lg shadow-lg text-center'>
      <div className='flex justify-center mb-4'>
        <img
          src={imageSrc}
          alt={title}
          className='w-24 h-24 object-cover rounded-full border-4 border-gray-200'
        />
      </div>
      <h2 className='text-xl font-bold mb-2'>{title}</h2>
      <p className='text-md font-medium mb-2'>{job}</p>
      <p className='text-gray-700'>{description}</p>
    </div>
  );
}

export default ProfileCard;
