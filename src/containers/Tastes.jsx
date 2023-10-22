import { useState } from 'react'
import { Trans } from 'react-i18next'

import Taste from 'src/components/modules/taste/index.jsx'
import taste1 from 'src/assets/images/tastes/taste-1.png'
import taste2 from 'src/assets/images/tastes/taste-2.png'
import taste3 from 'src/assets/images/tastes/taste-3.png'
import taste4 from 'src/assets/images/tastes/taste-4.png'
import taste5 from 'src/assets/images/tastes/taste-5.png'
import taste6 from 'src/assets/images/tastes/taste-6.png'
import taste7 from 'src/assets/images/tastes/taste-7.png'
import taste8 from 'src/assets/images/tastes/taste-8.png'
import taste9 from 'src/assets/images/tastes/taste-9.png'
import taste10 from 'src/assets/images/tastes/taste-10.png'
import taste11 from 'src/assets/images/tastes/taste-11.png'
import taste12 from 'src/assets/images/tastes/taste-12.png'

const tastes = [
  {
    image: taste1,
    specs: [3, 1],
    puffs: [500, 1500, 3000, 5000],
    taste: 'taste-1',
  }, {
    image: taste2,
    specs: [3, 1],
    puffs: [500, 1500, 3000],
    taste: 'taste-2',
  }, {
    image: taste3,
    specs: [3, 1],
    puffs: [500, 1500],
    taste: 'taste-3',
  }, {
    image: taste4,
    specs: [3, 1],
    puffs: [500],
    taste: 'taste-4',
  }, {
    image: taste5,
    specs: [3, 1],
    puffs: [500, 1500, 3000, 5000],
    taste: 'taste-5',
  }, {
    image: taste6,
    specs: [3, 1],
    puffs: [500, 1500, 3000],
    taste: 'taste-6',
  }, {
    image: taste7,
    specs: [3, 1],
    puffs: [500, 1500],
    taste: 'taste-7',
  }, {
    image: taste8,
    specs: [3, 1],
    puffs: [500],
    taste: 'taste-8',
  }, {
    image: taste9,
    specs: [3, 1],
    puffs: [500, 1500, 3000, 5000],
    taste: 'taste-9',
  }, {
    image: taste10,
    specs: [3, 1],
    puffs: [500, 1500, 3000],
    taste: 'taste-10',
  }, {
    image: taste11,
    specs: [3, 1],
    puffs: [500, 1500],
    taste: 'taste-11',
  }, {
    image: taste12,
    specs: [3, 1],
    puffs: [500],
    taste: 'taste-12',
  },
]

const puffs = [500, 1500, 3000, 5000]

const Tastes = ({className, filterEnabled}) => {

  const [filter, setFilter] = useState(null)

  const handleFilter = (val) => {
    setFilter(val)
  }

  return (
    <div className={className}>
      <h2 className={'text-6xl uppercase bg-clip-text text-transparent bg-gradient-to-b from-black to-white py-2'}>
        <Trans i18nKey="tastes.title" components={{br: <br/>}}/>
      </h2>

      {filterEnabled &&
        <div className={'flex items-center bg-gray-100 rounded-lg py-4 mt-10'}>
          <div className={'px-6'}>
            <p className={'uppercase text-xl'}>
              выбери<br/>количество<br/>паффов
            </p>
          </div>
          <div className={'flex flex-grow justify-between gap-10 px-6'}>
            {puffs.map(puff =>
              <button
                className={`${filter === puff ? 'bg-primary text-white' : 'bg-white'} transition-colors duration-200 ease-in-out rounded-full w-full text-xl py-3`}
                onClick={() => handleFilter(puff)} key={puff}>
                {puff}
              </button>,
            )}
            <button
              className={`${!filter ? 'bg-primary text-white' : 'bg-white'} transition-colors duration-200 ease-in-out rounded-full w-full text-xl py-3`}
              onClick={() => handleFilter(null)}>
              Все вкусы
            </button>
          </div>
        </div>
      }

      <div className={'grid grid-cols-6 gap-0 pt-10'}>
        {filter ?
          tastes.map(taste => taste.puffs.includes(filter) &&
            <Taste {...taste} key={taste.taste}/>,
          )
          :
          tastes.map(taste =>
            <Taste {...taste} key={taste.taste}/>,
          )
        }
      </div>
    </div>
  )
}

export default Tastes
