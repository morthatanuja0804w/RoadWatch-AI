import { useState } from "react";

import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    if (!name || !phone) {
      alert("Please fill all fields");

      return;
    }

    const userData = {
      name,
      phone,
    };

    localStorage.setItem("roadwatch_user", JSON.stringify(userData));

    navigate("/");
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4">
      <div className="bg-gray-900 w-full max-w-md p-8 rounded-3xl">
        <h1 className="text-white text-4xl font-bold text-center mb-2">
          RoadWatch AI
        </h1>

        <p className="text-gray-400 text-center mb-8">
          AI-Powered Civic Assistant
        </p>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-4 rounded-xl bg-black text-white mb-4 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter mobile number"
          className="w-full p-4 rounded-xl bg-black text-white mb-6 outline-none"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all p-4 rounded-xl text-white font-bold"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
