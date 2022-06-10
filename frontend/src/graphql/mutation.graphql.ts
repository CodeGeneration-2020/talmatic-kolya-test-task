import { gql } from "@apollo/client";

export const CONVERSION_MUTATION = gql`
  mutation GetSuggestionWithDate($items: [String]) {
    getSuggestionWithDate(items: $items)
  }
`;
