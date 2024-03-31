import React from 'react'
import { StoreItemCardProps } from './types'
import { formatMoney } from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const StoreItemCard = (props: StoreItemCardProps) => {
  const item = props?.storeItem;
  return (
    <div className='flex flex-col w-full max-w-[23%] h-full max-h-[397px] bg-white p-2 rounded-md space-y-4'>
      <img src={item?.imageUrl} alt="collection image" className='w-full h-[230px] rounded-md object-cover' />
      <button className='w-full flex py-2 gap-2 justify-center items-center font-normal text-sm bg-orange-500 text-white'>Add to cart</button>
      <div className='py-2 mt-1 w-full flex flex-col border-t border-gray-200 space-y-4'>
        <div className='flex space-x-2'>
          <span className='text-lg text-red-500'>{formatMoney(item?.newPrice)}</span>
          <span className='text-lg text-gray-400 line-through'>{formatMoney(item?.price)}</span>
        </div>
        <div className='flex space-x-0.5'>
          {Array.from({ length: item?.rating || 0 }).map((_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} width="15px" height="15px" color={index < item?.rating ? '#FFCF3E' : '#C4C4C4'} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StoreItemCard