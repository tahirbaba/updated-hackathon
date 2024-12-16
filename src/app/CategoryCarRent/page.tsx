import React from "react";
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSwap } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { MdLocalGasStation } from "react-icons/md";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Users } from "lucide-react";

const Category = () => {
  return (
    <section className="Main-container max-w-[1440px] min-h-screen bg-[#F6F7F9] mx-auto flex flex-col justify-center items-center">
        <Navbar />
    <div className="w-[1440px] h-[1600px] bg-[#F6F7F9] flex">
        
    <div className="side-menu"> 
  <div className="w-full lg:w-[360px] h-auto lg:h-[1600px] bg-white shadow-md p-6">
    {/* Type Section */}
    <div className="mb-8">
      <h3 className="text-sm font-semibold text-[#6B6B6B] mb-4">TYPE</h3>
      <div className="space-y-8">
        {[
          { label: "Sport", count: 10, checked: true },
          { label: "SUV", count: 12, checked: true },
          { label: "MPV", count: 16 },
          { label: "Sedan", count: 20 },
          { label: "Coupe", count: 14 },
          { label: "Hatchback", count: 14 },
        ].map(({ label, count, checked }, index) => (
          <label
            key={index}
            className="flex items-center gap-3 text-base text-[#131313]"
          >
            <input
              type="checkbox"
              defaultChecked={checked}
              className="w-4 h-4 accent-[#3563E9] rounded-sm"
            />
            {label}
            <span className="text-[#6B6B6B]">({count})</span>
          </label>
        ))}
      </div>
    </div>

    {/* Capacity Section */}
    <div className="mb-8">
      <h3 className="text-sm font-semibold text-[#6B6B6B] mb-4">CAPACITY</h3>
      <div className="space-y-8">
        {[
          { label: "2 Person", count: 10, checked: true },
          { label: "4 Person", count: 14 },
          { label: "6 Person", count: 12 },
          { label: "8 or More", count: 16, checked: true },
        ].map(({ label, count, checked }, index) => (
          <label
            key={index}
            className="flex items-center gap-3 text-base text-[#131313]"
          >
            <input
              type="checkbox"
              defaultChecked={checked}
              className="w-4 h-4 accent-[#3563E9] rounded-sm"
            />
            {label}
            <span className="text-[#6B6B6B]">({count})</span>
          </label>
        ))}
      </div>
    </div>

    {/* Price Section */}
    <div>
      <h3 className="text-sm font-semibold text-[#6B6B6B] mb-4">PRICE</h3>
      <div className="space-y-4">
        {/* Slider */}
        <div className="flex items-center">
          <input
            type="range"
            min="0"
            max="100"
            className="w-full h-2 rounded-full bg-gray-200 accent-[#3563E9] appearance-none"
          />
        </div>
        {/* Max Price */}
        <p className="text-sm text-[#131313]">Max. $100.00</p>
      </div>
    </div>
  </div>
</div>

      <div className="right-section">
      <div className="flex items-center justify-center p-6 pt-7 flex-wrap gap-4">  
  {/* Pick-Up Section */}
  <div className="w-full sm:w-[486px] md:w-[450px] h-[132px] bg-white px-6 py-4 rounded-lg shadow-md">
    <div className="flex items-center gap-2">
      <div className="rounded-full bg-blue-300 w-4 h-4 p-1 flex items-center justify-center">
        <div className="rounded-full bg-blue-600 w-2 h-2"></div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800">Pick-Up</h3>
    </div>
    <div className="mt-4 flex justify-between items-center">
      {/* Location */}
      <div>
        <h1 className="text-sm font-extrabold text-[#1A202C] mb-2">Locations</h1>
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium text-[#90A3BF]">Select your city</p>
          <IoIosArrowDown />
        </div>
      </div>
      {/* Date */}
      <div>
        <h1 className="text-sm font-extrabold text-[#1A202C] mb-2">Date</h1>
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium text-[#90A3BF]">Select your date</p>
          <IoIosArrowDown />
        </div>
      </div>
      {/* Time */}
      <div>
        <h1 className="text-sm font-extrabold text-[#1A202C] mb-2">Time</h1>
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium text-[#90A3BF]">Select your time</p>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  </div>

  {/* Mid Arrow */}
  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
    <IoMdSwap className="text-white text-2xl" />
  </div>

  {/* Drop-Off Section */}
  <div className="w-full sm:w-[486px] md:w-[450px] h-[132px] bg-white px-6 py-4 rounded-lg shadow-md">
    <div className="flex items-center gap-2">
      <div className="rounded-full bg-sky-300 w-4 h-4 p-1 flex items-center justify-center">
        <div className="rounded-full bg-sky-500 w-2 h-2"></div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800">Drop-Off</h3>
    </div>
    <div className="mt-4 flex justify-between items-center">
      {/* Location */}
      <div>
        <h1 className="text-sm font-extrabold text-[#1A202C] mb-2">Locations</h1>
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium text-[#90A3BF]">Select your city</p>
          <IoIosArrowDown />
        </div>
      </div>
      {/* Date */}
      <div>
        <h1 className="text-sm font-extrabold text-[#1A202C] mb-2">Date</h1>
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium text-[#90A3BF]">Select your date</p>
          <IoIosArrowDown />
        </div>
      </div>
      {/* Time */}
      <div>
        <h1 className="text-sm font-extrabold text-[#1A202C] mb-2">Time</h1>
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium text-[#90A3BF]">Select your time</p>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  </div>
</div>


        {/* ALL CARDS */}
        <div className="flex justify-center p-5">
  <div className="card-container h-[390px]">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-[388px] gap-10">
      {/* Line 1 */}
      {/* Card 1 */}
      <div className="card1 w-full sm:w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">Koenigsegg</h3>
            <p className="text-sm text-[#6B6B6B]">Sport</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id2.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>90L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/HeroSectionAssets/Manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Users />
            <span>2 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $99.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card2 w-full sm:w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">Nissan GT-R</h3>
            <p className="text-sm text-[#6B6B6B]">Sport</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id1.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>90L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/HeroSectionAssets/Manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Users />
            <span>2 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $80.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>
      
      {/* Card 3 */}
      <div className="card1 w-full sm:w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">Rolls-Royce</h3>
            <p className="text-sm text-[#6B6B6B]">Sedan</p>
          </div>
          <button className="text-xl text-gray-500">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id3.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>70L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/HeroSectionAssets/Manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Users /><span>2 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $96.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

{/* CARD LINE 2 */}
{/* ALL CARDS */}
<div className="flex justify-center p-5">
  <div className="card-container h-[390px] w-full max-w-screen-xl">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-[388px] gap-10">
      {/* Card 1 */}
      <div className="card1 w-full h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">All New Rush</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-xl text-gray-500">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id5.png"
            alt="car4"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>70L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/HeroSectionAssets/Manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Users /><span>6 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $72.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card2 w-full h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">CR-V</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id6.png"
            alt="car5"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>80L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/HeroSectionAssets/Manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Users /><span>6 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $80.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card1 w-full h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">All New Terios</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-xl text-gray-500">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id7.png"
            alt="car6"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>90L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/HeroSectionAssets/Manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Users /><span>6 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $74.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

{/* CARD LINE 3 */}
<div className="flex justify-center p-5">
  <div className="card-container h-[390px]">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-[388px] gap-10">
      {/* Card 1 */}
      <div className="card1 w-full sm:w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">MG ZX Exclusive</h3>
            <p className="text-sm text-[#6B6B6B]">Hatchback</p>
          </div>
          <button className="text-xl text-gray-500">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id9.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>70L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/HeroSectionAssets/Manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Users /><span>4 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $76.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card2 w-full sm:w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">New MG ZS</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-xl text-gray-500">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id10.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>80L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/HeroSectionAssets/Manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Users /><span>6 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $80.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card1 w-full sm:w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">MG ZX Excite</h3>
            <p className="text-sm text-[#6B6B6B]">Hatchback</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id11.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-[#6B6B6B] my-4 absolute bottom-1/4 gap-7">
          <div className="flex items-center gap-1">
            <MdLocalGasStation className="w-4 h-4" />
            <span>90L</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/HeroSectionAssets/Manual.png" alt="Gear" className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-[2px]">
            <Users /><span>4 People</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-center items-center absolute bottom-10 gap-4">
          <div className="w-[116px] h-[44px]">
            <p className="text-lg font-bold text-[#131313]">
              $74.00 <span className="text-sm text-[#6B6B6B]">/day</span>
            </p>
          </div>
          <button className="bg-[#3563E9] text-white w-[114px] h-[44px] text-sm px-4 py-2 rounded-md shadow self-end">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>



<div className='flex justify-center mt-5'> 
  <Link href='/DetailCarRent'>
    <button className='bg-[#3563E9] text-white w-full sm:w-[156px] h-[44px] px-3 py-3 rounded-lg'>
      Show More Car
    </button>
  </Link>
</div>
      </div>
    
    </div>
    <Footer />
    </section>
  );
};

export default Category;