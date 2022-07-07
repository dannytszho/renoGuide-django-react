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
  useEffect(() => {
    async function getData() {
      const res = await fetch('http://127.0.0.1:8000/api/trails')
      console.log(res.json())
    }
    getData()
  }, [])

  return (
    <>
      <div>
        {trailsData.map(trail => (
          <TrailsCard
            name={trail.name}
            length={trail.length}
            elevation={trail.elevation}
            image={trail.imageUrl}
            difficulty={trail.difficulty}
            // rating={<Rating rating={parseFloat(trail.rating)} />}
            duration={trail.duration}
            urL={trail.url}
          />
        ))}
      </div>
    </>
  )
}
export default HikingTrailsPage
