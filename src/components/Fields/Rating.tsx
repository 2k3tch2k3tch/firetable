import React from "react";
import MuiRating from "@material-ui/lab/Rating";

// TODO: Create an interface for props

interface Props {
  value: number;
  row: any;
  onSubmit: Function;
}
const Rating = (props: Props) => {
  const { value, row, onSubmit } = props;

  return (
    <MuiRating
      // TODO: make it unique for each
      name={`rating-controlled-${row.id}`}
      value={value}
      onChange={(event, newValue) => {
        onSubmit(newValue);
      }}
    />
  );
};
export default Rating;
