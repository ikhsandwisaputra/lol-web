import logolol from '../assets/images/lol.png';
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center flex-col md:flex-row justify-center space-x-4 mb-4 md:mb-0">
          {/* Logo League of Legends */}
          <img
            src={logolol}
            alt="League of Legends Logo"
            className="h-10"
          />
          {/* Nama dan Hak Cipta */}
          <div className="text-center">
            <p className="font-bold">League of Legends</p>
            <p>&copy; 2023 Riot Games, Inc. All rights reserved.</p>
          </div>
        </div>
        {/* Navigasi Footer */}
        <nav className="mb-4 md:mb-0 flex md:block">
          <a href="#" className="block md:inline-block text-center md:text-left hover:underline mr-4">Home</a>
          <a href="#" className="block md:inline-block text-center md:text-left hover:underline mr-4">Champions</a>
          <a href="#" className="block md:inline-block text-center md:text-left hover:underline mr-4">Items</a>
          <a href="#" className="block md:inline-block text-center md:text-left hover:underline">About</a>
        </nav>
      </div>
    </footer>
    )
}