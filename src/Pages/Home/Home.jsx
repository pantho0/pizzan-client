import Banner from '../../../public/banner.jpg'

const Home = () => {
    return (
        <div>
            {/* Slider Codes */}
            <div className="carousel w-full h-[80vh]">

                <div id="slide1" className="carousel-item relative w-full ">
                <img src={Banner} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute top-1/2 transform -translate-y-1/2 left-20 text-white'>
                        <h5 className='text-xl text-[#EB0029] italic font-bold'>Welcome to PIZZAN</h5>
                        <h2 className='text-6xl font-extrabold w-1/2'>GET BEST QUALITY FOOD FROM US</h2>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={Banner} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={Banner} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={Banner} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;