import { Route, Routes } from 'react-router-dom'
import SimpleSidebar from './layouts/defaultLayout'
import { Home } from './pages/Home'
import { List } from './pages/List'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<SimpleSidebar />}>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<List />} />
            </Route>
        </Routes>
    )
}