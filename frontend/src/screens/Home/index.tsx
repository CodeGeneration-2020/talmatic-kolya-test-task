import React, { useEffect, useState } from "react";
import { Box, Grid, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useMutation, useQuery } from "@apollo/client";
import AutoCompleteComponent from "../../components/AutoCompleteComponent";
import Header from "../../components/Header";
import SelectedList from "../../components/SelectedList";
import { CONVERSION_MUTATION } from "../../graphql/mutation.graphql";
import { QUERY_SUGGESTIONS } from "../../graphql/query.graphql";

const useStyles = makeStyles((theme: Theme) => ({
  grid: {
    maxWidth: `${theme.breakpoints.values.xl}px`,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  row: {
    marginTop: theme.spacing(5),
  },
}));

const Home = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const classes = useStyles();

  const { data } = useQuery(QUERY_SUGGESTIONS);
  const [getSuggestionWithDate, { data: parsedValues }] =
    useMutation(CONVERSION_MUTATION);

  useEffect(() => {
    getSuggestionWithDate({
      variables: { items: selectedValues },
    });
  }, [selectedValues]);

  const handleUpdateSelected = (newItems: string[]) =>
    setSelectedValues(newItems);

  const handleDeleteItem = (nameToDelete: string) =>
    setSelectedValues(selectedValues.filter((name) => name !== nameToDelete));

  return (
    <Grid container display="flex" justifyContent="center">
      <Header />

      <Grid item xs={12} md={8} className={classes.grid}>
        <AutoCompleteComponent
          options={data}
          selectedValues={selectedValues}
          onUpdateSelected={handleUpdateSelected}
        />

        <Box className={classes.row}>
          <SelectedList
            title="Selected items:"
            items={selectedValues}
            actionHandler={handleDeleteItem}
          />
          <SelectedList
            title="Items after mutation:"
            items={parsedValues?.getSuggestionWithDate ?? []}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
