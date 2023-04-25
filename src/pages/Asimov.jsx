import graph from "../assets/images/graph.png"

const Asimov = () => {
    return (
        <section>
            <section className="p-4 w-full min-h-[80vh] bg-gray-200 rounded-xl flex flex-wrap items-center gap-8">
                <div className="w-full md:w-1/3 object-center">
                    <img src={graph} alt="w-full " />
                </div>
                <article className="grow max-w-prose m-auto">
                    <h1 className="text-[#363636] text-4xl mb-8 font-bold text-center ">Aimov</h1>
                    <p>Application of graphics to AI</p>
                    <p>Knowledge is a structure of interconnected data, a structure that arises from their similarities, differences and equalities.</p>
                    <p>Imagine an artificial intelligence that does not guess the next value, the next word, but actually knows what it is going to say. An artificial intelligence that does not require huge amounts of data, but only a simple string like "a lemon is a fruit" to be trained. </p>
                    <p>To achieve this I propose an architecture that implements graphs and nodes instead of neurons. </p>
                </article>
            </section>
            <nav className="mt-8 rounded-xl bg-[#f2f2f2] min-h-[10vh] h-[15vh] flex items-center justify-around">
                <a href="https://github.com/david-gonzalez-coder/asimov" className="shadow-lg hover:shadow transition-shadow shadow-slate-300 my-2 font-light  bg-[#363636] text-white rounded-full px-8 py-2">Github</a>
            </nav>
        </section>
        
    )
}
export default Asimov