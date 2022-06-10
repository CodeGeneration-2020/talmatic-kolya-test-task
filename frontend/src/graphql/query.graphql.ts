import { gql } from "@apollo/client";

export const QUERY_SUGGESTIONS = gql`
  query AutoCompleteQuery {
    listOfSuggestions
  }
`;
