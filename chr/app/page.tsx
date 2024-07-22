import Image from "next/image";
import HomeHero from "@/branding/hedgehog-hero.jpg"
import { MoveDown } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image src={HomeHero} alt="Hero image of a hedgehog"/>
      </section>
      <section className="donate">
        
      </section>
      <section className="mission">
        <div className="section-content">
          <h2>Our mission</h2>
          <hr/>
          <p>At Castleford Hedgehog Rescue, our mission is to ensure that every hedgehog has the opportunity to live a safe and full life. We are dedicated to protecting, and rescuing hedgehogs that are injured, or in dangerous situations in our local area.</p>
        </div>
      </section>
    </main>
  );
}
