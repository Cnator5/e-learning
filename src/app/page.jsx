"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import FeaturedProjects from './../components/FeaturedProjects';
import Link from 'next/link';
import { motion } from 'framer-motion';




// Home Component (default export)
export default function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Empowering Student Research';

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600">
        <main className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                ResearchGuru
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
              <p className="text-lg mb-8">
                Dive into a world of knowledge and innovation. Create, collaborate, and showcase your research projects with ease.
              </p>
              <div className="space-x-4">
              <Link href="/Departments"
                   target="_blank"
                   rel="noopener noreferrer">
        <motion.button 
          className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-xl hover:bg-purple-100 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
            Start Your Project
        </motion.button>
      </Link>
                <Link href="/Projects">
        <motion.button 
          className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full text-xl hover:bg-purple-100 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Projects
        </motion.button>
      </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-80 md:h-96">
                <Image
                  src="/research-illustration.svg"
                  alt="Student Research Illustration"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Featured Projects section */}
      <FeaturedProjects />
<div className="bg-gray-50 py-16">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        RESEARCH SERVICES USING SPSS, PYTHON, STATA, R, MATLAB, AND MORE
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Our research services offer comprehensive data analysis using a variety of powerful tools such as SPSS, Python, Stata, R, MATLAB, and others. We provide in-depth statistical analysis, data visualization, and modeling to support your research projects.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Utilize Our Expertise</h2>
        <p className="text-gray-600">
          Utilize our expertise to track and analyze data across your research enterprise. Link datasets, perform advanced statistical analysis, and extract valuable insights using tools like SPSS, Python, Stata, R, MATLAB, and more.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Deliver High-Quality Results</h2>
        <p className="text-gray-600">
          Deliver high-quality research results efficiently and effectively. Our team of experts can accelerate data processing, eliminate manual tasks, and provide detailed reports for informed decision-making in your research projects.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Enhance Your Research Capabilities</h2>
        <p className="text-gray-600">
          Enhance your research capabilities with our services. We can help you streamline data analysis processes, optimize research workflows, and leverage the power of statistical software such as SPSS, Python, Stata, R, MATLAB, and others.
        </p>
      </div>
    </div>
    <div className="mt-8 text-center">
      <p className="text-gray-600">
        Take advantage of our research services to expedite your data analysis tasks, improve research outcomes, and benefit from the expertise of our team in using SPSS, Python, Stata, R, MATLAB, and other advanced tools.
      </p>
    </div>
  </div>
</div>

<div className="bg-white py-16">
  <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8">
      <h1 className="text-2xl font-bold text-gray-900">OUR PROMISES TO YOU</h1>
      <h2 className="text-xl font-bold text-yellow-500">OUR GUARANTEES</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex flex-col items-center">
        <svg className="h-8 w-8 text-gray-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.707 1.707 1 1 0 001.414 0L12 8.414l.293.293a1 1 0 001.414-1.414L12 5.586l-.707-.707z" clipRule="evenodd"></path>
        </svg>
        <h3 className="text-lg font-medium text-gray-900 mb-2">100% confidentiality</h3>
        <p className="text-gray-600 text-sm">Your information is safe with us.</p>
      </div>
      <div className="flex flex-col items-center">
        <svg className="h-8 w-8 text-gray-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
        </svg>
        <h3 className="text-lg font-medium text-gray-900 mb-2">100% plagiarism free</h3>
        <p className="text-gray-600 text-sm">Original content guaranteed.</p>
      </div>
      <div className="flex flex-col items-center">
        <svg className="h-8 w-8 text-gray-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.5 2.5a1 1 0 001.414-1.414l-2.5-2.5A1 1 0 0011 6v-2z" clipRule="evenodd"></path>
        </svg>
        <h3 className="text-lg font-medium text-gray-900 mb-2">100% super fast</h3>
        <p className="text-gray-600 text-sm">Quick turnaround time.</p>
      </div>
      <div className="flex flex-col items-center">
        <svg className="h-8 w-8 text-gray-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <h3 className="text-lg font-medium text-gray-900 mb-2">High Quality</h3>
        <p className="text-gray-600 text-sm">Top-notch quality assured.</p>
      </div>
      <div className="flex flex-col items-center">
        <svg className="h-8 w-8 text-gray-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
        </svg>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Standard Research</h3>
        <p className="text-gray-600 text-sm">Thorough research conducted.</p>
      </div>
      <div className="flex flex-col items-center">
        <svg className="h-8 w-8 text-gray-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.5 2.5a1 1 0 001.414-1.414l-2.5-2.5A1 1 0 0011 6v-2z" clipRule="evenodd"></path>
        </svg>
        <h3 className="text-lg font-medium text-gray-900 mb-2">High Time Delivery</h3>
        <p className="text-gray-600 text-sm">Timely delivery guaranteed.</p>
      </div>
      <div className="flex flex-col items-center">
        <svg className="h-8 w-8 text-gray-400 mb-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Excellent grades</h3>
        <p className="text-gray-600 text-sm">Achieve outstanding results.</p>
      </div>
    </div>
  </div>
</div>


<section className="bg-gray-100 py-12 md:py-16">
  <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Services</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <svg className="h-8 w-8 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <h2 className="text-xl font-bold text-gray-800">Topic Development</h2>
        </div>
        <p className="text-sm text-gray-600">Get assistance in choosing and refining your research topics.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <svg className="h-8 w-8 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-xl font-bold text-gray-800">Development Service</h2>
        </div>
        <p className="text-sm text-gray-600">Professional development services to enhance your projects.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <svg className="h-8 w-8 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h2 className="text-xl font-bold text-gray-800">Data Analysis</h2>
        </div>
        <p className="text-sm text-gray-600">Expert data analysis to derive meaningful insights.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <svg className="h-8 w-8 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <h2 className="text-xl font-bold text-gray-800">Academic Writing Service</h2>
        </div>
        <p className="text-sm text-gray-600">Professional academic writing services tailored to your needs.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <svg className="h-8 w-8 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <h2 className="text-xl font-bold text-gray-800">Business Plan</h2>
        </div>
        <p className="text-sm text-gray-600">Customized business plans to help your business grow.</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <svg className="h-8 w-8 text-indigo-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <h2 className="text-xl font-bold text-gray-800">Copy Editing and Proofreading</h2>
        </div>
        <p className="text-sm text-gray-600">Professional editing and proofreading services for your content.</p>
      </div>
    </div>
  </div>
</section>


<section class="p-4 max-w-screen-md mx-auto">
  <div class="text-center mb-6">
    <h1 class="text-3xl font-bold text-gray-800">Why work with CnatorProject?</h1>
  </div>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div class="bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-lg p-6 text-white">
      <h2 class="text-xl font-bold mb-2">Quality</h2>
      <p class="text-sm">We deliver exceptional quality in every project we undertake.</p>
    </div>
    <div class="bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg shadow-lg p-6 text-white">
      <h2 class="text-xl font-bold mb-2">24/7 Customer Support</h2>
      <p class="text-sm">Our dedicated team is available round the clock to assist you.</p>
    </div>
    <div class="bg-gradient-to-r from-green-400 to-lime-500 rounded-lg shadow-lg p-6 text-white">
      <h2 class="text-xl font-bold mb-2">Extraordinary Writers</h2>
      <p class="text-sm">Our team of writers brings creativity and expertise to every project.</p>
    </div>
    <div class="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg shadow-lg p-6 text-white">
      <h2 class="text-xl font-bold mb-2">Custom Content</h2>
      <p class="text-sm">We tailor our content to meet your unique requirements and goals.</p>
    </div>
    <div class="bg-gradient-to-r from-red-400 to-pink-500 rounded-lg shadow-lg p-6 text-white">
      <h2 class="text-xl font-bold mb-2">4+ Years of Experience</h2>
      <p class="text-sm">Benefit from our extensive experience and proven track record.</p>
    </div>
  </div>
</section>

<section class="p-4 max-w-screen-md mx-auto">
  <h1 class="text-3xl font-bold text-center text-gray-800 mb-4">How to choose a good research topic</h1>
  <h6 class="text-center text-sm text-gray-600 mb-6">Tips on Research Topic</h6>
  <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div class="bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg shadow-lg p-6 text-white">
      <h2 class="text-xl font-bold mb-2">Follow Your Passion</h2>
      <p class="text-sm">Choose a topic that genuinely interests and excites you to stay motivated throughout your research.</p>
    </div>
    <div class="bg-gradient-to-r from-red-400 to-pink-500 rounded-lg shadow-lg p-6 text-white">
      <h2 class="text-xl font-bold mb-2">Conduct Preliminary Research</h2>
      <p class="text-sm">Explore existing literature and resources to understand the current landscape and identify gaps for your research.</p>
    </div>
    <div class="bg-gradient-to-r from-green-400 to-lime-500 rounded-lg shadow-lg p-6 text-white">
      <h2 class="text-xl font-bold mb-2">Consider Impact and Relevance</h2>
      <p class="text-sm">Choose a topic that has the potential to make a meaningful contribution to your field of study or society.</p>
    </div>
    <div class="bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-lg p-6 text-white">
      <h2 class="text-xl font-bold mb-2">Seek Feedback and Guidance</h2>
      <p class="text-sm">Discuss your topic ideas with mentors, peers, or professors to gain valuable insights and refine your research focus.</p>
    </div>
  </div>
</section>

<section class="p-4 max-w-screen-md mx-auto">
  <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-4 bg-gray-100 rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800">Pricing Plan</h1>
      <p class="text-lg text-gray-600">Tailored for National and International Students</p>
      <div class="mt-4">
        <h2 class="text-lg font-semibold text-gray-700">Custom Project Details</h2>
        <p class="text-sm text-gray-600">Get a personalized solution for your academic needs.</p>
      </div>
    </div>
  </div>
</section>

<div class="p-4 bg-gray-100 rounded-lg">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <h3 class="text-lg font-semibold text-gray-700">Payment Methods</h3>
      <div class="mt-2 grid grid-cols-2 gap-2">
        <div class="bg-white p-3 rounded-lg shadow-md">MtnMobileMoney</div>
        <div class="bg-white p-3 rounded-lg shadow-md">OrangeMobileMoney</div>
        <div class="bg-white p-3 rounded-lg shadow-md">Bank Transfer</div>
        <div class="bg-white p-3 rounded-lg shadow-md">Credit/Debit Card</div>
        <div class="bg-white p-3 rounded-lg shadow-md">PayPal</div>
        <div class="bg-white p-3 rounded-lg shadow-md">Google Pay</div>
        <div class="bg-white p-3 rounded-lg shadow-md">Apple Pay</div>
        <div class="bg-white p-3 rounded-lg shadow-md">Others</div>
      </div>
    </div>
    <div>
      <h4 class="text-lg font-semibold text-gray-700">Contact for Pricing</h4>
      <p class="text-sm text-gray-600">For detailed pricing information and inquiries, please contact us via email at <span class="text-blue-500">beyoh172@email.com</span> or call us at <span class="text-blue-500">+237681326315</span>.</p>
    </div>
  </div>
</div>

<div class="text-center mb-6">
  <h1 class="text-3xl font-bold text-gray-800">Why Choose Us?</h1>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white shadow-lg p-6 rounded-lg">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-indigo-600 mb-2">5000+</h1>
      <p class="text-gray-600">Project Materials</p>
    </div>
  </div>

  <div class="bg-white shadow-lg p-6 rounded-lg">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-indigo-600 mb-2">1000+</h1>
      <p class="text-gray-600">Satisfied Clients</p>
    </div>
  </div>

  <div class="bg-white shadow-lg p-6 rounded-lg">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-indigo-600 mb-2">90+</h1>
      <p class="text-gray-600">Data Analysts</p>
    </div>
  </div>

  <div class="bg-white shadow-lg p-6 rounded-lg">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-indigo-600 mb-2">250+</h1>
      <p class="text-gray-600">Researchers</p>
    </div>
  </div>

  <div class="bg-white shadow-lg p-6 rounded-lg">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-indigo-600 mb-2">20+</h1>
      <p class="text-gray-600">Departments</p>
    </div>
  </div>
</div>

<div class="w-full bg-indigo-600 py-16">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Get Started on Your Next Project or Thesis</h1>
    <p class="mt-4 text-lg text-indigo-200 md:text-xl">Check out our comprehensive offers and let us handle the heavy lifting. Our team of experts is ready to bring your academic dreams to life.</p>
    <div class="mt-8">
      <a href="#" class="inline-block px-8 py-3 bg-white text-indigo-600 font-medium rounded-full hover:bg-indigo-700 hover:text-white transition-colors duration-300">
        View Our Offers
      </a>
    </div>
  </div>
</div>

<div class="bg-gray-100 py-12">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name">Name</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="message">Message</label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="3" placeholder="Enter your message"></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Submit
        </button>
      </div>
    </form>
    <p class="text-gray-600 text-sm">
      For any specific inquiries or to discuss further, please reach out to us at <a href="mailto:your@email.com" class="text-indigo-500 hover:text-indigo-700">beyoh172@email.com</a>.
    </p>
  </div>
</div>

</div>
  );
};