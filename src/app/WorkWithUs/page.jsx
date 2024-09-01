"use client";

import { useState } from 'react'

export default function WorkWithUs() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabContent = {
    overview: {
      title: "Join Our Innovation Journey",
      content: "At ResearchGuru, we're not just a company; we're a community of innovators, dreamers, and problem-solvers. Our mission is to revolutionize the research industry through cutting-edge technology and human ingenuity."
    },
    culture: {
      title: "Our Culture: Where Creativity Meets Excellence",
      content: "We foster an environment where ideas flourish, collaboration thrives, and personal growth is a daily occurrence. Our culture is built on four pillars: Innovation, Integrity, Inclusivity, and Impact."
    },
    benefits: {
      title: "Beyond the Paycheck: Why ResearchGuru?",
      content: "We offer more than competitive salaries. Our benefits package includes flexible working hours, remote work options, continuous learning opportunities, health and wellness programs, and an innovative 'Research Sabbatical'."
    },
    positions: {
      title: "Open Positions: Your Next Big Opportunity",
      content: "We're always on the lookout for exceptional talent across various domains. Whether you're a data scientist, a UX designer, a machine learning engineer, or a research specialist, there might be a perfect role waiting for you."
    },
    apply: {
      title: "Ready to Make an Impact?",
      content: "If you're passionate about pushing the boundaries of research and technology, we want to hear from you. Even if you don't see a perfect match in our current openings, reach out to us."
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Work With Us</h1>

      <nav className="flex justify-center mb-8">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 mx-2 font-semibold ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      <section className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">{tabContent[activeTab].title}</h2>
        <p className="text-gray-700">{tabContent[activeTab].content}</p>
      </section>

      {activeTab === 'positions' && (
        <div className="mt-8 max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Current Openings</h3>
          <ul className="space-y-2">
            {['Senior Data Scientist', 'UX/UI Designer', 'Full Stack Developer', 'Research Specialist - AI Ethics', 'Product Manager'].map((job, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded">{job}</li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'apply' && (
        <form className="mt-8 max-w-xl mx-auto">
          <div className="space-y-4">
            <input type="text" placeholder="Your Name" required className="w-full p-2 border border-gray-300 rounded" />
            <input type="email" placeholder="Your Email" required className="w-full p-2 border border-gray-300 rounded" />
            <textarea placeholder="Tell us about yourself and why you'd be a great fit for ResearchGuru" required className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Submit Application</button>
          </div>
        </form>
      )}
    </div>
  )
}