import { Link } from "react-router-dom";

const Section = () => {
  return (
    <section className="flex flex-col gap-5 my-5 lg:mt-[100px]">
      <article className="flex flex-col gap-5 mx-5 justify-center lg:items-center sm:mx-[100px] lg:mx-[150px]">
        <h1 className="title text-2xl lg:text-3xl text-[#F04D79]">
          Descubre el nuevo Body Milk de Sampling Innovations
        </h1>
        <p>
          La innovadora loción corporal que penetra profundamente en la
          superficie de la piel:
        </p>
        <ul className="list-inside pl-1 space-y-5">
          <li>
            💧 Aporta hasta 48h de hidratación gracias a su textura fresca y
            ligera, a la vez que nutre e ilumina la piel.
          </li>
          <li>
            🍊 Formulado con Vitamina C, el ingrediente antioxidante más
            potente.
          </li>
          <li>🌱 Producto vegano y con 98% de ingredientes naturales.</li>
        </ul>
        <p>
          Disfruta del abrazo afrutado con este perfume TOUS Electro Touch con
          vaporizador de 100ml.
        </p>
      </article>

      <article className="flex flex-col gap-5 mx-5 justify-center lg:items-center sm:mx-[100px] lg:mx-[150px]">
        <h2 className="title text-2xl lg:text-3xl text-[#F04D79]">
          ¡Gana un lote de productos gratis!
        </h2>
        <p>
          Responde a un breve formulario sobre tu experiencia con el producto
          para entrar en el sorteo de un lote de productos de Sampling
          Innovations.
        </p>
        <Link
          className="title-bold active-button w-full sm:w-auto bg-[#F04D79] rounded-md flex items-center shadow hover:shadow-md justify-center text-white font-semibold uppercase py-3 px-10 transition-shadow"
          to="/form"
        >
          Quiero participar
        </Link>
      </article>
    </section>
  );
};

export default Section;
