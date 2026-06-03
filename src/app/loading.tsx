export default function LoadingPage() {
  return (
    <div className="flex-1 bg-gray-50 flex items-center justify-center p-4 w-full min-h-[60vh]">
      
      {/* ផ្នែកក្តោប (Main Wrapper Section) */}
      <section className="max-w-xl w-full bg-white border border-gray-100 rounded-2xl shadow-xl p-8 md:p-12 text-center">
        
        {/* Modern Animated Spinner */}
        <div className="inline-flex items-center justify-center mb-6 relative">
          {/* Outer glowing ring */}
          <div className="w-16 h-16 rounded-full border-4 border-gray-100 border-t-gray-800 animate-spin"></div>
          {/* Inner small accent dot/ring */}
          <div className="absolute w-8 h-8 rounded-full border-4 border-dashed border-gray-200 animate-ping opacity-75"></div>
        </div>

        {/* Loading Title Skeleton */}
        <div className="h-7 bg-gray-200 rounded-full w-2/3 mx-auto mb-4 animate-pulse"></div>

        {/* Loading Subtitle Skeleton */}
        <div className="space-y-2.5 mb-8 animate-pulse">
          <div className="h-4 bg-gray-100 rounded-full w-full mx-auto"></div>
          <div className="h-4 bg-gray-100 rounded-full w-5/6 mx-auto"></div>
        </div>

        {/* Action Button/Bar Skeleton */}
        <div className="flex justify-center items-center animate-pulse">
          <div className="h-12 bg-gray-200 rounded-xl w-40"></div>
        </div>

        {/* Screen Reader Accessible Text */}
        <span className="sr-only">កំពុងដំណើរការ... (Loading...)</span>

      </section>

    </div>
  )
}