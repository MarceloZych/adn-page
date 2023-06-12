'use client'

import Image from "next/image";

const NarbarLogo = () => {
    return (
        <div>
            <Image className="cursor-pointer" src="/img/logo_text.png" height={95} width={95} alt="adn_logo" />
        </div>
    );
}

export default NarbarLogo 