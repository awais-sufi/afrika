import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import Image from 'next/image'
import { Title } from '@/components/Shared/Title/title'

const OurStory = () => {
  return (
    <ClientLayout>
      <Head>
        <title>Our Story | ForAfrika</title>
        <meta name="description" content="Learn about the story of ForAfrika - how we started and our journey to empower Africans." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Our Story" 
              padding="py-20" 
              paragraph="From a single response to a continent-wide movement."
            />
          </div>
        </div>

        <div className="w-full max-w-5xl h-[500px] lg:max-w-6xl px-3 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <Image
            src="https://www.forafrika.org/wp-content/uploads/2022/08/Afrika-Thrive.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt="Peter Pretorius in Africa"
          />
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="space-y-8">
            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">How It All Began</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Peter Pretorius, a South African, was one of the first people to respond to the Mozambican government's plea to the international community for urgent humanitarian relief during a famine that had placed nearly four million people at risk of starvation. He visited Pambarra Village near Vilankulo, Inhambane Province, to see how he could contribute in the emergency.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">A Life-Changing Experience</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Peter was meant to be on the ground for a day, but he was left there for 10 days with no food, water, or other supplies. He witnessed death, despair and deep poverty in that community. Up to 30 people died of starvation every day, leaving so many children orphaned.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">The Birth of ForAfrika</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                This experience transformed Peter's life. He knew he had to do something to help. What started as an emergency response evolved into a lifelong commitment to helping African communities not just survive, but thrive. ForAfrika was born from this calling.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Growing Through the Years</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                From those early days in Mozambique, ForAfrika has grown to work across multiple African countries, addressing food security, water and sanitation, education, and emergency response. We've helped millions of people, but our mission continues until every African can sustainably provide for themselves.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default OurStory
