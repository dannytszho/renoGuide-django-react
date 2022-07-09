import TrailsCard from './TrailsCard'
import { useEffect, useState } from 'react'
import { SquareButton } from './Button'
import { trailsData } from '../TrailsData'
import Footer from './Footer'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import LeftArrowIcon from '../svg/LeftArrowIcon'

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
  const [showList, setShowList] = useState<any[]>(trailsdata)
  console.log(trailsdata)

  const filterTrails = (level: any) => {
    const trail = trailsdata.filter(cur => {
      return cur.difficulty === level
    })
    setShowList(trail)
  }

  async function getData() {
    const res = await fetch('http://127.0.0.1:8000/api/trails')
    const data = await res.json()
    console.log(data)
    setTrailsdata(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="flex flex-col">
        <div className="flex m-5 justify-start">
          <SquareButton>
            <Link to="/">
              <div className="p-2.5">
                <LeftArrowIcon />
              </div>
            </Link>
          </SquareButton>
        </div>
        {/* Filter section */}

        <div className="mt-10 flex justify-center text-black space-x-4">
          <button
            onClick={() => filterTrails('Easy')}
            className="rounded-lg px-3 py-2 bg-yellow-300"
          >
            Easy
          </button>
          <button
            onClick={() => filterTrails('Moderate')}
            className="rounded-lg px-3 py-2 bg-green-400"
          >
            Moderate
          </button>
          <button
            onClick={() => filterTrails('Hard')}
            className="rounded-lg px-4 py-2 bg-red-400"
          >
            Hard
          </button>
          <button
            onClick={() => setShowList(trailsdata)}
            className="rounded-lg px-4 py-2 bg-gray-200"
          >
            All
          </button>
        </div>

        <div className="grid justify-center">
          {showList.map(trail => (
            <TrailsCard
              key={trail.name}
              name={trail.name}
              length={trail.length}
              elevation={trail.elevation}
              image={trail.imageUrl}
              difficulty={trail.difficulty}
              rating={<Rating rating={parseFloat(trail.rating)} />}
              duration={trail.duration}
              urL={trail.url}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default HikingTrailsPage
