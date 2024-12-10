import React, { useState } from "react";
import Welcome from "./Welcome";
import axios from "axios";

const App = () => {
    const [count, setCount] = useState(0); // Declare a state variable\
    const [prompt, setPrompt] = useState("");
    const [summarisedText, setSummarisedText] = useState("");

    document.title = "Hasmukh";
    // return (
    //     <div style={{ textAlign: "center", marginTop: "20%" }}>
    //         <h1>Hello, World!</h1>
    //         <Welcome name="Hasmukh" message="You're doing great so far!" />

    //         <div style={{ marginTop: "20px" }}>
    //             <h3>Counter: {count}</h3>
    //             <button onClick={() => setCount(count + 1)}>Increase</button>
    //             <button onClick={() => setCount(count - 1)}>Decrease</button>
    //         </div>
    //     </div>
    // );

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post("http://localhost:5000/summarised_text", {
              prompt: prompt
          });
          setSummarisedText(response.data.summarised_text);
      } catch (error) {
          console.error("Error generating text:", error);
      }
  };
  
  return (
      <div style={{ textAlign: "center", marginTop: "20%" }}>
            <div>
                <h2>Welcome!</h2>
            </div>
          <h1>AI Text Summariser</h1>
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  placeholder="Enter a prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
              />
              <button type="submit">Summarise</button>
          </form>
          {summarisedText && (
              <div style={{ marginTop: "20px" }}>
                  <h3>Summarised Text:</h3>
                  <p>{summarisedText}</p>
              </div>
          )}
      </div>
  );
};

export default App;
