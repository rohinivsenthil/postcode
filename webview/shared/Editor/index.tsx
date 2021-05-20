import * as React from "react";
import * as monaco from "monaco-editor";
import * as propTypes from "prop-types";

export const Editor = (props) => {
  const { value, language, onChange, readOnly, className } = props;

  const divEl = React.useRef<HTMLDivElement>(null);
  const [editor, setEditor] = React.useState(undefined);

  React.useEffect(() => {
    if (divEl.current) {
      const tmpEditor = monaco.editor.create(divEl.current, {
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        theme: "vs-dark",
        value,
        language,
        readOnly,
      });

      window.addEventListener("resize", () => {
        tmpEditor.layout();
      });

      if (onChange) {
        tmpEditor.onDidChangeModelContent(() => {
          onChange(tmpEditor.getValue());
        });
      }

      setEditor(tmpEditor);

      return () => {
        tmpEditor.dispose();
      };
    }
  }, []);

  React.useEffect(() => {
    if (editor && editor.getValue() !== value) {
      editor.setValue(value);
    }
  }, [value, editor]);

  React.useEffect(() => {
    if (editor) {
      editor.updateOptions({ language });
    }
  }, [language, editor]);

  return <div className={className} ref={divEl}></div>;
};

Editor.propTypes = {
  value: propTypes.string.isRequired,
  language: propTypes.string.isRequired,
  onChange: propTypes.func,
  className: propTypes.string,
  readOnly: propTypes.bool,
};
