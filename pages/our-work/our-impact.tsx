import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import Image from 'next/image'
import { Title } from '@/components/Shared/Title/title'

const OurImpact = () => {
  return (
    <ClientLayout>
      <Head>
        <title>Our Impact | ForAfrika</title>
        <meta name="description" content="See the impact of ForAfrika's work across Africa - lives transformed and communities strengthened." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Our Impact" 
              padding="py-20" 
              paragraph="The difference we're making together."
            />
          </div>
        </div>

        <div className="w-full max-w-5xl h-[500px] lg:max-w-6xl px-3 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <Image
            src="https://www.forafrika.org/wp-content/uploads/2022/08/Afrika-Thrive.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt="Our impact in Africa"
          />
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#262533] mb-2">2M+</div>
              <div className="text-gray-600">People Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#262533] mb-2">12</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#262533] mb-2">500+</div>
              <div className="text-gray-600">Communities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#262533] mb-2">1000+</div>
              <div className="text-gray-600">Projects</div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="space-y-8">
            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Food Security</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We've helped over 500,000 households achieve food security through sustainable agriculture programs, livestock initiatives, and livelihood training.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Clean Water</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Over 200 water points have been established, providing clean water to over 1 million people across our program areas.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Education</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We've constructed and renovated over 100 schools, and provided scholarships to over 10,000 children to attend quality schools.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Emergency Response</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                In times of crisis, we've provided emergency assistance to over 300,000 people affected by droughts, floods, and conflicts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default OurImpact