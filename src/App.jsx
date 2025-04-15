import './App.css'
import MainCard from './Components/Maincard/MainCard'

function App() {


    return (
        <>
            <div className="w-2/3 mx-auto">
                <div >
                    <h1 className='text-center mt-10 text-4xl font-bold'>Course Registration</h1>
                </div>
                <div className='mt-20'>
                    <div>
                        <div>
                            <MainCard></MainCard>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default App
