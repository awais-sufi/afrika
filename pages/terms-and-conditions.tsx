import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import { Title } from '@/components/Shared/Title/title'

const TermsAndConditions = () => {
  return (
    <ClientLayout>
      <Head>
        <title>Terms and Conditions | ForAfrika</title>
        <meta name="description" content="ForAfrika terms and conditions." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Terms and Conditions" 
              padding="py-20" 
              paragraph="Please Read Carefully"
            />
          </div>
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Last updated: January 2024
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">1. Acceptance of Terms</h3>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">2. Use License</h3>
              <p className="text-gray-700 leading-relaxed">
                Permission is granted to temporarily use this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">3. Disclaimer</h3>
              <p className="text-gray-700 leading-relaxed">
                The materials on this website are provided on an 'as is' basis. ForAfrika makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">4. Limitations</h3>
              <p className="text-gray-700 leading-relaxed">
                In no event shall ForAfrika or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">5. Donations</h3>
              <p className="text-gray-700 leading-relaxed">
                All donations are voluntary and non-refundable unless required by law. Donations are used at ForAfrika's discretion to further its mission.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">6. Privacy Policy</h3>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your visit to our website.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">7. Governing Law</h3>
              <p className="text-gray-700 leading-relaxed">
                Any claim related to this website shall be governed by the laws of South Africa without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#262533] mb-3">8. Contact Information</h3>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at legal@forafrika.org.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default TermsAndConditions