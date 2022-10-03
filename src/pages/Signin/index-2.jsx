import { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const result = await axios.post("api/auth/login", form);
      localStorage.setItem("userId", result.data.data.id);
      localStorage.setItem("token", result.data.data.token);
      alert(JSON.stringify(result.data.msg));
      navigate("/");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="container text-center mt-5">
        <input
          type="email"
          name="email"
          id=""
          className="form-control"
          placeholder="Your Email"
          onChange={handleInputChange}
        />
        <br />
        <div className="input-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id=""
            className="form-control"
            placeholder="Your Password"
            onChange={handleInputChange}
          />
          <button
            className="btn btn-primary btn-sm"
            onClick={handleShowPassword}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <br />
        <div className="form-control btn btn-primary" onClick={handleLogin}>
          Sign In
        </div>
      </div>
    </div>
  );
}
