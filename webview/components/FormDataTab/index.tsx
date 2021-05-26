import * as React from "react";
import "./styles.css";
import { KeyValueTable } from "../../shared/KeyValueTable";
import * as propTypes from "prop-types";

export const FormData = (props) => {
  const { formData, setFormData } = props;
  return (
    <div className="form-data-wrapper">
      <KeyValueTable data={formData} setData={setFormData} />
    </div>
  );
};

FormData.propTypes = {
  formData: propTypes.array.isRequired,
  setFormData: propTypes.func.isRequired,
};
