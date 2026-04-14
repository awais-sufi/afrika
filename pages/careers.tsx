import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import { Title } from '@/components/Shared/Title/title'
import Image from 'next/image'

const Careers = () => {
  const jobs = [
    {
      title: "Country Director - Kenya",
      location: "Nairobi, Kenya",
      type: "Full-time",
      description: "Lead our operations in Kenya, managing programs and team."
    },
    {
      title: "Program Manager",
      location: "Mozambique",
      type: "Full-time",
      description: "Manage humanitarian programs in Sofala Province."
    },
    {
      title: "Finance Officer",
      location: "Johannesburg, South Africa",
      type: "Full-time",
      description: "Oversee financial operations and reporting."
    },
    {
      title: "Communications Specialist",
      location: "Remote",
      type: "Part-time",
      description: "Manage media relations and social media."
    },
    {
      title: "Field Officer",
      location: "Ethiopia",
      type: "Contract",
      description: "Coordinate field activities in remote communities."
    },
    {
      title: "Volunteer Coordinator",
      location: "Johannesburg, South Africa",
      type: "Full-time",
      description: "Recruit and manage volunteers across programs."
    }
  ]

  return (
    <ClientLayout>
      <Head>
        <title>Careers | ForAfrika</title>
        <meta name="description" content="Join ForAfrika and help make a difference in Africa." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Careers" 
              padding="py-20" 
              paragraph="Join Our Team"
            />
          </div>
        </div>

        <div className="w-full max-w-5xl h-[400px] lg:max-w-6xl px-3 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <Image
            src="https://www.forafrika.org/wp-content/uploads/2022/08/Afrika-Thrive.jpg"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            alt="Our team"
          />
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#262533] mb-4">Why Work With Us?</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At ForAfrika, you'll be part of a team that's making real difference in people's lives. We offer competitive salaries, professional development opportunities, and the chance to work in diverse African communities.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#262533] mb-4">Benefits</h3>
            <ul className="text-lg text-gray-700 space-y-2">
              <li>• Competitive salary and benefits package</li>
              <li>• Health insurance</li>
              <li>• Professional development</li>
              <li>• Relocation assistance</li>
              <li>• Generous leave policy</li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <h3 className="text-2xl font-bold text-[#262533] mb-6">Open Positions</h3>
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-[#262533]">{job.title}</h4>
                    <p className="text-gray-600 mt-1">{job.description}</p>
                  </div>
                  <button className="bg-[#262533] text-white px-6 py-2 rounded-lg hover:bg-[#262533]/90 transition">
                    Apply
                  </button>
                </div>
                <div className="flex gap-4 mt-3 text-sm text-gray-500">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <p className="text-lg text-gray-700">
            Don't see the right role? Email us at careers@forafrika.org with your CV and area of interest.
          </p>
        </div>
      </section>
    </ClientLayout>
  )
}

export default Careers