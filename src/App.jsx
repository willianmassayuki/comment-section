import { useState, useEffect } from 'react'
import './styles/app.scss'
import Comment from './components/Comment'
import Api from './components/Api'
import Generico from './components/Generico'

function App() {
  const [dados, setDados] = useState();
  const [commentsData, setCommentsData] = useState();

  useEffect(() => {
    Api
      .get()
      .then((response) => setDados(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
      
  }, []);

  //Create, Read, Update, Delete
  useEffect(() => {
    //setCommentsData(dados.comments);
      
  }, []);

  
  return (
    <>
      <div className='page-wrapper'>
        <Comment />
        
      </div>       
    </>
  )
}

export default App
