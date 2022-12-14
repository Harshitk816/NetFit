import React from 'react'

export default function Hero() {
    return (
        <div>

        <div class="md:flex">
            <div class="flex items-center justify-center w-full px-10 py-8 md:h-128 md:w-1/2">
                <div class="max-w-xl">
                    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white md:text-4xl">Find Next WorkOut For <span class="text-indigo-600 dark:text-indigo-400">You</span></h2>
                        
                    <p class="mt-2 text-md text-gray-500 dark:text-gray-400 md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

                    <div class="flex mt-6">
                        <a href="/workout" class="block px-4 py-3 text-md font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Read now</a>
                        <a href="/shop" class="block px-4 py-3 mx-4 text-md font-semibold text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md hover:bg-gray-300">Shop</a>
                    </div>
                </div>
            </div>
            
            <div class="w-full h-64 md:w-1/2 md:h-auto">
                <div class="w-full h-full bg-cover" style={{"background-image": "url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1394&q=80)"}}>
                    <div class="w-full h-full bg-black opacity-25"></div>
                </div>
            </div>
        </div>
    
        </div>
    )
}
