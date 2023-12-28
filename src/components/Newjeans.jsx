export default function Newjeans() {
    return (
      <>
   <section className='w-full h-[550px] relative'>
  <div className='absolute inset-0 bg-radial-gradient'></div>
  <div className='bg-[url(./assets/img/nj-2.jpg)] bg-cover bg-center h-full flex items-center justify-center'>
    <div className='w-[350px] h-[350px] flex items-center flex-col justify-center text-white'>
      <img src='/src/assets/img/nj-logo.png' alt='nj-logo' />
      <h1 className="text-center font-bold uppercase text-4xl mt-4">Gods <br/><span className="font-semibold capitalize"> New Jeans,</span></h1>
                        <h2 className="text-center text-lg font-semibold">League Of Legends</h2>
                        <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-full font-bold">Play Now On Spotify</button>
    </div>
  </div>
</section>
<style jsx>{`
  .bg-radial-gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.8) 100%);
  }
`}</style>
        </>
    )
}
