import React from 'react';
import Header from "../components/Header"
import MediaWithText from "../components/MediaWithText";
import Glitch from "../img/glitch.mp4";
import Girl from "../img/video1.mp4";
import Hacker from "../img/video2.mp4";
import Defend from "../img/video3.mp4"
import Scam from "../img/podvod.PNG"

import "../styles/welcomePage.css";


function WelcomePage() {

    return (
        <div className="welcome-page">
            <div className="video-background">
                <video autoPlay muted loop className="video">
                    <source src={Glitch} type="video/mp4"/>
                </video>
                <div className="video-overlay"></div>
            </div>
            <Header/>
            <h1 className="welcome-header">Sociálne ižninierstvo</h1>
            <div className="article-1">
                <MediaWithText
                    text=" Sociálne inžinierstvo, známe tiež aj pod názvom sociotechnika, predstavuje sofistikovaný spôsob útoku, vďaka ktorému sociálny inžinieri vedia vďaka manipulácii, zastrašovania či nadviazania dôvery získať prístup k citlivým informáciám od svojich obetí k svojmu osobnému prospechu.
                     Podľa viacerých odborníkov, ktorí viedli výskum v oblasti sociálneho inžinierstva, je sociálne inžinierstvo umenie oklamať človeka pre získanie jeho osobných údajov."
                    nadpis="Čo je to sociálne inžinierstvo?"
                    mediaUrl={Girl}
                    mediaType="video"
                    textPosition="right"
                />
            </div>
            <MediaWithText
                text="Sociálne inžinierstvo funguje na princípe budovania dôvery s obetou. Útočník si získava informácie o obeti pomocou verejne dostupných zdrojov (sociálne siete, weby). Pri dostatku informáciu, útočník oslovi obeť s vymyslenou zámienkou či príbehom, kde vyžije získane informácie. Následne si buduje dôveru s obetou, ktorú nakoniec využije aby dosiahol svoj cieľ.
                Útočník týmto dosiahne napríklad citlivé údaje, finančný zisk alebo nejakú činnosť ktorou môže byť pripojenie zariadenia ako je infikované USB."
                nadpis="Ako to funguje?"
                mediaUrl={Hacker}
                mediaType="video"
                textPosition="left"
            />
            <h1 className="header">Typy útokov</h1>
            <div className="attack-table">
                <div className="attack-row">
                    <div className="attack-cell">
                        <h3>Phishing</h3>
                        <p>Útok, kde útočník sa pokúša získať citlivé informácie od obete pomocou klamlivých správ alebo
                            e-mailov.</p>
                    </div>
                    <div className="attack-cell">
                        <h3>Spear Phishing</h3>
                        <p>Špecifická forma phishingu, kde útočník cielene cieľuje konkrétnu osobu alebo organizáciu s
                            personalizovanými správami.</p>
                    </div>
                </div>
                <div className="attack-row">
                    <div className="attack-cell">
                        <h3>Quid pro Quo</h3>
                        <p>Útok, kde útočník ponúka nejaký druh odmeny alebo zvýhodnenia výmenou za citlivé informácie
                            od obete.</p>
                    </div>
                    <div className="attack-cell">
                        <h3>Pharming</h3>
                        <p>Útok, kde útočník preusmeruje obete na falošné webové stránky s cieľom zhromaždiť ich citlivé
                            údaje.</p>
                    </div>
                </div>
                <div className="attack-row">
                    <div className="attack-cell">
                        <h3>Scareware</h3>
                        <p>Typ malvéru, ktorý sa snaží vydávať sa za legitímny softvér, ktorý vytvára falošné varovania
                            o bezpečnosti s cieľom vyvolať strach u používateľov a nútiť ich k nákupu.</p>
                    </div>
                    <div className="attack-cell">
                        <h3>Pharming</h3>
                        <p>Útok, kde útočník preusmeruje obete na falošné webové stránky s cieľom zhromaždiť ich citlivé
                            údaje.</p>
                    </div>
                </div>
            </div>

            <h1 className="header">Ako sa brániť</h1>
            <MediaWithText
                text="Neexistuje žiadne dostupne riešenie ktoré by poskytlo bezpečnosť pred sociálnym inžinierstvom. Najlepším spôsobom ako bojovať proti sociálnemu inžinierstvu je prostredníctvom vzdelania, ktoré sa môže vykonávať na širokej verejnosti alebo v rámci firmy. Základné koncepty, ktoré by mohli pomôcť pre lepšiu kybernetickú bezpečnosť v rámci sociálneho inžinierstva vieme rozdeliť na dve skupiny a to pre jednotlivcov a organizácie. No azda najdôležitejším faktorom sú silné hesla, ktoré by mali byť rôznorodé, pre každý systém či sociálnu sieť, a ktoré nikdy nebudú zdieľané."
                nadpis="Dá sa brániť?"
                mediaUrl={Defend}
                mediaType="video"
                textPosition="right"
            />

            <MediaWithText
                text="Neexistuje žiadne dostupne riešenie ktoré by poskytlo bezpečnosť pred sociálnym inžinierstvom. Najlepším spôsobom ako bojovať proti sociálnemu inžinierstvu je prostredníctvom vzdelania, ktoré sa môže vykonávať na širokej verejnosti alebo v rámci firmy. Základné koncepty, ktoré by mohli pomôcť pre lepšiu kybernetickú bezpečnosť v rámci sociálneho inžinierstva vieme rozdeliť na dve skupiny a to pre jednotlivcov a organizácie. No azda najdôležitejším faktorom sú silné hesla, ktoré by mali byť rôznorodé, pre každý systém či sociálnu sieť, a ktoré nikdy nebudú zdieľané."
                nadpis="Ako vyzerá podvod?"
                mediaUrl={Scam}
                mediaType="none"
                textPosition="left"
            />
            <div className="image-container">
                <img src={Scam} className="media-pic" alt="media"/>
            </div>
        </div>
    );
}

export default WelcomePage;
