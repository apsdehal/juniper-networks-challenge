import React from 'react'
import CodeMirror from 'react-codemirror';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/lib/codemirror.css';
;

const Display = (props) => {
  let options = {
    lineNumbers: true,
  }, styles = {
    textAlign: 'left'
  };

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
      <b>Generated Query</b>
      </div>
      <div style={styles}>
        <CodeMirror value={props.query} options={options} />
      </div>
    </div>
  );
}

export default Display;
