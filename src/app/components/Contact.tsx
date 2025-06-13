"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const GSCRIPT_URL = process.env.NEXT_PUBLIC_SCRIPT_URL || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Handling toasts ...
  useEffect(() => {
    if (!showToast) return;
    const timer = setTimeout(() => {
      setShowToast(false);
      setSubmitStatus("");
      setToastMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  }, [showToast]);

  const showSuccessToast = (message: string) => {
    setSubmitStatus("success");
    setToastMessage(message);
    setShowToast(true);
  };

  const showErrorToast = (
    message = "Something went wrong! Please try again later."
  ) => {
    setSubmitStatus("error");
    setToastMessage(message);
    setShowToast(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formParams = new URLSearchParams();
      formParams.append("name", formData.name);
      formParams.append("email", formData.email);
      formParams.append("subject", formData.subject);
      formParams.append("message", formData.message);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const res = await fetch(GSCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formParams.toString(),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const data = await res.json();

      if (data.status === "success") {
        showSuccessToast(data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("❌ Error : ", data.message);
        showErrorToast(data.message);
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        console.warn("⚠️ Request timed out!");
        showErrorToast("Something went wrong! Please try again later.");
      } else {
        console.error("❌ Network/Server Error : ", error);
        showErrorToast("Something went wrong! Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toasts */}
      {showToast && (
        <div
          className={`fixed top-4 right-4 z-50 max-w-sm w-full bg-white rounded-lg shadow-lg border-l-4 transform transition-all duration-300 ${
            submitStatus === "success" ? "border-green-500" : "border-red-500"
          }`}
        >
          <div className="p-4 flex items-start">
            <div className="flex-shrink-0">
              {submitStatus === "success" ? (
                <svg
                  className="h-5 w-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <div className="ml-3 w-0 flex-1">
              <p
                className={`text-sm font-medium ${
                  submitStatus === "success" ? "text-green-800" : "text-red-800"
                }`}
              >
                {submitStatus === "success"
                  ? "Message Sent!"
                  : "Error Occurred."}
              </p>
              <p
                className={`mt-1 text-sm ${
                  submitStatus === "success" ? "text-green-700" : "text-red-700"
                }`}
              >
                {toastMessage}
              </p>
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                className={`rounded-md inline-flex ${
                  submitStatus === "success"
                    ? "text-green-400 hover:text-green-500"
                    : "text-red-400 hover:text-red-500"
                } focus:outline-none`}
                onClick={() => {
                  setShowToast(false);
                  setSubmitStatus("");
                }}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <section id="contact" className="pt-30 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
              Let&apos;s Work Together
            </h2>
            <div className="w-20 h-px bg-gray-300 mx-auto mb-6"></div>
            <p className="md:text-lg text-sm text-gray-600 max-w-2xl mx-auto">
              Have a project or idea in mind?
              <br />
              Fill out the form below, and I&apos;ll get back to you!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white py-4 px-8 rounded-xl shadow-md"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all duration-200"
                placeholder="Your name..."
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all duration-200"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all duration-200"
                placeholder="What is it about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all duration-200 resize-none"
                placeholder="Tell me more about your project or idea..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer w-full px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
