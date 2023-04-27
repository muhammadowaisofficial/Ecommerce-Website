import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className='lg:flex align-middle gap-[30px] px-[60px] py-[60px] bg-black'>
      <div className='md:w-1/4'>
        <h1 className='text-white font-bold text-2xl mb-[20px] border-l-blue-600 border-l-[6px] pl-[10px]'>About Us</h1>
        <Image src='/Logo.webp'  alt="Footer Logo" width={120} height={120} />
        <p className='text-gray-600 pr-[40px] mt-[20px]'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread</p>
      </div>
      <div className='md:w-1/4'>
        <h1 className='text-white font-bold text-2xl mt-[20px] border-l-blue-600 border-l-[6px] pl-[10px]'>Useful Links</h1>
        <ul className='text-gray-600 pt-[20px] '>
            <li><Link href="/" className='hover:text-white'>Home</Link></li>
            <li><Link href="#" className='hover:text-white'>Syllabus</Link></li>
            <li><Link href="#" className='hover:text-white'>Explore</Link></li>
            <li><Link href="#" className='hover:text-white'>About</Link></li>
            <li><Link href="#" className='hover:text-white'>Contact</Link></li>
        </ul>
      </div>
      <div className='md:w-1/4'>
        <h1 className='text-white font-bold text-2xl mt-[20px] border-l-blue-600 border-l-[6px] pl-[10px]'>Follow Us</h1>
        <ul className='text-gray-600 pt-[20px] '>
            <li><Link href="#" className='hover:text-white'>Facebook</Link></li>
            <li><Link href="#" className='hover:text-white'>Linkedin</Link></li>
            <li><Link href="#" className='hover:text-white'>Twitter</Link></li>
            <li><Link href="#" className='hover:text-white'>Youtube</Link></li>
            <li><Link href="#" className='hover:text-white'>Youtube</Link></li>
        </ul>
      </div>
      <div className='md:w-1/4'>
        <h1 className='text-white font-bold text-2xl mt-[20px] border-l-blue-600 border-l-[6px] pl-[10px]'>Contact Us</h1>
        <ul className='text-gray-600 pt-[20px] '>
            <li><Link href="tel:+923323745184" className='hover:text-white'>+92 332 3745184</Link></li>
            <li><Link href="mailto:muhammadowais19999@gmail.com" className='hover:text-white'>muhammadowais19999@gmail.com</Link></li>
            <li><Link href="#" className='hover:text-white'>Karachi, Pakistan</Link></li>
        </ul>
      </div>
    </div>
    <div className='md:flex md:justify-between md:px-[40px] py-[10px] text-center'>
      <p className='font-bold'>All Rights Reserved © | <Link className='hover:text-blue-600' href='https://github.com/muhammadowaisofficial' target='_blank'>Muhammad Owais</Link></p>
      <div>
        <Link className='hover:text-blue-600' href='/'>Legals </Link> |
        <Link className='hover:text-blue-600' href='/'> Terms of use </Link> |
        <Link className='hover:text-blue-600' href='/'> Privacy Policy</Link>
      </div>  
    </div>
    </>
  )
}

export default Footer
