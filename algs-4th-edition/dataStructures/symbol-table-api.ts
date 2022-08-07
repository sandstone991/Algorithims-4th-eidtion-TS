interface SymbolTableApi<Key, Value> {
    //put key-value pait inro the table/remove key if value is null
    put(key: Key, value: Value): void;
    //get the value with paired key/null if absent
    get(key: Key): Value;
    //Remove key and its value from the table
    delete(key: Key): void;
    //is there a value paired with key?
    contains(key: Key): boolean;
    //is the table empty
    isEmpty(): boolean;
    size(low?: Key, high?: Key): number;
    min(): Key;
    max(): Key;
    //Largest key less than or equal to key
    floor(key: Key): Key;
    //Smallest key greater than or equal to key
    ceiling(key: Key): Key;
    //Number of keys less than key
    rank(key: Key): number;
    //key of rank k
    select(k: number): Key;
    deletMin(): void;
    deleteMax(): void;
    //Return keys in sorted order [low?(0):hi?(keys.length-1)]
    keys(low?: Key, hi?: Key): Iterable<Key>;
}
