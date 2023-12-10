import React from 'react'
import NavBar from './NavBar'
const LandindPage = () => {
  return (
    <>
       <main>
        <section className="hero_image">
          <h2>SWEET DREAMS</h2>
          <span>Los pays de tus sueños</span>
        </section>
        <section className="nosotros" id="nostros">
          <div className="content-img">
            <img src="src/assets/imagen1.avif" alt="Sweet Dreams" />
          </div>
          <div>
            <h3>Quienes Somos</h3>
            <p>
              ¡Bienvenidos a SweetDreams, donde los sueños se convierten en
              deliciosas realidades! Somos una encantadora tienda de tartas,
              especializada en crear obras maestras de sabor y arte. Desde
              tartas clásicas hasta creaciones vanguardistas, ofrecemos una
              amplia variedad para todos los gustos y ocasiones. Nuestro equipo
              de pasteleros talentosos trabaja con ingredientes frescos y
              técnicas innovadoras para garantizar una experiencia única. Además
              de tartas, ofrecemos cupcakes, galletas y pasteles personalizados.
              En SweetDreams, cada visita es una experiencia deliciosa y
              memorable. ¡Ven y deja que tus sueños sean más dulces con
              nosotros!
            </p>
          </div>
        </section>
        <section className="productos" id="productos">
          <div className="card_product">
            <h3>Descrube nuestros dulces productos</h3>
            <p>
              La tienda de tartas Sweet Dreams se especializa en ofrecer una
              exquisita variedad de tartas y postres elaborados con ingredientes
              frescos y de alta calidad. Su selección incluye tartas clásicas
              como la de chocolate, fresa y vainilla, así como opciones más
              creativas y especializadas, como tartas de frutas frescas,
              cheesecakes gourmet y postres personalizados para ocasiones
              especiales. Sweet Dreams se destaca por su atención al detalle en
              la presentación, la frescura de sus productos y la habilidad para
              satisfacer los gustos más exigentes de sus clientes. Además de
              tartas enteras, la tienda también ofrece porciones individuales y
              opciones sin gluten para adaptarse a diversas preferencias
              dietéticas. Con un enfoque en la calidad y la creatividad, Sweet
              Dreams se ha ganado la reputación de ser un destino confiable para
              aquellos que buscan deleitarse con deliciosos postres.
            </p>
            <div className="container_expo">
              <button className="btn_expo">
                <a href="/productos">EXPLORAR TARTAS</a>
              </button>
            </div>
          </div>
        </section>
        <section className="contacto" id="contacto">
          <div>
            <h3>Contactanos</h3>
            <p>
              ¡Bienvenido a Sweet Dreams, tu destino para deleitar tus sentidos
              con los postres más exquisitos! En Sweet Dreams, nos enorgullece
              ofrecer una variedad irresistible de delicias dulces que
              seguramente satisfarán tus antojos más golosos.
            </p>
            <p>
              Dirección: Calle Dulce Sueño #123 Ciudad Delicia, CP 12345 País
              Encantado
            </p>
            <p>
              Horario de Atención: Lunes a Viernes: 9:00 AM - 8:00 PM Sábados y
              Domingos: 10:00 AM - 6:00 PM
            </p>
            <p>
              Teléfonos de Contacto: Ventas y Consultas Generales: +123 456 7890
              Pedidos Especiales: +123 456 7891
            </p>
            <p>Correo Electrónico: info@sweetdreams.com</p>
            <p>¡Déjanos endulzar tu día en Sweet Dreams!</p>
          </div>
          <div className="content-img">
            <img src="src/assets/map.png" alt="Sweet Dreams" />
          </div>
        </section>
      </main>

    </>
  )
}

export default LandindPage