import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import Image from 'next/image'
import { Title } from '@/components/Shared/Title/title'

const Teams = () => {
  const teamMembers = [
    {
      name: "Peter Pretorius",
      role: "Founder & CEO",
      bio: "Peter started ForAfrika after witnessing the devastating famine in Mozambique. With over 15 years of humanitarian experience, he leads our mission to empower Africans."
    },
    {
      name: "Sarah Johnson",
      role: "Chief Operating Officer",
      bio: "Sarah brings extensive experience in operational management and has led programs across multiple African countries."
    },
    {
      name: "Michael Chen",
      role: "Director of Programs",
      bio: "Michael oversees all our program implementation, ensuring quality and impact in every project we undertake."
    },
    {
      name: "Amara Okonkwo",
      role: "Regional Director - West Africa",
      bio: "Amara leads our operations in West Africa, bringing deep knowledge of local communities and challenges."
    },
    {
      name: "David Mokoena",
      role: "Regional Director - East Africa",
      bio: "David has been with ForAfrika since our early days and leads our East Africa operations with passion and dedication."
    },
    {
      name: "Lisa Patel",
      role: "Head of Fundraising",
      bio: "Lisa manages our fundraising efforts, building partnerships that sustain our mission."
    }
  ]

  return (
    <ClientLayout>
      <Head>
        <title>Our Team | ForAfrika</title>
        <meta name="description" content="Meet the team behind ForAfrika - dedicated professionals committed to Africa's development." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Our Team" 
              padding="py-20" 
              paragraph="Dedicated professionals working for Africa's future."
            />
          </div>
        </div>

        <div className="w-full max-w-5xl h-[500px] lg:max-w-6xl px-3 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <Image
            src="https://www.forafrika.org/wp-content/uploads/2022/12/ForAfrika-Feeding.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt="ForAfrika team"
          />
        </div>

        <div className="w-full max-w-5xl lg:max-w-6xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-4xl">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-[#262533] mb-1">{member.name}</h3>
                <p className="text-[#262533] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default Teams
