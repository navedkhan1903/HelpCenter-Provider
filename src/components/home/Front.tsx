import Image from "next/image";
import main from "../../../public/main.jpg";

export default function Front() {
  return (
    <div className="mx-auto mb-60 flex h-auto w-10/12 translate-y-[77px] flex-col-reverse items-center justify-between gap-20 lg:mb-40 lg:h-[calc(100vh-77px)] lg:flex-row">
      <div className="lg:w-1/2">
        <h1 className="bg-gradient-to-r from-primary from-25% to-[#112D4E] to-75% bg-clip-text text-7xl font-semibold text-transparent sm:text-8xl md:text-9xl lg:text-7xl xl:text-8xl">
          Connect. Serve. Grow!
        </h1>
        <h2 className="mt-5 text-xl font-medium md:text-2xl lg:text-3xl">
          Your skills, our platform—unlock endless possibilities today.
        </h2>
        <button className="mt-10 rounded-full bg-primary px-10 py-5 text-xl font-medium text-white duration-200 hover:bg-primaryDark">
          Find Work
        </button>
      </div>
      <div className="mt-20 max-w-xs md:max-w-sm lg:mt-0 lg:max-w-max">
        <Image
          src={main}
          width={500}
          height={500}
          quality={100}
          alt="Worker Image"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}
