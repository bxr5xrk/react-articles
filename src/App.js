import { useState } from 'react';
import PostList from './components/PostList';
import Button from './components/UI/button/Button';
import Input from './components/UI/input/Input';
import './styles/App.css'

function App() {

  const [posts] = useState([
    {id: 1, title: 'React', desc: 'React thats the library that helps programmers to write SPA and other sytes'},
    {id: 2, title: 'React', desc: 'React thats the library that helps programmers to write SPA and other sytes'},
    {id: 3, title: 'React', desc: 'React thats the library that helps programmers to write SPA and other sytes'},
  ])

  return(
    <div className='App'>
      <form>
        <Input type='text' placeholder='enter post title' />
        <Input type='text' placeholder='enter post description' />
        <Button>Add post</Button>
      </form>

      <PostList posts={posts} listTitle='POST LIST'/>
    </div>
  )
}

export default App;