import StateTutorial from "./components/StateTutorial";
import ReducerTutorial from "./components/ReducerTutorial";
import EffectTutorial from "./components/EffectTutorial";
import RefTutorial from "./components/RefTutorial";
import LayoutEffectTutorial from "./components/LayoutEffectTutorial";
import UseImperativeTutorial from "./components/UseImperativeTutorial";
import ContextTutorial from "./components/ContextTutorial";
import MemoTutorial from "./components/MemoTutorial";
import CallbackTutorial from "./components/CallbackTutorial";
import ReactJs1 from "./components/ReactJs1";

const App = () => {
  return (
    <div>
      {/*<Navbar />*/}
      <main>
        <div id="home">
          <StateTutorial />
          <ReducerTutorial />
          <EffectTutorial />
          <RefTutorial />
          <LayoutEffectTutorial />
          <UseImperativeTutorial />
          <ContextTutorial />
          <MemoTutorial />
          <CallbackTutorial />
          <ReactJs1 />
        </div>
        <div id="dishes"></div>
      </main>
    </div>
  );
};

export default App;
