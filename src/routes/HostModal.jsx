import ThemeProvider from "../contexts/ThemeProvider";

function HostModal({ children }) {
  return (
    <ThemeProvider>
      <div id="modalDiv">{children}</div>{" "}
    </ThemeProvider>
  );
}

export default HostModal;
