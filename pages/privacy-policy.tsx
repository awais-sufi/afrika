import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import { Title } from '@/components/Shared/Title/title'

const PrivacyPolicy = () => {
  return (
    <ClientLayout>
      <Head>
        <title>Privacy Policy | ForAfrika</title>
        <meta name="description" content="ForAfrika privacy policy." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Privacy Policy" 
              padding="py-20" 
              paragraph="Your Privacy Matters"
            />
          </div>
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Last updated: January 2024
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">1. Information We Collect</h3>
              <p className="text-gray-700 leading-relaxed">
                We collect information you provide directly to us, such as when you make a donation, sign up for our newsletter, or contact us. This may include your name, email address, phone number, and payment information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">2. How We Use Information</h3>
              <p className="text-gray-700 leading-relaxed">
                We use the information we collect to process donations, communicate with you about our programs, send you updates, and improve our website and services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">3. Information Sharing</h3>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share information with service providers who assist us in operating our website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">4. Data Security</h3>
              <p className="text-gray-700 leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">5. Cookies</h3>
              <p className="text-gray-700 leading-relaxed">
                We use cookies to enhance your experience. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">6. Third Party Links</h3>
              <p className="text-gray-700 leading-relaxed">
                Occasionally, we may include third party products or services on our website. These third party sites have separate and independent privacy policies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">7. Children's Privacy</h3>
              <p className="text-gray-700 leading-relaxed">
                We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">8. Changes to Privacy Policy</h3>
              <p className="text-gray-700 leading-relaxed">
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">9. Contact Us</h3>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this privacy policy, please contact us at privacy@forafrika.org.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default PrivacyPolicy