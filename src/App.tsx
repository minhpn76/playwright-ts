import React from 'react';
import './App.css';
import CustomForm from './form/form'

function App() {
  const [visible, setVisible] = React.useState(true);
  const fulfill = () => setVisible(false);
  return (
    <div className="App">
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#ccc",
          height: "100vh",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <h1 style={{ marginBottom: 50 }}>
          {visible ? "Please Submit the Form" : "Thank you for Submitting"}
        </h1>
        <CustomForm onSubmit={fulfill} />
      </section>
    </div>
  );
}

export default App;
