import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
// import { FlatTreeControl } from 'ng-zorro-antd/node_modules/@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EoEditorComponent } from 'eo/workbench/browser/src/app/eoui/editor/eo-editor/eo-editor.component';

import { NzTreeFlatDataSource, NzTreeFlattener } from 'ng-zorro-antd/tree-view';

interface TreeNode {
  name: string;
  code?: string;
  children?: TreeNode[];
}

const TREE_DATA: TreeNode[] = [
  {
    name: 'HTTP API 请求',
    children: [
      {
        name: '获取响应结果',
        code: 'eo.http.response.get();',
      },
      {
        name: '设置响应结果',
        code: 'eo.http.response.set("response_value");',
      },
    ],
  },
];

interface FlatNode extends TreeNode {
  expandable: boolean;
  name: string;
  level: number;
  disabled: boolean;
}

@Component({
  selector: 'eo-api-script',
  templateUrl: './api-script.component.html',
  styleUrls: ['./api-script.component.scss'],
})
export class ApiScriptComponent implements OnInit {
  @ViewChild(EoEditorComponent, { static: false }) eoEditor?: EoEditorComponent;

  private transformer = (node: TreeNode, level: number): FlatNode => ({
    ...node,
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    level,
    disabled: false,
  });
  selectListSelection = new SelectionModel<FlatNode>(true);

  treeControl = new FlatTreeControl<FlatNode, any>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new NzTreeFlattener(
    this.transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  // @ts-ignore
  dataSource = new NzTreeFlatDataSource(this.treeControl, this.treeFlattener);

  model = '';
  constructor() {
    this.dataSource.setData(TREE_DATA);
    this.treeControl.expandAll();
  }

  ngOnInit(): void {}

  hasChild = (_: number, node: FlatNode): boolean => node.expandable;

  insertCode = (node: FlatNode) => {
    this.eoEditor.handleInsert(node.code);
  };
}
