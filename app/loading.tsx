export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-[#FFC517]/10 flex items-center justify-center">
      <div className="text-center">
        <img
          src="/logo-animated.gif"
          alt="Loading..."
          className="w-20 h-20 mx-auto mb-4"
        />
        <p className="text-gray-600">Loading articles...</p>
      </div>
    </div>
  )
}
