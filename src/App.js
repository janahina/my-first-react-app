import logo from './lewagon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <body class="max-w-4xl mx-auto">
          <h1 class="text-2xl font-bold mt-8 mb-5">
            This is a Tailwind h1 header!
          </h1>
          <h2 class="text-xl"> Fancy h2 header!</h2>

          <h3 class="text-lg"> Now we can see an h3</h3>
          <p class="my-5">
            Bender, quit destroying the universe! Yeah, I do that with my stupidness. I never loved you. Moving along…
            Belligerent and numerous.
          </p>

          <ul class="list-disc list-inside my-5 pl-2">
            <li>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                Learn React rel="noopener noreferrer"
              >Unordered List</a>
            </li>
            <li>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                Learn React rel="noopener noreferrer"
              >Learn React</a>
            </li>
            <li>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                Learn React rel="noopener noreferrer"
              >Learn React</a>
            </li>
          </ul>

          <ol class="list-decimal list-inside  my-5 pl-2">
            <li>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                Learn React rel="noopener noreferrer"
              >Ordered List</a>
            </li>
            <li>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                Learn React rel="noopener noreferrer"
              >Learn React</a>
            </li>
            <li>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                Learn React rel="noopener noreferrer"
              >Learn React</a>
            </li>
          </ol>
        </body>
      </header>
    </div>
  );
}

export default App;
