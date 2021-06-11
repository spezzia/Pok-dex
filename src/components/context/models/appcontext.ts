export default interface AppContextModel {
  search: string;
  setSearch: (...args: any[]) => void;
  items: number;
  setItems: (...args: any[]) => void;
}
