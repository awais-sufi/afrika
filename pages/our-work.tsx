import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import Image from 'next/image'
import { Title } from '@/components/Shared/Title/title'
import Link from 'next/link'

const OurWork = () => {
  const programs = [
    {
      title: "Emergency Response",
      description: "Rapid humanitarian assistance during crises including droughts, floods, and conflicts.",
      link: "/our-work/emergency-response",
      image: "https://www.forafrika.org/wp-content/uploads/2022/04/ForAfrika-Food-Security.jpg"
    },
    {
      title: "Food Scarcity and Livelihoods",
      description: "Sustainable food security programs that help communities feed themselves long-term.",
      link: "/our-work/food-scarcity-and-livelihoods",
      image: "https://www.forafrika.org/wp-content/uploads/2022/08/Afrika-Thrive.jpg"
    },
    {
      title: "Water, Sanitation and Hygiene",
      description: "Clean water access and sanitation infrastructure for healthy communities.",
      link: "/our-work/water-sanitation-and-hygiene",
      image: "https://www.forafrika.org/wp-content/uploads/2022/12/ForAfrika-Feeding.jpg"
    },
    {
      title: "Education",
      description: "Quality education initiatives that empower the next generation of African leaders.",
      link: "/our-work/education",
      image: "https://www.forafrika.org/wp-content/uploads/2022/04/ForAfrika-Food-Security.jpg"
    }
  ]

  return (
    <ClientLayout>
      <Head>
        <title>Our Work | ForAfrika</title>
        <meta name="description" content="Learn about ForAfrika's programs and initiatives across Africa." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Our Work" 
              padding="py-20" 
              paragraph="Creating lasting change across Africa through our programs."
            />
          </div>
        </div>

        <div className="w-full max-w-5xl h-[500px] lg:max-w-6xl px-3 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <Image
            src="https://www.forafrika.org/wp-content/uploads/2022/04/ForAfrika-Food-Security.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt="Our work in Africa"
          />
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="mx-auto text-center lg:mx-0 lg:flex-auto">
            <h5 className="text-3xl font-extralight leading-[50px] tracking-wider text-[#262533] sm:text-4xl">
              Through innovative solutions and on a scale of operational magnitude that rivals some of the largest distribution networks in the world, we work with communities to co-create the environment every African needs to thrive.
            </h5>
          </div>
        </div>

        <div className="w-full max-w-5xl lg:max-w-6xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Link href={program.link} key={index} className="group">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
                  <div className="h-48 bg-gray-200 relative">
                    <div className="h-48 relative">
                      <Image
                        src={program.image}
                        layout="fill"
                        objectFit="cover"
                        className="object-cover group-hover:scale-105 transition duration-300"
                        alt={program.title}
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#262533] mb-2">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/our-work/our-impact" className="bg-[#262533] text-white p-8 rounded-xl hover:bg-[#262533]/90 transition duration-300">
              <h3 className="text-2xl font-bold mb-2">Our Impact</h3>
              <p className="text-white/80">See the difference we've made together.</p>
            </Link>
            <Link href="/our-work/our-approach" className="bg-[#262533] text-white p-8 rounded-xl hover:bg-[#262533]/90 transition duration-300">
              <h3 className="text-2xl font-bold mb-2">Our Approach</h3>
              <p className="text-white/80">Learn how we work with communities.</p>
            </Link>
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default OurWork
