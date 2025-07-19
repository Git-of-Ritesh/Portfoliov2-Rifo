import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-50 px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">🛠️ Coming Soon</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        Our About page is under construction. Great content is on its way!
      </p>

      <Link href="/">
        <button className="mt-4 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition">
          Back to Home
        </button>
      </Link>
    </main>
  )
}

export default page