import StepsToShahada from "./features/StepsToShahada";
import useInitializeTheme from "./hooks/useInitializeTheme";
import StepsLayout from "./layout/StepsLayout/StepsLayout";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  useInitializeTheme();
  return (
    <div className="dark:bg-primary-light flex flex-col min-h-[100vh]">
      <Navbar />
      <StepsLayout>
        <StepsToShahada />
      </StepsLayout>
    </div>
  );
}

export default App;
