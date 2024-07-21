import React from 'react';
import s from './HeroBlock.module.css';
import phone from '../../images/phone-tent.svg';

const HeroBlock = () => {
  return (
    <section className={s.section}>
      <div
        style={{
          maxWidth: '630px',
          width: '70%',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            position: 'relative',
          }}
        >
          <h1 className={s.title}>
            Ремонт <span className={s.styledTitle}>ТЕНТА</span>
          </h1>{' '}
          <svg
            height="20"
            width="100%"
            style={{ position: 'absolute', bottom: 0, left: 0 }}
          >
            <line
              x1="10"
              y1="15"
              x2="calc(100% - 10px)"
              y2="15"
              stroke="black"
              strokeWidth="0.1"
            />
            <circle cx="10" cy="15" r="0.5" fill="black" />
            <circle cx="calc(100% - 10px)" cy="15" r="0.5" fill="black" />
          </svg>
        </div>

        <h2 className={s.subTitle}>ЗА 15 МИНУТ, БЕЗ ОЧЕРЕДИ!!!</h2>
        <div className={s.linkWrapper}>
          <a href="tel:+380503207522" className={s.link}>
            <img
              src={phone}
              width={19}
              height={19}
              className={s.img}
              alt="arrowR logo"
            />
            +380503207522
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
