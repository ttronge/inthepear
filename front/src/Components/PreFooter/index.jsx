import React from 'react';
import store from '../../assets/prefooter/store.png';
import box from '../../assets/prefooter/box.png';
import order from '../../assets/prefooter/order.png';
import online_payment from '../../assets/prefooter/online_payment.png';
import './styles.css';

const PreFooter = () => {
  return (
    <article className='container__prefooter'>
      <section className='content__prefooter'>
        <div className='container__column--prefooter'>
          <div className='container__img--prefooter'>
            <img className='img__prefooter' src={store} alt="Imagen logo store prefooter" />
          </div>
          <div className='content__column--prefooter'>
            <h4 className='title__prefooter' >Comprá en nuestra tienda</h4>
            <p className='txt__prefooter'>Podés elegir los productos en cualquiera de nuestras sucursales.</p>
          </div>
        </div>
        <div className='container__column--prefooter'>
          <div className='container__img--prefooter'>
            <img className='img__prefooter' src={order} alt="Imagen logo order prefooter" />
          </div>
          <div className='content__column--prefooter'>
            <h4 className='title__prefooter' >Comprá desde nuestra web</h4>
            <p className='txt__prefooter'>Elegí tus productos a traves de nuestra página.</p>
          </div>
        </div>
        <div className='container__column--prefooter'>
          <div className='container__img--prefooter'>
            <img className='img__prefooter' src={online_payment} alt="Imagen logo online payment prefooter" />
          </div>
          <div className='content__column--prefooter'>
            <h4 className='title__prefooter' >Medios de pago</h4>
            <p className='txt__prefooter'>Podés elegir con cual medio de pago abonar tus compras.</p>
          </div>
        </div>
        <div className='container__column--prefooter'>
          <div className='container__img--prefooter'>
            <img className='img__prefooter' src={box} alt="Imagen logo delivey box prefooter" />
          </div>
          <div className='content__column--prefooter'>
            <h4 className='title__prefooter' >Envió de productos</h4>
            <p className='txt__prefooter'>Recibí tus productos en la comodidad de tu hogar.</p>
          </div>
        </div>
      </section>
    </article>
  );
}

export default PreFooter;
