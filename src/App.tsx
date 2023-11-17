// import Input from "./components/input";
import Form from "./components/Validation";
import FormValidationExample from "./components/Validation";
import InputBox from "./components/inputBox";
import ToggleBox from "./components/toggleBox";


function App() {
  return (
    <div className="App">
      <InputBox/>
      <ToggleBox/>
      {/* <Input/> */}
      {/* <FormValidationExample/> */}
      <Form/>
    </div>
  );
}

export default App;
