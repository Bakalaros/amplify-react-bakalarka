import React, {useState} from 'react';
import "../styles/gitPage.css";
import {Popup} from "reactjs-popup";

function Git() {

    const [modalOpen, setModalOpen] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };
    const closeModalAndRedirect = () => {
        setModalOpen(false);
        window.location.href = '/';
    };

    return (
        <div className="git-body">
            <div className="header-wrapper">
                <div className="git-header">
                    KPI FEI TUKE
                </div>
            </div>
            <div className="login">
                <header className="login-header">
                    <div className="drop-menu-login">
                        <p>Slovenčina</p>
                    </div>
                    <h1>Sign in to your account</h1>
                </header>


                <div className="form-git">
                    <div className="form-wrapper">
                        <form className="form-login" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username" className="form-text-git">Prihlasovacie meno</label>
                                <input tabIndex="1" id="username" className="form-control" name="username"
                                        type="text"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-text-git">Heslo</label>
                                <input tabIndex="2" id="password" className="form-control" name="password"
                                       type="password"
                                />
                            </div>
                            <div className="form-group-settings">
                                <div id="form-option">
                                    <div className="checkbox">
                                        <label>
                                            <input tabIndex="3" id="rememberMe" name="rememberMe" type="checkbox"
                                                   checked/> Zapamätať si ma
                                        </label>
                                    </div>
                                </div>
                                <div className="">
                                </div>
                            </div>
                            <div id="form-buttons" className="form-group">
                                <input type="hidden"/>
                                <input tabIndex="4" className="login-button" name="login"
                                       type="submit" value="Prihlásenie"/>
                            </div>
                        </form>
                        <Popup
                            open={modalOpen}
                            onClose={closeModalAndRedirect}
                            modal
                            nested
                        >
                            {close => (
                                <div className='modal'>
                                    <div className='content'>
                                        <p>Ak ste vyplnili tieto údaje, tak s najväčšou pravdepodobnosťou, ste o nich prišli, kedže sa nejedna o pravú stránku, je to len moja bakalárska práca o sociálnom inžinierstve! Ak sa o tom
                                            chcete dozvedieť viac, kliknite na tlačidlo!</p>
                                        <p className="p-red">Žiadne údaje neboli ukradnuté!</p>
                                        <div className="button-container">
                                            <button onClick={closeModalAndRedirect}>Sociálne inžinierstvo</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Git;
