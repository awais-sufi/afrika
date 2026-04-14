import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import Image from 'next/image'
import { Title } from '@/components/Shared/Title/title'

const OurBrand = () => {
  return (
    <ClientLayout>
      <Head>
        <title>Our Brand | ForAfrika</title>
        <meta name="description" content="Learn about the ForAfrika brand and our visual identity." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Our Brand" 
              padding="py-20" 
              paragraph="Our identity reflects our mission and values."
            />
          </div>
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="space-y-8">
            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Our Name</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                ForAfrika represents our commitment to the continent. We're not just working in Africa - we're working FOR Africa, together with African communities, to create sustainable change from within.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Our Logo</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our logo symbolizes hope, growth, and the interconnectedness of African communities. The green represents the rich land and resources of Africa, while the upward motion signifies progress and advancement.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Our Colors</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Green symbolizes growth, prosperity, and the natural beauty of Africa. Gold represents hope and the bright future we're working to create. White stands for purity of mission and transparency in all we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default OurBrand
