import TrailsCard from './TrailsCard'
import { useEffect, useState } from 'react'
import { trailsData } from '../TrailsData'

export interface TrailsType {
  id: string
  name: string
  length: string
  elevation: string
  duration: string
  difficulty: 'Easy' | 'Moderate' | 'Hard'
  rating: string
  imageUrl: string
  url: string
}

const HikingTrailsPage = () => {
  const [trailsdata, setTrailsdata] = useState<any[]>([])

  useEffect(() => {
    async function getData() {
      const res = await fetch('http://127.0.0.1:8000/api/trails')
      const data = await res.json()
      setTrailsdata(data)
    }
    getData()
  }, [])

  return (
    <>
      <div>
        {trailsdata.map(tra => (
          <TrailsCard
            name={tra.trail}
            length={tra.length}
            elevation={tra.elevation}
            image={tra.imageUrl}
            difficulty={tra.difficulty}
            // rating={<Rating rating={parseFloat(tra.rating)} />}
            duration={tra.duration}
            urL={tra.url}
          />
        ))}
      </div>
    </>
  )
}
export default HikingTrailsPage
