import Image from 'next/image';

interface HeaderProps {
    name: string;
    vocation: string;
    notificationToken: string;
}

export default function Header(props: HeaderProps) {
    const { name, vocation, notificationToken } = props;
    notificationToken;
    return (
        <header className="w-full bg-white">
            <div className="container w-full m-auto flex flex-row p-4 justify-between items-center">
                <div className="">
                    <h1 className="font-bold text-xl">Docsync</h1>
                </div>
                <div className="w-full ">
                    <form className="w-full flex item-center justify-center">
                        <input
                            className=" w-1/2 border p-2 px-6 rounded-full text-sm"
                            placeholder="Digite aqui para pesquisar no nosso sistema"
                        ></input>
                    </form>
                </div>
                <div className="flex flex-row gap-4">
                    <Image
                        src={'/placeholders/profile_picture_placeholder.png'}
                        width={25}
                        height={25}
                        className='w-10 h-10 rounded-full'
                        alt="Foto de perfil do médico"
                    />
                   <div>
                    <h1 className='text-sm font-medium opacity-70 tracking-tight'>{name}</h1>
                    <p className='font-semibold tracking-tight'>{vocation}</p>
                   </div>
                </div>
            </div>
        </header>
    );
}
