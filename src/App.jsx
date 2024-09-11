import { useState, useRef, useEffect } from "react";
import styles from "./styles/weather-app.module.css";

function App() {
  const [location, setLocation] = useState(null);
  const inputRef = useRef();

  function successGetLocation(position) {
    setLocation(position);
    console.log(position.coords);
  }

  document.addEventListener("keydown", () => {
    if (event.key === "Enter") {
      console.log(inputRef.current.value);
    }
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      successGetLocation
    );
  }, []);

  return (
    <div className={styles.container}>
      <img
        className={styles.sun_logo}
        src="https://img.icons8.com/?size=100&id=8EUmYhfLPTCF&format=png&color=000000"
        alt="sun"
      />
      {location ? (
        <div>sdfsdf</div>
      ) : (
        <div className={styles.prompt}>
          <h1 className={styles.text}>
            Allow us to get your location before starting or
            do it manually
          </h1>
          <input
            type="text"
            className={styles.input}
            ref={inputRef}
          />
        </div>
      )}
    </div>
  );
}

export default App;
