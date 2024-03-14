import React from 'react';

import "../styles/aboutPage.css";
import Glitch from "../img/glitch2.mp4";
import Navigation from "../components/Navigation";

function About() {
    return (
        <div className="about-page">
            <div className="video-background-about">
                <video autoPlay muted loop className="video-about">
                    <source src={Glitch} type="video/mp4"/>
                </video>
                <div className="video-overlay"></div>
            </div>
            <Navigation></Navigation>
            <h1 className="about-title">Ciele bakalárskej práce</h1>

            <table className="objectives-table">
                <tbody>
                <tr>
                    <td>
                        <h2>Rozobrať sociálne inžinierstvo</h2>
                        <p>Text popisujúci obsah a ciele časti práce venovanej rozboru sociálneho inžinierstva.</p>
                    </td>
                    <td>
                        <h2>Simulovať hrozby sociálneho inžinierstva</h2>
                        <p>Text popisujúci obsah a ciele časti práce venovanej simulácii hrozieb sociálneho inžinierstva.</p>
                    </td>
                    <td>
                        <h2>Zvýšiť povedomie o sociálnom inžinierstve</h2>
                        <p>Text popisujúci obsah a ciele časti práce venovanej zvyšovaniu povedomia o sociálnom inžinierstve.</p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default About;
