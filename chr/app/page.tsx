import Image from "next/image";
import Script from "next/script";
import HomeHero from "@/branding/hedgehog-hero.jpg"
import LeftHedgehog from "@/branding/hedgehog-side-1.jpeg";
import RightHedgehog from "@/branding/hedgehog-side-2.jpg";
import { MoveDown } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image src={HomeHero} alt="Hero image of a hedgehog"/>
      </section>
      <section className="donate">
        <div className="donation-info">
          <h2>Every donation is appreciated</h2>
          <hr/>
          <p>No matter the amount you donate, it is appreciated more than you will ever know. Each donation plays a vital step is stabilising the hedgehog population, and giving them another chance at life.</p>
        </div>
        <div className="donation-link">
          <a href="https://www.paypal.com/donate/?hosted_button_id=D3SSPYWCDPT3W">
            <button className="donation-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paypal" viewBox="0 0 16 16">
                <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91q.57-.403.993-1.005a4.94 4.94 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.7 2.7 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.7.7 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016q.326.186.548.438c.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.87.87 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.35.35 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32z"/>
              </svg>
              <p>Donate</p>
            </button>
          </a>
        </div>
      </section>
      <section className="mission">
        <div className="section-content">
          {/* <Image src={LeftHedgehog} alt="Image of a hedgehog curled up in a person's hand"/> */}
          <div className="mission-info">
            <h2>Our mission</h2>
            <hr/>
            <p>
              At Castleford Hedgehog Rescue, our mission is rooted in compassion and dedication to protecting one of Britain&apos;s most beloved and vulnerable creatures. We provide sanctuary for injured, orphaned, and sick hedgehogs, offering them the medical care and rehabilitation they need to recover and thrive. Our work begins with rescuing these animals from dangerous situations, ensuring they receive the appropriate medical treatment, nutrition, and a safe environment to heal. Our ultimate goal is to rehabilitate these hedgehogs and release them back into the wild, where they can contribute to the local ecosystem.
            </p>
            <p>
              Beyond direct rescue and rehabilitation, our mission extends to education and community involvement. We believe public awareness is crucial for the long-term survival of hedgehogs in our region. Through workshops, school programs, and community events, we educate the public about the importance of hedgehog conservation, the challenges these animals face, and how individuals can make a difference. By fostering a community that values and protects hedgehogs, we aim to create a safer environment for these creatures and ensure that future generations can continue to enjoy their presence in our gardens and countryside.
            </p>
          </div>
          <Image src={RightHedgehog} alt="Image of a hedgehog peaking through some bushes"/>
        </div>
      </section>
    </main>
  );
}
