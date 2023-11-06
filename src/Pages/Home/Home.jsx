import Banner from '../../../public/banner.jpg'
import Chef1 from '../../../public/chef1.jpg'
import Chef2 from '../../../public/chef2.jpg'
import Chef3 from '../../../public/chef3.jpg'
import Chef4 from '../../../public/chef4.jpg'

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
            {/* Promotional Offers */}
            <div>
                
            </div>
            {/*Expert Chefs*/}
            <div className='mt-20 max-w-7xl mx-auto'>
                <h2 className='text-4xl font-bold text-center'>Meet Our Expert Chefs</h2>
                <div className='flex flex-col justify-center md:flex-row gap-4'>
                    {/** CHef 1 */}
                    <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                        <img src={Chef1} alt="profile-picture" />
                    </div>
                    <div class="p-6 text-center">
                        <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Joseph Carter
                        </h4>
                        <p class="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                        Senior Chef

                        </p>
                    </div>
                    <div class="flex justify-center p-6 pt-2 gap-7">
                        <a
                            href="#facebook"
                            class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                        >
                            <i class="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#twitter"
                            class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                        >
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#instagram"
                            class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                        >
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                    {/** CHef 2 */}
                    <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                        <img src={Chef2} alt="profile-picture" />
                    </div>
                    <div class="p-6 text-center">
                        <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Natalie Paisley
                        </h4>
                        <p class="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                        Senior Chef

                        </p>
                    </div>
                    <div class="flex justify-center p-6 pt-2 gap-7">
                        <a
                            href="#facebook"
                            class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                        >
                            <i class="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#twitter"
                            class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                        >
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#instagram"
                            class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                        >
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                    {/** CHef 3 */}
                    <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                        <img src={Chef3} alt="profile-picture" />
                    </div>
                    <div class="p-6 text-center">
                        <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Marion Romeo
                        </h4>
                        <p class="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                        Senior Chef
                        </p>
                    </div>
                    <div class="flex justify-center p-6 pt-2 gap-7">
                        <a
                            href="#facebook"
                            class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                        >
                            <i class="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#twitter"
                            class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                        >
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#instagram"
                            class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                        >
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                    {/** CHef 4 */}
                    <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                    <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                        <img src={Chef4} alt="profile-picture" />
                    </div>
                    <div class="p-6 text-center">
                        <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            Joseph Carter
                        </h4>
                        <p class="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
                        Senior Chef
                        </p>
                    </div>
                    <div class="flex justify-center p-6 pt-2 gap-7">
                        <a
                            href="#facebook"
                            class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text"
                        >
                            <i class="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#twitter"
                            class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text"
                        >
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#instagram"
                            class="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text"
                        >
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;