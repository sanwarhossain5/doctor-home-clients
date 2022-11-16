import React from 'react';
import doc1 from '../../assets/image/doc1.webp'
import doc2 from '../../assets/image/doc2.jpeg'
import doc3 from '../../assets/image/doc3.jpeg'
import doc4 from '../../assets/image/doc-4.webp'


const Bannar = () => {
    return (
        <div >
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">

                    <img style={{ "height": "600px" }} className='w-full ' src={doc1} alt="" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img style={{ "height": "600px" }} className='w-full' src={doc2} alt="" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img style={{ "height": "600px" }} className='w-full ' src={doc3} alt="" />

                </div>
                <div id="item4" className="carousel-item w-full">
                    <img style={{ "height": "600px" }} className='w-full ' src={doc4} alt="" />

                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

        </div>
    );
};

export default Bannar;

