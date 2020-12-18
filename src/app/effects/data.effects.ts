import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { ProductService } from "../services/product.service";
import * as DataActions from "../actions/data.actions";

@Injectable()
export class DataEffects {
    constructor(private actions: Actions, private dataService: ProductService) { }

    @Effect()
    loadData = this.actions.pipe(
        ofType(DataActions.ActionTypes.LoadDataBegin),
        switchMap(() => {
            return this.dataService.loadData().pipe(
                map(data => new DataActions.LoadDataSuccess({ data: data })),
                catchError(error =>
                    of(new DataActions.LoadDataFailure({ error: error }))
                )
            );
        })
    );
}