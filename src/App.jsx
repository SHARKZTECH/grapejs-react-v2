import { grapesjs } from "grapesjs"
import { useState,useEffect } from "react"

function App() {
  const [editor,setEditor]=useState(null);

  useEffect(()=>{
    const editor=grapesjs.init({
      container:"#editor"
    });
    setEditor(editor);
  },[])

  return (
    <>
    <div className="App">
      <div id="editor"></div>
    </div>       
    </>
  )
}

export default App

