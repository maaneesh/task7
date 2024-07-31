import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <header className="text-3xl font-bold mb-6">
          My React App with TailwindCSS and DaisyUI
        </header>
        <button className="btn btn-primary mb-4">Primary Button</button>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>This is a card using DaisyUI components.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
