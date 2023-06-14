import React from 'react';
import './Home.css';
import Header from '../../components/header/Header';
import Review from '../../components/review/Review';
import Gallery from '../../components/gallery/Gallery';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';

function Home (){
    const images = [
        {
            id: 1,
            url: img1
        },
        {
            id: 2,
            url: img2
        },
        {
            id: 3,
            url: img3
        }
    ];

    return (
        <div className='container'>
            <Header title='Clear vision starts with us' page='home' height='75vh'/>
            <h1>Our work</h1>
            <div className='line'></div>
            <Gallery images={images}/>
            <Review />
        </div>
    )
}

export default Home;