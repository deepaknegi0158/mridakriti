import React from 'react'

const Join = () => {
    return (
        <section id="join-us" className="scroll-mt-14 relative bg-black sm:scroll-mt-32">
            <div className="overflow-hidden lg:relative">
                <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-5xl lg:px-8 relative grid grid-cols-1 items-end gap-y-12 py-20 lg:static lg:grid-cols-2 lg:py-28 xl:py-32">
                    <svg aria-hidden="true" width="432" height="184" className="absolute -top-32 left-0 w-full sm:-top-5 sm:left-3/4 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:left-2/3 xl:right-auto text-black">
                        <defs>
                            <symbol id=":S5:-0" width="40" height="40">
                                <rect className="fill-blue-500" width="40" height="40"></rect>
                                <circle className="fill-blue-600" cx="20" cy="20" r="13"></circle>
                            </symbol>
                            <symbol id=":S5:-1" width="40" height="40">
                                <circle className="fill-blue-300" cx="20" cy="20" r="20"></circle>
                                <rect className="fill-blue-600" width="20" height="20" x="10" y="10"></rect>
                            </symbol>
                        </defs>
                        <use href="#:S5:-0" x="0" y="0"></use>
                        <use href="#:S5:-1" x="56" y="0"></use>
                        <use href="#:S5:-0" x="112" y="0"></use>
                        <use href="#:S5:-1" x="168" y="0"></use>
                        <use href="#:S5:-1" x="224" y="0"></use>
                        <use href="#:S5:-0" x="280" y="0"></use>
                        <use href="#:S5:-1" x="336" y="0"></use>
                        <use href="#:S5:-0" x="392" y="0"></use>
                        <use href="#:S5:-1" x="0" y="48"></use>
                        <use href="#:S5:-0" x="56" y="48"></use>
                        <use href="#:S5:-1" x="112" y="48"></use>
                        <use href="#:S5:-1" x="168" y="48"></use>
                        <use href="#:S5:-0" x="224" y="48"></use>
                        <use href="#:S5:-0" x="280" y="48"></use>
                        <use href="#:S5:-0" x="336" y="48"></use>
                        <use href="#:S5:-1" x="392" y="48"></use>
                        <use href="#:S5:-0" x="0" y="96"></use>
                        <use href="#:S5:-1" x="56" y="96"></use>
                        <use href="#:S5:-0" x="112" y="96"></use>
                        <use href="#:S5:-1" x="168" y="96"></use>
                        <use href="#:S5:-1" x="224" y="96"></use>
                        <use href="#:S5:-0" x="280" y="96"></use>
                        <use href="#:S5:-1" x="336" y="96"></use>
                        <use href="#:S5:-0" x="392" y="96"></use>
                        <use href="#:S5:-1" x="0" y="144"></use>
                        <use href="#:S5:-0" x="56" y="144"></use>
                        <use href="#:S5:-1" x="112" y="144"></use>
                        <use href="#:S5:-1" x="168" y="144"></use>
                        <use href="#:S5:-0" x="224" y="144"></use>
                        <use href="#:S5:-0" x="280" y="144"></use>
                        <use href="#:S5:-0" x="336" y="144"></use>
                        <use href="#:S5:-1" x="392" y="144"></use>
                    </svg>

                    <div>
                        <h2 className="font-display text-5xl font-extrabold tracking-tight text-white sm:w-3/4 sm:text-6xl md:w-2/3 lg:w-auto">
                            Join Us
                        </h2>
                        <p className="mt-4 text-lg text-white">
                            Become a valued member of our community by subscribing to our weekly newsletter and joining us on an exhilarating expedition to uncharted territories.
                        </p>
                    </div>
                    <form className="lg:pl-16">
                        
                        <div className="mt-4 sm:relative sm:flex sm:items-center sm:py-0.5 sm:pr-2.5">
                            <div className="relative sm:static sm:flex-auto">
                                <input type="email" id="email-address" required="" aria-label="Email address" placeholder="Email address" className="peer relative z-10 w-full appearance-none bg-transparent px-4 py-2 text-base text-white placeholder:text-white/70 focus:outline-none sm:py-3" />

                                <div className="absolute inset-0 rounded-md border border-gray-500 peer-focus:border-blue-300 sm:rounded-xl">
                                </div>
                            </div>
                            <button className="inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-white text-blue-600 hover:text-blue-700 focus-visible:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-blue-50 active:text-blue-900/80 disabled:opacity-40 disabled:hover:text-blue-600 mt-4 w-full sm:relative sm:z-10 sm:mt-0 sm:w-auto sm:flex-none" type="submit">Join with us</button></div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Join