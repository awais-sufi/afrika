import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import { Title } from '@/components/Shared/Title/title'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <ClientLayout>
      <Head>
        <title>Contact Us | ForAfrika</title>
        <meta name="description" content="Get in touch with ForAfrika - we'd love to hear from you." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Contact Us" 
              padding="py-20" 
              paragraph="We'd love to hear from you."
            />
          </div>
        </div>

        <div className="w-full max-w-5xl lg:max-w-6xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#262533] mb-6">Get in Touch</h3>
              <p className="text-lg text-gray-700 mb-8">
                Have questions about our work? Want to partner with us? Or maybe you need emergency assistance? We're here to help.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#262533] mb-2">Email</h4>
                  <a href="mailto:info@forafrika.org" className="text-[#262533] hover:underline">info@forafrika.org</a>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#262533] mb-2">Phone</h4>
                  <a href="tel:+1234567890" className="text-[#262533] hover:underline">+1 (234) 567-890</a>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#262533] mb-2">Address</h4>
                  <p className="text-gray-700">
                    123 Hope Street<br />
                    Johannesburg<br />
                    South Africa
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#262533] mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#262533] focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#262533] focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#262533] focus:border-transparent"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#262533] focus:border-transparent"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#262533] text-white py-3 px-6 rounded-lg hover:bg-[#262533]/90 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default Contact
