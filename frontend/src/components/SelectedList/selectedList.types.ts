export interface IUseStylesProps {
  isExistActive: boolean;
  isExistItems: boolean;
}

export interface IListProps {
  title: string;
  items: string[];
  actionHandler?: (itemName: string) => void;
}
