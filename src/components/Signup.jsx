import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupStyles } from "../assets/adminStyles";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaEnvelope, FaCheck } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        navigate("/login");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showToast, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setShowToast(true);
  };

  return (
    <div className={signupStyles.page}>
      {/* Back to Login */}
      <Link to="/login" className={signupStyles.backLink}>
        ← Back to Login
      </Link>

      {/* Toast */}
      {showToast && (
        <div className={signupStyles.toast}>
          <FaCheck className="mr-2" />
          Account created successfully!
        </div>
      )}

      {/* Signup Card */}
      <div className={signupStyles.signupCard}>
        {/* Logo */}
        <div className={signupStyles.logoContainer}>
          <div className={signupStyles.logoOuter}>
            <div className={signupStyles.logoInner}>
              <FaUser className={signupStyles.logoIcon} />
            </div>
          </div>
        </div>

        <h2 className={signupStyles.title}>Create Account</h2>

        <form onSubmit={handleSubmit} className={signupStyles.form}>
          {/* Full Name */}
          <div className="flex items-center bg-[#162230] p-3 rounded-lg border border-gray-700 mb-4">
            <FaUser className="mr-3 text-gray-300" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent w-full outline-none text-white"
            />
          </div>
          {errors.name && <p className={signupStyles.error}>{errors.name}</p>}

          {/* Email */}
          <div className="flex items-center bg-[#162230] p-3 rounded-lg border border-gray-700 mb-4">
            <FaEnvelope className="mr-3 text-gray-300" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent w-full outline-none text-white"
            />
          </div>
          {errors.email && <p className={signupStyles.error}>{errors.email}</p>}

          {/* Password */}
          <div className="flex items-center bg-[#162230] p-3 rounded-lg border border-gray-700 mb-4">
            <FaLock className="mr-3 text-gray-300" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-transparent w-full outline-none text-white"
            />
            <span
              className="ml-2 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && <p className={signupStyles.error}>{errors.password}</p>}

          {/* Remember Me */}
          <div className={signupStyles.termsContainer}>
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className={signupStyles.termsCheckbox}
            />
            <label className={signupStyles.termsLabel}>Remember me</label>
          </div>

          {/* Submit */}
          <button type="submit" className={signupStyles.submitButton}>
            Create Account
          </button>

          {/* Login Link */}
          <p className={signupStyles.signinText}>
            Already have an account?{" "}
            <Link to="/login" className={signupStyles.signinLink}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
