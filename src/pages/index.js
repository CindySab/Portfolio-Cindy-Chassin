import Head from "next/head";
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilPicture from "../../public/profil/profile.png"
import AnimatedText from '@/components/AnimatedText'
import Link from "next/link";
import LinkArrow from "@/components/LinkArrow";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cindy Chassin | Développeur Web</title>
        <meta name="description" content="Développeur web passionné spécialisé dans la création d'applications web innovantes avec React.js. Découvrez mes projets et contactez-moi pour discuter de vos idées." />
      </Head>
    <main className="flex items-center text-dark w-full min-h-screen">
    <Layout className='pt-0'>
        <div className='flex items-center justify-between w-full'>
          <div className='w-1/2'>
            <Image src={profilPicture} alt="Photo de profil" className='w-full h-auto' />
          </div>
          <div className='w-1/2 flex flex-col items-center self-center ml-20'>
          <AnimatedText text="Transformer votre vision en réalité." className='!text-6xl !text-left' />
          <p className="my-4 text-base font-medium">En tant que développeur, je me consacre à transformer des idées en applications Web innovantes. 
            Explorez mes derniers projets, mettant en valeur mon expertise en React.js et en développement Web.</p>
            <div className="flex items-center self-start mt-2">
              <Link href="/Cindy.pdf" target={"_blank"} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark" download={true}
              >Curriculum Viate &thinsp; <LinkArrow className={"w-6 ml-1"} /> 
              </Link>
              <Link href="mailto:cindychassin.pro@gmail.com" target={"_blank"}
              className="ml-4 text-lg font-medium capitalize text-dark underline"
              >Contactez-moi</Link>
            </div>
        </div>
        </div>
      </Layout>
      <HireMe />
    </main>
    </>
  );
}
