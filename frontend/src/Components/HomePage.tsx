import { Link } from 'react-router-dom'
import Nevada from '../Images/Nevada.png'
import { LongButton, CollapseButton } from './Button'
import HikerIcon from '../svg/HikerIcon'
import KayakIcon from '../svg/KayakIcon'
import Footer from './Footer'
import RestaurantCard from './RestaurantCard'
import RestaurantData from '../RestaurantData'

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

          {RestaurantData.map(place => (
            <CollapseButton
              key={place.name}
              details={
                <RestaurantCard
                  pic={place.pic}
                  address={place.address}
                  addressUrl={place.addressUrl}
                  phone={place.phone}
                  phoneDisplay={place.phoneDisplay}
                  hypeLink={place.hypeLink}
                  hypeLinkDisplay={place.hypeLinkDisplay}
                />
              }
            >
              <div className="flex">
                {place.icon}
                <h2 className="text-2xl mx-auto">{place.name}</h2>
              </div>
            </CollapseButton>
          ))}
        </section>
        {/* Activities section */}

        <section className="grid gap-4 justify-center m-10 font-iceland">
          <p className="flex justify-center text-2xl whitespace-pre">
            ↓{'   '}Activities{'   '}↓
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
          <LongButton>
            <a
              href="http://www.raftingreno.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex">
                <div className="pl-4">
                  <KayakIcon />
                </div>
                <h2 className="text-2xl mx-auto">Whitewater Rafting</h2>
              </div>
            </a>
          </LongButton>
        </section>
      </div>
      <Footer />
    </>
  )
}
export default HomePage
