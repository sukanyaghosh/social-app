import "./App.css";
import Input from "./components/form/Input";

function App() {
  const courses = ["html", "js", "css", "bootstrap", "react"];

  return (
    <>
      <Input
        size="sm"
        type="radio"
        label="Male"
        id="radio1"
        nameRadio="course"
      />
      <Input
        size="sm"
        type="radio"
        label="Female"
        id="radio2"
        nameRadio="course"
      />
      <Input size="sm" type="checkbox" label="HTML" id="check1" />
      <Input size="sm" type="checkbox" label="CSS" id="check2" />
      <Input />
      <Input size="lg" />
      <Input
        size="lg"
        placeholder="Enter name"
        type="select"
        options={courses}
        defaultOption="Select course"
      >
        <option value="">Select course</option>
      </Input>
    </>
  );
}

export default App;
