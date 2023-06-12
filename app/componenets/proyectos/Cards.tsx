import Image from "next/image";

const Card = () => {
    return (        
        <div className="max-w-md mx-auto bg-zinc-200 bg-opacity-10 items-center xl:w-3/4 flex flex-col overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              className="h-48 w-full object-cover md:w-48"
              src="/img/card-img.png"
              width={500}
              height={500}
              alt="card-default-img"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm font-semibold text-white">
              Category
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-white hover:underline"
            >
              Card Title
            </a>
            <p className="mt-2 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              convallis interdum diam, eget tincidunt dui gravida id. Integer
              sit amet ullamcorper urna.
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="text-white hover:text-zinc-400 font-semibold"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  