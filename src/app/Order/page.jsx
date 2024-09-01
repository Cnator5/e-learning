"use client"
import { useState } from 'react';
import Head from 'next/head';

export default function Order() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    chapters: [],
    deadline: '',
    additionalInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChapterToggle = (chapter) => {
    const updatedChapters = formData.chapters.includes(chapter)
      ? formData.chapters.filter((c) => c !== chapter)
      : [...formData.chapters, chapter];
    setFormData({ ...formData, chapters: updatedChapters });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Order submitted successfully');
        setStep(4); // Move to confirmation step
      } else {
        console.error('Failed to submit order');
        // Handle error (e.g., show error message to user)
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-300">Step 1: Personal Information</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={() => setStep(2)}
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-md transition duration-300"
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-300">Step 2: Project Details</h2>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              required
              className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Project Type</option>
              <option value="thesis">Thesis</option>
              <option value="dissertation">Dissertation</option>
              <option value="research-paper">Research Paper</option>
            </select>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-indigo-200">Select Chapters:</h3>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5].map((chapter) => (
                  <label key={chapter} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.chapters.includes(chapter)}
                      onChange={() => handleChapterToggle(chapter)}
                      className="form-checkbox text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <span>Chapter {chapter}</span>
                  </label>
                ))}
              </div>
            </div>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleInputChange}
              required
              className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex space-x-2">
              <button
                onClick={() => setStep(1)}
                className="w-1/2 py-2 px-4 bg-gray-600 hover:bg-gray-700 rounded-md transition duration-300"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="w-1/2 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-md transition duration-300"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-indigo-300">Step 3: Additional Information</h2>
            <textarea
              name="additionalInfo"
              placeholder="Any additional details or requirements?"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows="5"
              className="w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <div className="flex space-x-2">
              <button
                onClick={() => setStep(2)}
                className="w-1/2 py-2 px-4 bg-gray-600 hover:bg-gray-700 rounded-md transition duration-300"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="w-1/2 py-2 px-4 bg-green-600 hover:bg-green-700 rounded-md transition duration-300"
              >
                Submit Order
              </button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-400">Thank You!</h2>
            <p className="text-lg">Your order has been submitted successfully.</p>
            <p className="text-lg">We'll get back to you soon with further details.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white mt-10">
      <Head>
        <title>Order Your Project</title>
        <meta name="description" content="Order your project writing services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Order Your Project
        </h1>
        <div className="max-w-md mx-auto bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-6">
          {renderStep()}
        </div>
      </main>
      

      <footer className="text-center py-4 border-t border-gray-700">
        <p>&copy; 2024 CnatorResearch Project Writing Service. All rights reserved.</p>
      </footer>
    </div>
  );
}