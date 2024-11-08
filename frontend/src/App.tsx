import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Blog } from './pages/blog'
import { Blogs } from './pages/blogs'
import { Publish } from './pages/publish'
import { Root } from './pages/root'
import Profile from './pages/profile'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/:user" element={<Profile/>}/>
          <Route path="/" element={<Root/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App