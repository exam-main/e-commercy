import React from 'react';

const Profile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-6">Profile</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Login" className="w-full border p-2 rounded" />
          <input type="text" placeholder="First name" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Last name" className="w-full border p-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <select className="w-full border p-2 rounded">
            <option value="">User role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <input type="password" placeholder="Password" className="w-full border p-2 rounded" />
          <input type="password" placeholder="Re-enter password" className="w-full border p-2 rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
