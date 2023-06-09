import { Routes, Route, Navigate } from 'react-router-dom'

import { LoginPage, ChatPage, NotFoundPage, RegisterPage } from '~/pages'
import { Loading, Notification, ProtectedRoute } from './components'

const Routers = () => (
  <Routes>
    <Route path='*' element={<NotFoundPage />} />

    <Route path='/' element={<Navigate to='/chats' replace />} />
    <Route path='/sign-in' element={<LoginPage />} />
    <Route path='/sign-up' element={<RegisterPage />} />
    <Route
      path='/chats'
      element={
        <ProtectedRoute>
          <ChatPage />
        </ProtectedRoute>
      }
    />
  </Routes>
)

function App() {
  return (
    <div className='App'>
      <Notification>
        <Loading>
          <Routers />
        </Loading>
      </Notification>
    </div>
  )
}

export default App
