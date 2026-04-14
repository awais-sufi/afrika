import Head from 'next/head'
import ClientLayout from '@/layout/Client'
import { Title } from '@/components/Shared/Title/title'

const EmployeeHandbook = () => {
  const sections = [
    {
      title: "Welcome to ForAfrika",
      content: "Welcome to ForAfrika! We're thrilled to have you join our team. This handbook contains important information about working with us, our policies, and our culture."
    },
    {
      title: "Our Mission and Values",
      content: "ForAfrika's mission is to empower 20 million Africans to sustainably provide for themselves. Our values guide everything we do: dignity, sustainability, community, innovation, and transparency."
    },
    {
      title: "Code of Conduct",
      content: "All employees are expected to maintain high ethical standards. We treat everyone with respect, maintain confidentiality, avoid conflicts of interest, and report any concerns through proper channels."
    },
    {
      title: "Work Hours and Attendance",
      content: "Standard work hours are 8:00 AM to 5:00 PM, Monday to Friday. We offer flexible working arrangements where possible. All employees must notify their manager of any absences in advance when possible."
    },
    {
      title: "Leave Policy",
      content: "Employees receive 20 days annual leave, 10 days sick leave, and 12 public holidays per year. Leave requests should be submitted at least 2 weeks in advance for planned leave."
    },
    {
      title: "Benefits",
      content: "We offer competitive benefits including health insurance, retirement plans, professional development opportunities, and life insurance."
    },
    {
      title: "Harassment and Discrimination",
      content: "ForAfrika has zero tolerance for harassment or discrimination of any kind. All employees deserve a safe, respectful workplace. Report any concerns to HR immediately."
    },
    {
      title: "Confidentiality",
      content: "Employees must protect confidential information including donor lists, beneficiary data, and organizational strategies. This obligation continues after employment ends."
    },
    {
      title: "Performance Reviews",
      content: "Performance reviews are conducted annually. Managers provide feedback, set goals, and discuss development opportunities. Employees are encouraged to provide upward feedback as well."
    },
    {
      title: "Contact Information",
      content: "For questions about this handbook or HR matters, contact hr@forafrika.org. For IT support, contact it@forafrika.org."
    }
  ]

  return (
    <ClientLayout>
      <Head>
        <title>Employee Handbook | ForAfrika</title>
        <meta name="description" content="ForAfrika employee handbook." />
      </Head>

      <section className="w-screen bg-white md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12">
          <div className="flex w-full justify-start items-center">
            <Title 
              title="Employee Handbook" 
              padding="py-20" 
              paragraph="Policies and Guidelines"
            />
          </div>
        </div>

        <div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-8 lg:py-12 relative mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            This handbook outlines policies, procedures, and expectations for all ForAfrika employees.
          </p>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-[#262533] mb-3">{section.title}</h3>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ClientLayout>
  )
}

export default EmployeeHandbook