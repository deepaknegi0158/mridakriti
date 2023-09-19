'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.png'

const Register = () => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // confirm password will be automatically filled with the value of password.
    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setConfirmPassword(newPassword);
    }
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    }

    return (
        <main className='relative flex flex-col overflow-hidden px-4 sm:px-6 lg:px-8'>
            <div className='absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]'>
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-bg" width="32" height="32" patternUnits="userSpaceOnUse" x="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid-bg)"></rect></svg>
            </div>

            <div className='relative mx-10 mt-10 w-10'>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className='text-gray-700 border rounded-full' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                </a>
            </div>

            <div className='relative flex flex-1 flex-col items-center justify-center pt-12'>
                <a href="/" className='flex mx-auto mb-6 w-auto'>
                    <Image
                        src={Logo}
                        width={48}
                        height={48}
                        alt='mridakriti-logo'
                    />
                    <div className='my-auto ml-3 text-3xl'>Mridakriti</div>
                </a>

                <form action="/login" className='w-full
                max-w-sm'>
                    <div className='mb-3 flex gap-4 in'>
                        <div>
                            <label htmlFor="firstname">
                                First Name
                            </label>
                            <input type="text" id='firstname' autoComplete='given-name' required="" />
                        </div>
                        <div>
                            <label htmlFor="lastname">
                                Last Name
                            </label>
                            <input type="text" id='lastname' autoComplete='given-name' required="" />
                        </div>
                    </div>
                    <div className="mb-3 in">
                        <label htmlFor='email'>Email address</label>
                        <input type="text" id="email" autoComplete='on' required="" />
                    </div>
                    <div className="mb-3 in">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={handlePasswordChange}
                            value={password}
                            type="password" id='password' autoComplete='on' required="" />
                    </div>
                    <div className="mb-3 in">
                        <label htmlFor="password">Confirm password</label>
                        <input
                            onChange={handleConfirmPasswordChange}
                            value={confirmPassword}
                            type="password" id='confirm password' autoComplete='on' required="" />
                    </div>

                    <div className='flex items-start mb-6'>
                        <div className='flex items-center h-5'>
                            <input type="checkbox" required="" id='terms' className='w-4 h-4 bg-gray-50 rounded border-gray-300 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600' />
                        </div>
                        <div className='ml-3 text-sm'>
                            <label htmlFor="terms" className='font-medium text-gray-900'>I accept the&nbsp;
                                <a href="/terms-and-conditions" className='text-blue-700 hover:underline'>Terms and Conditions</a>
                            </label>
                        </div>
                    </div>

                    <button type='submit' className='inline-flex justify-center rounded-lg text-sm py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full'>
                        <span>Create account</span>
                    </button>
                </form>
            </div>
            <footer className="relative shrink-0 mt-4 mb-1">
                <div className="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
                    <p className="text-center sm:text-left">
                        Already have an account?
                    </p>
                    <a className="inline-flex justify-center rounded-lg text-sm py-2.5 px-4 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20" href="/login">
                        <span>Sign In
                            <span aria-hidden="true">
                            </span>
                        </span>
                    </a>
                </div>
            </footer>
        </main>
    )
}

export default Register