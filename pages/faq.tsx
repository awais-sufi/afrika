import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import { Title } from '@/components/Shared/Title/title'
import { useState } from 'react'

const FAQ = () => {
  const faqs = [
    {
      question: "What is ForAfrika?",
      answer: "ForAfrika is a non-profit organization dedicated to empowering Africans to sustainably provide for themselves through innovative humanitarian solutions, community engagement, and sustainable development programs."
    },
    {
      question: "Where does ForAfrika work?",
      answer: "ForAfrika works across multiple African countries including Mozambique, Kenya, Ethiopia, South Sudan, and other nations where humanitarian support is needed."
    },
    {
      question: "How can I donate to ForAfrika?",
      answer: "You can donate through our website by clicking the 'Donate' button. We accept various payment methods including credit cards, PayPal, and bank transfers."
    },
    {
      question: "How can I volunteer with ForAfrika?",
      answer: "We welcome volunteers who want to make a difference. Please visit our Careers page to see current volunteer opportunities, or contact us at info@forafrika.org to learn more."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, ForAfrika is a registered non-profit organization. All donations are tax-deductible to the extent allowed by law. You will receive a receipt for your records."
    },
    {
      question: "How does ForAfrika ensure my donation is used properly?",
      answer: "We are committed to transparency. We publish annual reports and financial statements showing how donations are used. Our programs are monitored and evaluated regularly to ensure maximum impact."
    },
    {
      question: "Can I visit ForAfrika projects?",
      answer: "We occasionally organize trips for major donors and partners. Contact us at info@forafrika.org to express your interest."
    },
    {
      question: "How can I partner with ForAfrika?",
      answer: "We welcome partnerships with corporations, foundations, and other organizations. Contact our partnerships team at partners@forafrika.org to discuss opportunities."
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <ClientLayout>
      <Head>
        <title>FAQs | ForAfrika</title>
        <meta name="description" content="Frequently asked questions about ForAfrika and our work." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="FAQs" 
              padding="py-20" 
              paragraph="Frequently Asked Questions"
            />
          </div>
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-[#262533]">{faq.question}</span>
                  <span className="text-[#262533] text-xl ml-4">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default FAQ