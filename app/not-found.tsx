import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-[#f9fafb] flex flex-col gap-10 items-center justify-center text-center h-dvh">
      <svg
        width="300"
        height="300"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m7.493.015-.386.04c-1.873.187-3.76 1.153-5.036 2.579C.66 4.211-.057 6.168.009 8.253c.115 3.601 2.59 6.65 6.101 7.518a8.034 8.034 0 0 0 6.117-.98 8 8 0 0 0 3.544-4.904c.172-.701.212-1.058.212-1.887s-.04-1.186-.212-1.887C14.979 2.878 12.315.498 9 .064 8.716.027 7.683-.006 7.493.015m1.36 1.548a6.34 6.34 0 0 1 1.987.597c.698.34 1.18.686 1.747 1.253A5.956 5.956 0 0 1 13.84 5.16c.445.915.646 1.798.646 2.84a6.188 6.188 0 0 1-.66 2.867c-.172.351-.519.914-.681 1.105l-.055.065-4.563-4.564L3.963 2.91l.065-.055c.191-.162.754-.509 1.105-.681a6.436 6.436 0 0 1 3.72-.611M7.48 8.534l4.56 4.561-.067.053a7.66 7.66 0 0 1-1.106.68 6.76 6.76 0 0 1-1.987.616c-.424.065-1.336.065-1.76 0-1.948-.296-3.592-1.359-4.627-2.993a7.502 7.502 0 0 1-.634-1.332 6.62 6.62 0 0 1-.189-3.584 6.767 6.767 0 0 1 1.096-2.388c.07-.095.133-.173.141-.173.007 0 2.065 2.052 4.573 4.56"
          fillRule="evenodd"
          fill="#000"
        />
      </svg>
      <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        404 - Página no encontrada
      </h2>
      <Link
        href="/"
        className="font-bold text-xl sm:text-2xl md:text-3xl bg-black text-white px-6 py-4 rounded-xl"
      >
        Volver a inicio
      </Link>
    </main>
  );
}
