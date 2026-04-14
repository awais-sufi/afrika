import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import Image from 'next/image'
import { Title } from '@/components/Shared/Title/title'

const Education = () => {
  return (
    <ClientLayout>
      <Head>
        <title>Education | ForAfrika</title>
        <meta name="description" content="ForAfrika's education programs - empowering the next generation of African leaders." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Education" 
              padding="py-20" 
              paragraph="Empowering the next generation through quality education."
            />
          </div>
        </div>

        <div className="w-full max-w-5xl h-[500px] lg:max-w-6xl px-3 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <Image
            src="https://www.forafrika.org/wp-content/uploads/2022/04/ForAfrika-Food-Security.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt="Education programs in Africa"
          />
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="space-y-8">
            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Education as a Pathway to Change</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Education is one of the most powerful tools for lasting change. We believe every African child deserves access to quality education that prepares them for the future.
              </p>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Our Education Programs</h3>
              <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
                <li>• School construction and renovation</li>
                <li>• Teacher training and support</li>
                <li>• Educational materials and supplies</li>
                <li>• Scholarship programs</li>
                <li>• After-school tutoring</li>
                <li>• Skills training for youth</li>
              </ul>
            </div>

            <div className="border-l-4 border-[#262533] pl-6">
              <h3 className="text-2xl font-bold text-[#262533] mb-4">Investing in Africa's Future</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                By investing in education, we're investing in the future of Africa. Our programs help young people develop the skills they need to become leaders, entrepreneurs, and change-makers in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default Education
