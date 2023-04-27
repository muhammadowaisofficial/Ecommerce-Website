import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
        <div>
            <Image src="/Logo.webp" alt="Panverse" width={120} height={120}/>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Header;