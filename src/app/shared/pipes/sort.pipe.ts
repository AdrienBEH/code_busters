import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {

    /**
     * Return a new sorted shallow-copied Array instance from an Array value.
     * 
     * @param {Array<string|number|Object>} value - The Array instance to copy.
     * @param {'ASC'|'DSC'='ASC'} order - Sort order. ASCending or DeSCending.
     * @param {string=} path - If it is an array of objects, the path of the property used for the comparison
     * @returns {Array<string|number|Object>} The sorted shallow-copied Array.
     */
    transform<T>(
        value: Array<string|number|Object>,
        order: 'ASC'|'DSC' = 'ASC',
        path?: string
    ): Array<string|number|Object> {
        if (path) {
        return Array.from(value).sort(order === 'ASC' ? ascCompareFn(path.split('.')) : dscCompareFn(path.split('.')));
        }
        return Array.from(value as Array<number|string>).sort(order === 'ASC' ? ascCompareFn() : dscCompareFn());
    }

}

/**
 * Ascendant comparison function that compare two value with same primitive type.
 * 
 * @param keys 
 * @returns 
 */
function ascCompareFn(): (a: number|string, b: number|string) => number;
/**
 * Ascendant Upward comparison function that compares the property of two objects
 * with the same signature
 * 
 * @param keys 
 * @returns 
 */
function ascCompareFn<T extends Object>(keys?: string[]): (a: T, b: T) => number;
function ascCompareFn(keys?: string[]): (a: any, b: any) => number {
    if (keys?.length) {
        return (a, b) => {
            if (find(keys, a) < find(keys, b)) return -1;
            if (find(keys, a) > find(keys, b)) return 1;
            return 0;
        }
    }
    return (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }
}

/**
 * Descendant comparison function that compare two value with same primitive type.
 * 
 * @param keys 
 * @returns 
 */
function dscCompareFn(): (a: number|string, b: number|string) => number;
/**
 * Descendant Upward comparison function that compares the property of two objects
 * with the same signature
 * 
 * @param keys 
 * @returns 
 */
function dscCompareFn<T extends Object>(keys?: string[]): (a: T, b: T) => number;
function dscCompareFn(keys?: string[]): (a: any, b: any) => number {
    if (keys?.length) {
        return (a, b) => {
            if (find(keys, a) < find(keys, b)) return 1;
            if (find(keys, a) > find(keys, b)) return -1;
            return 0;
        }
    }
    return (a, b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        return 0;
    }
}

/**
 * Recursive function that browse an object to return the value of the targeted property.
 * The browse is done in the order of the keys sent as parameters.
 * 
 * @param keys 
 * @param value 
 * @returns 
 */
function find(keys: string[], value: any): any {
    if (!keys.length) return value;
    return find(keys.slice(1), value[keys[0]]);
}