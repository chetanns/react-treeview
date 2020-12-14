/* eslint-disable */
declare global {
    interface String {
        getByDefault(): string;
    }

    interface Map<K,V> {
        getByDefault(key:string, valu:string):string;
    }
}

String.prototype.getByDefault = function(): string {
    return this.toString() +'==========';
}

Map.prototype.getByDefault = function(key:string, value:string):string {
    return this.has(key)?this.get(key):value;
}

export {}