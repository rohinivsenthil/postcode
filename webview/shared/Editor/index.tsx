import * as React from "react";
import * as monaco from "monaco-editor";
import * as propTypes from "prop-types";
import "./styles.css";

const Editor = (props) => {
  const { value, language, onChange, readOnly, className, copyButton, format } =
    props;

  const divEl = React.useRef<HTMLDivElement>(null);
  const [editor, setEditor] = React.useState(undefined);
  const [copy, setCopy] = React.useState("Copy");

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

  return (
    <div className={`${className} postcode-editor`} ref={divEl}>
      {copyButton && (
        <button
          onClick={() => {
            navigator.clipboard.writeText(value).then(() => {
              setCopy("Copied");
              setTimeout(() => setCopy("Copy"), 1000);
            });
          }}
          className="copy-button"
        >
          {copy}
        </button>
      )}
    </div>
  );
};

Editor.propTypes = {
  value: propTypes.string.isRequired,
  language: propTypes.string.isRequired,
  onChange: propTypes.func,
  className: propTypes.string,
  readOnly: propTypes.bool,
  copyButton: propTypes.bool,
  format: propTypes.bool,
};

export default Editor;
