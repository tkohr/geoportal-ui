import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {CatalogTreeNodeModel} from './catalog-tree.model';

@customElement('lux-catalog-tree-node')
export class CatalogTreeNodeUi extends LitElement {
  @property({type: Object})
  treeNode: CatalogTreeNodeModel;

  constructor() {
    super();
  }

  override render() {
    // FIXME: do we really need JSON.stringify below?
    if (this.treeNode) {
      return html`
      <ul>
        <li>${this.treeNode.name}</li>
        <span @click="${this.onInfoClick}">
        <div>
          ${this.treeNode.nodes.map((node) => {
            return html`
              <lux-catalog-tree-node
                treeNode="${JSON.stringify(node)}"
              ></lux-catalog-tree-node>
            `;
          })}
        </div>
      </ul>
    `;
    } else {
      return;
    }
  }

  onInfoClick() {
    // FIXME: trigger events from child nodes, not root node
    const event = new CustomEvent('info-event', {
      detail: {
        node: this.treeNode,
      },
    });
    this.dispatchEvent(event);
  }
}
