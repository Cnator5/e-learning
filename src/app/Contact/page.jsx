import React from 'react';
const Contact = () => {
    return (
        <div class="max-w-4xl mx-auto p-8">
  <h1 class="text-4xl font-bold text-center mb-6">Contact Us</h1>
  <p class="text-lg text-gray-700 text-center mb-8">We are here to assist you! Whether you have questions, need assistance, or want to know more about our services, feel free to reach out to us.</p>

  <section class="mb-12">
    <h2 class="text-3xl font-semibold mb-4">Get in Touch</h2>
    <p class="text-gray-700 mb-4">You can contact us through the following methods:</p>
    <ul class="list-disc list-inside mb-6">
      <li class="text-gray-700">Email: <a href="mailto:support@researchguru.pro" class="text-blue-500 hover:underline">support@researchguru.pro</a></li>
      <li class="text-gray-700">Phone: <a href="tel:+1234567890" class="text-blue-500 hover:underline">(123) 456-7890</a></li>
      <li class="text-gray-700">Live Chat: Available on our website from 9 AM to 9 PM EST.</li>
    </ul>
  </section>

  <section class="mb-12">
    <h2 class="text-3xl font-semibold mb-4">Contact Form</h2>
    <p class="text-gray-700 mb-4">Fill out the form below, and we will get back to you as soon as possible!</p>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" required />
      </div>
      
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email" required />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message" rows="4" required></textarea>
      </div>

      <div class="flex items-center justify-between">
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Send Message
        </button>
      </div>
    </form>
  </section>

  <section>
    <h2 class="text-3xl font-semibold mb-4">Our Location</h2>
    <p class="text-gray-700 mb-4">Feel free to visit us in person at our office:</p>
    <p class="text-gray-700">123 Writing Lane, Suite 456<br/>City, State, ZIP Code</p>
    <p class="text-gray-700 mb-4">Our office hours are Monday to Friday, 9 AM to 5 PM EST.</p>
  </section>

  <section>
    <h2 class="text-3xl font-semibold mb-4">Follow Us</h2>
    <p class="text-gray-700 mb-4">Stay connected with us on social media for updates and tips:</p>
    <ul class="flex space-x-4">
      <li><a href="#" class="text-blue-500 hover:underline">Facebook</a></li>
      <li><a href="#" class="text-blue-500 hover:underline">Twitter</a></li>
      <li><a href="#" class="text-blue-500 hover:underline">LinkedIn</a></li>
      <li><a href="#" class="text-blue-500 hover:underline">Instagram</a></li>
    </ul>
  </section>
</div>
);
};

export default Contact;