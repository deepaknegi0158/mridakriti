"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { productData } from '../../constants/data';
import Footer from '../../components/Footer';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}
const Products = ({ searchParams }: Props) => {

    // fetching product using url and productData
    const idString = searchParams?._id;
    const _id = Number(idString);
    const product = productData.find((product) => product._id === _id);

    const [selectedImage, setSelectedImage] = useState(product?.image[0]);

    const handleImageCLick = (image: string) => {
        setSelectedImage(image);
    }
    // Navbar offset values
    const sectionOffsets = [0, 640];

    return (
        <main>
            <Navbar sectionOffsets={sectionOffsets} />

            {/* <div className='flex items-center justify-between m-auto h-[100vh] w-[90%]'>
                <div className='block basis-[45%]'>
                    <div className='flex flex-col space-y-4 h-[80vh]'>
                        <div>
                            {
                                product?.image.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`cursor-pointer ${selectedImage === image ? 'border-2 border-blue-500' : ''}`}
                                        onClick={() => handleImageCLick(image)}
                                    >
                                        <Image
                                            src={image}
                                            alt={`Thumbnail ${index}`}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <Image src={selectedImage} alt="Main Product Image" width={400} height={400} />
                        </div>
                    </div>
                </div>
                <div className='block basis-[45%]'>

                </div>
            </div> */}

            <div className="bg-black text-white mx-auto p-4 pt-[14rem] px-20 pb-[14rem]">
                <div className="flex justify-center">
                    <div className="flex flex-wrap space-y-1">
                        {product?.image.map((image, index) => (
                            <div
                                key={index}
                                className={`cursor-pointer w-[10rem] h-[10rem] ${selectedImage === image ? 'shadow-xs shadow-gray-200' : ''
                                    }`}
                                onClick={() => handleImageCLick(image)}
                            >
                                <Image 
                                src={image} 
                                alt={`Thumbnail ${index}`} 
                                className='rounded-xl'/>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center px-10 w-1/2">
                        <Image src={selectedImage}
                            alt="Main Product Image"
                            className='m-0 rounded-xl'
                        />
                    </div>


                    <div className="ml-4 w-1/2">
                        <h1 className="text-2xl font-bold">
                            {product?.title}
                        </h1>
                        <p className="text-gray-200 mt-4">
                            {product?.description}
                        </p>
                        <p className='mt-4'>
                            {product?.price}
                        </p>

                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default Products