import DataTopics from '@views/home/DataTopics'
import HeroSection from '@views/home/HeroSection'

export default function Dashboard() {
  if (typeof window === 'undefined') {
    console.log('window is undefined')

    return <></>
  } else {
    return (
      <>
        <HeroSection />

        <DataTopics />
      </>
    )
  }
}
