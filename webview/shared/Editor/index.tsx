import * as React from "react";
import * as monaco from "monaco-editor";
import * as propTypes from "prop-types";

// @ts-ignore
self.MonacoEnvironment = {
  getWorkerUrl: function (_moduleId: any, label: string) {
    if (label === "json") {
      return `data:text/javascript;charset=utf-8,${encodeURIComponent(
        //@ts-ignore
        `importScripts('${distUri}/json.worker.js');`
      )}`;
    }
    if (label === "css") {
      return `data:text/javascript;charset=utf-8,${encodeURIComponent(
        //@ts-ignore
        `importScripts('${distUri}/css.worker.js');`
      )}`;
    }
    if (label === "html" || label === "xml") {
      return `data:text/javascript;charset=utf-8,${encodeURIComponent(
        //@ts-ignore
        `importScripts('${distUri}/html.worker.js');`
      )}`;
    }
    return `data:text/javascript;charset=utf-8,${encodeURIComponent(
      //@ts-ignore
      `importScripts('${distUri}/editor.worker.js');`
    )}`;
  },
};

export const Editor = (props) => {
  const { value, language, onChange, readOnly, className } = props;

  const divEl = React.useRef<HTMLDivElement>(null);
  const [editor, setEditor] = React.useState(undefined);

  React.useEffect(() => {
    if (divEl.current) {
      setEditor(
        monaco.editor.create(divEl.current, {
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          theme: "vs-dark",
          value,
          language,
          readOnly,
        })
      );
    }

    return () => {
      editor.dispose();
    };
  }, []);

  React.useEffect(() => {
    if (editor) {
      window.addEventListener("resize", () => {
        editor.layout();
      });

      editor.onDidChangeModelContent(() => {
        onChange(editor.getValue());
      });
    }
  }, [editor]);

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
