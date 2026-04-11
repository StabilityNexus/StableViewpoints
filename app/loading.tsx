import Image from "next/image";

interface LoadingProps {
  message?: string;
}

export default function Loading({ message }: LoadingProps = {}) {
  const displayMessage = message ?? "Loading...";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-[#FFC517]/10 flex items-center justify-center">
      <div className="text-center">
        <Image
          src="/logo-animated.gif"
          alt={displayMessage}
          width={80}
          height={80}
          unoptimized
          className="w-20 h-20 mx-auto mb-4"
        />
        <p className="text-gray-600">{displayMessage}</p>
      </div>
    </div>
  );
}