'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    // Centered wrapper filling up the flex-col layout space
    <div className="flex-1 bg-gray-50 flex items-center justify-center p-4 w-full">
      
      {/* ផ្នែកក្តោប (Main Wrapper Section) */}
      <section className="max-w-xl w-full bg-white border border-gray-100 rounded-2xl shadow-xl p-8 md:p-12 text-center transition-all duration-300 hover:shadow-2xl">
        
        {/* Icon Error */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 text-red-500 rounded-full mb-6 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
        </div>

        {/* Error Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 tracking-wide">
          មានបញ្ហាអ្វីមួយខុសប្រក្រតី!
        </h1>
        <p className="text-sm text-gray-400 font-mono mb-6">
          {error.digest ? `Error ID: ${error.digest}` : 'Internal Server Error'}
        </p>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-8">
          ប្រព័ន្ធហាក់ដូចជាកំពុងជួបប្រទះបញ្ហាបច្ចេកទេសបន្តិចបន្តួច។ សូមព្យាយាមម្តងទៀតនៅពេលបន្តិចទៀតនេះ ឬត្រឡប់ទៅកាន់ទំព័រដើមវិញ។
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-xl transition duration-200 shadow-sm cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            ព្យាយាមឡើងវិញ
          </button>
          
          <Link 
            href="/" 
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-xl border border-gray-200 transition duration-200 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            ត្រឡប់ទៅទំព័រដើម
          </Link>
        </div>
      </section>

    </div>
  )
}