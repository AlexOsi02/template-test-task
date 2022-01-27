import Menu from "./Components/NavBar/Menu";
import Header from "./Components/Header/Header";

import './App.scss';

function App() {
    return (
        <div className="app">
            <Menu/>
            <Header/>
            <main className={"main"}>Lorem ipsum sit amet, consectetur adipisicing elit. Cum cumque earum nostrum unde!
                Ad dolor earum explicabo, illo incidunt maxime minus nemo non odit perferendis possimus, provident
                repellat saepe voluptates? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim ipsum
                laudantium natus quis quod saepe. Consequuntur deleniti, dicta esse illum nihil, numquam odit pariatur
                quam quasi repudiandae rerum, tempora voluptatem.
            </main>
        </div>
    );
}

export default App;
