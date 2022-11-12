import { Button } from "../components/Button";
import { JeremyImage } from "../components/JeremyImage";
import { Logo } from "../components/Logo";
import { PhoneImage } from "../components/PhoneImage";

export default function Home() {
  return (
    <div className="relative bg-light">
      <div className="max-w-[1110px] mx-auto bg-light pt-8 md:pt-10 xl:pt-14">
        <div className="px-4 md:px-10 xl:px-0">
          <div className="flex items-center justify-between">
            <Logo />
            <Button intent="secondary" />
          </div>
          <div className="mt-16 md:mt-20 xl:flex">
            <div className="md:grid md:grid-rows-[auto_auto_1fr] md:grid-cols-[63%_37%] xl:w-3/4 xl:grid-cols-[60%_30%]">
              <h1 className="text-4xl md:text-6xl xl:text-7xl md:row-start-1 md:col-start-1 md:col-span-2 self-end z-10 md:max-w-[80%] md:mt-24 xl:max-w-[90%]">
                A
                <strong> super
                  <span className="relative font-bold before:bg-[url('/pattern-curved-line-1.svg')] before:absolute before:-top-7 before:h-10 before:w-full before:bg-contain before:bg-no-repeat md:before:-top-12"> solution </span>
                </strong>
                for your
                <strong className="font-bold"> business.</strong></h1>
              <p className="xl:text-lg text-darkGray mt-8 md:mt-10 xl:max-w-[350px]">Our marketing and sales automations help you scale your outreach to get more leads for your company.</p>
              <Button className="mt-8 md:self-start justify-self-start md:mt-10 xl:mt-14" />
              <PhoneImage className="mt-14 mx-auto md:col-start-2 md:row-start-1 md:row-span-3 md:mt-0 md:justify-self-end xl:max-w-none" />
            </div>
            <div className="uppercase mt-14 text-center flex flex-col gap-8 md:flex-row md:justify-center md:gap-36 md:mt-24 xl:flex-col xl:items-start  xl:ml-24 xl:flex-grow xl:gap-16 xl:mt-0 xl:text-left">
              <div>
                <p className="font-bold text-5xl">2k+</p>
                <p className="text-darkGray tracking-widest">companies</p>
              </div>
              <div>
                <p className="font-bold text-5xl">8</p>
                <p className="text-darkGray tracking-widest">languages</p>
              </div>
              <div>
                <p className="font-bold text-5xl">1.2m</p>
                <p className="text-darkGray tracking-widest">leads</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 text-white mt-14 text-center px-4 pb-16 md:mt-24 md:px-16 md:mx-10 xl:mx-0 xl:mt-36 xl:flex xl:px-28 xl:gap-14 xl:pb-0">
          <div className="flex flex-col items-center gap-10 xl:flex-row xl:flex-shrink-0">
            <div className="relative w-4/6 md:w-2/5 xl:w-full xl:max-w-[375px]">
              <div className="absolute w-full aspect-square bottom-10 rounded-full bg-[#DB65E2] blur-3xl opacity-50"></div>
              <JeremyImage className="relative z-10" />
            </div>
            <img src="pattern-curved-line-2.svg" alt="" className="w-[50px]" />
          </div>
          <div>
            <h1 className="text-4xl text-light xl:text-5xl mt-10 xl:mt-32 xl:text-left">It just
              <strong> works.</strong>
            </h1>
            <p className="text-cream text-lg leading-loose xl:text-xl mt-10 xl:text-left xl:leading-loose">“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</p>
            <p className="text-light text-lg uppercase font-bold mt-10 xl:text-left">jeremy robinson</p>
            <p className="text-cream uppercase xl:text-left tracking-widest mt-2">cmo, fylo</p>
          </div>
          <div className="absolute -z-10 inset-0 top-1/4 bg-dark rounded-2xl xl:top-[7%]"></div>
        </div>
        <footer className="relative z-10 flex flex-col gap-8 items-center pt-14 pb-20 md:flex-row md:justify-between md:px-10 md:py-[72px] xl:px-0">
          <Logo />
          <p>Copyright - Suite</p>
          <div className="flex gap-7">
            <img src="/icon-facebook.svg" alt="facebook icon" className="hover:opacity-50 cursor-pointer" />
            <img src="/icon-twitter.svg" alt="twitter icon" className="hover:opacity-50 cursor-pointer" />
            <img src="/icon-instagram.svg" alt="instagram icon" className="hover:opacity-50 cursor-pointer" />
          </div>
        </footer>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[420px] bg-cream md:h-[640px] xl:h-[464px]"></div>
    </div>

  )
}