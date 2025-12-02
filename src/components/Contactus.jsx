import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaChevronDown,
  FaCommentDots
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#024A3A] py-10">
      <h1 className="text-4xl font-bold text-white mb-10">
        Contact FreshGrocers
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[450px] bg-[#015C47] p-8 rounded-2xl shadow-lg text-white"
      >
        {/* Name */}
        <div className="mb-4 relative">
          <FaUser className="absolute left-3 top-3 text-gray-300" />
          <input
            type="text"
            name="name"
            placeholder="Hexagon Digital Services"
            value={form.name}
            onChange={handleChange}
            className="w-full pl-10 p-3 rounded-lg bg-[#0B7058] outline-none"
          />
        </div>

        {/* Email */}
        <div className="mb-4 relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-300" />
          <input
            type="email"
            name="email"
            placeholder="hexa@gmail.com"
            value={form.email}
            onChange={handleChange}
            className="w-full pl-10 p-3 rounded-lg bg-[#0B7058] outline-none"
          />
        </div>

        {/* Phone */}
        <div className="mb-4 relative">
          <FaPhone className="absolute left-3 top-3 text-gray-300" />
          <input
            type="text"
            name="phone"
            placeholder="8299431275"
            value={form.phone}
            onChange={handleChange}
            className="w-full pl-10 p-3 rounded-lg bg-[#0B7058] outline-none"
          />
        </div>

      {/* Subject Dropdown */}
<div className="mb-4 relative">
  <FaChevronDown className="absolute right-3 top-4 text-gray-300 pointer-events-none" />

  <select
    name="subject"
    value={form.subject}
    onChange={handleChange}
    className="w-full p-3 rounded-lg bg-[#0B7058] text-white outline-none appearance-none"
  >
    <option value="" disabled className="text-gray-300">
      Select Subject
    </option>
    <option value="Order Inquiry">Order Inquiry</option>
    <option value="Return Request">Return Request</option>
    <option value="Payment Issue">Payment Issue</option>
    <option value="Shipping Delay">Shipping Delay</option>
    <option value="General Question">General Question</option>
  </select>
</div>

        {/* Message */}
        <div className="mb-4 relative">
          <FaCommentDots className="absolute left-3 top-3 text-gray-300" />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="3"
            placeholder="Type your message..."
            className="w-full pl-10 p-3 rounded-lg bg-[#0B7058] outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#00D185] p-3 rounded-lg font-bold text-black hover:bg-[#02b672] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
