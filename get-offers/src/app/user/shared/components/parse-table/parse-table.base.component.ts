import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ParseDataViewModel } from "../../models/parse-data/parse-data.view-model";
import { LocalStorageService } from "../../services/local-storage.service";

@Component({ template: '' })
export class ParseTableBaseComponent implements AfterViewInit {

    public displayedColumns: string[] = ['name', 'price', 'store', 'post', 'seller', 'date', 'page-item'];
    public dataSource = new MatTableDataSource<ParseDataViewModel>();
    public tableData!: ParseDataViewModel[];

    @ViewChild(MatPaginator) 
    public paginator!: MatPaginator;

    constructor(private _localStorage: LocalStorageService) {

    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    public handleItemLocalStorage(item: ParseDataViewModel): void {
        this._localStorage.getItems()
            .subscribe(items => {
                const isItemExist = items.some(i => JSON.stringify(i) === JSON.stringify(item));
                if (isItemExist) {
                    this._localStorage.removeItem(item);
                    item.bookmark = 'bookmark_border';
                } else {
                    this._localStorage.saveItem(item);
                    item.bookmark = 'bookmark';
                }
            });
    }
}