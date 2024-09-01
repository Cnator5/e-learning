import React from 'react';

const Hire = () => {
  return (
    <div class="max-w-4xl mx-auto p-8">
    <h1 class="text-4xl font-bold text-center mb-6">Hire a Writer</h1>
    <p class="text-lg text-gray-700 mb-6 text-center">Looking for professional writing services? You have come to the right place! Our experienced writers are here to help you with all your writing needs.</p>
  
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 class="text-2xl font-semibold mb-4">Get Started</h2>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" required />
      </div>
      
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" required />
      </div>
  
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">Service Needed</label>
        <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="service" required>
          <option value="">Select a service</option>
          <option value="academic">Academic Writing</option>
          <option value="business">Business Writing</option>
          <option value="creative">Creative Writing</option>
          <option value="technical">Technical Writing</option>
        </select>
      </div>
  
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">Project Details</label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="details" placeholder="Describe your project" rows="4" required></textarea>
      </div>
  
      <div class="flex items-center justify-between">
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </div>
    </form>
  
    <h2 class="text-2xl font-semibold mb-4">Why Choose Us?</h2>
    <ul class="list-disc list-inside mb-6">
      <li class="text-gray-700">Experienced writers with expertise in various fields.</li>
      <li class="text-gray-700">100% original and plagiarism-free content.</li>
      <li class="text-gray-700">Timely delivery and excellent customer support.</li>
      <li class="text-gray-700">Affordable prices tailored to your needs.</li>
    </ul>
  
    <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
    <p class="text-gray-700 mb-2">Have questions? Reach out to our support team:</p>
    <p class="text-gray-700">Email: support@researchcnate.pro</p>
    <p class="text-gray-700">Phone: (237) 681 326 315</p>
  </div>
  );
};

export default Hire;    