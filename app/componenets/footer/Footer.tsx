import FooterContact from "./FooterContact";

const Footer = () => {
    return (
        <footer className="sm:flex bg-white">
            <div className="flex justify-center flex-wrap content-center bg-white max-w-6xl mx-auto px-4 py-2 sm:w-1/2">
                <p className=" text-gray-500 ">© 2023 Todos los derechos reservados</p>
            </div>
            <div className="flex justify-center flex-wrap content-center bg-black py-2 sm:w-1/2">
                <FooterContact />
            </div>
        </footer>
    );
}

export default Footer;