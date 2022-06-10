export interface IAutoCompleteComponentProps {
  options: { listOfSuggestions: string[] };
  selectedValues: string[];
  onUpdateSelected: (newItems: string[]) => void;
}
