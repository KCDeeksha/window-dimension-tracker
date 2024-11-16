import React from "react";
import useWindowDimensions from "./useWindowDimensions";

const Dashboard = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div style={styles.container}>
      <h1>Window Dimensions Tracker</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
};

export default Dashboard;
