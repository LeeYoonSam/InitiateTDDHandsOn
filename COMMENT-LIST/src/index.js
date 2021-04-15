import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import compositecontentRefinerFactory from "./content-refiners/compositeContentRefinerFactory"
import compactWhitespaces from "./content-refiners/compactWhitesapces";
import trimWhitespaces from "./content-refiners/trimWhitespaces";
import commentComposerFactory from "./commentComposerFactory";

const commentRefiner = compositecontentRefinerFactory([
    compactWhitespaces,
    trimWhitespaces
]);

ReactDOM.render(
  <React.StrictMode>
    <App commentComposer={commentComposerFactory(commentRefiner)} />
  </React.StrictMode>,
  document.getElementById("root")
);
