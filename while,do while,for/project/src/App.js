import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button
        onClick={() => {
          let engMarks = 70;
          if (engMarks >= 35) {
            console.log("Passed in english");
          }
        }}
      >
        If
      </button>

      <button
        onClick={() => {
          let mathsMarks = 60;
          while (mathsMarks >= 35) {
            console.log("Passed in Maths");
            mathsMarks --;
          }
        }}
      >
        While
      </button>

      <button
        onClick={() => {
          let telMarks = 80;
          do {
            console.log("Passed in Telugu");
            telMarks --;
          } while (telMarks >= 35);
        }}
      >
        Do While
      </button>

      <button
        onClick={() => {
          for (let i = 1; i <= 1000; i++) {
            for (let j = 1; j <= 10; j++) {
              if (
                i == 78 ||
                i == 96 ||
                i == 54 ||
                i == 125 ||
                i == 746 ||
                i == 329 ||
                i == 329 ||
                i == 111 ||
                i == 160 ||
                i == 456
              ) {
                console.log(`${i} x ${j} = ${i * j}`);
              }
            }
          }
        }}
      >
        Tabels
      </button>
      <br />
      <button
        onClick={() => {
          for (let i = 1; i <= 1000; i++) {
            if (i % 10 == 0) {
              console.log(i);
            }
          }
        }}
      >
        Multiples of 10
      </button>
      <br />
      <button
        onClick={() => {
          for (let i = 1; i <= 1000; i++) {
            if (i % 15 == 0) {
              console.log(i);
            }
          }
        }}
      >
        Multiples of 15
      </button>
    </div>
  );
}

export default App;
