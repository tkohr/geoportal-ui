import {customElement, property, state} from 'lit/decorators.js';
import {BehaviorSubject} from 'rxjs';
import {html, LitElement} from 'lit';
import {CatalogTreeNodeModel} from './catalog-tree.model';
import {CATALOG_TREE_FIXTURE} from './fixtures';

@customElement('lux-catalog-tree-container')
export class CatalogTreeContainer extends LitElement {
  @property()
  catalogTree: CatalogTreeNodeModel;

  @state()
  // FIXME: implement a state and get tree from there:
  catalogTree$ = new BehaviorSubject(CATALOG_TREE_FIXTURE);
  // catalogTree$ = state.theme$.pipe(
  //   map((theme) => CatalogTreeThemeMapper.map(theme))
  // );

  constructor() {
    super();
    this.catalogTree$.subscribe((catalogTree) => {
      this.catalogTree = catalogTree;
    });
  }

  override render() {
    // FIXME: do we really need JSON.stringify below?
    return html`<lux-catalog-tree-node
      treeNode=${JSON.stringify(this.catalogTree)}
      @info-event="${(e) => this.openInfo(e)}"
    ></lux-catalog-tree-node>`;
  }

  openInfo(e) {
    console.log('called open info with', e);
  }
}
