import "./App.css";
import { ButtonEffect } from "./components/button/ButtonEfecct";
import imagemSurpresa from "./assets/miranha.jpg";
import banner from "./assets/templo-fortaleza.png";
import perfil from "./assets/perfil.jpg";
import logo from "./assets/logo.png";

function App() {
  const product = [
    {
      id: "1",
      name: "Faqueiro Malibu, 24 peças, Inox, Tramontina",
      imagem: "https://m.media-amazon.com/images/I/8121jcjxWaL._AC_SY741_.jpg",
      preco: "79,98",
      link: "https://www.amazon.com.br/Faqueiro-Inox-Malibu-Tramontina-Voltagev/dp/B07WR4V7CL/ref=sr_1_3?crid=GGLDDAY32GMP&keywords=faqueiro+malibu&qid=1699130118&sprefix=faqueiro+mali%2Caps%2C205&sr=8-3",
    },
    {
      id: "2",
      name: "Conjunto de Bowls Tigelas de Inox com Tampa Plástica Electrolux",
      imagem: "https://m.media-amazon.com/images/I/51hUmO15FhL._AC_SX522_.jpg",
      preco: "133,40",
      link: "https://www.amazon.com.br/dp/B0C2ZNDWK6/?coliid=I17XAU2XAMSTE6&colid=27PP7WJ0HPNBS&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
    },
    {
      id: "3",
      name: "Varal De Chão Com Abas Slim Mor",
      imagem: "https://m.media-amazon.com/images/I/51MRcuhxgJL._AC_SX425_.jpg",
      preco: "129,27",
      link: "https://www.amazon.com.br/dp/B076X8DWCQ/?coliid=I1KJ0Q3IM7DPI8&colid=27PP7WJ0HPNBS&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
    },
    {
      id: "4",
      name: "Jogo De Cama Bouti Lençol Casal Padrão Com 04 Peças Estampado Patchwork Verde",
      imagem: "https://m.media-amazon.com/images/I/71Vx5lCBLZS._AC_SX425_.jpg",
      preco: "103,99",
      link: "https://www.amazon.com.br/dp/B093VZ8HQF/?coliid=I9H8917XOV55L&colid=27PP7WJ0HPNBS&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
    },
    {
      id: "5",
      name: "Jogo de Cama Casal Percal 400 Fios Ponto Palito 04 Peças, Antiácaro, Anti-pilling com Toque Macio - Branco",
      imagem: "https://m.media-amazon.com/images/I/51WF+gTicGL._AC_SX522_.jpg",
      preco: "169,90",
      link: "https://www.amazon.com.br/dp/B08HHD4JQP/?coliid=I1NQA1XG1TZBW&colid=27PP7WJ0HPNBS&ref_=list_c_wl_lv_ov_lig_dp_it&th=1",
    },
    {
      id: "6",
      name: "Tabua de Passar Roupa Fit com 3 Regulagem",
      imagem: "https://m.media-amazon.com/images/I/41c7zpib-NL._AC_SY450_.jpg",
      preco: "153,89",
      link: "https://www.amazon.com.br/dp/B0CKWJZ8B3/?coliid=IQUT3JKMWNK0M&colid=27PP7WJ0HPNBS&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
    },
    {
      id: "7",
      name: "Carrinho Organizador Multiuso 3 Prateleiras Com Rodinhas/Estante/Fruteira (Preto)",
      imagem: "https://m.media-amazon.com/images/I/51nDroosQUL._AC_SX425_.jpg",
      preco: "179,90",
      link: "https://www.amazon.com.br/dp/B0BTK7FYXL/?coliid=I302XSHJHWF6OD&colid=27PP7WJ0HPNBS&ref_=list_c_wl_lv_ov_lig_dp_it&th=1",
    },
    {
      id: "8",
      name: "Kit Organizador para Cozinha Armário Prateleira Aramado Armazenamento Xícaras Porta Pratos Cesto 7 Un - Branco",
      imagem: "https://m.media-amazon.com/images/I/61rHKuKQQfL._AC_SX522_.jpg",
      preco: "138,99",
      link: "https://www.amazon.com.br/dp/B092RH9TVW/?coliid=I2KBH4317SOL7R&colid=27PP7WJ0HPNBS&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
    },
    {
      id: "9",
      name: "FRITADEIRA ELÉTRICA SEM ÓLEO AIR FRYER 4L GAABOR 1400W DIGITAL TOUCH TECNOLOGIA CYCLONE 360 127V BRANCA",
      imagem: "https://m.media-amazon.com/images/I/41t0jNeu1bL._AC_SX522_.jpg",
      preco: "340,41",
      link: "https://www.amazon.com.br/dp/B0BS4FFRB7/?coliid=I1AX8GJQ65EYDF&colid=27PP7WJ0HPNBS&psc=1&ref_=list_c_wl_lv_ov_lig_dp_it",
    },
    {
      id: "10",
      name: "Jogo de Lençol Casal 4 Peças 140 Fios Realce Premium Masoala",
      imagem: "https://m.media-amazon.com/images/I/71uwvQW16fL._AC_SX679_.jpg",
      preco: "122,90",
      link: "https://www.amazon.com.br/Len%C3%A7ol-Casal-Realce-Premium-Masoala/dp/B082P46VQJ/ref=sr_1_27?crid=1CDE1UJF9DC0D&keywords=jogo+de+cama+casal&qid=1699130728&sprefix=jogo+de+cama%2Caps%2C199&sr=8-27&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
    },
    {
      id: "11",
      name: "Batedeira planetária Electrolux potente capacidade 5L 750W 12 velocidades função pulsar massa pesada 220v",
      imagem: "https://m.media-amazon.com/images/I/51P8Zt4dsSL._AC_SX522_.jpg",
      preco: "369,90",
      link: "https://www.amazon.com.br/Batedeira-Planet%C3%A1ria-Electrolux-Experience-EKM30/dp/B0B4KQPSTH/ref=sr_1_3?crid=2N01OWPR9Z8FL&keywords=batedeira+planetaria+220v&qid=1699131172&sprefix=batedeira+planetaria%2Caps%2C237&sr=8-3&ufe=app_do%3Aamzn1.fos.4bb5663b-6f7d-4772-84fa-7c7f565ec65b",
    },
  ];

  return (
    <>
      <header className="header">
        <img src={logo} alt="" />
      </header>
      <div className="banner">
        <img src={banner} alt="" className="banner__img" />
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

        <p className="list__description">
          Caso faça a compra de algum produto avisar a gente, para o produto ser
          retirado da lista.
        </p>
      </div>

      <div className="container">
        <ul>
          {product.map((product) => (
            <li key={product.id}>
              <div className="product__info">
                <div className="product__image-wrapper">
                  <a href="">
                    <img src={product.imagem} alt="" />
                  </a>
                </div>
                <div className="product__title">
                  <a href={product.link}>{product.name}</a>
                </div>

                <div className="product__value">
                  <p>R$ {product.preco}</p>
                </div>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="button">Ver</button>
                </a>
              </div>
            </li>
          ))}

          <li>
            <div className="product__info">
              <div className="product__image-wrapper">
                <img src={imagemSurpresa} alt="" />
              </div>
              <div className="product__title">
                <a href="">
                  uma surpresa preparada com carinho para todos que nos amam
                </a>
              </div>

              <div className="product__value">
                <p>R$ ?????</p>
              </div>
              <ButtonEffect />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
