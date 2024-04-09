// import DemoComponent from "./components/DemoComponent";
import NotificationBar from "./components/notification";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import { Body } from "./components/body";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <NotificationBar/>
     <div className="flex">
          <Sidebar />
       <div>
          <Navbar />
          <Body />
          <Footer />
          </div>
        
</div>

    </>
  );
}

export default App;
