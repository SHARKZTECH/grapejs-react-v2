import { grapesjs } from "grapesjs"
import { useState,useEffect } from "react"
import Plugin from "grapesjs-preset-webpage";

function App() {
  const [editor,setEditor]=useState(null);

  useEffect(()=>{
    const editor=grapesjs.init({
      container:"#editor",
      plugins:[Plugin],
      pluginsOpts:{
        [Plugin]:{}
      },
      
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

