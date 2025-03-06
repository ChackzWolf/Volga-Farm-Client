import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-3 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions or want to schedule a visit? Get in touch with us!
            </p>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">Farm Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-green-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Address</p>
                      <a href="https://www.google.com/maps/dir//Othera-+Puthencavu+Road+Edanadu,+Bridge,+Puthencavu,+Kerala+689123/@9.328749,76.5509879,26181m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3b0623aa522ed2e9:0x1584c42e7ea89dac!2m2!1d76.6333888!2d9.3287585?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D"
                         className="text-gray-600 hover:underline"
                      >
                        Othera- Puthencavu Road Edanadu, Bridge, Puthencavu, Kerala 689123
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-green-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">(+91) 9447479452</p>
                      <p className="text-gray-600">(+91) 7907563038</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-green-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">jacksoncheriyan05@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-green-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Hours</p>
                      <p className="text-gray-600">Weekdays: 7am - 11pm</p>
                      {/* <p className="text-gray-600">Weekends: 10am - 4pm</p> */}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-gray-800 mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-green-600 hover:text-green-800">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-green-600 hover:text-green-800">
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-green-600 hover:text-green-800">
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-700 mb-4">Send Us a Message</h3>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="subject"
                  >
                    <option>General Inquiry</option>
                    <option>Plant Purchase</option>
                    <option>Aquaponics Consultation</option>
                    <option>Product Pre-Order</option>
                    <option>Farm Visit</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    rows="1"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="button"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}