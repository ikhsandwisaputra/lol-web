import { useState, useEffect } from 'react';
import gambar1 from '../assets/img/1.jpg';
import gambar2 from '../assets/img/2.jpg';
import gambar3 from '../assets/img/3.jpg';
import gambar4 from '../assets/img/4.jpg';

export default function Header() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [gambar1, gambar2, gambar3, gambar4]; // Ganti dengan daftar gambar yang ingin digunakan

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Ganti 5000 dengan interval waktu (dalam milidetik) antara perpindahan gambar

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <header>
          <div
              className='w-full h-screen flex items-center justify-start relative bg-cover bg-top'
              style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          >
         <div className='absolute inset-0' style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 90%) 100%)' }}></div>
        <div className='h-[500px] md:mt-20 lg:ml-36 md:ml-10 ml-0 md:w-1/2 w-full p-5 md:p-0 flex flex-col gap-8 relative z-10 md:text-start text-center'>
          <h1 className='font-bold capitalize md:text-3xl text-2xl text-yellow-600'>
            League of Legends
          </h1>
          <h1 className='uppercase font-bold text-yellow-300 md:text-5xl text-3xl font-poppins'>
            League of Legends <br />
            Game 2023
          </h1>
          <button className='rounded-full font-poppins font-bold text-yellow-950 px-6 py-3 uppercase bg-yellow-300 max-w-[150px] md:mx-0 mx-auto hover:bg-yellow-200 transition-all duration-150'>
            Download
          </button>
          <div className='flex flex-col items-center md:block'>
            <p className='md:text-3xl text-2xl text-yellow-400 uppercase font-poppins font-semibold mb-3'>
              Play now and be a champion
            </p>
            <div className='w-[50px] h-[2px] bg-blue-200'></div>
          </div>
          <p className='md:w-[600px] text-center md:text-start w-full font-normal font-poppins text-yellow-200'>
            Explore the Rift: Immerse Yourself in the Epic World of League of
            Legends! Join the Battle for Valoran and Experience the Ultimate
            Gaming Adventure.{' '}
          </p>
        </div>
      </div>
    </header>
  );
};


