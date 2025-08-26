
import './App.css'
import PostsComponent from './PostsComponent'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
 

  return (
    <div style={{padding: "2rem"}}>
      <h1>React Query Demo</h1>
      <PostsComponent />
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  )
}

export default App
