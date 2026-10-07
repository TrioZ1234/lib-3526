import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Library } from "./components/library";

function App() {
  return (
    <Provider>
      <ThemeProvider>
        <div className="flex min-h-screen flex-col antialiased">
          <Header />
          <main className="flex-1"><Library /></main>
          <Footer />
        </div>
      </ThemeProvider>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
