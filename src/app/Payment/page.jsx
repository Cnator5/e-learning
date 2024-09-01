"use client";

import { useState } from 'react';
import { FaCreditCard, FaPaypal, FaApple, FaGoogle, FaMobileAlt, FaUniversity, FaMoneyBillWave } from 'react-icons/fa';

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [plan, setPlan] = useState('basic');

  const plans = {
    basic: { name: 'Basic', price: 9.99, features: ['10 searches/day', 'Basic analytics', 'Email support'] },
    pro: { name: 'Pro', price: 19.99, features: ['50 searches/day', 'Advanced analytics', 'Priority support'] },
    enterprise: { name: 'Enterprise', price: 49.99, features: ['Unlimited searches', 'Custom analytics', '24/7 dedicated support'] },
  };

  const paymentMethods = [
    { id: 'credit-card', Icon: FaCreditCard, label: 'Credit Card' },
    { id: 'paypal', Icon: FaPaypal, label: 'PayPal' },
    { id: 'apple-pay', Icon: FaApple, label: 'Apple Pay' },
    { id: 'google-pay', Icon: FaGoogle, label: 'Google Pay' },
    { id: 'mtn-money', Icon: FaMobileAlt, label: 'MTN Mobile Money' },
    { id: 'orange-money', Icon: FaMobileAlt, label: 'Orange Mobile Money' },
    { id: 'express-union', Icon: FaMoneyBillWave, label: 'Express Union' },
    { id: 'other-banks', Icon: FaUniversity, label: 'Other Banks' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-20 ">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Secure Payment</h1>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-semibold mb-4">Choose Your Plan</h2>
            <div className="space-y-4">
              {Object.entries(plans).map(([key, value]) => (
                <div 
                  key={key} 
                  className={`p-4 border rounded-lg cursor-pointer transition duration-300 ${plan === key ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                  onClick={() => setPlan(key)}
                >
                  <h3 className="text-lg font-semibold">{value.name} - ${value.price}/month</h3>
                  <ul className="mt-2 text-sm text-gray-600">
                    {value.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 bg-gray-50 p-6">
            <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Select Payment Method</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    className={`p-2 border rounded-lg flex flex-col items-center justify-center transition duration-300 ${paymentMethod === method.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}
                    onClick={() => setPaymentMethod(method.id)}
                  >
                    <method.Icon className="text-2xl mb-1" />
                    <span className="text-xs text-center">{method.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <form className="space-y-4">
              {paymentMethod === 'credit-card' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Card Number</label>
                    <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                      <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="MM/YY" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700">CVV</label>
                      <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="123" />
                    </div>
                  </div>
                </>
              )}
              {['mtn-money', 'orange-money'].includes(paymentMethod) && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input type="tel" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="+237 6XX XXX XXX" />
                </div>
              )}
              {['express-union', 'other-banks'].includes(paymentMethod) && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Account Number</label>
                  <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Enter your account number" />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Billing Address</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="123 Main St, City, Country" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Pay ${plans[plan].price}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
        <p>By completing your purchase you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.</p>
        <p className="mt-2">Need help? Contact our <a href="#" className="text-blue-600 hover:underline">support team</a>.</p>
      </div>
    </div>
  );
}