import { natural } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-red-800 capitalize text-4xl lg:max-w-lg font-bold'>
          POWERMAN The-Bull  
          <span className='text-red-500'> Ative a  </span>
          <span className='text-red-500'>Revolução na Saúde Masculina </span> 
        </h2>
        <ul className='mt-4 lg:max-w-lg info-text'>
        <li className=" text-black">✔ A primeira empresa com cadeia de suprimentos transparente, garantindo um produto 100% original e sem intermediários.</li>        
        <li className=" text-black">✔ Ingredientes 100% naturais, livres de adoçantes, sabores ou enchimentos artificiais</li>
        <li className=" text-black">✔ Suplemento masculino certificado por especialistas em saúde e desempenho.</li>
        <li className=" text-black">✔ Único no mercado com certificação de pureza e garantia de ausência de resíduos nocivos, como glifosato.</li>
        </ul>
        
        <div className='mt-11 '>
          <Button 
          label='Saiba mais '
          className="bg-red-500 text-white hover:bg-red-600"
        /> 
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={natural}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;