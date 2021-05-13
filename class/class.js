var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(date, brand, doors) {
        var _this = _super.call(this) || this;
        _this.speedUp = function () {
            console.log('Speed Up');
        };
        _this.decelerate = function () {
            console.log('Decelerate');
        };
        _this.date = date;
        _this.brand = brand;
        _this.doors = doors;
        return _this;
    }
    Object.defineProperty(Auto.prototype, "setDate", {
        set: function (date) {
            this.date = date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "getDate", {
        get: function () {
            return this.date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "setBrand", {
        set: function (brand) {
            this.brand = brand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "getBrand", {
        get: function () {
            return this.brand;
        },
        enumerable: false,
        configurable: true
    });
    return Auto;
}(Vehicle));
var auto = new Auto('2020-01-01', 'Toyota', 4);
console.log(auto.getDate);
auto.setDate = '2017-02-01';
console.log(auto.getDate);
auto.speedUp();
