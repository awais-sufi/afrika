import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import { Title } from '@/components/Shared/Title/title'
import { useState } from 'react'

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Support request:', formData)
  }

  return (
    <ClientLayout>
      <Head>
        <title>Support | ForAfrika</title>
        <meta name="description" content="Get support from ForAfrika." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Support" 
              padding="py-20" 
              paragraph="We're Here to Help"
            />
          </div>
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#262533] mb-3">Email Support</h3>
              <p className="text-gray-700 mb-4">For general inquiries and program questions.</p>
              <a href="mailto:support@forafrika.org" className="text-[#262533] hover:underline">support@forafrika.org</a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#262533] mb-3">Technical Support</h3>
              <p className="text-gray-700 mb-4">For website and system issues.</p>
              <a href="mailto:it@forafrika.org" className="text-[#262533] hover:underline">it@forafrika.org</a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#262533] mb-3">Donor Support</h3>
              <p className="text-gray-700 mb-4">For donation-related questions.</p>
              <a href="mailto:donors@forafrika.org" className="text-[#262533] hover:underline">donors@forafrika.org</a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#262533] mb-3">Media Inquiries</h3>
              <p className="text-gray-700 mb-4">For press and media questions.</p>
              <a href="mailto:media@forafrika.org" className="text-[#262533] hover:underline">media@forafrika.org</a>
            </div>
          </div>
        </div>

        <div className="w-full max-w-2xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
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
      </section>
    </ClientLayout>
  )
}

export default Support