import logo from '../../assets/logo_welbex.png';
import telegram from '../../assets/telegram.svg';
import viber from '../../assets/viber.svg';
import whatsapp from '../../assets/whatsapp.svg';
import './Header.css';

export const Header = () => {
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='header-navigation'>
                    <img className='logo' src={logo} alt='Welbex' />
                    <nav>
                        <ul className='header-menu'>
                            <li><a href='/#'>Услуги</a></li>
                            <li><a href='/#'>Виджеты</a></li>
                            <li><a href='/#'>Интеграции</a></li>
                            <li><a href='/#'>Кейсы</a></li>
                            <li><a href='/#'>Сертификаты</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='header-contacts'>
                    <a href='tel:75555555555'>+7 555 555-55-55</a>
                    <ul className='header-socials-networks  header-menu'>
                        <li><a href='/#'><img src={telegram} alt='telegram'/></a></li>
                        <li><a href='/#'><img src={viber} alt='viber'/></a></li>
                        <li><a href='/#'><img src={whatsapp} alt='whatsapp'/></a></li>
                    </ul>
                </div>
            </div>
            <div className='header-description'>
                крупный интегратор CRM в Росcии и ещё 8 странах
            </div>
        </header>
    )
}
