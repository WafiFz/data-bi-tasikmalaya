import DataTopics from '@views/home/DataTopics'
import HeroSection from '@views/home/HeroSection'
import ListFileSection from '@views/home/ListFileSection'

export default function Dashboard() {
  if (typeof window === 'undefined') {
    console.log('window is undefined')

    return <></>
  } else {
    return (
      <>
        <HeroSection />

        <DataTopics />

        <ListFileSection />
      </>
    )
  }
}
