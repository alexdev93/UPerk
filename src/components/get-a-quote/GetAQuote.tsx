"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../common/Loader";

interface FormData {
  projectType: string;
  additionalInfo: string;
  budgetRange: string;
  timeline: string;
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  company: string;
  address: string;
}

const GetAQuote = ({ handleQuoteClose }: { handleQuoteClose: () => void }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    additionalInfo: "",
    budgetRange: "",
    timeline: "",
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    company: "",
    address: "",
  });

  useEffect(() => {
    if (status === "failed") {
      toast.error("Form submission failed", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "error1",
        className: "toast-position",
      });
    } else if (status === "succeeded") {
      toast.success("Submited successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: "success1",
        className: "toast-position",
      });
      handleQuoteClose();
    }
    setStatus("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error for the field when user starts typing
    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const validateStep = () => {
    const newErrors: Partial<FormData> = {};

    if (currentStep === 1) {
      if (!formData.projectType) {
        newErrors.projectType = "Project Type is required";
      }
      if (!formData.additionalInfo) {
        newErrors.additionalInfo = "Project Description is required";
      }
    } else if (currentStep === 2) {
      if (!formData.budgetRange) {
        newErrors.budgetRange = "Budget Range is required";
      }
      if (!formData.timeline) {
        newErrors.timeline = "Timeline is required";
      }
    } else if (currentStep === 3) {
      if (!formData.fullName) {
        newErrors.fullName = "Full Name is required";
      }
      if (!formData.emailAddress) {
        newErrors.emailAddress = "Email Address is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
        newErrors.emailAddress = "Invalid email format";
      }
      if (!formData.phoneNumber) {
        newErrors.phoneNumber = "Phone Number is required";
      }
      if (!formData.company) {
        newErrors.company = "Company is required";
      }
      if (!formData.address) {
        newErrors.address = "Address is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep() && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const queotEndpoint =
    "https://nbttrereyf.execute-api.us-east-1.amazonaws.com/prod/api/form/submit-form";

  const handleSubmit = async () => {
    if (validateStep()) {
      const formattedData = {
        projectDetails: {
          projectType: formData.projectType,
          projectDescription: formData.additionalInfo,
        },
        timelineAndBudget: {
          budgetRange: formData.budgetRange,
          timeline: formData.timeline,
        },
        contactInfo: {
          fullName: formData.fullName,
          email: formData.emailAddress,
          address: formData.address,
          phoneNumber: formData.phoneNumber,
          company: formData.company,
        },
      };

      try {
        setLoading(true);
        const response = await axios.post(queotEndpoint, formattedData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setStatus("succeeded");
        console.log("Success:", response.data);
      } catch (error) {
        setStatus("failed");
        console.error("Error submitting form:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex mx-auto max-w-[1000px] items-start justify-start p-4 z-99999">
      <div className=" bg-[#222222]  rounded-lg md:w-[750px] lg:w-[970px] w-full">
        <div className="p-6">
          <div className="mb-6">
            <div>
              <div className="flex justify-between items-center mb-5">
                <h1 className="text-white sm:text-lg text-sm text-left font-medium">
                  Let&apos;s Build Your AI Solution
                </h1>
                <button
                  onClick={handleQuoteClose}
                  className="text-gray-300 cursor-pointer hover:text-white focus:outline-none"
                  aria-label="Close form"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="text-[#8C8C8C]">
                <hr className="border-t border-[#8C8C8C] mb-5" />
              </div>
            </div>
            <div className="flex  sm:gap-9  gap-3 mb-6">
              <button
                className={`px-3 py-1.5 sm:text-sm text-[12px] rounded ${
                  currentStep === 1
                    ? "dark:bg-[#244389] text-white"
                    : "dark:bg-[#1C1C1C] text-gray-300"
                }`}
                onClick={() => setCurrentStep(1)}
              >
                Project Details
              </button>
              <button
                className={`px-3 py-1.5 sm:text-sm text-[12px] rounded ${
                  currentStep === 2
                    ? "dark:bg-[#244389] text-white"
                    : "dark:bg-[#1C1C1C] text-gray-300"
                }`}
                onClick={() => setCurrentStep(2)}
                disabled={currentStep < 2}
              >
                Timeline & Budget
              </button>
              <button
                className={`px-3 py-1.5 sm:text-sm text-[12px] rounded ${
                  currentStep === 3
                    ? "dark:bg-[#244389] text-white"
                    : "dark:bg-[#1C1C1C] text-gray-300"
                }`}
                onClick={() => setCurrentStep(3)}
                disabled={currentStep < 3}
              >
                Contact Info
              </button>
            </div>
          </div>

          {/* Step 1 - Project Type */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div>
                <label className="text-gray-300 sm:text-sm text-[12px] block mb-2 text-left">
                  Project Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <label
                    className={`flex items-center justify-center sm:text-sm text-[12px] px-4 py-2  text-white rounded cursor-pointer ${
                      formData.projectType === "Chat AI"
                        ? "bg-gray-700"
                        : "border border-[#2563EB66]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="projectType"
                      value="Chat AI"
                      checked={formData.projectType === "Chat AI"}
                      onChange={(e) =>
                        handleInputChange("projectType", e.target.value)
                      }
                      className="hidden "
                    />
                    Chat AI
                  </label>
                  <label
                    className={`flex items-center sm:text-sm text-[12px] justify-center px-4 py-2 text-white rounded cursor-pointer ${
                      formData.projectType === "Voice AI"
                        ? "bg-gray-700"
                        : "border border-[#2563EB66] "
                    }`}
                  >
                    <input
                      type="radio"
                      name="projectType"
                      value="Voice AI"
                      checked={formData.projectType === "Voice AI"}
                      onChange={(e) =>
                        handleInputChange("projectType", e.target.value)
                      }
                      className="hidden"
                    />
                    Voice AI
                  </label>
                  <label
                    className={`flex items-center sm:text-sm text-[12px] justify-center px-4 py-2 text-white rounded cursor-pointer ${
                      formData.projectType === "Both AI"
                        ? "bg-gray-700"
                        : "border border-[#2563EB66]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="projectType"
                      value="Both AI"
                      checked={formData.projectType === "Both AI"}
                      onChange={(e) =>
                        handleInputChange("projectType", e.target.value)
                      }
                      className="hidden"
                    />
                    Voice and Chat AI
                  </label>
                </div>
                {errors.projectType && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.projectType}
                  </p>
                )}
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-2 text-left">
                  Project Description
                </label>
                <textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    handleInputChange("additionalInfo", e.target.value)
                  }
                  className="w-full px-3 py-2 border border-[#2563EB66] text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px] resize-none"
                  placeholder="Tell us more about your project..."
                />
                {errors.additionalInfo && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.additionalInfo}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 2 - Timing and Budget */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div>
                <label className="text-gray-300 text-sm block mb-2 text-left">
                  Budget Range ($)
                </label>
                <div className="relative">
                  <select
                    value={formData.budgetRange}
                    className="bg-[#222222] w-full px-3 py-2 border border-[#2563EB66] text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                    onChange={(e) =>
                      handleInputChange("budgetRange", e.target.value)
                    }
                  >
                    <option value="" disabled>
                      Select budget range
                    </option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000-15000">$10,000 - $15,000</option>
                    <option value="15000-20000">$15,000 - $20,000</option>
                    <option value="25000+">$25,000+</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.budgetRange && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.budgetRange}
                  </p>
                )}
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-2 text-left">
                  Timeline (Months)
                </label>
                <div className="relative">
                  <select
                    value={formData.timeline}
                    className="w-full bg-[#222222] px-3 py-2 border border-[#2563EB66] text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                    onChange={(e) =>
                      handleInputChange("timeline", e.target.value)
                    }
                  >
                    <option value="" disabled>
                      Select timeline
                    </option>
                    <option value="1-3 month">1-3 months</option>
                    <option value="3-6 month">3-6 months</option>
                    <option value="6-9 month">6-9 months</option>
                    <option value="12+ month">12+ months</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.timeline && (
                  <p className="text-red-500 text-xs mt-1">{errors.timeline}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 3 - Contact Info */}
          {currentStep === 3 && (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="text-gray-300 text-sm block mb-2 text-left">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="w-full px-3 py-2  border border-[#2563EB66] text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-gray-300 text-sm block mb-2 text-left">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-[#2563EB66] text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-gray-300 text-sm block mb-2 text-left">
                    Address
                  </label>
                  <input
                    id="address"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-[#2563EB66] text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your address"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-300 text-sm block mb-2 text-left">
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) =>
                      handleInputChange("emailAddress", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-[#2563EB66] text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                  {errors.emailAddress && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.emailAddress}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-gray-300 text-sm block mb-2 text-left">
                    Company
                  </label>
                  <input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      handleInputChange("company", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-[#2563EB66] text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your company name"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <div className="bg-[#1C1C1C]">
                <button
                  onClick={handleBack}
                  className="px-4 py-2 sm:w-[215px] rounded  border border-[#2563EB66] text-gray-300  transition-colors"
                >
                  Back
                </button>
              </div>
            )}

            <div className="ml-auto">
              {currentStep < 3 ? (
                <button
                  onClick={handleNext}
                  disabled={
                    (currentStep === 1 &&
                      (!formData.projectType || !formData.additionalInfo)) ||
                    (currentStep === 2 &&
                      (!formData.budgetRange || !formData.timeline))
                  }
                  className={`px-4 py-2 sm:w-[215px] rounded bg-gradient-to-r from-[#2563eb] via-[#2ca2f4] to-[#34e5ff] text-white transition-colors ${
                    (currentStep === 1 &&
                      (!formData.projectType || !formData.additionalInfo)) ||
                    (currentStep === 2 &&
                      (!formData.budgetRange || !formData.timeline))
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={
                    !formData.fullName ||
                    !formData.emailAddress ||
                    !formData.phoneNumber ||
                    !formData.company ||
                    !formData.address
                  }
                  className={`px-4 py-2 sm:w-[215px] rounded bg-gradient-to-r from-[#2563eb] via-[#2ca2f4] to-[#34e5ff] text-white transition-colors ${
                    !formData.fullName ||
                    !formData.emailAddress ||
                    !formData.phoneNumber ||
                    !formData.company ||
                    !formData.address
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {loading ? <Loader /> : "Submit"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
