import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import Image from 'next/image'
import { Title } from '@/components/Shared/Title/title'

const EmergencyResponse = () => {
  return (
    <ClientLayout>
      <Head>
        <title>Emergency Response | ForAfrika</title>
        <meta name="description" content="ForAfrika's emergency response programs across Africa - rapid humanitarian assistance during crises." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Emergency Response" 
              padding="py-20" 
              paragraph="Rapid humanitarian assistance when crises strike."
            />
          </div>
        </div>

        <div className="w-full max-w-5xl h-[500px] lg:max-w-6xl px-3 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <Image
            src="https://www.forafrika.org/wp-content/uploads/2022/04/ForAfrika-Food-Security.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt="Emergency response in Africa"
          />
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="space-y-8">
            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Our Emergency Response</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                When disaster strikes, ForAfrika is there. We provide rapid humanitarian assistance during droughts, floods, conflicts, and other crises that threaten African communities. Our quick response saves lives and helps communities recover.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">What We Do</h3>
              <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• Emergency food distribution</li>
                <li>• Clean water and sanitation</li>
                <li>• Temporary shelter</li>
                <li>• Medical assistance</li>
                <li>• Psychosocial support</li>
                <li>• Recovery and reconstruction</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Where We Work</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our emergency response teams are positioned across Africa, ready to deploy quickly when needed. We have operations in Mozambique, Kenya, Ethiopia, South Sudan, and other countries prone to humanitarian crises.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default EmergencyResponse
