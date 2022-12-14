import { Field } from 'formik';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const SelectItem = ({ label, name, options, variant, ...rest }) => {
    // <InputLabel>{label}</InputLabel>
    return (
        <Field name={name}>
            {({ field, form }) => {
                return (
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={name}
                            label={label}
                            variant={variant}
                            {...field}
                            {...rest}
                            error={form.errors[name] ? true : false}
                            // helperText={form.errors[name]}
                        >
                            {options.map((option) => {
                                return (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.key}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                        <FormHelperText error={form.errors[name] ? true : false}>
                            {form.errors[name]}
                        </FormHelperText>
                    </FormControl>
                );
            }}
        </Field>
    );
};

export default SelectItem;
