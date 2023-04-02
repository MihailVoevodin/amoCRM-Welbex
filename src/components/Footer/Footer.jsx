import './Footer.css';
import telegram from "../../assets/telegram.svg";
import viber from "../../assets/viber.svg";
import whatsapp from "../../assets/whatsapp.svg";

export const Footer = () => {
    return (
        <footer>
            <div className='footer-content'>
                <div className='footer-about'>
                    <div>
                        <span className='footer-title'>О компании</span>
                        <ul className='footer-list'>
                            <li><a href='/#'>Партнёрская программа</a></li>
                            <li><a href='/#'>Вакансии</a></li>
                        </ul>
                    </div>
                    <nav>
                        <span className='footer-title'>Меню</span>
                        <div className='footer-menu__content'>
                            <ul className='footer-list'>
                                <li><a href='/#'>Расчёт стоимости</a></li>
                                <li><a href='/#'>Услуги</a></li>
                                <li><a href='/#'>Виджеты</a></li>
                                <li><a href='/#'>Интеграции</a></li>
                                <li><a href='/#'>Наши клиенты</a></li>
                            </ul>
                            <ul className='footer-list'>
                                <li><a href='/#'>Кейсы</a></li>
                                <li><a href='/#'>Благодарственные письма</a></li>
                                <li><a href='/#'>Сертификаты</a></li>
                                <li><a href='/#'>Блог на Youtube</a></li>
                                <li><a href='/#'>Вопрос / Ответ</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className='footer-contacts'>
                    <span className='footer-title'>Контакты</span>
                    <a href='tel:75555555555'>+7 555 555-55-55</a>
                    <ul className='footer-socials-networks'>
                        <li><a href='/#'><img src={telegram} alt='telegram'/></a></li>
                        <li><a href='/#'><img src={viber} alt='viber'/></a></li>
                        <li><a href='/#'><img src={whatsapp} alt='whatsapp'/></a></li>
                    </ul>
                    <div className='footer-address'>Москва, Путевой проезд<br className='footer-address__line'/> 3с1, к 902</div>
                </div>
            </div>
            <div className='footer-policy'>
                ©WELBEX 2022. Все права защищены.
                <div><a href='/#'>Политика конфиденциальности</a></div>
            </div>
        </footer>
    )
}
