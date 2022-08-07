class ItemNode<K, T> {
    item: T;
    key: K;
    left: ItemNode<K, T> | null = null;
    right: ItemNode<K, T> | null = null;
    N: number;
    constructor(_key: K, _item: T, _N: number) {
        this.item = _item;
        this.key = _key;
        this.N = _N;
    }
}

class BinarySearchTree<K, T>{
    private root: ItemNode<K, T> = new ItemNode();
    private compare: (key1: K, key2: K) => (-1 | 0 | 1);
    constructor(_compare: (key1: K, key2: K) => (-1 | 0 | 1)) {
        this.compare = _compare;
    }
    public size() {
        return this.sizeP(this.root)
    }
    private sizeP(x: ItemNode<K, T> | null) {
        if (x == null) return 0;
        else return x.N
    }
    public get(key: K) {
        return this.getP(this.root, key)
    }
    private getP(x: ItemNode<K, T> | null, key: K): T | null {
        if (x == null) return null
        let cmp: Number = this.compare(key, x.key);
        if (cmp < 0) return this.getP(x.left, key);
        else if (cmp > 0) return this.getP(x.right, key);
        else return x.item;
    }
    public put(key: K, item: T) {
        this.root = this.putP(this.root, key, item);
    }
    private putP(x: ItemNode<K, T> | null, key: K, item: T): ItemNode<K, T> {
        if (x == null) return new ItemNode<K, T>(key, item, 1);
        let cmp: Number = this.compare(key, x.key);
        if (cmp < 0) x.left = this.putP(x.left, key, item);
        else if (cmp > 0) x.right = this.putP(x.right, key, item);
        else x.item = item;
        x.N = this.sizeP(x.left) + this.sizeP(x.right) + 1;
        return x;
    }
    public min(): K {
        return this.minP(this.root).key;
    }
    private minP(node: ItemNode<K, T>): ItemNode<K, T> {
        if (node.left === null) return node;
        return this.minP(node.left);
    }
    public max(): K {
        return this.maxP(this.root).key;
    }
    private maxP(node: ItemNode<K, T>): ItemNode<K, T> {
        if (node.right === null) return node;
        return this.maxP(node.right);
    }
    public floor(key: K): K | null {
        let node: ItemNode<K, T> | null = this.floorP(this.root, key);
        if (node === null) return null
        return node.key
    }
    //(Largest key) <= key
    private floorP(node: ItemNode<K, T> | null, key: K): ItemNode<K, T> | null {
        if (node === null) return null
        let cmp = this.compare(key, node.key);
        if (cmp === 0) return node
        if (cmp < 0) return this.floorP(node.left, key);  //key <node.key
        let temp: ItemNode<K, T> | null = this.floorP(node.right, key);
        if (temp !== null) return temp;
        else return node;
    }
    public ceil(key: K): K | null {
        let node: ItemNode<K, T> | null = this.ceilP(this.root, key);
        if (node === null) return null
        return node.key
    }
    //(Largest key) <= key
    private ceilP(node: ItemNode<K, T> | null, key: K): ItemNode<K, T> | null {
        if (node === null) return null
        let cmp = this.compare(key, node.key);
        if (cmp === 0) return node
        if (cmp > 0) return this.floorP(node.right, key);  //key >node.key
        let temp: ItemNode<K, T> | null = this.ceilP(node.left, key);
        if (temp !== null) return temp;
        else return node;
    }
    public select(k: number) {
        let node = this.selectP(this.root, k);
        return (node ? node.key : node);
    }
    private selectP(node: ItemNode<K, T> | null, targetRank: number): ItemNode<K, T> | null {
        //take me home
        if (node === null) return null
        let leftSubTreeSize = this.sizeP(node.left);
        if (leftSubTreeSize < targetRank) {
            return this.selectP(node.left, targetRank);
        }
        else if (leftSubTreeSize < targetRank) {
            return this.selectP(node.right, targetRank - leftSubTreeSize - 1);
            //targetRank-leftSubTreeSize-1 => we're subtracting the leftSubTreeSize because each node doesn't care about anything but its own size
        }
        else return node;
    }

}