import { FormExample } from "./components/FormExample";
import { RequiredFormExample } from "./components/RequiredFormExample";

function App() {
  return (
    <>
      <h1>FORM EXAMPLE</h1>
      <FormExample />

      <h1 style={{ marginTop: 200 }}>REQUIRED FORM EXAMPLE</h1>
      <RequiredFormExample />
    </>
  );
}

export default App;
