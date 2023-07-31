import grapesjs  from "grapesjs"
import { useState,useEffect } from "react"
import "./styles/main.scss";
import WebPlugin from "grapesjs-preset-webpage";
import FormPlugin from "grapesjs-plugin-forms";

function App() {
  const [editor,setEditor]=useState(null);

  useEffect(()=>{
    const editor=grapesjs.init({
      container:"#editor",
      plugins:[WebPlugin,FormPlugin],
      pluginsOpts:{
        WebPlugin:{},
        FormPlugin:{},
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

