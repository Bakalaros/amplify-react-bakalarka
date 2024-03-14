import React from 'react';
import Header from "../components/Header";
import "../styles/noPage.css";

function NoPage() {
    return (
        <div className="page">
            <div className="header-noPage">
                <Header />
            </div>
            <div className="error-message">
                <h1 className="error">Error 404</h1>
                <p className="error-text">Ups! Stránka, ktorú hľadáte, sa nenašla.</p>
            </div>
        </div>
    );
}

export default NoPage;
