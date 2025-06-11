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
    <div className="w-full bg-white p-8 rounded-lg shadow-md overflow-y-auto">
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

        <button
          id="signout-btn"
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded"
        >
          Sign Out
        </button>
        <button
          id="savechanges-btn"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 mx-5 py-2 rounded"
        >
          Save Changes
        </button>
    </div>
  );
}

export default ProfileComponent;