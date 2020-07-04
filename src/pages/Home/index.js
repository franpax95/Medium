import React from 'react';

import { SectionCard, ClassCard } from '../../components/Card';

import './Home.css';

const Home = () => {
    const onWheel = (e) => {
        e.preventDefault();

        const largeContainerScrollPosition = e.currentTarget.scrollLeft;
        e.currentTarget.scrollTo({
            top: 0,
            left: largeContainerScrollPosition + e.deltaY,
            behaviour: 'smooth' //if you want smooth scrolling
        });
    }

    return (
        <div className="Home">
            <h1 className="maintitle">
                Welcome
                <br />
                <span className="blue">José Antonio!</span>
            </h1>

            <div className="section">
                <h2 className="title">
                    Our better classes
                </h2>
                <div className="content" onWheel={onWheel}>
                    <ClassCard src="/img/physics.jpeg" name="Physics" />
                    <ClassCard src="/img/language.jpeg" name="Language" />
                    <ClassCard to="/class" src="/img/maths.jpeg" name="Maths" />
                    <ClassCard src="/img/english.jpeg" name="English" />
                    <ClassCard src="/img/biology.jpeg" name="Biology" />
                </div>
            </div>

            <div className="protip">
                <label>Protip</label>
                <p>Try to find the explanation of everything</p>
            </div>

            <div className="section">
                <h2 className="title">
                    Games
                </h2>
                <div className="content" onWheel={onWheel}>
                    <SectionCard src="/img/reto-manzanas.jpg" name="Apple Challenge" />
                    <SectionCard src="/img/matematicas.jpg" name="HomeMaths Play" />
                    <SectionCard src="/img/cienciassociales.png" name="Discover the world" />
                    <SectionCard src="/img/ingles.jpg" name="Inglés" />
                </div>
            </div>
        </div>
    );
}

export default Home;