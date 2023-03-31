import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import PortofolioCard from '../components/portofolio-card'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>
            Natura 360: Tienda Macrobiótica en Tres Ríos para una vida saludable
          </title>
          <meta
            name="description"
            content="En Natura 360 te ofrecemos productos macrobióticos y orgánicos para llevar una vida saludable en Tres Ríos. ¡Descubre nuestro amplio catálogo ahora!"
          />
          <meta
            property="og:title"
            content="Natura 360: Tienda Macrobiótica en Tres Ríos para una vida saludable"
          />
          <meta
            property="og:description"
            content="En Natura 360 te ofrecemos productos macrobióticos y orgánicos para llevar una vida saludable en Tres Ríos. ¡Descubre nuestro amplio catálogo ahora!"
          />
        </Head>
        <Navigation></Navigation>
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width max-content-container">
              <div className="home-heading-container">
                <h1 className="home-text">
                  Nuestra meta es ofrecerte los mejores suplementos naturales 
                </h1>
                <span className="home-text01">
                  Contamos con suplementos naturales de los laboratorios más
                  reconocidos a nivel nacional e internacional.
                </span>
                <a
                  href="https://wa.link/5c1xuk"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-primary button-primary button-lg button"
                >
                  Envía un mensaje a nuestro WhatsApp
                </a>
              </div>
              <div className="home-gallery">
                <div className="home-container1">
                  <img
                    alt="image"
                    src="https://dragoscloud.b-cdn.net/natura360/7ab006_4e4eed2d7f764cdeae7bf313f6b4a933_mv2%20(1).jpeg"
                    className="home-image"
                  />
                </div>
                <div className="home-container2">
                  <img
                    alt="image"
                    src="https://dragoscloud.b-cdn.net/natura360/IMG_1857.jpeg"
                    className="home-image1"
                  />
                  <img
                    alt="image"
                    src="https://dragoscloud.b-cdn.net/natura360/Foto%20de%20macro2.jpg"
                    className="home-image2"
                  />
                </div>
                <div className="home-container3">
                  <img
                    alt="image"
                    src="https://dragoscloud.b-cdn.net/natura360/Harinas%20y%20más.jpg"
                    className="home-image3"
                  />
                  <div className="home-container4">
                    <img
                      alt="image"
                      src="https://dragoscloud.b-cdn.net/natura360/Fachada%20Natura%203.png"
                      className="home-image4"
                    />
                    <img
                      alt="image"
                      src="https://dragoscloud.b-cdn.net/natura360/Fachada%20Natura%204.png"
                      className="home-image5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-services section-container">
            <div className="home-max-width1 max-content-container">
              <div className="home-heading-container1">
                <div className="home-text-container">
                  <span className="home-text02">Nuestros servicios</span>
                  <h2 className="home-text03">
                    Te ofrecemos gran variedad de suplementos naturales para que
                    cuides tu cuerpo y le des un giro a tu vida de 360
                  </h2>
                </div>
              </div>
              <div className="home-container5">
                <div className="home-feature-card">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M896 256h-192v-128c0-35.2-28.8-64-64-64h-256c-35.2 0-64 28.8-64 64v128h-192c-70.4 0-128 57.6-128 128v512c0 70.4 57.6 128 128 128h768c70.4 0 128-57.6 128-128v-512c0-70.4-57.6-128-128-128zM384 128h256v128h-256v-128zM768 704h-192v192h-128v-192h-192v-128h192v-192h128v192h192v128z"></path>
                  </svg>
                  <h2 className="home-text04">
                    <span>Productos naturales</span>
                    <br></br>
                  </h2>
                  <span className="home-text07">
                    Suplementos 100% naturales
                  </span>
                </div>
                <div className="home-feature-card1">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M960 608l-288 288-96-96-64 64 160 160 352-352z"></path>
                    <path d="M448 768h320v-115.128c-67.22-39.2-156.308-66.11-256-74.26v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h448v-64z"></path>
                  </svg>
                  <h2 className="home-text08">
                    <span>Atención </span>
                    <br></br>
                    <span>personalizada</span>
                    <br></br>
                  </h2>
                  <span className="home-text13">
                    Te asesoramos según tus necesidades
                  </span>
                </div>
                <div className="home-feature-card2">
                  <svg viewBox="0 0 1024 1024" className="home-icon05">
                    <path d="M956.29 804.482l-316.29-527.024v-213.458h32c17.6 0 32-14.4 32-32s-14.4-32-32-32h-320c-17.6 0-32 14.4-32 32s14.4 32 32 32h32v213.458l-316.288 527.024c-72.442 120.734-16.512 219.518 124.288 219.518h640c140.8 0 196.73-98.784 124.29-219.518zM241.038 640l206.962-344.938v-231.062h128v231.062l206.964 344.938h-541.926z"></path>
                  </svg>
                  <h2 className="home-text14">
                    <span>Productos</span>
                    <br></br>
                    <span>cuidado </span>
                    <span>
                      personal
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                  </h2>
                  <span className="home-text20">
                    También tu apariencia es importante para nosotros 
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="nosotros" className="home-about section-container">
            <div className="home-max-width2 max-content-container">
              <div id="n" className="home-text-container1">
                <span className="home-text21">nosotros</span>
                <h2 className="home-text22">MACROBIÓTICA NATURA 360</h2>
                <span className="home-text23">
                  <span>
                    Nace de la necesidad que tienen las personas de encontrar
                    una tienda que les ayude a cuidar tanto su salud cómo su
                    apariencia.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    El nombre de Natura 360 surge de la idea de que podemos
                    ayudar a las personas a cuidarse naturalmente su cuerpo y
                    salud, desde adentro hacía afuera.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Por eso nosotros ofrecemos suplementos naturales, productos
                    para el cuidado personal y productos de belleza que son
                    producidos en laboratorios con reconocimiento a nivel
                    mundial y nacional.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Nuestra Macrobiótica es única porque ofrecemos asesoría
                    personalizada por la amplia experiencia que tenemos en el
                    sector de la salud.
                  </span>
                </span>
              </div>
              <div className="home-image-container">
                <img
                  alt="image"
                  src="https://dragoscloud.b-cdn.net/natura360/Fachada%20Natura%202.png"
                  className="home-image6"
                />
              </div>
            </div>
          </div>
          <div id="productos" className="home-portofolio section-container">
            <div className="home-max-width3 max-content-container">
              <div className="home-text-container2">
                <span className="home-text34">PRODUCTOS</span>
                <h2 className="home-text35">
                  Echale un vistazo a una parte de los suplementos naturales que
                  tenemos para ti y tu familia.
                </h2>
                <span className="home-text36">
                  <span>
                    Si no encuentras algún producto que buscabas
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="home-text39">
                    Consúltanos directamente a nuestro WhatsApp  
                  </span>
                  <br></br>
                </span>
                <a
                  href="https://wa.link/5c1xuk"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-primary1 button-secondary button-lg button"
                >
                  <span>
                    <span className="home-text42">Escríbenos</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text44">al</span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text46">WhatsApp</span>
                  </span>
                </a>
              </div>
              <div className="home-tab-selector-cards-container">
                <PortofolioCard
                  image_src="https://dragoscloud.b-cdn.net/natura360/MAGNESIO%201.png"
                  rootClassName="portofolio-card-root-class-name"
                ></PortofolioCard>
                <PortofolioCard
                  image_src="https://dragoscloud.b-cdn.net/natura360/Desodorantes%20naturales.png"
                  project_title="A brand-new advertising idea"
                  rootClassName="portofolio-card-root-class-name5"
                ></PortofolioCard>
                <PortofolioCard
                  image_src="https://dragoscloud.b-cdn.net/natura360/Colesterol%202.png"
                  project_title="Coca-Cola Summer Concept Campaign - 2021"
                  rootClassName="portofolio-card-root-class-name4"
                ></PortofolioCard>
                <PortofolioCard
                  image_src="https://dragoscloud.b-cdn.net/natura360/Gastritis%20y%20Colitis.png"
                  project_title="Ad Campaign - I love you as much as I love Nutella"
                  rootClassName="portofolio-card-root-class-name3"
                ></PortofolioCard>
                <PortofolioCard
                  image_src="https://dragoscloud.b-cdn.net/natura360/Protector%20Solar.png"
                  project_title="Coca-Colla Next Door Campaign - conceptual"
                  rootClassName="portofolio-card-root-class-name2"
                ></PortofolioCard>
                <PortofolioCard
                  image_src="https://dragoscloud.b-cdn.net/natura360/Fotoprotectores.png"
                  project_title="Starbucks secret is a smile when you get your latte"
                  rootClassName="portofolio-card-root-class-name1"
                ></PortofolioCard>
              </div>
            </div>
            <a
              href="https://wa.link/5c1xuk"
              target="_blank"
              rel="noreferrer noopener"
              className="home-primary2 button-secondary button-lg button"
            >
              <span>
                <span className="home-text48">Escríbenos</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text50">al</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text52">WhatsApp</span>
              </span>
            </a>
          </div>
          <div className="home-banner section-container">
            <div className="home-max-width4 max-content-container">
              <span className="home-text53">Hacemos envíos a todo el país</span>
              <h2 className="home-text54">Solicita tu envío por WhatsApp</h2>
              <span className="home-text55">
                <span>
                  Nosotros ofrecemos la facilidad de coordinar tu compra y envío
                  desde WhatsApp. 
                </span>
                <br></br>
                <span>
                  Solamente tienes que escribirnos, te damos la asesoría
                  personalizada y coordinamos el envío de tu producto natural.
                </span>
                <br></br>
              </span>
              <a
                href="https://wa.link/5c1xuk"
                target="_blank"
                rel="noreferrer noopener"
                className="home-primary3 button-lg button-secondary-white button"
              >
                Solicita tu envío por WhatsApp
              </a>
            </div>
          </div>
        </main>
        <div id="contacto" className="home-footer section-container">
          <div className="max-content-container">
            <div className="home-top-part">
              <div className="home-links-container">
                <div className="home-contact-container">
                  <span className="home-text60">Contáctanos</span>
                  <span className="home-text61">
                    <span>Plaza Altamira, Carretera vieja a Cartago</span>
                    <br></br>
                    <span>Local #2 </span>
                    <br></br>
                    <span className="home-text66">WhatsApp:</span>
                    <span> +506 8455-7360</span>
                    <br></br>
                    <span className="home-text69">Correo:</span>
                    <span> info@natura360cr.com</span>
                    <br></br>
                    <span className="home-text72">Horario:</span>
                    <span> Lunes a Sábado de 9:00 a.m a 7:00 p.m</span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-subscribe-container">
                <span className="home-text75">
                  Síguenos en nuestras redes sociales
                </span>
                <div className="home-social-bar">
                  <a
                    href="https://www.instagram.com/natura360cr/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="home-icon07"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/natura360cr"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="home-icon09"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="home-separator"></div>
          <footer className="home-max-width6 max-content-container">
            <img
              alt="image"
              src="https://dragoscloud.b-cdn.net/natura360/Logo%20ajustado%20(1).png"
              className="home-image7"
            />
            <span className="home-text76">
              <span>
                All rights recived
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text78">Macrobiótica Natura 360</span>
              <span className="home-text79"> </span>
              <span>
                | Designed by
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text81">Drago&apos;s House</span>
            </span>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero {
            position: relative;
            padding-top: 128px;
          }
          .home-max-width {
            margin-top: var(--dl-space-space-threeunits);
          }
          .home-heading-container {
            flex: 1;
            display: flex;
            max-width: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text01 {
            color: var(--dl-color-scheme-black);
            font-size: 18px;
            text-align: center;
            font-family: Poppins;
            line-height: 1.44;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-primary {
            font-family: Poppins;
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: none;
            background-color: rgb(185, 204, 24);
          }
          .home-gallery {
            width: 100%;
            display: flex;
            grid-gap: 20px;
            align-items: stretch;
          }
          .home-container1 {
            width: 25%;
            align-self: stretch;
          }
          .home-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-container2 {
            width: 25%;
            display: flex;
            grid-gap: 20px;
            align-items: stretch;
            flex-direction: column;
          }
          .home-image1 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-container3 {
            width: 50%;
            display: flex;
            grid-gap: 20px;
            flex-direction: column;
          }
          .home-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-container4 {
            width: 100%;
            display: flex;
            grid-gap: 20px;
          }
          .home-image4 {
            flex: 1;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-image5 {
            flex: 1;
            width: 214px;
            height: 208px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-services {
            flex: 1;
            height: 100%;
            display: flex;
            align-self: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: #f1f2ea;
          }
          .home-max-width1 {
            flex-direction: column;
          }
          .home-heading-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text02 {
            color: #3dccc7;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text03 {
            font-family: Poppins;
          }
          .home-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            margin: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-feature-card {
            width: 100%;
            margin: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-scheme-white);
          }
          .home-icon {
            fill: #3dccc7;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .home-text04 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text07 {
            color: rgb(153, 153, 153);
            text-align: center;
            font-family: Poppins;
          }
          .home-feature-card1 {
            width: 100%;
            margin: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-scheme-white);
          }
          .home-icon02 {
            fill: #3dccc7;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .home-text08 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text13 {
            color: rgb(153, 153, 153);
            text-align: center;
            font-family: Poppins;
          }
          .home-feature-card2 {
            width: 100%;
            margin: var(--dl-space-space-unit);
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-scheme-white);
          }
          .home-icon05 {
            fill: #3dccc7;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
          }
          .home-text14 {
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            font-family: Poppins;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text20 {
            color: rgb(153, 153, 153);
            text-align: center;
            font-family: Poppins;
          }
          .home-about {
            background-color: var(--dl-color-scheme-white);
          }
          .home-max-width2 {
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text-container1 {
            flex: 1;
            width: 40%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-text21 {
            color: rgb(61, 204, 199);
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text22 {
            font-family: Poppins;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text23 {
            color: var(--dl-color-scheme-black80);
            font-family: Poppins;
            line-height: 26px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-image6 {
            flex: 1;
            width: 572px;
            height: 584px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-portofolio {
            padding-bottom: 86px;
            background-color: #f1f2ea;
          }
          .home-max-width3 {
            flex-direction: column;
          }
          .home-text-container2 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text34 {
            color: rgb(61, 204, 199);
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text35 {
            text-align: center;
            font-family: Poppins;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text36 {
            color: var(--dl-color-scheme-black80);
            text-align: center;
            font-family: Poppins;
            line-height: 26px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-text39 {
            font-style: normal;
            font-weight: 700;
          }
          .home-primary1 {
            color: var(--dl-color-scheme-white);
            text-decoration: none;
            background-color: rgb(185, 204, 24);
          }
          .home-text42 {
            font-family: Poppins;
          }
          .home-text44 {
            font-family: Poppins;
          }
          .home-text46 {
            font-family: Poppins;
          }
          .home-tab-selector-cards-container {
            width: 100%;
            display: grid;
            grid-row-gap: 40px;
            grid-column-gap: 20px;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(3, 1fr);
          }
          .home-primary2 {
            color: var(--dl-color-scheme-white);
            text-decoration: none;
            background-color: rgb(185, 204, 24);
          }
          .home-text48 {
            font-family: Poppins;
          }
          .home-text50 {
            font-family: Poppins;
          }
          .home-text52 {
            font-family: Poppins;
          }
          .home-banner {
            background-color: var(--dl-color-scheme-white);
          }
          .home-max-width4 {
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text53 {
            color: var(--dl-color-scheme-darkblue);
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text54 {
            color: var(--dl-color-scheme-darkblue);
            text-align: center;
            font-family: Poppins;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text55 {
            color: var(--dl-color-scheme-darkblue);
            text-align: center;
            line-height: 26px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-primary3 {
            color: var(--dl-color-scheme-white);
            font-family: Poppins;
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: none;
            background-color: rgb(185, 204, 24);
          }
          .home-footer {
            background-color: #f1f2ea;
          }
          .home-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-links-container {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-contact-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text60 {
            color: #b9cc18;
            font-family: Poppins;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text61 {
            font-family: Poppins;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text66 {
            font-style: normal;
            font-weight: 700;
          }
          .home-text69 {
            font-style: normal;
            font-weight: 700;
          }
          .home-text72 {
            font-style: normal;
            font-weight: 700;
          }
          .home-subscribe-container {
            flex: 0 0 auto;
            width: 35%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text75 {
            color: #b9cc18;
            font-family: Poppins;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-social-bar {
            width: 100%;
            height: 74px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-link {
            display: contents;
          }
          .home-icon07 {
            fill: #3dccc7;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link1 {
            display: contents;
          }
          .home-icon09 {
            fill: #3dccc7;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .home-max-width6 {
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image7 {
            width: 100px;
            object-fit: cover;
          }
          .home-text76 {
            align-self: center;
            font-family: Poppins;
          }
          .home-text78 {
            font-style: normal;
            font-weight: 700;
          }
          .home-text79 {
            font-weight: 700;
          }
          .home-text81 {
            font-style: normal;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .home-heading-container {
              max-width: 100%;
              margin-bottom: 42px;
            }
            .home-gallery {
              flex-direction: column;
            }
            .home-container1 {
              width: 100%;
            }
            .home-container2 {
              width: 100%;
              flex-direction: row;
            }
            .home-container3 {
              width: 100%;
              align-items: stretch;
            }
            .home-max-width2 {
              flex-direction: column;
            }
            .home-text-container1 {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-image-container {
              width: 100%;
            }
            .home-image6 {
              width: 100%;
            }
            .home-tab-selector-cards-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 767px) {
            .home-text {
              font-size: 30px;
            }
            .home-container2 {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .home-image1 {
              height: 100%;
            }
            .home-container4 {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .home-image4 {
              width: 100%;
            }
            .home-image5 {
              width: 100%;
            }
            .home-tab-selector-cards-container {
              grid-template-columns: 1fr;
            }
            .home-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .home-subscribe-container {
              width: 100%;
            }
            .home-social-bar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-max-width {
              margin-top: var(--dl-space-space-unit);
            }
            .home-max-width1 {
              position: relative;
            }
            .home-container5 {
              height: auto;
              margin: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-end;
            }
            .home-top-part {
              align-items: center;
              flex-direction: column;
            }
            .home-links-container {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-contact-container {
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .home-social-bar {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-max-width6 {
              flex-direction: column;
            }
            .home-image7 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text76 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
