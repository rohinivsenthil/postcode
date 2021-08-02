import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../redux/hooks';
import { requestOptionsUpdated, selectRequestOptions, requestOptionsList } from '../requestOptionsSlice';
import "./styles.css";

export const RequestOptions = () => {
    const requestOptions = useAppSelector(selectRequestOptions)
    const dispatch = useDispatch()

    return (
        <div className="req-options-wrapper">
            <div className="options">
                {
                    requestOptionsList.map(({ name, value, type, ...optionDetails }) => (
                        <React.Fragment key={`req-option-${value}`}>
                            <div className="req-option-label">{`${name}: `}</div>
                            {
                                type === 'select' ? (
                                    <select
                                        onChange={(e) => dispatch(requestOptionsUpdated({
                                            ...requestOptions,
                                            [value]: e.target.value
                                        }))}
                                        defaultValue={optionDetails.default}
                                        className="req-option-switch"
                                    >
                                        {optionDetails.options.map(({ key, value }) => (
                                            <option key={key} value={value} >{value}</option>
                                        ))}
                                    </select>
                                ) : null
                                // Note: Augment this switch later with different renderers for 
                                // different types of options
                            }
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}