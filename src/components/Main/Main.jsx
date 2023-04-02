import './Main.css';

export const Main = () => {
    return (
        <main>
            <div className='main-container'>
                <div className='main-left'>
                    Зарабатывайте больше <br/><span>с WELBEX</span>
                    <div className='main-left__text'>Развиваем и контролируем<br/>продажи за вас</div>
                </div>
                <div className='main-right'>
                    <div className='main-right__title'>Вместе с <span>бесплатной консультацией</span> мы дарим:</div>
                    <div className='main-right__content'>
                        <div className='main-right__text'>виджеты <span>30 готовых решений</span></div>
                        <div className='main-right__text'>dashboard <span>с показателями вашего бизнеса</span></div>
                        <div className='main-right__text'>skype аудит <span>отдела продаж и CRM системы</span></div>
                        <div className='main-right__text'>35 дней <span>использования CRM</span></div>
                    </div>
                    <div className='main-right__content-small'>
                        <div className='main-right__text'>skype аудит</div>
                        <div className='main-right__text'>30 виджетов</div>
                        <div className='main-right__text'>dashboard</div>
                        <div className='main-right__text'>месяц amocrm</div>
                    </div>
                </div>
            </div>
            <div className='main-button'>
                <button className='btn'>Получить консультацию</button>
            </div>
        </main>
    )
}
