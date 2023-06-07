import { Routes, Route } from 'react-router-dom'

import { LoginPage, ChatPage, NotFoundPage, RegisterPage } from '~/pages'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='*' element={<NotFoundPage />} />

        <Route path='/' element={<LoginPage />} />
        <Route path='sign-in' element={<LoginPage />} />
        <Route path='sign-up' element={<RegisterPage />} />
        <Route path='chats' element={<ChatPage />} />
      </Routes>
    </div>
  )
}

export default App
