export default function Section2() {
  return (
    <section className='w-full bg-[url(./assets/img/5.jpg)] bg-cover bg-no-repeat bg-center md:h-[350px] h-full  relative'>
      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(to top, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 100%) 100%)',
        }}
      ></div>
      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-10 w-full transform -translate-y-32  relative justify-items-center z-[9]'>
        <img
          src='/src/assets/img/jinx.png'
          alt=''
          className='md:w-[450px] md:h-[600px] w-full h-full object-cover  mx-auto '
        />
        <div className='w-full flex flex-col items-center justify-center'>
          <h1
            className='uppercase text-center font-bold text-pink-400 md:text-5xl text-3xl font-poppins'
            style={{
              background: `linear-gradient(to left, #8A2BE2, #FF1493)`,
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Pick your heroes <br />
          </h1>
          <h1
            className='uppercase text-center font-bold text-pink-400 md:text-3xl text-3xl font-poppins'
            style={{
              background: `linear-gradient(to left, #8A2BE2, #FF1493)`,
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            100 more heroes
          </h1>
        </div>
        <img
          src='/src/assets/img/ahri.png'
          alt=''
          className='md:w-[450px] md:h-[400px] w-[full] h-full object-cover'
        />
      </div>

      {/* </div> */}
      {/* Konten atau elemen lain pada bagian ini */}
    </section>
  );
}
