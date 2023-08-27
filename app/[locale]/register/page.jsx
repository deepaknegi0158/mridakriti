"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Logo from '../../../public/Logo.png'

const page = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAccepted, setIsAccepted] = useState(false);
    const router = useRouter();

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setConfirmPassword(newPassword);
    }
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }
    const handleAcceptChange = () => {
        setIsAccepted(!isAccepted);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isAccepted) {

            // Perform form submission or validation here

            // Assuming the form submission is successful
            // You can add your actual logic here

            // After a successful form submission, redirect to the login page

            router.push('/login');
        }
        else {
            alert("You must accept the terms and conditions to submit the form");
        }
    };

    useEffect(() => {

    }, []);
    return (
        <main className="relative flex flex-1 flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
            <div className="absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]">
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-bg" width="32" height="32" patternUnits="userSpaceOnUse" x="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid-bg)"></rect></svg>
            </div>

            <div className="relative flex flex-1 flex-col items-center justify-center pb-16 pt-12">
                <a href='/' className='flex mx-auto mb-16 w-auto'>
                    <Image
                        src={Logo}
                        width={48}
                        height={48}
                        alt='mridakriti-logo'
                    />
                    <div className='my-auto ml-3 text-3xl'>Mridakriti</div>
                </a>


                <form action="/login" onSubmit={handleSubmit} className="w-full max-w-sm">
                    <div className='mb-6 flex gap-4'>
                        <div>
                            <label htmlFor="firstname" className="block text-sm font-semibold leading-6 text-gray-900">First Name</label>
                            <input type="text" id="firstname" autoComplete='given-name' className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200" required="" />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="block text-sm font-semibold leading-6 text-gray-900">Last Name</label>
                            <input type="text" id="lastname" autoComplete='family-name' className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200" required="" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email address</label>
                        <input type="email" id="email" autoComplete='on' className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200" required="" />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">Password</label>
                        <input type="password" id="password" autoComplete='on' className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200" required="" value={password} onChange={handlePasswordChange} />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirmpassword" className="block text-sm font-semibold leading-6 text-gray-900">Confirm password</label>
                        <input type="password" id="confirmpassword" autoComplete='on' className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200" required="" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    </div>

                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input required="" id="terms" aria-describedby="terms" name="terms" type="checkbox" checked={isAccepted} onChange={handleAcceptChange} className="w-4 h-4 bg-gray-50 rounded border-gray-300 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="font-medium text-gray-900">I accept the
                                <a className="ml-1 text-blue-700 dark:text-blue-500 hover:underline" href="/terms-and-conditions/">
                                    Terms and Conditions
                                </a>
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full">
                        <span>Create account</span>
                    </button>
                    <input type="hidden" name="remember" value="true" />
                </form>
            </div>
        </main>
    )
}

export default page