"use client";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import axios from "axios";
import BorderGradientButton from "../common/BorderGradientButton";
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

const GetAQuote = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
      const response = await axios.post(queotEndpoint, formattedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Success:", response.data);
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-start justify-start p-4">
      <div className="w-full max-w-2xl bg-gray-900 border border-gray-700 rounded-lg">
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-white text-lg font-medium mb-4">
              Let's Build Your AI Solution
            </h1>
            <div className="flex space-x-1 mb-6">
              <button
                className={`px-3 py-1.5 text-sm rounded ${
                  currentStep === 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
                onClick={() => setCurrentStep(1)}
              >
                Project Details
              </button>
              <button
                className={`px-3 py-1.5 text-sm rounded ${
                  currentStep === 2
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
                onClick={() => setCurrentStep(2)}
                disabled={currentStep < 2}
              >
                Timeline & Budget
              </button>
              <button
                className={`px-3 py-1.5 text-sm rounded ${
                  currentStep === 3
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300"
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
                    className={`flex items-center justify-center px-4 py-2 border border-gray-600 text-white rounded cursor-pointer ${
                      formData.projectType === "chat-ai"
                        ? "bg-blue-600"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="projectType"
                      value="chat-ai"
                      checked={formData.projectType === "chat-ai"}
                      onChange={(e) =>
                        handleInputChange("projectType", e.target.value)
                      }
                      className="hidden"
                    />
                    Chat AI
                  </label>
                  <label
                    className={`flex items-center justify-center px-4 py-2 border border-gray-600 text-white rounded cursor-pointer ${
                      formData.projectType === "voice-ai"
                        ? "bg-blue-600"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="projectType"
                      value="voice-ai"
                      checked={formData.projectType === "voice-ai"}
                      onChange={(e) =>
                        handleInputChange("projectType", e.target.value)
                      }
                      className="hidden"
                    />
                    Voice AI
                  </label>
                  <label
                    className={`flex items-center justify-center px-4 py-2 border border-gray-600 text-white rounded cursor-pointer ${
                      formData.projectType === "voice-chat-ai"
                        ? "bg-blue-600"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="projectType"
                      value="voice-chat-ai"
                      checked={formData.projectType === "voice-chat-ai"}
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
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px] resize-none"
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
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
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
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
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
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="px-4 py-2 rounded bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back
              </button>
            )}

            <div className="ml-auto">
              {currentStep < 3 ? (
                <BorderGradientButton
                  onClick={handleNext}
                  className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                text="Next"
                >
                  {/* Next */}
                </BorderGradientButton>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  Submit
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
