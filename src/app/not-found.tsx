import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex-1 bg-gray-50 flex items-center justify-center p-4 w-full">
      
      <section className="max-w-xl w-full bg-white border border-gray-100 rounded-2xl shadow-xl p-8 md:p-12 text-center transition-all duration-300 hover:shadow-2xl">

        <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-50 text-amber-500 rounded-full mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
        </div>

        <span className="block text-sm font-bold text-amber-600 uppercase tracking-widest mb-1">
          Not Found • Error 404
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 tracking-wide">
          រកមិនឃើញទំព័រ!
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          សោកស្តាយផង! ទំព័រដែលអ្នកកំពុងស្វែងរកមិនមានឡើយ ឬត្រូវបានផ្លាស់ប្តូរទៅកាន់ទីតាំងផ្សេងបាត់ទៅហើយ។
        </p>
        <div className="flex justify-center items-center">
          <Link 
            href="/dashboard/product" 
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-xl transition duration-200 shadow-sm"
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