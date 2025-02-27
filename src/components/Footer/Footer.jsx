import React from 'react';
import s from './Footer.module.css';
import logo from '../../images/logo-tent.svg';
import pointFooter from '../../images/pointerFooter.png';
import phoneFooter from '../../images/Phonefooter.png';
// import { isMobile } from 'constants/useMediaQueries';
// import Navigation from 'components/navigate/Navigation';
// import { useTranslation } from 'react-i18next';
import email from '../../images/email.png';
// import SocialNetwork from 'components/socialNetwork/SocialNetwork';

const Footer = () => {
  // const mobileScreen = isMobile();
  // const { t } = useTranslation();
  return (
    <footer className={s.footerSection}>
      <div className={s.logoWrapper}>
        <a href={'/'}>
          <img
            className={s.footerLogo}
            src={logo}
            width={265}
            height={73}
            alt="logo repair tent"
          />
        </a>
        <p className={s.subtitle}>
          Доверьте свои тенты профессионалам ремонта! Мы гарантируем высокое
          качество работы и безупречный результат.
        </p>
      </div>

      <div className={s.footerContactWrapper}>
        <p className={s.footerAdress}>
          <img src={pointFooter} alt="adress" /> Мічуріна вул. 5, Слобожанський,
          Дніпропетровська область, 52005
        </p>
        <a className={s.footerTel} href="tel:+380503207522">
          <img src={phoneFooter} width={32} height={32} alt="tell " />
          +380503207522
        </a>

        <a className={s.emailLink} href="mailto:alex243660alex@gmail.com">
          <img src={email} width={32} height={32} alt="email logo" />
          alex243660alex@gmail.com
        </a>
        {/* <SocialNetwork /> */}
      </div>

      {/* <Navigation t={t} footer={true} /> */}
    </footer>
  );
};

export default Footer;
