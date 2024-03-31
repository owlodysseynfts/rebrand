import React from 'react'
import { CollectionProps } from './types'
import { SvgEth } from '@/icons';

const CollectionCard = (props: CollectionProps) => {
  const collection = props?.collection;
  return (
    <div className='flex flex-col w-full max-w-[23%] h-full max-h-[377px] bg-white p-2.5 rounded-md'>
      <img src={collection?.imageUrl} alt="collection image" className='w-full h-[262px] object-cover' />
      <div className='flex flex-col'>
        <h2 className='text-lg font-bold text-black'>{collection?.title}</h2>
        <div className='w-full flex space-x-2'>
          <SvgEth />
          <p className='text-xs text-orange-500 font-semibold'>0.25 ETH</p>
        </div>
        <div className='py-2 mt-1 w-full flex justify-between border-t border-gray-200'>
          <div className='bg-orange-500 rounded-full px-1 py-2 text-white text-xs'>
            3h 25m 3s
          </div>

          <button className='font-bold text-orange-500'>Place a bid</button>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard