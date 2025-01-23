import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { chocolate } from "../assets/images";
import { arrowRight } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(chocolate);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-brown">
          Composição feita para o seu Libido
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The-Bull + Libido
          </span>
          <br />
          <span className="text-white bg-red-500 inline-block mt-3 px-4 py-2 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
            PowerMan
          </span>
          <span className="text-white bg-red-500 inline-block px-4 py-2 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105">
            Vita
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Suplemento
        </p>

        <Button
          label="Comprar"
          iconURL={arrowRight}
          className="bg-red-500 text-white hover:bg-red-600"
        />

        <div className="flex justify-start items-start flex-wrap w-full mt-30 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center">
  <img
    src={bigShoeImg}
    alt="shoe colletion"
    width={600}
    height={450}
    className="object-contain relative z-10 ml-auto"
  />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[-18%] sm:left-[32%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
