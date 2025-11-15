import React, { useState } from "react";
import { countryCodes } from "../data/CountryCodes";

interface ApplyFormProps {
  onSuccess: () => void;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  resume?: string;
}

const ApplyForm: React.FC<ApplyFormProps> = ({ onSuccess }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("+91");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const [errors, setErrors] = useState<FormErrors>({});

  // VALIDATION
  const validate = (): boolean => {
    const validationErrors: FormErrors = {};

    // Full Name
    if (!fullName.trim()) {
      validationErrors.fullName = "Full name is required.";
    } else if (!/^[A-Za-z ]+$/.test(fullName)) {
      validationErrors.fullName = "Only alphabets allowed.";
    }

    // Email
    if (!email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) {
      validationErrors.email = "Invalid email format.";
    }

    // Phone
    if (!phone.trim()) {
      validationErrors.phone = "Phone number is required.";
    } else if (!/^\d{7,12}$/.test(phone)) {
      validationErrors.phone = "Enter a valid phone number.";
    }

    // Resume
    if (!resume) {
      validationErrors.resume = "Please upload your resume.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  // SUBMIT
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      alert("Application Submitted Successfully ✔️");
      onSuccess(); // close modal
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* FULL NAME */}
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => /^[A-Za-z ]*$/.test(e.target.value) && setFullName(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 focus:border-[#233AA7]"
        />
        {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName}</p>}
      </div>

      {/* EMAIL */}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 focus:border-blue-600"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      {/* COUNTRY + PHONE */}
      {/* PHONE */}
<div>
  <label className="block text-sm font-medium mb-1">Phone</label>

  <div className="flex gap-2 flex-wrap md:flex-nowrap">

    {/* Country Dropdown */}
    <select
      value={country}
      onChange={(e) => setCountry(e.target.value)}
      className="border rounded-xl px-2 py-3 bg-white w-full md:w-18 min-w-0"
    >
      {countryCodes.map((c) => (
        <option key={c.code} value={c.code}>
          {c.name} ({c.code})
        </option>
      ))}
    </select>

    {/* Phone Input */}
    <input
      type="text"
      value={phone}
      onChange={(e) => /^\d*$/.test(e.target.value) && setPhone(e.target.value)}
      placeholder="9876543210"
      className="border rounded-xl px-4 py-3 flex-1 w-full min-w-0"
    />
  </div>

  {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
</div>


      {/* RESUME */}
      <div>
        <label className="block text-sm font-medium mb-1">Upload Resume</label>
        <input
          type="file"
          onChange={(e) => setResume(e.target.files?.[0] || null)}
          className="w-full border rounded-xl px-4 py-2"
        />
        {errors.resume && <p className="text-red-500 text-xs">{errors.resume}</p>}
      </div>

      <button className="w-full bg-[#233AA7] text-white py-3 rounded-xl hover:bg-blue-900">
        Submit Application
      </button>
    </form>
  );
};

export default ApplyForm;
