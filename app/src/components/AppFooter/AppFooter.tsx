import i18n from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import gb from '../../asset/icon/gb.svg';
import it from '../../asset/icon/it.svg';
import ew_logo from '../../asset/img/ew-logo-small.png';
import './AppFooter.css';


function AppFooter() {
    const { t } = useTranslation();

    const onChangeLanguage = () => {
        if (i18n.language.startsWith('en'))
            i18n.changeLanguage('it');
        else if (i18n.language.startsWith('it'))
            i18n.changeLanguage('en');
        else
            console.warn("Language not supported");
    }

    return (
        <div className="footer-container">
            <a href="https://www.energyweb.org"><img src={ew_logo} alt="EW logo" /></a>
            <div className="text-center">{t("FOOTER.LEGAL")}</div>
            <div>©2021</div>
            <div className="d-flex align-items-center">
                <a className="mr-2" href="https://github.com/TendTo">TendTo</a>
                <a href="https://github.com/TendTo/EW-showcase">
                    <i className="fa fa-2x fa-github"></i>
                </a>
            </div>
            <img onClick={onChangeLanguage} className="language-icon" src={i18n.language?.startsWith('it') ? gb : it} alt={i18n.language?.startsWith('it') ? gb : it + "flag"} />
        </div>
    );
}

export default AppFooter;
