import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.png'
import GoogleLogo from '../../public/google-logo.svg'

const Login = () => {
    return (
        <main className="relative flex flex-1 flex-col overflow-hidden px-4 py-1 sm:px-6 lg:px-8">
            <div className="absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]">
                <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid-bg" width="32" height="32" patternUnits="userSpaceOnUse" x="100%" patternTransform="translate(0 -1)"><path d="M0 32V.5H32" fill="none" stroke="currentColor"></path></pattern></defs><rect width="100%" height="100%" fill="url(#grid-bg)"></rect></svg>
            </div>
            <div className='relative mx-10 mt-10'>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className='text-gray-700 border rounded-full' stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                </a>
            </div>
            <div className="relative flex flex-1 flex-col items-center justify-center pt-12">
                <a href='/' className='flex mx-auto mb-10 w-auto'>
                    <Image
                        src={Logo}
                        width={48}
                        height={48}
                        alt='mridakriti-logo'
                    />
                    <div className='my-auto ml-3 text-3xl'>Mridakriti</div>
                </a>

                <div className='max-w-sm w-full'>
                    <button className='inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 w-full border'>
                        <Image
                            src={GoogleLogo}
                            alt='google-logo'
                            width={20}
                            height={20}
                            className='mx-3'
                        />
                        Log in with Google
                    </button>
                </div>
                <div className='flex items-center  max-w-sm my-4'>
                    <div className='w-[24rem] h-[0.025rem] bg-gray-200'></div>
                    <div className='mx-2'>or</div>
                    <div className='w-full h-[0.025rem] bg-gray-200'></div>
                </div>

                <form action="/login" className="w-full max-w-sm">
                    <div className="mb-6"><label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email address</label>
                        <input type="email" id="email" autoComplete='on' className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200" required="" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">Password</label>
                        <input type="password" id="password" autoComplete='on' className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200" required="" />
                    </div>
                    <button type="submit" className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 w-full">
                        <span>Sign in to account</span>
                    </button>
                    <input type="hidden" name="remember" value="true" />
                    <p className="my-5 text-center">
                        <a href="/password/reset" className="text-sm hover:underline">
                            Forgot password?
                        </a>
                    </p>
                </form>
            </div>
            <footer className="relative shrink-0">
                <div className="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
                    <p className="text-center sm:text-left">
                        Don't have an account?
                    </p>
                    <a className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20" href="/register">
                        <span>Create an Account
                            <span aria-hidden="true">
                            </span>
                        </span>
                    </a>
                </div>
            </footer>
        </main>
    )
}

export default Login