import NavBar from "./NavBar";

const Productos = () => {

    function redireccionar() {
        // Cambia 'https://www.ejemplo.com' por la URL a la que deseas redirigir
        window.location.href = '/login';
      }

    return (
      <>
        <NavBar />
        <main>
          <h1 className="title_product">Bienvenido a Sweet Dreams</h1>
          <section className="container_tarta">
            <div
              className="card_tarta"
              style={{
                backgroundImage: `url(src/assets/p1.png)`,
              }}
            >
              <h3>Nombre Tarta</h3>
  
              <div className="container_precio">
                <span>$0.0</span>
                <button className="btn_tarta" onClick={redireccionar}>
                  <i className="material-symbols-outlined">Comprar</i>
                </button>
              </div>
            </div>
            <div
              className="card_tarta"
              style={{
                backgroundImage: `url(src/assets/p2.jpg)`,
              }}
            >
              <h3>Nombre Tarta</h3>
  
              <div className="container_precio">
                <span>$0.0</span>
                <button className="btn_tarta" onClick={redireccionar}>
                  <i className="material-symbols-outlined">Comprar</i>
                </button>
              </div>
            </div>
            <div
              className="card_tarta"
              style={{
                backgroundImage: `url(src/assets/p3.jpg)`,
              }}
            >
              <h3>Nombre Tarta</h3>
  
              <div className="container_precio">
                <span>$0.0</span>
                <button className="btn_tarta" onClick={redireccionar}>
                  <i className="material-symbols-outlined">Comprar</i>
                </button>
              </div>
            </div>
            <div
              className="card_tarta"
              style={{
                backgroundImage: `url(src/assets/p4.jpg)`,
              }}
            >
              <h3>Nombre Tarta</h3>
  
              <div className="container_precio">
                <span>$0.0</span>
                <button className="btn_tarta" onClick={redireccionar}>
                  <i className="material-symbols-outlined">Comprar</i>
                </button>
              </div>
            </div>
            <div
              className="card_tarta"
              style={{
                backgroundImage: `url(src/assets/p5.jpg)`,
              }}
            >
              <h3>Nombre Tarta</h3>
  
              <div className="container_precio">
                <span>$0.0</span>
                <button className="btn_tarta" onClick={redireccionar}>
                 Comprar $
                </button>
              </div>
            </div>
            <div
              className="card_tarta"
              style={{
                backgroundImage: `url(src/assets/p6.jpg)`,
              }}
            >
              <h3>Nombre Tarta</h3>
  
              <div className="container_precio">
                <span>$0.0</span>
                <button className="btn_tarta" onClick={redireccionar}>
                  Comprar
                </button>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  };
  
  export default Productos;
  