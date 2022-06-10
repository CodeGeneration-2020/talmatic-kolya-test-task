import React, { FC, HTMLAttributes } from "react";
import { makeStyles } from "@mui/styles";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Checkbox,
  TextField,
  Theme,
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { IAutoCompleteComponentProps } from "./autocomplete.types";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme: Theme) => ({
  autocomplete: {
    marginTop: theme.spacing(5),
    width: "650px",
    borderRadius: "4px",
  },
  checkbox: { marginRight: theme.spacing(2) },
}));

const AutoCompleteComponent: FC<IAutoCompleteComponentProps> = ({
  options,
  selectedValues,
  onUpdateSelected,
}) => {
  const classes = useStyles();
  const listOptions = options ? [...new Set(options.listOfSuggestions)] : [];

  const renderListOptions = (
    props: HTMLAttributes<HTMLLIElement>,
    optionValue: string,
    { selected }: { selected: boolean }
  ) => {
    return (
      <li {...props}>
        <Checkbox
          icon={icon}
          checkedIcon={checkedIcon}
          className={classes.checkbox}
          checked={selected}
        />
        {optionValue}
      </li>
    );
  };

  const renderOptions = (params: AutocompleteRenderInputParams) => {
    return (
      <TextField
        {...params}
        placeholder={!!selectedValues.length ? "" : "Try typing"}
      />
    );
  };

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={listOptions}
      value={selectedValues}
      onChange={(event, newValue) => {
        onUpdateSelected(newValue);
      }}
      className={classes.autocomplete}
      disableCloseOnSelect
      renderOption={renderListOptions}
      renderInput={renderOptions}
    />
  );
};

export default AutoCompleteComponent;
