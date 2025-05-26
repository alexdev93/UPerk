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

const GetAQuote = ({ handleQuoteClose }: { handleQuoteClose : () => void}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false)
  
  const [formData, setFormData] = useState<FormData>({
    projectType: "",
    additionalInfo: "",
    budgetRange: "5000-10000",
    timeline: "1-3 month",
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    company: "",
    address: "",
  });

  useEffect(() => {
    console.log("see the status", status);
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
    }
    setStatus("");
  }, [status]); // Run effect on status or message change

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  console.log("see the formData", formData);

  const handleNext = () => {
    if (currentStep < 3) {
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

    console.log("Formatted Data:", formattedData);

    try {
      setLoading(true)
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
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-start p-4 z-999">
      <div className=" dark:bg-[#222222]  rounded-lg md:w-[750px] lg:w-[970px] w-full">
        <div className="p-6">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-7">
              <h1 className="text-white text-lg text-left font-medium">
                Let&apos;s Build Your AI Solution{" "}
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
            <div className="flex  gap-9 mb-6">
              <button
                className={`px-3 py-1.5 text-sm rounded ${
                  currentStep === 1
                    ? "dark:bg-[#244389] text-white"
                    : "dark:bg-[#1C1C1C] text-gray-300"
                }`}
                onClick={() => setCurrentStep(1)}
              >
                Project Details
              </button>
              <button
                className={`px-3 py-1.5 text-sm rounded ${
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
                className={`px-3 py-1.5 text-sm rounded ${
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
                <label className="text-gray-300 text-sm block mb-2 text-left">
                  Project Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <label
                    className={`flex items-center justify-center px-4 py-2  text-white rounded cursor-pointer ${
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
                      className="hidden"
                    />
                    Chat AI
                  </label>
                  <label
                    className={`flex items-center justify-center px-4 py-2 text-white rounded cursor-pointer ${
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
                    className={`flex items-center justify-center px-4 py-2 text-white rounded cursor-pointer ${
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
              </div>

              <div>
                <label className="text-gray-300 text-sm block mb-2 text-left">
                  Timeline (Months)
                </label>
                <div className="relative">
                  <select
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
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <div className="bg-[#1C1C1C]">
                <button
                  onClick={handleBack}
                  className="px-4 py-2 w-[215px] rounded  border border-[#2563EB66] text-gray-300  transition-colors"
                >
                  Back
                </button>
              </div>
            )}

            <div className="ml-auto">
              {currentStep < 3 ? (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 w-[215px] rounded bg-gradient-to-r from-[#2563eb] via-[#2ca2f4] to-[#34e5ff] text-white transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 w-[215px] rounded bg-gradient-to-r from-[#2563eb] via-[#2ca2f4] to-[#34e5ff] text-white transition-colors"
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
