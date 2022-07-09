import { Link } from 'react-router-dom'
import Nevada from '../Images/Nevada.png'
import { LongButton } from './Button'
import HikerIcon from '../svg/HikerIcon'

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col">
        <div className="flex justify-center mt-20">
          <img src={Nevada} alt="navada" />
        </div>
        <h2 className="flex justify-center font-iceland text-2xl m-2">
          · Reno · Lake Tahoe ·
        </h2>
        {/* Food and Drinks section */}
        <section className="grid gap-4 justify-center m-10 font-iceland">
          <p className="flex justify-center text-2xl m-2 whitespace-pre">
            ↓{'   '}Food & Drinks{'   '}↓
          </p>
          <LongButton>
            <Link to="/hikingtrails">
              <div className="flex">
                <div className="pl-4">
                  <HikerIcon />
                </div>
                <a className="text-2xl mx-auto">Hiking</a>
              </div>
            </Link>
          </LongButton>
        </section>
      </div>
    </>
  )
}
export default HomePage
