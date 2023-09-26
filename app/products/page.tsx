import React from 'react'
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { productData } from '../../constants/data';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}
const Products = ({ searchParams }: Props) => {
  // console.log(searchParams)

  const idString = searchParams?._id;
  const _id = Number(idString);
  // console.log(typeof _id)

  const product = productData.find((product) => product._id === _id);
  // console.log(product)

  const sectionOffsets = [0, 640]

  return (
    <main>
      <Navbar sectionOffsets={sectionOffsets} />

      <div className='bg-black mx-auto'>
        <div className="flex gap-4 p-4 pt-[15rem]">
          <div className="w1/2">
            <Image
              src={`${product?.image}`}
              alt='product images'
              width={400}
              height={400}
            />
          </div>
          <div className='w-1/2 text-white'>
            <h1 className='text-3xl font-semibold mb-4'>{product?.title}</h1>
            <p className='mb-4'>{product?.description}</p>
            <p className='text-2xl font-bold'>{product?.price}</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Products