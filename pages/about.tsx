import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import Image from 'next/image'
import { Title } from '@/components/Shared/Title/title'

const About = () => {
  return (
    <ClientLayout>
      <Head>
        <title>About Us | ForAfrika</title>
        <meta name="description" content="Learn about ForAfrika - a non-profit organization dedicated to empowering Africans to sustainably provide for themselves." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="About Us" 
              padding="py-20" 
              paragraph="We love this place and we love our people. Africa is home and we know what needs to be done to see it thrive."
            />
          </div>
        </div>

        <div className="w-full max-w-5xl h-[500px] lg:max-w-6xl px-3 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <Image
            src="https://www.forafrika.org/wp-content/uploads/2022/04/ForAfrika-Food-Security.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt="Our team in Africa"
          />
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="mx-auto text-center lg:mx-0 lg:flex-auto">
            <h5 className="text-3xl font-extralight leading-[50px] tracking-wider text-[#262533] sm:text-4xl">
              We believe in the potential of every African to thrive. Through innovative solutions and community-led approaches, we work to create lasting change across the continent.
            </h5>
          </div>
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="space-y-8">
            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower 20 million Africans to sustainably provide for themselves by 2023 through innovative humanitarian solutions, community engagement, and sustainable development programs.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A thriving Africa where every person has the opportunity to reach their full potential and contribute to their community's growth and prosperity.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Our Values</h3>
              <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• Dignity - Every person deserves respect</li>
                <li>• Sustainability - Creating lasting change</li>
                <li>• Community - Working together for common goals</li>
                <li>• Innovation - Finding new solutions to old problems</li>
                <li>• Transparency - Accountability in all we do</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default About
