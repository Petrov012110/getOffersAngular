import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { ParseDataViewModel } from "../../models/parse-data/parse-data.view-model";

@Component({ template: '' })
export class ParseTableBaseComponent implements AfterViewInit {

    public displayedColumns: string[] = ['name', 'price', 'store', 'post', 'seller', 'date', 'page-item'];
    public dataSource = new MatTableDataSource<ParseDataViewModel>();
    public tableData!: ParseDataViewModel[];

    @ViewChild(MatPaginator) 
    public paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}