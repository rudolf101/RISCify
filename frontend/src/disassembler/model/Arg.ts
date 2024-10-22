class Arg {
    constructor(data: String) {
        this._data = data;
    }

    private readonly _data: String;

    get data(): String {
        return this._data;
    }

}

export {Arg};
