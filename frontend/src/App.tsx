import { Routes, Route, Navigate } from 'react-router-dom'

import { LoginPage, ChatPage, NotFoundPage, RegisterPage } from '~/pages'
import { Loading, Notification, ProtectedRoute } from './components'

const Routers = () => (
  <Routes>
    <Route path='*' element={<NotFoundPage />} />

    <Route path='/' element={<Navigate to='chats' replace />} />
    <Route
      path='sign-in'
      element={
        <ProtectedRoute requireSignedIn={false} hrefTo='chats'>
          <LoginPage />
        </ProtectedRoute>
      }
    />
    <Route
      path='sign-up'
      element={
        <ProtectedRoute requireSignedIn={false} hrefTo='chats'>
          <RegisterPage />
        </ProtectedRoute>
      }
    />
    <Route
      path='chats'
      element={
        <ProtectedRoute requireSignedIn hrefTo='sign-in'>
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
