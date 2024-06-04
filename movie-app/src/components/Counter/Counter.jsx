import { useEffect, useState } from "react";

function Counter() {
  // Membuat state angka
  const [angka, setAngka] = useState(0);

  function addAngka() {
    setAngka(angka + 1);
  }

  useEffect(() => {
    // Menjalankan side effect: update dom
    function manipulateDOM() {
      console.log("Lifecycle: Component mount");
      document.title = `Result: ${angka}`;
    }
    manipulateDOM();
  }, [angka]);

  console.log("Lifecycle: Component render");

  return (
    <div>
      <p>Result: {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;