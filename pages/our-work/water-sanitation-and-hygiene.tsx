import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import Image from 'next/image'
import { Title } from '@/components/Shared/Title/title'

const WaterSanitationAndHygiene = () => {
  return (
    <ClientLayout>
      <Head>
        <title>Water, Sanitation and Hygiene | ForAfrika</title>
        <meta name="description" content="ForAfrika's WASH programs - providing clean water and sanitation infrastructure." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Water, Sanitation and Hygiene" 
              padding="py-20" 
              paragraph="Clean water and proper sanitation for healthy communities."
            />
          </div>
        </div>

        <div className="w-full max-w-5xl h-[500px] lg:max-w-6xl px-3 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <Image
            src="https://www.forafrika.org/wp-content/uploads/2022/12/ForAfrika-Feeding.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt="Water and sanitation programs"
          />
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="space-y-8">
            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Clean Water for All</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Access to clean water is a basic human right, yet millions of Africans lack this essential resource. We work to provide sustainable water solutions that communities can maintain long-term.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Our WASH Programs</h3>
              <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• Boreholes and water wells</li>
                <li>• Rainwater harvesting systems</li>
                <li>• Water treatment facilities</li>
                <li>• Latrine and toilet construction</li>
                <li>• Handwashing stations</li>
                <li>• Hygiene education</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Sustainable Solutions</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We don't just build water infrastructure - we ensure it's sustainable. We train local communities to maintain their water systems and promote hygiene practices that prevent waterborne diseases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default WaterSanitationAndHygiene
