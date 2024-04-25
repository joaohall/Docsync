import Image from "next/image";
import NotificationCenter from "./notificationcenter";


interface NotificationProfileCenterProps{
  name: string;
  medicalType: string;
  profilePhoto: string;
}

export default function Topbar(){
  function NotificationProfileCenter(props: NotificationProfileCenterProps){
    const { name, medicalType, profilePhoto } = props;
    return(
      <section className="flex gap-5 items-center">
        <NotificationCenter/>
        <article className="flex gap-3">
          <Image
          className="rounded-full"
          src={profilePhoto}
          alt="Foto do usuário logado"
          width={40}
          height={10}
          />
          <div className="-space-y-1">
            <p className=' tracking-tight text-sm '>{name}</p>
            <h1 className='m-0 text-md font-semibold  tracking-tight '>{medicalType}</h1>
          </div>
        </article>
      </section>
    )
  }
  return(
    <nav className="w-screen bg-white">
      <main className="max-w-[1440px] flex m-auto items-center justify-between p-4">
        <header>
          <h1 className="text-xl font-medium tracking-tight">Docsync</h1>
        </header>
        <form className="w-2/4 text-sm">
          <input placeholder="Digite aqui para pesquisar no nosso sistema" className="p-3 px-6 rounded-full w-full border border-[#EEEEEE]"></input>
        </form>
        <section>
          <NotificationProfileCenter
            name="Giuilio Pinnola"
            medicalType="Neurologista"
            profilePhoto="/profilepictureplaceholder.png"
          />
        </section>
      </main>
    </nav>   
  )
}