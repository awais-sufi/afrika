import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import Image from 'next/image'
import { Title } from '@/components/Shared/Title/title'

const FoodScarcityAndLivelihoods = () => {
  return (
    <ClientLayout>
      <Head>
        <title>Food Scarcity and Livelihoods | ForAfrika</title>
        <meta name="description" content="ForAfrika's food security and livelihoods programs - sustainable solutions to end hunger." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Food Scarcity and Livelihoods" 
              padding="py-20" 
              paragraph="Sustainable solutions to end hunger and build resilient communities."
            />
          </div>
        </div>

        <div className="w-full max-w-5xl h-[500px] lg:max-w-6xl px-3 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <Image
            src="https://www.forafrika.org/wp-content/uploads/2022/08/Afrika-Thrive.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt="Food security programs"
          />
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="space-y-8">
            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Our Approach to Food Security</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in sustainable food security, not just emergency feeding. Our programs help communities become self-sufficient through sustainable agriculture, livelihood training, and market access.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Our Programs</h3>
              <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• Sustainable agriculture training</li>
                <li>• Crop diversification</li>
                <li>• Livestock programs</li>
                <li>• Fishing community support</li>
                <li>• Market access and entrepreneurship</li>
                <li>• Food processing and storage</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Building Resilient Communities</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond providing food, we help communities develop the skills and resources they need to feed themselves long-term. This includes climate-smart agriculture, water management, and income-generating activities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default FoodScarcityAndLivelihoods
