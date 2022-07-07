import BarChart from "./components/base/charts/BarChart";
import LineChart from "./components/base/charts/LineChart";
import PieChart from "./components/base/charts/PieChart";
import MainLayout from "./components/layouts/MainLayout";
import MainPage from "./components/pages/main";
import RTL from "./components/provider/DirectionProvider";
import ThemeProvider from "./components/provider/ThemeProvider";

function App() {
  return (
    <RTL>
      <ThemeProvider>
        <MainLayout>
          <MainPage />
        </MainLayout>
      </ThemeProvider>
    </RTL>
  );
}

export default App;
