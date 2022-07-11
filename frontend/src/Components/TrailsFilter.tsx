const TrailsFilter = ({ trailsData, setShowList }: any) => {
  const filterTrails = (level: any) => {
    const trail = trailsData.filter((cur: { difficulty: any }) => {
      return cur.difficulty === level
    })
    setShowList(trail)
  }

  return (
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
        onClick={() => setShowList(trailsData)}
        className="rounded-lg px-4 py-2 bg-gray-200"
      >
        All
      </button>
    </div>
  )
}

export default TrailsFilter