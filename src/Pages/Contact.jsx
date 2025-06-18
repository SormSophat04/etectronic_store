import React from 'react'

function Contact() {
  return (
      <div className="w-full h-[150vh] md:h-[60vh] ">
        <div className="container h-full px-4 lg:px-30 mx-auto items-center flex flex-wrap gap-2">
          <div className=" min-h-screen w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center mb-12" data-aos="zoom-in-down" data-aos-duration="2000">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Get in Touch</h1>
                <p className="mt-4 text-lg text-gray-600">We'd love to hear from you. Please fill out the form below or use the contact details provided.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-gray-100 p-8 rounded-xl" data-aos="fade-up" data-aos-duration="1000">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-indigo-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600"><a href="mailto:info@example.com" className="hover:text-indigo-700">sophat@gmail.com</a></p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-indigo-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-600"><a href="tel:+1234567890" className="hover:text-indigo-700">+855-567-890</a></p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-indigo-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                        <p className="text-gray-600">3 Street, Phnom Penh, Cambodia</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-500 hover:text-indigo-600">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-indigo-600">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm-2-7h4v-2h-4v2zm0 4h4v-2h-4v2z" clipRule="evenodd" /></svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-indigo-600">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-8 rounded-xl" data-aos="fade-up" data-aos-duration="2000">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                  <form action="#" method="POST">
                    <div className="grid grid-cols-1 gap-y-6">
                      <div>
                        <label htmlFor="full-name" className="sr-only">Full name</label>
                        <input type="text" name="full-name" id="full-name" autoComplete="name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Full name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Email" />
                      </div>
                      <div>
                        <label htmlFor="subject" className="sr-only">Subject</label>
                        <input type="text" name="subject" id="subject" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="Subject" />
                      </div>
                      <div>
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea id="message" name="message" rows="4" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md" placeholder="Message"></textarea>
                      </div>
                      <div>
                        <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact
