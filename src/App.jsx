import "./App.css";
import { ButtonEffect } from "./components/button/ButtonEfecct";
import imagemSurpresa from "./assets/miranha.jpg"
import banner from "./assets/templo-fortaleza.png"
import perfil from "./assets/perfil.jpg"
import logo from "./assets/logo.png"

function App() {


  return (
    <>
      <header className="header">
        <img src={logo} alt="" />
      </header>
      <div className="banner">
        <img
          src={banner}
          alt=""
          className="banner__img"
        />
        <div className="container__perfil">
          <img src={perfil} alt="" className="perfil" />
        </div>
      </div>

      <div className="list__summary">
        <h1>Marcelly & Roberto Lista de Presente</h1>
        <p>24 Novembro 2023</p>
        <div className="coupletext">
          <p>
            Estamos super animados com o nosso casamento e mal podemos esperar
            para compartilhar esse dia tão especial com você! Ter a sua presença
            é o maior presente que poderíamos pedir, mas se quiser nos ajudar a
            montar a nossa primeira casa juntos, montamos uma lista de itens que
            seriam muito bem-vindos. O seu carinho e apoio significam muito para
            nós. Com amor, Marcelly & Roberto.
          </p>
        </div>
        <hr />
      </div>

      <div className="container">
        <ul>
          <li>
            <div className="product__info">
              <div className="product__image-wrapper">
                <a href="">
                  <img
                    src="https://www.marriagegiftlist.com/files/gifts/product_image/674c984f-86ce-4ba0-b1c5-3e041bf5dd95/fghfh.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="product__title">
                <a href="">
                  Sr. & Sra. Conjunto de 2 1/2 canecas de pint encaixotadas
                </a>
              </div>

              <div className="product__value">
                <p>R$ 10,00</p>
              </div>

              <button className="button">
                Ver
              </button>

            </div>
          </li>
          <li>
            <div className="product__info">
              <div className="product__image-wrapper">
                <a href="">
                  <img
                    src={imagemSurpresa}
                    alt=""
                  />
                </a>
              </div>
              <div className="product__title">
                <a href="">
                 ??????????????????????????????????
                 ????????????????
                </a>
              </div>

              <div className="product__value">
                <p>R$ ?????</p>
              </div>
              <ButtonEffect />
            </div>
          </li>
          <li>
            <div className="product__info">
              <div className="product__image-wrapper">
                <a href="">
                  <img
                    src="https://www.marriagegiftlist.com/files/gifts/product_image/674c984f-86ce-4ba0-b1c5-3e041bf5dd95/fghfh.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="product__title">
                <a href="">
                  Sr. & Sra. Conjunto de 2 1/2 canecas de pint encaixotadas
                </a>
              </div>

              <div className="product__value">
                <p>R$ 10,00</p>
              </div>

              <button className="button">Ver</button>
            </div>
          </li>
          <li>
            <div className="product__info">
              <div className="product__image-wrapper">
                <a href="">
                  <img
                    src="https://www.marriagegiftlist.com/files/gifts/product_image/674c984f-86ce-4ba0-b1c5-3e041bf5dd95/fghfh.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="product__title">
                <a href="">
                  Sr. & Sra. Conjunto de 2 1/2 canecas de pint encaixotadas
                </a>
              </div>

              <div className="product__value">
                <p>R$ 10,00</p>
              </div>

              <button className="button">Ver</button>
            </div>
          </li>
          <li>
            <div className="product__info">
              <div className="product__image-wrapper">
                <a href="">
                  <img
                    src="https://www.marriagegiftlist.com/files/gifts/product_image/674c984f-86ce-4ba0-b1c5-3e041bf5dd95/fghfh.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="product__title">
                <a href="">
                  Sr. & Sra. Conjunto de 2 1/2 canecas de pint encaixotadas
                </a>
              </div>

              <div className="product__value">
                <p>R$ 10,00</p>
              </div>

              <button className="button">Ver</button>
            </div>
          </li>
          <li>
            <div className="product__info">
              <div className="product__image-wrapper">
                <a href="">
                  <img
                    src="https://www.marriagegiftlist.com/files/gifts/product_image/674c984f-86ce-4ba0-b1c5-3e041bf5dd95/fghfh.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="product__title">
                <a href="">
                  Sr. & Sra. Conjunto de 2 1/2 canecas de pint encaixotadas
                </a>
              </div>

              <div className="product__value">
                <p>R$ 10,00</p>
              </div>

              <button className="button">Ver</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
