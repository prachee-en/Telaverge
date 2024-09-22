import Footer from "./components/Footer";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="text-white bg-black">
        <div
          className="top w-full h-[70vh]  bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.jpg?s=1024x1024&w=is&k=20&c=pxNX4Ns19juNzCiJInjnjnWjzugXnZBLblSge_rNKLs=')",
          }}
        >
          <Navbar />
          <Info />
          <h1>hello</h1>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
