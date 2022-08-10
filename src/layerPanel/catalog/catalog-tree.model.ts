export interface CatalogTreeNodeModel {
  name: string;
  id: string;
  checked: boolean;
  nodes: CatalogTreeNodeModel[];
}
