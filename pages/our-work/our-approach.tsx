import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import Image from 'next/image'
import { Title } from '@/components/Shared/Title/title'

const OurApproach = () => {
  return (
    <ClientLayout>
      <Head>
        <title>Our Approach | ForAfrika</title>
        <meta name="description" content="Learn about ForAfrika's approach to working with African communities for lasting change." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Our Approach" 
              padding="py-20" 
              paragraph="How we work with communities for lasting change."
            />
          </div>
        </div>

        <div className="w-full max-w-5xl h-[500px] lg:max-w-6xl px-3 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <Image
            src="https://www.forafrika.org/wp-content/uploads/2022/04/ForAfrika-Food-Security.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt="Our approach"
          />
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="space-y-8">
            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Community-Led Development</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that lasting change comes from within. We work with communities to identify their needs and develop solutions together. Our role is to support, not to lead. Communities own their development journey.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Partnership and Collaboration</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We partner with local organizations, governments, and international agencies to maximize our impact. No single organization can solve Africa's challenges alone. We believe in the power of collaboration.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Sustainability First</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Everything we do is designed for sustainability. We build local capacity, create income-generating activities, and ensure communities can maintain programs long after our direct involvement ends.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Evidence-Based Programming</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We monitor and evaluate our programs rigorously. Data drives our decisions and helps us continuously improve our impact. We're committed to learning and adapting to what works best.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Local Leadership</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We invest in local leadership development. Our staff are mostly from the communities we serve, bringing local knowledge and cultural understanding to every project. We're building the next generation of African leaders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default OurApproach