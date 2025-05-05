import { Button } from "@/components/ui/button.tsx";
import { useIdentityQuery } from "@/hooks/useIdentityQuery.ts";

function App() {
  const { data } = useIdentityQuery();
  return (
    <div className={"grid place-items-center h-screen"}>
      <Button onClick={() => alert("You clicked me")}>
        Hi {data?.va_user.firstName}
      </Button>
    </div>
  );
}

export default App;
