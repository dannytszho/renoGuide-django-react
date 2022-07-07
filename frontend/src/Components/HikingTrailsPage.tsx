import TrailsCard from './TrailsCard'
import { useState } from 'react'
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
