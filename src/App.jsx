import grapesjs  from "grapesjs"
import { useState,useEffect } from "react"
import "./styles/main.scss";
import WebPlugin from "grapesjs-preset-webpage";
import FormPlugin from "grapesjs-plugin-forms";
import plugin from "grapesjs-blocks-basic";
import MjmlPlugin from "grapesjs-mjml";
import { Editor } from "./Editor";

function App() {
  const [editor,setEditor]=useState(null);

  // useEffect(()=>{
  //   const editor=grapesjs.init({
  //     container:"#editor",
  //     plugins:[MjmlPlugin,plugin,WebPlugin,FormPlugin,],
  //     pluginsOpts:{
  //       WebPlugin:{},
  //       FormPlugin:{},
  //       plugin:{flexGrid: true },
  //       MjmlPlugin:{}
  //     },

  //   });
  //   setEditor(editor);
  // },[])

  return (
    <>
    <div className="App">
      <div id="editor"></div>
      <Editor/>
    </div>       
    </>
  )
}

export default App

