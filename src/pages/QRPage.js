import React, { useState } from 'react';
import { Popup } from 'reactjs-popup';
import "../styles/qrPage.css";

function QRPage() {
    const [meno, setMeno] = useState('');
    const [priezvisko, setPriezvisko] = useState('');
    const [rodneCislo, setRodneCislo] = useState('');
    const [telefon, setTelefon] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const handleChangeMeno = (e) => {
        const value = e.target.value;
        const regex = /^[a-zA-ZáäčďéíľĺňóôŕšťúýžÁÄČĎÉÍĽĹŇÓÔŔŠŤÚÝŽ\s]*$/;
        if (value === '' || regex.test(value)) {
            setMeno(value);
        }
    };

    const handleChangePriezvisko = (e) => {
        const value = e.target.value;
        const regex = /^[a-zA-ZáäčďéíľĺňóôŕšťúýžÁÄČĎÉÍĽĹŇÓÔŔŠŤÚÝŽ\s]*$/;
        if (value === '' || regex.test(value)) {
            setPriezvisko(value);
        }
    };

    const handleChangeRodneCislo = (e) => {
        const value = e.target.value;
        const regex = /^[0-9/]*$/;
        if (value === '' || regex.test(value)) {
            setRodneCislo(value);
        }
    };

    const formatRodneCislo = (value) => {
        const formattedValue = value.replace(/\D/g, '');
        if (formattedValue.length > 6) {
            return formattedValue.slice(0, 6) + '/' + formattedValue.slice(6, 10);
        } else {
            return formattedValue;
        }
    };

    const handleChangeTelefon = (e) => {
        let value = e.target.value;
        value = value.replace(/[^\d+]/g, '');
        if (value.length <= 12) {
            setTelefon(value);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };

    const closeModalAndRedirect = () => {
        setModalOpen(false);
        window.location.href = '/';
    };

    return (
        <div className="qr-page">
            <div className="sutaz">
                <h1 className="h-sutaz">Sútaž - MacBook Pro</h1>
                <p className="p-sutaz">spoločnost elfa v spolupráci s Technickou univerzitou v Košiciach, rozdáva 3x
                    MacBook Pro!</p>
                <p className="p-sutaz">Stačí vyplniť dotazník nižšie a budete automaticky zapojený do sútaže</p>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="meno">Meno:</label>
                        <input type="text" id="meno" value={meno} onChange={handleChangeMeno}
                               placeholder="Janko"/>
                        <p>Vyplňte svoje meno.</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="priezvisko">Priezvisko:</label>
                        <input type="text" id="priezvisko" value={priezvisko} onChange={handleChangePriezvisko}
                               placeholder="Hraško"/>
                        <p>Vyplňte svoje priezvisko.</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rodne_cislo">Rodné číslo:</label>
                        <input type="text" id="rodne_cislo" value={formatRodneCislo(rodneCislo)}
                               onChange={handleChangeRodneCislo}  placeholder="123456/7890"/>
                        <p>Vyplňte svoje rodné číslo.</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefon">Telefónne číslo:</label>
                        <input type="tel" id="telefon" value={telefon} onChange={handleChangeTelefon}
                               placeholder="+4210917273856"/>
                        <p>Vyplňte svoje telefonné číslo v tvare +421xxxxxxxxx.</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bydlisko">Bydlisko:</label>
                        <input type="text" id="bydlisko"  placeholder="Hrašková 9, Košice"/>
                        <p>Vyplňte svoje bydlisko.</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email"  placeholder="hraško.janko@gmail.com"/>
                        <p>Vyplňte svoj email.</p>
                    </div>
                    <button type="submit">Odoslať</button>
                </form>
            </div>
            <Popup
                open={modalOpen}
                onClose={closeModalAndRedirect}
                modal
                nested
            >
                {close => (
                    <div className='modal'>
                        <div className='content'>
                            <p>Ak ste vyplnili tieto údaje, tak s najväčšou pravdepodobnosťou, ste boli oklamani! Žiadna
                                sútaž neexistuje, je to len moja bakalárska práca o sociálnom inžinierstve! Ak sa o tom
                                chcete dozvedieť viac, kliknite na tlačidlo!</p>
                            <p className="p-red">Žiadne údaje neboli ukradnuté!</p>
                            <div className="button-container">
                                <button onClick={closeModalAndRedirect}>Sociálne inžinierstvo</button>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
            <div className="sutaz">
                <p className="p-sutaz-dole">Pri výhre Vás budeme kontaktovať pomocou vašíc údajov!</p>
            </div>
        </div>
    );
}

export default QRPage;
