import logo from '../../assets/note.jpg'

export const Navbar = () => {
    return(
        <header className='flex px-4 py-2 gap-2 border-b-2 border-gray-400'>
            <div className='w-12 h-12'>
                <img className='h-full w-full' src={logo} alt='Logo'/>
            </div>
            <h1 className='text-indigo-800 text-4xl font-bold'>NoteIt</h1>
            </header>
    )
}