import item1 from '../assets/img/items-1.png';
import item2 from '../assets/img/items-2.png';
export default function Section3() {
    return (
        <section className="pt-5 bg-[url(./assets/img/place-1.jpg)] bg-cover bg-center w-full md:h-[350px]  h-full relative">
             <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(to bottom right, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 100%) 100%)',
        }}
            ></div>
            <div className='relative'>
            <div className="text-center  flex flex-col gap-3 mb-6">
                <div>
                <p className="text-white font-bold">
                    over
                </p>
                    <h1 className="font-bold font-poppins text-yellow-100 text-4xl">100</h1>
                    </div>
                <h1 className="font-bold font-poppins text-yellow-300 text-4xl uppercase">the heroes ready to be a winner</h1>
                <p className="font-semibold font-poppins text-white text-1xl capitalize">dont scare to your enemy</p>
            </div>
            <div className="">
                <div className="md:flex-row flex flex-col lg:w-1/2 w-full md:gap-5 gap-0  bg-blue-900 mx-auto items-center py-2 px-4 text-center">
                    <div className="md:w-[300px] w-[200px] h-[200px] md:h-[100px] ">
                        <img src={item1} alt="" />
                </div>
                <h1 className="font-poppins text-white md:my-0 my-10">League of Legends (LoL) menyajikan sejumlah item yang strategis dan beragam, memberikan kedalaman taktis yang mendalam dalam setiap pertandingan.</h1>
                    <div className="md:w-[400px] w-[200px] h-[200px] md:h-[100px] ">
                        <img src={item2} alt="" className="w-full h-full object-cover" />
                    </div>
                    </div>
            </div>
            </div>
        </section>
    )
}