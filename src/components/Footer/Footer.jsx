import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Why Choose Us?</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md">
          <h4 className="text-3xl font-bold text-indigo-600 mb-1">5000+</h4>
          <p className="text-gray-600">Project Materials</p>
        </div>
        <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md">
          <h4 className="text-3xl font-bold text-indigo-600 mb-1">1000+</h4>
          <p className="text-gray-600">Satisfied Clients</p>
        </div>
        <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md">
          <h4 className="text-3xl font-bold text-indigo-600 mb-1">90+</h4>
          <p className="text-gray-600">Data Analysts</p>
        </div>
        <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md">
          <h4 className="text-3xl font-bold text-indigo-600 mb-1">250+</h4>
          <p className="text-gray-600">Researchers</p>
        </div>
      </div>
    </div>
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Get Started</h3>
      <p className="text-gray-400">Check out our comprehensive offers and let us handle the heavy lifting. Our team of experts is ready to bring your academic dreams to life.</p>
      <a href="#" className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors duration-300">View Our Offers</a>
    </div>
    <div className="space-y-6">
      <h3 className="text-2xl font-bold">Get in Touch</h3>
      <form className="space-y-4">
        <div>
          <input type="text" className="bg-gray-800 text-white w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Name" />
        </div>
        <div>
          <input type="email" className="bg-gray-800 text-white w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email" />
        </div>
        <div>
          <textarea className="bg-gray-800 text-white w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="3" placeholder="Message"></textarea>
        </div>
        <button type="submit" className="bg-indigo-600 text-white font-medium py-2 px-6 rounded-full hover:bg-indigo-700 transition-colors duration-300">
          Submit
        </button>
      </form>
    </div>
  </div>
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
      <div>
        <h4 className="text-lg font-bold mb-4">About Us</h4>
        <p className="text-gray-400 mb-4">We are a team of passionate academics dedicated to helping students and professionals achieve their goals.</p>
        <a href="#" className="text-indigo-400 hover:text-indigo-600 font-medium">Learn More</a>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Services</h4>
        <ul className="text-gray-400 space-y-2">
          <li><a href="#" className="hover:text-indigo-400">Project Writing</a></li>
          <li><a href="#" className="hover:text-indigo-400">Thesis Assistance</a></li>
          <li><a href="#" className="hover:text-indigo-400">Research Support</a></li>
          <li><a href="#" className="hover:text-indigo-400">Academic Consulting</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Contact</h4>
        <ul className="text-gray-400 space-y-2">
          <li>Email: <a href="cnator:info@gmail.com" className="hover:text-indigo-400">info@example.com</a></li>
          <li>Phone: <a href="tel:+237 681 326 315" className="hover:text-indigo-400">+1 (234) 567-890</a></li>
          <li>Address: 237 Bonamoussadi, Douala Cameroon</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-indigo-400">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.026 13.138c.923-.747 1.476-1.848 1.476-3.138 0-2.209-1.791-4-4-4h-8v16h8c2.209 0 4-1.791 4-4 0-1.348-.667-2.54-1.688-3.262a3.974 3.974 0 0 0 1.212-2.6z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-indigo-400">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.594 6.208l-3.75 3.75c-.172.166-.413.23-.635.196a.768.768 0 01-.432-.196L8.766 8.028a.643.643 0 010-.91.643.643 0 01.909 0l4.68 4.679 3.561-3.561a.643.643 0 01.91 0 .644.644 0 010 .91v.062z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-gray-400 text-sm">
      &copy; 2024 CnatorialprojectLtd Company. All rights reserved.
    </div>
  </div>
</footer>
  )
}

export default Footer