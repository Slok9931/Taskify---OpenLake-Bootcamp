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
        inputHTML = `<label>Enter Email: <input type="email" /></label>`;
      } else if (this.value === 'phone') {
        inputHTML = `<label>Enter Phone Number: <input type="tel" /></label>`;
      } else if (this.value === 'passcode') {
        inputHTML = `<label>Enter Passcode: <input type="text" /></label>`;
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
    <div class="container">
        <h1>User</h1>

        <section id="profile"> 
            <h2>Profile</h2>
            <label>Name: <input type="text" defaultValue="User" /></label>
            <label>Email: <input type="email" defaultValue="useremail@gmail.com" /></label>
            <label>Date of Birth: <input type="date" /></label>
            <label>Avatar: <input type="file" accept="image/*" /></label>
            <label>Bio: <br /> <textarea rows="3" placeholder="Short bio about yourself or your work"></textarea> </label>
        </section>
        <section id="security">
            <h2>Security</h2>
            <button id="change-password-btn">Change Password</button>
            <div id="change-password-form" style={{ display: 'none' }}>
                <label>Current Password: <input type="password" /></label>
                <label>New Password: <input type="password" /></label>
                <label>Confirm New Password: <input type="password" /></label>
                <button>Save Changes</button>
                <button id="cancel-password-btn" type="button">Cancel</button>
            </div>

            <label>Two-Factor Authentication: <input type="checkbox" id="2fa-toggle" /></label>
            <div id="2fa-setup" style={{ display: 'none' }}>
                <label>Authentication Method:
                    <select id="auth-method">
                        <option value="">-- Select --</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone Number</option>
                    </select>
                </label>
                <div id="auth-input-container"></div>
            </div>

            <h3>Active Sessions</h3>
            <ul>
                <li>Device 1 - Location - Last Active: 2025-06-09 09:30 AM <button>Log out</button></li>
                <li>Device 2 - Location - Last Active: 2025-06-08 08:00 PM <button>Log out</button></li>
            </ul>
            <button>Log out from other devices</button>
        </section>

        <section id="preferences">
            <h2>Preferences</h2>
            <label>Theme:
                <select>
                    <option>Light</option>
                    <option>Dark</option>
                    <option>System</option>
                </select>
            </label>
            <label>Language:
                <select>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                </select>
            </label>
            <label>Default Note Format:
                <select>
                    <option>Plain Text</option>
                    <option>Markdown</option>
                </select>
            </label>
            <label>Task Default Priority:
                <select>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </label>
            <label>Auto-save Notes: <input type="checkbox" checked /></label>
        </section>

        <section id="notification-settings">
            <h2>Notification Settings</h2>
            <label>Email Notifications: <input type="checkbox" checked /></label>
            <label>Push Notifications: <input type="checkbox" checked /></label>
            <label>Task Reminders: <input type="checkbox" checked /></label>
            <label>Note Updates: <input type="checkbox" checked /></label>
        </section>

        <section id="activity">
            <h2>Activity</h2>
            <ul>
                <li>Task created: "Task Name" - 2025-06-09</li>
                <li>Note edited: "Note Title" - 2025-06-08</li>
                <li>Password changed - 2025-06-07</li>
            </ul>
        </section>

        <section id="signout">
            <h2>Sign Out</h2>
            <button id="signout-btn">Sign Out</button>
        </section>
    </div>
  );
}

export default ProfileComponent;