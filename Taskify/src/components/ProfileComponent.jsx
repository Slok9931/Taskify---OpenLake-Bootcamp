import { useEffect } from 'react';

function ProfileComponent() {
  useEffect(() => {
    const passwordBtn = document.getElementById('change-password-btn');
    const cancelPasswordBtn = document.getElementById('cancel-password-btn');
    const passwordForm = document.getElementById('change-password-form');

    passwordBtn?.addEventListener('click', () => {
      passwordForm.style.display = 'block';
    });

    cancelPasswordBtn?.addEventListener('click', () => {
      passwordForm.style.display = 'none';
    });

    const twoFA = document.getElementById('2fa-toggle');
    const setupDiv = document.getElementById('2fa-setup');
    const authMethod = document.getElementById('auth-method');
    const authInputContainer = document.getElementById('auth-input-container');

    twoFA?.addEventListener('change', function () {
      if (this.checked) {
        setupDiv.style.display = 'block';
      } else {
        setupDiv.style.display = 'none';
        authInputContainer.innerHTML = '';
        authMethod.value = '';
      }
    });

    authMethod?.addEventListener('change', function () {
      let inputHTML = '';
      if (this.value === 'email') {
        inputHTML = `<label class="block mb-2 font-semibold">Enter Email: <input type="email" class="w-full mt-1 p-2 border rounded"/></label>`;
      } else if (this.value === 'phone') {
        inputHTML = `<label class="block mb-2 font-semibold">Enter Phone Number: <input type="tel" class="w-full mt-1 p-2 border rounded"/></label>`;
      } 
      authInputContainer.innerHTML = inputHTML;
    });

    const signoutBtn = document.getElementById('signout-btn');
    signoutBtn?.addEventListener('click', function () {
      if (window.confirm('Are you sure you want to sign out?')) {
        alert('Signed out successfully.');
      }
    });

    return () => {
      passwordBtn?.removeEventListener('click', () => {});
      cancelPasswordBtn?.removeEventListener('click', () => {});
      twoFA?.removeEventListener('change', () => {});
      authMethod?.removeEventListener('change', () => {});
      signoutBtn?.removeEventListener('click', () => {});
    };
  }, []);
  
    return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md overflow-y-auto max-h-[90vh]">
        <h1 className="text-center text-3xl font-bold text-[#2c3e50] mb-8">USER</h1>

        <section id="profile" className="mb-10"> 
            <h2 className="text-xl font-semibold border-b-2 border-blue-600 pb-2 mb-6 text-blue-700">Profile</h2>
            
            <label className="block mb-4 font-semibold">
              Name: 
              <input 
              type="text" 
              defaultValue="User" 
              className="w-full mt-1 p-2 border border-gray-300 rounded text-gray-800 text-sm font-sans"
              />
            </label>
            
            <label className="block mb-4 font-semibold">
              Email: 
              <input 
              type="email" 
              defaultValue="useremail@gmail.com" 
              className="w-full mt-1 p-2 border border-gray-300 rounded text-gray-800 text-sm font-sans"
              />
            </label>

            <label className="block mb-4 font-semibold">
              Date of Birth:
              <input
                type="date"
                className="w-full mt-1 p-2 border border-gray-300 rounded text-gray-800 text-sm font-sans"
              />
            </label>

            <label className="block mb-4 font-semibold">
              Avatar:
              <input
                type="file"
                accept="image/*"
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-pointer hover:bg-gray-200"
                
              />
            </label>

            <label className="block mb-4 font-semibold">
              Bio:
              <textarea
                rows="3"
                placeholder="Short bio about yourself or your work"
                className="w-full mt-1 p-2 border border-gray-300 rounded text-gray-800 text-sm font-sans resize-none"
              />
            </label> 

        </section>

        <section id="security" className="mb-10">
            <h2 className="text-xl font-semibold border-b-2 border-blue-600 pb-2 mb-6 text-blue-700">Security</h2>
            <button
          id="change-password-btn"
          className="mb-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
        >
          Change Password
        </button>

        <div id="change-password-form" style={{ display: 'none' }} className="mb-4 space-y-4">
          <label className="block font-semibold">
            Current Password:
            <input type="password" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </label>

          <label className="block font-semibold">
            New Password:
            <input type="password" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </label>

          <label className="block font-semibold">
            Confirm New Password:
            <input type="password" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </label>

          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">
              Save Changes
            </button>
            <button
              id="cancel-password-btn"
              type="button"
              className="bg-gray-400 hover:bg-gray-500 text-white font-semibold px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>

        <label className="block mb-4 font-semibold">
          Two-Factor Authentication:
          <input
            type="checkbox"
            id="2fa-toggle"
            className="ml-2 transform scale-125 align-middle"
          />
        </label>

        <div id="2fa-setup" style={{ display: 'none' }} className="mb-6">
          <label className="block font-semibold mb-2">
            Authentication Method:
            <select
              id="auth-method"
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            >
              <option value="">-- Select --</option>
              <option value="email">Email</option>
              <option value="phone">Phone Number</option>
            </select>
          </label>
          <div id="auth-input-container"></div>
        </div>

        <h3 className="text-lg font-semibold text-[#2c3e50] mb-3">Active Sessions</h3>
        <ul className="list-none max-h-[150px] overflow-y-auto border border-gray-300 rounded bg-gray-50">
          <li className="flex justify-between items-center border-b border-gray-300 px-4 py-2 text-sm">
            Device 1 - Location - Last Active: 2025-06-09 09:30 AM
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1 rounded ml-4">
              Log out
            </button>
          </li>
          <li className="flex justify-between items-center border-b border-gray-300 px-4 py-2 text-sm">
            Device 2 - Location - Last Active: 2025-06-08 08:00 PM
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-1 rounded ml-4">
              Log out
            </button>
          </li>
        </ul>

        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded">
          Log out from other devices
        </button>
      </section>

      <section id="preferences" className="mb-10">
        <h2 className="text-xl font-semibold border-b-2 border-blue-600 pb-2 mb-6 text-blue-700">Preferences</h2>

        {[
          ['Theme:', ['Light', 'Dark', 'System']],
          ['Language:', ['English', 'Hindi', 'French' , 'Spanish', 'Telugu']],
          ['Default Note Format:', ['Plain Text', 'Markdown']],
          ['Task Default Priority:', ['Low', 'Medium', 'High']],
        ].map(([label, options]) => (
          <label key={label} className="block mb-4 font-semibold">
            {label}
            <select className="w-full mt-1 p-2 border border-gray-300 rounded">
              {options.map(option => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        ))}

        <label className="block mb-4 font-semibold">
          Auto-save Notes:
          <input type="checkbox" defaultChecked className="ml-2 transform scale-125 align-middle" />
        </label>
      </section>

      <section id="notification-settings" className="mb-10">
        <h2 className="text-xl font-semibold border-b-2 border-blue-600 pb-2 mb-6 text-blue-700">Notification Settings</h2>

        {['Email Notifications', 'Push Notifications', 'Task Reminders', 'Note Updates'].map((label) => (
          <label key={label} className="block mb-3 font-semibold">
            {label}:
            <input type="checkbox" defaultChecked className="ml-2 transform scale-125 align-middle" />
          </label>
        ))}
      </section>

      <section id="activity" className="mb-10">
        <h2 className="text-xl font-semibold border-b-2 border-blue-600 pb-2 mb-6 text-blue-700">Activity</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
          <li>Task created: "Task Name" - 2025-06-09</li>
          <li>Note edited: "Note Title" - 2025-06-08</li>
          <li>Password changed - 2025-06-07</li>
        </ul>
      </section>

      <section id="signout">
        <h2 className="text-xl font-semibold border-b-2 border-blue-600 pb-2 mb-6 text-blue-700">Sign Out</h2>
        <button
          id="signout-btn"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded"
        >
          Sign Out
        </button>
      </section>
    </div>
  );
}

export default ProfileComponent;