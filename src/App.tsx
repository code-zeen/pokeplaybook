import { store } from '@/store/store.ts'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.tsx'

function App() {

    return (
        <DndProvider backend={HTML5Backend}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </DndProvider>
    )
}

export default App