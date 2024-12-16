
import React from 'react'
import Link from 'next/link';

import { IoIosArrowDown } from "react-icons/io";
import { IoMdSwap } from 'react-icons/io';
import { FaHeart } from "react-icons/fa";
import { MdLocalGasStation } from "react-icons/md";
import {  icons } from 'lucide-react';
import { Users } from 'lucide-react';

const HeroSection = () => {
  return (
<div className='Main-container w-full max-w-[1440px] h-auto bg-[#F6F7F9]'>

<div className='container-of-cars grid grid-rows-1 grid-cols-1 md:grid-cols-2 place-items-center p-10'>
  {/* CAR 1 */}
  <div className='car1 w-full md:w-[640px] h-auto md:h-[360px] bg-[#54A6FF] rounded-xl relative'>
    <img src="/HeroSectionAssets/bigcarone.png" alt="Car1" className='absolute bottom-2 left-1/2 transform -translate-x-1/2' />
    <div className='text-car text-[#FFFFFF] w-full md:w-[284px] h-auto md:h-[224px] absolute top-6 left-6 space-y-4'>
      <p className='font-semibold text-[28px] md:text-[32px] leading-snug'>The Best Platform For Car Rental</p>
      <p className='font-medium text-base'>Ease of doing a car rental safely and reliably. Ofcourse at a low price.</p>
      <button className='bg-[#3563E9] px-[20px] w-[120px] h-[44px] rounded'>Rent Now</button>
    </div>
  </div>
  {/* CAR 2 */}
  <div className='car2 w-full md:w-[640px] h-auto md:h-[360px] bg-[#3563E9] rounded-xl relative'>
    <img src="/HeroSectionAssets/bigcartwo.png" alt="Car2" className='absolute bottom-2 left-1/2 transform -translate-x-1/2' />
     <div className='text-car text-[#FFFFFF] w-full md:w-[284px] h-auto md:h-[224px] absolute top-6 left-6 space-y-4'>
       <p className='font-semibold text-[28px] md:text-[32px] leading-snug'>Easy way to rent a car at low price</p>
        <p className='font-medium text-base'>Providing cheap car rental services and safe and comfortable facilities.</p>
         <button className='bg-[#54A6FF] px-[20px] w-[120px] h-[44px] rounded'>Rent Now</button>
    </div>
  </div>
</div>
{/* PICKUP AND DROP OFF SECTION */}
<div className="w-full max-w-[1440px] mx-auto flex items-center justify-center p-10 gap-12 flex-col sm:flex-row">
  {/* Pick-Up Section */}
  <div className="w-full sm:w-[582px] h-[132px] bg-white px-6 py-4 rounded-lg shadow-md">
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
  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
    <IoMdSwap className="text-white text-2xl" />
  </div>

  {/* Drop-Off Section */}
  <div className="w-full sm:w-[582px] h-[132px] bg-white px-6 py-4 rounded-lg shadow-md">
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
<div className="w-full flex justify-center">
  <div className="card-container max-w-[1312px] w-full h-[452px]">
    <div className="flex w-full h-[44px] text-base font-semibold justify-between items-center px-4">
      <p className="text-[#90A3BF]">Popular Car</p>
      <p className="text-[#3563E9]">View All</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full h-[388px] px-4">
      {/* Card 1 */}
      <div className="card1 bg-white rounded-lg shadow-md p-4 relative">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">Koenigsegg</h3>
            <p className="text-sm text-[#6B6B6B]">Sport</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id2.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>
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
      <div className="card2 bg-white rounded-lg shadow-md p-4 relative">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">Nissan GT-R</h3>
            <p className="text-sm text-[#6B6B6B]">Sport</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id1.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>
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
      <div className="card3 bg-white rounded-lg shadow-md p-4 relative">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">Rolls-Royce</h3>
            <p className="text-sm text-[#6B6B6B]">Sedan</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id3.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>
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
            <Users />
            <span>2 People</span>
          </div>
        </div>
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

      {/* Card 4 */}
      <div className="card4 bg-white rounded-lg shadow-md p-4 relative">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">Nissan GT-R</h3>
            <p className="text-sm text-[#6B6B6B]">Sport</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id4.png"
            alt="car3"
            className="w-[200px] object-contain"
          />
        </div>
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
            <Users />
            <span>2 People</span>
          </div>
        </div>
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
    </div>
  </div>
</div>


{/* RECOMMENDATIONS CAR */}
{/* ALL CARDS */}
<div className="w-full flex justify-center">
  <div className="card-container w-full max-w-[1312px] h-[452px]">
    <div className='flex w-full h-[44px] text-base font-semibold gap-[1076px] items-center'>
      <p className='text-[#90A3BF] w-[132px] h-[48px]'>Recommendations</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full h-[388px] gap-4">
      
      {/* Card 1 */}
      <div className="card1 w-full sm:w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">All New Rush</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id5.png"
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
            <Users /> <span>6 People</span>
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
      <div className="card2 w-full sm:w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
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
      <div className="card3 w-full sm:w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">All New Terios</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id7.png"
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

      {/* Card 4 */}
      <div className="card4 w-full sm:w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">CR- V</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id8.png"
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
            <Users /><span>2 People</span>
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
    </div>
  </div>
</div>


{/* ALL CARDS */}
<div className="w-[1440px] flex justify-center">
  <div className="card-container w-[1312px] h-[452px]">
    <div className="grid grid-cols-4 w-[1312px] h-[388px]">
      {/* Card 1 */}
      <div className="card1 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">MG ZX Exclusive</h3>
            <p className="text-sm text-[#6B6B6B]">Hatchback</p>
          </div>
          <button className="text-red-500 text-xl">
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
      <div className="card2 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">New MG ZS</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-red-500 text-xl">
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
<div className="card1 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
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
       
        {/* Card 4 */}
      <div className="card4 w-[304px] h-[388px] bg-white rounded-lg shadow-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold text-[#131313]">New MG ZX</h3>
            <p className="text-sm text-[#6B6B6B]">SUV</p>
          </div>
          <button className="text-red-500 text-xl">
            <FaHeart />
          </button>
        </div>

        {/* Image */}
        <div className="flex items-center justify-center my-4 absolute inset-0 mb-12">
          <img
            src="/HeroSectionAssets/id12.png"
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
    </div>
  </div>

</div>


  <div className='flex justify-center'>
  <Link href='/CategoryCarRent'><button className='bg-[#3563E9] text-white w-[156px] h-44px] px-3 py-3 rounded-lg'>Show More Car</button></Link>
</div>
  
   
  
 
     
  
</div>



    
  )
}

export default HeroSection
