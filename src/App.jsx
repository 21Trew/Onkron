import './App.css'
import {Block_1_component} from "./components/Block-1/Block_1_component.jsx";
import {Block_2_component} from "./components/Block-2/Block_2_component.jsx";
import {Block_3_component} from "./components/Block-3/Block_3_component.jsx";
import {Block_4_component} from "./components/Block-4/Block_4_component.jsx";
import {Block_5_component} from "./components/Block-5/Block_5_component.jsx";
import {Block_6_component} from "./components/Block-6/Block_6_component.jsx";
import {Block_7_component} from "./components/Block-7/Block_7_component.jsx";

function App() {

  return (
    <section className="app-wrapper">
        <Block_1_component />

        <Block_2_component />

        <Block_3_component />

        <Block_4_component />

        <Block_5_component />

        <Block_6_component />

        <Block_7_component />
    </section>
  )
}

export default App
