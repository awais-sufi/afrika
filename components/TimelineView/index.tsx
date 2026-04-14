// Write your code here
import {Chrono} from 'react-chrono'
import Image from 'next/image'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import {
  TimelineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './styledComponents'
import { Key } from 'react'

const TimelineView = (props: { timelineItemsList: any }) => {
  const {timelineItemsList} = props

  const renderTimelineCard = (item: { categoryId: string; id: Key | null | undefined }) => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <div 
  className='flex justify-around items-center min-h-screen'>
      <div    className='flex flex-col justify-center items-center max-w-[1110px] h-screen'>
        <div  className='flex flex-col justify-center items-center mb-8'>
          <h1 className='text-center text-[#171f46] font-roboto font-medium text-lg leading-[2.7] m-0 md:text-xl'>
          OUR JOURNEY
          </h1>
        </div>
        <Chrono
 
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
           <div className="chrono-icons">
      <Image
        src="https://img.icons8.com/ios-filled/100/000000/twitter.png"
        alt="twitter"
        width={100}
        height={100}
      />
      
      <Image
        src="https://img.icons8.com/ios-filled/100/000000/about.png"
        alt="twitter"
        width={100}
        height={100}
      />
      <Image
        src="https://img.icons8.com/ios-filled/100/000000/contacts.png"
        alt="twitter"
        width={100}
        height={100}
      />
      <Image
        src="https://img.icons8.com/ios-filled/100/000000/info.png"
        alt="twitter"
        width={100}
        height={100}
      />
    </div>
          {timelineItemsList.map((eachItem: any) => renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    </div>
  )  
}

export default TimelineView
