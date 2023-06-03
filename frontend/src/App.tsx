import { Routes, Route } from 'react-router-dom'

import { LoginPage, ChatPage, NotFoundPage } from '~/pages'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='*' element={<NotFoundPage />} />

        <Route path='/' element={<LoginPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='chats' element={<ChatPage />} />
      </Routes>
    </div>
  )
}

export default App
