import router from '@/app/layout/router.tsx'
import store from '@/app/store/store.ts'
import { ToastProvider } from '@/shared/ui/toast.tsx'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

function App() {

    return (
        <DndProvider backend={HTML5Backend}>
            <Provider store={store}>
                <ToastProvider>
                    <RouterProvider router={router} />
                </ToastProvider>
            </Provider>
        </DndProvider>
    )
}

export default App