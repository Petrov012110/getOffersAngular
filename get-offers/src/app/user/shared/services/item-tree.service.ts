import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CacheKeys, CacheService } from "./cache.service";

/**
 * Node for to-do item
 */
export class TodoItemNode {
    public children?: TodoItemNode[];
    public item?: string;
}

/** Flat to-do item node with expandable and level information */
export class TodoItemFlatNode {
    public item?: string;
    public level?: number;
    public expandable?: boolean;
}

/**
 * The Json object for to-do list data.
 */


/**
 * Checklist database, it can build a tree structured Json object.
 * Each node in Json object represents a to-do item or a category.
 * If a node is a category, it has children items and new items can be added under the category.
 */
@Injectable()
export class ChecklistDatabase {

    public dataChange = new BehaviorSubject<TodoItemNode[]>([]);

    get data(): TodoItemNode[] {
        return this.dataChange.value;
    }

    constructor(private _cache: CacheService) {
        this.getClassificatorTree();
    }

    public getClassificatorTree(): void {
        this._cache.getDataCache(CacheKeys.Classificator)
            .subscribe(item => this.initialize(item));
    }

    public initialize(treeData: any): void {
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        const data = this.buildFileTree(treeData, 0);

        // Notify the change.
        this.dataChange.next(data);
    }


    /**
     * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
     * The return value is the list of `TodoItemNode`.
     */
    public buildFileTree(obj: { [key: string]: any }, level: number): TodoItemNode[] {
        return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
            const value = obj[key];
            const node = new TodoItemNode();
            node.item = key;

            if (value != null) {
                if (typeof value === 'object') {
                    node.children = this.buildFileTree(value, level + 1);
                } else {
                    node.item = value;
                }
            }

            return accumulator.concat(node);
        }, []);
    }

    /** Add an item to to-do list */
    public insertItem(parent: TodoItemNode, name: string) {
        if (parent.children) {
            parent.children.push({ item: name } as TodoItemNode);
            this.dataChange.next(this.data);
        }
    }

    public updateItem(node: TodoItemNode, name: string) {
        node.item = name;
        this.dataChange.next(this.data);
    }
}