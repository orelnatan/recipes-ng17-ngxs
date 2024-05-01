import { Injectable, inject } from "@angular/core";
import { collectionData, Firestore } from "@angular/fire/firestore";
import { doc, deleteDoc, collection, CollectionReference, addDoc, updateDoc } from "firebase/firestore";
import { delay, EMPTY, first, from, map, Observable, of, switchMap, tap } from "rxjs";

import { IRecipe } from "../models";

import * as moment from 'moment';

@Injectable({
    providedIn: "root",
})
export class RecipesService {
    private firestore: Firestore = inject(Firestore);
    recipesCollection: CollectionReference;
    recipes$: Observable<IRecipe[]>;
    
    constructor() {
        // get a reference to the recipes collection
        this.recipesCollection = collection(this.firestore, 'recipes');
    }

    fetchRecipes(): Observable<IRecipe[]> {
      return (<Observable<IRecipe[]>>collectionData(
        this.recipesCollection, { idField: 'id' }
      ));
    }

    addRecipe(recipe: IRecipe): Observable<void> {
      if (!recipe) return EMPTY;

      return from(addDoc(this.recipesCollection, <IRecipe>{ ...recipe, createdAt: moment().format('DD/MM/YYYY') })).pipe(
        tap(docRef => console.log(`Added a new recipe with ID: ${docRef.id}`)),
        switchMap(docRef => updateDoc(doc(this.firestore, "recipes", docRef.id), { ... recipe, id: docRef.id })),
        first()
      );
    }

    updateRecipe(id: string, recipe: IRecipe): Observable<void> {
      if (!recipe) return EMPTY;

      return from(updateDoc(doc(this.firestore, "recipes", id), { ... recipe })).pipe(
        first(),
        tap(() => console.log(`Updated recipe with ID: ${id}`))
      );
    }

    deleteRecipe(id: string): Observable<void> {
      if (!id) return EMPTY;

      return from(deleteDoc(doc(this.firestore, "recipes", id))).pipe(
        first(),
        tap(() => console.log(`Removed recipe with ID: ${id}`))
      );
    }
}