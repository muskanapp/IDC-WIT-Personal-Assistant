import React from "react";
// import ReactQuill from "react-quill";
import { Card, CardBody,} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";
import App2 from "../../views/components2/App2";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>
      <App2 />
    </CardBody>
  </Card>
);

export default Editor;
