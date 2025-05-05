import { Button } from "@/components/ui/button.tsx";

function App() {
  return (
    <div className={"grid place-items-center h-screen"}>
      <Button onClick={() => alert("You clicked me")}>Press me</Button>
    </div>
  );
}

export default App;
