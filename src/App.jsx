import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Date from './components/DisplayDate'
import PopupModel from './components/PopupModel'
import TaskContainer from './components/TaskContainer'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [modelEnabled, setModelEnabled] = useState(false);

  return (
    <main>
      {modelEnabled && <PopupModel setModelEnabled={setModelEnabled} />}

      <div className="bg-gradient-to-r px-[3%] from-violet-500 to-fuchsia-500">
        <div className="flex py-[5%] justify-between">
          <Date />
          <div className="flex items-center">
            <button onClick={() => setModelEnabled(true)} className='px-4 py-2 
            rounded-md bg-gray-800 bg-opacity-70 text-white font-bold'>
              + Add a Task
            </button>
          </div>
        </div>
      </div>
      <section>
        <div className='w-7/12 m-auto'>
          <TaskContainer />
        </div>
      </section>

    </main>
  )
}

export default App