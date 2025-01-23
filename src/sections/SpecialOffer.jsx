import { arrowRight } from "../assets/icons";
import { anshul } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={anshul}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-extrabold'>
            <span className='text-red-500'>POWERMANVITA </span>
            The - Bull
        </h2>
        <p className='mt-6 info-text font-semibold'>
          TODOS OS PRODUTOS NATURAIS

        </p>
        <p className='mt-6 info-text font-bold'>
          VERDADEIRO. <span className="text-coral-red">TESTADO.</span> CONFIÁVEL.
        </p>
        <p className='mt-6 info-text text-red-500'>
          Este suplemento é formulado para atender suas necessidades nutricionais, oferecendo uma combinação ideal de proteínas, vitaminas e minerais. Com ingredientes de alta qualidade, ele é projetado para otimizar seu desempenho e recuperação. Consulte a tabela nutricional para detalhes sobre os valores e adequações às suas metas de fitness.
        </p>
      </div>
    </section>
  );
};

export default SpecialOffer;