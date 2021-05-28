import * as React from "react";
import * as monaco from "monaco-editor";
import * as propTypes from "prop-types";
import "./styles.css";

export const Editor = (props) => {
  const { value, language, onChange, readOnly, className, format } = props;

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
    if (editor) {
      if (editor.getValue() !== value) {
        editor.setValue(value);
      }

      const model = editor.getModel();
      monaco.editor.setModelLanguage(model, language);
      if (format) {
        editor.updateOptions({ readOnly: false });
        setTimeout(() => {
          editor
            .getAction("editor.action.formatDocument")
            .run()
            .then(() => {
              editor.updateOptions({ readOnly });
            });
        }, 300);
      }
    }
  }, [value, language, editor, format]);

  return <div className={className} ref={divEl}></div>;
};

Editor.propTypes = {
  value: propTypes.string.isRequired,
  language: propTypes.string.isRequired,
  onChange: propTypes.func,
  className: propTypes.string,
  readOnly: propTypes.bool,
  format: propTypes.bool,
};
