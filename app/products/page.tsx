"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { productData } from '../../constants/data';
import Footer from '../../components/Footer';
import { useLanguage } from '../LanguageContext';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}
const Products = ({ searchParams }: Props) => {

    const { lang } = useLanguage();

    // fetching product using url and productData
    const idString = searchParams?._id;
    const _id = Number(idString);
    const product = productData.find((product) => product._id === _id);

    const [selectedImage, setSelectedImage] = useState(product?.image[0]);

    const handleImageCLick = (image) => {
        setSelectedImage(image);
    }
    // Navbar offset values
    const sectionOffsets = [0, 640];

    return (
        <main className='font-sans'>
            <Navbar sectionOffsets={sectionOffsets} />

            {/* <div className="bg-black text-white mx-auto p-4 pt-[14rem] px-20 pb-[14rem]">
                <div className="flex md:flex-row flex-col justify-center">
                    <div className=" hidden lg:flex flex-wrap space-y-1 w-[10rem] mr-5">
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
                                    className='rounded-xl' />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center items-center md:w-1/2 w-full h-auto">
                        <Image src={selectedImage}
                            alt="Main Product Image"
                            className='m-0 rounded-xl'
                        />
                    </div>


                    <div className="md:ml-10 md:w-1/2 w-full md:mt-0 mt-5">
                        <div className="text-2xl font-semibold">
                            {lang === 'en' ? (
                                <h2>{product?.title_en}</h2>
                            ) : (
                                <h2>{product?.title_hn}</h2>
                            )}
                        </div>
                        <div className="text-gray-200 mt-4">
                            {lang === 'en' ? (
                                <p>{product?.description_en}</p>
                            ) : (
                                <p>{product?.description_hn}</p>
                            )}
                        </div>
                        <p className='mt-4'>
                            {product?.price}
                        </p>

                    </div>
                </div>
            </div> */}

            <div className='bg-black pt-[8rem] mx-auto pb-14'>
                <div className='max-w-7xl md:px-16 lg:px-8 mx-20'>
                    <div className='grid lg:grid-cols-2 gap-x-8 items-start'>
                        <div className='flex flex-col-reverse'>
                            <div className='block mx-auto mt-6 lg:max-w-none max-w-2xl '>
                                {/* image gallery */}
                                <div className='grid grid-cols-3 gap-6'>
                                    {product?.image.map((image, index) => (
                                        <div
                                            key={index}
                                            className={`cursor-pointer grid gap-6 w-[10rem] h-[10rem] ${selectedImage === image ? 'shadow-xs shadow-gray-200' : ''
                                                }`}
                                            onClick={() => handleImageCLick(image)}
                                        >
                                            <Image
                                                src={image}
                                                alt={`Thumbnail ${index}`}
                                                className='rounded-xl' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='w-[10rem] h-[10rem] lg:w-[30rem] lg:h-[25rem] mx-auto'>
                                {/* big image */}
                                <Image
                                    src={selectedImage}
                                    alt="Main Product Image"
                                    priority={false}
                                    className='m-0 rounded-xl object-cover object-bottom h-full'
                                />
                            </div>
                        </div>
                        <div className='lg:mt-0 mt-20 px-0 text-white'>
                            <h1>{product.title_en}</h1>
                            <div>
                                <h2 className='sr-only'>Product Information</h2>
                                <p>{product.price}</p>
                            </div>
                            <div>
                                <h2 className='sr-only'>Description</h2>
                                <p>{product.description_en}</p>
                            </div>
                            <div>
                                <h2>Features</h2>
                                {product.features.map((feature, index) => (
                                    <ul key={index}>
                                        <li>{feature}</li>
                                    </ul>
                                ))

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='mx-auto p-8 bg-black pt-[15rem]'>
                <div className='grid grid-cols-1 md:grid-cols-2 container gap-8'>
                    <div>
                        <Image
                            src={product.photo}
                            alt={product.title_en}
                            className='w-full' />
                    </div>
                    <div className='text-white'>
                        <h1 className='text-2xl font-semibold'>{product?.title_en}</h1>
                        <p className='text-gray-200'>{product?.description_en}</p>
                        <p className='text-2xl font-semibold mt-4'>{product.price}</p>

                        <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'>
                            Add to Cart
                        </button>

                        <div className='mt-8 text-white'>
                            <div className='text-xl font-semibold'>Product Details</div>
                            <ul className='list-disc pl-4 mt-2'>
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))
                                }
                            </ul>
                        </div>

                        <div className='mt-4 text-white'>
                            <div className='font-semibold'>Options</div>
                            <ul className='flex flex-row gap-2'>
                                {product.sizes.map((size, index) => (
                                    <li key={index}>{size}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

            <Footer />
        </main>
    )
}

export default Products