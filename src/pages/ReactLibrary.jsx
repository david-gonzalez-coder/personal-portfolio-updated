import { UploadFilesArea } from "../components-jsx"

const Card = () => {
    return (<></>)
}
export default function ReactLibrary() {
  return (
    <section>
        <h1 className="text-center my-2 font-light text-3xl sm:text-4xl">React components</h1>
        <p className="text-center">These are some components that I have made.</p>
        <div className='grid gap-4'>
            <div>
                <UploadFilesArea />
            </div>
        </div>

    </section>
  )
}
