import React from 'react'
import { OwlAcademyCardProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const OwlAcademyCard = (props: OwlAcademyCardProps) => {
  const owl = props?.owlAcademy
  return (
    <div className='flex flex-col w-full max-w-[31%] h-full max-h-[377px] bg-white p-4 rounded-lg space-y-4'>
      <img src={owl?.imageUrl} alt="collection image" className='w-full h-[175px] rounded-lg object-cover' />
      <div className='flex justify-end items-center w-full'>
        {/* loop rating */}
        {Array.from({ length: owl?.rating || 0 }).map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} width="15px" height="15px" color={index < owl?.rating ? '#FFCF3E' : '#C4C4C4'} />
        ))}
      </div>
      <h2 className='text-lg font-bold text-black'>{owl?.title}</h2>
      <p className='text-xs text-gray-400'>{owl?.description}</p>
      <div className='py-2 mt-1 w-full flex justify-between'>
        <button className='flex px-4 py-2 gap-2 text-xs items-center font-normal border-2 bg-orange-500 border-gray-900 text-white rounded-md'>Join</button>
        <button className='font-normal text-xs text-orange-500'>Read more...</button>
      </div>
    </div>
  )
}

export default OwlAcademyCard