import CarsFilterBrowser from "@/components/carsFilterBrowser";

export default async function Page({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) {
  const search = await searchParams;

  return (
    <main className="mt-[72px] bg-[#f9fafb]">
      <div className="container mx-auto pt-[10vh] pb-[15vh]">
        <div className="px-4 pb-6 text-base text-gray-600">
          <p className="font-semibold text-gray-800">Autos</p>
        </div>
        <h1 className="text-4xl sm:text-6xl 2xl:text-9xl font-bold mb-10 text-center">
          Autos a la venta
        </h1>

        <section className="container mx-auto">
          <CarsFilterBrowser searchParams={search} />
        </section>
      </div>
    </main>
  );
}
