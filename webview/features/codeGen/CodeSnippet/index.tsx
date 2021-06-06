import * as React from "react";
import "./styles.css";
import { Editor } from "../../../shared/Editor";
import {
  codeGenLanguageUpdated,
  codeGenOptions,
  codeGenVariantUpdated,
  selectCodeGenEditorLanguage,
  selectCodeGenLanguage,
  selectCodeGenLanguageKey,
  selectCodeGenVariant,
  selectRequest,
} from "../codeGenSlice";
import * as codegen from "postman-code-generators";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

export const CodeSnippet = () => {
  const [code, setCode] = React.useState("");

  const language = useAppSelector(selectCodeGenLanguage);
  const variant = useAppSelector(selectCodeGenVariant);
  const editorLanguage = useAppSelector(selectCodeGenEditorLanguage);
  const languageKey = useAppSelector(selectCodeGenLanguageKey);
  const dispatch = useAppDispatch();

  const request = useAppSelector(selectRequest);

  React.useEffect(() => {
    codegen.convert(languageKey, variant, request, {}, (err, snippet) => {
      setCode(snippet);
    });
  }, [languageKey, variant, request]);

  return (
    <div className="code-gen-wrapper">
      <div className="code-gen-option">
        <select
          onChange={(e) => dispatch(codeGenLanguageUpdated(e.target.value))}
          className="select-code-option"
          value={language}
        >
          {codeGenOptions.map(({ language }) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => dispatch(codeGenVariantUpdated(e.target.value))}
          className="select-code-option"
          value={variant}
        >
          {codeGenOptions
            .filter(({ language: lang }) => lang === language)[0]
            .variants.map((variant) => (
              <option key={variant} value={variant}>
                {variant}
              </option>
            ))}
        </select>
      </div>
      <div className="code-display">
        <Editor
          className="code-gen-editor"
          value={code}
          language={editorLanguage}
          readOnly
        />
      </div>
    </div>
  );
};
