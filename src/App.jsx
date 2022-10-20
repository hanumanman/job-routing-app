import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import HostModal from "./routes/hostModal";
import JobModal from "./routes/JobModal";
import LoginModal from "./routes/LoginModal";
import AuthRequire from "./routes/RequireAuth";
import Root from "./routes/Root";

function App() {
  let location = useLocation();
  let state = location.state;

  return (
    <>
      {/* for single page modal */}

      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Root />}>
          <Route
            path="login"
            element={<HostModal children={<LoginModal />} />}
          />
          <Route
            path=":jobId"
            element={
              <AuthRequire>
                <JobModal />
              </AuthRequire>
            }
          />
        </Route>
      </Routes>

      {/* for popup modal */}
      {state?.backgroundLocation && (
        <Routes>
          <Route
            path=":jobId"
            element={
              <AuthRequire>
                <HostModal>
                  <JobModal />
                </HostModal>
              </AuthRequire>
            }
          />

          <Route
            path="/login"
            element={<HostModal children={<LoginModal />} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
