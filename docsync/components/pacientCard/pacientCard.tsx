import Image from "next/image";

interface TagsProps {
    color: string;
    name: string;
}

interface PacientCardProps {
    name: string;
    date: string;
    tags: TagsProps[];
    description: string;
    photoUrl: string;
}
const Tags = (props: TagsProps) => {
    const { color, name } = props;
    return <div className=" w-fit text-sm border text-red-500 border-red-400 font-medium flex items-center justify-center py-1 px-4 rounded-full">Neuro</div>;
};

export default function PacientCard(props: PacientCardProps) {
    const { name, date, tags, description, photoUrl } = props;
    return (
        <div className="p-6 rounded-2xl shadow-sm  w-72 border m-4">
            <div className="flex flex-row w-full justify-between items-center">
                {
                    //TODO: Ajustar o form ao clicar no botão tags, mostrando pacientes com aquelas tags
                    //TODO: Temrminar os tags
                    //TODO: Formatação de datas para encaixar nos props
                    //TODO: Condicional para o src da imagem => quando não localizada em algum get, subistituir pelo url do placeholder
                }
                <p className="opacity-60 font-semibold">20 abr, 2024</p>
                <Image src="/placeholders/profile_picture_placeholder.png" className="w-10 h-10 rounded-full" width={10} height={10} alt="Foto do paciente"/>
            </div>
            <div className="flex gap-2 flex-col mb-4">
                <h1 className="text-2xl font-semibold">João Eduardo</h1>
                <p className="text-sm font-medium opacity-70 tracking-tight">
                    é imporannte lembrar que o joão teduardo tem alguma coisa de
                    teste nesse texto a que legal eu não sei o que eu to
                    escrevendo e nem dormi a noit...
                </p>
            </div>
            <div className="flex gap-2">
                <Tags color="red" name="Alguma coisa"/>
                <Tags color="red" name="Alguma coisa"/>
                <Tags color="red" name="Alguma coisa"/>
            </div>
        </div>
    );
}
