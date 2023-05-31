import { Contact } from '../components/Contact'

export default function Home(props){
    return (
        <div className='flex flex-col items-center'>
            <div className='w-full sm:w-3/4 lg:w-1/2 px-4 text-center'>
                Hello, welcome to my portfolio! Please find contact information below, or look around for more info about me or my projects
            </div>
            <Contact/>
        </div>
    )
}
