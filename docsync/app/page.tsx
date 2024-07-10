import PacientCard from "@/components/pacientCard/pacientCard";


export default function Home() {
    return (
        <main className="bg-neutral-100 h-screen">
          <section className="container m-auto p-6">
            <div className="p-4 flex justify-between flex-row items-center shadow-sm  bg-white border rounded-2xl">
              <h1 className="text-2xl font-semibold m-2">Dashboard Principal</h1>
              <button className="border rounded-2xl px-6 py-2 font-medium text-sm w-fit h-fit">Filtrar por</button>
            </div>
            <article className="flex flex-row flex-wrap ">
              <PacientCard/>
              <PacientCard/>
              <PacientCard/>
              <PacientCard/>
              <PacientCard/>

              <PacientCard/>


              {
              //FIXME: Utilize a repetição por arraw para facilitar na integração com a API 
              }
            </article>
          </section>
        </main>
    );
}
