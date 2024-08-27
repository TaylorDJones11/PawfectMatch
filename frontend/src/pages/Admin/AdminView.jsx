import AdminAnimalList from '../../components/AdminAnimalList';
import Logo from '../../components/Logo';

function AdminView() {
  return (
    <>
      <div className='admin-view-container p-8 animal-container h-screen'>
        <h1 className='text-3xl font-bold mb-6'>Admin Dashboard</h1>
        <AdminAnimalList />
      </div>
    </>
  );
}
export default AdminView;
