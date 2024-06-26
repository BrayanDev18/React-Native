
import Image from 'next/image'
import star from '../../../../../public/icons/star.svg'

interface ReviewCardProps {
  key: number
  imgURL: string
  customerName: string
  rating: number
  feedback: string
}

export const CustomerReviewsCard = ({ key, imgURL, customerName, rating, feedback }: ReviewCardProps) => {
  return (
    <div key={key} className='flex justify-center items-center flex-col'>
      <Image
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <Image
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-1 text-3xl text-center font-bold'>
        {customerName}
      </h3>
    </div>
  )
}