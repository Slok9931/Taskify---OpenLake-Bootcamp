import { Fade } from "react-awesome-reveal";

function ProfileComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center animated-gradient p-8">
      <Fade triggerOnce cascade direction="up" duration={500}>
        <div className="relative group bg-white p-10 rounded-2xl shadow-2xl w-[70vw] transition-all duration-500 ease-in-out hover:scale-[1.02]">
          <div className="absolute inset-1 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 border-indigo-500 group-hover:shadow-[0_0_30px_5px_rgba(99,102,241,0.7)] z-[-1]" />

          <h1 className="text-center text-3xl font-bold text-[#2c3e50] text-indigo-600 mb-8">USER PROFILE</h1>

          <section id="profile" className="mb-10">
            <h2 className="text-xl font-semibold border-b-2 border-blue-600 pb-2 mb-6 text-blue-700">Personal Information</h2>

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
              Gender:
              <select className="w-full mt-1 p-2 border border-gray-300 rounded">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </label>

            <label className="block mb-4 font-semibold">
              Phone Number:
              <input
                type="tel"
                placeholder="+91-1234567890"
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

          <div className="flex justify-center">
          <button
            id="signout-btn"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded mx-2"
          >
            Sign Out
          </button>
          <button
            id="savechanges-btn"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded mx-2"
          >
            Save Changes
          </button>
        </div>
        </div>
      </Fade>
    </div>
  );
}

export default ProfileComponent;
