import { Button } from "../components/Button";
import { JeremyImage } from "../components/JeremyImage";
import { Logo } from "../components/Logo";
import { PhoneImage } from "../components/PhoneImage";

export default function Home() {
  return (
    <div className="relative py-8 px-4 bg-light">
      <div className="flex items-center justify-between">
        <Logo />
        <Button intent="secondary" />
      </div>
      <div>
        <div>
          <img src="/pattern-curved-line-1.svg" alt="" />
          <h1>A
            &nbsp;<strong>super solution</strong>
            &nbsp;for your
            &nbsp;<strong>business.</strong>
          </h1>
        </div>
        <p>Our marketing and sales automations help you scale your outreach to get more leads for your company.</p>
        <Button />
        <PhoneImage />
      </div>
      <div className="uppercase">
        <div>
          <p className="font-bold">2k+</p>
          <p>companies</p>
        </div>
        <div>
          <p className="font-bold">8</p>
          <p>languages</p>
        </div>
        <div>
          <p className="font-bold">1.2m</p>
          <p>leads</p>
        </div>
      </div>
      <div className="relative z-10 bg-dark text-white">
        <div>
          <JeremyImage />
          <img src="pattern-curved-line-2.svg" alt="" />
        </div>
        <h1>It just
          &nbsp;<strong>works.</strong>
        </h1>
        <p>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</p>
        <p>jeremy robinson</p>
        <p>cmo, fylo</p>
      </div>
      <footer className="relative z-10">
        <Logo />
        <p>Copyright - Suite</p>
        <div>
          <img src="/icon-facebook.svg" alt="facebook icon" />
          <img src="/icon-twitter.svg" alt="twitter icon" />
          <img src="/icon-instagram.svg" alt="instagram icon" />
        </div>
      </footer>
      <div className="absolute bottom-0 left-0 w-full h-[420px] bg-cream md:h-[640px] xl:h-[464px]"></div>
    </div>
  )
}