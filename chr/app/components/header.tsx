import Image from "next/image";
import Logo from "@/branding/chr.jpg";

export default function Header() {
    return(
        <header className="global-header">
            <div className="logo">
                <Image src={Logo} alt="Castleford Hedgehog Rescue logo"/>
            </div>
        </header>
    );
}