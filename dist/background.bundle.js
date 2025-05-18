/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@aws-crypto/crc32/build/aws_crc32.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aws-crypto/crc32/build/aws_crc32.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsCrc32 = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js");
var util_1 = __webpack_require__(/*! @aws-crypto/util */ "./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/index.js");
var index_1 = __webpack_require__(/*! ./index */ "./node_modules/@aws-crypto/crc32/build/index.js");
var AwsCrc32 = /** @class */ (function () {
    function AwsCrc32() {
        this.crc32 = new index_1.Crc32();
    }
    AwsCrc32.prototype.update = function (toHash) {
        if ((0, util_1.isEmptyData)(toHash))
            return;
        this.crc32.update((0, util_1.convertToBuffer)(toHash));
    };
    AwsCrc32.prototype.digest = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, (0, util_1.numToUint8)(this.crc32.digest())];
            });
        });
    };
    return AwsCrc32;
}());
exports.AwsCrc32 = AwsCrc32;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzX2NyYzMyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2F3c19jcmMzMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQW9FO0FBQ3BFLHNDQUFzQzs7OztBQUd0Qyx5Q0FBNEU7QUFDNUUsaUNBQWdDO0FBRWhDO0lBQUE7UUFDbUIsVUFBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7SUFXdkMsQ0FBQztJQVRDLHlCQUFNLEdBQU4sVUFBTyxNQUFrQjtRQUN2QixJQUFJLElBQUEsa0JBQVcsRUFBQyxNQUFNLENBQUM7WUFBRSxPQUFPO1FBRWhDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUEsc0JBQWUsRUFBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFSyx5QkFBTSxHQUFaOzs7Z0JBQ0Usc0JBQU8sSUFBQSxpQkFBVSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBQzs7O0tBQ3hDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcblxuaW1wb3J0IHsgSGFzaCwgU291cmNlRGF0YSB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuaW1wb3J0IHsgY29udmVydFRvQnVmZmVyLCBpc0VtcHR5RGF0YSwgbnVtVG9VaW50OCB9IGZyb20gXCJAYXdzLWNyeXB0by91dGlsXCI7XG5pbXBvcnQgeyBDcmMzMiB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmV4cG9ydCBjbGFzcyBBd3NDcmMzMiBpbXBsZW1lbnRzIEhhc2gge1xuICBwcml2YXRlIHJlYWRvbmx5IGNyYzMyID0gbmV3IENyYzMyKCk7XG5cbiAgdXBkYXRlKHRvSGFzaDogU291cmNlRGF0YSkge1xuICAgIGlmIChpc0VtcHR5RGF0YSh0b0hhc2gpKSByZXR1cm47XG5cbiAgICB0aGlzLmNyYzMyLnVwZGF0ZShjb252ZXJ0VG9CdWZmZXIodG9IYXNoKSk7XG4gIH1cblxuICBhc3luYyBkaWdlc3QoKTogUHJvbWlzZTxVaW50OEFycmF5PiB7XG4gICAgcmV0dXJuIG51bVRvVWludDgodGhpcy5jcmMzMi5kaWdlc3QoKSk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/@aws-crypto/crc32/build/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@aws-crypto/crc32/build/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js");
var util_1 = __webpack_require__(/*! @aws-crypto/util */ "./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/index.js");
function crc32(data) {
    return new Crc32().update(data).digest();
}
exports.crc32 = crc32;
var Crc32 = /** @class */ (function () {
    function Crc32() {
        this.checksum = 0xffffffff;
    }
    Crc32.prototype.update = function (data) {
        var e_1, _a;
        try {
            for (var data_1 = (0, tslib_1.__values)(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var byte = data_1_1.value;
                this.checksum =
                    (this.checksum >>> 8) ^ lookupTable[(this.checksum ^ byte) & 0xff];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    Crc32.prototype.digest = function () {
        return (this.checksum ^ 0xffffffff) >>> 0;
    };
    return Crc32;
}());
exports.Crc32 = Crc32;
// prettier-ignore
var a_lookUpTable = [
    0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA,
    0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3,
    0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988,
    0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91,
    0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
    0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,
    0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC,
    0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5,
    0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172,
    0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
    0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940,
    0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59,
    0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116,
    0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F,
    0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
    0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D,
    0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A,
    0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433,
    0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818,
    0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
    0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E,
    0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457,
    0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C,
    0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65,
    0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
    0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB,
    0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0,
    0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9,
    0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086,
    0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
    0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4,
    0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD,
    0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A,
    0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683,
    0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
    0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1,
    0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE,
    0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7,
    0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC,
    0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
    0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252,
    0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B,
    0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60,
    0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79,
    0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
    0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F,
    0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04,
    0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D,
    0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A,
    0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
    0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38,
    0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21,
    0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E,
    0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777,
    0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
    0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45,
    0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2,
    0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB,
    0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0,
    0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
    0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6,
    0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF,
    0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94,
    0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D,
];
var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
var aws_crc32_1 = __webpack_require__(/*! ./aws_crc32 */ "./node_modules/@aws-crypto/crc32/build/aws_crc32.js");
Object.defineProperty(exports, "AwsCrc32", ({ enumerable: true, get: function () { return aws_crc32_1.AwsCrc32; } }));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHlDQUFpRDtBQUVqRCxTQUFnQixLQUFLLENBQUMsSUFBZ0I7SUFDcEMsT0FBTyxJQUFJLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMzQyxDQUFDO0FBRkQsc0JBRUM7QUFFRDtJQUFBO1FBQ1UsYUFBUSxHQUFHLFVBQVUsQ0FBQztJQWNoQyxDQUFDO0lBWkMsc0JBQU0sR0FBTixVQUFPLElBQWdCOzs7WUFDckIsS0FBbUIsSUFBQSxTQUFBLHNCQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtnQkFBcEIsSUFBTSxJQUFJLGlCQUFBO2dCQUNiLElBQUksQ0FBQyxRQUFRO29CQUNYLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ3RFOzs7Ozs7Ozs7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxzQkFBTSxHQUFOO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxzQkFBSztBQWlCbEIsa0JBQWtCO0FBQ2xCLElBQU0sYUFBYSxHQUFHO0lBQ3BCLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7SUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVTtJQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO0lBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7Q0FDL0MsQ0FBQztBQUNGLElBQU0sV0FBVyxHQUFnQixJQUFBLHNCQUFlLEVBQUMsYUFBYSxDQUFDLENBQUE7QUFDL0QseUNBQXVDO0FBQTlCLHFHQUFBLFFBQVEsT0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dWludDMyQXJyYXlGcm9tfSBmcm9tIFwiQGF3cy1jcnlwdG8vdXRpbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JjMzIoZGF0YTogVWludDhBcnJheSk6IG51bWJlciB7XG4gIHJldHVybiBuZXcgQ3JjMzIoKS51cGRhdGUoZGF0YSkuZGlnZXN0KCk7XG59XG5cbmV4cG9ydCBjbGFzcyBDcmMzMiB7XG4gIHByaXZhdGUgY2hlY2tzdW0gPSAweGZmZmZmZmZmO1xuXG4gIHVwZGF0ZShkYXRhOiBVaW50OEFycmF5KTogdGhpcyB7XG4gICAgZm9yIChjb25zdCBieXRlIG9mIGRhdGEpIHtcbiAgICAgIHRoaXMuY2hlY2tzdW0gPVxuICAgICAgICAodGhpcy5jaGVja3N1bSA+Pj4gOCkgXiBsb29rdXBUYWJsZVsodGhpcy5jaGVja3N1bSBeIGJ5dGUpICYgMHhmZl07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaWdlc3QoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHRoaXMuY2hlY2tzdW0gXiAweGZmZmZmZmZmKSA+Pj4gMDtcbiAgfVxufVxuXG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGFfbG9va1VwVGFibGUgPSBbXG4gIDB4MDAwMDAwMDAsIDB4NzcwNzMwOTYsIDB4RUUwRTYxMkMsIDB4OTkwOTUxQkEsXG4gIDB4MDc2REM0MTksIDB4NzA2QUY0OEYsIDB4RTk2M0E1MzUsIDB4OUU2NDk1QTMsXG4gIDB4MEVEQjg4MzIsIDB4NzlEQ0I4QTQsIDB4RTBENUU5MUUsIDB4OTdEMkQ5ODgsXG4gIDB4MDlCNjRDMkIsIDB4N0VCMTdDQkQsIDB4RTdCODJEMDcsIDB4OTBCRjFEOTEsXG4gIDB4MURCNzEwNjQsIDB4NkFCMDIwRjIsIDB4RjNCOTcxNDgsIDB4ODRCRTQxREUsXG4gIDB4MUFEQUQ0N0QsIDB4NkREREU0RUIsIDB4RjRENEI1NTEsIDB4ODNEMzg1QzcsXG4gIDB4MTM2Qzk4NTYsIDB4NjQ2QkE4QzAsIDB4RkQ2MkY5N0EsIDB4OEE2NUM5RUMsXG4gIDB4MTQwMTVDNEYsIDB4NjMwNjZDRDksIDB4RkEwRjNENjMsIDB4OEQwODBERjUsXG4gIDB4M0I2RTIwQzgsIDB4NEM2OTEwNUUsIDB4RDU2MDQxRTQsIDB4QTI2NzcxNzIsXG4gIDB4M0MwM0U0RDEsIDB4NEIwNEQ0NDcsIDB4RDIwRDg1RkQsIDB4QTUwQUI1NkIsXG4gIDB4MzVCNUE4RkEsIDB4NDJCMjk4NkMsIDB4REJCQkM5RDYsIDB4QUNCQ0Y5NDAsXG4gIDB4MzJEODZDRTMsIDB4NDVERjVDNzUsIDB4RENENjBEQ0YsIDB4QUJEMTNENTksXG4gIDB4MjZEOTMwQUMsIDB4NTFERTAwM0EsIDB4QzhENzUxODAsIDB4QkZEMDYxMTYsXG4gIDB4MjFCNEY0QjUsIDB4NTZCM0M0MjMsIDB4Q0ZCQTk1OTksIDB4QjhCREE1MEYsXG4gIDB4MjgwMkI4OUUsIDB4NUYwNTg4MDgsIDB4QzYwQ0Q5QjIsIDB4QjEwQkU5MjQsXG4gIDB4MkY2RjdDODcsIDB4NTg2ODRDMTEsIDB4QzE2MTFEQUIsIDB4QjY2NjJEM0QsXG4gIDB4NzZEQzQxOTAsIDB4MDFEQjcxMDYsIDB4OThEMjIwQkMsIDB4RUZENTEwMkEsXG4gIDB4NzFCMTg1ODksIDB4MDZCNkI1MUYsIDB4OUZCRkU0QTUsIDB4RThCOEQ0MzMsXG4gIDB4NzgwN0M5QTIsIDB4MEYwMEY5MzQsIDB4OTYwOUE4OEUsIDB4RTEwRTk4MTgsXG4gIDB4N0Y2QTBEQkIsIDB4MDg2RDNEMkQsIDB4OTE2NDZDOTcsIDB4RTY2MzVDMDEsXG4gIDB4NkI2QjUxRjQsIDB4MUM2QzYxNjIsIDB4ODU2NTMwRDgsIDB4RjI2MjAwNEUsXG4gIDB4NkMwNjk1RUQsIDB4MUIwMUE1N0IsIDB4ODIwOEY0QzEsIDB4RjUwRkM0NTcsXG4gIDB4NjVCMEQ5QzYsIDB4MTJCN0U5NTAsIDB4OEJCRUI4RUEsIDB4RkNCOTg4N0MsXG4gIDB4NjJERDFEREYsIDB4MTVEQTJENDksIDB4OENEMzdDRjMsIDB4RkJENDRDNjUsXG4gIDB4NERCMjYxNTgsIDB4M0FCNTUxQ0UsIDB4QTNCQzAwNzQsIDB4RDRCQjMwRTIsXG4gIDB4NEFERkE1NDEsIDB4M0REODk1RDcsIDB4QTREMUM0NkQsIDB4RDNENkY0RkIsXG4gIDB4NDM2OUU5NkEsIDB4MzQ2RUQ5RkMsIDB4QUQ2Nzg4NDYsIDB4REE2MEI4RDAsXG4gIDB4NDQwNDJENzMsIDB4MzMwMzFERTUsIDB4QUEwQTRDNUYsIDB4REQwRDdDQzksXG4gIDB4NTAwNTcxM0MsIDB4MjcwMjQxQUEsIDB4QkUwQjEwMTAsIDB4QzkwQzIwODYsXG4gIDB4NTc2OEI1MjUsIDB4MjA2Rjg1QjMsIDB4Qjk2NkQ0MDksIDB4Q0U2MUU0OUYsXG4gIDB4NUVERUY5MEUsIDB4MjlEOUM5OTgsIDB4QjBEMDk4MjIsIDB4QzdEN0E4QjQsXG4gIDB4NTlCMzNEMTcsIDB4MkVCNDBEODEsIDB4QjdCRDVDM0IsIDB4QzBCQTZDQUQsXG4gIDB4RURCODgzMjAsIDB4OUFCRkIzQjYsIDB4MDNCNkUyMEMsIDB4NzRCMUQyOUEsXG4gIDB4RUFENTQ3MzksIDB4OUREMjc3QUYsIDB4MDREQjI2MTUsIDB4NzNEQzE2ODMsXG4gIDB4RTM2MzBCMTIsIDB4OTQ2NDNCODQsIDB4MEQ2RDZBM0UsIDB4N0E2QTVBQTgsXG4gIDB4RTQwRUNGMEIsIDB4OTMwOUZGOUQsIDB4MEEwMEFFMjcsIDB4N0QwNzlFQjEsXG4gIDB4RjAwRjkzNDQsIDB4ODcwOEEzRDIsIDB4MUUwMUYyNjgsIDB4NjkwNkMyRkUsXG4gIDB4Rjc2MjU3NUQsIDB4ODA2NTY3Q0IsIDB4MTk2QzM2NzEsIDB4NkU2QjA2RTcsXG4gIDB4RkVENDFCNzYsIDB4ODlEMzJCRTAsIDB4MTBEQTdBNUEsIDB4NjdERDRBQ0MsXG4gIDB4RjlCOURGNkYsIDB4OEVCRUVGRjksIDB4MTdCN0JFNDMsIDB4NjBCMDhFRDUsXG4gIDB4RDZENkEzRTgsIDB4QTFEMTkzN0UsIDB4MzhEOEMyQzQsIDB4NEZERkYyNTIsXG4gIDB4RDFCQjY3RjEsIDB4QTZCQzU3NjcsIDB4M0ZCNTA2REQsIDB4NDhCMjM2NEIsXG4gIDB4RDgwRDJCREEsIDB4QUYwQTFCNEMsIDB4MzYwMzRBRjYsIDB4NDEwNDdBNjAsXG4gIDB4REY2MEVGQzMsIDB4QTg2N0RGNTUsIDB4MzE2RThFRUYsIDB4NDY2OUJFNzksXG4gIDB4Q0I2MUIzOEMsIDB4QkM2NjgzMUEsIDB4MjU2RkQyQTAsIDB4NTI2OEUyMzYsXG4gIDB4Q0MwQzc3OTUsIDB4QkIwQjQ3MDMsIDB4MjIwMjE2QjksIDB4NTUwNTI2MkYsXG4gIDB4QzVCQTNCQkUsIDB4QjJCRDBCMjgsIDB4MkJCNDVBOTIsIDB4NUNCMzZBMDQsXG4gIDB4QzJEN0ZGQTcsIDB4QjVEMENGMzEsIDB4MkNEOTlFOEIsIDB4NUJERUFFMUQsXG4gIDB4OUI2NEMyQjAsIDB4RUM2M0YyMjYsIDB4NzU2QUEzOUMsIDB4MDI2RDkzMEEsXG4gIDB4OUMwOTA2QTksIDB4RUIwRTM2M0YsIDB4NzIwNzY3ODUsIDB4MDUwMDU3MTMsXG4gIDB4OTVCRjRBODIsIDB4RTJCODdBMTQsIDB4N0JCMTJCQUUsIDB4MENCNjFCMzgsXG4gIDB4OTJEMjhFOUIsIDB4RTVENUJFMEQsIDB4N0NEQ0VGQjcsIDB4MEJEQkRGMjEsXG4gIDB4ODZEM0QyRDQsIDB4RjFENEUyNDIsIDB4NjhEREIzRjgsIDB4MUZEQTgzNkUsXG4gIDB4ODFCRTE2Q0QsIDB4RjZCOTI2NUIsIDB4NkZCMDc3RTEsIDB4MThCNzQ3NzcsXG4gIDB4ODgwODVBRTYsIDB4RkYwRjZBNzAsIDB4NjYwNjNCQ0EsIDB4MTEwMTBCNUMsXG4gIDB4OEY2NTlFRkYsIDB4Rjg2MkFFNjksIDB4NjE2QkZGRDMsIDB4MTY2Q0NGNDUsXG4gIDB4QTAwQUUyNzgsIDB4RDcwREQyRUUsIDB4NEUwNDgzNTQsIDB4MzkwM0IzQzIsXG4gIDB4QTc2NzI2NjEsIDB4RDA2MDE2RjcsIDB4NDk2OTQ3NEQsIDB4M0U2RTc3REIsXG4gIDB4QUVEMTZBNEEsIDB4RDlENjVBREMsIDB4NDBERjBCNjYsIDB4MzdEODNCRjAsXG4gIDB4QTlCQ0FFNTMsIDB4REVCQjlFQzUsIDB4NDdCMkNGN0YsIDB4MzBCNUZGRTksXG4gIDB4QkRCREYyMUMsIDB4Q0FCQUMyOEEsIDB4NTNCMzkzMzAsIDB4MjRCNEEzQTYsXG4gIDB4QkFEMDM2MDUsIDB4Q0RENzA2OTMsIDB4NTRERTU3MjksIDB4MjNEOTY3QkYsXG4gIDB4QjM2NjdBMkUsIDB4QzQ2MTRBQjgsIDB4NUQ2ODFCMDIsIDB4MkE2RjJCOTQsXG4gIDB4QjQwQkJFMzcsIDB4QzMwQzhFQTEsIDB4NUEwNURGMUIsIDB4MkQwMkVGOEQsXG5dO1xuY29uc3QgbG9va3VwVGFibGU6IFVpbnQzMkFycmF5ID0gdWludDMyQXJyYXlGcm9tKGFfbG9va1VwVGFibGUpXG5leHBvcnQgeyBBd3NDcmMzMiB9IGZyb20gXCIuL2F3c19jcmMzMlwiO1xuIl19

/***/ }),

/***/ "./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/convertToBuffer.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/convertToBuffer.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToBuffer = void 0;
var util_utf8_browser_1 = __webpack_require__(/*! @aws-sdk/util-utf8-browser */ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js");
// Quick polyfill
var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from
    ? function (input) { return Buffer.from(input, "utf8"); }
    : util_utf8_browser_1.fromUtf8;
function convertToBuffer(data) {
    // Already a Uint8, do nothing
    if (data instanceof Uint8Array)
        return data;
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
exports.convertToBuffer = convertToBuffer;
//# sourceMappingURL=convertToBuffer.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/index.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
var convertToBuffer_1 = __webpack_require__(/*! ./convertToBuffer */ "./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/convertToBuffer.js");
Object.defineProperty(exports, "convertToBuffer", ({ enumerable: true, get: function () { return convertToBuffer_1.convertToBuffer; } }));
var isEmptyData_1 = __webpack_require__(/*! ./isEmptyData */ "./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/isEmptyData.js");
Object.defineProperty(exports, "isEmptyData", ({ enumerable: true, get: function () { return isEmptyData_1.isEmptyData; } }));
var numToUint8_1 = __webpack_require__(/*! ./numToUint8 */ "./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/numToUint8.js");
Object.defineProperty(exports, "numToUint8", ({ enumerable: true, get: function () { return numToUint8_1.numToUint8; } }));
var uint32ArrayFrom_1 = __webpack_require__(/*! ./uint32ArrayFrom */ "./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/uint32ArrayFrom.js");
Object.defineProperty(exports, "uint32ArrayFrom", ({ enumerable: true, get: function () { return uint32ArrayFrom_1.uint32ArrayFrom; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/isEmptyData.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/isEmptyData.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isEmptyData = void 0;
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
exports.isEmptyData = isEmptyData;
//# sourceMappingURL=isEmptyData.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/numToUint8.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/numToUint8.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.numToUint8 = void 0;
function numToUint8(num) {
    return new Uint8Array([
        (num & 0xff000000) >> 24,
        (num & 0x00ff0000) >> 16,
        (num & 0x0000ff00) >> 8,
        num & 0x000000ff,
    ]);
}
exports.numToUint8 = numToUint8;
//# sourceMappingURL=numToUint8.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/uint32ArrayFrom.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@aws-crypto/crc32/node_modules/@aws-crypto/util/build/uint32ArrayFrom.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uint32ArrayFrom = void 0;
// IE 11 does not support Array.from, so we do it manually
function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
        }
        return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
}
exports.uint32ArrayFrom = uint32ArrayFrom;
//# sourceMappingURL=uint32ArrayFrom.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RawSha256: () => (/* binding */ RawSha256)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-crypto/sha256-js/build/module/constants.js");

/**
 * @internal
 */
var RawSha256 = /** @class */ (function () {
    function RawSha256() {
        this.state = Int32Array.from(_constants__WEBPACK_IMPORTED_MODULE_0__.INIT);
        this.temp = new Int32Array(64);
        this.buffer = new Uint8Array(64);
        this.bufferLength = 0;
        this.bytesHashed = 0;
        /**
         * @internal
         */
        this.finished = false;
    }
    RawSha256.prototype.update = function (data) {
        if (this.finished) {
            throw new Error("Attempted to update an already finished hash.");
        }
        var position = 0;
        var byteLength = data.byteLength;
        this.bytesHashed += byteLength;
        if (this.bytesHashed * 8 > _constants__WEBPACK_IMPORTED_MODULE_0__.MAX_HASHABLE_LENGTH) {
            throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while (byteLength > 0) {
            this.buffer[this.bufferLength++] = data[position++];
            byteLength--;
            if (this.bufferLength === _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE) {
                this.hashBuffer();
                this.bufferLength = 0;
            }
        }
    };
    RawSha256.prototype.digest = function () {
        if (!this.finished) {
            var bitsHashed = this.bytesHashed * 8;
            var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
            var undecoratedLength = this.bufferLength;
            bufferView.setUint8(this.bufferLength++, 0x80);
            // Ensure the final block has enough room for the hashed length
            if (undecoratedLength % _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE >= _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE - 8) {
                for (var i = this.bufferLength; i < _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE; i++) {
                    bufferView.setUint8(i, 0);
                }
                this.hashBuffer();
                this.bufferLength = 0;
            }
            for (var i = this.bufferLength; i < _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE - 8; i++) {
                bufferView.setUint8(i, 0);
            }
            bufferView.setUint32(_constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE - 8, Math.floor(bitsHashed / 0x100000000), true);
            bufferView.setUint32(_constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE - 4, bitsHashed);
            this.hashBuffer();
            this.finished = true;
        }
        // The value in state is little-endian rather than big-endian, so flip
        // each word into a new Uint8Array
        var out = new Uint8Array(_constants__WEBPACK_IMPORTED_MODULE_0__.DIGEST_LENGTH);
        for (var i = 0; i < 8; i++) {
            out[i * 4] = (this.state[i] >>> 24) & 0xff;
            out[i * 4 + 1] = (this.state[i] >>> 16) & 0xff;
            out[i * 4 + 2] = (this.state[i] >>> 8) & 0xff;
            out[i * 4 + 3] = (this.state[i] >>> 0) & 0xff;
        }
        return out;
    };
    RawSha256.prototype.hashBuffer = function () {
        var _a = this, buffer = _a.buffer, state = _a.state;
        var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
        for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE; i++) {
            if (i < 16) {
                this.temp[i] =
                    ((buffer[i * 4] & 0xff) << 24) |
                        ((buffer[i * 4 + 1] & 0xff) << 16) |
                        ((buffer[i * 4 + 2] & 0xff) << 8) |
                        (buffer[i * 4 + 3] & 0xff);
            }
            else {
                var u = this.temp[i - 2];
                var t1_1 = ((u >>> 17) | (u << 15)) ^ ((u >>> 19) | (u << 13)) ^ (u >>> 10);
                u = this.temp[i - 15];
                var t2_1 = ((u >>> 7) | (u << 25)) ^ ((u >>> 18) | (u << 14)) ^ (u >>> 3);
                this.temp[i] =
                    ((t1_1 + this.temp[i - 7]) | 0) + ((t2_1 + this.temp[i - 16]) | 0);
            }
            var t1 = ((((((state4 >>> 6) | (state4 << 26)) ^
                ((state4 >>> 11) | (state4 << 21)) ^
                ((state4 >>> 25) | (state4 << 7))) +
                ((state4 & state5) ^ (~state4 & state6))) |
                0) +
                ((state7 + ((_constants__WEBPACK_IMPORTED_MODULE_0__.KEY[i] + this.temp[i]) | 0)) | 0)) |
                0;
            var t2 = ((((state0 >>> 2) | (state0 << 30)) ^
                ((state0 >>> 13) | (state0 << 19)) ^
                ((state0 >>> 22) | (state0 << 10))) +
                ((state0 & state1) ^ (state0 & state2) ^ (state1 & state2))) |
                0;
            state7 = state6;
            state6 = state5;
            state5 = state4;
            state4 = (state3 + t1) | 0;
            state3 = state2;
            state2 = state1;
            state1 = state0;
            state0 = (t1 + t2) | 0;
        }
        state[0] += state0;
        state[1] += state1;
        state[2] += state2;
        state[3] += state3;
        state[4] += state4;
        state[5] += state5;
        state[6] += state6;
        state[7] += state7;
    };
    return RawSha256;
}());

//# sourceMappingURL=RawSha256.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-js/build/module/constants.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-js/build/module/constants.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BLOCK_SIZE: () => (/* binding */ BLOCK_SIZE),
/* harmony export */   DIGEST_LENGTH: () => (/* binding */ DIGEST_LENGTH),
/* harmony export */   INIT: () => (/* binding */ INIT),
/* harmony export */   KEY: () => (/* binding */ KEY),
/* harmony export */   MAX_HASHABLE_LENGTH: () => (/* binding */ MAX_HASHABLE_LENGTH)
/* harmony export */ });
/**
 * @internal
 */
var BLOCK_SIZE = 64;
/**
 * @internal
 */
var DIGEST_LENGTH = 32;
/**
 * @internal
 */
var KEY = new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
/**
 * @internal
 */
var INIT = [
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19
];
/**
 * @internal
 */
var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-js/build/module/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-js/build/module/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sha256: () => (/* reexport safe */ _jsSha256__WEBPACK_IMPORTED_MODULE_0__.Sha256)
/* harmony export */ });
/* harmony import */ var _jsSha256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsSha256 */ "./node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sha256: () => (/* binding */ Sha256)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-crypto/sha256-js/build/module/constants.js");
/* harmony import */ var _RawSha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RawSha256 */ "./node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js");
/* harmony import */ var _aws_crypto_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-crypto/util */ "./node_modules/@aws-crypto/util/build/module/index.js");




var Sha256 = /** @class */ (function () {
    function Sha256(secret) {
        this.secret = secret;
        this.hash = new _RawSha256__WEBPACK_IMPORTED_MODULE_1__.RawSha256();
        this.reset();
    }
    Sha256.prototype.update = function (toHash) {
        if ((0,_aws_crypto_util__WEBPACK_IMPORTED_MODULE_2__.isEmptyData)(toHash) || this.error) {
            return;
        }
        try {
            this.hash.update((0,_aws_crypto_util__WEBPACK_IMPORTED_MODULE_2__.convertToBuffer)(toHash));
        }
        catch (e) {
            this.error = e;
        }
    };
    /* This synchronous method keeps compatibility
     * with the v2 aws-sdk.
     */
    Sha256.prototype.digestSync = function () {
        if (this.error) {
            throw this.error;
        }
        if (this.outer) {
            if (!this.outer.finished) {
                this.outer.update(this.hash.digest());
            }
            return this.outer.digest();
        }
        return this.hash.digest();
    };
    /* The underlying digest method here is synchronous.
     * To keep the same interface with the other hash functions
     * the default is to expose this as an async method.
     * However, it can sometimes be useful to have a sync method.
     */
    Sha256.prototype.digest = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                return [2 /*return*/, this.digestSync()];
            });
        });
    };
    Sha256.prototype.reset = function () {
        this.hash = new _RawSha256__WEBPACK_IMPORTED_MODULE_1__.RawSha256();
        if (this.secret) {
            this.outer = new _RawSha256__WEBPACK_IMPORTED_MODULE_1__.RawSha256();
            var inner = bufferFromSecret(this.secret);
            var outer = new Uint8Array(_constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE);
            outer.set(inner);
            for (var i = 0; i < _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE; i++) {
                inner[i] ^= 0x36;
                outer[i] ^= 0x5c;
            }
            this.hash.update(inner);
            this.outer.update(outer);
            // overwrite the copied key in memory
            for (var i = 0; i < inner.byteLength; i++) {
                inner[i] = 0;
            }
        }
    };
    return Sha256;
}());

function bufferFromSecret(secret) {
    var input = (0,_aws_crypto_util__WEBPACK_IMPORTED_MODULE_2__.convertToBuffer)(secret);
    if (input.byteLength > _constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE) {
        var bufferHash = new _RawSha256__WEBPACK_IMPORTED_MODULE_1__.RawSha256();
        bufferHash.update(input);
        input = bufferHash.digest();
    }
    var buffer = new Uint8Array(_constants__WEBPACK_IMPORTED_MODULE_0__.BLOCK_SIZE);
    buffer.set(input);
    return buffer;
}
//# sourceMappingURL=jsSha256.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/module/convertToBuffer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/module/convertToBuffer.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToBuffer: () => (/* binding */ convertToBuffer)
/* harmony export */ });
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/util-utf8 */ "./node_modules/@smithy/util-utf8/dist-es/index.js");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// Quick polyfill
var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from
    ? function (input) { return Buffer.from(input, "utf8"); }
    : _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8;
function convertToBuffer(data) {
    // Already a Uint8, do nothing
    if (data instanceof Uint8Array)
        return data;
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
//# sourceMappingURL=convertToBuffer.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/module/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/module/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToBuffer: () => (/* reexport safe */ _convertToBuffer__WEBPACK_IMPORTED_MODULE_0__.convertToBuffer),
/* harmony export */   isEmptyData: () => (/* reexport safe */ _isEmptyData__WEBPACK_IMPORTED_MODULE_1__.isEmptyData),
/* harmony export */   numToUint8: () => (/* reexport safe */ _numToUint8__WEBPACK_IMPORTED_MODULE_2__.numToUint8),
/* harmony export */   uint32ArrayFrom: () => (/* reexport safe */ _uint32ArrayFrom__WEBPACK_IMPORTED_MODULE_3__.uint32ArrayFrom)
/* harmony export */ });
/* harmony import */ var _convertToBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertToBuffer */ "./node_modules/@aws-crypto/util/build/module/convertToBuffer.js");
/* harmony import */ var _isEmptyData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isEmptyData */ "./node_modules/@aws-crypto/util/build/module/isEmptyData.js");
/* harmony import */ var _numToUint8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./numToUint8 */ "./node_modules/@aws-crypto/util/build/module/numToUint8.js");
/* harmony import */ var _uint32ArrayFrom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uint32ArrayFrom */ "./node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js");
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/module/isEmptyData.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/module/isEmptyData.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEmptyData: () => (/* binding */ isEmptyData)
/* harmony export */ });
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
//# sourceMappingURL=isEmptyData.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/module/numToUint8.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/module/numToUint8.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   numToUint8: () => (/* binding */ numToUint8)
/* harmony export */ });
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
function numToUint8(num) {
    return new Uint8Array([
        (num & 0xff000000) >> 24,
        (num & 0x00ff0000) >> 16,
        (num & 0x0000ff00) >> 8,
        num & 0x000000ff,
    ]);
}
//# sourceMappingURL=numToUint8.js.map

/***/ }),

/***/ "./node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uint32ArrayFrom: () => (/* binding */ uint32ArrayFrom)
/* harmony export */ });
// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
// IE 11 does not support Array.from, so we do it manually
function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
        }
        return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
}
//# sourceMappingURL=uint32ArrayFrom.js.map

/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/dist-es/EventStreamCodec.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/dist-es/EventStreamCodec.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventStreamCodec: () => (/* binding */ EventStreamCodec)
/* harmony export */ });
/* harmony import */ var _aws_crypto_crc32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-crypto/crc32 */ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/crc32/build/index.js");
/* harmony import */ var _HeaderMarshaller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderMarshaller */ "./node_modules/@aws-sdk/eventstream-codec/dist-es/HeaderMarshaller.js");
/* harmony import */ var _splitMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splitMessage */ "./node_modules/@aws-sdk/eventstream-codec/dist-es/splitMessage.js");



class EventStreamCodec {
    constructor(toUtf8, fromUtf8) {
        this.headerMarshaller = new _HeaderMarshaller__WEBPACK_IMPORTED_MODULE_1__.HeaderMarshaller(toUtf8, fromUtf8);
        this.messageBuffer = [];
        this.isEndOfStream = false;
    }
    feed(message) {
        this.messageBuffer.push(this.decode(message));
    }
    endOfStream() {
        this.isEndOfStream = true;
    }
    getMessage() {
        const message = this.messageBuffer.pop();
        const isEndOfStream = this.isEndOfStream;
        return {
            getMessage() {
                return message;
            },
            isEndOfStream() {
                return isEndOfStream;
            },
        };
    }
    getAvailableMessages() {
        const messages = this.messageBuffer;
        this.messageBuffer = [];
        const isEndOfStream = this.isEndOfStream;
        return {
            getMessages() {
                return messages;
            },
            isEndOfStream() {
                return isEndOfStream;
            },
        };
    }
    encode({ headers: rawHeaders, body }) {
        const headers = this.headerMarshaller.format(rawHeaders);
        const length = headers.byteLength + body.byteLength + 16;
        const out = new Uint8Array(length);
        const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        const checksum = new _aws_crypto_crc32__WEBPACK_IMPORTED_MODULE_0__.Crc32();
        view.setUint32(0, length, false);
        view.setUint32(4, headers.byteLength, false);
        view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
        out.set(headers, 12);
        out.set(body, headers.byteLength + 12);
        view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
        return out;
    }
    decode(message) {
        const { headers, body } = (0,_splitMessage__WEBPACK_IMPORTED_MODULE_2__.splitMessage)(message);
        return { headers: this.headerMarshaller.parse(headers), body };
    }
    formatHeaders(rawHeaders) {
        return this.headerMarshaller.format(rawHeaders);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/dist-es/HeaderMarshaller.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/dist-es/HeaderMarshaller.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderMarshaller: () => (/* binding */ HeaderMarshaller)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-hex-encoding */ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js");
/* harmony import */ var _Int64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Int64 */ "./node_modules/@aws-sdk/eventstream-codec/dist-es/Int64.js");


class HeaderMarshaller {
    constructor(toUtf8, fromUtf8) {
        this.toUtf8 = toUtf8;
        this.fromUtf8 = fromUtf8;
    }
    format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
            const bytes = this.fromUtf8(headerName);
            chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
            out.set(chunk, position);
            position += chunk.byteLength;
        }
        return out;
    }
    formatHeaderValue(header) {
        switch (header.type) {
            case "boolean":
                return Uint8Array.from([header.value ? 0 : 1]);
            case "byte":
                return Uint8Array.from([2, header.value]);
            case "short":
                const shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                const intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                const longBytes = new Uint8Array(9);
                longBytes[0] = 5;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6);
                binView.setUint16(1, header.value.byteLength, false);
                const binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                const utf8Bytes = this.fromUtf8(header.value);
                const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                const strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                const tsBytes = new Uint8Array(9);
                tsBytes[0] = 8;
                tsBytes.set(_Int64__WEBPACK_IMPORTED_MODULE_1__.Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error(`Invalid UUID received: ${header.value}`);
                }
                const uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9;
                uuidBytes.set((0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.fromHex)(header.value.replace(/\-/g, "")), 1);
                return uuidBytes;
        }
    }
    parse(headers) {
        const out = {};
        let position = 0;
        while (position < headers.byteLength) {
            const nameLength = headers.getUint8(position++);
            const name = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
            position += nameLength;
            switch (headers.getUint8(position++)) {
                case 0:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: true,
                    };
                    break;
                case 1:
                    out[name] = {
                        type: BOOLEAN_TAG,
                        value: false,
                    };
                    break;
                case 2:
                    out[name] = {
                        type: BYTE_TAG,
                        value: headers.getInt8(position++),
                    };
                    break;
                case 3:
                    out[name] = {
                        type: SHORT_TAG,
                        value: headers.getInt16(position, false),
                    };
                    position += 2;
                    break;
                case 4:
                    out[name] = {
                        type: INT_TAG,
                        value: headers.getInt32(position, false),
                    };
                    position += 4;
                    break;
                case 5:
                    out[name] = {
                        type: LONG_TAG,
                        value: new _Int64__WEBPACK_IMPORTED_MODULE_1__.Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)),
                    };
                    position += 8;
                    break;
                case 6:
                    const binaryLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: BINARY_TAG,
                        value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength),
                    };
                    position += binaryLength;
                    break;
                case 7:
                    const stringLength = headers.getUint16(position, false);
                    position += 2;
                    out[name] = {
                        type: STRING_TAG,
                        value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength)),
                    };
                    position += stringLength;
                    break;
                case 8:
                    out[name] = {
                        type: TIMESTAMP_TAG,
                        value: new Date(new _Int64__WEBPACK_IMPORTED_MODULE_1__.Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf()),
                    };
                    position += 8;
                    break;
                case 9:
                    const uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
                    position += 16;
                    out[name] = {
                        type: UUID_TAG,
                        value: `${(0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(0, 4))}-${(0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(4, 6))}-${(0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(6, 8))}-${(0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(8, 10))}-${(0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(10))}`,
                    };
                    break;
                default:
                    throw new Error(`Unrecognized header type tag`);
            }
        }
        return out;
    }
}
var HEADER_VALUE_TYPE;
(function (HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
const BOOLEAN_TAG = "boolean";
const BYTE_TAG = "byte";
const SHORT_TAG = "short";
const INT_TAG = "integer";
const LONG_TAG = "long";
const BINARY_TAG = "binary";
const STRING_TAG = "string";
const TIMESTAMP_TAG = "timestamp";
const UUID_TAG = "uuid";
const UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;


/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/dist-es/Int64.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/dist-es/Int64.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Int64: () => (/* binding */ Int64)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-hex-encoding */ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js");

class Int64 {
    constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    static fromNumber(number) {
        if (number > 9223372036854776000 || number < -9223372036854776000) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
            bytes[i] = remaining;
        }
        if (number < 0) {
            negate(bytes);
        }
        return new Int64(bytes);
    }
    valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 0b10000000;
        if (negative) {
            negate(bytes);
        }
        return parseInt((0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
function negate(bytes) {
    for (let i = 0; i < 8; i++) {
        bytes[i] ^= 0xff;
    }
    for (let i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
            break;
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/dist-es/Message.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/dist-es/Message.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/dist-es/MessageDecoderStream.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/dist-es/MessageDecoderStream.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageDecoderStream: () => (/* binding */ MessageDecoderStream)
/* harmony export */ });
class MessageDecoderStream {
    constructor(options) {
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const bytes of this.options.inputStream) {
            const decoded = this.options.decoder.decode(bytes);
            yield decoded;
        }
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/dist-es/MessageEncoderStream.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/dist-es/MessageEncoderStream.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageEncoderStream: () => (/* binding */ MessageEncoderStream)
/* harmony export */ });
class MessageEncoderStream {
    constructor(options) {
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const msg of this.options.messageStream) {
            const encoded = this.options.encoder.encode(msg);
            yield encoded;
        }
        if (this.options.includeEndFrame) {
            yield new Uint8Array(0);
        }
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/dist-es/SmithyMessageDecoderStream.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/dist-es/SmithyMessageDecoderStream.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmithyMessageDecoderStream: () => (/* binding */ SmithyMessageDecoderStream)
/* harmony export */ });
class SmithyMessageDecoderStream {
    constructor(options) {
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const message of this.options.messageStream) {
            const deserialized = await this.options.deserializer(message);
            if (deserialized === undefined)
                continue;
            yield deserialized;
        }
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/dist-es/SmithyMessageEncoderStream.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/dist-es/SmithyMessageEncoderStream.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmithyMessageEncoderStream: () => (/* binding */ SmithyMessageEncoderStream)
/* harmony export */ });
class SmithyMessageEncoderStream {
    constructor(options) {
        this.options = options;
    }
    [Symbol.asyncIterator]() {
        return this.asyncIterator();
    }
    async *asyncIterator() {
        for await (const chunk of this.options.inputStream) {
            const payloadBuf = this.options.serializer(chunk);
            yield payloadBuf;
        }
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/dist-es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/dist-es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventStreamCodec: () => (/* reexport safe */ _EventStreamCodec__WEBPACK_IMPORTED_MODULE_0__.EventStreamCodec),
/* harmony export */   HeaderMarshaller: () => (/* reexport safe */ _HeaderMarshaller__WEBPACK_IMPORTED_MODULE_1__.HeaderMarshaller),
/* harmony export */   Int64: () => (/* reexport safe */ _Int64__WEBPACK_IMPORTED_MODULE_2__.Int64),
/* harmony export */   MessageDecoderStream: () => (/* reexport safe */ _MessageDecoderStream__WEBPACK_IMPORTED_MODULE_4__.MessageDecoderStream),
/* harmony export */   MessageEncoderStream: () => (/* reexport safe */ _MessageEncoderStream__WEBPACK_IMPORTED_MODULE_5__.MessageEncoderStream),
/* harmony export */   SmithyMessageDecoderStream: () => (/* reexport safe */ _SmithyMessageDecoderStream__WEBPACK_IMPORTED_MODULE_6__.SmithyMessageDecoderStream),
/* harmony export */   SmithyMessageEncoderStream: () => (/* reexport safe */ _SmithyMessageEncoderStream__WEBPACK_IMPORTED_MODULE_7__.SmithyMessageEncoderStream)
/* harmony export */ });
/* harmony import */ var _EventStreamCodec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventStreamCodec */ "./node_modules/@aws-sdk/eventstream-codec/dist-es/EventStreamCodec.js");
/* harmony import */ var _HeaderMarshaller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderMarshaller */ "./node_modules/@aws-sdk/eventstream-codec/dist-es/HeaderMarshaller.js");
/* harmony import */ var _Int64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Int64 */ "./node_modules/@aws-sdk/eventstream-codec/dist-es/Int64.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message */ "./node_modules/@aws-sdk/eventstream-codec/dist-es/Message.js");
/* harmony import */ var _MessageDecoderStream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MessageDecoderStream */ "./node_modules/@aws-sdk/eventstream-codec/dist-es/MessageDecoderStream.js");
/* harmony import */ var _MessageEncoderStream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MessageEncoderStream */ "./node_modules/@aws-sdk/eventstream-codec/dist-es/MessageEncoderStream.js");
/* harmony import */ var _SmithyMessageDecoderStream__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SmithyMessageDecoderStream */ "./node_modules/@aws-sdk/eventstream-codec/dist-es/SmithyMessageDecoderStream.js");
/* harmony import */ var _SmithyMessageEncoderStream__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SmithyMessageEncoderStream */ "./node_modules/@aws-sdk/eventstream-codec/dist-es/SmithyMessageEncoderStream.js");










/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/dist-es/splitMessage.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/dist-es/splitMessage.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   splitMessage: () => (/* binding */ splitMessage)
/* harmony export */ });
/* harmony import */ var _aws_crypto_crc32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-crypto/crc32 */ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/crc32/build/index.js");

const PRELUDE_MEMBER_LENGTH = 4;
const PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
const CHECKSUM_LENGTH = 4;
const MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
function splitMessage({ byteLength, byteOffset, buffer }) {
    if (byteLength < MINIMUM_MESSAGE_LENGTH) {
        throw new Error("Provided message too short to accommodate event stream message overhead");
    }
    const view = new DataView(buffer, byteOffset, byteLength);
    const messageLength = view.getUint32(0, false);
    if (byteLength !== messageLength) {
        throw new Error("Reported message length does not match received message length");
    }
    const headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
    const expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
    const expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
    const checksummer = new _aws_crypto_crc32__WEBPACK_IMPORTED_MODULE_0__.Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
    if (expectedPreludeChecksum !== checksummer.digest()) {
        throw new Error(`The prelude checksum specified in the message (${expectedPreludeChecksum}) does not match the calculated CRC32 checksum (${checksummer.digest()})`);
    }
    checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
    if (expectedMessageChecksum !== checksummer.digest()) {
        throw new Error(`The message checksum (${checksummer.digest()}) did not match the expected value of ${expectedMessageChecksum}`);
    }
    return {
        headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
        body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH)),
    };
}


/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/crc32/build/aws_crc32.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/crc32/build/aws_crc32.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsCrc32 = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js");
var util_1 = __webpack_require__(/*! @aws-crypto/util */ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/index.js");
var index_1 = __webpack_require__(/*! ./index */ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/crc32/build/index.js");
var AwsCrc32 = /** @class */ (function () {
    function AwsCrc32() {
        this.crc32 = new index_1.Crc32();
    }
    AwsCrc32.prototype.update = function (toHash) {
        if ((0, util_1.isEmptyData)(toHash))
            return;
        this.crc32.update((0, util_1.convertToBuffer)(toHash));
    };
    AwsCrc32.prototype.digest = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, (0, util_1.numToUint8)(this.crc32.digest())];
            });
        });
    };
    AwsCrc32.prototype.reset = function () {
        this.crc32 = new index_1.Crc32();
    };
    return AwsCrc32;
}());
exports.AwsCrc32 = AwsCrc32;
//# sourceMappingURL=aws_crc32.js.map

/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/crc32/build/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/crc32/build/index.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AwsCrc32 = exports.Crc32 = exports.crc32 = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js");
var util_1 = __webpack_require__(/*! @aws-crypto/util */ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/index.js");
function crc32(data) {
    return new Crc32().update(data).digest();
}
exports.crc32 = crc32;
var Crc32 = /** @class */ (function () {
    function Crc32() {
        this.checksum = 0xffffffff;
    }
    Crc32.prototype.update = function (data) {
        var e_1, _a;
        try {
            for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                var byte = data_1_1.value;
                this.checksum =
                    (this.checksum >>> 8) ^ lookupTable[(this.checksum ^ byte) & 0xff];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    };
    Crc32.prototype.digest = function () {
        return (this.checksum ^ 0xffffffff) >>> 0;
    };
    return Crc32;
}());
exports.Crc32 = Crc32;
// prettier-ignore
var a_lookUpTable = [
    0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA,
    0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3,
    0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988,
    0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91,
    0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
    0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,
    0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC,
    0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5,
    0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172,
    0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
    0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940,
    0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59,
    0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116,
    0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F,
    0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
    0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D,
    0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A,
    0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433,
    0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818,
    0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
    0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E,
    0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457,
    0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C,
    0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65,
    0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
    0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB,
    0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0,
    0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9,
    0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086,
    0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
    0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4,
    0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD,
    0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A,
    0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683,
    0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
    0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1,
    0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE,
    0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7,
    0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC,
    0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
    0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252,
    0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B,
    0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60,
    0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79,
    0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
    0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F,
    0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04,
    0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D,
    0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A,
    0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
    0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38,
    0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21,
    0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E,
    0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777,
    0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
    0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45,
    0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2,
    0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB,
    0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0,
    0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
    0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6,
    0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF,
    0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94,
    0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D,
];
var lookupTable = (0, util_1.uint32ArrayFrom)(a_lookUpTable);
var aws_crc32_1 = __webpack_require__(/*! ./aws_crc32 */ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/crc32/build/aws_crc32.js");
Object.defineProperty(exports, "AwsCrc32", ({ enumerable: true, get: function () { return aws_crc32_1.AwsCrc32; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/crc32/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/convertToBuffer.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/convertToBuffer.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToBuffer = void 0;
var util_utf8_browser_1 = __webpack_require__(/*! @aws-sdk/util-utf8-browser */ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js");
// Quick polyfill
var fromUtf8 = typeof Buffer !== "undefined" && Buffer.from
    ? function (input) { return Buffer.from(input, "utf8"); }
    : util_utf8_browser_1.fromUtf8;
function convertToBuffer(data) {
    // Already a Uint8, do nothing
    if (data instanceof Uint8Array)
        return data;
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}
exports.convertToBuffer = convertToBuffer;
//# sourceMappingURL=convertToBuffer.js.map

/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/index.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uint32ArrayFrom = exports.numToUint8 = exports.isEmptyData = exports.convertToBuffer = void 0;
var convertToBuffer_1 = __webpack_require__(/*! ./convertToBuffer */ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/convertToBuffer.js");
Object.defineProperty(exports, "convertToBuffer", ({ enumerable: true, get: function () { return convertToBuffer_1.convertToBuffer; } }));
var isEmptyData_1 = __webpack_require__(/*! ./isEmptyData */ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/isEmptyData.js");
Object.defineProperty(exports, "isEmptyData", ({ enumerable: true, get: function () { return isEmptyData_1.isEmptyData; } }));
var numToUint8_1 = __webpack_require__(/*! ./numToUint8 */ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/numToUint8.js");
Object.defineProperty(exports, "numToUint8", ({ enumerable: true, get: function () { return numToUint8_1.numToUint8; } }));
var uint32ArrayFrom_1 = __webpack_require__(/*! ./uint32ArrayFrom */ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/uint32ArrayFrom.js");
Object.defineProperty(exports, "uint32ArrayFrom", ({ enumerable: true, get: function () { return uint32ArrayFrom_1.uint32ArrayFrom; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/isEmptyData.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/isEmptyData.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isEmptyData = void 0;
function isEmptyData(data) {
    if (typeof data === "string") {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
exports.isEmptyData = isEmptyData;
//# sourceMappingURL=isEmptyData.js.map

/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/numToUint8.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/numToUint8.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.numToUint8 = void 0;
function numToUint8(num) {
    return new Uint8Array([
        (num & 0xff000000) >> 24,
        (num & 0x00ff0000) >> 16,
        (num & 0x0000ff00) >> 8,
        num & 0x000000ff,
    ]);
}
exports.numToUint8 = numToUint8;
//# sourceMappingURL=numToUint8.js.map

/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/uint32ArrayFrom.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-crypto/util/build/uint32ArrayFrom.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright Amazon.com Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.uint32ArrayFrom = void 0;
// IE 11 does not support Array.from, so we do it manually
function uint32ArrayFrom(a_lookUpTable) {
    if (!Uint32Array.from) {
        var return_array = new Uint32Array(a_lookUpTable.length);
        var a_index = 0;
        while (a_index < a_lookUpTable.length) {
            return_array[a_index] = a_lookUpTable[a_index];
            a_index += 1;
        }
        return return_array;
    }
    return Uint32Array.from(a_lookUpTable);
}
exports.uint32ArrayFrom = uint32ArrayFrom;
//# sourceMappingURL=uint32ArrayFrom.js.map

/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-codec/node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromHex: () => (/* binding */ fromHex),
/* harmony export */   toHex: () => (/* binding */ toHex)
/* harmony export */ });
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}


/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-marshaller/dist-es/EventStreamMarshaller.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-marshaller/dist-es/EventStreamMarshaller.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventStreamMarshaller: () => (/* binding */ EventStreamMarshaller)
/* harmony export */ });
/* harmony import */ var _aws_crypto_crc32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-crypto/crc32 */ "./node_modules/@aws-crypto/crc32/build/index.js");
/* harmony import */ var _HeaderMarshaller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderMarshaller */ "./node_modules/@aws-sdk/eventstream-marshaller/dist-es/HeaderMarshaller.js");
/* harmony import */ var _splitMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splitMessage */ "./node_modules/@aws-sdk/eventstream-marshaller/dist-es/splitMessage.js");



var EventStreamMarshaller = (function () {
    function EventStreamMarshaller(toUtf8, fromUtf8) {
        this.headerMarshaller = new _HeaderMarshaller__WEBPACK_IMPORTED_MODULE_1__.HeaderMarshaller(toUtf8, fromUtf8);
    }
    EventStreamMarshaller.prototype.marshall = function (_a) {
        var rawHeaders = _a.headers, body = _a.body;
        var headers = this.headerMarshaller.format(rawHeaders);
        var length = headers.byteLength + body.byteLength + 16;
        var out = new Uint8Array(length);
        var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
        var checksum = new _aws_crypto_crc32__WEBPACK_IMPORTED_MODULE_0__.Crc32();
        view.setUint32(0, length, false);
        view.setUint32(4, headers.byteLength, false);
        view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
        out.set(headers, 12);
        out.set(body, headers.byteLength + 12);
        view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);
        return out;
    };
    EventStreamMarshaller.prototype.unmarshall = function (message) {
        var _a = (0,_splitMessage__WEBPACK_IMPORTED_MODULE_2__.splitMessage)(message), headers = _a.headers, body = _a.body;
        return { headers: this.headerMarshaller.parse(headers), body: body };
    };
    EventStreamMarshaller.prototype.formatHeaders = function (rawHeaders) {
        return this.headerMarshaller.format(rawHeaders);
    };
    return EventStreamMarshaller;
}());



/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-marshaller/dist-es/HeaderMarshaller.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-marshaller/dist-es/HeaderMarshaller.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderMarshaller: () => (/* binding */ HeaderMarshaller)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
/* harmony import */ var _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-hex-encoding */ "./node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js");
/* harmony import */ var _Int64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Int64 */ "./node_modules/@aws-sdk/eventstream-marshaller/dist-es/Int64.js");



var HeaderMarshaller = (function () {
    function HeaderMarshaller(toUtf8, fromUtf8) {
        this.toUtf8 = toUtf8;
        this.fromUtf8 = fromUtf8;
    }
    HeaderMarshaller.prototype.format = function (headers) {
        var e_1, _a, e_2, _b;
        var chunks = [];
        try {
            for (var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__values)(Object.keys(headers)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var headerName = _d.value;
                var bytes = this.fromUtf8(headerName);
                chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var out = new Uint8Array(chunks.reduce(function (carry, bytes) { return carry + bytes.byteLength; }, 0));
        var position = 0;
        try {
            for (var chunks_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__values)(chunks), chunks_1_1 = chunks_1.next(); !chunks_1_1.done; chunks_1_1 = chunks_1.next()) {
                var chunk = chunks_1_1.value;
                out.set(chunk, position);
                position += chunk.byteLength;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (chunks_1_1 && !chunks_1_1.done && (_b = chunks_1.return)) _b.call(chunks_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return out;
    };
    HeaderMarshaller.prototype.formatHeaderValue = function (header) {
        switch (header.type) {
            case "boolean":
                return Uint8Array.from([header.value ? 0 : 1]);
            case "byte":
                return Uint8Array.from([2, header.value]);
            case "short":
                var shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                var intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                var longBytes = new Uint8Array(9);
                longBytes[0] = 5;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                var binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6);
                binView.setUint16(1, header.value.byteLength, false);
                var binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                var utf8Bytes = this.fromUtf8(header.value);
                var strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                var strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                var tsBytes = new Uint8Array(9);
                tsBytes[0] = 8;
                tsBytes.set(_Int64__WEBPACK_IMPORTED_MODULE_1__.Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error("Invalid UUID received: ".concat(header.value));
                }
                var uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9;
                uuidBytes.set((0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.fromHex)(header.value.replace(/\-/g, "")), 1);
                return uuidBytes;
        }
    };
    HeaderMarshaller.prototype.parse = function (headers) {
        var out = {};
        var position = 0;
        while (position < headers.byteLength) {
            var nameLength = headers.getUint8(position++);
            var name_1 = this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, nameLength));
            position += nameLength;
            switch (headers.getUint8(position++)) {
                case 0:
                    out[name_1] = {
                        type: BOOLEAN_TAG,
                        value: true,
                    };
                    break;
                case 1:
                    out[name_1] = {
                        type: BOOLEAN_TAG,
                        value: false,
                    };
                    break;
                case 2:
                    out[name_1] = {
                        type: BYTE_TAG,
                        value: headers.getInt8(position++),
                    };
                    break;
                case 3:
                    out[name_1] = {
                        type: SHORT_TAG,
                        value: headers.getInt16(position, false),
                    };
                    position += 2;
                    break;
                case 4:
                    out[name_1] = {
                        type: INT_TAG,
                        value: headers.getInt32(position, false),
                    };
                    position += 4;
                    break;
                case 5:
                    out[name_1] = {
                        type: LONG_TAG,
                        value: new _Int64__WEBPACK_IMPORTED_MODULE_1__.Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)),
                    };
                    position += 8;
                    break;
                case 6:
                    var binaryLength = headers.getUint16(position, false);
                    position += 2;
                    out[name_1] = {
                        type: BINARY_TAG,
                        value: new Uint8Array(headers.buffer, headers.byteOffset + position, binaryLength),
                    };
                    position += binaryLength;
                    break;
                case 7:
                    var stringLength = headers.getUint16(position, false);
                    position += 2;
                    out[name_1] = {
                        type: STRING_TAG,
                        value: this.toUtf8(new Uint8Array(headers.buffer, headers.byteOffset + position, stringLength)),
                    };
                    position += stringLength;
                    break;
                case 8:
                    out[name_1] = {
                        type: TIMESTAMP_TAG,
                        value: new Date(new _Int64__WEBPACK_IMPORTED_MODULE_1__.Int64(new Uint8Array(headers.buffer, headers.byteOffset + position, 8)).valueOf()),
                    };
                    position += 8;
                    break;
                case 9:
                    var uuidBytes = new Uint8Array(headers.buffer, headers.byteOffset + position, 16);
                    position += 16;
                    out[name_1] = {
                        type: UUID_TAG,
                        value: "".concat((0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(0, 4)), "-").concat((0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(4, 6)), "-").concat((0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(6, 8)), "-").concat((0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(8, 10)), "-").concat((0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(uuidBytes.subarray(10))),
                    };
                    break;
                default:
                    throw new Error("Unrecognized header type tag");
            }
        }
        return out;
    };
    return HeaderMarshaller;
}());

var HEADER_VALUE_TYPE;
(function (HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
var BOOLEAN_TAG = "boolean";
var BYTE_TAG = "byte";
var SHORT_TAG = "short";
var INT_TAG = "integer";
var LONG_TAG = "long";
var BINARY_TAG = "binary";
var STRING_TAG = "string";
var TIMESTAMP_TAG = "timestamp";
var UUID_TAG = "uuid";
var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;


/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-marshaller/dist-es/Int64.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-marshaller/dist-es/Int64.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Int64: () => (/* binding */ Int64)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-hex-encoding */ "./node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js");

var Int64 = (function () {
    function Int64(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    Int64.fromNumber = function (number) {
        if (number > 9223372036854775807 || number < -9223372036854775808) {
            throw new Error("".concat(number, " is too large (or, if negative, too small) to represent as an Int64"));
        }
        var bytes = new Uint8Array(8);
        for (var i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
            bytes[i] = remaining;
        }
        if (number < 0) {
            negate(bytes);
        }
        return new Int64(bytes);
    };
    Int64.prototype.valueOf = function () {
        var bytes = this.bytes.slice(0);
        var negative = bytes[0] & 128;
        if (negative) {
            negate(bytes);
        }
        return parseInt((0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(bytes), 16) * (negative ? -1 : 1);
    };
    Int64.prototype.toString = function () {
        return String(this.valueOf());
    };
    return Int64;
}());

function negate(bytes) {
    for (var i = 0; i < 8; i++) {
        bytes[i] ^= 0xff;
    }
    for (var i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
            break;
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-marshaller/dist-es/Message.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-marshaller/dist-es/Message.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-marshaller/dist-es/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-marshaller/dist-es/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventStreamMarshaller: () => (/* reexport safe */ _EventStreamMarshaller__WEBPACK_IMPORTED_MODULE_0__.EventStreamMarshaller),
/* harmony export */   Int64: () => (/* reexport safe */ _Int64__WEBPACK_IMPORTED_MODULE_1__.Int64)
/* harmony export */ });
/* harmony import */ var _EventStreamMarshaller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventStreamMarshaller */ "./node_modules/@aws-sdk/eventstream-marshaller/dist-es/EventStreamMarshaller.js");
/* harmony import */ var _Int64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Int64 */ "./node_modules/@aws-sdk/eventstream-marshaller/dist-es/Int64.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message */ "./node_modules/@aws-sdk/eventstream-marshaller/dist-es/Message.js");





/***/ }),

/***/ "./node_modules/@aws-sdk/eventstream-marshaller/dist-es/splitMessage.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/eventstream-marshaller/dist-es/splitMessage.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   splitMessage: () => (/* binding */ splitMessage)
/* harmony export */ });
/* harmony import */ var _aws_crypto_crc32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-crypto/crc32 */ "./node_modules/@aws-crypto/crc32/build/index.js");

var PRELUDE_MEMBER_LENGTH = 4;
var PRELUDE_LENGTH = PRELUDE_MEMBER_LENGTH * 2;
var CHECKSUM_LENGTH = 4;
var MINIMUM_MESSAGE_LENGTH = PRELUDE_LENGTH + CHECKSUM_LENGTH * 2;
function splitMessage(_a) {
    var byteLength = _a.byteLength, byteOffset = _a.byteOffset, buffer = _a.buffer;
    if (byteLength < MINIMUM_MESSAGE_LENGTH) {
        throw new Error("Provided message too short to accommodate event stream message overhead");
    }
    var view = new DataView(buffer, byteOffset, byteLength);
    var messageLength = view.getUint32(0, false);
    if (byteLength !== messageLength) {
        throw new Error("Reported message length does not match received message length");
    }
    var headerLength = view.getUint32(PRELUDE_MEMBER_LENGTH, false);
    var expectedPreludeChecksum = view.getUint32(PRELUDE_LENGTH, false);
    var expectedMessageChecksum = view.getUint32(byteLength - CHECKSUM_LENGTH, false);
    var checksummer = new _aws_crypto_crc32__WEBPACK_IMPORTED_MODULE_0__.Crc32().update(new Uint8Array(buffer, byteOffset, PRELUDE_LENGTH));
    if (expectedPreludeChecksum !== checksummer.digest()) {
        throw new Error("The prelude checksum specified in the message (".concat(expectedPreludeChecksum, ") does not match the calculated CRC32 checksum (").concat(checksummer.digest(), ")"));
    }
    checksummer.update(new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH, byteLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH)));
    if (expectedMessageChecksum !== checksummer.digest()) {
        throw new Error("The message checksum (".concat(checksummer.digest(), ") did not match the expected value of ").concat(expectedMessageChecksum));
    }
    return {
        headers: new DataView(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH, headerLength),
        body: new Uint8Array(buffer, byteOffset + PRELUDE_LENGTH + CHECKSUM_LENGTH + headerLength, messageLength - headerLength - (PRELUDE_LENGTH + CHECKSUM_LENGTH + CHECKSUM_LENGTH)),
    };
}


/***/ }),

/***/ "./node_modules/@aws-sdk/is-array-buffer/dist-es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-sdk/is-array-buffer/dist-es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayBuffer: () => (/* binding */ isArrayBuffer)
/* harmony export */ });
const isArrayBuffer = (arg) => (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
    Object.prototype.toString.call(arg) === "[object ArrayBuffer]";


/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/Field.js":
/*!**************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/Field.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Field: () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var _FieldPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldPosition */ "./node_modules/@aws-sdk/protocol-http/dist-es/FieldPosition.js");

class Field {
    constructor({ name, kind = _FieldPosition__WEBPACK_IMPORTED_MODULE_0__.FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
    }
    add(value) {
        this.values.push(value);
    }
    set(values) {
        this.values = values;
    }
    remove(value) {
        this.values = this.values.filter((v) => v !== value);
    }
    toString() {
        return this.values.map((v) => (v.includes(",") || v.includes(" ") ? `"${v}"` : v)).join(", ");
    }
    get() {
        return this.values;
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/FieldPosition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/FieldPosition.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldPosition: () => (/* binding */ FieldPosition)
/* harmony export */ });
var FieldPosition;
(function (FieldPosition) {
    FieldPosition[FieldPosition["HEADER"] = 0] = "HEADER";
    FieldPosition[FieldPosition["TRAILER"] = 1] = "TRAILER";
})(FieldPosition || (FieldPosition = {}));


/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/Fields.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/Fields.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fields: () => (/* binding */ Fields)
/* harmony export */ });
class Fields {
    constructor({ fields = [], encoding = "utf-8" }) {
        this.entries = {};
        fields.forEach(this.setField.bind(this));
        this.encoding = encoding;
    }
    setField(field) {
        this.entries[field.name.toLowerCase()] = field;
    }
    getField(name) {
        return this.entries[name.toLowerCase()];
    }
    removeField(name) {
        delete this.entries[name.toLowerCase()];
    }
    getByType(kind) {
        return Object.values(this.entries).filter((field) => field.kind === kind);
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/httpHandler.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/httpHandler.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/httpRequest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/httpRequest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpRequest: () => (/* binding */ HttpRequest)
/* harmony export */ });
class HttpRequest {
    constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol
            ? options.protocol.slice(-1) !== ":"
                ? `${options.protocol}:`
                : options.protocol
            : "https:";
        this.path = options.path ? (options.path.charAt(0) !== "/" ? `/${options.path}` : options.path) : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
    }
    static isInstance(request) {
        if (!request)
            return false;
        const req = request;
        return ("method" in req &&
            "protocol" in req &&
            "hostname" in req &&
            "path" in req &&
            typeof req["query"] === "object" &&
            typeof req["headers"] === "object");
    }
    clone() {
        const cloned = new HttpRequest({
            ...this,
            headers: { ...this.headers },
        });
        if (cloned.query)
            cloned.query = cloneQuery(cloned.query);
        return cloned;
    }
}
function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [...param] : param,
        };
    }, {});
}


/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/httpResponse.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/httpResponse.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpResponse: () => (/* binding */ HttpResponse)
/* harmony export */ });
class HttpResponse {
    constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    static isInstance(response) {
        if (!response)
            return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
}


/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Field: () => (/* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_0__.Field),
/* harmony export */   FieldPosition: () => (/* reexport safe */ _FieldPosition__WEBPACK_IMPORTED_MODULE_1__.FieldPosition),
/* harmony export */   Fields: () => (/* reexport safe */ _Fields__WEBPACK_IMPORTED_MODULE_2__.Fields),
/* harmony export */   HttpRequest: () => (/* reexport safe */ _httpRequest__WEBPACK_IMPORTED_MODULE_4__.HttpRequest),
/* harmony export */   HttpResponse: () => (/* reexport safe */ _httpResponse__WEBPACK_IMPORTED_MODULE_5__.HttpResponse),
/* harmony export */   isValidHostname: () => (/* reexport safe */ _isValidHostname__WEBPACK_IMPORTED_MODULE_6__.isValidHostname)
/* harmony export */ });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./node_modules/@aws-sdk/protocol-http/dist-es/Field.js");
/* harmony import */ var _FieldPosition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldPosition */ "./node_modules/@aws-sdk/protocol-http/dist-es/FieldPosition.js");
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fields */ "./node_modules/@aws-sdk/protocol-http/dist-es/Fields.js");
/* harmony import */ var _httpHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./httpHandler */ "./node_modules/@aws-sdk/protocol-http/dist-es/httpHandler.js");
/* harmony import */ var _httpRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./httpRequest */ "./node_modules/@aws-sdk/protocol-http/dist-es/httpRequest.js");
/* harmony import */ var _httpResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./httpResponse */ "./node_modules/@aws-sdk/protocol-http/dist-es/httpResponse.js");
/* harmony import */ var _isValidHostname__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isValidHostname */ "./node_modules/@aws-sdk/protocol-http/dist-es/isValidHostname.js");









/***/ }),

/***/ "./node_modules/@aws-sdk/protocol-http/dist-es/isValidHostname.js":
/*!************************************************************************!*\
  !*** ./node_modules/@aws-sdk/protocol-http/dist-es/isValidHostname.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidHostname: () => (/* binding */ isValidHostname)
/* harmony export */ });
function isValidHostname(hostname) {
    const hostPattern = /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/;
    return hostPattern.test(hostname);
}


/***/ }),

/***/ "./node_modules/@aws-sdk/querystring-parser/dist-es/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/querystring-parser/dist-es/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseQueryString: () => (/* binding */ parseQueryString)
/* harmony export */ });
function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        for (const pair of querystring.split("&")) {
            let [key, value = null] = pair.split("=");
            key = decodeURIComponent(key);
            if (value) {
                value = decodeURIComponent(value);
            }
            if (!(key in query)) {
                query[key] = value;
            }
            else if (Array.isArray(query[key])) {
                query[key].push(value);
            }
            else {
                query[key] = [query[key], value];
            }
        }
    }
    return query;
}


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/SignatureV4.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/SignatureV4.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignatureV4: () => (/* binding */ SignatureV4)
/* harmony export */ });
/* harmony import */ var _aws_sdk_eventstream_codec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/eventstream-codec */ "./node_modules/@aws-sdk/eventstream-codec/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-hex-encoding */ "./node_modules/@aws-sdk/signature-v4/node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/util-middleware */ "./node_modules/@aws-sdk/util-middleware/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/util-utf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/signature-v4/dist-es/constants.js");
/* harmony import */ var _credentialDerivation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./credentialDerivation */ "./node_modules/@aws-sdk/signature-v4/dist-es/credentialDerivation.js");
/* harmony import */ var _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getCanonicalHeaders */ "./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalHeaders.js");
/* harmony import */ var _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getCanonicalQuery */ "./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalQuery.js");
/* harmony import */ var _getPayloadHash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getPayloadHash */ "./node_modules/@aws-sdk/signature-v4/dist-es/getPayloadHash.js");
/* harmony import */ var _headerUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./headerUtil */ "./node_modules/@aws-sdk/signature-v4/dist-es/headerUtil.js");
/* harmony import */ var _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./moveHeadersToQuery */ "./node_modules/@aws-sdk/signature-v4/dist-es/moveHeadersToQuery.js");
/* harmony import */ var _prepareRequest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./prepareRequest */ "./node_modules/@aws-sdk/signature-v4/dist-es/prepareRequest.js");
/* harmony import */ var _utilDate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utilDate */ "./node_modules/@aws-sdk/signature-v4/dist-es/utilDate.js");













class SignatureV4 {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true, }) {
        this.headerMarshaller = new _aws_sdk_eventstream_codec__WEBPACK_IMPORTED_MODULE_0__.HeaderMarshaller(_aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUtf8, _aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_3__.fromUtf8);
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_2__.normalizeProvider)(region);
        this.credentialProvider = (0,_aws_sdk_util_middleware__WEBPACK_IMPORTED_MODULE_2__.normalizeProvider)(credentials);
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > _constants__WEBPACK_IMPORTED_MODULE_4__.MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.createScope)(shortDate, region, signingService ?? this.service);
        const request = (0,_moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_10__.moveHeadersToQuery)((0,_prepareRequest__WEBPACK_IMPORTED_MODULE_11__.prepareRequest)(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
            request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_QUERY_PARAM] = _constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_IDENTIFIER;
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = (0,_getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_6__.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[_constants__WEBPACK_IMPORTED_MODULE_4__.SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_8__.getPayloadHash)(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        }
        else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        }
        else if (toSign.message) {
            return this.signMessage(toSign, options);
        }
        else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.createScope)(shortDate, region, signingService ?? this.service);
        const hashedPayload = await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_8__.getPayloadHash)({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = (0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__.toHex)(await hash.digest());
        const stringToSign = [
            _constants__WEBPACK_IMPORTED_MODULE_4__.EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload,
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
    }
    async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
            headers: this.headerMarshaller.format(signableMessage.message.headers),
            payload: signableMessage.message.body,
        }, {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature,
        });
        return promise.then((signature) => {
            return { message: signableMessage.message, signature };
        });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update((0,_aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUint8Array)(stringToSign));
        return (0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__.toHex)(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService, } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const request = (0,_prepareRequest__WEBPACK_IMPORTED_MODULE_11__.prepareRequest)(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.createScope)(shortDate, region, signingService ?? this.service);
        request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await (0,_getPayloadHash__WEBPACK_IMPORTED_MODULE_8__.getPayloadHash)(request, this.sha256);
        if (!(0,_headerUtil__WEBPACK_IMPORTED_MODULE_9__.hasHeader)(_constants__WEBPACK_IMPORTED_MODULE_4__.SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = (0,_getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_6__.getCanonicalHeaders)(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[_constants__WEBPACK_IMPORTED_MODULE_4__.AUTH_HEADER] =
            `${_constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_IDENTIFIER} ` +
                `Credential=${credentials.accessKeyId}/${scope}, ` +
                `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +
                `Signature=${signature}`;
        return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${(0,_getCanonicalQuery__WEBPACK_IMPORTED_MODULE_7__.getCanonicalQuery)(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update((0,_aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUint8Array)(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${_constants__WEBPACK_IMPORTED_MODULE_4__.ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${(0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__.toHex)(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
                if (pathSegment?.length === 0)
                    continue;
                if (pathSegment === ".")
                    continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                }
                else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
            const doubleEncoded = encodeURIComponent(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update((0,_aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_3__.toUint8Array)(stringToSign));
        return (0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__.toHex)(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return (0,_credentialDerivation__WEBPACK_IMPORTED_MODULE_5__.getSigningKey)(this.sha256, credentials, shortDate, region, service || this.service);
    }
    validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" ||
            typeof credentials.accessKeyId !== "string" ||
            typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
        }
    }
}
const formatDate = (now) => {
    const longDate = (0,_utilDate__WEBPACK_IMPORTED_MODULE_12__.iso8601)(now).replace(/[\-:]/g, "");
    return {
        longDate,
        shortDate: longDate.slice(0, 8),
    };
};
const getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/cloneRequest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/cloneRequest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneQuery: () => (/* binding */ cloneQuery),
/* harmony export */   cloneRequest: () => (/* binding */ cloneRequest)
/* harmony export */ });
const cloneRequest = ({ headers, query, ...rest }) => ({
    ...rest,
    headers: { ...headers },
    query: query ? cloneQuery(query) : undefined,
});
const cloneQuery = (query) => Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param,
    };
}, {});


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/constants.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/constants.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALGORITHM_IDENTIFIER: () => (/* binding */ ALGORITHM_IDENTIFIER),
/* harmony export */   ALGORITHM_IDENTIFIER_V4A: () => (/* binding */ ALGORITHM_IDENTIFIER_V4A),
/* harmony export */   ALGORITHM_QUERY_PARAM: () => (/* binding */ ALGORITHM_QUERY_PARAM),
/* harmony export */   ALWAYS_UNSIGNABLE_HEADERS: () => (/* binding */ ALWAYS_UNSIGNABLE_HEADERS),
/* harmony export */   AMZ_DATE_HEADER: () => (/* binding */ AMZ_DATE_HEADER),
/* harmony export */   AMZ_DATE_QUERY_PARAM: () => (/* binding */ AMZ_DATE_QUERY_PARAM),
/* harmony export */   AUTH_HEADER: () => (/* binding */ AUTH_HEADER),
/* harmony export */   CREDENTIAL_QUERY_PARAM: () => (/* binding */ CREDENTIAL_QUERY_PARAM),
/* harmony export */   DATE_HEADER: () => (/* binding */ DATE_HEADER),
/* harmony export */   EVENT_ALGORITHM_IDENTIFIER: () => (/* binding */ EVENT_ALGORITHM_IDENTIFIER),
/* harmony export */   EXPIRES_QUERY_PARAM: () => (/* binding */ EXPIRES_QUERY_PARAM),
/* harmony export */   GENERATED_HEADERS: () => (/* binding */ GENERATED_HEADERS),
/* harmony export */   HOST_HEADER: () => (/* binding */ HOST_HEADER),
/* harmony export */   KEY_TYPE_IDENTIFIER: () => (/* binding */ KEY_TYPE_IDENTIFIER),
/* harmony export */   MAX_CACHE_SIZE: () => (/* binding */ MAX_CACHE_SIZE),
/* harmony export */   MAX_PRESIGNED_TTL: () => (/* binding */ MAX_PRESIGNED_TTL),
/* harmony export */   PROXY_HEADER_PATTERN: () => (/* binding */ PROXY_HEADER_PATTERN),
/* harmony export */   REGION_SET_PARAM: () => (/* binding */ REGION_SET_PARAM),
/* harmony export */   SEC_HEADER_PATTERN: () => (/* binding */ SEC_HEADER_PATTERN),
/* harmony export */   SHA256_HEADER: () => (/* binding */ SHA256_HEADER),
/* harmony export */   SIGNATURE_HEADER: () => (/* binding */ SIGNATURE_HEADER),
/* harmony export */   SIGNATURE_QUERY_PARAM: () => (/* binding */ SIGNATURE_QUERY_PARAM),
/* harmony export */   SIGNED_HEADERS_QUERY_PARAM: () => (/* binding */ SIGNED_HEADERS_QUERY_PARAM),
/* harmony export */   TOKEN_HEADER: () => (/* binding */ TOKEN_HEADER),
/* harmony export */   TOKEN_QUERY_PARAM: () => (/* binding */ TOKEN_QUERY_PARAM),
/* harmony export */   UNSIGNABLE_PATTERNS: () => (/* binding */ UNSIGNABLE_PATTERNS),
/* harmony export */   UNSIGNED_PAYLOAD: () => (/* binding */ UNSIGNED_PAYLOAD)
/* harmony export */ });
const ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
const CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
const AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
const SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
const EXPIRES_QUERY_PARAM = "X-Amz-Expires";
const SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
const TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
const REGION_SET_PARAM = "X-Amz-Region-Set";
const AUTH_HEADER = "authorization";
const AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
const DATE_HEADER = "date";
const GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
const SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
const SHA256_HEADER = "x-amz-content-sha256";
const TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
const HOST_HEADER = "host";
const ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true,
};
const PROXY_HEADER_PATTERN = /^proxy-/;
const SEC_HEADER_PATTERN = /^sec-/;
const UNSIGNABLE_PATTERNS = [/^proxy-/i, /^sec-/i];
const ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
const ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
const EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
const UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
const MAX_CACHE_SIZE = 50;
const KEY_TYPE_IDENTIFIER = "aws4_request";
const MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/credentialDerivation.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/credentialDerivation.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearCredentialCache: () => (/* binding */ clearCredentialCache),
/* harmony export */   createScope: () => (/* binding */ createScope),
/* harmony export */   getSigningKey: () => (/* binding */ getSigningKey)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-hex-encoding */ "./node_modules/@aws-sdk/signature-v4/node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-utf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/signature-v4/dist-es/constants.js");



const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${_constants__WEBPACK_IMPORTED_MODULE_2__.KEY_TYPE_IDENTIFIER}`;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${(0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_0__.toHex)(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > _constants__WEBPACK_IMPORTED_MODULE_2__.MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, _constants__WEBPACK_IMPORTED_MODULE_2__.KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
    }
    return (signingKeyCache[cacheKey] = key);
};
const clearCredentialCache = () => {
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
    });
};
const hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update((0,_aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_1__.toUint8Array)(data));
    return hash.digest();
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalHeaders.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalHeaders.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCanonicalHeaders: () => (/* binding */ getCanonicalHeaders)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/signature-v4/dist-es/constants.js");

const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in _constants__WEBPACK_IMPORTED_MODULE_0__.ALWAYS_UNSIGNABLE_HEADERS ||
            unsignableHeaders?.has(canonicalHeaderName) ||
            _constants__WEBPACK_IMPORTED_MODULE_0__.PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
            _constants__WEBPACK_IMPORTED_MODULE_0__.SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalQuery.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalQuery.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCanonicalQuery: () => (/* binding */ getCanonicalQuery)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-uri-escape */ "./node_modules/@aws-sdk/util-uri-escape/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/signature-v4/dist-es/constants.js");


const getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_1__.SIGNATURE_HEADER) {
            continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
            serialized[key] = `${(0,_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key)}=${(0,_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`;
        }
        else if (Array.isArray(value)) {
            serialized[key] = value
                .slice(0)
                .sort()
                .reduce((encoded, value) => encoded.concat([`${(0,_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(key)}=${(0,_aws_sdk_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__.escapeUri)(value)}`]), [])
                .join("&");
        }
    }
    return keys
        .map((key) => serialized[key])
        .filter((serialized) => serialized)
        .join("&");
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/getPayloadHash.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/getPayloadHash.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPayloadHash: () => (/* binding */ getPayloadHash)
/* harmony export */ });
/* harmony import */ var _aws_sdk_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/is-array-buffer */ "./node_modules/@aws-sdk/is-array-buffer/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-sdk/util-hex-encoding */ "./node_modules/@aws-sdk/signature-v4/node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/util-utf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/signature-v4/dist-es/constants.js");




const getPayloadHash = async ({ headers, body }, hashConstructor) => {
    for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === _constants__WEBPACK_IMPORTED_MODULE_3__.SHA256_HEADER) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    }
    else if (typeof body === "string" || ArrayBuffer.isView(body) || (0,_aws_sdk_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update((0,_aws_sdk_util_utf8__WEBPACK_IMPORTED_MODULE_2__.toUint8Array)(body));
        return (0,_aws_sdk_util_hex_encoding__WEBPACK_IMPORTED_MODULE_1__.toHex)(await hashCtor.digest());
    }
    return _constants__WEBPACK_IMPORTED_MODULE_3__.UNSIGNED_PAYLOAD;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/headerUtil.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/headerUtil.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteHeader: () => (/* binding */ deleteHeader),
/* harmony export */   getHeaderValue: () => (/* binding */ getHeaderValue),
/* harmony export */   hasHeader: () => (/* binding */ hasHeader)
/* harmony export */ });
const hasHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
};
const getHeaderValue = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return headers[headerName];
        }
    }
    return undefined;
};
const deleteHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            delete headers[headerName];
        }
    }
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignatureV4: () => (/* reexport safe */ _SignatureV4__WEBPACK_IMPORTED_MODULE_0__.SignatureV4),
/* harmony export */   clearCredentialCache: () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.clearCredentialCache),
/* harmony export */   createScope: () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.createScope),
/* harmony export */   getCanonicalHeaders: () => (/* reexport safe */ _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_1__.getCanonicalHeaders),
/* harmony export */   getCanonicalQuery: () => (/* reexport safe */ _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_2__.getCanonicalQuery),
/* harmony export */   getPayloadHash: () => (/* reexport safe */ _getPayloadHash__WEBPACK_IMPORTED_MODULE_3__.getPayloadHash),
/* harmony export */   getSigningKey: () => (/* reexport safe */ _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__.getSigningKey),
/* harmony export */   moveHeadersToQuery: () => (/* reexport safe */ _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_4__.moveHeadersToQuery),
/* harmony export */   prepareRequest: () => (/* reexport safe */ _prepareRequest__WEBPACK_IMPORTED_MODULE_5__.prepareRequest)
/* harmony export */ });
/* harmony import */ var _SignatureV4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SignatureV4 */ "./node_modules/@aws-sdk/signature-v4/dist-es/SignatureV4.js");
/* harmony import */ var _getCanonicalHeaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCanonicalHeaders */ "./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalHeaders.js");
/* harmony import */ var _getCanonicalQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCanonicalQuery */ "./node_modules/@aws-sdk/signature-v4/dist-es/getCanonicalQuery.js");
/* harmony import */ var _getPayloadHash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getPayloadHash */ "./node_modules/@aws-sdk/signature-v4/dist-es/getPayloadHash.js");
/* harmony import */ var _moveHeadersToQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moveHeadersToQuery */ "./node_modules/@aws-sdk/signature-v4/dist-es/moveHeadersToQuery.js");
/* harmony import */ var _prepareRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prepareRequest */ "./node_modules/@aws-sdk/signature-v4/dist-es/prepareRequest.js");
/* harmony import */ var _credentialDerivation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credentialDerivation */ "./node_modules/@aws-sdk/signature-v4/dist-es/credentialDerivation.js");









/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/moveHeadersToQuery.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/moveHeadersToQuery.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveHeadersToQuery: () => (/* binding */ moveHeadersToQuery)
/* harmony export */ });
/* harmony import */ var _cloneRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloneRequest */ "./node_modules/@aws-sdk/signature-v4/dist-es/cloneRequest.js");

const moveHeadersToQuery = (request, options = {}) => {
    const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : (0,_cloneRequest__WEBPACK_IMPORTED_MODULE_0__.cloneRequest)(request);
    for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query,
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/prepareRequest.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/prepareRequest.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prepareRequest: () => (/* binding */ prepareRequest)
/* harmony export */ });
/* harmony import */ var _cloneRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloneRequest */ "./node_modules/@aws-sdk/signature-v4/dist-es/cloneRequest.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@aws-sdk/signature-v4/dist-es/constants.js");


const prepareRequest = (request) => {
    request = typeof request.clone === "function" ? request.clone() : (0,_cloneRequest__WEBPACK_IMPORTED_MODULE_0__.cloneRequest)(request);
    for (const headerName of Object.keys(request.headers)) {
        if (_constants__WEBPACK_IMPORTED_MODULE_1__.GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/dist-es/utilDate.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/dist-es/utilDate.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iso8601: () => (/* binding */ iso8601),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
const iso8601 = (time) => toDate(time)
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
const toDate = (time) => {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/signature-v4/node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/signature-v4/node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromHex: () => (/* binding */ fromHex),
/* harmony export */   toHex: () => (/* binding */ toHex)
/* harmony export */ });
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}


/***/ }),

/***/ "./node_modules/@aws-sdk/url-parser/dist-es/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@aws-sdk/url-parser/dist-es/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseUrl: () => (/* binding */ parseUrl)
/* harmony export */ });
/* harmony import */ var _aws_sdk_querystring_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/querystring-parser */ "./node_modules/@aws-sdk/querystring-parser/dist-es/index.js");

const parseUrl = (url) => {
    if (typeof url === "string") {
        return parseUrl(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
        query = (0,_aws_sdk_querystring_parser__WEBPACK_IMPORTED_MODULE_0__.parseQueryString)(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query,
    };
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-hex-encoding/dist-es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromHex: () => (/* binding */ fromHex),
/* harmony export */   toHex: () => (/* binding */ toHex)
/* harmony export */ });
var SHORT_TO_HEX = {};
var HEX_TO_SHORT = {};
for (var i = 0; i < 256; i++) {
    var encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = "0".concat(encodedByte);
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    var out = new Uint8Array(encoded.length / 2);
    for (var i = 0; i < encoded.length; i += 2) {
        var encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error("Cannot decode unrecognized sequence ".concat(encodedByte, " as hexadecimal"));
        }
    }
    return out;
}
function toHex(bytes) {
    var out = "";
    for (var i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}


/***/ }),

/***/ "./node_modules/@aws-sdk/util-middleware/dist-es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-middleware/dist-es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeProvider: () => (/* reexport safe */ _normalizeProvider__WEBPACK_IMPORTED_MODULE_0__.normalizeProvider)
/* harmony export */ });
/* harmony import */ var _normalizeProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalizeProvider */ "./node_modules/@aws-sdk/util-middleware/dist-es/normalizeProvider.js");



/***/ }),

/***/ "./node_modules/@aws-sdk/util-middleware/dist-es/normalizeProvider.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-middleware/dist-es/normalizeProvider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   normalizeProvider: () => (/* binding */ normalizeProvider)
/* harmony export */ });
const normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri-path.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri-path.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeUriPath: () => (/* binding */ escapeUriPath)
/* harmony export */ });
/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ "./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri.js");

const escapeUriPath = (uri) => uri.split("/").map(_escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri).join("/");


/***/ }),

/***/ "./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeUri: () => (/* binding */ escapeUri)
/* harmony export */ });
const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
const hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;


/***/ }),

/***/ "./node_modules/@aws-sdk/util-uri-escape/dist-es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-uri-escape/dist-es/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   escapeUri: () => (/* reexport safe */ _escape_uri__WEBPACK_IMPORTED_MODULE_0__.escapeUri),
/* harmony export */   escapeUriPath: () => (/* reexport safe */ _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__.escapeUriPath)
/* harmony export */ });
/* harmony import */ var _escape_uri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./escape-uri */ "./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri.js");
/* harmony import */ var _escape_uri_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./escape-uri-path */ "./node_modules/@aws-sdk/util-uri-escape/dist-es/escape-uri-path.js");




/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8-browser/dist-es/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8),
/* harmony export */   toUtf8: () => (/* binding */ toUtf8)
/* harmony export */ });
/* harmony import */ var _pureJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pureJs */ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js");
/* harmony import */ var _whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whatwgEncodingApi */ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js");


const fromUtf8 = (input) => typeof TextEncoder === "function" ? (0,_whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__.fromUtf8)(input) : (0,_pureJs__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(input);
const toUtf8 = (input) => typeof TextDecoder === "function" ? (0,_whatwgEncodingApi__WEBPACK_IMPORTED_MODULE_1__.toUtf8)(input) : (0,_pureJs__WEBPACK_IMPORTED_MODULE_0__.toUtf8)(input);


/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8-browser/dist-es/pureJs.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8),
/* harmony export */   toUtf8: () => (/* binding */ toUtf8)
/* harmony export */ });
const fromUtf8 = (input) => {
    const bytes = [];
    for (let i = 0, len = input.length; i < len; i++) {
        const value = input.charCodeAt(i);
        if (value < 0x80) {
            bytes.push(value);
        }
        else if (value < 0x800) {
            bytes.push((value >> 6) | 0b11000000, (value & 0b111111) | 0b10000000);
        }
        else if (i + 1 < input.length && (value & 0xfc00) === 0xd800 && (input.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            const surrogatePair = 0x10000 + ((value & 0b1111111111) << 10) + (input.charCodeAt(++i) & 0b1111111111);
            bytes.push((surrogatePair >> 18) | 0b11110000, ((surrogatePair >> 12) & 0b111111) | 0b10000000, ((surrogatePair >> 6) & 0b111111) | 0b10000000, (surrogatePair & 0b111111) | 0b10000000);
        }
        else {
            bytes.push((value >> 12) | 0b11100000, ((value >> 6) & 0b111111) | 0b10000000, (value & 0b111111) | 0b10000000);
        }
    }
    return Uint8Array.from(bytes);
};
const toUtf8 = (input) => {
    let decoded = "";
    for (let i = 0, len = input.length; i < len; i++) {
        const byte = input[i];
        if (byte < 0x80) {
            decoded += String.fromCharCode(byte);
        }
        else if (0b11000000 <= byte && byte < 0b11100000) {
            const nextByte = input[++i];
            decoded += String.fromCharCode(((byte & 0b11111) << 6) | (nextByte & 0b111111));
        }
        else if (0b11110000 <= byte && byte < 0b101101101) {
            const surrogatePair = [byte, input[++i], input[++i], input[++i]];
            const encoded = "%" + surrogatePair.map((byteValue) => byteValue.toString(16)).join("%");
            decoded += decodeURIComponent(encoded);
        }
        else {
            decoded += String.fromCharCode(((byte & 0b1111) << 12) | ((input[++i] & 0b111111) << 6) | (input[++i] & 0b111111));
        }
    }
    return decoded;
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8-browser/dist-es/whatwgEncodingApi.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8),
/* harmony export */   toUtf8: () => (/* binding */ toUtf8)
/* harmony export */ });
function fromUtf8(input) {
    return new TextEncoder().encode(input);
}
function toUtf8(input) {
    return new TextDecoder("utf-8").decode(input);
}


/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8-node/dist-es/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8-node/dist-es/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8),
/* harmony export */   toUtf8: () => (/* binding */ toUtf8)
/* harmony export */ });
/* harmony import */ var _aws_sdk_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/util-buffer-from */ "./node_modules/@aws-sdk/util-utf8-node/node_modules/@aws-sdk/util-buffer-from/dist-es/index.js");

const fromUtf8 = (input) => {
    const buf = (0,_aws_sdk_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromString)(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};
const toUtf8 = (input) => (0,_aws_sdk_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__.fromArrayBuffer)(input.buffer, input.byteOffset, input.byteLength).toString("utf8");


/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8-node/node_modules/@aws-sdk/is-array-buffer/dist-es/index.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8-node/node_modules/@aws-sdk/is-array-buffer/dist-es/index.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isArrayBuffer: () => (/* binding */ isArrayBuffer)
/* harmony export */ });
const isArrayBuffer = (arg) => (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
    Object.prototype.toString.call(arg) === "[object ArrayBuffer]";


/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8-node/node_modules/@aws-sdk/util-buffer-from/dist-es/index.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8-node/node_modules/@aws-sdk/util-buffer-from/dist-es/index.js ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromArrayBuffer: () => (/* binding */ fromArrayBuffer),
/* harmony export */   fromString: () => (/* binding */ fromString)
/* harmony export */ });
/* harmony import */ var _aws_sdk_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/is-array-buffer */ "./node_modules/@aws-sdk/util-utf8-node/node_modules/@aws-sdk/is-array-buffer/dist-es/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");


const fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
    if (!(0,_aws_sdk_is_array_buffer__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input, offset, length);
};
const fromString = (input, encoding) => {
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input, encoding) : buffer__WEBPACK_IMPORTED_MODULE_1__.Buffer.from(input);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8/dist-es/fromUtf8.browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8/dist-es/fromUtf8.browser.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8)
/* harmony export */ });
const fromUtf8 = (input) => new TextEncoder().encode(input);


/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8/dist-es/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8/dist-es/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),
/* harmony export */   toUint8Array: () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),
/* harmony export */   toUtf8: () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/fromUtf8.browser.js");
/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toUint8Array */ "./node_modules/@aws-sdk/util-utf8/dist-es/toUint8Array.js");
/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toUtf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/toUtf8.browser.js");





/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8/dist-es/toUint8Array.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8/dist-es/toUint8Array.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ "./node_modules/@aws-sdk/util-utf8/dist-es/fromUtf8.browser.js");

const toUint8Array = (data) => {
    if (typeof data === "string") {
        return (0,_fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};


/***/ }),

/***/ "./node_modules/@aws-sdk/util-utf8/dist-es/toUtf8.browser.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@aws-sdk/util-utf8/dist-es/toUtf8.browser.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUtf8: () => (/* binding */ toUtf8)
/* harmony export */ });
const toUtf8 = (input) => new TextDecoder("utf-8").decode(input);


/***/ }),

/***/ "./node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js":
/*!********************************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* binding */ fromUtf8)
/* harmony export */ });
const fromUtf8 = (input) => new TextEncoder().encode(input);


/***/ }),

/***/ "./node_modules/@smithy/util-utf8/dist-es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromUtf8: () => (/* reexport safe */ _fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8),
/* harmony export */   toUint8Array: () => (/* reexport safe */ _toUint8Array__WEBPACK_IMPORTED_MODULE_1__.toUint8Array),
/* harmony export */   toUtf8: () => (/* reexport safe */ _toUtf8__WEBPACK_IMPORTED_MODULE_2__.toUtf8)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ "./node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js");
/* harmony import */ var _toUint8Array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toUint8Array */ "./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js");
/* harmony import */ var _toUtf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toUtf8 */ "./node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js");





/***/ }),

/***/ "./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js":
/*!****************************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUint8Array: () => (/* binding */ toUint8Array)
/* harmony export */ });
/* harmony import */ var _fromUtf8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fromUtf8 */ "./node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js");

const toUint8Array = (data) => {
    if (typeof data === "string") {
        return (0,_fromUtf8__WEBPACK_IMPORTED_MODULE_0__.fromUtf8)(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};


/***/ }),

/***/ "./node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js":
/*!******************************************************************!*\
  !*** ./node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toUtf8: () => (/* binding */ toUtf8)
/* harmony export */ });
const toUtf8 = (input) => {
    if (typeof input === "string") {
        return input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    }
    return new TextDecoder("utf-8").decode(input);
};


/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
const ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

const K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1)
    const proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
})

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __rewriteRelativeImportExtension: () => (/* binding */ __rewriteRelativeImportExtension),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

var ownKeys = function(o) {
  ownKeys = Object.getOwnPropertyNames || function (o) {
    var ar = [];
    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
    return ar;
  };
  return ownKeys(o);
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./background.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aws_sdk_signature_v4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/signature-v4 */ "./node_modules/@aws-sdk/signature-v4/dist-es/index.js");
/* harmony import */ var _aws_crypto_sha256_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-crypto/sha256-js */ "./node_modules/@aws-crypto/sha256-js/build/module/index.js");
/* harmony import */ var _aws_sdk_url_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-sdk/url-parser */ "./node_modules/@aws-sdk/url-parser/dist-es/index.js");
/* harmony import */ var _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aws-sdk/protocol-http */ "./node_modules/@aws-sdk/protocol-http/dist-es/index.js");
/* harmony import */ var _aws_sdk_eventstream_marshaller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-sdk/eventstream-marshaller */ "./node_modules/@aws-sdk/eventstream-marshaller/dist-es/index.js");
/* harmony import */ var _aws_sdk_util_utf8_node__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-sdk/util-utf8-node */ "./node_modules/@aws-sdk/util-utf8-node/dist-es/index.js");
// background.js

// --- AWS SDK Imports (Conceptual - requires bundling) ---







 // Or browser equivalent

console.log("Background service worker starting...");

// --- State ---
let isRunning = false;
let awsConfig = null;
let transcribeWebSocket = null;
let translateClient = null; // AWS Translate Client instance
let currentTabId = null; // Keep track of the tab where processing is active

// --- Configuration ---
const TRANSCRIBE_LANGUAGE_CODE = "ja-JP"; // Japanese for STT
const TRANSLATE_SOURCE_LANGUAGE = "ja"; // Japanese for Translate
const TRANSLATE_TARGET_LANGUAGE = "zh"; // Chinese for Translate
// IMPORTANT: Sample rate MUST match the sample rate of the audio chunks received from content.js
// If content.js captures at 44100Hz and doesn't resample, you must set this to 44100.
// If content.js resamples to 16000Hz, set this to 16000.
const AUDIO_CHUNK_SAMPLE_RATE = 16000; // Assuming content.js resamples or captures at this rate

// --- Helper: Get AWS Credentials ---
async function getAwsCredentials() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(['awsAccessKeyId', 'awsSecretAccessKey', 'awsRegion'], function(data) {
      if (data.awsAccessKeyId && data.awsSecretAccessKey && data.awsRegion) {
        awsConfig = {
          accessKeyId: data.awsAccessKeyId,
          secretAccessKey: data.awsSecretAccessKey,
          region: data.awsRegion
        };
        console.log("AWS Credentials loaded from storage.");
        resolve(awsConfig);
      } else {
        console.warn("AWS Credentials not found in storage.");
        reject("Credentials not configured");
      }
    });
  });
}

// --- AWS Transcribe Real-time WebSocket Logic ---
// (Mostly same as before, but sends AUDIO_CHUNK_SAMPLE_RATE)
async function startTranscribeWebSocket(config) {
  console.log("Attempting to connect to AWS Transcribe...");

  const endpoint = `wss://transcribestreaming.${config.region}.amazonaws.com:8443`;
  // Construct the signed WebSocket URL using SigV4 (complex, requires SDK helpers)
  // const signedUrl = await buildSignedTranscribeUrl(config, endpoint, AUDIO_CHUNK_SAMPLE_RATE); // Hypothetical helper

  // Placeholder URL structure (DOES NOT INCLUDE REAL SIGV4 SIGNING!)
  const placeholderUrl = `${endpoint}/?language-code=${TRANSCRIBE_LANGUAGE_CODE}&media-encoding=pcm&sample-rate=${AUDIO_CHUNK_SAMPLE_RATE}`;
  console.warn("Using placeholder WebSocket URL without real SigV4 signing. Connection will likely fail.");
  transcribeWebSocket = new WebSocket(placeholderUrl);
  // const eventMarshaller = new EventStreamMarshaller(toUtf8, fromUtf8); // Requires @aws-sdk/eventstream-marshaller, util-utf8-node

  transcribeWebSocket.onopen = (event) => {
    console.log("Transcribe WebSocket opened.");
    // Send initial settings message (conceptual, requires event stream marshalling)
    /*
    const greetingMessage = { ... }; // Build Transcribe configuration message
    const binaryMessage = eventMarshaller.marshall(greetingMessage);
    transcribeWebSocket.send(binaryMessage);
    */
     console.log("WebSocket opened. Ready to receive audio data (and send config if implemented).");
     // Inform content script that AWS is ready to receive audio (optional)
     if (currentTabId) {
         chrome.tabs.sendMessage(currentTabId, { action: "awsReady" }).catch(e => console.error("Error sending awsReady to tab:", e));
     }
  };

  transcribeWebSocket.onmessage = (event) => {
    // *** Parse the incoming event stream message from Transcribe ***
    // This is where you get the transcribed Japanese text.
    // Example (conceptual, requires eventstream-marshaller):
    /*
    try {
        const blob = event.data;
        const reader = new FileReader();
        reader.onloadend = () => {
            const arrayBuffer = reader.result;
            const message = eventMarshaller.unmarshall(new Uint8Array(arrayBuffer));

            const messageType = message.headers[':message-type']?.value;
            const eventType = message.headers[':event-type']?.value;

            if (messageType === 'event' && eventType === 'transcript-event') {
                const messageBody = JSON.parse(message.body);
                const results = messageBody.Transcript?.Results;

                if (results && results.length > 0) {
                    const result = results[0];
                    const alternative = result.Alternatives?.[0];

                    if (alternative && alternative.Transcript && alternative.Transcript.trim().length > 0) {
                        const transcript = alternative.Transcript;
                        const isPartial = result.IsPartial;

                        if (!isPartial) {
                            console.log("Final Japanese:", transcript);
                            // *** CALL TRANSLATE HERE ***
                            translateText(transcript);
                        } else {
                            // Optional: Handle partial results
                            // updateSubtitlesInContentScript(transcript, "...");
                        }
                    }
                }
            } else if (messageType === 'exception') {
                 const messageBody = JSON.parse(message.body);
                 console.error("Transcribe Exception:", messageBody.Message);
                 updateSubtitlesInContentScript("", `[STT出错: ${messageBody.Message}]`);
                 stopProcessing(); // Stop on error
            }
        };
        reader.readAsArrayBuffer(blob);

    } catch (error) {
        console.error("Error processing Transcribe WebSocket message:", error);
        updateSubtitlesInContentScript("", `[处理STT结果出错: ${error.message}]`);
        stopProcessing(); // Stop on error
    }
    */

    // --- Placeholder: Simulate receiving a final transcript ---
    console.log("Received WebSocket message (placeholder). Simulating transcript result.");
    // In a real scenario, parse event.data and call translateText(parsedJapaneseText);
    // For now, let's simulate receiving text and triggering translation after a short delay.
    // This simulation replaces the actual message parsing logic above.
    if (!transcribeWebSocket._simulating) { // Prevent multiple timeouts from one message
        transcribeWebSocket._simulating = true;
         setTimeout(() => {
            const simulatedJapaneseText = "こんにちは、これはタブキャプチャからのテストです。"; // Example Japanese text
            console.log("Simulated Final Japanese:", simulatedJapaneseText);
            translateText(simulatedJapaneseText); // Call translate
            delete transcribeWebSocket._simulating;
         }, 500); // Simulate processing delay
    }
    // --- End Placeholder Simulation ---
  };

  transcribeWebSocket.onerror = (event) => {
    console.error("Transcribe WebSocket error:", event);
    const errorMessage = event?.message || 'Unknown WebSocket error';
    updateSubtitlesInContentScript("", `[STT连接出错: ${errorMessage}]`);
    stopProcessing(); // Ensure state is reset
  };

  transcribeWebSocket.onclose = (event) => {
    console.log("Transcribe WebSocket closed:", event.code, event.reason);
    if (isRunning) { // If it closed unexpectedly while running
       console.error("WebSocket closed unexpectedly, attempting to stop.");
       updateSubtitlesInContentScript("", "[STT连接意外关闭]");
       stopProcessing(); // Ensure state is reset
    } else {
       console.log("WebSocket closed gracefully.");
    }
  };

  return transcribeWebSocket;
}

function stopTranscribeWebSocket() {
  if (transcribeWebSocket) {
    console.log("Closing Transcribe WebSocket...");
    transcribeWebSocket.close(1000, "Client stopping"); // Normal closure
    transcribeWebSocket = null;
  }
}

// Function to send audio chunks (called by content script)
// The chunk should be an ArrayBuffer containing raw audio data (Int16Array buffer)
function sendAudioChunkToTranscribe(chunk) {
    if (transcribeWebSocket && transcribeWebSocket.readyState === WebSocket.OPEN) {
        // *** Send the audio chunk as a binary message ***
        // This involves creating an EventStream message of type 'AudioEvent'
        // with the chunk as the body, and marshalling it into a binary frame.
        // Requires eventstream-marshaller.
        /*
        try {
            const audioEventMessage = {
                headers: {
                    ':message-type': { type: 'string', value: 'event' },
                    ':event-type': { type: 'string', value: 'AudioEvent' },
                },
                body: new Uint8Array(chunk), // Audio data as Uint8Array or Buffer
            };
            const binaryMessage = eventMarshaller.marshall(audioEventMessage);
            transcribeWebSocket.send(binaryMessage);
            // console.log("Sent audio chunk. Size:", chunk.byteLength);
        } catch (error) {
            console.error("Error marshalling/sending audio chunk:", error);
            // Decide how to handle send errors - maybe stop or log
            updateSubtitlesInContentScript("", `[发送音频出错: ${error.message}]`);
            // stopProcessing(); // Optional: stop on send error
        }
        */
        // console.log("Received and would send audio chunk (processing disabled in example). Size:", chunk.byteLength);
        // In a real scenario, uncomment the try/catch block above.
    } else {
        // console.warn("WebSocket not open, cannot send audio chunk.");
        // Handle case where WS is not ready - buffer chunks? Drop them?
    }
}


// --- AWS Translate Logic (Same as before) ---
async function translateText(japaneseText) {
  if (!awsConfig || !translateClient) {
    console.error("AWS config or TranslateClient not loaded for translation.");
    updateSubtitlesInContentScript(japaneseText, "[翻译服务未启动或出错]");
    return;
  }

  if (!japaneseText || japaneseText.trim().length === 0) {
      console.log("No meaningful text to translate.");
      // If Transcribe sends empty or whitespace result, maybe clear subtitles or show only previous?
      // updateSubtitlesInContentScript("", "");
      return;
  }

  console.log("Translating:", japaneseText);

  try {
    // *** Call Translate API (Requires @aws-sdk/client-translate) ***
    /*
    const command = new TranslateTextCommand({
      Text: japaneseText,
      SourceLanguageCode: TRANSLATE_SOURCE_LANGUAGE,
      TargetLanguageCode: TRANSLATE_TARGET_LANGUAGE,
    });
    const response = await translateClient.send(command);
    const chineseText = response.TranslatedText;
    */

    // --- Placeholder: Simulate translation delay and result ---
    const chineseText = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`[翻译: ${japaneseText}]`); // Replace with actual translation result from AWS
        }, 200); // Simulate network latency for translation
    });
    // --- End Placeholder ---

    console.log("Translated:", chineseText);

    // Send both original and translated text to content script
    updateSubtitlesInContentScript(japaneseText, chineseText);

  } catch (error) {
    console.error("Error translating text:", error);
    updateSubtitlesInContentScript(japaneseText, `[翻译出错: ${error.message}]`);
  }
}

// Helper to send subtitle update message to the active tab
function updateSubtitlesInContentScript(japaneseText, chineseText) {
    // Send message only to the tab that initiated the process
    if (currentTabId) {
        chrome.tabs.sendMessage(currentTabId, {
          action: "updateSubtitles",
          japanese: japaneseText,
          chinese: chineseText
        }).catch(e => console.error("Error sending updateSubtitles message:", e));
    } else {
        console.warn("No active tab ID to send subtitle update.");
    }
}


// --- Main Control Functions ---
async function startProcessing() {
  if (isRunning) {
    console.log("Already running.");
    return { success: false, error: "Already running" };
  }

  console.log("Attempting to start processing...");

  try {
    // Get the active tab first to know where to inject/send messages
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    if (!tab || !tab.id) {
         console.error("No active tab found or tab ID is invalid.");
         return { success: false, error: "No active tab found" };
    }
    currentTabId = tab.id; // Store the tab ID

    // 1. Get AWS Credentials
    awsConfig = await getAwsCredentials();
    console.log("AWS Config loaded successfully.");

    // 2. Initialize AWS Translate Client
    // translateClient = new TranslateClient({ ... }); // Requires @aws-sdk/client-translate
    console.warn("TranslateClient initialization placeholder."); // Placeholder

    // 3. Start AWS Transcribe WebSocket connection
    // This is async and needs to handle connection lifecycle.
    // We start the WS connection early while waiting for audio.
    await startTranscribeWebSocket(awsConfig);
    console.log("Transcribe WebSocket setup initiated.");

    // 4. Inject content script and CSS (if not already there) and signal it to start subtitles
    // This ensures the content script is ready before we ask it to capture.
    await chrome.scripting.executeScript({
        target: { tabId: currentTabId },
        files: ['content.js'], // Inject content.js if not already there
    });
     await chrome.scripting.insertCSS({
        target: { tabId: currentTabId },
        files: ['subtitle.css'], // Inject CSS if not already there
    });

    // Send the initial start signal to the content script (primarily for subtitles)
    await chrome.tabs.sendMessage(currentTabId, { action: "startContentScript" });
    console.log("Sent startContentScript signal to content script.");

    // 5. *** NOW, TELL THE CONTENT SCRIPT TO INITIATE TAB CAPTURE ***
    // This will trigger the chrome.tabCapture.capture call and the permission dialog.
    // The content script will then send audio chunks back via 'audioChunk' messages.
    await chrome.tabs.sendMessage(currentTabId, { action: "initiateTabCapture" });
    console.log("Sent initiateTabCapture signal to content script.");


    isRunning = true;
    console.log("Processing started successfully.");
    return { success: true };

  } catch (error) {
    console.error("Failed to start processing:", error);
    // Ensure cleanup happens if start fails
    stopProcessing();
    let userError = "Unknown error during start.";
    if (typeof error === 'string') {
        userError = error;
    } else if (error instanceof Error) {
        userError = error.message;
    }
    updateSubtitlesInContentScript("", `[启动失败: ${userError}]`); // Show error in subtitles
    return { success: false, error: userError };
  }
}

function stopProcessing() {
  if (!isRunning) {
    console.log("Not running.");
    return { success: false, error: "Not running" };
  }

  console.log("Stopping processing...");

  // 1. Stop AWS Transcribe WebSocket
  stopTranscribeWebSocket();

  // 2. Inform content script to remove subtitles and stop audio capture
  if (currentTabId) {
      chrome.tabs.sendMessage(currentTabId, { action: "stopContentScript" })
        .catch(e => console.error("Error sending stopContentScript message:", e));
      console.log("Sent stop signal to content script.");
  } else {
      console.warn("No active tab ID to send stop signal.");
  }


  // 3. Reset state
  isRunning = false;
  awsConfig = null; // Clear credentials from memory (best effort)
  translateClient = null; // Clear client instance
  currentTabId = null; // Clear the active tab ID
  console.log("Processing stopped.");
  return { success: true };
}


// --- Message Listener from Popup/Content Script ---
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Background received message:", request.action, sender.tab ? "from content script in tab " + sender.tab.id : "from popup/other");

  // Handle messages from popup or content script
  if (request.action === "start") {
    // Start the whole process (triggered by popup)
    startProcessing().then(sendResponse);
    return true; // Indicate async response
  } else if (request.action === "stop") {
    // Stop the whole process (triggered by popup)
    sendResponse(stopProcessing());
  } else if (request.action === "getStatus") {
    // Report current running status (used by popup)
    sendResponse({ isRunning: isRunning });
  } else if (request.action === "audioChunk") {
    // Received audio data from content script (from tabCapture processing)
    // Ensure message comes from the tab we expect
    if (sender.tab && sender.tab.id === currentTabId && request.chunk) {
        // console.log("Received audio chunk from content script. Size:", request.chunk.byteLength);
        // Send the audio chunk to the Transcribe WebSocket
        sendAudioChunkToTranscribe(request.chunk); // Call the function to send to WS
        sendResponse({ success: true }); // Acknowledge receipt
        // return true; // Uncomment if sendAudioChunkToTranscribe is async
    } else {
         console.warn("Received audioChunk message from unexpected sender or without data.");
         sendResponse({ success: false, error: "Invalid audioChunk message" });
    }
  } else if (request.action === "audioCaptureError") {
     // Received error message from content script regarding audio capture
     console.error("Audio capture failed in content script:", request.error);
     // Optionally stop processing or show a notification
     // It's often best to stop the whole process if audio capture fails.
     updateSubtitlesInContentScript("", `[音频捕获失败: ${request.error}]`); // Inform user via subtitles
     stopProcessing(); // Stop the entire process
     sendResponse({ success: true }); // Acknowledge receipt
  } else if (request.action === "audioProcessingStarted") {
      // Optional: Content script confirms Web Audio processing started
      console.log("Content script reports audio processing started.");
      sendResponse({ success: true });
  }
  // Add other message handlers if needed
});

// --- Initial state check (optional) ---
console.log("Background service worker initialized. State: Idle.");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsaUJBQWlCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtB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QUFDQSxJQUFJO0FBQ0o7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELHVCQUF1QixlQUFlLEdBQUc7QUFDekMsd0JBQXdCO0FBQ3hCLE1BQU07QUFDTjtBQUNBLHdCQUF3QixxREFBcUQ7QUFDN0U7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsY0FBYyxLQUFLO0FBQ3ZFLHVCQUF1QjtBQUN2QixvQkFBb0IsZUFBZSxHQUFHO0FBQ3RDLElBQUk7QUFDSjtBQUNBO0FBQ0EscUJBQXFCLGVBQWU7QUFDcEM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxtRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by9jcmMzMi9idWlsZC9hd3NfY3JjMzIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL2NyYzMyL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by9jcmMzMi9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vdXRpbC9idWlsZC9jb252ZXJ0VG9CdWZmZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL2NyYzMyL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by9jcmMzMi9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vdXRpbC9idWlsZC9pc0VtcHR5RGF0YS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vY3JjMzIvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvYnVpbGQvbnVtVG9VaW50OC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vY3JjMzIvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvYnVpbGQvdWludDMyQXJyYXlGcm9tLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by9jcmMzMi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by9zaGEyNTYtanMvYnVpbGQvbW9kdWxlL1Jhd1NoYTI1Ni5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vc2hhMjU2LWpzL2J1aWxkL21vZHVsZS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3NoYTI1Ni1qcy9idWlsZC9tb2R1bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3NoYTI1Ni1qcy9idWlsZC9tb2R1bGUvanNTaGEyNTYuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvYnVpbGQvbW9kdWxlL2NvbnZlcnRUb0J1ZmZlci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vdXRpbC9idWlsZC9tb2R1bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvYnVpbGQvbW9kdWxlL2lzRW1wdHlEYXRhLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL2J1aWxkL21vZHVsZS9udW1Ub1VpbnQ4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL2J1aWxkL21vZHVsZS91aW50MzJBcnJheUZyb20uanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLWNvZGVjL2Rpc3QtZXMvRXZlbnRTdHJlYW1Db2RlYy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0tY29kZWMvZGlzdC1lcy9IZWFkZXJNYXJzaGFsbGVyLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9kaXN0LWVzL0ludDY0LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9kaXN0LWVzL01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLWNvZGVjL2Rpc3QtZXMvTWVzc2FnZURlY29kZXJTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLWNvZGVjL2Rpc3QtZXMvTWVzc2FnZUVuY29kZXJTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLWNvZGVjL2Rpc3QtZXMvU21pdGh5TWVzc2FnZURlY29kZXJTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLWNvZGVjL2Rpc3QtZXMvU21pdGh5TWVzc2FnZUVuY29kZXJTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLWNvZGVjL2Rpc3QtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLWNvZGVjL2Rpc3QtZXMvc3BsaXRNZXNzYWdlLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vY3JjMzIvYnVpbGQvYXdzX2NyYzMyLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vY3JjMzIvYnVpbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLWNvZGVjL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by9jcmMzMi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vdXRpbC9idWlsZC9jb252ZXJ0VG9CdWZmZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLWNvZGVjL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vdXRpbC9idWlsZC9pc0VtcHR5RGF0YS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0tY29kZWMvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvYnVpbGQvbnVtVG9VaW50OC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0tY29kZWMvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvYnVpbGQvdWludDMyQXJyYXlGcm9tLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9ub2RlX21vZHVsZXMvQGF3cy1zZGsvdXRpbC1oZXgtZW5jb2RpbmcvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0tbWFyc2hhbGxlci9kaXN0LWVzL0V2ZW50U3RyZWFtTWFyc2hhbGxlci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0tbWFyc2hhbGxlci9kaXN0LWVzL0hlYWRlck1hcnNoYWxsZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLW1hcnNoYWxsZXIvZGlzdC1lcy9JbnQ2NC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0tbWFyc2hhbGxlci9kaXN0LWVzL01lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLW1hcnNoYWxsZXIvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0tbWFyc2hhbGxlci9kaXN0LWVzL3NwbGl0TWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvaXMtYXJyYXktYnVmZmVyL2Rpc3QtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3Byb3RvY29sLWh0dHAvZGlzdC1lcy9GaWVsZC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvcHJvdG9jb2wtaHR0cC9kaXN0LWVzL0ZpZWxkUG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3Byb3RvY29sLWh0dHAvZGlzdC1lcy9GaWVsZHMuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3Byb3RvY29sLWh0dHAvZGlzdC1lcy9odHRwSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvcHJvdG9jb2wtaHR0cC9kaXN0LWVzL2h0dHBSZXF1ZXN0LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9wcm90b2NvbC1odHRwL2Rpc3QtZXMvaHR0cFJlc3BvbnNlLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9wcm90b2NvbC1odHRwL2Rpc3QtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3Byb3RvY29sLWh0dHAvZGlzdC1lcy9pc1ZhbGlkSG9zdG5hbWUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3F1ZXJ5c3RyaW5nLXBhcnNlci9kaXN0LWVzL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9zaWduYXR1cmUtdjQvZGlzdC1lcy9TaWduYXR1cmVWNC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvc2lnbmF0dXJlLXY0L2Rpc3QtZXMvY2xvbmVSZXF1ZXN0LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9zaWduYXR1cmUtdjQvZGlzdC1lcy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3NpZ25hdHVyZS12NC9kaXN0LWVzL2NyZWRlbnRpYWxEZXJpdmF0aW9uLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9zaWduYXR1cmUtdjQvZGlzdC1lcy9nZXRDYW5vbmljYWxIZWFkZXJzLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9zaWduYXR1cmUtdjQvZGlzdC1lcy9nZXRDYW5vbmljYWxRdWVyeS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvc2lnbmF0dXJlLXY0L2Rpc3QtZXMvZ2V0UGF5bG9hZEhhc2guanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3NpZ25hdHVyZS12NC9kaXN0LWVzL2hlYWRlclV0aWwuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3NpZ25hdHVyZS12NC9kaXN0LWVzL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9zaWduYXR1cmUtdjQvZGlzdC1lcy9tb3ZlSGVhZGVyc1RvUXVlcnkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3NpZ25hdHVyZS12NC9kaXN0LWVzL3ByZXBhcmVSZXF1ZXN0LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9zaWduYXR1cmUtdjQvZGlzdC1lcy91dGlsRGF0ZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvc2lnbmF0dXJlLXY0L25vZGVfbW9kdWxlcy9AYXdzLXNkay91dGlsLWhleC1lbmNvZGluZy9kaXN0LWVzL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay91cmwtcGFyc2VyL2Rpc3QtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtaGV4LWVuY29kaW5nL2Rpc3QtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtbWlkZGxld2FyZS9kaXN0LWVzL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay91dGlsLW1pZGRsZXdhcmUvZGlzdC1lcy9ub3JtYWxpemVQcm92aWRlci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvdXRpbC11cmktZXNjYXBlL2Rpc3QtZXMvZXNjYXBlLXVyaS1wYXRoLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay91dGlsLXVyaS1lc2NhcGUvZGlzdC1lcy9lc2NhcGUtdXJpLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay91dGlsLXVyaS1lc2NhcGUvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvdXRpbC11dGY4LWJyb3dzZXIvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvdXRpbC11dGY4LWJyb3dzZXIvZGlzdC1lcy9wdXJlSnMuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtdXRmOC1icm93c2VyL2Rpc3QtZXMvd2hhdHdnRW5jb2RpbmdBcGkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtdXRmOC1ub2RlL2Rpc3QtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtdXRmOC1ub2RlL25vZGVfbW9kdWxlcy9AYXdzLXNkay9pcy1hcnJheS1idWZmZXIvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvdXRpbC11dGY4LW5vZGUvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtYnVmZmVyLWZyb20vZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvdXRpbC11dGY4L2Rpc3QtZXMvZnJvbVV0ZjguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvdXRpbC11dGY4L2Rpc3QtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtdXRmOC9kaXN0LWVzL3RvVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvdXRpbC11dGY4L2Rpc3QtZXMvdG9VdGY4LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11dGY4L2Rpc3QtZXMvZnJvbVV0ZjguYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0ZjgvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQHNtaXRoeS91dGlsLXV0ZjgvZGlzdC1lcy90b1VpbnQ4QXJyYXkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11dGY4L2Rpc3QtZXMvdG9VdGY4LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYubWpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXdzQ3JjMzIgPSB2b2lkIDA7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwiQGF3cy1jcnlwdG8vdXRpbFwiKTtcbnZhciBpbmRleF8xID0gcmVxdWlyZShcIi4vaW5kZXhcIik7XG52YXIgQXdzQ3JjMzIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXdzQ3JjMzIoKSB7XG4gICAgICAgIHRoaXMuY3JjMzIgPSBuZXcgaW5kZXhfMS5DcmMzMigpO1xuICAgIH1cbiAgICBBd3NDcmMzMi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHRvSGFzaCkge1xuICAgICAgICBpZiAoKDAsIHV0aWxfMS5pc0VtcHR5RGF0YSkodG9IYXNoKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5jcmMzMi51cGRhdGUoKDAsIHV0aWxfMS5jb252ZXJ0VG9CdWZmZXIpKHRvSGFzaCkpO1xuICAgIH07XG4gICAgQXdzQ3JjMzIucHJvdG90eXBlLmRpZ2VzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICgwLCB0c2xpYl8xLl9fYXdhaXRlcikodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoMCwgdHNsaWJfMS5fX2dlbmVyYXRvcikodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sICgwLCB1dGlsXzEubnVtVG9VaW50OCkodGhpcy5jcmMzMi5kaWdlc3QoKSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEF3c0NyYzMyO1xufSgpKTtcbmV4cG9ydHMuQXdzQ3JjMzIgPSBBd3NDcmMzMjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYZHpYMk55WXpNeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpTGk0dmMzSmpMMkYzYzE5amNtTXpNaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRXNiMFZCUVc5Rk8wRkJRM0JGTEhORFFVRnpRenM3T3p0QlFVZDBReXg1UTBGQk5FVTdRVUZETlVVc2FVTkJRV2RETzBGQlJXaERPMGxCUVVFN1VVRkRiVUlzVlVGQlN5eEhRVUZITEVsQlFVa3NZVUZCU3l4RlFVRkZMRU5CUVVNN1NVRlhka01zUTBGQlF6dEpRVlJETEhsQ1FVRk5MRWRCUVU0c1ZVRkJUeXhOUVVGclFqdFJRVU4yUWl4SlFVRkpMRWxCUVVFc2EwSkJRVmNzUlVGQlF5eE5RVUZOTEVOQlFVTTdXVUZCUlN4UFFVRlBPMUZCUldoRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVFc2MwSkJRV1VzUlVGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUXpkRExFTkJRVU03U1VGRlN5eDVRa0ZCVFN4SFFVRmFPenM3WjBKQlEwVXNjMEpCUVU4c1NVRkJRU3hwUWtGQlZTeEZRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlF6czdPMHRCUTNoRE8wbEJRMGdzWlVGQlF6dEJRVUZFTEVOQlFVTXNRVUZhUkN4SlFWbERPMEZCV2xrc05FSkJRVkVpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QkRiM0I1Y21sbmFIUWdRVzFoZW05dUxtTnZiU0JKYm1NdUlHOXlJR2wwY3lCaFptWnBiR2xoZEdWekxpQkJiR3dnVW1sbmFIUnpJRkpsYzJWeWRtVmtMbHh1THk4Z1UxQkVXQzFNYVdObGJuTmxMVWxrWlc1MGFXWnBaWEk2SUVGd1lXTm9aUzB5TGpCY2JseHVhVzF3YjNKMElIc2dTR0Z6YUN3Z1UyOTFjbU5sUkdGMFlTQjlJR1p5YjIwZ1hDSkFZWGR6TFhOa2F5OTBlWEJsYzF3aU8xeHVhVzF3YjNKMElIc2dZMjl1ZG1WeWRGUnZRblZtWm1WeUxDQnBjMFZ0Y0hSNVJHRjBZU3dnYm5WdFZHOVZhVzUwT0NCOUlHWnliMjBnWENKQVlYZHpMV055ZVhCMGJ5OTFkR2xzWENJN1hHNXBiWEJ2Y25RZ2V5QkRjbU16TWlCOUlHWnliMjBnWENJdUwybHVaR1Y0WENJN1hHNWNibVY0Y0c5eWRDQmpiR0Z6Y3lCQmQzTkRjbU16TWlCcGJYQnNaVzFsYm5SeklFaGhjMmdnZTF4dUlDQndjbWwyWVhSbElISmxZV1J2Ym14NUlHTnlZek15SUQwZ2JtVjNJRU55WXpNeUtDazdYRzVjYmlBZ2RYQmtZWFJsS0hSdlNHRnphRG9nVTI5MWNtTmxSR0YwWVNrZ2UxeHVJQ0FnSUdsbUlDaHBjMFZ0Y0hSNVJHRjBZU2gwYjBoaGMyZ3BLU0J5WlhSMWNtNDdYRzVjYmlBZ0lDQjBhR2x6TG1OeVl6TXlMblZ3WkdGMFpTaGpiMjUyWlhKMFZHOUNkV1ptWlhJb2RHOUlZWE5vS1NrN1hHNGdJSDFjYmx4dUlDQmhjM2x1WXlCa2FXZGxjM1FvS1RvZ1VISnZiV2x6WlR4VmFXNTBPRUZ5Y21GNVBpQjdYRzRnSUNBZ2NtVjBkWEp1SUc1MWJWUnZWV2x1ZERnb2RHaHBjeTVqY21Nek1pNWthV2RsYzNRb0tTazdYRzRnSUgxY2JuMWNiaUpkZlE9PSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Bd3NDcmMzMiA9IGV4cG9ydHMuQ3JjMzIgPSBleHBvcnRzLmNyYzMyID0gdm9pZCAwO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgdXRpbF8xID0gcmVxdWlyZShcIkBhd3MtY3J5cHRvL3V0aWxcIik7XG5mdW5jdGlvbiBjcmMzMihkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBDcmMzMigpLnVwZGF0ZShkYXRhKS5kaWdlc3QoKTtcbn1cbmV4cG9ydHMuY3JjMzIgPSBjcmMzMjtcbnZhciBDcmMzMiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDcmMzMigpIHtcbiAgICAgICAgdGhpcy5jaGVja3N1bSA9IDB4ZmZmZmZmZmY7XG4gICAgfVxuICAgIENyYzMyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGRhdGFfMSA9ICgwLCB0c2xpYl8xLl9fdmFsdWVzKShkYXRhKSwgZGF0YV8xXzEgPSBkYXRhXzEubmV4dCgpOyAhZGF0YV8xXzEuZG9uZTsgZGF0YV8xXzEgPSBkYXRhXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ5dGUgPSBkYXRhXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrc3VtID1cbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuY2hlY2tzdW0gPj4+IDgpIF4gbG9va3VwVGFibGVbKHRoaXMuY2hlY2tzdW0gXiBieXRlKSAmIDB4ZmZdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YV8xXzEgJiYgIWRhdGFfMV8xLmRvbmUgJiYgKF9hID0gZGF0YV8xLnJldHVybikpIF9hLmNhbGwoZGF0YV8xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIENyYzMyLnByb3RvdHlwZS5kaWdlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jaGVja3N1bSBeIDB4ZmZmZmZmZmYpID4+PiAwO1xuICAgIH07XG4gICAgcmV0dXJuIENyYzMyO1xufSgpKTtcbmV4cG9ydHMuQ3JjMzIgPSBDcmMzMjtcbi8vIHByZXR0aWVyLWlnbm9yZVxudmFyIGFfbG9va1VwVGFibGUgPSBbXG4gICAgMHgwMDAwMDAwMCwgMHg3NzA3MzA5NiwgMHhFRTBFNjEyQywgMHg5OTA5NTFCQSxcbiAgICAweDA3NkRDNDE5LCAweDcwNkFGNDhGLCAweEU5NjNBNTM1LCAweDlFNjQ5NUEzLFxuICAgIDB4MEVEQjg4MzIsIDB4NzlEQ0I4QTQsIDB4RTBENUU5MUUsIDB4OTdEMkQ5ODgsXG4gICAgMHgwOUI2NEMyQiwgMHg3RUIxN0NCRCwgMHhFN0I4MkQwNywgMHg5MEJGMUQ5MSxcbiAgICAweDFEQjcxMDY0LCAweDZBQjAyMEYyLCAweEYzQjk3MTQ4LCAweDg0QkU0MURFLFxuICAgIDB4MUFEQUQ0N0QsIDB4NkREREU0RUIsIDB4RjRENEI1NTEsIDB4ODNEMzg1QzcsXG4gICAgMHgxMzZDOTg1NiwgMHg2NDZCQThDMCwgMHhGRDYyRjk3QSwgMHg4QTY1QzlFQyxcbiAgICAweDE0MDE1QzRGLCAweDYzMDY2Q0Q5LCAweEZBMEYzRDYzLCAweDhEMDgwREY1LFxuICAgIDB4M0I2RTIwQzgsIDB4NEM2OTEwNUUsIDB4RDU2MDQxRTQsIDB4QTI2NzcxNzIsXG4gICAgMHgzQzAzRTREMSwgMHg0QjA0RDQ0NywgMHhEMjBEODVGRCwgMHhBNTBBQjU2QixcbiAgICAweDM1QjVBOEZBLCAweDQyQjI5ODZDLCAweERCQkJDOUQ2LCAweEFDQkNGOTQwLFxuICAgIDB4MzJEODZDRTMsIDB4NDVERjVDNzUsIDB4RENENjBEQ0YsIDB4QUJEMTNENTksXG4gICAgMHgyNkQ5MzBBQywgMHg1MURFMDAzQSwgMHhDOEQ3NTE4MCwgMHhCRkQwNjExNixcbiAgICAweDIxQjRGNEI1LCAweDU2QjNDNDIzLCAweENGQkE5NTk5LCAweEI4QkRBNTBGLFxuICAgIDB4MjgwMkI4OUUsIDB4NUYwNTg4MDgsIDB4QzYwQ0Q5QjIsIDB4QjEwQkU5MjQsXG4gICAgMHgyRjZGN0M4NywgMHg1ODY4NEMxMSwgMHhDMTYxMURBQiwgMHhCNjY2MkQzRCxcbiAgICAweDc2REM0MTkwLCAweDAxREI3MTA2LCAweDk4RDIyMEJDLCAweEVGRDUxMDJBLFxuICAgIDB4NzFCMTg1ODksIDB4MDZCNkI1MUYsIDB4OUZCRkU0QTUsIDB4RThCOEQ0MzMsXG4gICAgMHg3ODA3QzlBMiwgMHgwRjAwRjkzNCwgMHg5NjA5QTg4RSwgMHhFMTBFOTgxOCxcbiAgICAweDdGNkEwREJCLCAweDA4NkQzRDJELCAweDkxNjQ2Qzk3LCAweEU2NjM1QzAxLFxuICAgIDB4NkI2QjUxRjQsIDB4MUM2QzYxNjIsIDB4ODU2NTMwRDgsIDB4RjI2MjAwNEUsXG4gICAgMHg2QzA2OTVFRCwgMHgxQjAxQTU3QiwgMHg4MjA4RjRDMSwgMHhGNTBGQzQ1NyxcbiAgICAweDY1QjBEOUM2LCAweDEyQjdFOTUwLCAweDhCQkVCOEVBLCAweEZDQjk4ODdDLFxuICAgIDB4NjJERDFEREYsIDB4MTVEQTJENDksIDB4OENEMzdDRjMsIDB4RkJENDRDNjUsXG4gICAgMHg0REIyNjE1OCwgMHgzQUI1NTFDRSwgMHhBM0JDMDA3NCwgMHhENEJCMzBFMixcbiAgICAweDRBREZBNTQxLCAweDNERDg5NUQ3LCAweEE0RDFDNDZELCAweEQzRDZGNEZCLFxuICAgIDB4NDM2OUU5NkEsIDB4MzQ2RUQ5RkMsIDB4QUQ2Nzg4NDYsIDB4REE2MEI4RDAsXG4gICAgMHg0NDA0MkQ3MywgMHgzMzAzMURFNSwgMHhBQTBBNEM1RiwgMHhERDBEN0NDOSxcbiAgICAweDUwMDU3MTNDLCAweDI3MDI0MUFBLCAweEJFMEIxMDEwLCAweEM5MEMyMDg2LFxuICAgIDB4NTc2OEI1MjUsIDB4MjA2Rjg1QjMsIDB4Qjk2NkQ0MDksIDB4Q0U2MUU0OUYsXG4gICAgMHg1RURFRjkwRSwgMHgyOUQ5Qzk5OCwgMHhCMEQwOTgyMiwgMHhDN0Q3QThCNCxcbiAgICAweDU5QjMzRDE3LCAweDJFQjQwRDgxLCAweEI3QkQ1QzNCLCAweEMwQkE2Q0FELFxuICAgIDB4RURCODgzMjAsIDB4OUFCRkIzQjYsIDB4MDNCNkUyMEMsIDB4NzRCMUQyOUEsXG4gICAgMHhFQUQ1NDczOSwgMHg5REQyNzdBRiwgMHgwNERCMjYxNSwgMHg3M0RDMTY4MyxcbiAgICAweEUzNjMwQjEyLCAweDk0NjQzQjg0LCAweDBENkQ2QTNFLCAweDdBNkE1QUE4LFxuICAgIDB4RTQwRUNGMEIsIDB4OTMwOUZGOUQsIDB4MEEwMEFFMjcsIDB4N0QwNzlFQjEsXG4gICAgMHhGMDBGOTM0NCwgMHg4NzA4QTNEMiwgMHgxRTAxRjI2OCwgMHg2OTA2QzJGRSxcbiAgICAweEY3NjI1NzVELCAweDgwNjU2N0NCLCAweDE5NkMzNjcxLCAweDZFNkIwNkU3LFxuICAgIDB4RkVENDFCNzYsIDB4ODlEMzJCRTAsIDB4MTBEQTdBNUEsIDB4NjdERDRBQ0MsXG4gICAgMHhGOUI5REY2RiwgMHg4RUJFRUZGOSwgMHgxN0I3QkU0MywgMHg2MEIwOEVENSxcbiAgICAweEQ2RDZBM0U4LCAweEExRDE5MzdFLCAweDM4RDhDMkM0LCAweDRGREZGMjUyLFxuICAgIDB4RDFCQjY3RjEsIDB4QTZCQzU3NjcsIDB4M0ZCNTA2REQsIDB4NDhCMjM2NEIsXG4gICAgMHhEODBEMkJEQSwgMHhBRjBBMUI0QywgMHgzNjAzNEFGNiwgMHg0MTA0N0E2MCxcbiAgICAweERGNjBFRkMzLCAweEE4NjdERjU1LCAweDMxNkU4RUVGLCAweDQ2NjlCRTc5LFxuICAgIDB4Q0I2MUIzOEMsIDB4QkM2NjgzMUEsIDB4MjU2RkQyQTAsIDB4NTI2OEUyMzYsXG4gICAgMHhDQzBDNzc5NSwgMHhCQjBCNDcwMywgMHgyMjAyMTZCOSwgMHg1NTA1MjYyRixcbiAgICAweEM1QkEzQkJFLCAweEIyQkQwQjI4LCAweDJCQjQ1QTkyLCAweDVDQjM2QTA0LFxuICAgIDB4QzJEN0ZGQTcsIDB4QjVEMENGMzEsIDB4MkNEOTlFOEIsIDB4NUJERUFFMUQsXG4gICAgMHg5QjY0QzJCMCwgMHhFQzYzRjIyNiwgMHg3NTZBQTM5QywgMHgwMjZEOTMwQSxcbiAgICAweDlDMDkwNkE5LCAweEVCMEUzNjNGLCAweDcyMDc2Nzg1LCAweDA1MDA1NzEzLFxuICAgIDB4OTVCRjRBODIsIDB4RTJCODdBMTQsIDB4N0JCMTJCQUUsIDB4MENCNjFCMzgsXG4gICAgMHg5MkQyOEU5QiwgMHhFNUQ1QkUwRCwgMHg3Q0RDRUZCNywgMHgwQkRCREYyMSxcbiAgICAweDg2RDNEMkQ0LCAweEYxRDRFMjQyLCAweDY4RERCM0Y4LCAweDFGREE4MzZFLFxuICAgIDB4ODFCRTE2Q0QsIDB4RjZCOTI2NUIsIDB4NkZCMDc3RTEsIDB4MThCNzQ3NzcsXG4gICAgMHg4ODA4NUFFNiwgMHhGRjBGNkE3MCwgMHg2NjA2M0JDQSwgMHgxMTAxMEI1QyxcbiAgICAweDhGNjU5RUZGLCAweEY4NjJBRTY5LCAweDYxNkJGRkQzLCAweDE2NkNDRjQ1LFxuICAgIDB4QTAwQUUyNzgsIDB4RDcwREQyRUUsIDB4NEUwNDgzNTQsIDB4MzkwM0IzQzIsXG4gICAgMHhBNzY3MjY2MSwgMHhEMDYwMTZGNywgMHg0OTY5NDc0RCwgMHgzRTZFNzdEQixcbiAgICAweEFFRDE2QTRBLCAweEQ5RDY1QURDLCAweDQwREYwQjY2LCAweDM3RDgzQkYwLFxuICAgIDB4QTlCQ0FFNTMsIDB4REVCQjlFQzUsIDB4NDdCMkNGN0YsIDB4MzBCNUZGRTksXG4gICAgMHhCREJERjIxQywgMHhDQUJBQzI4QSwgMHg1M0IzOTMzMCwgMHgyNEI0QTNBNixcbiAgICAweEJBRDAzNjA1LCAweENERDcwNjkzLCAweDU0REU1NzI5LCAweDIzRDk2N0JGLFxuICAgIDB4QjM2NjdBMkUsIDB4QzQ2MTRBQjgsIDB4NUQ2ODFCMDIsIDB4MkE2RjJCOTQsXG4gICAgMHhCNDBCQkUzNywgMHhDMzBDOEVBMSwgMHg1QTA1REYxQiwgMHgyRDAyRUY4RCxcbl07XG52YXIgbG9va3VwVGFibGUgPSAoMCwgdXRpbF8xLnVpbnQzMkFycmF5RnJvbSkoYV9sb29rVXBUYWJsZSk7XG52YXIgYXdzX2NyYzMyXzEgPSByZXF1aXJlKFwiLi9hd3NfY3JjMzJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBd3NDcmMzMlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYXdzX2NyYzMyXzEuQXdzQ3JjMzI7IH0gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUl1TGk5emNtTXZhVzVrWlhndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQkxIbERRVUZwUkR0QlFVVnFSQ3hUUVVGblFpeExRVUZMTEVOQlFVTXNTVUZCWjBJN1NVRkRjRU1zVDBGQlR5eEpRVUZKTEV0QlFVc3NSVUZCUlN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXp0QlFVTXpReXhEUVVGRE8wRkJSa1FzYzBKQlJVTTdRVUZGUkR0SlFVRkJPMUZCUTFVc1lVRkJVU3hIUVVGSExGVkJRVlVzUTBGQlF6dEpRV05vUXl4RFFVRkRPMGxCV2tNc2MwSkJRVTBzUjBGQlRpeFZRVUZQTEVsQlFXZENPenM3V1VGRGNrSXNTMEZCYlVJc1NVRkJRU3hUUVVGQkxITkNRVUZCTEVsQlFVa3NRMEZCUVN3d1FrRkJRU3cwUTBGQlJUdG5Ra0ZCY0VJc1NVRkJUU3hKUVVGSkxHbENRVUZCTzJkQ1FVTmlMRWxCUVVrc1EwRkJReXhSUVVGUk8yOUNRVU5ZTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1MwRkJTeXhEUVVGRExFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUTNSRk96czdPenM3T3pzN1VVRkZSQ3hQUVVGUExFbEJRVWtzUTBGQlF6dEpRVU5rTEVOQlFVTTdTVUZGUkN4elFrRkJUU3hIUVVGT08xRkJRMFVzVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBsQlF6VkRMRU5CUVVNN1NVRkRTQ3haUVVGRE8wRkJRVVFzUTBGQlF5eEJRV1pFTEVsQlpVTTdRVUZtV1N4elFrRkJTenRCUVdsQ2JFSXNhMEpCUVd0Q08wRkJRMnhDTEVsQlFVMHNZVUZCWVN4SFFVRkhPMGxCUTNCQ0xGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRPVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWVHRKUVVNNVF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRemxETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRE9VTXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZUdEpRVU01UXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlF6bERMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZET1VNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlR0SlFVTTVReXhWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZPMGxCUXpsRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRPVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWVHRKUVVNNVF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRemxETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRE9VTXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZUdEpRVU01UXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlF6bERMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZET1VNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlR0SlFVTTVReXhWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZPMGxCUXpsRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRPVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWVHRKUVVNNVF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRemxETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRE9VTXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZUdEpRVU01UXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlF6bERMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZET1VNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlR0SlFVTTVReXhWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZPMGxCUXpsRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRPVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWVHRKUVVNNVF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRemxETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRE9VTXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZUdEpRVU01UXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlF6bERMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZET1VNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlR0SlFVTTVReXhWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZPMGxCUXpsRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRPVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWVHRKUVVNNVF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRemxETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRE9VTXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZUdEpRVU01UXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlF6bERMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZET1VNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlR0SlFVTTVReXhWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZPMGxCUXpsRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRPVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWVHRKUVVNNVF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRemxETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRE9VTXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZUdEpRVU01UXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlF6bERMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZET1VNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlR0SlFVTTVReXhWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZPMGxCUXpsRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRPVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWVHRKUVVNNVF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRemxETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRE9VTXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZUdEpRVU01UXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlF6bERMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZET1VNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlR0SlFVTTVReXhWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZPMGxCUXpsRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1EwRkRMME1zUTBGQlF6dEJRVU5HTEVsQlFVMHNWMEZCVnl4SFFVRm5RaXhKUVVGQkxITkNRVUZsTEVWQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVFN1FVRkRMMFFzZVVOQlFYVkRPMEZCUVRsQ0xIRkhRVUZCTEZGQlFWRXNUMEZCUVNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN2RXbHVkRE15UVhKeVlYbEdjbTl0ZlNCbWNtOXRJRndpUUdGM2N5MWpjbmx3ZEc4dmRYUnBiRndpTzF4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1kzSmpNeklvWkdGMFlUb2dWV2x1ZERoQmNuSmhlU2s2SUc1MWJXSmxjaUI3WEc0Z0lISmxkSFZ5YmlCdVpYY2dRM0pqTXpJb0tTNTFjR1JoZEdVb1pHRjBZU2t1WkdsblpYTjBLQ2s3WEc1OVhHNWNibVY0Y0c5eWRDQmpiR0Z6Y3lCRGNtTXpNaUI3WEc0Z0lIQnlhWFpoZEdVZ1kyaGxZMnR6ZFcwZ1BTQXdlR1ptWm1abVptWm1PMXh1WEc0Z0lIVndaR0YwWlNoa1lYUmhPaUJWYVc1ME9FRnljbUY1S1RvZ2RHaHBjeUI3WEc0Z0lDQWdabTl5SUNoamIyNXpkQ0JpZVhSbElHOW1JR1JoZEdFcElIdGNiaUFnSUNBZ0lIUm9hWE11WTJobFkydHpkVzBnUFZ4dUlDQWdJQ0FnSUNBb2RHaHBjeTVqYUdWamEzTjFiU0ErUGo0Z09Da2dYaUJzYjI5cmRYQlVZV0pzWlZzb2RHaHBjeTVqYUdWamEzTjFiU0JlSUdKNWRHVXBJQ1lnTUhobVpsMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0JrYVdkbGMzUW9LVG9nYm5WdFltVnlJSHRjYmlBZ0lDQnlaWFIxY200Z0tIUm9hWE11WTJobFkydHpkVzBnWGlBd2VHWm1abVptWm1abUtTQStQajRnTUR0Y2JpQWdmVnh1ZlZ4dVhHNHZMeUJ3Y21WMGRHbGxjaTFwWjI1dmNtVmNibU52Ym5OMElHRmZiRzl2YTFWd1ZHRmliR1VnUFNCYlhHNGdJREI0TURBd01EQXdNREFzSURCNE56Y3dOek13T1RZc0lEQjRSVVV3UlRZeE1rTXNJREI0T1Rrd09UVXhRa0VzWEc0Z0lEQjRNRGMyUkVNME1Ua3NJREI0TnpBMlFVWTBPRVlzSURCNFJUazJNMEUxTXpVc0lEQjRPVVUyTkRrMVFUTXNYRzRnSURCNE1FVkVRamc0TXpJc0lEQjROemxFUTBJNFFUUXNJREI0UlRCRU5VVTVNVVVzSURCNE9UZEVNa1E1T0Rnc1hHNGdJREI0TURsQ05qUkRNa0lzSURCNE4wVkNNVGREUWtRc0lEQjRSVGRDT0RKRU1EY3NJREI0T1RCQ1JqRkVPVEVzWEc0Z0lEQjRNVVJDTnpFd05qUXNJREI0TmtGQ01ESXdSaklzSURCNFJqTkNPVGN4TkRnc0lEQjRPRFJDUlRReFJFVXNYRzRnSURCNE1VRkVRVVEwTjBRc0lEQjROa1JFUkVVMFJVSXNJREI0UmpSRU5FSTFOVEVzSURCNE9ETkVNemcxUXpjc1hHNGdJREI0TVRNMlF6azROVFlzSURCNE5qUTJRa0U0UXpBc0lEQjRSa1EyTWtZNU4wRXNJREI0T0VFMk5VTTVSVU1zWEc0Z0lEQjRNVFF3TVRWRE5FWXNJREI0TmpNd05qWkRSRGtzSURCNFJrRXdSak5FTmpNc0lEQjRPRVF3T0RCRVJqVXNYRzRnSURCNE0wSTJSVEl3UXpnc0lEQjRORU0yT1RFd05VVXNJREI0UkRVMk1EUXhSVFFzSURCNFFUSTJOemN4TnpJc1hHNGdJREI0TTBNd00wVTBSREVzSURCNE5FSXdORVEwTkRjc0lEQjRSREl3UkRnMVJrUXNJREI0UVRVd1FVSTFOa0lzWEc0Z0lEQjRNelZDTlVFNFJrRXNJREI0TkRKQ01qazROa01zSURCNFJFSkNRa001UkRZc0lEQjRRVU5DUTBZNU5EQXNYRzRnSURCNE16SkVPRFpEUlRNc0lEQjRORFZFUmpWRE56VXNJREI0UkVORU5qQkVRMFlzSURCNFFVSkVNVE5FTlRrc1hHNGdJREI0TWpaRU9UTXdRVU1zSURCNE5URkVSVEF3TTBFc0lEQjRRemhFTnpVeE9EQXNJREI0UWtaRU1EWXhNVFlzWEc0Z0lEQjRNakZDTkVZMFFqVXNJREI0TlRaQ00wTTBNak1zSURCNFEwWkNRVGsxT1Rrc0lEQjRRamhDUkVFMU1FWXNYRzRnSURCNE1qZ3dNa0k0T1VVc0lEQjROVVl3TlRnNE1EZ3NJREI0UXpZd1EwUTVRaklzSURCNFFqRXdRa1U1TWpRc1hHNGdJREI0TWtZMlJqZERPRGNzSURCNE5UZzJPRFJETVRFc0lEQjRRekUyTVRGRVFVSXNJREI0UWpZMk5qSkVNMFFzWEc0Z0lEQjROelpFUXpReE9UQXNJREI0TURGRVFqY3hNRFlzSURCNE9UaEVNakl3UWtNc0lEQjRSVVpFTlRFd01rRXNYRzRnSURCNE56RkNNVGcxT0Rrc0lEQjRNRFpDTmtJMU1VWXNJREI0T1VaQ1JrVTBRVFVzSURCNFJUaENPRVEwTXpNc1hHNGdJREI0Tnpnd04wTTVRVElzSURCNE1FWXdNRVk1TXpRc0lEQjRPVFl3T1VFNE9FVXNJREI0UlRFd1JUazRNVGdzWEc0Z0lEQjROMFkyUVRCRVFrSXNJREI0TURnMlJETkVNa1FzSURCNE9URTJORFpET1Rjc0lEQjRSVFkyTXpWRE1ERXNYRzRnSURCNE5rSTJRalV4UmpRc0lEQjRNVU0yUXpZeE5qSXNJREI0T0RVMk5UTXdSRGdzSURCNFJqSTJNakF3TkVVc1hHNGdJREI0TmtNd05qazFSVVFzSURCNE1VSXdNVUUxTjBJc0lEQjRPREl3T0VZMFF6RXNJREI0UmpVd1JrTTBOVGNzWEc0Z0lEQjROalZDTUVRNVF6WXNJREI0TVRKQ04wVTVOVEFzSURCNE9FSkNSVUk0UlVFc0lEQjRSa05DT1RnNE4wTXNYRzRnSURCNE5qSkVSREZFUkVZc0lEQjRNVFZFUVRKRU5Ea3NJREI0T0VORU16ZERSak1zSURCNFJrSkVORFJETmpVc1hHNGdJREI0TkVSQ01qWXhOVGdzSURCNE0wRkNOVFV4UTBVc0lEQjRRVE5DUXpBd056UXNJREI0UkRSQ1FqTXdSVElzWEc0Z0lEQjRORUZFUmtFMU5ERXNJREI0TTBSRU9EazFSRGNzSURCNFFUUkVNVU0wTmtRc0lEQjRSRE5FTmtZMFJrSXNYRzRnSURCNE5ETTJPVVU1TmtFc0lEQjRNelEyUlVRNVJrTXNJREI0UVVRMk56ZzRORFlzSURCNFJFRTJNRUk0UkRBc1hHNGdJREI0TkRRd05ESkVOek1zSURCNE16TXdNekZFUlRVc0lEQjRRVUV3UVRSRE5VWXNJREI0UkVRd1JEZERRemtzWEc0Z0lEQjROVEF3TlRjeE0wTXNJREI0TWpjd01qUXhRVUVzSURCNFFrVXdRakV3TVRBc0lEQjRRemt3UXpJd09EWXNYRzRnSURCNE5UYzJPRUkxTWpVc0lEQjRNakEyUmpnMVFqTXNJREI0UWprMk5rUTBNRGtzSURCNFEwVTJNVVUwT1VZc1hHNGdJREI0TlVWRVJVWTVNRVVzSURCNE1qbEVPVU01T1Rnc0lEQjRRakJFTURrNE1qSXNJREI0UXpkRU4wRTRRalFzWEc0Z0lEQjROVGxDTXpORU1UY3NJREI0TWtWQ05EQkVPREVzSURCNFFqZENSRFZETTBJc0lEQjRRekJDUVRaRFFVUXNYRzRnSURCNFJVUkNPRGd6TWpBc0lEQjRPVUZDUmtJelFqWXNJREI0TUROQ05rVXlNRU1zSURCNE56UkNNVVF5T1VFc1hHNGdJREI0UlVGRU5UUTNNemtzSURCNE9VUkVNamMzUVVZc0lEQjRNRFJFUWpJMk1UVXNJREI0TnpORVF6RTJPRE1zWEc0Z0lEQjRSVE0yTXpCQ01USXNJREI0T1RRMk5ETkNPRFFzSURCNE1FUTJSRFpCTTBVc0lEQjROMEUyUVRWQlFUZ3NYRzRnSURCNFJUUXdSVU5HTUVJc0lEQjRPVE13T1VaR09VUXNJREI0TUVFd01FRkZNamNzSURCNE4wUXdOemxGUWpFc1hHNGdJREI0UmpBd1Jqa3pORFFzSURCNE9EY3dPRUV6UkRJc0lEQjRNVVV3TVVZeU5qZ3NJREI0Tmprd05rTXlSa1VzWEc0Z0lEQjRSamMyTWpVM05VUXNJREI0T0RBMk5UWTNRMElzSURCNE1UazJRek0yTnpFc0lEQjROa1UyUWpBMlJUY3NYRzRnSURCNFJrVkVOREZDTnpZc0lEQjRPRGxFTXpKQ1JUQXNJREI0TVRCRVFUZEJOVUVzSURCNE5qZEVSRFJCUTBNc1hHNGdJREI0UmpsQ09VUkdOa1lzSURCNE9FVkNSVVZHUmprc0lEQjRNVGRDTjBKRk5ETXNJREI0TmpCQ01EaEZSRFVzWEc0Z0lEQjRSRFpFTmtFelJUZ3NJREI0UVRGRU1Ua3pOMFVzSURCNE16aEVPRU15UXpRc0lEQjRORVpFUmtZeU5USXNYRzRnSURCNFJERkNRalkzUmpFc0lEQjRRVFpDUXpVM05qY3NJREI0TTBaQ05UQTJSRVFzSURCNE5EaENNak0yTkVJc1hHNGdJREI0UkRnd1JESkNSRUVzSURCNFFVWXdRVEZDTkVNc0lEQjRNell3TXpSQlJqWXNJREI0TkRFd05EZEJOakFzWEc0Z0lEQjRSRVkyTUVWR1F6TXNJREI0UVRnMk4wUkdOVFVzSURCNE16RTJSVGhGUlVZc0lEQjRORFkyT1VKRk56a3NYRzRnSURCNFEwSTJNVUl6T0VNc0lEQjRRa00yTmpnek1VRXNJREI0TWpVMlJrUXlRVEFzSURCNE5USTJPRVV5TXpZc1hHNGdJREI0UTBNd1F6YzNPVFVzSURCNFFrSXdRalEzTURNc0lEQjRNakl3TWpFMlFqa3NJREI0TlRVd05USTJNa1lzWEc0Z0lEQjRRelZDUVROQ1FrVXNJREI0UWpKQ1JEQkNNamdzSURCNE1rSkNORFZCT1RJc0lEQjROVU5DTXpaQk1EUXNYRzRnSURCNFF6SkVOMFpHUVRjc0lEQjRRalZFTUVOR016RXNJREI0TWtORU9UbEZPRUlzSURCNE5VSkVSVUZGTVVRc1hHNGdJREI0T1VJMk5FTXlRakFzSURCNFJVTTJNMFl5TWpZc0lEQjROelUyUVVFek9VTXNJREI0TURJMlJEa3pNRUVzWEc0Z0lEQjRPVU13T1RBMlFUa3NJREI0UlVJd1JUTTJNMFlzSURCNE56SXdOelkzT0RVc0lEQjRNRFV3TURVM01UTXNYRzRnSURCNE9UVkNSalJCT0RJc0lEQjRSVEpDT0RkQk1UUXNJREI0TjBKQ01USkNRVVVzSURCNE1FTkNOakZDTXpnc1hHNGdJREI0T1RKRU1qaEZPVUlzSURCNFJUVkVOVUpGTUVRc0lEQjROME5FUTBWR1FqY3NJREI0TUVKRVFrUkdNakVzWEc0Z0lEQjRPRFpFTTBReVJEUXNJREI0UmpGRU5FVXlORElzSURCNE5qaEVSRUl6Umpnc0lEQjRNVVpFUVRnek5rVXNYRzRnSURCNE9ERkNSVEUyUTBRc0lEQjRSalpDT1RJMk5VSXNJREI0TmtaQ01EYzNSVEVzSURCNE1UaENOelEzTnpjc1hHNGdJREI0T0Rnd09EVkJSVFlzSURCNFJrWXdSalpCTnpBc0lEQjROall3TmpOQ1EwRXNJREI0TVRFd01UQkNOVU1zWEc0Z0lEQjRPRVkyTlRsRlJrWXNJREI0UmpnMk1rRkZOamtzSURCNE5qRTJRa1pHUkRNc0lEQjRNVFkyUTBOR05EVXNYRzRnSURCNFFUQXdRVVV5Tnpnc0lEQjRSRGN3UkVReVJVVXNJREI0TkVVd05EZ3pOVFFzSURCNE16a3dNMEl6UXpJc1hHNGdJREI0UVRjMk56STJOakVzSURCNFJEQTJNREUyUmpjc0lEQjRORGsyT1RRM05FUXNJREI0TTBVMlJUYzNSRUlzWEc0Z0lEQjRRVVZFTVRaQk5FRXNJREI0UkRsRU5qVkJSRU1zSURCNE5EQkVSakJDTmpZc0lEQjRNemRFT0ROQ1JqQXNYRzRnSURCNFFUbENRMEZGTlRNc0lEQjRSRVZDUWpsRlF6VXNJREI0TkRkQ01rTkdOMFlzSURCNE16QkNOVVpHUlRrc1hHNGdJREI0UWtSQ1JFWXlNVU1zSURCNFEwRkNRVU15T0VFc0lEQjROVE5DTXprek16QXNJREI0TWpSQ05FRXpRVFlzWEc0Z0lEQjRRa0ZFTURNMk1EVXNJREI0UTBSRU56QTJPVE1zSURCNE5UUkVSVFUzTWprc0lEQjRNak5FT1RZM1FrWXNYRzRnSURCNFFqTTJOamRCTWtVc0lEQjRRelEyTVRSQlFqZ3NJREI0TlVRMk9ERkNNRElzSURCNE1rRTJSakpDT1RRc1hHNGdJREI0UWpRd1FrSkZNemNzSURCNFF6TXdRemhGUVRFc0lEQjROVUV3TlVSR01VSXNJREI0TWtRd01rVkdPRVFzWEc1ZE8xeHVZMjl1YzNRZ2JHOXZhM1Z3VkdGaWJHVTZJRlZwYm5Rek1rRnljbUY1SUQwZ2RXbHVkRE15UVhKeVlYbEdjbTl0S0dGZmJHOXZhMVZ3VkdGaWJHVXBYRzVsZUhCdmNuUWdleUJCZDNORGNtTXpNaUI5SUdaeWIyMGdYQ0l1TDJGM2MxOWpjbU16TWx3aU8xeHVJbDE5IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29udmVydFRvQnVmZmVyID0gdm9pZCAwO1xudmFyIHV0aWxfdXRmOF9icm93c2VyXzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvdXRpbC11dGY4LWJyb3dzZXJcIik7XG4vLyBRdWljayBwb2x5ZmlsbFxudmFyIGZyb21VdGY4ID0gdHlwZW9mIEJ1ZmZlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBCdWZmZXIuZnJvbVxuICAgID8gZnVuY3Rpb24gKGlucHV0KSB7IHJldHVybiBCdWZmZXIuZnJvbShpbnB1dCwgXCJ1dGY4XCIpOyB9XG4gICAgOiB1dGlsX3V0ZjhfYnJvd3Nlcl8xLmZyb21VdGY4O1xuZnVuY3Rpb24gY29udmVydFRvQnVmZmVyKGRhdGEpIHtcbiAgICAvLyBBbHJlYWR5IGEgVWludDgsIGRvIG5vdGhpbmdcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZnJvbVV0ZjgoZGF0YSk7XG4gICAgfVxuICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCAvIFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG59XG5leHBvcnRzLmNvbnZlcnRUb0J1ZmZlciA9IGNvbnZlcnRUb0J1ZmZlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnZlcnRUb0J1ZmZlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51aW50MzJBcnJheUZyb20gPSBleHBvcnRzLm51bVRvVWludDggPSBleHBvcnRzLmlzRW1wdHlEYXRhID0gZXhwb3J0cy5jb252ZXJ0VG9CdWZmZXIgPSB2b2lkIDA7XG52YXIgY29udmVydFRvQnVmZmVyXzEgPSByZXF1aXJlKFwiLi9jb252ZXJ0VG9CdWZmZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjb252ZXJ0VG9CdWZmZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnZlcnRUb0J1ZmZlcl8xLmNvbnZlcnRUb0J1ZmZlcjsgfSB9KTtcbnZhciBpc0VtcHR5RGF0YV8xID0gcmVxdWlyZShcIi4vaXNFbXB0eURhdGFcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0VtcHR5RGF0YVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNFbXB0eURhdGFfMS5pc0VtcHR5RGF0YTsgfSB9KTtcbnZhciBudW1Ub1VpbnQ4XzEgPSByZXF1aXJlKFwiLi9udW1Ub1VpbnQ4XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibnVtVG9VaW50OFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVtVG9VaW50OF8xLm51bVRvVWludDg7IH0gfSk7XG52YXIgdWludDMyQXJyYXlGcm9tXzEgPSByZXF1aXJlKFwiLi91aW50MzJBcnJheUZyb21cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1aW50MzJBcnJheUZyb21cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVpbnQzMkFycmF5RnJvbV8xLnVpbnQzMkFycmF5RnJvbTsgfSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzRW1wdHlEYXRhID0gdm9pZCAwO1xuZnVuY3Rpb24gaXNFbXB0eURhdGEoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLmJ5dGVMZW5ndGggPT09IDA7XG59XG5leHBvcnRzLmlzRW1wdHlEYXRhID0gaXNFbXB0eURhdGE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0VtcHR5RGF0YS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5udW1Ub1VpbnQ4ID0gdm9pZCAwO1xuZnVuY3Rpb24gbnVtVG9VaW50OChudW0pIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAobnVtICYgMHhmZjAwMDAwMCkgPj4gMjQsXG4gICAgICAgIChudW0gJiAweDAwZmYwMDAwKSA+PiAxNixcbiAgICAgICAgKG51bSAmIDB4MDAwMGZmMDApID4+IDgsXG4gICAgICAgIG51bSAmIDB4MDAwMDAwZmYsXG4gICAgXSk7XG59XG5leHBvcnRzLm51bVRvVWludDggPSBudW1Ub1VpbnQ4O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bnVtVG9VaW50OC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51aW50MzJBcnJheUZyb20gPSB2b2lkIDA7XG4vLyBJRSAxMSBkb2VzIG5vdCBzdXBwb3J0IEFycmF5LmZyb20sIHNvIHdlIGRvIGl0IG1hbnVhbGx5XG5mdW5jdGlvbiB1aW50MzJBcnJheUZyb20oYV9sb29rVXBUYWJsZSkge1xuICAgIGlmICghVWludDMyQXJyYXkuZnJvbSkge1xuICAgICAgICB2YXIgcmV0dXJuX2FycmF5ID0gbmV3IFVpbnQzMkFycmF5KGFfbG9va1VwVGFibGUubGVuZ3RoKTtcbiAgICAgICAgdmFyIGFfaW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoYV9pbmRleCA8IGFfbG9va1VwVGFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm5fYXJyYXlbYV9pbmRleF0gPSBhX2xvb2tVcFRhYmxlW2FfaW5kZXhdO1xuICAgICAgICAgICAgYV9pbmRleCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5fYXJyYXk7XG4gICAgfVxuICAgIHJldHVybiBVaW50MzJBcnJheS5mcm9tKGFfbG9va1VwVGFibGUpO1xufVxuZXhwb3J0cy51aW50MzJBcnJheUZyb20gPSB1aW50MzJBcnJheUZyb207XG4vLyMgc291cmNlTWFwcGluZ1VSTD11aW50MzJBcnJheUZyb20uanMubWFwIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQkxPQ0tfU0laRSwgRElHRVNUX0xFTkdUSCwgSU5JVCwgS0VZLCBNQVhfSEFTSEFCTEVfTEVOR1RIIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgUmF3U2hhMjU2ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJhd1NoYTI1NigpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEludDMyQXJyYXkuZnJvbShJTklUKTtcbiAgICAgICAgdGhpcy50ZW1wID0gbmV3IEludDMyQXJyYXkoNjQpO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KDY0KTtcbiAgICAgICAgdGhpcy5idWZmZXJMZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmJ5dGVzSGFzaGVkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBSYXdTaGEyNTYucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbmlzaGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRlbXB0ZWQgdG8gdXBkYXRlIGFuIGFscmVhZHkgZmluaXNoZWQgaGFzaC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvc2l0aW9uID0gMDtcbiAgICAgICAgdmFyIGJ5dGVMZW5ndGggPSBkYXRhLmJ5dGVMZW5ndGg7XG4gICAgICAgIHRoaXMuYnl0ZXNIYXNoZWQgKz0gYnl0ZUxlbmd0aDtcbiAgICAgICAgaWYgKHRoaXMuYnl0ZXNIYXNoZWQgKiA4ID4gTUFYX0hBU0hBQkxFX0xFTkdUSCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGhhc2ggbW9yZSB0aGFuIDJeNTMgLSAxIGJpdHNcIik7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlclt0aGlzLmJ1ZmZlckxlbmd0aCsrXSA9IGRhdGFbcG9zaXRpb24rK107XG4gICAgICAgICAgICBieXRlTGVuZ3RoLS07XG4gICAgICAgICAgICBpZiAodGhpcy5idWZmZXJMZW5ndGggPT09IEJMT0NLX1NJWkUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc2hCdWZmZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlckxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJhd1NoYTI1Ni5wcm90b3R5cGUuZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmluaXNoZWQpIHtcbiAgICAgICAgICAgIHZhciBiaXRzSGFzaGVkID0gdGhpcy5ieXRlc0hhc2hlZCAqIDg7XG4gICAgICAgICAgICB2YXIgYnVmZmVyVmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLmJ1ZmZlci5idWZmZXIsIHRoaXMuYnVmZmVyLmJ5dGVPZmZzZXQsIHRoaXMuYnVmZmVyLmJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgdmFyIHVuZGVjb3JhdGVkTGVuZ3RoID0gdGhpcy5idWZmZXJMZW5ndGg7XG4gICAgICAgICAgICBidWZmZXJWaWV3LnNldFVpbnQ4KHRoaXMuYnVmZmVyTGVuZ3RoKyssIDB4ODApO1xuICAgICAgICAgICAgLy8gRW5zdXJlIHRoZSBmaW5hbCBibG9jayBoYXMgZW5vdWdoIHJvb20gZm9yIHRoZSBoYXNoZWQgbGVuZ3RoXG4gICAgICAgICAgICBpZiAodW5kZWNvcmF0ZWRMZW5ndGggJSBCTE9DS19TSVpFID49IEJMT0NLX1NJWkUgLSA4KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuYnVmZmVyTGVuZ3RoOyBpIDwgQkxPQ0tfU0laRTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlclZpZXcuc2V0VWludDgoaSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaGFzaEJ1ZmZlcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmJ1ZmZlckxlbmd0aDsgaSA8IEJMT0NLX1NJWkUgLSA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZmZXJWaWV3LnNldFVpbnQ4KGksIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnVmZmVyVmlldy5zZXRVaW50MzIoQkxPQ0tfU0laRSAtIDgsIE1hdGguZmxvb3IoYml0c0hhc2hlZCAvIDB4MTAwMDAwMDAwKSwgdHJ1ZSk7XG4gICAgICAgICAgICBidWZmZXJWaWV3LnNldFVpbnQzMihCTE9DS19TSVpFIC0gNCwgYml0c0hhc2hlZCk7XG4gICAgICAgICAgICB0aGlzLmhhc2hCdWZmZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRoZSB2YWx1ZSBpbiBzdGF0ZSBpcyBsaXR0bGUtZW5kaWFuIHJhdGhlciB0aGFuIGJpZy1lbmRpYW4sIHNvIGZsaXBcbiAgICAgICAgLy8gZWFjaCB3b3JkIGludG8gYSBuZXcgVWludDhBcnJheVxuICAgICAgICB2YXIgb3V0ID0gbmV3IFVpbnQ4QXJyYXkoRElHRVNUX0xFTkdUSCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICBvdXRbaSAqIDRdID0gKHRoaXMuc3RhdGVbaV0gPj4+IDI0KSAmIDB4ZmY7XG4gICAgICAgICAgICBvdXRbaSAqIDQgKyAxXSA9ICh0aGlzLnN0YXRlW2ldID4+PiAxNikgJiAweGZmO1xuICAgICAgICAgICAgb3V0W2kgKiA0ICsgMl0gPSAodGhpcy5zdGF0ZVtpXSA+Pj4gOCkgJiAweGZmO1xuICAgICAgICAgICAgb3V0W2kgKiA0ICsgM10gPSAodGhpcy5zdGF0ZVtpXSA+Pj4gMCkgJiAweGZmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcbiAgICBSYXdTaGEyNTYucHJvdG90eXBlLmhhc2hCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMsIGJ1ZmZlciA9IF9hLmJ1ZmZlciwgc3RhdGUgPSBfYS5zdGF0ZTtcbiAgICAgICAgdmFyIHN0YXRlMCA9IHN0YXRlWzBdLCBzdGF0ZTEgPSBzdGF0ZVsxXSwgc3RhdGUyID0gc3RhdGVbMl0sIHN0YXRlMyA9IHN0YXRlWzNdLCBzdGF0ZTQgPSBzdGF0ZVs0XSwgc3RhdGU1ID0gc3RhdGVbNV0sIHN0YXRlNiA9IHN0YXRlWzZdLCBzdGF0ZTcgPSBzdGF0ZVs3XTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBCTE9DS19TSVpFOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgMTYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBbaV0gPVxuICAgICAgICAgICAgICAgICAgICAoKGJ1ZmZlcltpICogNF0gJiAweGZmKSA8PCAyNCkgfFxuICAgICAgICAgICAgICAgICAgICAgICAgKChidWZmZXJbaSAqIDQgKyAxXSAmIDB4ZmYpIDw8IDE2KSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAoKGJ1ZmZlcltpICogNCArIDJdICYgMHhmZikgPDwgOCkgfFxuICAgICAgICAgICAgICAgICAgICAgICAgKGJ1ZmZlcltpICogNCArIDNdICYgMHhmZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdSA9IHRoaXMudGVtcFtpIC0gMl07XG4gICAgICAgICAgICAgICAgdmFyIHQxXzEgPSAoKHUgPj4+IDE3KSB8ICh1IDw8IDE1KSkgXiAoKHUgPj4+IDE5KSB8ICh1IDw8IDEzKSkgXiAodSA+Pj4gMTApO1xuICAgICAgICAgICAgICAgIHUgPSB0aGlzLnRlbXBbaSAtIDE1XTtcbiAgICAgICAgICAgICAgICB2YXIgdDJfMSA9ICgodSA+Pj4gNykgfCAodSA8PCAyNSkpIF4gKCh1ID4+PiAxOCkgfCAodSA8PCAxNCkpIF4gKHUgPj4+IDMpO1xuICAgICAgICAgICAgICAgIHRoaXMudGVtcFtpXSA9XG4gICAgICAgICAgICAgICAgICAgICgodDFfMSArIHRoaXMudGVtcFtpIC0gN10pIHwgMCkgKyAoKHQyXzEgKyB0aGlzLnRlbXBbaSAtIDE2XSkgfCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0MSA9ICgoKCgoKHN0YXRlNCA+Pj4gNikgfCAoc3RhdGU0IDw8IDI2KSkgXlxuICAgICAgICAgICAgICAgICgoc3RhdGU0ID4+PiAxMSkgfCAoc3RhdGU0IDw8IDIxKSkgXlxuICAgICAgICAgICAgICAgICgoc3RhdGU0ID4+PiAyNSkgfCAoc3RhdGU0IDw8IDcpKSkgK1xuICAgICAgICAgICAgICAgICgoc3RhdGU0ICYgc3RhdGU1KSBeICh+c3RhdGU0ICYgc3RhdGU2KSkpIHxcbiAgICAgICAgICAgICAgICAwKSArXG4gICAgICAgICAgICAgICAgKChzdGF0ZTcgKyAoKEtFWVtpXSArIHRoaXMudGVtcFtpXSkgfCAwKSkgfCAwKSkgfFxuICAgICAgICAgICAgICAgIDA7XG4gICAgICAgICAgICB2YXIgdDIgPSAoKCgoc3RhdGUwID4+PiAyKSB8IChzdGF0ZTAgPDwgMzApKSBeXG4gICAgICAgICAgICAgICAgKChzdGF0ZTAgPj4+IDEzKSB8IChzdGF0ZTAgPDwgMTkpKSBeXG4gICAgICAgICAgICAgICAgKChzdGF0ZTAgPj4+IDIyKSB8IChzdGF0ZTAgPDwgMTApKSkgK1xuICAgICAgICAgICAgICAgICgoc3RhdGUwICYgc3RhdGUxKSBeIChzdGF0ZTAgJiBzdGF0ZTIpIF4gKHN0YXRlMSAmIHN0YXRlMikpKSB8XG4gICAgICAgICAgICAgICAgMDtcbiAgICAgICAgICAgIHN0YXRlNyA9IHN0YXRlNjtcbiAgICAgICAgICAgIHN0YXRlNiA9IHN0YXRlNTtcbiAgICAgICAgICAgIHN0YXRlNSA9IHN0YXRlNDtcbiAgICAgICAgICAgIHN0YXRlNCA9IChzdGF0ZTMgKyB0MSkgfCAwO1xuICAgICAgICAgICAgc3RhdGUzID0gc3RhdGUyO1xuICAgICAgICAgICAgc3RhdGUyID0gc3RhdGUxO1xuICAgICAgICAgICAgc3RhdGUxID0gc3RhdGUwO1xuICAgICAgICAgICAgc3RhdGUwID0gKHQxICsgdDIpIHwgMDtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZVswXSArPSBzdGF0ZTA7XG4gICAgICAgIHN0YXRlWzFdICs9IHN0YXRlMTtcbiAgICAgICAgc3RhdGVbMl0gKz0gc3RhdGUyO1xuICAgICAgICBzdGF0ZVszXSArPSBzdGF0ZTM7XG4gICAgICAgIHN0YXRlWzRdICs9IHN0YXRlNDtcbiAgICAgICAgc3RhdGVbNV0gKz0gc3RhdGU1O1xuICAgICAgICBzdGF0ZVs2XSArPSBzdGF0ZTY7XG4gICAgICAgIHN0YXRlWzddICs9IHN0YXRlNztcbiAgICB9O1xuICAgIHJldHVybiBSYXdTaGEyNTY7XG59KCkpO1xuZXhwb3J0IHsgUmF3U2hhMjU2IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1SYXdTaGEyNTYuanMubWFwIiwiLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IHZhciBCTE9DS19TSVpFID0gNjQ7XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgdmFyIERJR0VTVF9MRU5HVEggPSAzMjtcbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCB2YXIgS0VZID0gbmV3IFVpbnQzMkFycmF5KFtcbiAgICAweDQyOGEyZjk4LFxuICAgIDB4NzEzNzQ0OTEsXG4gICAgMHhiNWMwZmJjZixcbiAgICAweGU5YjVkYmE1LFxuICAgIDB4Mzk1NmMyNWIsXG4gICAgMHg1OWYxMTFmMSxcbiAgICAweDkyM2Y4MmE0LFxuICAgIDB4YWIxYzVlZDUsXG4gICAgMHhkODA3YWE5OCxcbiAgICAweDEyODM1YjAxLFxuICAgIDB4MjQzMTg1YmUsXG4gICAgMHg1NTBjN2RjMyxcbiAgICAweDcyYmU1ZDc0LFxuICAgIDB4ODBkZWIxZmUsXG4gICAgMHg5YmRjMDZhNyxcbiAgICAweGMxOWJmMTc0LFxuICAgIDB4ZTQ5YjY5YzEsXG4gICAgMHhlZmJlNDc4NixcbiAgICAweDBmYzE5ZGM2LFxuICAgIDB4MjQwY2ExY2MsXG4gICAgMHgyZGU5MmM2ZixcbiAgICAweDRhNzQ4NGFhLFxuICAgIDB4NWNiMGE5ZGMsXG4gICAgMHg3NmY5ODhkYSxcbiAgICAweDk4M2U1MTUyLFxuICAgIDB4YTgzMWM2NmQsXG4gICAgMHhiMDAzMjdjOCxcbiAgICAweGJmNTk3ZmM3LFxuICAgIDB4YzZlMDBiZjMsXG4gICAgMHhkNWE3OTE0NyxcbiAgICAweDA2Y2E2MzUxLFxuICAgIDB4MTQyOTI5NjcsXG4gICAgMHgyN2I3MGE4NSxcbiAgICAweDJlMWIyMTM4LFxuICAgIDB4NGQyYzZkZmMsXG4gICAgMHg1MzM4MGQxMyxcbiAgICAweDY1MGE3MzU0LFxuICAgIDB4NzY2YTBhYmIsXG4gICAgMHg4MWMyYzkyZSxcbiAgICAweDkyNzIyYzg1LFxuICAgIDB4YTJiZmU4YTEsXG4gICAgMHhhODFhNjY0YixcbiAgICAweGMyNGI4YjcwLFxuICAgIDB4Yzc2YzUxYTMsXG4gICAgMHhkMTkyZTgxOSxcbiAgICAweGQ2OTkwNjI0LFxuICAgIDB4ZjQwZTM1ODUsXG4gICAgMHgxMDZhYTA3MCxcbiAgICAweDE5YTRjMTE2LFxuICAgIDB4MWUzNzZjMDgsXG4gICAgMHgyNzQ4Nzc0YyxcbiAgICAweDM0YjBiY2I1LFxuICAgIDB4MzkxYzBjYjMsXG4gICAgMHg0ZWQ4YWE0YSxcbiAgICAweDViOWNjYTRmLFxuICAgIDB4NjgyZTZmZjMsXG4gICAgMHg3NDhmODJlZSxcbiAgICAweDc4YTU2MzZmLFxuICAgIDB4ODRjODc4MTQsXG4gICAgMHg4Y2M3MDIwOCxcbiAgICAweDkwYmVmZmZhLFxuICAgIDB4YTQ1MDZjZWIsXG4gICAgMHhiZWY5YTNmNyxcbiAgICAweGM2NzE3OGYyXG5dKTtcbi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCB2YXIgSU5JVCA9IFtcbiAgICAweDZhMDllNjY3LFxuICAgIDB4YmI2N2FlODUsXG4gICAgMHgzYzZlZjM3MixcbiAgICAweGE1NGZmNTNhLFxuICAgIDB4NTEwZTUyN2YsXG4gICAgMHg5YjA1Njg4YyxcbiAgICAweDFmODNkOWFiLFxuICAgIDB4NWJlMGNkMTlcbl07XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgdmFyIE1BWF9IQVNIQUJMRV9MRU5HVEggPSBNYXRoLnBvdygyLCA1MykgLSAxO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gXCIuL2pzU2hhMjU2XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBCTE9DS19TSVpFIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSYXdTaGEyNTYgfSBmcm9tIFwiLi9SYXdTaGEyNTZcIjtcbmltcG9ydCB7IGlzRW1wdHlEYXRhLCBjb252ZXJ0VG9CdWZmZXIgfSBmcm9tIFwiQGF3cy1jcnlwdG8vdXRpbFwiO1xudmFyIFNoYTI1NiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTaGEyNTYoc2VjcmV0KSB7XG4gICAgICAgIHRoaXMuc2VjcmV0ID0gc2VjcmV0O1xuICAgICAgICB0aGlzLmhhc2ggPSBuZXcgUmF3U2hhMjU2KCk7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gICAgU2hhMjU2LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAodG9IYXNoKSB7XG4gICAgICAgIGlmIChpc0VtcHR5RGF0YSh0b0hhc2gpIHx8IHRoaXMuZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5oYXNoLnVwZGF0ZShjb252ZXJ0VG9CdWZmZXIodG9IYXNoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiBUaGlzIHN5bmNocm9ub3VzIG1ldGhvZCBrZWVwcyBjb21wYXRpYmlsaXR5XG4gICAgICogd2l0aCB0aGUgdjIgYXdzLXNkay5cbiAgICAgKi9cbiAgICBTaGEyNTYucHJvdG90eXBlLmRpZ2VzdFN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyB0aGlzLmVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm91dGVyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMub3V0ZXIuZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyLnVwZGF0ZSh0aGlzLmhhc2guZGlnZXN0KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3V0ZXIuZGlnZXN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzaC5kaWdlc3QoKTtcbiAgICB9O1xuICAgIC8qIFRoZSB1bmRlcmx5aW5nIGRpZ2VzdCBtZXRob2QgaGVyZSBpcyBzeW5jaHJvbm91cy5cbiAgICAgKiBUbyBrZWVwIHRoZSBzYW1lIGludGVyZmFjZSB3aXRoIHRoZSBvdGhlciBoYXNoIGZ1bmN0aW9uc1xuICAgICAqIHRoZSBkZWZhdWx0IGlzIHRvIGV4cG9zZSB0aGlzIGFzIGFuIGFzeW5jIG1ldGhvZC5cbiAgICAgKiBIb3dldmVyLCBpdCBjYW4gc29tZXRpbWVzIGJlIHVzZWZ1bCB0byBoYXZlIGEgc3luYyBtZXRob2QuXG4gICAgICovXG4gICAgU2hhMjU2LnByb3RvdHlwZS5kaWdlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5kaWdlc3RTeW5jKCldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgU2hhMjU2LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oYXNoID0gbmV3IFJhd1NoYTI1NigpO1xuICAgICAgICBpZiAodGhpcy5zZWNyZXQpIHtcbiAgICAgICAgICAgIHRoaXMub3V0ZXIgPSBuZXcgUmF3U2hhMjU2KCk7XG4gICAgICAgICAgICB2YXIgaW5uZXIgPSBidWZmZXJGcm9tU2VjcmV0KHRoaXMuc2VjcmV0KTtcbiAgICAgICAgICAgIHZhciBvdXRlciA9IG5ldyBVaW50OEFycmF5KEJMT0NLX1NJWkUpO1xuICAgICAgICAgICAgb3V0ZXIuc2V0KGlubmVyKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQkxPQ0tfU0laRTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW5uZXJbaV0gXj0gMHgzNjtcbiAgICAgICAgICAgICAgICBvdXRlcltpXSBePSAweDVjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oYXNoLnVwZGF0ZShpbm5lcik7XG4gICAgICAgICAgICB0aGlzLm91dGVyLnVwZGF0ZShvdXRlcik7XG4gICAgICAgICAgICAvLyBvdmVyd3JpdGUgdGhlIGNvcGllZCBrZXkgaW4gbWVtb3J5XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlubmVyLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlubmVyW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFNoYTI1Njtcbn0oKSk7XG5leHBvcnQgeyBTaGEyNTYgfTtcbmZ1bmN0aW9uIGJ1ZmZlckZyb21TZWNyZXQoc2VjcmV0KSB7XG4gICAgdmFyIGlucHV0ID0gY29udmVydFRvQnVmZmVyKHNlY3JldCk7XG4gICAgaWYgKGlucHV0LmJ5dGVMZW5ndGggPiBCTE9DS19TSVpFKSB7XG4gICAgICAgIHZhciBidWZmZXJIYXNoID0gbmV3IFJhd1NoYTI1NigpO1xuICAgICAgICBidWZmZXJIYXNoLnVwZGF0ZShpbnB1dCk7XG4gICAgICAgIGlucHV0ID0gYnVmZmVySGFzaC5kaWdlc3QoKTtcbiAgICB9XG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KEJMT0NLX1NJWkUpO1xuICAgIGJ1ZmZlci5zZXQoaW5wdXQpO1xuICAgIHJldHVybiBidWZmZXI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc1NoYTI1Ni5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbmltcG9ydCB7IGZyb21VdGY4IGFzIGZyb21VdGY4QnJvd3NlciB9IGZyb20gXCJAc21pdGh5L3V0aWwtdXRmOFwiO1xuLy8gUXVpY2sgcG9seWZpbGxcbnZhciBmcm9tVXRmOCA9IHR5cGVvZiBCdWZmZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgQnVmZmVyLmZyb21cbiAgICA/IGZ1bmN0aW9uIChpbnB1dCkgeyByZXR1cm4gQnVmZmVyLmZyb20oaW5wdXQsIFwidXRmOFwiKTsgfVxuICAgIDogZnJvbVV0ZjhCcm93c2VyO1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb0J1ZmZlcihkYXRhKSB7XG4gICAgLy8gQWxyZWFkeSBhIFVpbnQ4LCBkbyBub3RoaW5nXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGZyb21VdGY4KGRhdGEpO1xuICAgIH1cbiAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGggLyBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udmVydFRvQnVmZmVyLmpzLm1hcCIsIi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuZXhwb3J0IHsgY29udmVydFRvQnVmZmVyIH0gZnJvbSBcIi4vY29udmVydFRvQnVmZmVyXCI7XG5leHBvcnQgeyBpc0VtcHR5RGF0YSB9IGZyb20gXCIuL2lzRW1wdHlEYXRhXCI7XG5leHBvcnQgeyBudW1Ub1VpbnQ4IH0gZnJvbSBcIi4vbnVtVG9VaW50OFwiO1xuZXhwb3J0IHsgdWludDMyQXJyYXlGcm9tIH0gZnJvbSAnLi91aW50MzJBcnJheUZyb20nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5leHBvcnQgZnVuY3Rpb24gaXNFbXB0eURhdGEoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLmJ5dGVMZW5ndGggPT09IDA7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0VtcHR5RGF0YS5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbmV4cG9ydCBmdW5jdGlvbiBudW1Ub1VpbnQ4KG51bSkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShbXG4gICAgICAgIChudW0gJiAweGZmMDAwMDAwKSA+PiAyNCxcbiAgICAgICAgKG51bSAmIDB4MDBmZjAwMDApID4+IDE2LFxuICAgICAgICAobnVtICYgMHgwMDAwZmYwMCkgPj4gOCxcbiAgICAgICAgbnVtICYgMHgwMDAwMDBmZixcbiAgICBdKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW51bVRvVWludDguanMubWFwIiwiLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4vLyBJRSAxMSBkb2VzIG5vdCBzdXBwb3J0IEFycmF5LmZyb20sIHNvIHdlIGRvIGl0IG1hbnVhbGx5XG5leHBvcnQgZnVuY3Rpb24gdWludDMyQXJyYXlGcm9tKGFfbG9va1VwVGFibGUpIHtcbiAgICBpZiAoIVVpbnQzMkFycmF5LmZyb20pIHtcbiAgICAgICAgdmFyIHJldHVybl9hcnJheSA9IG5ldyBVaW50MzJBcnJheShhX2xvb2tVcFRhYmxlLmxlbmd0aCk7XG4gICAgICAgIHZhciBhX2luZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKGFfaW5kZXggPCBhX2xvb2tVcFRhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuX2FycmF5W2FfaW5kZXhdID0gYV9sb29rVXBUYWJsZVthX2luZGV4XTtcbiAgICAgICAgICAgIGFfaW5kZXggKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuX2FycmF5O1xuICAgIH1cbiAgICByZXR1cm4gVWludDMyQXJyYXkuZnJvbShhX2xvb2tVcFRhYmxlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVpbnQzMkFycmF5RnJvbS5qcy5tYXAiLCJpbXBvcnQgeyBDcmMzMiB9IGZyb20gXCJAYXdzLWNyeXB0by9jcmMzMlwiO1xuaW1wb3J0IHsgSGVhZGVyTWFyc2hhbGxlciB9IGZyb20gXCIuL0hlYWRlck1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IHNwbGl0TWVzc2FnZSB9IGZyb20gXCIuL3NwbGl0TWVzc2FnZVwiO1xuZXhwb3J0IGNsYXNzIEV2ZW50U3RyZWFtQ29kZWMge1xuICAgIGNvbnN0cnVjdG9yKHRvVXRmOCwgZnJvbVV0ZjgpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJNYXJzaGFsbGVyID0gbmV3IEhlYWRlck1hcnNoYWxsZXIodG9VdGY4LCBmcm9tVXRmOCk7XG4gICAgICAgIHRoaXMubWVzc2FnZUJ1ZmZlciA9IFtdO1xuICAgICAgICB0aGlzLmlzRW5kT2ZTdHJlYW0gPSBmYWxzZTtcbiAgICB9XG4gICAgZmVlZChtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUJ1ZmZlci5wdXNoKHRoaXMuZGVjb2RlKG1lc3NhZ2UpKTtcbiAgICB9XG4gICAgZW5kT2ZTdHJlYW0oKSB7XG4gICAgICAgIHRoaXMuaXNFbmRPZlN0cmVhbSA9IHRydWU7XG4gICAgfVxuICAgIGdldE1lc3NhZ2UoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2VCdWZmZXIucG9wKCk7XG4gICAgICAgIGNvbnN0IGlzRW5kT2ZTdHJlYW0gPSB0aGlzLmlzRW5kT2ZTdHJlYW07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRNZXNzYWdlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRW5kT2ZTdHJlYW0oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzRW5kT2ZTdHJlYW07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRBdmFpbGFibGVNZXNzYWdlcygpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZXMgPSB0aGlzLm1lc3NhZ2VCdWZmZXI7XG4gICAgICAgIHRoaXMubWVzc2FnZUJ1ZmZlciA9IFtdO1xuICAgICAgICBjb25zdCBpc0VuZE9mU3RyZWFtID0gdGhpcy5pc0VuZE9mU3RyZWFtO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0TWVzc2FnZXMoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzRW5kT2ZTdHJlYW0oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzRW5kT2ZTdHJlYW07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbmNvZGUoeyBoZWFkZXJzOiByYXdIZWFkZXJzLCBib2R5IH0pIHtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IHRoaXMuaGVhZGVyTWFyc2hhbGxlci5mb3JtYXQocmF3SGVhZGVycyk7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGhlYWRlcnMuYnl0ZUxlbmd0aCArIGJvZHkuYnl0ZUxlbmd0aCArIDE2O1xuICAgICAgICBjb25zdCBvdXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KG91dC5idWZmZXIsIG91dC5ieXRlT2Zmc2V0LCBvdXQuYnl0ZUxlbmd0aCk7XG4gICAgICAgIGNvbnN0IGNoZWNrc3VtID0gbmV3IENyYzMyKCk7XG4gICAgICAgIHZpZXcuc2V0VWludDMyKDAsIGxlbmd0aCwgZmFsc2UpO1xuICAgICAgICB2aWV3LnNldFVpbnQzMig0LCBoZWFkZXJzLmJ5dGVMZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgdmlldy5zZXRVaW50MzIoOCwgY2hlY2tzdW0udXBkYXRlKG91dC5zdWJhcnJheSgwLCA4KSkuZGlnZXN0KCksIGZhbHNlKTtcbiAgICAgICAgb3V0LnNldChoZWFkZXJzLCAxMik7XG4gICAgICAgIG91dC5zZXQoYm9keSwgaGVhZGVycy5ieXRlTGVuZ3RoICsgMTIpO1xuICAgICAgICB2aWV3LnNldFVpbnQzMihsZW5ndGggLSA0LCBjaGVja3N1bS51cGRhdGUob3V0LnN1YmFycmF5KDgsIGxlbmd0aCAtIDQpKS5kaWdlc3QoKSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBkZWNvZGUobWVzc2FnZSkge1xuICAgICAgICBjb25zdCB7IGhlYWRlcnMsIGJvZHkgfSA9IHNwbGl0TWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHsgaGVhZGVyczogdGhpcy5oZWFkZXJNYXJzaGFsbGVyLnBhcnNlKGhlYWRlcnMpLCBib2R5IH07XG4gICAgfVxuICAgIGZvcm1hdEhlYWRlcnMocmF3SGVhZGVycykge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJNYXJzaGFsbGVyLmZvcm1hdChyYXdIZWFkZXJzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBmcm9tSGV4LCB0b0hleCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWhleC1lbmNvZGluZ1wiO1xuaW1wb3J0IHsgSW50NjQgfSBmcm9tIFwiLi9JbnQ2NFwiO1xuZXhwb3J0IGNsYXNzIEhlYWRlck1hcnNoYWxsZXIge1xuICAgIGNvbnN0cnVjdG9yKHRvVXRmOCwgZnJvbVV0ZjgpIHtcbiAgICAgICAgdGhpcy50b1V0ZjggPSB0b1V0Zjg7XG4gICAgICAgIHRoaXMuZnJvbVV0ZjggPSBmcm9tVXRmODtcbiAgICB9XG4gICAgZm9ybWF0KGhlYWRlcnMpIHtcbiAgICAgICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgaGVhZGVyTmFtZSBvZiBPYmplY3Qua2V5cyhoZWFkZXJzKSkge1xuICAgICAgICAgICAgY29uc3QgYnl0ZXMgPSB0aGlzLmZyb21VdGY4KGhlYWRlck5hbWUpO1xuICAgICAgICAgICAgY2h1bmtzLnB1c2goVWludDhBcnJheS5mcm9tKFtieXRlcy5ieXRlTGVuZ3RoXSksIGJ5dGVzLCB0aGlzLmZvcm1hdEhlYWRlclZhbHVlKGhlYWRlcnNbaGVhZGVyTmFtZV0pKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvdXQgPSBuZXcgVWludDhBcnJheShjaHVua3MucmVkdWNlKChjYXJyeSwgYnl0ZXMpID0+IGNhcnJ5ICsgYnl0ZXMuYnl0ZUxlbmd0aCwgMCkpO1xuICAgICAgICBsZXQgcG9zaXRpb24gPSAwO1xuICAgICAgICBmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xuICAgICAgICAgICAgb3V0LnNldChjaHVuaywgcG9zaXRpb24pO1xuICAgICAgICAgICAgcG9zaXRpb24gKz0gY2h1bmsuYnl0ZUxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH1cbiAgICBmb3JtYXRIZWFkZXJWYWx1ZShoZWFkZXIpIHtcbiAgICAgICAgc3dpdGNoIChoZWFkZXIudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKFtoZWFkZXIudmFsdWUgPyAwIDogMV0pO1xuICAgICAgICAgICAgY2FzZSBcImJ5dGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKFsyLCBoZWFkZXIudmFsdWVdKTtcbiAgICAgICAgICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IHNob3J0VmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMykpO1xuICAgICAgICAgICAgICAgIHNob3J0Vmlldy5zZXRVaW50OCgwLCAzKTtcbiAgICAgICAgICAgICAgICBzaG9ydFZpZXcuc2V0SW50MTYoMSwgaGVhZGVyLnZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNob3J0Vmlldy5idWZmZXIpO1xuICAgICAgICAgICAgY2FzZSBcImludGVnZXJcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBpbnRWaWV3ID0gbmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcig1KSk7XG4gICAgICAgICAgICAgICAgaW50Vmlldy5zZXRVaW50OCgwLCA0KTtcbiAgICAgICAgICAgICAgICBpbnRWaWV3LnNldEludDMyKDEsIGhlYWRlci52YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShpbnRWaWV3LmJ1ZmZlcik7XG4gICAgICAgICAgICBjYXNlIFwibG9uZ1wiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGxvbmdCeXRlcyA9IG5ldyBVaW50OEFycmF5KDkpO1xuICAgICAgICAgICAgICAgIGxvbmdCeXRlc1swXSA9IDU7XG4gICAgICAgICAgICAgICAgbG9uZ0J5dGVzLnNldChoZWFkZXIudmFsdWUuYnl0ZXMsIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsb25nQnl0ZXM7XG4gICAgICAgICAgICBjYXNlIFwiYmluYXJ5XCI6XG4gICAgICAgICAgICAgICAgY29uc3QgYmluVmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMyArIGhlYWRlci52YWx1ZS5ieXRlTGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgYmluVmlldy5zZXRVaW50OCgwLCA2KTtcbiAgICAgICAgICAgICAgICBiaW5WaWV3LnNldFVpbnQxNigxLCBoZWFkZXIudmFsdWUuYnl0ZUxlbmd0aCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJpbkJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYmluVmlldy5idWZmZXIpO1xuICAgICAgICAgICAgICAgIGJpbkJ5dGVzLnNldChoZWFkZXIudmFsdWUsIDMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBiaW5CeXRlcztcbiAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICBjb25zdCB1dGY4Qnl0ZXMgPSB0aGlzLmZyb21VdGY4KGhlYWRlci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RyVmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMyArIHV0ZjhCeXRlcy5ieXRlTGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgc3RyVmlldy5zZXRVaW50OCgwLCA3KTtcbiAgICAgICAgICAgICAgICBzdHJWaWV3LnNldFVpbnQxNigxLCB1dGY4Qnl0ZXMuYnl0ZUxlbmd0aCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ckJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoc3RyVmlldy5idWZmZXIpO1xuICAgICAgICAgICAgICAgIHN0ckJ5dGVzLnNldCh1dGY4Qnl0ZXMsIDMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHJCeXRlcztcbiAgICAgICAgICAgIGNhc2UgXCJ0aW1lc3RhbXBcIjpcbiAgICAgICAgICAgICAgICBjb25zdCB0c0J5dGVzID0gbmV3IFVpbnQ4QXJyYXkoOSk7XG4gICAgICAgICAgICAgICAgdHNCeXRlc1swXSA9IDg7XG4gICAgICAgICAgICAgICAgdHNCeXRlcy5zZXQoSW50NjQuZnJvbU51bWJlcihoZWFkZXIudmFsdWUudmFsdWVPZigpKS5ieXRlcywgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRzQnl0ZXM7XG4gICAgICAgICAgICBjYXNlIFwidXVpZFwiOlxuICAgICAgICAgICAgICAgIGlmICghVVVJRF9QQVRURVJOLnRlc3QoaGVhZGVyLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgVVVJRCByZWNlaXZlZDogJHtoZWFkZXIudmFsdWV9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHV1aWRCeXRlcyA9IG5ldyBVaW50OEFycmF5KDE3KTtcbiAgICAgICAgICAgICAgICB1dWlkQnl0ZXNbMF0gPSA5O1xuICAgICAgICAgICAgICAgIHV1aWRCeXRlcy5zZXQoZnJvbUhleChoZWFkZXIudmFsdWUucmVwbGFjZSgvXFwtL2csIFwiXCIpKSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHV1aWRCeXRlcztcbiAgICAgICAgfVxuICAgIH1cbiAgICBwYXJzZShoZWFkZXJzKSB7XG4gICAgICAgIGNvbnN0IG91dCA9IHt9O1xuICAgICAgICBsZXQgcG9zaXRpb24gPSAwO1xuICAgICAgICB3aGlsZSAocG9zaXRpb24gPCBoZWFkZXJzLmJ5dGVMZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVMZW5ndGggPSBoZWFkZXJzLmdldFVpbnQ4KHBvc2l0aW9uKyspO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMudG9VdGY4KG5ldyBVaW50OEFycmF5KGhlYWRlcnMuYnVmZmVyLCBoZWFkZXJzLmJ5dGVPZmZzZXQgKyBwb3NpdGlvbiwgbmFtZUxlbmd0aCkpO1xuICAgICAgICAgICAgcG9zaXRpb24gKz0gbmFtZUxlbmd0aDtcbiAgICAgICAgICAgIHN3aXRjaCAoaGVhZGVycy5nZXRVaW50OChwb3NpdGlvbisrKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQk9PTEVBTl9UQUcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBCT09MRUFOX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBCWVRFX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBoZWFkZXJzLmdldEludDgocG9zaXRpb24rKyksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogU0hPUlRfVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGhlYWRlcnMuZ2V0SW50MTYocG9zaXRpb24sIGZhbHNlKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBJTlRfVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGhlYWRlcnMuZ2V0SW50MzIocG9zaXRpb24sIGZhbHNlKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT05HX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgSW50NjQobmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCA4KSksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmluYXJ5TGVuZ3RoID0gaGVhZGVycy5nZXRVaW50MTYocG9zaXRpb24sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQklOQVJZX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgVWludDhBcnJheShoZWFkZXJzLmJ1ZmZlciwgaGVhZGVycy5ieXRlT2Zmc2V0ICsgcG9zaXRpb24sIGJpbmFyeUxlbmd0aCksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IGJpbmFyeUxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpbmdMZW5ndGggPSBoZWFkZXJzLmdldFVpbnQxNihwb3NpdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSAyO1xuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBTVFJJTkdfVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudG9VdGY4KG5ldyBVaW50OEFycmF5KGhlYWRlcnMuYnVmZmVyLCBoZWFkZXJzLmJ5dGVPZmZzZXQgKyBwb3NpdGlvbiwgc3RyaW5nTGVuZ3RoKSksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IHN0cmluZ0xlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBUSU1FU1RBTVBfVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRlKG5ldyBJbnQ2NChuZXcgVWludDhBcnJheShoZWFkZXJzLmJ1ZmZlciwgaGVhZGVycy5ieXRlT2Zmc2V0ICsgcG9zaXRpb24sIDgpKS52YWx1ZU9mKCkpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHV1aWRCeXRlcyA9IG5ldyBVaW50OEFycmF5KGhlYWRlcnMuYnVmZmVyLCBoZWFkZXJzLmJ5dGVPZmZzZXQgKyBwb3NpdGlvbiwgMTYpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVVVJRF9UQUcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYCR7dG9IZXgodXVpZEJ5dGVzLnN1YmFycmF5KDAsIDQpKX0tJHt0b0hleCh1dWlkQnl0ZXMuc3ViYXJyYXkoNCwgNikpfS0ke3RvSGV4KHV1aWRCeXRlcy5zdWJhcnJheSg2LCA4KSl9LSR7dG9IZXgodXVpZEJ5dGVzLnN1YmFycmF5KDgsIDEwKSl9LSR7dG9IZXgodXVpZEJ5dGVzLnN1YmFycmF5KDEwKSl9YCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlY29nbml6ZWQgaGVhZGVyIHR5cGUgdGFnYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG59XG52YXIgSEVBREVSX1ZBTFVFX1RZUEU7XG4oZnVuY3Rpb24gKEhFQURFUl9WQUxVRV9UWVBFKSB7XG4gICAgSEVBREVSX1ZBTFVFX1RZUEVbSEVBREVSX1ZBTFVFX1RZUEVbXCJib29sVHJ1ZVwiXSA9IDBdID0gXCJib29sVHJ1ZVwiO1xuICAgIEhFQURFUl9WQUxVRV9UWVBFW0hFQURFUl9WQUxVRV9UWVBFW1wiYm9vbEZhbHNlXCJdID0gMV0gPSBcImJvb2xGYWxzZVwiO1xuICAgIEhFQURFUl9WQUxVRV9UWVBFW0hFQURFUl9WQUxVRV9UWVBFW1wiYnl0ZVwiXSA9IDJdID0gXCJieXRlXCI7XG4gICAgSEVBREVSX1ZBTFVFX1RZUEVbSEVBREVSX1ZBTFVFX1RZUEVbXCJzaG9ydFwiXSA9IDNdID0gXCJzaG9ydFwiO1xuICAgIEhFQURFUl9WQUxVRV9UWVBFW0hFQURFUl9WQUxVRV9UWVBFW1wiaW50ZWdlclwiXSA9IDRdID0gXCJpbnRlZ2VyXCI7XG4gICAgSEVBREVSX1ZBTFVFX1RZUEVbSEVBREVSX1ZBTFVFX1RZUEVbXCJsb25nXCJdID0gNV0gPSBcImxvbmdcIjtcbiAgICBIRUFERVJfVkFMVUVfVFlQRVtIRUFERVJfVkFMVUVfVFlQRVtcImJ5dGVBcnJheVwiXSA9IDZdID0gXCJieXRlQXJyYXlcIjtcbiAgICBIRUFERVJfVkFMVUVfVFlQRVtIRUFERVJfVkFMVUVfVFlQRVtcInN0cmluZ1wiXSA9IDddID0gXCJzdHJpbmdcIjtcbiAgICBIRUFERVJfVkFMVUVfVFlQRVtIRUFERVJfVkFMVUVfVFlQRVtcInRpbWVzdGFtcFwiXSA9IDhdID0gXCJ0aW1lc3RhbXBcIjtcbiAgICBIRUFERVJfVkFMVUVfVFlQRVtIRUFERVJfVkFMVUVfVFlQRVtcInV1aWRcIl0gPSA5XSA9IFwidXVpZFwiO1xufSkoSEVBREVSX1ZBTFVFX1RZUEUgfHwgKEhFQURFUl9WQUxVRV9UWVBFID0ge30pKTtcbmNvbnN0IEJPT0xFQU5fVEFHID0gXCJib29sZWFuXCI7XG5jb25zdCBCWVRFX1RBRyA9IFwiYnl0ZVwiO1xuY29uc3QgU0hPUlRfVEFHID0gXCJzaG9ydFwiO1xuY29uc3QgSU5UX1RBRyA9IFwiaW50ZWdlclwiO1xuY29uc3QgTE9OR19UQUcgPSBcImxvbmdcIjtcbmNvbnN0IEJJTkFSWV9UQUcgPSBcImJpbmFyeVwiO1xuY29uc3QgU1RSSU5HX1RBRyA9IFwic3RyaW5nXCI7XG5jb25zdCBUSU1FU1RBTVBfVEFHID0gXCJ0aW1lc3RhbXBcIjtcbmNvbnN0IFVVSURfVEFHID0gXCJ1dWlkXCI7XG5jb25zdCBVVUlEX1BBVFRFUk4gPSAvXlthLWYwLTldezh9LVthLWYwLTldezR9LVthLWYwLTldezR9LVthLWYwLTldezR9LVthLWYwLTldezEyfSQvO1xuIiwiaW1wb3J0IHsgdG9IZXggfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1oZXgtZW5jb2RpbmdcIjtcbmV4cG9ydCBjbGFzcyBJbnQ2NCB7XG4gICAgY29uc3RydWN0b3IoYnl0ZXMpIHtcbiAgICAgICAgdGhpcy5ieXRlcyA9IGJ5dGVzO1xuICAgICAgICBpZiAoYnl0ZXMuYnl0ZUxlbmd0aCAhPT0gOCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW50NjQgYnVmZmVycyBtdXN0IGJlIGV4YWN0bHkgOCBieXRlc1wiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZnJvbU51bWJlcihudW1iZXIpIHtcbiAgICAgICAgaWYgKG51bWJlciA+IDkyMjMzNzIwMzY4NTQ3NzYwMDAgfHwgbnVtYmVyIDwgLTkyMjMzNzIwMzY4NTQ3NzYwMDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtudW1iZXJ9IGlzIHRvbyBsYXJnZSAob3IsIGlmIG5lZ2F0aXZlLCB0b28gc21hbGwpIHRvIHJlcHJlc2VudCBhcyBhbiBJbnQ2NGApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoOCk7XG4gICAgICAgIGZvciAobGV0IGkgPSA3LCByZW1haW5pbmcgPSBNYXRoLmFicyhNYXRoLnJvdW5kKG51bWJlcikpOyBpID4gLTEgJiYgcmVtYWluaW5nID4gMDsgaS0tLCByZW1haW5pbmcgLz0gMjU2KSB7XG4gICAgICAgICAgICBieXRlc1tpXSA9IHJlbWFpbmluZztcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICAgICAgbmVnYXRlKGJ5dGVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEludDY0KGJ5dGVzKTtcbiAgICB9XG4gICAgdmFsdWVPZigpIHtcbiAgICAgICAgY29uc3QgYnl0ZXMgPSB0aGlzLmJ5dGVzLnNsaWNlKDApO1xuICAgICAgICBjb25zdCBuZWdhdGl2ZSA9IGJ5dGVzWzBdICYgMGIxMDAwMDAwMDtcbiAgICAgICAgaWYgKG5lZ2F0aXZlKSB7XG4gICAgICAgICAgICBuZWdhdGUoYnl0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZUludCh0b0hleChieXRlcyksIDE2KSAqIChuZWdhdGl2ZSA/IC0xIDogMSk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMudmFsdWVPZigpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBuZWdhdGUoYnl0ZXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICBieXRlc1tpXSBePSAweGZmO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gNzsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgYnl0ZXNbaV0rKztcbiAgICAgICAgaWYgKGJ5dGVzW2ldICE9PSAwKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuIiwiZXhwb3J0IHt9O1xuIiwiZXhwb3J0IGNsYXNzIE1lc3NhZ2VEZWNvZGVyU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzeW5jSXRlcmF0b3IoKTtcbiAgICB9XG4gICAgYXN5bmMgKmFzeW5jSXRlcmF0b3IoKSB7XG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgYnl0ZXMgb2YgdGhpcy5vcHRpb25zLmlucHV0U3RyZWFtKSB7XG4gICAgICAgICAgICBjb25zdCBkZWNvZGVkID0gdGhpcy5vcHRpb25zLmRlY29kZXIuZGVjb2RlKGJ5dGVzKTtcbiAgICAgICAgICAgIHlpZWxkIGRlY29kZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTWVzc2FnZUVuY29kZXJTdHJlYW0ge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXN5bmNJdGVyYXRvcigpO1xuICAgIH1cbiAgICBhc3luYyAqYXN5bmNJdGVyYXRvcigpIHtcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBtc2cgb2YgdGhpcy5vcHRpb25zLm1lc3NhZ2VTdHJlYW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGVuY29kZWQgPSB0aGlzLm9wdGlvbnMuZW5jb2Rlci5lbmNvZGUobXNnKTtcbiAgICAgICAgICAgIHlpZWxkIGVuY29kZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmNsdWRlRW5kRnJhbWUpIHtcbiAgICAgICAgICAgIHlpZWxkIG5ldyBVaW50OEFycmF5KDApO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNtaXRoeU1lc3NhZ2VEZWNvZGVyU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzeW5jSXRlcmF0b3IoKTtcbiAgICB9XG4gICAgYXN5bmMgKmFzeW5jSXRlcmF0b3IoKSB7XG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgbWVzc2FnZSBvZiB0aGlzLm9wdGlvbnMubWVzc2FnZVN0cmVhbSkge1xuICAgICAgICAgICAgY29uc3QgZGVzZXJpYWxpemVkID0gYXdhaXQgdGhpcy5vcHRpb25zLmRlc2VyaWFsaXplcihtZXNzYWdlKTtcbiAgICAgICAgICAgIGlmIChkZXNlcmlhbGl6ZWQgPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHlpZWxkIGRlc2VyaWFsaXplZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTbWl0aHlNZXNzYWdlRW5jb2RlclN0cmVhbSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc3luY0l0ZXJhdG9yKCk7XG4gICAgfVxuICAgIGFzeW5jICphc3luY0l0ZXJhdG9yKCkge1xuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHRoaXMub3B0aW9ucy5pbnB1dFN0cmVhbSkge1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZEJ1ZiA9IHRoaXMub3B0aW9ucy5zZXJpYWxpemVyKGNodW5rKTtcbiAgICAgICAgICAgIHlpZWxkIHBheWxvYWRCdWY7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9FdmVudFN0cmVhbUNvZGVjXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9IZWFkZXJNYXJzaGFsbGVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9JbnQ2NFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vTWVzc2FnZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vTWVzc2FnZURlY29kZXJTdHJlYW1cIjtcbmV4cG9ydCAqIGZyb20gXCIuL01lc3NhZ2VFbmNvZGVyU3RyZWFtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9TbWl0aHlNZXNzYWdlRGVjb2RlclN0cmVhbVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vU21pdGh5TWVzc2FnZUVuY29kZXJTdHJlYW1cIjtcbiIsImltcG9ydCB7IENyYzMyIH0gZnJvbSBcIkBhd3MtY3J5cHRvL2NyYzMyXCI7XG5jb25zdCBQUkVMVURFX01FTUJFUl9MRU5HVEggPSA0O1xuY29uc3QgUFJFTFVERV9MRU5HVEggPSBQUkVMVURFX01FTUJFUl9MRU5HVEggKiAyO1xuY29uc3QgQ0hFQ0tTVU1fTEVOR1RIID0gNDtcbmNvbnN0IE1JTklNVU1fTUVTU0FHRV9MRU5HVEggPSBQUkVMVURFX0xFTkdUSCArIENIRUNLU1VNX0xFTkdUSCAqIDI7XG5leHBvcnQgZnVuY3Rpb24gc3BsaXRNZXNzYWdlKHsgYnl0ZUxlbmd0aCwgYnl0ZU9mZnNldCwgYnVmZmVyIH0pIHtcbiAgICBpZiAoYnl0ZUxlbmd0aCA8IE1JTklNVU1fTUVTU0FHRV9MRU5HVEgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZWQgbWVzc2FnZSB0b28gc2hvcnQgdG8gYWNjb21tb2RhdGUgZXZlbnQgc3RyZWFtIG1lc3NhZ2Ugb3ZlcmhlYWRcIik7XG4gICAgfVxuICAgIGNvbnN0IHZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCBieXRlT2Zmc2V0LCBieXRlTGVuZ3RoKTtcbiAgICBjb25zdCBtZXNzYWdlTGVuZ3RoID0gdmlldy5nZXRVaW50MzIoMCwgZmFsc2UpO1xuICAgIGlmIChieXRlTGVuZ3RoICE9PSBtZXNzYWdlTGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcG9ydGVkIG1lc3NhZ2UgbGVuZ3RoIGRvZXMgbm90IG1hdGNoIHJlY2VpdmVkIG1lc3NhZ2UgbGVuZ3RoXCIpO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXJMZW5ndGggPSB2aWV3LmdldFVpbnQzMihQUkVMVURFX01FTUJFUl9MRU5HVEgsIGZhbHNlKTtcbiAgICBjb25zdCBleHBlY3RlZFByZWx1ZGVDaGVja3N1bSA9IHZpZXcuZ2V0VWludDMyKFBSRUxVREVfTEVOR1RILCBmYWxzZSk7XG4gICAgY29uc3QgZXhwZWN0ZWRNZXNzYWdlQ2hlY2tzdW0gPSB2aWV3LmdldFVpbnQzMihieXRlTGVuZ3RoIC0gQ0hFQ0tTVU1fTEVOR1RILCBmYWxzZSk7XG4gICAgY29uc3QgY2hlY2tzdW1tZXIgPSBuZXcgQ3JjMzIoKS51cGRhdGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCBieXRlT2Zmc2V0LCBQUkVMVURFX0xFTkdUSCkpO1xuICAgIGlmIChleHBlY3RlZFByZWx1ZGVDaGVja3N1bSAhPT0gY2hlY2tzdW1tZXIuZGlnZXN0KCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcHJlbHVkZSBjaGVja3N1bSBzcGVjaWZpZWQgaW4gdGhlIG1lc3NhZ2UgKCR7ZXhwZWN0ZWRQcmVsdWRlQ2hlY2tzdW19KSBkb2VzIG5vdCBtYXRjaCB0aGUgY2FsY3VsYXRlZCBDUkMzMiBjaGVja3N1bSAoJHtjaGVja3N1bW1lci5kaWdlc3QoKX0pYCk7XG4gICAgfVxuICAgIGNoZWNrc3VtbWVyLnVwZGF0ZShuZXcgVWludDhBcnJheShidWZmZXIsIGJ5dGVPZmZzZXQgKyBQUkVMVURFX0xFTkdUSCwgYnl0ZUxlbmd0aCAtIChQUkVMVURFX0xFTkdUSCArIENIRUNLU1VNX0xFTkdUSCkpKTtcbiAgICBpZiAoZXhwZWN0ZWRNZXNzYWdlQ2hlY2tzdW0gIT09IGNoZWNrc3VtbWVyLmRpZ2VzdCgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIG1lc3NhZ2UgY2hlY2tzdW0gKCR7Y2hlY2tzdW1tZXIuZGlnZXN0KCl9KSBkaWQgbm90IG1hdGNoIHRoZSBleHBlY3RlZCB2YWx1ZSBvZiAke2V4cGVjdGVkTWVzc2FnZUNoZWNrc3VtfWApO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXJzOiBuZXcgRGF0YVZpZXcoYnVmZmVyLCBieXRlT2Zmc2V0ICsgUFJFTFVERV9MRU5HVEggKyBDSEVDS1NVTV9MRU5HVEgsIGhlYWRlckxlbmd0aCksXG4gICAgICAgIGJvZHk6IG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgYnl0ZU9mZnNldCArIFBSRUxVREVfTEVOR1RIICsgQ0hFQ0tTVU1fTEVOR1RIICsgaGVhZGVyTGVuZ3RoLCBtZXNzYWdlTGVuZ3RoIC0gaGVhZGVyTGVuZ3RoIC0gKFBSRUxVREVfTEVOR1RIICsgQ0hFQ0tTVU1fTEVOR1RIICsgQ0hFQ0tTVU1fTEVOR1RIKSksXG4gICAgfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkF3c0NyYzMyID0gdm9pZCAwO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgdXRpbF8xID0gcmVxdWlyZShcIkBhd3MtY3J5cHRvL3V0aWxcIik7XG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xudmFyIEF3c0NyYzMyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEF3c0NyYzMyKCkge1xuICAgICAgICB0aGlzLmNyYzMyID0gbmV3IGluZGV4XzEuQ3JjMzIoKTtcbiAgICB9XG4gICAgQXdzQ3JjMzIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICh0b0hhc2gpIHtcbiAgICAgICAgaWYgKCgwLCB1dGlsXzEuaXNFbXB0eURhdGEpKHRvSGFzaCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuY3JjMzIudXBkYXRlKCgwLCB1dGlsXzEuY29udmVydFRvQnVmZmVyKSh0b0hhc2gpKTtcbiAgICB9O1xuICAgIEF3c0NyYzMyLnByb3RvdHlwZS5kaWdlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRzbGliXzEuX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sICgwLCB1dGlsXzEubnVtVG9VaW50OCkodGhpcy5jcmMzMi5kaWdlc3QoKSldO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXdzQ3JjMzIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNyYzMyID0gbmV3IGluZGV4XzEuQ3JjMzIoKTtcbiAgICB9O1xuICAgIHJldHVybiBBd3NDcmMzMjtcbn0oKSk7XG5leHBvcnRzLkF3c0NyYzMyID0gQXdzQ3JjMzI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hd3NfY3JjMzIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkF3c0NyYzMyID0gZXhwb3J0cy5DcmMzMiA9IGV4cG9ydHMuY3JjMzIgPSB2b2lkIDA7XG52YXIgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwiQGF3cy1jcnlwdG8vdXRpbFwiKTtcbmZ1bmN0aW9uIGNyYzMyKGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IENyYzMyKCkudXBkYXRlKGRhdGEpLmRpZ2VzdCgpO1xufVxuZXhwb3J0cy5jcmMzMiA9IGNyYzMyO1xudmFyIENyYzMyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENyYzMyKCkge1xuICAgICAgICB0aGlzLmNoZWNrc3VtID0gMHhmZmZmZmZmZjtcbiAgICB9XG4gICAgQ3JjMzIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgZGF0YV8xID0gdHNsaWJfMS5fX3ZhbHVlcyhkYXRhKSwgZGF0YV8xXzEgPSBkYXRhXzEubmV4dCgpOyAhZGF0YV8xXzEuZG9uZTsgZGF0YV8xXzEgPSBkYXRhXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGJ5dGUgPSBkYXRhXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrc3VtID1cbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuY2hlY2tzdW0gPj4+IDgpIF4gbG9va3VwVGFibGVbKHRoaXMuY2hlY2tzdW0gXiBieXRlKSAmIDB4ZmZdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YV8xXzEgJiYgIWRhdGFfMV8xLmRvbmUgJiYgKF9hID0gZGF0YV8xLnJldHVybikpIF9hLmNhbGwoZGF0YV8xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIENyYzMyLnByb3RvdHlwZS5kaWdlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAodGhpcy5jaGVja3N1bSBeIDB4ZmZmZmZmZmYpID4+PiAwO1xuICAgIH07XG4gICAgcmV0dXJuIENyYzMyO1xufSgpKTtcbmV4cG9ydHMuQ3JjMzIgPSBDcmMzMjtcbi8vIHByZXR0aWVyLWlnbm9yZVxudmFyIGFfbG9va1VwVGFibGUgPSBbXG4gICAgMHgwMDAwMDAwMCwgMHg3NzA3MzA5NiwgMHhFRTBFNjEyQywgMHg5OTA5NTFCQSxcbiAgICAweDA3NkRDNDE5LCAweDcwNkFGNDhGLCAweEU5NjNBNTM1LCAweDlFNjQ5NUEzLFxuICAgIDB4MEVEQjg4MzIsIDB4NzlEQ0I4QTQsIDB4RTBENUU5MUUsIDB4OTdEMkQ5ODgsXG4gICAgMHgwOUI2NEMyQiwgMHg3RUIxN0NCRCwgMHhFN0I4MkQwNywgMHg5MEJGMUQ5MSxcbiAgICAweDFEQjcxMDY0LCAweDZBQjAyMEYyLCAweEYzQjk3MTQ4LCAweDg0QkU0MURFLFxuICAgIDB4MUFEQUQ0N0QsIDB4NkREREU0RUIsIDB4RjRENEI1NTEsIDB4ODNEMzg1QzcsXG4gICAgMHgxMzZDOTg1NiwgMHg2NDZCQThDMCwgMHhGRDYyRjk3QSwgMHg4QTY1QzlFQyxcbiAgICAweDE0MDE1QzRGLCAweDYzMDY2Q0Q5LCAweEZBMEYzRDYzLCAweDhEMDgwREY1LFxuICAgIDB4M0I2RTIwQzgsIDB4NEM2OTEwNUUsIDB4RDU2MDQxRTQsIDB4QTI2NzcxNzIsXG4gICAgMHgzQzAzRTREMSwgMHg0QjA0RDQ0NywgMHhEMjBEODVGRCwgMHhBNTBBQjU2QixcbiAgICAweDM1QjVBOEZBLCAweDQyQjI5ODZDLCAweERCQkJDOUQ2LCAweEFDQkNGOTQwLFxuICAgIDB4MzJEODZDRTMsIDB4NDVERjVDNzUsIDB4RENENjBEQ0YsIDB4QUJEMTNENTksXG4gICAgMHgyNkQ5MzBBQywgMHg1MURFMDAzQSwgMHhDOEQ3NTE4MCwgMHhCRkQwNjExNixcbiAgICAweDIxQjRGNEI1LCAweDU2QjNDNDIzLCAweENGQkE5NTk5LCAweEI4QkRBNTBGLFxuICAgIDB4MjgwMkI4OUUsIDB4NUYwNTg4MDgsIDB4QzYwQ0Q5QjIsIDB4QjEwQkU5MjQsXG4gICAgMHgyRjZGN0M4NywgMHg1ODY4NEMxMSwgMHhDMTYxMURBQiwgMHhCNjY2MkQzRCxcbiAgICAweDc2REM0MTkwLCAweDAxREI3MTA2LCAweDk4RDIyMEJDLCAweEVGRDUxMDJBLFxuICAgIDB4NzFCMTg1ODksIDB4MDZCNkI1MUYsIDB4OUZCRkU0QTUsIDB4RThCOEQ0MzMsXG4gICAgMHg3ODA3QzlBMiwgMHgwRjAwRjkzNCwgMHg5NjA5QTg4RSwgMHhFMTBFOTgxOCxcbiAgICAweDdGNkEwREJCLCAweDA4NkQzRDJELCAweDkxNjQ2Qzk3LCAweEU2NjM1QzAxLFxuICAgIDB4NkI2QjUxRjQsIDB4MUM2QzYxNjIsIDB4ODU2NTMwRDgsIDB4RjI2MjAwNEUsXG4gICAgMHg2QzA2OTVFRCwgMHgxQjAxQTU3QiwgMHg4MjA4RjRDMSwgMHhGNTBGQzQ1NyxcbiAgICAweDY1QjBEOUM2LCAweDEyQjdFOTUwLCAweDhCQkVCOEVBLCAweEZDQjk4ODdDLFxuICAgIDB4NjJERDFEREYsIDB4MTVEQTJENDksIDB4OENEMzdDRjMsIDB4RkJENDRDNjUsXG4gICAgMHg0REIyNjE1OCwgMHgzQUI1NTFDRSwgMHhBM0JDMDA3NCwgMHhENEJCMzBFMixcbiAgICAweDRBREZBNTQxLCAweDNERDg5NUQ3LCAweEE0RDFDNDZELCAweEQzRDZGNEZCLFxuICAgIDB4NDM2OUU5NkEsIDB4MzQ2RUQ5RkMsIDB4QUQ2Nzg4NDYsIDB4REE2MEI4RDAsXG4gICAgMHg0NDA0MkQ3MywgMHgzMzAzMURFNSwgMHhBQTBBNEM1RiwgMHhERDBEN0NDOSxcbiAgICAweDUwMDU3MTNDLCAweDI3MDI0MUFBLCAweEJFMEIxMDEwLCAweEM5MEMyMDg2LFxuICAgIDB4NTc2OEI1MjUsIDB4MjA2Rjg1QjMsIDB4Qjk2NkQ0MDksIDB4Q0U2MUU0OUYsXG4gICAgMHg1RURFRjkwRSwgMHgyOUQ5Qzk5OCwgMHhCMEQwOTgyMiwgMHhDN0Q3QThCNCxcbiAgICAweDU5QjMzRDE3LCAweDJFQjQwRDgxLCAweEI3QkQ1QzNCLCAweEMwQkE2Q0FELFxuICAgIDB4RURCODgzMjAsIDB4OUFCRkIzQjYsIDB4MDNCNkUyMEMsIDB4NzRCMUQyOUEsXG4gICAgMHhFQUQ1NDczOSwgMHg5REQyNzdBRiwgMHgwNERCMjYxNSwgMHg3M0RDMTY4MyxcbiAgICAweEUzNjMwQjEyLCAweDk0NjQzQjg0LCAweDBENkQ2QTNFLCAweDdBNkE1QUE4LFxuICAgIDB4RTQwRUNGMEIsIDB4OTMwOUZGOUQsIDB4MEEwMEFFMjcsIDB4N0QwNzlFQjEsXG4gICAgMHhGMDBGOTM0NCwgMHg4NzA4QTNEMiwgMHgxRTAxRjI2OCwgMHg2OTA2QzJGRSxcbiAgICAweEY3NjI1NzVELCAweDgwNjU2N0NCLCAweDE5NkMzNjcxLCAweDZFNkIwNkU3LFxuICAgIDB4RkVENDFCNzYsIDB4ODlEMzJCRTAsIDB4MTBEQTdBNUEsIDB4NjdERDRBQ0MsXG4gICAgMHhGOUI5REY2RiwgMHg4RUJFRUZGOSwgMHgxN0I3QkU0MywgMHg2MEIwOEVENSxcbiAgICAweEQ2RDZBM0U4LCAweEExRDE5MzdFLCAweDM4RDhDMkM0LCAweDRGREZGMjUyLFxuICAgIDB4RDFCQjY3RjEsIDB4QTZCQzU3NjcsIDB4M0ZCNTA2REQsIDB4NDhCMjM2NEIsXG4gICAgMHhEODBEMkJEQSwgMHhBRjBBMUI0QywgMHgzNjAzNEFGNiwgMHg0MTA0N0E2MCxcbiAgICAweERGNjBFRkMzLCAweEE4NjdERjU1LCAweDMxNkU4RUVGLCAweDQ2NjlCRTc5LFxuICAgIDB4Q0I2MUIzOEMsIDB4QkM2NjgzMUEsIDB4MjU2RkQyQTAsIDB4NTI2OEUyMzYsXG4gICAgMHhDQzBDNzc5NSwgMHhCQjBCNDcwMywgMHgyMjAyMTZCOSwgMHg1NTA1MjYyRixcbiAgICAweEM1QkEzQkJFLCAweEIyQkQwQjI4LCAweDJCQjQ1QTkyLCAweDVDQjM2QTA0LFxuICAgIDB4QzJEN0ZGQTcsIDB4QjVEMENGMzEsIDB4MkNEOTlFOEIsIDB4NUJERUFFMUQsXG4gICAgMHg5QjY0QzJCMCwgMHhFQzYzRjIyNiwgMHg3NTZBQTM5QywgMHgwMjZEOTMwQSxcbiAgICAweDlDMDkwNkE5LCAweEVCMEUzNjNGLCAweDcyMDc2Nzg1LCAweDA1MDA1NzEzLFxuICAgIDB4OTVCRjRBODIsIDB4RTJCODdBMTQsIDB4N0JCMTJCQUUsIDB4MENCNjFCMzgsXG4gICAgMHg5MkQyOEU5QiwgMHhFNUQ1QkUwRCwgMHg3Q0RDRUZCNywgMHgwQkRCREYyMSxcbiAgICAweDg2RDNEMkQ0LCAweEYxRDRFMjQyLCAweDY4RERCM0Y4LCAweDFGREE4MzZFLFxuICAgIDB4ODFCRTE2Q0QsIDB4RjZCOTI2NUIsIDB4NkZCMDc3RTEsIDB4MThCNzQ3NzcsXG4gICAgMHg4ODA4NUFFNiwgMHhGRjBGNkE3MCwgMHg2NjA2M0JDQSwgMHgxMTAxMEI1QyxcbiAgICAweDhGNjU5RUZGLCAweEY4NjJBRTY5LCAweDYxNkJGRkQzLCAweDE2NkNDRjQ1LFxuICAgIDB4QTAwQUUyNzgsIDB4RDcwREQyRUUsIDB4NEUwNDgzNTQsIDB4MzkwM0IzQzIsXG4gICAgMHhBNzY3MjY2MSwgMHhEMDYwMTZGNywgMHg0OTY5NDc0RCwgMHgzRTZFNzdEQixcbiAgICAweEFFRDE2QTRBLCAweEQ5RDY1QURDLCAweDQwREYwQjY2LCAweDM3RDgzQkYwLFxuICAgIDB4QTlCQ0FFNTMsIDB4REVCQjlFQzUsIDB4NDdCMkNGN0YsIDB4MzBCNUZGRTksXG4gICAgMHhCREJERjIxQywgMHhDQUJBQzI4QSwgMHg1M0IzOTMzMCwgMHgyNEI0QTNBNixcbiAgICAweEJBRDAzNjA1LCAweENERDcwNjkzLCAweDU0REU1NzI5LCAweDIzRDk2N0JGLFxuICAgIDB4QjM2NjdBMkUsIDB4QzQ2MTRBQjgsIDB4NUQ2ODFCMDIsIDB4MkE2RjJCOTQsXG4gICAgMHhCNDBCQkUzNywgMHhDMzBDOEVBMSwgMHg1QTA1REYxQiwgMHgyRDAyRUY4RCxcbl07XG52YXIgbG9va3VwVGFibGUgPSAoMCwgdXRpbF8xLnVpbnQzMkFycmF5RnJvbSkoYV9sb29rVXBUYWJsZSk7XG52YXIgYXdzX2NyYzMyXzEgPSByZXF1aXJlKFwiLi9hd3NfY3JjMzJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBd3NDcmMzMlwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYXdzX2NyYzMyXzEuQXdzQ3JjMzI7IH0gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jcmVhdGVCaW5kaW5nKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb252ZXJ0VG9CdWZmZXIgPSB2b2lkIDA7XG52YXIgdXRpbF91dGY4X2Jyb3dzZXJfMSA9IHJlcXVpcmUoXCJAYXdzLXNkay91dGlsLXV0ZjgtYnJvd3NlclwiKTtcbi8vIFF1aWNrIHBvbHlmaWxsXG52YXIgZnJvbVV0ZjggPSB0eXBlb2YgQnVmZmVyICE9PSBcInVuZGVmaW5lZFwiICYmIEJ1ZmZlci5mcm9tXG4gICAgPyBmdW5jdGlvbiAoaW5wdXQpIHsgcmV0dXJuIEJ1ZmZlci5mcm9tKGlucHV0LCBcInV0ZjhcIik7IH1cbiAgICA6IHV0aWxfdXRmOF9icm93c2VyXzEuZnJvbVV0Zjg7XG5mdW5jdGlvbiBjb252ZXJ0VG9CdWZmZXIoZGF0YSkge1xuICAgIC8vIEFscmVhZHkgYSBVaW50OCwgZG8gbm90aGluZ1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgVWludDhBcnJheSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBmcm9tVXRmOChkYXRhKTtcbiAgICB9XG4gICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoIC8gVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhKTtcbn1cbmV4cG9ydHMuY29udmVydFRvQnVmZmVyID0gY29udmVydFRvQnVmZmVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udmVydFRvQnVmZmVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVpbnQzMkFycmF5RnJvbSA9IGV4cG9ydHMubnVtVG9VaW50OCA9IGV4cG9ydHMuaXNFbXB0eURhdGEgPSBleHBvcnRzLmNvbnZlcnRUb0J1ZmZlciA9IHZvaWQgMDtcbnZhciBjb252ZXJ0VG9CdWZmZXJfMSA9IHJlcXVpcmUoXCIuL2NvbnZlcnRUb0J1ZmZlclwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNvbnZlcnRUb0J1ZmZlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udmVydFRvQnVmZmVyXzEuY29udmVydFRvQnVmZmVyOyB9IH0pO1xudmFyIGlzRW1wdHlEYXRhXzEgPSByZXF1aXJlKFwiLi9pc0VtcHR5RGF0YVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImlzRW1wdHlEYXRhXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpc0VtcHR5RGF0YV8xLmlzRW1wdHlEYXRhOyB9IH0pO1xudmFyIG51bVRvVWludDhfMSA9IHJlcXVpcmUoXCIuL251bVRvVWludDhcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJudW1Ub1VpbnQ4XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBudW1Ub1VpbnQ4XzEubnVtVG9VaW50ODsgfSB9KTtcbnZhciB1aW50MzJBcnJheUZyb21fMSA9IHJlcXVpcmUoXCIuL3VpbnQzMkFycmF5RnJvbVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInVpbnQzMkFycmF5RnJvbVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdWludDMyQXJyYXlGcm9tXzEudWludDMyQXJyYXlGcm9tOyB9IH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaXNFbXB0eURhdGEgPSB2b2lkIDA7XG5mdW5jdGlvbiBpc0VtcHR5RGF0YShkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBkYXRhLmxlbmd0aCA9PT0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGEuYnl0ZUxlbmd0aCA9PT0gMDtcbn1cbmV4cG9ydHMuaXNFbXB0eURhdGEgPSBpc0VtcHR5RGF0YTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzRW1wdHlEYXRhLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm51bVRvVWludDggPSB2b2lkIDA7XG5mdW5jdGlvbiBudW1Ub1VpbnQ4KG51bSkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShbXG4gICAgICAgIChudW0gJiAweGZmMDAwMDAwKSA+PiAyNCxcbiAgICAgICAgKG51bSAmIDB4MDBmZjAwMDApID4+IDE2LFxuICAgICAgICAobnVtICYgMHgwMDAwZmYwMCkgPj4gOCxcbiAgICAgICAgbnVtICYgMHgwMDAwMDBmZixcbiAgICBdKTtcbn1cbmV4cG9ydHMubnVtVG9VaW50OCA9IG51bVRvVWludDg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1udW1Ub1VpbnQ4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVpbnQzMkFycmF5RnJvbSA9IHZvaWQgMDtcbi8vIElFIDExIGRvZXMgbm90IHN1cHBvcnQgQXJyYXkuZnJvbSwgc28gd2UgZG8gaXQgbWFudWFsbHlcbmZ1bmN0aW9uIHVpbnQzMkFycmF5RnJvbShhX2xvb2tVcFRhYmxlKSB7XG4gICAgaWYgKCFVaW50MzJBcnJheS5mcm9tKSB7XG4gICAgICAgIHZhciByZXR1cm5fYXJyYXkgPSBuZXcgVWludDMyQXJyYXkoYV9sb29rVXBUYWJsZS5sZW5ndGgpO1xuICAgICAgICB2YXIgYV9pbmRleCA9IDA7XG4gICAgICAgIHdoaWxlIChhX2luZGV4IDwgYV9sb29rVXBUYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybl9hcnJheVthX2luZGV4XSA9IGFfbG9va1VwVGFibGVbYV9pbmRleF07XG4gICAgICAgICAgICBhX2luZGV4ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybl9hcnJheTtcbiAgICB9XG4gICAgcmV0dXJuIFVpbnQzMkFycmF5LmZyb20oYV9sb29rVXBUYWJsZSk7XG59XG5leHBvcnRzLnVpbnQzMkFycmF5RnJvbSA9IHVpbnQzMkFycmF5RnJvbTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVpbnQzMkFycmF5RnJvbS5qcy5tYXAiLCJjb25zdCBTSE9SVF9UT19IRVggPSB7fTtcbmNvbnN0IEhFWF9UT19TSE9SVCA9IHt9O1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgIGxldCBlbmNvZGVkQnl0ZSA9IGkudG9TdHJpbmcoMTYpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGVuY29kZWRCeXRlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBlbmNvZGVkQnl0ZSA9IGAwJHtlbmNvZGVkQnl0ZX1gO1xuICAgIH1cbiAgICBTSE9SVF9UT19IRVhbaV0gPSBlbmNvZGVkQnl0ZTtcbiAgICBIRVhfVE9fU0hPUlRbZW5jb2RlZEJ5dGVdID0gaTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSGV4KGVuY29kZWQpIHtcbiAgICBpZiAoZW5jb2RlZC5sZW5ndGggJSAyICE9PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhleCBlbmNvZGVkIHN0cmluZ3MgbXVzdCBoYXZlIGFuIGV2ZW4gbnVtYmVyIGxlbmd0aFwiKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0ID0gbmV3IFVpbnQ4QXJyYXkoZW5jb2RlZC5sZW5ndGggLyAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWQubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgY29uc3QgZW5jb2RlZEJ5dGUgPSBlbmNvZGVkLnNsaWNlKGksIGkgKyAyKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoZW5jb2RlZEJ5dGUgaW4gSEVYX1RPX1NIT1JUKSB7XG4gICAgICAgICAgICBvdXRbaSAvIDJdID0gSEVYX1RPX1NIT1JUW2VuY29kZWRCeXRlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGRlY29kZSB1bnJlY29nbml6ZWQgc2VxdWVuY2UgJHtlbmNvZGVkQnl0ZX0gYXMgaGV4YWRlY2ltYWxgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvSGV4KGJ5dGVzKSB7XG4gICAgbGV0IG91dCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5ieXRlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3V0ICs9IFNIT1JUX1RPX0hFWFtieXRlc1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG4iLCJpbXBvcnQgeyBDcmMzMiB9IGZyb20gXCJAYXdzLWNyeXB0by9jcmMzMlwiO1xuaW1wb3J0IHsgSGVhZGVyTWFyc2hhbGxlciB9IGZyb20gXCIuL0hlYWRlck1hcnNoYWxsZXJcIjtcbmltcG9ydCB7IHNwbGl0TWVzc2FnZSB9IGZyb20gXCIuL3NwbGl0TWVzc2FnZVwiO1xudmFyIEV2ZW50U3RyZWFtTWFyc2hhbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXZlbnRTdHJlYW1NYXJzaGFsbGVyKHRvVXRmOCwgZnJvbVV0ZjgpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJNYXJzaGFsbGVyID0gbmV3IEhlYWRlck1hcnNoYWxsZXIodG9VdGY4LCBmcm9tVXRmOCk7XG4gICAgfVxuICAgIEV2ZW50U3RyZWFtTWFyc2hhbGxlci5wcm90b3R5cGUubWFyc2hhbGwgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHJhd0hlYWRlcnMgPSBfYS5oZWFkZXJzLCBib2R5ID0gX2EuYm9keTtcbiAgICAgICAgdmFyIGhlYWRlcnMgPSB0aGlzLmhlYWRlck1hcnNoYWxsZXIuZm9ybWF0KHJhd0hlYWRlcnMpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gaGVhZGVycy5ieXRlTGVuZ3RoICsgYm9keS5ieXRlTGVuZ3RoICsgMTY7XG4gICAgICAgIHZhciBvdXQgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xuICAgICAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhvdXQuYnVmZmVyLCBvdXQuYnl0ZU9mZnNldCwgb3V0LmJ5dGVMZW5ndGgpO1xuICAgICAgICB2YXIgY2hlY2tzdW0gPSBuZXcgQ3JjMzIoKTtcbiAgICAgICAgdmlldy5zZXRVaW50MzIoMCwgbGVuZ3RoLCBmYWxzZSk7XG4gICAgICAgIHZpZXcuc2V0VWludDMyKDQsIGhlYWRlcnMuYnl0ZUxlbmd0aCwgZmFsc2UpO1xuICAgICAgICB2aWV3LnNldFVpbnQzMig4LCBjaGVja3N1bS51cGRhdGUob3V0LnN1YmFycmF5KDAsIDgpKS5kaWdlc3QoKSwgZmFsc2UpO1xuICAgICAgICBvdXQuc2V0KGhlYWRlcnMsIDEyKTtcbiAgICAgICAgb3V0LnNldChib2R5LCBoZWFkZXJzLmJ5dGVMZW5ndGggKyAxMik7XG4gICAgICAgIHZpZXcuc2V0VWludDMyKGxlbmd0aCAtIDQsIGNoZWNrc3VtLnVwZGF0ZShvdXQuc3ViYXJyYXkoOCwgbGVuZ3RoIC0gNCkpLmRpZ2VzdCgpLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcbiAgICBFdmVudFN0cmVhbU1hcnNoYWxsZXIucHJvdG90eXBlLnVubWFyc2hhbGwgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICB2YXIgX2EgPSBzcGxpdE1lc3NhZ2UobWVzc2FnZSksIGhlYWRlcnMgPSBfYS5oZWFkZXJzLCBib2R5ID0gX2EuYm9keTtcbiAgICAgICAgcmV0dXJuIHsgaGVhZGVyczogdGhpcy5oZWFkZXJNYXJzaGFsbGVyLnBhcnNlKGhlYWRlcnMpLCBib2R5OiBib2R5IH07XG4gICAgfTtcbiAgICBFdmVudFN0cmVhbU1hcnNoYWxsZXIucHJvdG90eXBlLmZvcm1hdEhlYWRlcnMgPSBmdW5jdGlvbiAocmF3SGVhZGVycykge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJNYXJzaGFsbGVyLmZvcm1hdChyYXdIZWFkZXJzKTtcbiAgICB9O1xuICAgIHJldHVybiBFdmVudFN0cmVhbU1hcnNoYWxsZXI7XG59KCkpO1xuZXhwb3J0IHsgRXZlbnRTdHJlYW1NYXJzaGFsbGVyIH07XG4iLCJpbXBvcnQgeyBfX3ZhbHVlcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgZnJvbUhleCwgdG9IZXggfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1oZXgtZW5jb2RpbmdcIjtcbmltcG9ydCB7IEludDY0IH0gZnJvbSBcIi4vSW50NjRcIjtcbnZhciBIZWFkZXJNYXJzaGFsbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIZWFkZXJNYXJzaGFsbGVyKHRvVXRmOCwgZnJvbVV0ZjgpIHtcbiAgICAgICAgdGhpcy50b1V0ZjggPSB0b1V0Zjg7XG4gICAgICAgIHRoaXMuZnJvbVV0ZjggPSBmcm9tVXRmODtcbiAgICB9XG4gICAgSGVhZGVyTWFyc2hhbGxlci5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgICAgICAgdmFyIGVfMSwgX2EsIGVfMiwgX2I7XG4gICAgICAgIHZhciBjaHVua3MgPSBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXMoT2JqZWN0LmtleXMoaGVhZGVycykpLCBfZCA9IF9jLm5leHQoKTsgIV9kLmRvbmU7IF9kID0gX2MubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhlYWRlck5hbWUgPSBfZC52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgYnl0ZXMgPSB0aGlzLmZyb21VdGY4KGhlYWRlck5hbWUpO1xuICAgICAgICAgICAgICAgIGNodW5rcy5wdXNoKFVpbnQ4QXJyYXkuZnJvbShbYnl0ZXMuYnl0ZUxlbmd0aF0pLCBieXRlcywgdGhpcy5mb3JtYXRIZWFkZXJWYWx1ZShoZWFkZXJzW2hlYWRlck5hbWVdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2EgPSBfYy5yZXR1cm4pKSBfYS5jYWxsKF9jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgb3V0ID0gbmV3IFVpbnQ4QXJyYXkoY2h1bmtzLnJlZHVjZShmdW5jdGlvbiAoY2FycnksIGJ5dGVzKSB7IHJldHVybiBjYXJyeSArIGJ5dGVzLmJ5dGVMZW5ndGg7IH0sIDApKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGNodW5rc18xID0gX192YWx1ZXMoY2h1bmtzKSwgY2h1bmtzXzFfMSA9IGNodW5rc18xLm5leHQoKTsgIWNodW5rc18xXzEuZG9uZTsgY2h1bmtzXzFfMSA9IGNodW5rc18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBjaHVuayA9IGNodW5rc18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgb3V0LnNldChjaHVuaywgcG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IGNodW5rLmJ5dGVMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMl8xKSB7IGVfMiA9IHsgZXJyb3I6IGVfMl8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChjaHVua3NfMV8xICYmICFjaHVua3NfMV8xLmRvbmUgJiYgKF9iID0gY2h1bmtzXzEucmV0dXJuKSkgX2IuY2FsbChjaHVua3NfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuICAgIEhlYWRlck1hcnNoYWxsZXIucHJvdG90eXBlLmZvcm1hdEhlYWRlclZhbHVlID0gZnVuY3Rpb24gKGhlYWRlcikge1xuICAgICAgICBzd2l0Y2ggKGhlYWRlci50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBVaW50OEFycmF5LmZyb20oW2hlYWRlci52YWx1ZSA/IDAgOiAxXSk7XG4gICAgICAgICAgICBjYXNlIFwiYnl0ZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBVaW50OEFycmF5LmZyb20oWzIsIGhlYWRlci52YWx1ZV0pO1xuICAgICAgICAgICAgY2FzZSBcInNob3J0XCI6XG4gICAgICAgICAgICAgICAgdmFyIHNob3J0VmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMykpO1xuICAgICAgICAgICAgICAgIHNob3J0Vmlldy5zZXRVaW50OCgwLCAzKTtcbiAgICAgICAgICAgICAgICBzaG9ydFZpZXcuc2V0SW50MTYoMSwgaGVhZGVyLnZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNob3J0Vmlldy5idWZmZXIpO1xuICAgICAgICAgICAgY2FzZSBcImludGVnZXJcIjpcbiAgICAgICAgICAgICAgICB2YXIgaW50VmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoNSkpO1xuICAgICAgICAgICAgICAgIGludFZpZXcuc2V0VWludDgoMCwgNCk7XG4gICAgICAgICAgICAgICAgaW50Vmlldy5zZXRJbnQzMigxLCBoZWFkZXIudmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoaW50Vmlldy5idWZmZXIpO1xuICAgICAgICAgICAgY2FzZSBcImxvbmdcIjpcbiAgICAgICAgICAgICAgICB2YXIgbG9uZ0J5dGVzID0gbmV3IFVpbnQ4QXJyYXkoOSk7XG4gICAgICAgICAgICAgICAgbG9uZ0J5dGVzWzBdID0gNTtcbiAgICAgICAgICAgICAgICBsb25nQnl0ZXMuc2V0KGhlYWRlci52YWx1ZS5ieXRlcywgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvbmdCeXRlcztcbiAgICAgICAgICAgIGNhc2UgXCJiaW5hcnlcIjpcbiAgICAgICAgICAgICAgICB2YXIgYmluVmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMyArIGhlYWRlci52YWx1ZS5ieXRlTGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgYmluVmlldy5zZXRVaW50OCgwLCA2KTtcbiAgICAgICAgICAgICAgICBiaW5WaWV3LnNldFVpbnQxNigxLCBoZWFkZXIudmFsdWUuYnl0ZUxlbmd0aCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHZhciBiaW5CeXRlcyA9IG5ldyBVaW50OEFycmF5KGJpblZpZXcuYnVmZmVyKTtcbiAgICAgICAgICAgICAgICBiaW5CeXRlcy5zZXQoaGVhZGVyLnZhbHVlLCAzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluQnl0ZXM7XG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgdmFyIHV0ZjhCeXRlcyA9IHRoaXMuZnJvbVV0ZjgoaGVhZGVyLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RyVmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMyArIHV0ZjhCeXRlcy5ieXRlTGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgc3RyVmlldy5zZXRVaW50OCgwLCA3KTtcbiAgICAgICAgICAgICAgICBzdHJWaWV3LnNldFVpbnQxNigxLCB1dGY4Qnl0ZXMuYnl0ZUxlbmd0aCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHZhciBzdHJCeXRlcyA9IG5ldyBVaW50OEFycmF5KHN0clZpZXcuYnVmZmVyKTtcbiAgICAgICAgICAgICAgICBzdHJCeXRlcy5zZXQodXRmOEJ5dGVzLCAzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyQnl0ZXM7XG4gICAgICAgICAgICBjYXNlIFwidGltZXN0YW1wXCI6XG4gICAgICAgICAgICAgICAgdmFyIHRzQnl0ZXMgPSBuZXcgVWludDhBcnJheSg5KTtcbiAgICAgICAgICAgICAgICB0c0J5dGVzWzBdID0gODtcbiAgICAgICAgICAgICAgICB0c0J5dGVzLnNldChJbnQ2NC5mcm9tTnVtYmVyKGhlYWRlci52YWx1ZS52YWx1ZU9mKCkpLmJ5dGVzLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHNCeXRlcztcbiAgICAgICAgICAgIGNhc2UgXCJ1dWlkXCI6XG4gICAgICAgICAgICAgICAgaWYgKCFVVUlEX1BBVFRFUk4udGVzdChoZWFkZXIudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgVVVJRCByZWNlaXZlZDogXCIuY29uY2F0KGhlYWRlci52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdXVpZEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoMTcpO1xuICAgICAgICAgICAgICAgIHV1aWRCeXRlc1swXSA9IDk7XG4gICAgICAgICAgICAgICAgdXVpZEJ5dGVzLnNldChmcm9tSGV4KGhlYWRlci52YWx1ZS5yZXBsYWNlKC9cXC0vZywgXCJcIikpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXVpZEJ5dGVzO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIZWFkZXJNYXJzaGFsbGVyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gICAgICAgIHZhciBvdXQgPSB7fTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gMDtcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgaGVhZGVycy5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgbmFtZUxlbmd0aCA9IGhlYWRlcnMuZ2V0VWludDgocG9zaXRpb24rKyk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdGhpcy50b1V0ZjgobmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCBuYW1lTGVuZ3RoKSk7XG4gICAgICAgICAgICBwb3NpdGlvbiArPSBuYW1lTGVuZ3RoO1xuICAgICAgICAgICAgc3dpdGNoIChoZWFkZXJzLmdldFVpbnQ4KHBvc2l0aW9uKyspKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV8xXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEJPT0xFQU5fVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVfMV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBCT09MRUFOX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV8xXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEJZVEVfVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGhlYWRlcnMuZ2V0SW50OChwb3NpdGlvbisrKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV8xXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFNIT1JUX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBoZWFkZXJzLmdldEludDE2KHBvc2l0aW9uLCBmYWxzZSksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVfMV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBJTlRfVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGhlYWRlcnMuZ2V0SW50MzIocG9zaXRpb24sIGZhbHNlKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV8xXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IExPTkdfVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBJbnQ2NChuZXcgVWludDhBcnJheShoZWFkZXJzLmJ1ZmZlciwgaGVhZGVycy5ieXRlT2Zmc2V0ICsgcG9zaXRpb24sIDgpKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICB2YXIgYmluYXJ5TGVuZ3RoID0gaGVhZGVycy5nZXRVaW50MTYocG9zaXRpb24sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVfMV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBCSU5BUllfVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBVaW50OEFycmF5KGhlYWRlcnMuYnVmZmVyLCBoZWFkZXJzLmJ5dGVPZmZzZXQgKyBwb3NpdGlvbiwgYmluYXJ5TGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gYmluYXJ5TGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHJpbmdMZW5ndGggPSBoZWFkZXJzLmdldFVpbnQxNihwb3NpdGlvbiwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSAyO1xuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV8xXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFNUUklOR19UQUcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy50b1V0ZjgobmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCBzdHJpbmdMZW5ndGgpKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gc3RyaW5nTGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXzFdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVElNRVNUQU1QX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShuZXcgSW50NjQobmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCA4KSkudmFsdWVPZigpKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICB2YXIgdXVpZEJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCAxNik7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IDE2O1xuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV8xXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFVVSURfVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIuY29uY2F0KHRvSGV4KHV1aWRCeXRlcy5zdWJhcnJheSgwLCA0KSksIFwiLVwiKS5jb25jYXQodG9IZXgodXVpZEJ5dGVzLnN1YmFycmF5KDQsIDYpKSwgXCItXCIpLmNvbmNhdCh0b0hleCh1dWlkQnl0ZXMuc3ViYXJyYXkoNiwgOCkpLCBcIi1cIikuY29uY2F0KHRvSGV4KHV1aWRCeXRlcy5zdWJhcnJheSg4LCAxMCkpLCBcIi1cIikuY29uY2F0KHRvSGV4KHV1aWRCeXRlcy5zdWJhcnJheSgxMCkpKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5yZWNvZ25pemVkIGhlYWRlciB0eXBlIHRhZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgcmV0dXJuIEhlYWRlck1hcnNoYWxsZXI7XG59KCkpO1xuZXhwb3J0IHsgSGVhZGVyTWFyc2hhbGxlciB9O1xudmFyIEhFQURFUl9WQUxVRV9UWVBFO1xuKGZ1bmN0aW9uIChIRUFERVJfVkFMVUVfVFlQRSkge1xuICAgIEhFQURFUl9WQUxVRV9UWVBFW0hFQURFUl9WQUxVRV9UWVBFW1wiYm9vbFRydWVcIl0gPSAwXSA9IFwiYm9vbFRydWVcIjtcbiAgICBIRUFERVJfVkFMVUVfVFlQRVtIRUFERVJfVkFMVUVfVFlQRVtcImJvb2xGYWxzZVwiXSA9IDFdID0gXCJib29sRmFsc2VcIjtcbiAgICBIRUFERVJfVkFMVUVfVFlQRVtIRUFERVJfVkFMVUVfVFlQRVtcImJ5dGVcIl0gPSAyXSA9IFwiYnl0ZVwiO1xuICAgIEhFQURFUl9WQUxVRV9UWVBFW0hFQURFUl9WQUxVRV9UWVBFW1wic2hvcnRcIl0gPSAzXSA9IFwic2hvcnRcIjtcbiAgICBIRUFERVJfVkFMVUVfVFlQRVtIRUFERVJfVkFMVUVfVFlQRVtcImludGVnZXJcIl0gPSA0XSA9IFwiaW50ZWdlclwiO1xuICAgIEhFQURFUl9WQUxVRV9UWVBFW0hFQURFUl9WQUxVRV9UWVBFW1wibG9uZ1wiXSA9IDVdID0gXCJsb25nXCI7XG4gICAgSEVBREVSX1ZBTFVFX1RZUEVbSEVBREVSX1ZBTFVFX1RZUEVbXCJieXRlQXJyYXlcIl0gPSA2XSA9IFwiYnl0ZUFycmF5XCI7XG4gICAgSEVBREVSX1ZBTFVFX1RZUEVbSEVBREVSX1ZBTFVFX1RZUEVbXCJzdHJpbmdcIl0gPSA3XSA9IFwic3RyaW5nXCI7XG4gICAgSEVBREVSX1ZBTFVFX1RZUEVbSEVBREVSX1ZBTFVFX1RZUEVbXCJ0aW1lc3RhbXBcIl0gPSA4XSA9IFwidGltZXN0YW1wXCI7XG4gICAgSEVBREVSX1ZBTFVFX1RZUEVbSEVBREVSX1ZBTFVFX1RZUEVbXCJ1dWlkXCJdID0gOV0gPSBcInV1aWRcIjtcbn0pKEhFQURFUl9WQUxVRV9UWVBFIHx8IChIRUFERVJfVkFMVUVfVFlQRSA9IHt9KSk7XG52YXIgQk9PTEVBTl9UQUcgPSBcImJvb2xlYW5cIjtcbnZhciBCWVRFX1RBRyA9IFwiYnl0ZVwiO1xudmFyIFNIT1JUX1RBRyA9IFwic2hvcnRcIjtcbnZhciBJTlRfVEFHID0gXCJpbnRlZ2VyXCI7XG52YXIgTE9OR19UQUcgPSBcImxvbmdcIjtcbnZhciBCSU5BUllfVEFHID0gXCJiaW5hcnlcIjtcbnZhciBTVFJJTkdfVEFHID0gXCJzdHJpbmdcIjtcbnZhciBUSU1FU1RBTVBfVEFHID0gXCJ0aW1lc3RhbXBcIjtcbnZhciBVVUlEX1RBRyA9IFwidXVpZFwiO1xudmFyIFVVSURfUEFUVEVSTiA9IC9eW2EtZjAtOV17OH0tW2EtZjAtOV17NH0tW2EtZjAtOV17NH0tW2EtZjAtOV17NH0tW2EtZjAtOV17MTJ9JC87XG4iLCJpbXBvcnQgeyB0b0hleCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWhleC1lbmNvZGluZ1wiO1xudmFyIEludDY0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBJbnQ2NChieXRlcykge1xuICAgICAgICB0aGlzLmJ5dGVzID0gYnl0ZXM7XG4gICAgICAgIGlmIChieXRlcy5ieXRlTGVuZ3RoICE9PSA4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnQ2NCBidWZmZXJzIG11c3QgYmUgZXhhY3RseSA4IGJ5dGVzXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEludDY0LmZyb21OdW1iZXIgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIGlmIChudW1iZXIgPiA5MjIzMzcyMDM2ODU0Nzc1ODA3IHx8IG51bWJlciA8IC05MjIzMzcyMDM2ODU0Nzc1ODA4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIi5jb25jYXQobnVtYmVyLCBcIiBpcyB0b28gbGFyZ2UgKG9yLCBpZiBuZWdhdGl2ZSwgdG9vIHNtYWxsKSB0byByZXByZXNlbnQgYXMgYW4gSW50NjRcIikpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBieXRlcyA9IG5ldyBVaW50OEFycmF5KDgpO1xuICAgICAgICBmb3IgKHZhciBpID0gNywgcmVtYWluaW5nID0gTWF0aC5hYnMoTWF0aC5yb3VuZChudW1iZXIpKTsgaSA+IC0xICYmIHJlbWFpbmluZyA+IDA7IGktLSwgcmVtYWluaW5nIC89IDI1Nikge1xuICAgICAgICAgICAgYnl0ZXNbaV0gPSByZW1haW5pbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgICAgIG5lZ2F0ZShieXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBJbnQ2NChieXRlcyk7XG4gICAgfTtcbiAgICBJbnQ2NC5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJ5dGVzID0gdGhpcy5ieXRlcy5zbGljZSgwKTtcbiAgICAgICAgdmFyIG5lZ2F0aXZlID0gYnl0ZXNbMF0gJiAxMjg7XG4gICAgICAgIGlmIChuZWdhdGl2ZSkge1xuICAgICAgICAgICAgbmVnYXRlKGJ5dGVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodG9IZXgoYnl0ZXMpLCAxNikgKiAobmVnYXRpdmUgPyAtMSA6IDEpO1xuICAgIH07XG4gICAgSW50NjQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMudmFsdWVPZigpKTtcbiAgICB9O1xuICAgIHJldHVybiBJbnQ2NDtcbn0oKSk7XG5leHBvcnQgeyBJbnQ2NCB9O1xuZnVuY3Rpb24gbmVnYXRlKGJ5dGVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgYnl0ZXNbaV0gXj0gMHhmZjtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDc7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgIGJ5dGVzW2ldKys7XG4gICAgICAgIGlmIChieXRlc1tpXSAhPT0gMClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbiIsImV4cG9ydCB7fTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL0V2ZW50U3RyZWFtTWFyc2hhbGxlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vSW50NjRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL01lc3NhZ2VcIjtcbiIsImltcG9ydCB7IENyYzMyIH0gZnJvbSBcIkBhd3MtY3J5cHRvL2NyYzMyXCI7XG52YXIgUFJFTFVERV9NRU1CRVJfTEVOR1RIID0gNDtcbnZhciBQUkVMVURFX0xFTkdUSCA9IFBSRUxVREVfTUVNQkVSX0xFTkdUSCAqIDI7XG52YXIgQ0hFQ0tTVU1fTEVOR1RIID0gNDtcbnZhciBNSU5JTVVNX01FU1NBR0VfTEVOR1RIID0gUFJFTFVERV9MRU5HVEggKyBDSEVDS1NVTV9MRU5HVEggKiAyO1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0TWVzc2FnZShfYSkge1xuICAgIHZhciBieXRlTGVuZ3RoID0gX2EuYnl0ZUxlbmd0aCwgYnl0ZU9mZnNldCA9IF9hLmJ5dGVPZmZzZXQsIGJ1ZmZlciA9IF9hLmJ1ZmZlcjtcbiAgICBpZiAoYnl0ZUxlbmd0aCA8IE1JTklNVU1fTUVTU0FHRV9MRU5HVEgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZWQgbWVzc2FnZSB0b28gc2hvcnQgdG8gYWNjb21tb2RhdGUgZXZlbnQgc3RyZWFtIG1lc3NhZ2Ugb3ZlcmhlYWRcIik7XG4gICAgfVxuICAgIHZhciB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCk7XG4gICAgdmFyIG1lc3NhZ2VMZW5ndGggPSB2aWV3LmdldFVpbnQzMigwLCBmYWxzZSk7XG4gICAgaWYgKGJ5dGVMZW5ndGggIT09IG1lc3NhZ2VMZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVwb3J0ZWQgbWVzc2FnZSBsZW5ndGggZG9lcyBub3QgbWF0Y2ggcmVjZWl2ZWQgbWVzc2FnZSBsZW5ndGhcIik7XG4gICAgfVxuICAgIHZhciBoZWFkZXJMZW5ndGggPSB2aWV3LmdldFVpbnQzMihQUkVMVURFX01FTUJFUl9MRU5HVEgsIGZhbHNlKTtcbiAgICB2YXIgZXhwZWN0ZWRQcmVsdWRlQ2hlY2tzdW0gPSB2aWV3LmdldFVpbnQzMihQUkVMVURFX0xFTkdUSCwgZmFsc2UpO1xuICAgIHZhciBleHBlY3RlZE1lc3NhZ2VDaGVja3N1bSA9IHZpZXcuZ2V0VWludDMyKGJ5dGVMZW5ndGggLSBDSEVDS1NVTV9MRU5HVEgsIGZhbHNlKTtcbiAgICB2YXIgY2hlY2tzdW1tZXIgPSBuZXcgQ3JjMzIoKS51cGRhdGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCBieXRlT2Zmc2V0LCBQUkVMVURFX0xFTkdUSCkpO1xuICAgIGlmIChleHBlY3RlZFByZWx1ZGVDaGVja3N1bSAhPT0gY2hlY2tzdW1tZXIuZGlnZXN0KCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHByZWx1ZGUgY2hlY2tzdW0gc3BlY2lmaWVkIGluIHRoZSBtZXNzYWdlIChcIi5jb25jYXQoZXhwZWN0ZWRQcmVsdWRlQ2hlY2tzdW0sIFwiKSBkb2VzIG5vdCBtYXRjaCB0aGUgY2FsY3VsYXRlZCBDUkMzMiBjaGVja3N1bSAoXCIpLmNvbmNhdChjaGVja3N1bW1lci5kaWdlc3QoKSwgXCIpXCIpKTtcbiAgICB9XG4gICAgY2hlY2tzdW1tZXIudXBkYXRlKG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgYnl0ZU9mZnNldCArIFBSRUxVREVfTEVOR1RILCBieXRlTGVuZ3RoIC0gKFBSRUxVREVfTEVOR1RIICsgQ0hFQ0tTVU1fTEVOR1RIKSkpO1xuICAgIGlmIChleHBlY3RlZE1lc3NhZ2VDaGVja3N1bSAhPT0gY2hlY2tzdW1tZXIuZGlnZXN0KCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG1lc3NhZ2UgY2hlY2tzdW0gKFwiLmNvbmNhdChjaGVja3N1bW1lci5kaWdlc3QoKSwgXCIpIGRpZCBub3QgbWF0Y2ggdGhlIGV4cGVjdGVkIHZhbHVlIG9mIFwiKS5jb25jYXQoZXhwZWN0ZWRNZXNzYWdlQ2hlY2tzdW0pKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyczogbmV3IERhdGFWaWV3KGJ1ZmZlciwgYnl0ZU9mZnNldCArIFBSRUxVREVfTEVOR1RIICsgQ0hFQ0tTVU1fTEVOR1RILCBoZWFkZXJMZW5ndGgpLFxuICAgICAgICBib2R5OiBuZXcgVWludDhBcnJheShidWZmZXIsIGJ5dGVPZmZzZXQgKyBQUkVMVURFX0xFTkdUSCArIENIRUNLU1VNX0xFTkdUSCArIGhlYWRlckxlbmd0aCwgbWVzc2FnZUxlbmd0aCAtIGhlYWRlckxlbmd0aCAtIChQUkVMVURFX0xFTkdUSCArIENIRUNLU1VNX0xFTkdUSCArIENIRUNLU1VNX0xFTkdUSCkpLFxuICAgIH07XG59XG4iLCJleHBvcnQgY29uc3QgaXNBcnJheUJ1ZmZlciA9IChhcmcpID0+ICh0eXBlb2YgQXJyYXlCdWZmZXIgPT09IFwiZnVuY3Rpb25cIiAmJiBhcmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgfHxcbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gXCJbb2JqZWN0IEFycmF5QnVmZmVyXVwiO1xuIiwiaW1wb3J0IHsgRmllbGRQb3NpdGlvbiB9IGZyb20gXCIuL0ZpZWxkUG9zaXRpb25cIjtcbmV4cG9ydCBjbGFzcyBGaWVsZCB7XG4gICAgY29uc3RydWN0b3IoeyBuYW1lLCBraW5kID0gRmllbGRQb3NpdGlvbi5IRUFERVIsIHZhbHVlcyA9IFtdIH0pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5raW5kID0ga2luZDtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgfVxuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgc2V0KHZhbHVlcykge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICB9XG4gICAgcmVtb3ZlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMuZmlsdGVyKCh2KSA9PiB2ICE9PSB2YWx1ZSk7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXMubWFwKCh2KSA9PiAodi5pbmNsdWRlcyhcIixcIikgfHwgdi5pbmNsdWRlcyhcIiBcIikgPyBgXCIke3Z9XCJgIDogdikpLmpvaW4oXCIsIFwiKTtcbiAgICB9XG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXM7XG4gICAgfVxufVxuIiwiZXhwb3J0IHZhciBGaWVsZFBvc2l0aW9uO1xuKGZ1bmN0aW9uIChGaWVsZFBvc2l0aW9uKSB7XG4gICAgRmllbGRQb3NpdGlvbltGaWVsZFBvc2l0aW9uW1wiSEVBREVSXCJdID0gMF0gPSBcIkhFQURFUlwiO1xuICAgIEZpZWxkUG9zaXRpb25bRmllbGRQb3NpdGlvbltcIlRSQUlMRVJcIl0gPSAxXSA9IFwiVFJBSUxFUlwiO1xufSkoRmllbGRQb3NpdGlvbiB8fCAoRmllbGRQb3NpdGlvbiA9IHt9KSk7XG4iLCJleHBvcnQgY2xhc3MgRmllbGRzIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGZpZWxkcyA9IFtdLCBlbmNvZGluZyA9IFwidXRmLThcIiB9KSB7XG4gICAgICAgIHRoaXMuZW50cmllcyA9IHt9O1xuICAgICAgICBmaWVsZHMuZm9yRWFjaCh0aGlzLnNldEZpZWxkLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmVuY29kaW5nID0gZW5jb2Rpbmc7XG4gICAgfVxuICAgIHNldEZpZWxkKGZpZWxkKSB7XG4gICAgICAgIHRoaXMuZW50cmllc1tmaWVsZC5uYW1lLnRvTG93ZXJDYXNlKCldID0gZmllbGQ7XG4gICAgfVxuICAgIGdldEZpZWxkKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllc1tuYW1lLnRvTG93ZXJDYXNlKCldO1xuICAgIH1cbiAgICByZW1vdmVGaWVsZChuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVudHJpZXNbbmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICB9XG4gICAgZ2V0QnlUeXBlKGtpbmQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5lbnRyaWVzKS5maWx0ZXIoKGZpZWxkKSA9PiBmaWVsZC5raW5kID09PSBraW5kKTtcbiAgICB9XG59XG4iLCJleHBvcnQge307XG4iLCJleHBvcnQgY2xhc3MgSHR0cFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCBcIkdFVFwiO1xuICAgICAgICB0aGlzLmhvc3RuYW1lID0gb3B0aW9ucy5ob3N0bmFtZSB8fCBcImxvY2FsaG9zdFwiO1xuICAgICAgICB0aGlzLnBvcnQgPSBvcHRpb25zLnBvcnQ7XG4gICAgICAgIHRoaXMucXVlcnkgPSBvcHRpb25zLnF1ZXJ5IHx8IHt9O1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgfHwge307XG4gICAgICAgIHRoaXMuYm9keSA9IG9wdGlvbnMuYm9keTtcbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IG9wdGlvbnMucHJvdG9jb2xcbiAgICAgICAgICAgID8gb3B0aW9ucy5wcm90b2NvbC5zbGljZSgtMSkgIT09IFwiOlwiXG4gICAgICAgICAgICAgICAgPyBgJHtvcHRpb25zLnByb3RvY29sfTpgXG4gICAgICAgICAgICAgICAgOiBvcHRpb25zLnByb3RvY29sXG4gICAgICAgICAgICA6IFwiaHR0cHM6XCI7XG4gICAgICAgIHRoaXMucGF0aCA9IG9wdGlvbnMucGF0aCA/IChvcHRpb25zLnBhdGguY2hhckF0KDApICE9PSBcIi9cIiA/IGAvJHtvcHRpb25zLnBhdGh9YCA6IG9wdGlvbnMucGF0aCkgOiBcIi9cIjtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IG9wdGlvbnMudXNlcm5hbWU7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBvcHRpb25zLnBhc3N3b3JkO1xuICAgICAgICB0aGlzLmZyYWdtZW50ID0gb3B0aW9ucy5mcmFnbWVudDtcbiAgICB9XG4gICAgc3RhdGljIGlzSW5zdGFuY2UocmVxdWVzdCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHJlcSA9IHJlcXVlc3Q7XG4gICAgICAgIHJldHVybiAoXCJtZXRob2RcIiBpbiByZXEgJiZcbiAgICAgICAgICAgIFwicHJvdG9jb2xcIiBpbiByZXEgJiZcbiAgICAgICAgICAgIFwiaG9zdG5hbWVcIiBpbiByZXEgJiZcbiAgICAgICAgICAgIFwicGF0aFwiIGluIHJlcSAmJlxuICAgICAgICAgICAgdHlwZW9mIHJlcVtcInF1ZXJ5XCJdID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICB0eXBlb2YgcmVxW1wiaGVhZGVyc1wiXSA9PT0gXCJvYmplY3RcIik7XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICBjb25zdCBjbG9uZWQgPSBuZXcgSHR0cFJlcXVlc3Qoe1xuICAgICAgICAgICAgLi4udGhpcyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgLi4udGhpcy5oZWFkZXJzIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY2xvbmVkLnF1ZXJ5KVxuICAgICAgICAgICAgY2xvbmVkLnF1ZXJ5ID0gY2xvbmVRdWVyeShjbG9uZWQucXVlcnkpO1xuICAgICAgICByZXR1cm4gY2xvbmVkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsb25lUXVlcnkocXVlcnkpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocXVlcnkpLnJlZHVjZSgoY2FycnksIHBhcmFtTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbSA9IHF1ZXJ5W3BhcmFtTmFtZV07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jYXJyeSxcbiAgICAgICAgICAgIFtwYXJhbU5hbWVdOiBBcnJheS5pc0FycmF5KHBhcmFtKSA/IFsuLi5wYXJhbV0gOiBwYXJhbSxcbiAgICAgICAgfTtcbiAgICB9LCB7fSk7XG59XG4iLCJleHBvcnQgY2xhc3MgSHR0cFJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzQ29kZSA9IG9wdGlvbnMuc3RhdHVzQ29kZTtcbiAgICAgICAgdGhpcy5yZWFzb24gPSBvcHRpb25zLnJlYXNvbjtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgICAgICB0aGlzLmJvZHkgPSBvcHRpb25zLmJvZHk7XG4gICAgfVxuICAgIHN0YXRpYyBpc0luc3RhbmNlKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2UpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHJlc3AgPSByZXNwb25zZTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiByZXNwLnN0YXR1c0NvZGUgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHJlc3AuaGVhZGVycyA9PT0gXCJvYmplY3RcIjtcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9GaWVsZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vRmllbGRQb3NpdGlvblwiO1xuZXhwb3J0ICogZnJvbSBcIi4vRmllbGRzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9odHRwSGFuZGxlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaHR0cFJlcXVlc3RcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2h0dHBSZXNwb25zZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaXNWYWxpZEhvc3RuYW1lXCI7XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNWYWxpZEhvc3RuYW1lKGhvc3RuYW1lKSB7XG4gICAgY29uc3QgaG9zdFBhdHRlcm4gPSAvXlthLXowLTldW2EtejAtOVxcLlxcLV0qW2EtejAtOV0kLztcbiAgICByZXR1cm4gaG9zdFBhdHRlcm4udGVzdChob3N0bmFtZSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZyhxdWVyeXN0cmluZykge1xuICAgIGNvbnN0IHF1ZXJ5ID0ge307XG4gICAgcXVlcnlzdHJpbmcgPSBxdWVyeXN0cmluZy5yZXBsYWNlKC9eXFw/LywgXCJcIik7XG4gICAgaWYgKHF1ZXJ5c3RyaW5nKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGFpciBvZiBxdWVyeXN0cmluZy5zcGxpdChcIiZcIikpIHtcbiAgICAgICAgICAgIGxldCBba2V5LCB2YWx1ZSA9IG51bGxdID0gcGFpci5zcGxpdChcIj1cIik7XG4gICAgICAgICAgICBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQoa2V5KTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKGtleSBpbiBxdWVyeSkpIHtcbiAgICAgICAgICAgICAgICBxdWVyeVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSwgdmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBxdWVyeTtcbn1cbiIsImltcG9ydCB7IEhlYWRlck1hcnNoYWxsZXIgfSBmcm9tIFwiQGF3cy1zZGsvZXZlbnRzdHJlYW0tY29kZWNcIjtcbmltcG9ydCB7IHRvSGV4IH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtaGV4LWVuY29kaW5nXCI7XG5pbXBvcnQgeyBub3JtYWxpemVQcm92aWRlciB9IGZyb20gXCJAYXdzLXNkay91dGlsLW1pZGRsZXdhcmVcIjtcbmltcG9ydCB7IGZyb21VdGY4LCB0b1VpbnQ4QXJyYXksIHRvVXRmOCB9IGZyb20gXCJAYXdzLXNkay91dGlsLXV0ZjhcIjtcbmltcG9ydCB7IEFMR09SSVRITV9JREVOVElGSUVSLCBBTEdPUklUSE1fUVVFUllfUEFSQU0sIEFNWl9EQVRFX0hFQURFUiwgQU1aX0RBVEVfUVVFUllfUEFSQU0sIEFVVEhfSEVBREVSLCBDUkVERU5USUFMX1FVRVJZX1BBUkFNLCBFVkVOVF9BTEdPUklUSE1fSURFTlRJRklFUiwgRVhQSVJFU19RVUVSWV9QQVJBTSwgTUFYX1BSRVNJR05FRF9UVEwsIFNIQTI1Nl9IRUFERVIsIFNJR05BVFVSRV9RVUVSWV9QQVJBTSwgU0lHTkVEX0hFQURFUlNfUVVFUllfUEFSQU0sIFRPS0VOX0hFQURFUiwgVE9LRU5fUVVFUllfUEFSQU0sIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVTY29wZSwgZ2V0U2lnbmluZ0tleSB9IGZyb20gXCIuL2NyZWRlbnRpYWxEZXJpdmF0aW9uXCI7XG5pbXBvcnQgeyBnZXRDYW5vbmljYWxIZWFkZXJzIH0gZnJvbSBcIi4vZ2V0Q2Fub25pY2FsSGVhZGVyc1wiO1xuaW1wb3J0IHsgZ2V0Q2Fub25pY2FsUXVlcnkgfSBmcm9tIFwiLi9nZXRDYW5vbmljYWxRdWVyeVwiO1xuaW1wb3J0IHsgZ2V0UGF5bG9hZEhhc2ggfSBmcm9tIFwiLi9nZXRQYXlsb2FkSGFzaFwiO1xuaW1wb3J0IHsgaGFzSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyVXRpbFwiO1xuaW1wb3J0IHsgbW92ZUhlYWRlcnNUb1F1ZXJ5IH0gZnJvbSBcIi4vbW92ZUhlYWRlcnNUb1F1ZXJ5XCI7XG5pbXBvcnQgeyBwcmVwYXJlUmVxdWVzdCB9IGZyb20gXCIuL3ByZXBhcmVSZXF1ZXN0XCI7XG5pbXBvcnQgeyBpc284NjAxIH0gZnJvbSBcIi4vdXRpbERhdGVcIjtcbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVWNCB7XG4gICAgY29uc3RydWN0b3IoeyBhcHBseUNoZWNrc3VtLCBjcmVkZW50aWFscywgcmVnaW9uLCBzZXJ2aWNlLCBzaGEyNTYsIHVyaUVzY2FwZVBhdGggPSB0cnVlLCB9KSB7XG4gICAgICAgIHRoaXMuaGVhZGVyTWFyc2hhbGxlciA9IG5ldyBIZWFkZXJNYXJzaGFsbGVyKHRvVXRmOCwgZnJvbVV0ZjgpO1xuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xuICAgICAgICB0aGlzLnNoYTI1NiA9IHNoYTI1NjtcbiAgICAgICAgdGhpcy51cmlFc2NhcGVQYXRoID0gdXJpRXNjYXBlUGF0aDtcbiAgICAgICAgdGhpcy5hcHBseUNoZWNrc3VtID0gdHlwZW9mIGFwcGx5Q2hlY2tzdW0gPT09IFwiYm9vbGVhblwiID8gYXBwbHlDaGVja3N1bSA6IHRydWU7XG4gICAgICAgIHRoaXMucmVnaW9uUHJvdmlkZXIgPSBub3JtYWxpemVQcm92aWRlcihyZWdpb24pO1xuICAgICAgICB0aGlzLmNyZWRlbnRpYWxQcm92aWRlciA9IG5vcm1hbGl6ZVByb3ZpZGVyKGNyZWRlbnRpYWxzKTtcbiAgICB9XG4gICAgYXN5bmMgcHJlc2lnbihvcmlnaW5hbFJlcXVlc3QsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBjb25zdCB7IHNpZ25pbmdEYXRlID0gbmV3IERhdGUoKSwgZXhwaXJlc0luID0gMzYwMCwgdW5zaWduYWJsZUhlYWRlcnMsIHVuaG9pc3RhYmxlSGVhZGVycywgc2lnbmFibGVIZWFkZXJzLCBzaWduaW5nUmVnaW9uLCBzaWduaW5nU2VydmljZSwgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gYXdhaXQgdGhpcy5jcmVkZW50aWFsUHJvdmlkZXIoKTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVJlc29sdmVkQ3JlZGVudGlhbHMoY3JlZGVudGlhbHMpO1xuICAgICAgICBjb25zdCByZWdpb24gPSBzaWduaW5nUmVnaW9uID8/IChhd2FpdCB0aGlzLnJlZ2lvblByb3ZpZGVyKCkpO1xuICAgICAgICBjb25zdCB7IGxvbmdEYXRlLCBzaG9ydERhdGUgfSA9IGZvcm1hdERhdGUoc2lnbmluZ0RhdGUpO1xuICAgICAgICBpZiAoZXhwaXJlc0luID4gTUFYX1BSRVNJR05FRF9UVEwpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIlNpZ25hdHVyZSB2ZXJzaW9uIDQgcHJlc2lnbmVkIFVSTHNcIiArIFwiIG11c3QgaGF2ZSBhbiBleHBpcmF0aW9uIGRhdGUgbGVzcyB0aGFuIG9uZSB3ZWVrIGluXCIgKyBcIiB0aGUgZnV0dXJlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNjb3BlID0gY3JlYXRlU2NvcGUoc2hvcnREYXRlLCByZWdpb24sIHNpZ25pbmdTZXJ2aWNlID8/IHRoaXMuc2VydmljZSk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBtb3ZlSGVhZGVyc1RvUXVlcnkocHJlcGFyZVJlcXVlc3Qob3JpZ2luYWxSZXF1ZXN0KSwgeyB1bmhvaXN0YWJsZUhlYWRlcnMgfSk7XG4gICAgICAgIGlmIChjcmVkZW50aWFscy5zZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgICAgIHJlcXVlc3QucXVlcnlbVE9LRU5fUVVFUllfUEFSQU1dID0gY3JlZGVudGlhbHMuc2Vzc2lvblRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3QucXVlcnlbQUxHT1JJVEhNX1FVRVJZX1BBUkFNXSA9IEFMR09SSVRITV9JREVOVElGSUVSO1xuICAgICAgICByZXF1ZXN0LnF1ZXJ5W0NSRURFTlRJQUxfUVVFUllfUEFSQU1dID0gYCR7Y3JlZGVudGlhbHMuYWNjZXNzS2V5SWR9LyR7c2NvcGV9YDtcbiAgICAgICAgcmVxdWVzdC5xdWVyeVtBTVpfREFURV9RVUVSWV9QQVJBTV0gPSBsb25nRGF0ZTtcbiAgICAgICAgcmVxdWVzdC5xdWVyeVtFWFBJUkVTX1FVRVJZX1BBUkFNXSA9IGV4cGlyZXNJbi50b1N0cmluZygxMCk7XG4gICAgICAgIGNvbnN0IGNhbm9uaWNhbEhlYWRlcnMgPSBnZXRDYW5vbmljYWxIZWFkZXJzKHJlcXVlc3QsIHVuc2lnbmFibGVIZWFkZXJzLCBzaWduYWJsZUhlYWRlcnMpO1xuICAgICAgICByZXF1ZXN0LnF1ZXJ5W1NJR05FRF9IRUFERVJTX1FVRVJZX1BBUkFNXSA9IGdldENhbm9uaWNhbEhlYWRlckxpc3QoY2Fub25pY2FsSGVhZGVycyk7XG4gICAgICAgIHJlcXVlc3QucXVlcnlbU0lHTkFUVVJFX1FVRVJZX1BBUkFNXSA9IGF3YWl0IHRoaXMuZ2V0U2lnbmF0dXJlKGxvbmdEYXRlLCBzY29wZSwgdGhpcy5nZXRTaWduaW5nS2V5KGNyZWRlbnRpYWxzLCByZWdpb24sIHNob3J0RGF0ZSwgc2lnbmluZ1NlcnZpY2UpLCB0aGlzLmNyZWF0ZUNhbm9uaWNhbFJlcXVlc3QocmVxdWVzdCwgY2Fub25pY2FsSGVhZGVycywgYXdhaXQgZ2V0UGF5bG9hZEhhc2gob3JpZ2luYWxSZXF1ZXN0LCB0aGlzLnNoYTI1NikpKTtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuICAgIGFzeW5jIHNpZ24odG9TaWduLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9TaWduID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduU3RyaW5nKHRvU2lnbiwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodG9TaWduLmhlYWRlcnMgJiYgdG9TaWduLnBheWxvYWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25FdmVudCh0b1NpZ24sIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRvU2lnbi5tZXNzYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduTWVzc2FnZSh0b1NpZ24sIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnblJlcXVlc3QodG9TaWduLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBzaWduRXZlbnQoeyBoZWFkZXJzLCBwYXlsb2FkIH0sIHsgc2lnbmluZ0RhdGUgPSBuZXcgRGF0ZSgpLCBwcmlvclNpZ25hdHVyZSwgc2lnbmluZ1JlZ2lvbiwgc2lnbmluZ1NlcnZpY2UgfSkge1xuICAgICAgICBjb25zdCByZWdpb24gPSBzaWduaW5nUmVnaW9uID8/IChhd2FpdCB0aGlzLnJlZ2lvblByb3ZpZGVyKCkpO1xuICAgICAgICBjb25zdCB7IHNob3J0RGF0ZSwgbG9uZ0RhdGUgfSA9IGZvcm1hdERhdGUoc2lnbmluZ0RhdGUpO1xuICAgICAgICBjb25zdCBzY29wZSA9IGNyZWF0ZVNjb3BlKHNob3J0RGF0ZSwgcmVnaW9uLCBzaWduaW5nU2VydmljZSA/PyB0aGlzLnNlcnZpY2UpO1xuICAgICAgICBjb25zdCBoYXNoZWRQYXlsb2FkID0gYXdhaXQgZ2V0UGF5bG9hZEhhc2goeyBoZWFkZXJzOiB7fSwgYm9keTogcGF5bG9hZCB9LCB0aGlzLnNoYTI1Nik7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBuZXcgdGhpcy5zaGEyNTYoKTtcbiAgICAgICAgaGFzaC51cGRhdGUoaGVhZGVycyk7XG4gICAgICAgIGNvbnN0IGhhc2hlZEhlYWRlcnMgPSB0b0hleChhd2FpdCBoYXNoLmRpZ2VzdCgpKTtcbiAgICAgICAgY29uc3Qgc3RyaW5nVG9TaWduID0gW1xuICAgICAgICAgICAgRVZFTlRfQUxHT1JJVEhNX0lERU5USUZJRVIsXG4gICAgICAgICAgICBsb25nRGF0ZSxcbiAgICAgICAgICAgIHNjb3BlLFxuICAgICAgICAgICAgcHJpb3JTaWduYXR1cmUsXG4gICAgICAgICAgICBoYXNoZWRIZWFkZXJzLFxuICAgICAgICAgICAgaGFzaGVkUGF5bG9hZCxcbiAgICAgICAgXS5qb2luKFwiXFxuXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5zaWduU3RyaW5nKHN0cmluZ1RvU2lnbiwgeyBzaWduaW5nRGF0ZSwgc2lnbmluZ1JlZ2lvbjogcmVnaW9uLCBzaWduaW5nU2VydmljZSB9KTtcbiAgICB9XG4gICAgYXN5bmMgc2lnbk1lc3NhZ2Uoc2lnbmFibGVNZXNzYWdlLCB7IHNpZ25pbmdEYXRlID0gbmV3IERhdGUoKSwgc2lnbmluZ1JlZ2lvbiwgc2lnbmluZ1NlcnZpY2UgfSkge1xuICAgICAgICBjb25zdCBwcm9taXNlID0gdGhpcy5zaWduRXZlbnQoe1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJNYXJzaGFsbGVyLmZvcm1hdChzaWduYWJsZU1lc3NhZ2UubWVzc2FnZS5oZWFkZXJzKSxcbiAgICAgICAgICAgIHBheWxvYWQ6IHNpZ25hYmxlTWVzc2FnZS5tZXNzYWdlLmJvZHksXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNpZ25pbmdEYXRlLFxuICAgICAgICAgICAgc2lnbmluZ1JlZ2lvbixcbiAgICAgICAgICAgIHNpZ25pbmdTZXJ2aWNlLFxuICAgICAgICAgICAgcHJpb3JTaWduYXR1cmU6IHNpZ25hYmxlTWVzc2FnZS5wcmlvclNpZ25hdHVyZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKHNpZ25hdHVyZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogc2lnbmFibGVNZXNzYWdlLm1lc3NhZ2UsIHNpZ25hdHVyZSB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgc2lnblN0cmluZyhzdHJpbmdUb1NpZ24sIHsgc2lnbmluZ0RhdGUgPSBuZXcgRGF0ZSgpLCBzaWduaW5nUmVnaW9uLCBzaWduaW5nU2VydmljZSB9ID0ge30pIHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBhd2FpdCB0aGlzLmNyZWRlbnRpYWxQcm92aWRlcigpO1xuICAgICAgICB0aGlzLnZhbGlkYXRlUmVzb2x2ZWRDcmVkZW50aWFscyhjcmVkZW50aWFscyk7XG4gICAgICAgIGNvbnN0IHJlZ2lvbiA9IHNpZ25pbmdSZWdpb24gPz8gKGF3YWl0IHRoaXMucmVnaW9uUHJvdmlkZXIoKSk7XG4gICAgICAgIGNvbnN0IHsgc2hvcnREYXRlIH0gPSBmb3JtYXREYXRlKHNpZ25pbmdEYXRlKTtcbiAgICAgICAgY29uc3QgaGFzaCA9IG5ldyB0aGlzLnNoYTI1Nihhd2FpdCB0aGlzLmdldFNpZ25pbmdLZXkoY3JlZGVudGlhbHMsIHJlZ2lvbiwgc2hvcnREYXRlLCBzaWduaW5nU2VydmljZSkpO1xuICAgICAgICBoYXNoLnVwZGF0ZSh0b1VpbnQ4QXJyYXkoc3RyaW5nVG9TaWduKSk7XG4gICAgICAgIHJldHVybiB0b0hleChhd2FpdCBoYXNoLmRpZ2VzdCgpKTtcbiAgICB9XG4gICAgYXN5bmMgc2lnblJlcXVlc3QocmVxdWVzdFRvU2lnbiwgeyBzaWduaW5nRGF0ZSA9IG5ldyBEYXRlKCksIHNpZ25hYmxlSGVhZGVycywgdW5zaWduYWJsZUhlYWRlcnMsIHNpZ25pbmdSZWdpb24sIHNpZ25pbmdTZXJ2aWNlLCB9ID0ge30pIHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBhd2FpdCB0aGlzLmNyZWRlbnRpYWxQcm92aWRlcigpO1xuICAgICAgICB0aGlzLnZhbGlkYXRlUmVzb2x2ZWRDcmVkZW50aWFscyhjcmVkZW50aWFscyk7XG4gICAgICAgIGNvbnN0IHJlZ2lvbiA9IHNpZ25pbmdSZWdpb24gPz8gKGF3YWl0IHRoaXMucmVnaW9uUHJvdmlkZXIoKSk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBwcmVwYXJlUmVxdWVzdChyZXF1ZXN0VG9TaWduKTtcbiAgICAgICAgY29uc3QgeyBsb25nRGF0ZSwgc2hvcnREYXRlIH0gPSBmb3JtYXREYXRlKHNpZ25pbmdEYXRlKTtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBjcmVhdGVTY29wZShzaG9ydERhdGUsIHJlZ2lvbiwgc2lnbmluZ1NlcnZpY2UgPz8gdGhpcy5zZXJ2aWNlKTtcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzW0FNWl9EQVRFX0hFQURFUl0gPSBsb25nRGF0ZTtcbiAgICAgICAgaWYgKGNyZWRlbnRpYWxzLnNlc3Npb25Ub2tlbikge1xuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzW1RPS0VOX0hFQURFUl0gPSBjcmVkZW50aWFscy5zZXNzaW9uVG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF5bG9hZEhhc2ggPSBhd2FpdCBnZXRQYXlsb2FkSGFzaChyZXF1ZXN0LCB0aGlzLnNoYTI1Nik7XG4gICAgICAgIGlmICghaGFzSGVhZGVyKFNIQTI1Nl9IRUFERVIsIHJlcXVlc3QuaGVhZGVycykgJiYgdGhpcy5hcHBseUNoZWNrc3VtKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmhlYWRlcnNbU0hBMjU2X0hFQURFUl0gPSBwYXlsb2FkSGFzaDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW5vbmljYWxIZWFkZXJzID0gZ2V0Q2Fub25pY2FsSGVhZGVycyhyZXF1ZXN0LCB1bnNpZ25hYmxlSGVhZGVycywgc2lnbmFibGVIZWFkZXJzKTtcbiAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgdGhpcy5nZXRTaWduYXR1cmUobG9uZ0RhdGUsIHNjb3BlLCB0aGlzLmdldFNpZ25pbmdLZXkoY3JlZGVudGlhbHMsIHJlZ2lvbiwgc2hvcnREYXRlLCBzaWduaW5nU2VydmljZSksIHRoaXMuY3JlYXRlQ2Fub25pY2FsUmVxdWVzdChyZXF1ZXN0LCBjYW5vbmljYWxIZWFkZXJzLCBwYXlsb2FkSGFzaCkpO1xuICAgICAgICByZXF1ZXN0LmhlYWRlcnNbQVVUSF9IRUFERVJdID1cbiAgICAgICAgICAgIGAke0FMR09SSVRITV9JREVOVElGSUVSfSBgICtcbiAgICAgICAgICAgICAgICBgQ3JlZGVudGlhbD0ke2NyZWRlbnRpYWxzLmFjY2Vzc0tleUlkfS8ke3Njb3BlfSwgYCArXG4gICAgICAgICAgICAgICAgYFNpZ25lZEhlYWRlcnM9JHtnZXRDYW5vbmljYWxIZWFkZXJMaXN0KGNhbm9uaWNhbEhlYWRlcnMpfSwgYCArXG4gICAgICAgICAgICAgICAgYFNpZ25hdHVyZT0ke3NpZ25hdHVyZX1gO1xuICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9XG4gICAgY3JlYXRlQ2Fub25pY2FsUmVxdWVzdChyZXF1ZXN0LCBjYW5vbmljYWxIZWFkZXJzLCBwYXlsb2FkSGFzaCkge1xuICAgICAgICBjb25zdCBzb3J0ZWRIZWFkZXJzID0gT2JqZWN0LmtleXMoY2Fub25pY2FsSGVhZGVycykuc29ydCgpO1xuICAgICAgICByZXR1cm4gYCR7cmVxdWVzdC5tZXRob2R9XG4ke3RoaXMuZ2V0Q2Fub25pY2FsUGF0aChyZXF1ZXN0KX1cbiR7Z2V0Q2Fub25pY2FsUXVlcnkocmVxdWVzdCl9XG4ke3NvcnRlZEhlYWRlcnMubWFwKChuYW1lKSA9PiBgJHtuYW1lfToke2Nhbm9uaWNhbEhlYWRlcnNbbmFtZV19YCkuam9pbihcIlxcblwiKX1cblxuJHtzb3J0ZWRIZWFkZXJzLmpvaW4oXCI7XCIpfVxuJHtwYXlsb2FkSGFzaH1gO1xuICAgIH1cbiAgICBhc3luYyBjcmVhdGVTdHJpbmdUb1NpZ24obG9uZ0RhdGUsIGNyZWRlbnRpYWxTY29wZSwgY2Fub25pY2FsUmVxdWVzdCkge1xuICAgICAgICBjb25zdCBoYXNoID0gbmV3IHRoaXMuc2hhMjU2KCk7XG4gICAgICAgIGhhc2gudXBkYXRlKHRvVWludDhBcnJheShjYW5vbmljYWxSZXF1ZXN0KSk7XG4gICAgICAgIGNvbnN0IGhhc2hlZFJlcXVlc3QgPSBhd2FpdCBoYXNoLmRpZ2VzdCgpO1xuICAgICAgICByZXR1cm4gYCR7QUxHT1JJVEhNX0lERU5USUZJRVJ9XG4ke2xvbmdEYXRlfVxuJHtjcmVkZW50aWFsU2NvcGV9XG4ke3RvSGV4KGhhc2hlZFJlcXVlc3QpfWA7XG4gICAgfVxuICAgIGdldENhbm9uaWNhbFBhdGgoeyBwYXRoIH0pIHtcbiAgICAgICAgaWYgKHRoaXMudXJpRXNjYXBlUGF0aCkge1xuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFBhdGhTZWdtZW50cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwYXRoU2VnbWVudCBvZiBwYXRoLnNwbGl0KFwiL1wiKSkge1xuICAgICAgICAgICAgICAgIGlmIChwYXRoU2VnbWVudD8ubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAocGF0aFNlZ21lbnQgPT09IFwiLlwiKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBpZiAocGF0aFNlZ21lbnQgPT09IFwiLi5cIikge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxpemVkUGF0aFNlZ21lbnRzLnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZFBhdGhTZWdtZW50cy5wdXNoKHBhdGhTZWdtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkUGF0aCA9IGAke3BhdGg/LnN0YXJ0c1dpdGgoXCIvXCIpID8gXCIvXCIgOiBcIlwifSR7bm9ybWFsaXplZFBhdGhTZWdtZW50cy5qb2luKFwiL1wiKX0ke25vcm1hbGl6ZWRQYXRoU2VnbWVudHMubGVuZ3RoID4gMCAmJiBwYXRoPy5lbmRzV2l0aChcIi9cIikgPyBcIi9cIiA6IFwiXCJ9YDtcbiAgICAgICAgICAgIGNvbnN0IGRvdWJsZUVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQobm9ybWFsaXplZFBhdGgpO1xuICAgICAgICAgICAgcmV0dXJuIGRvdWJsZUVuY29kZWQucmVwbGFjZSgvJTJGL2csIFwiL1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG4gICAgYXN5bmMgZ2V0U2lnbmF0dXJlKGxvbmdEYXRlLCBjcmVkZW50aWFsU2NvcGUsIGtleVByb21pc2UsIGNhbm9uaWNhbFJlcXVlc3QpIHtcbiAgICAgICAgY29uc3Qgc3RyaW5nVG9TaWduID0gYXdhaXQgdGhpcy5jcmVhdGVTdHJpbmdUb1NpZ24obG9uZ0RhdGUsIGNyZWRlbnRpYWxTY29wZSwgY2Fub25pY2FsUmVxdWVzdCk7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBuZXcgdGhpcy5zaGEyNTYoYXdhaXQga2V5UHJvbWlzZSk7XG4gICAgICAgIGhhc2gudXBkYXRlKHRvVWludDhBcnJheShzdHJpbmdUb1NpZ24pKTtcbiAgICAgICAgcmV0dXJuIHRvSGV4KGF3YWl0IGhhc2guZGlnZXN0KCkpO1xuICAgIH1cbiAgICBnZXRTaWduaW5nS2V5KGNyZWRlbnRpYWxzLCByZWdpb24sIHNob3J0RGF0ZSwgc2VydmljZSkge1xuICAgICAgICByZXR1cm4gZ2V0U2lnbmluZ0tleSh0aGlzLnNoYTI1NiwgY3JlZGVudGlhbHMsIHNob3J0RGF0ZSwgcmVnaW9uLCBzZXJ2aWNlIHx8IHRoaXMuc2VydmljZSk7XG4gICAgfVxuICAgIHZhbGlkYXRlUmVzb2x2ZWRDcmVkZW50aWFscyhjcmVkZW50aWFscykge1xuICAgICAgICBpZiAodHlwZW9mIGNyZWRlbnRpYWxzICE9PSBcIm9iamVjdFwiIHx8XG4gICAgICAgICAgICB0eXBlb2YgY3JlZGVudGlhbHMuYWNjZXNzS2V5SWQgIT09IFwic3RyaW5nXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiBjcmVkZW50aWFscy5zZWNyZXRBY2Nlc3NLZXkgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlc29sdmVkIGNyZWRlbnRpYWwgb2JqZWN0IGlzIG5vdCB2YWxpZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IGZvcm1hdERhdGUgPSAobm93KSA9PiB7XG4gICAgY29uc3QgbG9uZ0RhdGUgPSBpc284NjAxKG5vdykucmVwbGFjZSgvW1xcLTpdL2csIFwiXCIpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGxvbmdEYXRlLFxuICAgICAgICBzaG9ydERhdGU6IGxvbmdEYXRlLnNsaWNlKDAsIDgpLFxuICAgIH07XG59O1xuY29uc3QgZ2V0Q2Fub25pY2FsSGVhZGVyTGlzdCA9IChoZWFkZXJzKSA9PiBPYmplY3Qua2V5cyhoZWFkZXJzKS5zb3J0KCkuam9pbihcIjtcIik7XG4iLCJleHBvcnQgY29uc3QgY2xvbmVSZXF1ZXN0ID0gKHsgaGVhZGVycywgcXVlcnksIC4uLnJlc3QgfSkgPT4gKHtcbiAgICAuLi5yZXN0LFxuICAgIGhlYWRlcnM6IHsgLi4uaGVhZGVycyB9LFxuICAgIHF1ZXJ5OiBxdWVyeSA/IGNsb25lUXVlcnkocXVlcnkpIDogdW5kZWZpbmVkLFxufSk7XG5leHBvcnQgY29uc3QgY2xvbmVRdWVyeSA9IChxdWVyeSkgPT4gT2JqZWN0LmtleXMocXVlcnkpLnJlZHVjZSgoY2FycnksIHBhcmFtTmFtZSkgPT4ge1xuICAgIGNvbnN0IHBhcmFtID0gcXVlcnlbcGFyYW1OYW1lXTtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5jYXJyeSxcbiAgICAgICAgW3BhcmFtTmFtZV06IEFycmF5LmlzQXJyYXkocGFyYW0pID8gWy4uLnBhcmFtXSA6IHBhcmFtLFxuICAgIH07XG59LCB7fSk7XG4iLCJleHBvcnQgY29uc3QgQUxHT1JJVEhNX1FVRVJZX1BBUkFNID0gXCJYLUFtei1BbGdvcml0aG1cIjtcbmV4cG9ydCBjb25zdCBDUkVERU5USUFMX1FVRVJZX1BBUkFNID0gXCJYLUFtei1DcmVkZW50aWFsXCI7XG5leHBvcnQgY29uc3QgQU1aX0RBVEVfUVVFUllfUEFSQU0gPSBcIlgtQW16LURhdGVcIjtcbmV4cG9ydCBjb25zdCBTSUdORURfSEVBREVSU19RVUVSWV9QQVJBTSA9IFwiWC1BbXotU2lnbmVkSGVhZGVyc1wiO1xuZXhwb3J0IGNvbnN0IEVYUElSRVNfUVVFUllfUEFSQU0gPSBcIlgtQW16LUV4cGlyZXNcIjtcbmV4cG9ydCBjb25zdCBTSUdOQVRVUkVfUVVFUllfUEFSQU0gPSBcIlgtQW16LVNpZ25hdHVyZVwiO1xuZXhwb3J0IGNvbnN0IFRPS0VOX1FVRVJZX1BBUkFNID0gXCJYLUFtei1TZWN1cml0eS1Ub2tlblwiO1xuZXhwb3J0IGNvbnN0IFJFR0lPTl9TRVRfUEFSQU0gPSBcIlgtQW16LVJlZ2lvbi1TZXRcIjtcbmV4cG9ydCBjb25zdCBBVVRIX0hFQURFUiA9IFwiYXV0aG9yaXphdGlvblwiO1xuZXhwb3J0IGNvbnN0IEFNWl9EQVRFX0hFQURFUiA9IEFNWl9EQVRFX1FVRVJZX1BBUkFNLnRvTG93ZXJDYXNlKCk7XG5leHBvcnQgY29uc3QgREFURV9IRUFERVIgPSBcImRhdGVcIjtcbmV4cG9ydCBjb25zdCBHRU5FUkFURURfSEVBREVSUyA9IFtBVVRIX0hFQURFUiwgQU1aX0RBVEVfSEVBREVSLCBEQVRFX0hFQURFUl07XG5leHBvcnQgY29uc3QgU0lHTkFUVVJFX0hFQURFUiA9IFNJR05BVFVSRV9RVUVSWV9QQVJBTS50b0xvd2VyQ2FzZSgpO1xuZXhwb3J0IGNvbnN0IFNIQTI1Nl9IRUFERVIgPSBcIngtYW16LWNvbnRlbnQtc2hhMjU2XCI7XG5leHBvcnQgY29uc3QgVE9LRU5fSEVBREVSID0gVE9LRU5fUVVFUllfUEFSQU0udG9Mb3dlckNhc2UoKTtcbmV4cG9ydCBjb25zdCBIT1NUX0hFQURFUiA9IFwiaG9zdFwiO1xuZXhwb3J0IGNvbnN0IEFMV0FZU19VTlNJR05BQkxFX0hFQURFUlMgPSB7XG4gICAgYXV0aG9yaXphdGlvbjogdHJ1ZSxcbiAgICBcImNhY2hlLWNvbnRyb2xcIjogdHJ1ZSxcbiAgICBjb25uZWN0aW9uOiB0cnVlLFxuICAgIGV4cGVjdDogdHJ1ZSxcbiAgICBmcm9tOiB0cnVlLFxuICAgIFwia2VlcC1hbGl2ZVwiOiB0cnVlLFxuICAgIFwibWF4LWZvcndhcmRzXCI6IHRydWUsXG4gICAgcHJhZ21hOiB0cnVlLFxuICAgIHJlZmVyZXI6IHRydWUsXG4gICAgdGU6IHRydWUsXG4gICAgdHJhaWxlcjogdHJ1ZSxcbiAgICBcInRyYW5zZmVyLWVuY29kaW5nXCI6IHRydWUsXG4gICAgdXBncmFkZTogdHJ1ZSxcbiAgICBcInVzZXItYWdlbnRcIjogdHJ1ZSxcbiAgICBcIngtYW16bi10cmFjZS1pZFwiOiB0cnVlLFxufTtcbmV4cG9ydCBjb25zdCBQUk9YWV9IRUFERVJfUEFUVEVSTiA9IC9ecHJveHktLztcbmV4cG9ydCBjb25zdCBTRUNfSEVBREVSX1BBVFRFUk4gPSAvXnNlYy0vO1xuZXhwb3J0IGNvbnN0IFVOU0lHTkFCTEVfUEFUVEVSTlMgPSBbL15wcm94eS0vaSwgL15zZWMtL2ldO1xuZXhwb3J0IGNvbnN0IEFMR09SSVRITV9JREVOVElGSUVSID0gXCJBV1M0LUhNQUMtU0hBMjU2XCI7XG5leHBvcnQgY29uc3QgQUxHT1JJVEhNX0lERU5USUZJRVJfVjRBID0gXCJBV1M0LUVDRFNBLVAyNTYtU0hBMjU2XCI7XG5leHBvcnQgY29uc3QgRVZFTlRfQUxHT1JJVEhNX0lERU5USUZJRVIgPSBcIkFXUzQtSE1BQy1TSEEyNTYtUEFZTE9BRFwiO1xuZXhwb3J0IGNvbnN0IFVOU0lHTkVEX1BBWUxPQUQgPSBcIlVOU0lHTkVELVBBWUxPQURcIjtcbmV4cG9ydCBjb25zdCBNQVhfQ0FDSEVfU0laRSA9IDUwO1xuZXhwb3J0IGNvbnN0IEtFWV9UWVBFX0lERU5USUZJRVIgPSBcImF3czRfcmVxdWVzdFwiO1xuZXhwb3J0IGNvbnN0IE1BWF9QUkVTSUdORURfVFRMID0gNjAgKiA2MCAqIDI0ICogNztcbiIsImltcG9ydCB7IHRvSGV4IH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtaGV4LWVuY29kaW5nXCI7XG5pbXBvcnQgeyB0b1VpbnQ4QXJyYXkgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC11dGY4XCI7XG5pbXBvcnQgeyBLRVlfVFlQRV9JREVOVElGSUVSLCBNQVhfQ0FDSEVfU0laRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuY29uc3Qgc2lnbmluZ0tleUNhY2hlID0ge307XG5jb25zdCBjYWNoZVF1ZXVlID0gW107XG5leHBvcnQgY29uc3QgY3JlYXRlU2NvcGUgPSAoc2hvcnREYXRlLCByZWdpb24sIHNlcnZpY2UpID0+IGAke3Nob3J0RGF0ZX0vJHtyZWdpb259LyR7c2VydmljZX0vJHtLRVlfVFlQRV9JREVOVElGSUVSfWA7XG5leHBvcnQgY29uc3QgZ2V0U2lnbmluZ0tleSA9IGFzeW5jIChzaGEyNTZDb25zdHJ1Y3RvciwgY3JlZGVudGlhbHMsIHNob3J0RGF0ZSwgcmVnaW9uLCBzZXJ2aWNlKSA9PiB7XG4gICAgY29uc3QgY3JlZHNIYXNoID0gYXdhaXQgaG1hYyhzaGEyNTZDb25zdHJ1Y3RvciwgY3JlZGVudGlhbHMuc2VjcmV0QWNjZXNzS2V5LCBjcmVkZW50aWFscy5hY2Nlc3NLZXlJZCk7XG4gICAgY29uc3QgY2FjaGVLZXkgPSBgJHtzaG9ydERhdGV9OiR7cmVnaW9ufToke3NlcnZpY2V9OiR7dG9IZXgoY3JlZHNIYXNoKX06JHtjcmVkZW50aWFscy5zZXNzaW9uVG9rZW59YDtcbiAgICBpZiAoY2FjaGVLZXkgaW4gc2lnbmluZ0tleUNhY2hlKSB7XG4gICAgICAgIHJldHVybiBzaWduaW5nS2V5Q2FjaGVbY2FjaGVLZXldO1xuICAgIH1cbiAgICBjYWNoZVF1ZXVlLnB1c2goY2FjaGVLZXkpO1xuICAgIHdoaWxlIChjYWNoZVF1ZXVlLmxlbmd0aCA+IE1BWF9DQUNIRV9TSVpFKSB7XG4gICAgICAgIGRlbGV0ZSBzaWduaW5nS2V5Q2FjaGVbY2FjaGVRdWV1ZS5zaGlmdCgpXTtcbiAgICB9XG4gICAgbGV0IGtleSA9IGBBV1M0JHtjcmVkZW50aWFscy5zZWNyZXRBY2Nlc3NLZXl9YDtcbiAgICBmb3IgKGNvbnN0IHNpZ25hYmxlIG9mIFtzaG9ydERhdGUsIHJlZ2lvbiwgc2VydmljZSwgS0VZX1RZUEVfSURFTlRJRklFUl0pIHtcbiAgICAgICAga2V5ID0gYXdhaXQgaG1hYyhzaGEyNTZDb25zdHJ1Y3Rvciwga2V5LCBzaWduYWJsZSk7XG4gICAgfVxuICAgIHJldHVybiAoc2lnbmluZ0tleUNhY2hlW2NhY2hlS2V5XSA9IGtleSk7XG59O1xuZXhwb3J0IGNvbnN0IGNsZWFyQ3JlZGVudGlhbENhY2hlID0gKCkgPT4ge1xuICAgIGNhY2hlUXVldWUubGVuZ3RoID0gMDtcbiAgICBPYmplY3Qua2V5cyhzaWduaW5nS2V5Q2FjaGUpLmZvckVhY2goKGNhY2hlS2V5KSA9PiB7XG4gICAgICAgIGRlbGV0ZSBzaWduaW5nS2V5Q2FjaGVbY2FjaGVLZXldO1xuICAgIH0pO1xufTtcbmNvbnN0IGhtYWMgPSAoY3Rvciwgc2VjcmV0LCBkYXRhKSA9PiB7XG4gICAgY29uc3QgaGFzaCA9IG5ldyBjdG9yKHNlY3JldCk7XG4gICAgaGFzaC51cGRhdGUodG9VaW50OEFycmF5KGRhdGEpKTtcbiAgICByZXR1cm4gaGFzaC5kaWdlc3QoKTtcbn07XG4iLCJpbXBvcnQgeyBBTFdBWVNfVU5TSUdOQUJMRV9IRUFERVJTLCBQUk9YWV9IRUFERVJfUEFUVEVSTiwgU0VDX0hFQURFUl9QQVRURVJOIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5leHBvcnQgY29uc3QgZ2V0Q2Fub25pY2FsSGVhZGVycyA9ICh7IGhlYWRlcnMgfSwgdW5zaWduYWJsZUhlYWRlcnMsIHNpZ25hYmxlSGVhZGVycykgPT4ge1xuICAgIGNvbnN0IGNhbm9uaWNhbCA9IHt9O1xuICAgIGZvciAoY29uc3QgaGVhZGVyTmFtZSBvZiBPYmplY3Qua2V5cyhoZWFkZXJzKS5zb3J0KCkpIHtcbiAgICAgICAgaWYgKGhlYWRlcnNbaGVhZGVyTmFtZV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW5vbmljYWxIZWFkZXJOYW1lID0gaGVhZGVyTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoY2Fub25pY2FsSGVhZGVyTmFtZSBpbiBBTFdBWVNfVU5TSUdOQUJMRV9IRUFERVJTIHx8XG4gICAgICAgICAgICB1bnNpZ25hYmxlSGVhZGVycz8uaGFzKGNhbm9uaWNhbEhlYWRlck5hbWUpIHx8XG4gICAgICAgICAgICBQUk9YWV9IRUFERVJfUEFUVEVSTi50ZXN0KGNhbm9uaWNhbEhlYWRlck5hbWUpIHx8XG4gICAgICAgICAgICBTRUNfSEVBREVSX1BBVFRFUk4udGVzdChjYW5vbmljYWxIZWFkZXJOYW1lKSkge1xuICAgICAgICAgICAgaWYgKCFzaWduYWJsZUhlYWRlcnMgfHwgKHNpZ25hYmxlSGVhZGVycyAmJiAhc2lnbmFibGVIZWFkZXJzLmhhcyhjYW5vbmljYWxIZWFkZXJOYW1lKSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYW5vbmljYWxbY2Fub25pY2FsSGVhZGVyTmFtZV0gPSBoZWFkZXJzW2hlYWRlck5hbWVdLnRyaW0oKS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbm9uaWNhbDtcbn07XG4iLCJpbXBvcnQgeyBlc2NhcGVVcmkgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC11cmktZXNjYXBlXCI7XG5pbXBvcnQgeyBTSUdOQVRVUkVfSEVBREVSIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5leHBvcnQgY29uc3QgZ2V0Q2Fub25pY2FsUXVlcnkgPSAoeyBxdWVyeSA9IHt9IH0pID0+IHtcbiAgICBjb25zdCBrZXlzID0gW107XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHF1ZXJ5KS5zb3J0KCkpIHtcbiAgICAgICAgaWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSBTSUdOQVRVUkVfSEVBREVSKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBxdWVyeVtrZXldO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkW2tleV0gPSBgJHtlc2NhcGVVcmkoa2V5KX09JHtlc2NhcGVVcmkodmFsdWUpfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IHZhbHVlXG4gICAgICAgICAgICAgICAgLnNsaWNlKDApXG4gICAgICAgICAgICAgICAgLnNvcnQoKVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGVuY29kZWQsIHZhbHVlKSA9PiBlbmNvZGVkLmNvbmNhdChbYCR7ZXNjYXBlVXJpKGtleSl9PSR7ZXNjYXBlVXJpKHZhbHVlKX1gXSksIFtdKVxuICAgICAgICAgICAgICAgIC5qb2luKFwiJlwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ga2V5c1xuICAgICAgICAubWFwKChrZXkpID0+IHNlcmlhbGl6ZWRba2V5XSlcbiAgICAgICAgLmZpbHRlcigoc2VyaWFsaXplZCkgPT4gc2VyaWFsaXplZClcbiAgICAgICAgLmpvaW4oXCImXCIpO1xufTtcbiIsImltcG9ydCB7IGlzQXJyYXlCdWZmZXIgfSBmcm9tIFwiQGF3cy1zZGsvaXMtYXJyYXktYnVmZmVyXCI7XG5pbXBvcnQgeyB0b0hleCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWhleC1lbmNvZGluZ1wiO1xuaW1wb3J0IHsgdG9VaW50OEFycmF5IH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtdXRmOFwiO1xuaW1wb3J0IHsgU0hBMjU2X0hFQURFUiwgVU5TSUdORURfUEFZTE9BRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuZXhwb3J0IGNvbnN0IGdldFBheWxvYWRIYXNoID0gYXN5bmMgKHsgaGVhZGVycywgYm9keSB9LCBoYXNoQ29uc3RydWN0b3IpID0+IHtcbiAgICBmb3IgKGNvbnN0IGhlYWRlck5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykpIHtcbiAgICAgICAgaWYgKGhlYWRlck5hbWUudG9Mb3dlckNhc2UoKSA9PT0gU0hBMjU2X0hFQURFUikge1xuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnNbaGVhZGVyTmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJvZHkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBcImUzYjBjNDQyOThmYzFjMTQ5YWZiZjRjODk5NmZiOTI0MjdhZTQxZTQ2NDliOTM0Y2E0OTU5OTFiNzg1MmI4NTVcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09IFwic3RyaW5nXCIgfHwgQXJyYXlCdWZmZXIuaXNWaWV3KGJvZHkpIHx8IGlzQXJyYXlCdWZmZXIoYm9keSkpIHtcbiAgICAgICAgY29uc3QgaGFzaEN0b3IgPSBuZXcgaGFzaENvbnN0cnVjdG9yKCk7XG4gICAgICAgIGhhc2hDdG9yLnVwZGF0ZSh0b1VpbnQ4QXJyYXkoYm9keSkpO1xuICAgICAgICByZXR1cm4gdG9IZXgoYXdhaXQgaGFzaEN0b3IuZGlnZXN0KCkpO1xuICAgIH1cbiAgICByZXR1cm4gVU5TSUdORURfUEFZTE9BRDtcbn07XG4iLCJleHBvcnQgY29uc3QgaGFzSGVhZGVyID0gKHNvdWdodEhlYWRlciwgaGVhZGVycykgPT4ge1xuICAgIHNvdWdodEhlYWRlciA9IHNvdWdodEhlYWRlci50b0xvd2VyQ2FzZSgpO1xuICAgIGZvciAoY29uc3QgaGVhZGVyTmFtZSBvZiBPYmplY3Qua2V5cyhoZWFkZXJzKSkge1xuICAgICAgICBpZiAoc291Z2h0SGVhZGVyID09PSBoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5leHBvcnQgY29uc3QgZ2V0SGVhZGVyVmFsdWUgPSAoc291Z2h0SGVhZGVyLCBoZWFkZXJzKSA9PiB7XG4gICAgc291Z2h0SGVhZGVyID0gc291Z2h0SGVhZGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgZm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIE9iamVjdC5rZXlzKGhlYWRlcnMpKSB7XG4gICAgICAgIGlmIChzb3VnaHRIZWFkZXIgPT09IGhlYWRlck5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnNbaGVhZGVyTmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5leHBvcnQgY29uc3QgZGVsZXRlSGVhZGVyID0gKHNvdWdodEhlYWRlciwgaGVhZGVycykgPT4ge1xuICAgIHNvdWdodEhlYWRlciA9IHNvdWdodEhlYWRlci50b0xvd2VyQ2FzZSgpO1xuICAgIGZvciAoY29uc3QgaGVhZGVyTmFtZSBvZiBPYmplY3Qua2V5cyhoZWFkZXJzKSkge1xuICAgICAgICBpZiAoc291Z2h0SGVhZGVyID09PSBoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzW2hlYWRlck5hbWVdO1xuICAgICAgICB9XG4gICAgfVxufTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL1NpZ25hdHVyZVY0XCI7XG5leHBvcnQgeyBnZXRDYW5vbmljYWxIZWFkZXJzIH0gZnJvbSBcIi4vZ2V0Q2Fub25pY2FsSGVhZGVyc1wiO1xuZXhwb3J0IHsgZ2V0Q2Fub25pY2FsUXVlcnkgfSBmcm9tIFwiLi9nZXRDYW5vbmljYWxRdWVyeVwiO1xuZXhwb3J0IHsgZ2V0UGF5bG9hZEhhc2ggfSBmcm9tIFwiLi9nZXRQYXlsb2FkSGFzaFwiO1xuZXhwb3J0IHsgbW92ZUhlYWRlcnNUb1F1ZXJ5IH0gZnJvbSBcIi4vbW92ZUhlYWRlcnNUb1F1ZXJ5XCI7XG5leHBvcnQgeyBwcmVwYXJlUmVxdWVzdCB9IGZyb20gXCIuL3ByZXBhcmVSZXF1ZXN0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jcmVkZW50aWFsRGVyaXZhdGlvblwiO1xuIiwiaW1wb3J0IHsgY2xvbmVSZXF1ZXN0IH0gZnJvbSBcIi4vY2xvbmVSZXF1ZXN0XCI7XG5leHBvcnQgY29uc3QgbW92ZUhlYWRlcnNUb1F1ZXJ5ID0gKHJlcXVlc3QsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHsgaGVhZGVycywgcXVlcnkgPSB7fSB9ID0gdHlwZW9mIHJlcXVlc3QuY2xvbmUgPT09IFwiZnVuY3Rpb25cIiA/IHJlcXVlc3QuY2xvbmUoKSA6IGNsb25lUmVxdWVzdChyZXF1ZXN0KTtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykpIHtcbiAgICAgICAgY29uc3QgbG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChsbmFtZS5zbGljZSgwLCA2KSA9PT0gXCJ4LWFtei1cIiAmJiAhb3B0aW9ucy51bmhvaXN0YWJsZUhlYWRlcnM/LmhhcyhsbmFtZSkpIHtcbiAgICAgICAgICAgIHF1ZXJ5W25hbWVdID0gaGVhZGVyc1tuYW1lXTtcbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnJlcXVlc3QsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIHF1ZXJ5LFxuICAgIH07XG59O1xuIiwiaW1wb3J0IHsgY2xvbmVSZXF1ZXN0IH0gZnJvbSBcIi4vY2xvbmVSZXF1ZXN0XCI7XG5pbXBvcnQgeyBHRU5FUkFURURfSEVBREVSUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuZXhwb3J0IGNvbnN0IHByZXBhcmVSZXF1ZXN0ID0gKHJlcXVlc3QpID0+IHtcbiAgICByZXF1ZXN0ID0gdHlwZW9mIHJlcXVlc3QuY2xvbmUgPT09IFwiZnVuY3Rpb25cIiA/IHJlcXVlc3QuY2xvbmUoKSA6IGNsb25lUmVxdWVzdChyZXF1ZXN0KTtcbiAgICBmb3IgKGNvbnN0IGhlYWRlck5hbWUgb2YgT2JqZWN0LmtleXMocmVxdWVzdC5oZWFkZXJzKSkge1xuICAgICAgICBpZiAoR0VORVJBVEVEX0hFQURFUlMuaW5kZXhPZihoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcbiAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0LmhlYWRlcnNbaGVhZGVyTmFtZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGlzbzg2MDEgPSAodGltZSkgPT4gdG9EYXRlKHRpbWUpXG4gICAgLnRvSVNPU3RyaW5nKClcbiAgICAucmVwbGFjZSgvXFwuXFxkezN9WiQvLCBcIlpcIik7XG5leHBvcnQgY29uc3QgdG9EYXRlID0gKHRpbWUpID0+IHtcbiAgICBpZiAodHlwZW9mIHRpbWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRpbWUgKiAxMDAwKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChOdW1iZXIodGltZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShOdW1iZXIodGltZSkgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGltZSk7XG4gICAgfVxuICAgIHJldHVybiB0aW1lO1xufTtcbiIsImNvbnN0IFNIT1JUX1RPX0hFWCA9IHt9O1xuY29uc3QgSEVYX1RPX1NIT1JUID0ge307XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgbGV0IGVuY29kZWRCeXRlID0gaS50b1N0cmluZygxNikudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoZW5jb2RlZEJ5dGUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGVuY29kZWRCeXRlID0gYDAke2VuY29kZWRCeXRlfWA7XG4gICAgfVxuICAgIFNIT1JUX1RPX0hFWFtpXSA9IGVuY29kZWRCeXRlO1xuICAgIEhFWF9UT19TSE9SVFtlbmNvZGVkQnl0ZV0gPSBpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21IZXgoZW5jb2RlZCkge1xuICAgIGlmIChlbmNvZGVkLmxlbmd0aCAlIDIgIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGV4IGVuY29kZWQgc3RyaW5ncyBtdXN0IGhhdmUgYW4gZXZlbiBudW1iZXIgbGVuZ3RoXCIpO1xuICAgIH1cbiAgICBjb25zdCBvdXQgPSBuZXcgVWludDhBcnJheShlbmNvZGVkLmxlbmd0aCAvIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jb2RlZC5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICBjb25zdCBlbmNvZGVkQnl0ZSA9IGVuY29kZWQuc2xpY2UoaSwgaSArIDIpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChlbmNvZGVkQnl0ZSBpbiBIRVhfVE9fU0hPUlQpIHtcbiAgICAgICAgICAgIG91dFtpIC8gMl0gPSBIRVhfVE9fU0hPUlRbZW5jb2RlZEJ5dGVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZGVjb2RlIHVucmVjb2duaXplZCBzZXF1ZW5jZSAke2VuY29kZWRCeXRlfSBhcyBoZXhhZGVjaW1hbGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9IZXgoYnl0ZXMpIHtcbiAgICBsZXQgb3V0ID0gXCJcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgICAgICBvdXQgKz0gU0hPUlRfVE9fSEVYW2J5dGVzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsImltcG9ydCB7IHBhcnNlUXVlcnlTdHJpbmcgfSBmcm9tIFwiQGF3cy1zZGsvcXVlcnlzdHJpbmctcGFyc2VyXCI7XG5leHBvcnQgY29uc3QgcGFyc2VVcmwgPSAodXJsKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlVXJsKG5ldyBVUkwodXJsKSk7XG4gICAgfVxuICAgIGNvbnN0IHsgaG9zdG5hbWUsIHBhdGhuYW1lLCBwb3J0LCBwcm90b2NvbCwgc2VhcmNoIH0gPSB1cmw7XG4gICAgbGV0IHF1ZXJ5O1xuICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgcXVlcnkgPSBwYXJzZVF1ZXJ5U3RyaW5nKHNlYXJjaCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGhvc3RuYW1lLFxuICAgICAgICBwb3J0OiBwb3J0ID8gcGFyc2VJbnQocG9ydCkgOiB1bmRlZmluZWQsXG4gICAgICAgIHByb3RvY29sLFxuICAgICAgICBwYXRoOiBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgfTtcbn07XG4iLCJ2YXIgU0hPUlRfVE9fSEVYID0ge307XG52YXIgSEVYX1RPX1NIT1JUID0ge307XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG4gICAgdmFyIGVuY29kZWRCeXRlID0gaS50b1N0cmluZygxNikudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoZW5jb2RlZEJ5dGUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGVuY29kZWRCeXRlID0gXCIwXCIuY29uY2F0KGVuY29kZWRCeXRlKTtcbiAgICB9XG4gICAgU0hPUlRfVE9fSEVYW2ldID0gZW5jb2RlZEJ5dGU7XG4gICAgSEVYX1RPX1NIT1JUW2VuY29kZWRCeXRlXSA9IGk7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbUhleChlbmNvZGVkKSB7XG4gICAgaWYgKGVuY29kZWQubGVuZ3RoICUgMiAhPT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZXggZW5jb2RlZCBzdHJpbmdzIG11c3QgaGF2ZSBhbiBldmVuIG51bWJlciBsZW5ndGhcIik7XG4gICAgfVxuICAgIHZhciBvdXQgPSBuZXcgVWludDhBcnJheShlbmNvZGVkLmxlbmd0aCAvIDIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RlZC5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICB2YXIgZW5jb2RlZEJ5dGUgPSBlbmNvZGVkLnNsaWNlKGksIGkgKyAyKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoZW5jb2RlZEJ5dGUgaW4gSEVYX1RPX1NIT1JUKSB7XG4gICAgICAgICAgICBvdXRbaSAvIDJdID0gSEVYX1RPX1NIT1JUW2VuY29kZWRCeXRlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBkZWNvZGUgdW5yZWNvZ25pemVkIHNlcXVlbmNlIFwiLmNvbmNhdChlbmNvZGVkQnl0ZSwgXCIgYXMgaGV4YWRlY2ltYWxcIikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9IZXgoYnl0ZXMpIHtcbiAgICB2YXIgb3V0ID0gXCJcIjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgICAgICBvdXQgKz0gU0hPUlRfVE9fSEVYW2J5dGVzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cbiIsImV4cG9ydCAqIGZyb20gXCIuL25vcm1hbGl6ZVByb3ZpZGVyXCI7XG4iLCJleHBvcnQgY29uc3Qgbm9ybWFsaXplUHJvdmlkZXIgPSAoaW5wdXQpID0+IHtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICBjb25zdCBwcm9taXNpZmllZCA9IFByb21pc2UucmVzb2x2ZShpbnB1dCk7XG4gICAgcmV0dXJuICgpID0+IHByb21pc2lmaWVkO1xufTtcbiIsImltcG9ydCB7IGVzY2FwZVVyaSB9IGZyb20gXCIuL2VzY2FwZS11cmlcIjtcbmV4cG9ydCBjb25zdCBlc2NhcGVVcmlQYXRoID0gKHVyaSkgPT4gdXJpLnNwbGl0KFwiL1wiKS5tYXAoZXNjYXBlVXJpKS5qb2luKFwiL1wiKTtcbiIsImV4cG9ydCBjb25zdCBlc2NhcGVVcmkgPSAodXJpKSA9PiBlbmNvZGVVUklDb21wb25lbnQodXJpKS5yZXBsYWNlKC9bIScoKSpdL2csIGhleEVuY29kZSk7XG5jb25zdCBoZXhFbmNvZGUgPSAoYykgPT4gYCUke2MuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX1gO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vZXNjYXBlLXVyaVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vZXNjYXBlLXVyaS1wYXRoXCI7XG4iLCJpbXBvcnQgeyBmcm9tVXRmOCBhcyBqc0Zyb21VdGY4LCB0b1V0ZjggYXMganNUb1V0ZjggfSBmcm9tIFwiLi9wdXJlSnNcIjtcbmltcG9ydCB7IGZyb21VdGY4IGFzIHRleHRFbmNvZGVyRnJvbVV0ZjgsIHRvVXRmOCBhcyB0ZXh0RW5jb2RlclRvVXRmOCB9IGZyb20gXCIuL3doYXR3Z0VuY29kaW5nQXBpXCI7XG5leHBvcnQgY29uc3QgZnJvbVV0ZjggPSAoaW5wdXQpID0+IHR5cGVvZiBUZXh0RW5jb2RlciA9PT0gXCJmdW5jdGlvblwiID8gdGV4dEVuY29kZXJGcm9tVXRmOChpbnB1dCkgOiBqc0Zyb21VdGY4KGlucHV0KTtcbmV4cG9ydCBjb25zdCB0b1V0ZjggPSAoaW5wdXQpID0+IHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gXCJmdW5jdGlvblwiID8gdGV4dEVuY29kZXJUb1V0ZjgoaW5wdXQpIDoganNUb1V0ZjgoaW5wdXQpO1xuIiwiZXhwb3J0IGNvbnN0IGZyb21VdGY4ID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3QgYnl0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gaW5wdXQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAodmFsdWUgPCAweDgwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA8IDB4ODAwKSB7XG4gICAgICAgICAgICBieXRlcy5wdXNoKCh2YWx1ZSA+PiA2KSB8IDBiMTEwMDAwMDAsICh2YWx1ZSAmIDBiMTExMTExKSB8IDBiMTAwMDAwMDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGkgKyAxIDwgaW5wdXQubGVuZ3RoICYmICh2YWx1ZSAmIDB4ZmMwMCkgPT09IDB4ZDgwMCAmJiAoaW5wdXQuY2hhckNvZGVBdChpICsgMSkgJiAweGZjMDApID09PSAweGRjMDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN1cnJvZ2F0ZVBhaXIgPSAweDEwMDAwICsgKCh2YWx1ZSAmIDBiMTExMTExMTExMSkgPDwgMTApICsgKGlucHV0LmNoYXJDb2RlQXQoKytpKSAmIDBiMTExMTExMTExMSk7XG4gICAgICAgICAgICBieXRlcy5wdXNoKChzdXJyb2dhdGVQYWlyID4+IDE4KSB8IDBiMTExMTAwMDAsICgoc3Vycm9nYXRlUGFpciA+PiAxMikgJiAwYjExMTExMSkgfCAwYjEwMDAwMDAwLCAoKHN1cnJvZ2F0ZVBhaXIgPj4gNikgJiAwYjExMTExMSkgfCAwYjEwMDAwMDAwLCAoc3Vycm9nYXRlUGFpciAmIDBiMTExMTExKSB8IDBiMTAwMDAwMDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYnl0ZXMucHVzaCgodmFsdWUgPj4gMTIpIHwgMGIxMTEwMDAwMCwgKCh2YWx1ZSA+PiA2KSAmIDBiMTExMTExKSB8IDBiMTAwMDAwMDAsICh2YWx1ZSAmIDBiMTExMTExKSB8IDBiMTAwMDAwMDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBVaW50OEFycmF5LmZyb20oYnl0ZXMpO1xufTtcbmV4cG9ydCBjb25zdCB0b1V0ZjggPSAoaW5wdXQpID0+IHtcbiAgICBsZXQgZGVjb2RlZCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGlucHV0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGJ5dGUgPSBpbnB1dFtpXTtcbiAgICAgICAgaWYgKGJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBkZWNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoMGIxMTAwMDAwMCA8PSBieXRlICYmIGJ5dGUgPCAwYjExMTAwMDAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0Qnl0ZSA9IGlucHV0WysraV07XG4gICAgICAgICAgICBkZWNvZGVkICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChieXRlICYgMGIxMTExMSkgPDwgNikgfCAobmV4dEJ5dGUgJiAwYjExMTExMSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKDBiMTExMTAwMDAgPD0gYnl0ZSAmJiBieXRlIDwgMGIxMDExMDExMDEpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1cnJvZ2F0ZVBhaXIgPSBbYnl0ZSwgaW5wdXRbKytpXSwgaW5wdXRbKytpXSwgaW5wdXRbKytpXV07XG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkID0gXCIlXCIgKyBzdXJyb2dhdGVQYWlyLm1hcCgoYnl0ZVZhbHVlKSA9PiBieXRlVmFsdWUudG9TdHJpbmcoMTYpKS5qb2luKFwiJVwiKTtcbiAgICAgICAgICAgIGRlY29kZWQgKz0gZGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVjb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYnl0ZSAmIDBiMTExMSkgPDwgMTIpIHwgKChpbnB1dFsrK2ldICYgMGIxMTExMTEpIDw8IDYpIHwgKGlucHV0WysraV0gJiAwYjExMTExMSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWNvZGVkO1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBmcm9tVXRmOChpbnB1dCkge1xuICAgIHJldHVybiBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoaW5wdXQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvVXRmOChpbnB1dCkge1xuICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoXCJ1dGYtOFwiKS5kZWNvZGUoaW5wdXQpO1xufVxuIiwiaW1wb3J0IHsgZnJvbUFycmF5QnVmZmVyLCBmcm9tU3RyaW5nIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtYnVmZmVyLWZyb21cIjtcbmV4cG9ydCBjb25zdCBmcm9tVXRmOCA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGJ1ZiA9IGZyb21TdHJpbmcoaW5wdXQsIFwidXRmOFwiKTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ1ZmZlciwgYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlTGVuZ3RoIC8gVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7XG59O1xuZXhwb3J0IGNvbnN0IHRvVXRmOCA9IChpbnB1dCkgPT4gZnJvbUFycmF5QnVmZmVyKGlucHV0LmJ1ZmZlciwgaW5wdXQuYnl0ZU9mZnNldCwgaW5wdXQuYnl0ZUxlbmd0aCkudG9TdHJpbmcoXCJ1dGY4XCIpO1xuIiwiZXhwb3J0IGNvbnN0IGlzQXJyYXlCdWZmZXIgPSAoYXJnKSA9PiAodHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCIgJiYgYXJnIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8XG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09IFwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIjtcbiIsImltcG9ydCB7IGlzQXJyYXlCdWZmZXIgfSBmcm9tIFwiQGF3cy1zZGsvaXMtYXJyYXktYnVmZmVyXCI7XG5pbXBvcnQgeyBCdWZmZXIgfSBmcm9tIFwiYnVmZmVyXCI7XG5leHBvcnQgY29uc3QgZnJvbUFycmF5QnVmZmVyID0gKGlucHV0LCBvZmZzZXQgPSAwLCBsZW5ndGggPSBpbnB1dC5ieXRlTGVuZ3RoIC0gb2Zmc2V0KSA9PiB7XG4gICAgaWYgKCFpc0FycmF5QnVmZmVyKGlucHV0KSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXCJpbnB1dFwiIGFyZ3VtZW50IG11c3QgYmUgQXJyYXlCdWZmZXIuIFJlY2VpdmVkIHR5cGUgJHt0eXBlb2YgaW5wdXR9ICgke2lucHV0fSlgKTtcbiAgICB9XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKGlucHV0LCBvZmZzZXQsIGxlbmd0aCk7XG59O1xuZXhwb3J0IGNvbnN0IGZyb21TdHJpbmcgPSAoaW5wdXQsIGVuY29kaW5nKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBUaGUgXCJpbnB1dFwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBzdHJpbmcuIFJlY2VpdmVkIHR5cGUgJHt0eXBlb2YgaW5wdXR9ICgke2lucHV0fSlgKTtcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kaW5nID8gQnVmZmVyLmZyb20oaW5wdXQsIGVuY29kaW5nKSA6IEJ1ZmZlci5mcm9tKGlucHV0KTtcbn07XG4iLCJleHBvcnQgY29uc3QgZnJvbVV0ZjggPSAoaW5wdXQpID0+IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShpbnB1dCk7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9mcm9tVXRmOFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdG9VaW50OEFycmF5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90b1V0ZjhcIjtcbiIsImltcG9ydCB7IGZyb21VdGY4IH0gZnJvbSBcIi4vZnJvbVV0ZjhcIjtcbmV4cG9ydCBjb25zdCB0b1VpbnQ4QXJyYXkgPSAoZGF0YSkgPT4ge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZnJvbVV0ZjgoZGF0YSk7XG4gICAgfVxuICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCAvIFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHRvVXRmOCA9IChpbnB1dCkgPT4gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKGlucHV0KTtcbiIsImV4cG9ydCBjb25zdCBmcm9tVXRmOCA9IChpbnB1dCkgPT4gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGlucHV0KTtcbiIsImV4cG9ydCAqIGZyb20gXCIuL2Zyb21VdGY4XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90b1VpbnQ4QXJyYXlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RvVXRmOFwiO1xuIiwiaW1wb3J0IHsgZnJvbVV0ZjggfSBmcm9tIFwiLi9mcm9tVXRmOFwiO1xuZXhwb3J0IGNvbnN0IHRvVWludDhBcnJheSA9IChkYXRhKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBmcm9tVXRmOChkYXRhKTtcbiAgICB9XG4gICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoIC8gVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhKTtcbn07XG4iLCJleHBvcnQgY29uc3QgdG9VdGY4ID0gKGlucHV0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGlucHV0LmJ5dGVPZmZzZXQgIT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIGlucHV0LmJ5dGVMZW5ndGggIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQHNtaXRoeS91dGlsLXV0Zjg6IHRvVXRmOCBlbmNvZGVyIGZ1bmN0aW9uIG9ubHkgYWNjZXB0cyBzdHJpbmcgfCBVaW50OEFycmF5LlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcihcInV0Zi04XCIpLmRlY29kZShpbnB1dCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgdmFyIGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aCkpKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG5cbid1c2Ugc3RyaWN0J1xuXG5jb25zdCBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxuY29uc3QgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxuY29uc3QgY3VzdG9tSW5zcGVjdFN5bWJvbCA9XG4gICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2xbJ2ZvciddID09PSAnZnVuY3Rpb24nKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgID8gU3ltYm9sWydmb3InXSgnbm9kZWpzLnV0aWwuaW5zcGVjdC5jdXN0b20nKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgIDogbnVsbFxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gU2xvd0J1ZmZlclxuZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFUyA9IDUwXG5cbmNvbnN0IEtfTUFYX0xFTkdUSCA9IDB4N2ZmZmZmZmZcbmV4cG9ydHMua01heExlbmd0aCA9IEtfTUFYX0xFTkdUSFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBQcmludCB3YXJuaW5nIGFuZCByZWNvbW1lbmQgdXNpbmcgYGJ1ZmZlcmAgdjQueCB3aGljaCBoYXMgYW4gT2JqZWN0XG4gKiAgICAgICAgICAgICAgIGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBXZSByZXBvcnQgdGhhdCB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHR5cGVkIGFycmF5cyBpZiB0aGUgYXJlIG5vdCBzdWJjbGFzc2FibGVcbiAqIHVzaW5nIF9fcHJvdG9fXy4gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWBcbiAqIChTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOCkuIElFIDEwIGxhY2tzIHN1cHBvcnRcbiAqIGZvciBfX3Byb3RvX18gYW5kIGhhcyBhIGJ1Z2d5IHR5cGVkIGFycmF5IGltcGxlbWVudGF0aW9uLlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICBjb25zb2xlLmVycm9yKFxuICAgICdUaGlzIGJyb3dzZXIgbGFja3MgdHlwZWQgYXJyYXkgKFVpbnQ4QXJyYXkpIHN1cHBvcnQgd2hpY2ggaXMgcmVxdWlyZWQgYnkgJyArXG4gICAgJ2BidWZmZXJgIHY1LnguIFVzZSBgYnVmZmVyYCB2NC54IGlmIHlvdSByZXF1aXJlIG9sZCBicm93c2VyIHN1cHBvcnQuJ1xuICApXG59XG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgLy8gQ2FuIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkP1xuICB0cnkge1xuICAgIGNvbnN0IGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgY29uc3QgcHJvdG8gPSB7IGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfSB9XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHByb3RvLCBVaW50OEFycmF5LnByb3RvdHlwZSlcbiAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYXJyLCBwcm90bylcbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MlxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlci5wcm90b3R5cGUsICdwYXJlbnQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKHRoaXMpKSByZXR1cm4gdW5kZWZpbmVkXG4gICAgcmV0dXJuIHRoaXMuYnVmZmVyXG4gIH1cbn0pXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIucHJvdG90eXBlLCAnb2Zmc2V0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0aGlzKSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB0aGlzLmJ5dGVPZmZzZXRcbiAgfVxufSlcblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKGxlbmd0aCA+IEtfTUFYX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgXCInICsgbGVuZ3RoICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gIH1cbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgY29uc3QgYnVmID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYnVmLCBCdWZmZXIucHJvdG90eXBlKVxuICByZXR1cm4gYnVmXG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICAvLyBDb21tb24gY2FzZS5cbiAgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZ09yT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgJ1RoZSBcInN0cmluZ1wiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBzdHJpbmcuIFJlY2VpdmVkIHR5cGUgbnVtYmVyJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUoYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuZnVuY3Rpb24gZnJvbSAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmcm9tU3RyaW5nKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0KVxuICB9XG5cbiAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5Vmlldyh2YWx1ZSlcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCAnICtcbiAgICAgICdvciBBcnJheS1saWtlIE9iamVjdC4gUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB2YWx1ZSlcbiAgICApXG4gIH1cblxuICBpZiAoaXNJbnN0YW5jZSh2YWx1ZSwgQXJyYXlCdWZmZXIpIHx8XG4gICAgICAodmFsdWUgJiYgaXNJbnN0YW5jZSh2YWx1ZS5idWZmZXIsIEFycmF5QnVmZmVyKSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgKGlzSW5zdGFuY2UodmFsdWUsIFNoYXJlZEFycmF5QnVmZmVyKSB8fFxuICAgICAgKHZhbHVlICYmIGlzSW5zdGFuY2UodmFsdWUuYnVmZmVyLCBTaGFyZWRBcnJheUJ1ZmZlcikpKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG9mIHR5cGUgbnVtYmVyLiBSZWNlaXZlZCB0eXBlIG51bWJlcidcbiAgICApXG4gIH1cblxuICBjb25zdCB2YWx1ZU9mID0gdmFsdWUudmFsdWVPZiAmJiB2YWx1ZS52YWx1ZU9mKClcbiAgaWYgKHZhbHVlT2YgIT0gbnVsbCAmJiB2YWx1ZU9mICE9PSB2YWx1ZSkge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZU9mLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBjb25zdCBiID0gZnJvbU9iamVjdCh2YWx1ZSlcbiAgaWYgKGIpIHJldHVybiBiXG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1ByaW1pdGl2ZSAhPSBudWxsICYmXG4gICAgICB0eXBlb2YgdmFsdWVbU3ltYm9sLnRvUHJpbWl0aXZlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZVtTeW1ib2wudG9QcmltaXRpdmVdKCdzdHJpbmcnKSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgJyArXG4gICAgJ29yIEFycmF5LWxpa2UgT2JqZWN0LiBSZWNlaXZlZCB0eXBlICcgKyAodHlwZW9mIHZhbHVlKVxuICApXG59XG5cbi8qKlxuICogRnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdG8gQnVmZmVyKGFyZywgZW5jb2RpbmcpIGJ1dCB0aHJvd3MgYSBUeXBlRXJyb3JcbiAqIGlmIHZhbHVlIGlzIGEgbnVtYmVyLlxuICogQnVmZmVyLmZyb20oc3RyWywgZW5jb2RpbmddKVxuICogQnVmZmVyLmZyb20oYXJyYXkpXG4gKiBCdWZmZXIuZnJvbShidWZmZXIpXG4gKiBCdWZmZXIuZnJvbShhcnJheUJ1ZmZlclssIGJ5dGVPZmZzZXRbLCBsZW5ndGhdXSlcbiAqKi9cbkJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGZyb20odmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuLy8gTm90ZTogQ2hhbmdlIHByb3RvdHlwZSAqYWZ0ZXIqIEJ1ZmZlci5mcm9tIGlzIGRlZmluZWQgdG8gd29ya2Fyb3VuZCBDaHJvbWUgYnVnOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvcHVsbC8xNDhcbk9iamVjdC5zZXRQcm90b3R5cGVPZihCdWZmZXIucHJvdG90eXBlLCBVaW50OEFycmF5LnByb3RvdHlwZSlcbk9iamVjdC5zZXRQcm90b3R5cGVPZihCdWZmZXIsIFVpbnQ4QXJyYXkpXG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyBzaXplICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcInNpemVcIicpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcihzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlIChzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcihzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIGxldCBidWYgPSBjcmVhdGVCdWZmZXIobGVuZ3RoKVxuXG4gIGNvbnN0IGFjdHVhbCA9IGJ1Zi53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgYnVmID0gYnVmLnNsaWNlKDAsIGFjdHVhbClcbiAgfVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAoYXJyYXkpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIGNvbnN0IGJ1ZiA9IGNyZWF0ZUJ1ZmZlcihsZW5ndGgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBidWZbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5VmlldyAoYXJyYXlWaWV3KSB7XG4gIGlmIChpc0luc3RhbmNlKGFycmF5VmlldywgVWludDhBcnJheSkpIHtcbiAgICBjb25zdCBjb3B5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlWaWV3KVxuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIoY29weS5idWZmZXIsIGNvcHkuYnl0ZU9mZnNldCwgY29weS5ieXRlTGVuZ3RoKVxuICB9XG4gIHJldHVybiBmcm9tQXJyYXlMaWtlKGFycmF5Vmlldylcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyIChhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcIm9mZnNldFwiIGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wibGVuZ3RoXCIgaXMgb3V0c2lkZSBvZiBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGxldCBidWZcbiAgaWYgKGJ5dGVPZmZzZXQgPT09IHVuZGVmaW5lZCAmJiBsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihidWYsIEJ1ZmZlci5wcm90b3R5cGUpXG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5mdW5jdGlvbiBmcm9tT2JqZWN0IChvYmopIHtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB7XG4gICAgY29uc3QgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICBjb25zdCBidWYgPSBjcmVhdGVCdWZmZXIobGVuKVxuXG4gICAgaWYgKGJ1Zi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBidWZcbiAgICB9XG5cbiAgICBvYmouY29weShidWYsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gYnVmXG4gIH1cblxuICBpZiAob2JqLmxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBudW1iZXJJc05hTihvYmoubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcigwKVxuICAgIH1cbiAgICByZXR1cm4gZnJvbUFycmF5TGlrZShvYmopXG4gIH1cblxuICBpZiAob2JqLnR5cGUgPT09ICdCdWZmZXInICYmIEFycmF5LmlzQXJyYXkob2JqLmRhdGEpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2Uob2JqLmRhdGEpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tlZCAobGVuZ3RoKSB7XG4gIC8vIE5vdGU6IGNhbm5vdCB1c2UgYGxlbmd0aCA8IEtfTUFYX0xFTkdUSGAgaGVyZSBiZWNhdXNlIHRoYXQgZmFpbHMgd2hlblxuICAvLyBsZW5ndGggaXMgTmFOICh3aGljaCBpcyBvdGhlcndpc2UgY29lcmNlZCB0byB6ZXJvLilcbiAgaWYgKGxlbmd0aCA+PSBLX01BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byBhbGxvY2F0ZSBCdWZmZXIgbGFyZ2VyIHRoYW4gbWF4aW11bSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2l6ZTogMHgnICsgS19NQVhfTEVOR1RILnRvU3RyaW5nKDE2KSArICcgYnl0ZXMnKVxuICB9XG4gIHJldHVybiBsZW5ndGggfCAwXG59XG5cbmZ1bmN0aW9uIFNsb3dCdWZmZXIgKGxlbmd0aCkge1xuICBpZiAoK2xlbmd0aCAhPSBsZW5ndGgpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBlcWVxZXFcbiAgICBsZW5ndGggPSAwXG4gIH1cbiAgcmV0dXJuIEJ1ZmZlci5hbGxvYygrbGVuZ3RoKVxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiBpc0J1ZmZlciAoYikge1xuICByZXR1cm4gYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyID09PSB0cnVlICYmXG4gICAgYiAhPT0gQnVmZmVyLnByb3RvdHlwZSAvLyBzbyBCdWZmZXIuaXNCdWZmZXIoQnVmZmVyLnByb3RvdHlwZSkgd2lsbCBiZSBmYWxzZVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKGEsIGIpIHtcbiAgaWYgKGlzSW5zdGFuY2UoYSwgVWludDhBcnJheSkpIGEgPSBCdWZmZXIuZnJvbShhLCBhLm9mZnNldCwgYS5ieXRlTGVuZ3RoKVxuICBpZiAoaXNJbnN0YW5jZShiLCBVaW50OEFycmF5KSkgYiA9IEJ1ZmZlci5mcm9tKGIsIGIub2Zmc2V0LCBiLmJ5dGVMZW5ndGgpXG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcImJ1ZjFcIiwgXCJidWYyXCIgYXJndW1lbnRzIG11c3QgYmUgb25lIG9mIHR5cGUgQnVmZmVyIG9yIFVpbnQ4QXJyYXknXG4gICAgKVxuICB9XG5cbiAgaWYgKGEgPT09IGIpIHJldHVybiAwXG5cbiAgbGV0IHggPSBhLmxlbmd0aFxuICBsZXQgeSA9IGIubGVuZ3RoXG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IE1hdGgubWluKHgsIHkpOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAoYVtpXSAhPT0gYltpXSkge1xuICAgICAgeCA9IGFbaV1cbiAgICAgIHkgPSBiW2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuQnVmZmVyLmlzRW5jb2RpbmcgPSBmdW5jdGlvbiBpc0VuY29kaW5nIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdsYXRpbjEnOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIGNvbmNhdCAobGlzdCwgbGVuZ3RoKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gIH1cblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKDApXG4gIH1cblxuICBsZXQgaVxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIGxldCBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgbGV0IGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoaXNJbnN0YW5jZShidWYsIFVpbnQ4QXJyYXkpKSB7XG4gICAgICBpZiAocG9zICsgYnVmLmxlbmd0aCA+IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICAgICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgYnVmID0gQnVmZmVyLmZyb20oYnVmKVxuICAgICAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgICAgIGJ1ZmZlcixcbiAgICAgICAgICBidWYsXG4gICAgICAgICAgcG9zXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgfVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IGlzSW5zdGFuY2Uoc3RyaW5nLCBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInN0cmluZ1wiIGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIG9yIEFycmF5QnVmZmVyLiAnICtcbiAgICAgICdSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2Ygc3RyaW5nXG4gICAgKVxuICB9XG5cbiAgY29uc3QgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBjb25zdCBtdXN0TWF0Y2ggPSAoYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdID09PSB0cnVlKVxuICBpZiAoIW11c3RNYXRjaCAmJiBsZW4gPT09IDApIHJldHVybiAwXG5cbiAgLy8gVXNlIGEgZm9yIGxvb3AgdG8gYXZvaWQgcmVjdXJzaW9uXG4gIGxldCBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxlblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHtcbiAgICAgICAgICByZXR1cm4gbXVzdE1hdGNoID8gLTEgOiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICB9XG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcblxuZnVuY3Rpb24gc2xvd1RvU3RyaW5nIChlbmNvZGluZywgc3RhcnQsIGVuZCkge1xuICBsZXQgbG93ZXJlZENhc2UgPSBmYWxzZVxuXG4gIC8vIE5vIG5lZWQgdG8gdmVyaWZ5IHRoYXQgXCJ0aGlzLmxlbmd0aCA8PSBNQVhfVUlOVDMyXCIgc2luY2UgaXQncyBhIHJlYWQtb25seVxuICAvLyBwcm9wZXJ0eSBvZiBhIHR5cGVkIGFycmF5LlxuXG4gIC8vIFRoaXMgYmVoYXZlcyBuZWl0aGVyIGxpa2UgU3RyaW5nIG5vciBVaW50OEFycmF5IGluIHRoYXQgd2Ugc2V0IHN0YXJ0L2VuZFxuICAvLyB0byB0aGVpciB1cHBlci9sb3dlciBib3VuZHMgaWYgdGhlIHZhbHVlIHBhc3NlZCBpcyBvdXQgb2YgcmFuZ2UuXG4gIC8vIHVuZGVmaW5lZCBpcyBoYW5kbGVkIHNwZWNpYWxseSBhcyBwZXIgRUNNQS0yNjIgNnRoIEVkaXRpb24sXG4gIC8vIFNlY3Rpb24gMTMuMy4zLjcgUnVudGltZSBTZW1hbnRpY3M6IEtleWVkQmluZGluZ0luaXRpYWxpemF0aW9uLlxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCB8fCBzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICAvLyBSZXR1cm4gZWFybHkgaWYgc3RhcnQgPiB0aGlzLmxlbmd0aC4gRG9uZSBoZXJlIHRvIHByZXZlbnQgcG90ZW50aWFsIHVpbnQzMlxuICAvLyBjb2VyY2lvbiBmYWlsIGJlbG93LlxuICBpZiAoc3RhcnQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChlbmQgPD0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gRm9yY2UgY29lcmNpb24gdG8gdWludDMyLiBUaGlzIHdpbGwgYWxzbyBjb2VyY2UgZmFsc2V5L05hTiB2YWx1ZXMgdG8gMC5cbiAgZW5kID4+Pj0gMFxuICBzdGFydCA+Pj49IDBcblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIChhbmQgdGhlIGBpcy1idWZmZXJgIG5wbSBwYWNrYWdlKVxuLy8gdG8gZGV0ZWN0IGEgQnVmZmVyIGluc3RhbmNlLiBJdCdzIG5vdCBwb3NzaWJsZSB0byB1c2UgYGluc3RhbmNlb2YgQnVmZmVyYFxuLy8gcmVsaWFibHkgaW4gYSBicm93c2VyaWZ5IGNvbnRleHQgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBtdWx0aXBsZSBkaWZmZXJlbnRcbi8vIGNvcGllcyBvZiB0aGUgJ2J1ZmZlcicgcGFja2FnZSBpbiB1c2UuIFRoaXMgbWV0aG9kIHdvcmtzIGV2ZW4gZm9yIEJ1ZmZlclxuLy8gaW5zdGFuY2VzIHRoYXQgd2VyZSBjcmVhdGVkIGZyb20gYW5vdGhlciBjb3B5IG9mIHRoZSBgYnVmZmVyYCBwYWNrYWdlLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMTU0XG5CdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlciA9IHRydWVcblxuZnVuY3Rpb24gc3dhcCAoYiwgbiwgbSkge1xuICBjb25zdCBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA0ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAzMi1iaXRzJylcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgMilcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXA2NCA9IGZ1bmN0aW9uIHN3YXA2NCAoKSB7XG4gIGNvbnN0IGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gJydcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHJldHVybiB1dGY4U2xpY2UodGhpcywgMCwgbGVuZ3RoKVxuICByZXR1cm4gc2xvd1RvU3RyaW5nLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZyA9IEJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmdcblxuQnVmZmVyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMgKGIpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICBpZiAodGhpcyA9PT0gYikgcmV0dXJuIHRydWVcbiAgcmV0dXJuIEJ1ZmZlci5jb21wYXJlKHRoaXMsIGIpID09PSAwXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5zcGVjdCA9IGZ1bmN0aW9uIGluc3BlY3QgKCkge1xuICBsZXQgc3RyID0gJydcbiAgY29uc3QgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLnJlcGxhY2UoLyguezJ9KS9nLCAnJDEgJykudHJpbSgpXG4gIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cbmlmIChjdXN0b21JbnNwZWN0U3ltYm9sKSB7XG4gIEJ1ZmZlci5wcm90b3R5cGVbY3VzdG9tSW5zcGVjdFN5bWJvbF0gPSBCdWZmZXIucHJvdG90eXBlLmluc3BlY3Rcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKGlzSW5zdGFuY2UodGFyZ2V0LCBVaW50OEFycmF5KSkge1xuICAgIHRhcmdldCA9IEJ1ZmZlci5mcm9tKHRhcmdldCwgdGFyZ2V0Lm9mZnNldCwgdGFyZ2V0LmJ5dGVMZW5ndGgpXG4gIH1cbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwidGFyZ2V0XCIgYXJndW1lbnQgbXVzdCBiZSBvbmUgb2YgdHlwZSBCdWZmZXIgb3IgVWludDhBcnJheS4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB0YXJnZXQpXG4gICAgKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgbGV0IHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIGxldCB5ID0gZW5kIC0gc3RhcnRcbiAgY29uc3QgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICBjb25zdCB0aGlzQ29weSA9IHRoaXMuc2xpY2UodGhpc1N0YXJ0LCB0aGlzRW5kKVxuICBjb25zdCB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAobnVtYmVySXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmICh0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbdmFsXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgbGV0IGluZGV4U2l6ZSA9IDFcbiAgbGV0IGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgbGV0IHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgbGV0IGlcbiAgaWYgKGRpcikge1xuICAgIGxldCBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgY29uc3QgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGxldCBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAobnVtYmVySXNOYU4ocGFyc2VkKSkgcmV0dXJuIGlcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBwYXJzZWRcbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiB1dGY4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCA+Pj4gMFxuICAgICAgaWYgKGVuY29kaW5nID09PSB1bmRlZmluZWQpIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgfSBlbHNlIHtcbiAgICAgIGVuY29kaW5nID0gbGVuZ3RoXG4gICAgICBsZW5ndGggPSB1bmRlZmluZWRcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCB8fCBsZW5ndGggPiByZW1haW5pbmcpIGxlbmd0aCA9IHJlbWFpbmluZ1xuXG4gIGlmICgoc3RyaW5nLmxlbmd0aCA+IDAgJiYgKGxlbmd0aCA8IDAgfHwgb2Zmc2V0IDwgMCkpIHx8IG9mZnNldCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzJylcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgbGV0IGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgLy8gV2FybmluZzogbWF4TGVuZ3RoIG5vdCB0YWtlbiBpbnRvIGFjY291bnQgaW4gYmFzZTY0V3JpdGVcbiAgICAgICAgcmV0dXJuIGJhc2U2NFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1Y3MyV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKCcnICsgZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gdG9KU09OICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuICBjb25zdCByZXMgPSBbXVxuXG4gIGxldCBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICBjb25zdCBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICBsZXQgY29kZVBvaW50ID0gbnVsbFxuICAgIGxldCBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpXG4gICAgICA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpXG4gICAgICAgICAgPyAzXG4gICAgICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRilcbiAgICAgICAgICAgICAgPyAyXG4gICAgICAgICAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgbGV0IHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxuY29uc3QgTUFYX0FSR1VNRU5UU19MRU5HVEggPSAweDEwMDBcblxuZnVuY3Rpb24gZGVjb2RlQ29kZVBvaW50c0FycmF5IChjb2RlUG9pbnRzKSB7XG4gIGNvbnN0IGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgbGV0IHJlcyA9ICcnXG4gIGxldCBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBsZXQgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgbGV0IHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIGxldCBvdXQgPSAnJ1xuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSBoZXhTbGljZUxvb2t1cFRhYmxlW2J1ZltpXV1cbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIGxldCByZXMgPSAnJ1xuICAvLyBJZiBieXRlcy5sZW5ndGggaXMgb2RkLCB0aGUgbGFzdCA4IGJpdHMgbXVzdCBiZSBpZ25vcmVkIChzYW1lIGFzIG5vZGUuanMpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoIC0gMTsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyAoYnl0ZXNbaSArIDFdICogMjU2KSlcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aFxuICBzdGFydCA9IH5+c3RhcnRcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB+fmVuZFxuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCArPSBsZW5cbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgfSBlbHNlIGlmIChzdGFydCA+IGxlbikge1xuICAgIHN0YXJ0ID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5cbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMFxuICB9IGVsc2UgaWYgKGVuZCA+IGxlbikge1xuICAgIGVuZCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIGNvbnN0IG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2VcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKG5ld0J1ZiwgQnVmZmVyLnByb3RvdHlwZSlcblxuICByZXR1cm4gbmV3QnVmXG59XG5cbi8qXG4gKiBOZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IGJ1ZmZlciBpc24ndCB0cnlpbmcgdG8gd3JpdGUgb3V0IG9mIGJvdW5kcy5cbiAqL1xuZnVuY3Rpb24gY2hlY2tPZmZzZXQgKG9mZnNldCwgZXh0LCBsZW5ndGgpIHtcbiAgaWYgKChvZmZzZXQgJSAxKSAhPT0gMCB8fCBvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RyeWluZyB0byBhY2Nlc3MgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50TEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICBsZXQgdmFsID0gdGhpc1tvZmZzZXRdXG4gIGxldCBtdWwgPSAxXG4gIGxldCBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnRCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50QkUgPSBmdW5jdGlvbiByZWFkVUludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIGxldCB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgbGV0IG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50OCA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MTZMRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQxNkJFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkJFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDMyTEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MzJCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSAqIDB4MTAwMDAwMCkgK1xuICAgICgodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICB0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRCaWdVSW50NjRMRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiByZWFkQmlnVUludDY0TEUgKG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgY29uc3QgZmlyc3QgPSB0aGlzW29mZnNldF1cbiAgY29uc3QgbGFzdCA9IHRoaXNbb2Zmc2V0ICsgN11cbiAgaWYgKGZpcnN0ID09PSB1bmRlZmluZWQgfHwgbGFzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCB0aGlzLmxlbmd0aCAtIDgpXG4gIH1cblxuICBjb25zdCBsbyA9IGZpcnN0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMjRcblxuICBjb25zdCBoaSA9IHRoaXNbKytvZmZzZXRdICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICBsYXN0ICogMiAqKiAyNFxuXG4gIHJldHVybiBCaWdJbnQobG8pICsgKEJpZ0ludChoaSkgPDwgQmlnSW50KDMyKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEJpZ1VJbnQ2NEJFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHJlYWRCaWdVSW50NjRCRSAob2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBjb25zdCBmaXJzdCA9IHRoaXNbb2Zmc2V0XVxuICBjb25zdCBsYXN0ID0gdGhpc1tvZmZzZXQgKyA3XVxuICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCB8fCBsYXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIHRoaXMubGVuZ3RoIC0gOClcbiAgfVxuXG4gIGNvbnN0IGhpID0gZmlyc3QgKiAyICoqIDI0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XVxuXG4gIGNvbnN0IGxvID0gdGhpc1srK29mZnNldF0gKiAyICoqIDI0ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICBsYXN0XG5cbiAgcmV0dXJuIChCaWdJbnQoaGkpIDw8IEJpZ0ludCgzMikpICsgQmlnSW50KGxvKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgbGV0IHZhbCA9IHRoaXNbb2Zmc2V0XVxuICBsZXQgbXVsID0gMVxuICBsZXQgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIGxldCBpID0gYnl0ZUxlbmd0aFxuICBsZXQgbXVsID0gMVxuICBsZXQgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWldXG4gIHdoaWxlIChpID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0taV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4ID0gZnVuY3Rpb24gcmVhZEludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgY29uc3QgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIGNvbnN0IHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDNdKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRCaWdJbnQ2NExFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHJlYWRCaWdJbnQ2NExFIChvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGNvbnN0IGZpcnN0ID0gdGhpc1tvZmZzZXRdXG4gIGNvbnN0IGxhc3QgPSB0aGlzW29mZnNldCArIDddXG4gIGlmIChmaXJzdCA9PT0gdW5kZWZpbmVkIHx8IGxhc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgdGhpcy5sZW5ndGggLSA4KVxuICB9XG5cbiAgY29uc3QgdmFsID0gdGhpc1tvZmZzZXQgKyA0XSArXG4gICAgdGhpc1tvZmZzZXQgKyA1XSAqIDIgKiogOCArXG4gICAgdGhpc1tvZmZzZXQgKyA2XSAqIDIgKiogMTYgK1xuICAgIChsYXN0IDw8IDI0KSAvLyBPdmVyZmxvd1xuXG4gIHJldHVybiAoQmlnSW50KHZhbCkgPDwgQmlnSW50KDMyKSkgK1xuICAgIEJpZ0ludChmaXJzdCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDI0KVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkQmlnSW50NjRCRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiByZWFkQmlnSW50NjRCRSAob2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBjb25zdCBmaXJzdCA9IHRoaXNbb2Zmc2V0XVxuICBjb25zdCBsYXN0ID0gdGhpc1tvZmZzZXQgKyA3XVxuICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCB8fCBsYXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIHRoaXMubGVuZ3RoIC0gOClcbiAgfVxuXG4gIGNvbnN0IHZhbCA9IChmaXJzdCA8PCAyNCkgKyAvLyBPdmVyZmxvd1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdXG5cbiAgcmV0dXJuIChCaWdJbnQodmFsKSA8PCBCaWdJbnQoMzIpKSArXG4gICAgQmlnSW50KHRoaXNbKytvZmZzZXRdICogMiAqKiAyNCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgbGFzdClcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gcmVhZEZsb2F0QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDUyLCA4KVxufVxuXG5mdW5jdGlvbiBjaGVja0ludCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiYnVmZmVyXCIgYXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlciBpbnN0YW5jZScpXG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludExFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIGxldCBtdWwgPSAxXG4gIGxldCBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50QkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNvbnN0IG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgbGV0IGkgPSBieXRlTGVuZ3RoIC0gMVxuICBsZXQgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQ4ID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDE2TEUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQxNkJFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MzJMRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDMyQkUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gd3J0QmlnVUludDY0TEUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbWluLCBtYXgpIHtcbiAgY2hlY2tJbnRCSSh2YWx1ZSwgbWluLCBtYXgsIGJ1Ziwgb2Zmc2V0LCA3KVxuXG4gIGxldCBsbyA9IE51bWJlcih2YWx1ZSAmIEJpZ0ludCgweGZmZmZmZmZmKSlcbiAgYnVmW29mZnNldCsrXSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0KytdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGxvXG4gIGxldCBoaSA9IE51bWJlcih2YWx1ZSA+PiBCaWdJbnQoMzIpICYgQmlnSW50KDB4ZmZmZmZmZmYpKVxuICBidWZbb2Zmc2V0KytdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0KytdID0gaGlcbiAgcmV0dXJuIG9mZnNldFxufVxuXG5mdW5jdGlvbiB3cnRCaWdVSW50NjRCRSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBtaW4sIG1heCkge1xuICBjaGVja0ludEJJKHZhbHVlLCBtaW4sIG1heCwgYnVmLCBvZmZzZXQsIDcpXG5cbiAgbGV0IGxvID0gTnVtYmVyKHZhbHVlICYgQmlnSW50KDB4ZmZmZmZmZmYpKVxuICBidWZbb2Zmc2V0ICsgN10gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCArIDZdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQgKyA1XSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0ICsgNF0gPSBsb1xuICBsZXQgaGkgPSBOdW1iZXIodmFsdWUgPj4gQmlnSW50KDMyKSAmIEJpZ0ludCgweGZmZmZmZmZmKSlcbiAgYnVmW29mZnNldCArIDNdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQgKyAyXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0ICsgMV0gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldF0gPSBoaVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlQmlnVUludDY0TEUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gd3JpdGVCaWdVSW50NjRMRSAodmFsdWUsIG9mZnNldCA9IDApIHtcbiAgcmV0dXJuIHdydEJpZ1VJbnQ2NExFKHRoaXMsIHZhbHVlLCBvZmZzZXQsIEJpZ0ludCgwKSwgQmlnSW50KCcweGZmZmZmZmZmZmZmZmZmZmYnKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVCaWdVSW50NjRCRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiB3cml0ZUJpZ1VJbnQ2NEJFICh2YWx1ZSwgb2Zmc2V0ID0gMCkge1xuICByZXR1cm4gd3J0QmlnVUludDY0QkUodGhpcywgdmFsdWUsIG9mZnNldCwgQmlnSW50KDApLCBCaWdJbnQoJzB4ZmZmZmZmZmZmZmZmZmZmZicpKVxufSlcblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludExFID0gZnVuY3Rpb24gd3JpdGVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBsaW1pdCA9IE1hdGgucG93KDIsICg4ICogYnl0ZUxlbmd0aCkgLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICBsZXQgaSA9IDBcbiAgbGV0IG11bCA9IDFcbiAgbGV0IHN1YiA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpIC0gMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFID0gZnVuY3Rpb24gd3JpdGVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBsaW1pdCA9IE1hdGgucG93KDIsICg4ICogYnl0ZUxlbmd0aCkgLSAxKVxuXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbGltaXQgLSAxLCAtbGltaXQpXG4gIH1cblxuICBsZXQgaSA9IGJ5dGVMZW5ndGggLSAxXG4gIGxldCBtdWwgPSAxXG4gIGxldCBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0ICsgaV0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKC0taSA+PSAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgaWYgKHZhbHVlIDwgMCAmJiBzdWIgPT09IDAgJiYgdGhpc1tvZmZzZXQgKyBpICsgMV0gIT09IDApIHtcbiAgICAgIHN1YiA9IDFcbiAgICB9XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICgodmFsdWUgLyBtdWwpID4+IDApIC0gc3ViICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDggPSBmdW5jdGlvbiB3cml0ZUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZUludDMyTEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlQmlnSW50NjRMRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiB3cml0ZUJpZ0ludDY0TEUgKHZhbHVlLCBvZmZzZXQgPSAwKSB7XG4gIHJldHVybiB3cnRCaWdVSW50NjRMRSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAtQmlnSW50KCcweDgwMDAwMDAwMDAwMDAwMDAnKSwgQmlnSW50KCcweDdmZmZmZmZmZmZmZmZmZmYnKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVCaWdJbnQ2NEJFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHdyaXRlQmlnSW50NjRCRSAodmFsdWUsIG9mZnNldCA9IDApIHtcbiAgcmV0dXJuIHdydEJpZ1VJbnQ2NEJFKHRoaXMsIHZhbHVlLCBvZmZzZXQsIC1CaWdJbnQoJzB4ODAwMDAwMDAwMDAwMDAwMCcpLCBCaWdJbnQoJzB4N2ZmZmZmZmZmZmZmZmZmZicpKVxufSlcblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gd3JpdGVGbG9hdEJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRG91YmxlIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc2hvdWxkIGJlIGEgQnVmZmVyJylcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChlbmQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCA8IGVuZCAtIHN0YXJ0KSB7XG4gICAgZW5kID0gdGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0ICsgc3RhcnRcbiAgfVxuXG4gIGNvbnN0IGxlbiA9IGVuZCAtIHN0YXJ0XG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFVzZSBidWlsdC1pbiB3aGVuIGF2YWlsYWJsZSwgbWlzc2luZyBmcm9tIElFMTFcbiAgICB0aGlzLmNvcHlXaXRoaW4odGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpXG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpLFxuICAgICAgdGFyZ2V0U3RhcnRcbiAgICApXG4gIH1cblxuICByZXR1cm4gbGVuXG59XG5cbi8vIFVzYWdlOlxuLy8gICAgYnVmZmVyLmZpbGwobnVtYmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChidWZmZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKHN0cmluZ1ssIG9mZnNldFssIGVuZF1dWywgZW5jb2RpbmddKVxuQnVmZmVyLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gZmlsbCAodmFsLCBzdGFydCwgZW5kLCBlbmNvZGluZykge1xuICAvLyBIYW5kbGUgc3RyaW5nIGNhc2VzOlxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodHlwZW9mIHN0YXJ0ID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBzdGFydFxuICAgICAgc3RhcnQgPSAwXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gZW5kXG4gICAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICAgIH1cbiAgICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmNvZGluZyBtdXN0IGJlIGEgc3RyaW5nJylcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycgJiYgIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgIH1cbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoKGVuY29kaW5nID09PSAndXRmOCcgJiYgY29kZSA8IDEyOCkgfHxcbiAgICAgICAgICBlbmNvZGluZyA9PT0gJ2xhdGluMScpIHtcbiAgICAgICAgLy8gRmFzdCBwYXRoOiBJZiBgdmFsYCBmaXRzIGludG8gYSBzaW5nbGUgYnl0ZSwgdXNlIHRoYXQgbnVtZXJpYyB2YWx1ZS5cbiAgICAgICAgdmFsID0gY29kZVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDI1NVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xuICAgIHZhbCA9IE51bWJlcih2YWwpXG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgbGV0IGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICAgIGNvbnN0IGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSB2YWx1ZSBcIicgKyB2YWwgK1xuICAgICAgICAnXCIgaXMgaW52YWxpZCBmb3IgYXJndW1lbnQgXCJ2YWx1ZVwiJylcbiAgICB9XG4gICAgZm9yIChpID0gMDsgaSA8IGVuZCAtIHN0YXJ0OyArK2kpIHtcbiAgICAgIHRoaXNbaSArIHN0YXJ0XSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gQ1VTVE9NIEVSUk9SU1xuLy8gPT09PT09PT09PT09PVxuXG4vLyBTaW1wbGlmaWVkIHZlcnNpb25zIGZyb20gTm9kZSwgY2hhbmdlZCBmb3IgQnVmZmVyLW9ubHkgdXNhZ2VcbmNvbnN0IGVycm9ycyA9IHt9XG5mdW5jdGlvbiBFIChzeW0sIGdldE1lc3NhZ2UsIEJhc2UpIHtcbiAgZXJyb3JzW3N5bV0gPSBjbGFzcyBOb2RlRXJyb3IgZXh0ZW5kcyBCYXNlIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICBzdXBlcigpXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbWVzc2FnZScsIHtcbiAgICAgICAgdmFsdWU6IGdldE1lc3NhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSlcblxuICAgICAgLy8gQWRkIHRoZSBlcnJvciBjb2RlIHRvIHRoZSBuYW1lIHRvIGluY2x1ZGUgaXQgaW4gdGhlIHN0YWNrIHRyYWNlLlxuICAgICAgdGhpcy5uYW1lID0gYCR7dGhpcy5uYW1lfSBbJHtzeW19XWBcbiAgICAgIC8vIEFjY2VzcyB0aGUgc3RhY2sgdG8gZ2VuZXJhdGUgdGhlIGVycm9yIG1lc3NhZ2UgaW5jbHVkaW5nIHRoZSBlcnJvciBjb2RlXG4gICAgICAvLyBmcm9tIHRoZSBuYW1lLlxuICAgICAgdGhpcy5zdGFjayAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgLy8gUmVzZXQgdGhlIG5hbWUgdG8gdGhlIGFjdHVhbCBuYW1lLlxuICAgICAgZGVsZXRlIHRoaXMubmFtZVxuICAgIH1cblxuICAgIGdldCBjb2RlICgpIHtcbiAgICAgIHJldHVybiBzeW1cbiAgICB9XG5cbiAgICBzZXQgY29kZSAodmFsdWUpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnY29kZScsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdG9TdHJpbmcgKCkge1xuICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gWyR7c3ltfV06ICR7dGhpcy5tZXNzYWdlfWBcbiAgICB9XG4gIH1cbn1cblxuRSgnRVJSX0JVRkZFUl9PVVRfT0ZfQk9VTkRTJyxcbiAgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuIGAke25hbWV9IGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kc2BcbiAgICB9XG5cbiAgICByZXR1cm4gJ0F0dGVtcHQgdG8gYWNjZXNzIG1lbW9yeSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnXG4gIH0sIFJhbmdlRXJyb3IpXG5FKCdFUlJfSU5WQUxJRF9BUkdfVFlQRScsXG4gIGZ1bmN0aW9uIChuYW1lLCBhY3R1YWwpIHtcbiAgICByZXR1cm4gYFRoZSBcIiR7bmFtZX1cIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgbnVtYmVyLiBSZWNlaXZlZCB0eXBlICR7dHlwZW9mIGFjdHVhbH1gXG4gIH0sIFR5cGVFcnJvcilcbkUoJ0VSUl9PVVRfT0ZfUkFOR0UnLFxuICBmdW5jdGlvbiAoc3RyLCByYW5nZSwgaW5wdXQpIHtcbiAgICBsZXQgbXNnID0gYFRoZSB2YWx1ZSBvZiBcIiR7c3RyfVwiIGlzIG91dCBvZiByYW5nZS5gXG4gICAgbGV0IHJlY2VpdmVkID0gaW5wdXRcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihpbnB1dCkgJiYgTWF0aC5hYnMoaW5wdXQpID4gMiAqKiAzMikge1xuICAgICAgcmVjZWl2ZWQgPSBhZGROdW1lcmljYWxTZXBhcmF0b3IoU3RyaW5nKGlucHV0KSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ2JpZ2ludCcpIHtcbiAgICAgIHJlY2VpdmVkID0gU3RyaW5nKGlucHV0KVxuICAgICAgaWYgKGlucHV0ID4gQmlnSW50KDIpICoqIEJpZ0ludCgzMikgfHwgaW5wdXQgPCAtKEJpZ0ludCgyKSAqKiBCaWdJbnQoMzIpKSkge1xuICAgICAgICByZWNlaXZlZCA9IGFkZE51bWVyaWNhbFNlcGFyYXRvcihyZWNlaXZlZClcbiAgICAgIH1cbiAgICAgIHJlY2VpdmVkICs9ICduJ1xuICAgIH1cbiAgICBtc2cgKz0gYCBJdCBtdXN0IGJlICR7cmFuZ2V9LiBSZWNlaXZlZCAke3JlY2VpdmVkfWBcbiAgICByZXR1cm4gbXNnXG4gIH0sIFJhbmdlRXJyb3IpXG5cbmZ1bmN0aW9uIGFkZE51bWVyaWNhbFNlcGFyYXRvciAodmFsKSB7XG4gIGxldCByZXMgPSAnJ1xuICBsZXQgaSA9IHZhbC5sZW5ndGhcbiAgY29uc3Qgc3RhcnQgPSB2YWxbMF0gPT09ICctJyA/IDEgOiAwXG4gIGZvciAoOyBpID49IHN0YXJ0ICsgNDsgaSAtPSAzKSB7XG4gICAgcmVzID0gYF8ke3ZhbC5zbGljZShpIC0gMywgaSl9JHtyZXN9YFxuICB9XG4gIHJldHVybiBgJHt2YWwuc2xpY2UoMCwgaSl9JHtyZXN9YFxufVxuXG4vLyBDSEVDSyBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBjaGVja0JvdW5kcyAoYnVmLCBvZmZzZXQsIGJ5dGVMZW5ndGgpIHtcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgaWYgKGJ1ZltvZmZzZXRdID09PSB1bmRlZmluZWQgfHwgYnVmW29mZnNldCArIGJ5dGVMZW5ndGhdID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIGJ1Zi5sZW5ndGggLSAoYnl0ZUxlbmd0aCArIDEpKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50QkkgKHZhbHVlLCBtaW4sIG1heCwgYnVmLCBvZmZzZXQsIGJ5dGVMZW5ndGgpIHtcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB7XG4gICAgY29uc3QgbiA9IHR5cGVvZiBtaW4gPT09ICdiaWdpbnQnID8gJ24nIDogJydcbiAgICBsZXQgcmFuZ2VcbiAgICBpZiAoYnl0ZUxlbmd0aCA+IDMpIHtcbiAgICAgIGlmIChtaW4gPT09IDAgfHwgbWluID09PSBCaWdJbnQoMCkpIHtcbiAgICAgICAgcmFuZ2UgPSBgPj0gMCR7bn0gYW5kIDwgMiR7bn0gKiogJHsoYnl0ZUxlbmd0aCArIDEpICogOH0ke259YFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmFuZ2UgPSBgPj0gLSgyJHtufSAqKiAkeyhieXRlTGVuZ3RoICsgMSkgKiA4IC0gMX0ke259KSBhbmQgPCAyICoqIGAgK1xuICAgICAgICAgICAgICAgIGAkeyhieXRlTGVuZ3RoICsgMSkgKiA4IC0gMX0ke259YFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByYW5nZSA9IGA+PSAke21pbn0ke259IGFuZCA8PSAke21heH0ke259YFxuICAgIH1cbiAgICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9PVVRfT0ZfUkFOR0UoJ3ZhbHVlJywgcmFuZ2UsIHZhbHVlKVxuICB9XG4gIGNoZWNrQm91bmRzKGJ1Ziwgb2Zmc2V0LCBieXRlTGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU51bWJlciAodmFsdWUsIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9JTlZBTElEX0FSR19UWVBFKG5hbWUsICdudW1iZXInLCB2YWx1ZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBib3VuZHNFcnJvciAodmFsdWUsIGxlbmd0aCwgdHlwZSkge1xuICBpZiAoTWF0aC5mbG9vcih2YWx1ZSkgIT09IHZhbHVlKSB7XG4gICAgdmFsaWRhdGVOdW1iZXIodmFsdWUsIHR5cGUpXG4gICAgdGhyb3cgbmV3IGVycm9ycy5FUlJfT1VUX09GX1JBTkdFKHR5cGUgfHwgJ29mZnNldCcsICdhbiBpbnRlZ2VyJywgdmFsdWUpXG4gIH1cblxuICBpZiAobGVuZ3RoIDwgMCkge1xuICAgIHRocm93IG5ldyBlcnJvcnMuRVJSX0JVRkZFUl9PVVRfT0ZfQk9VTkRTKClcbiAgfVxuXG4gIHRocm93IG5ldyBlcnJvcnMuRVJSX09VVF9PRl9SQU5HRSh0eXBlIHx8ICdvZmZzZXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYD49ICR7dHlwZSA/IDEgOiAwfSBhbmQgPD0gJHtsZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlKVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbmNvbnN0IElOVkFMSURfQkFTRTY0X1JFID0gL1teKy8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgdGFrZXMgZXF1YWwgc2lnbnMgYXMgZW5kIG9mIHRoZSBCYXNlNjQgZW5jb2RpbmdcbiAgc3RyID0gc3RyLnNwbGl0KCc9JylbMF1cbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0ci50cmltKCkucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cmluZywgdW5pdHMpIHtcbiAgdW5pdHMgPSB1bml0cyB8fCBJbmZpbml0eVxuICBsZXQgY29kZVBvaW50XG4gIGNvbnN0IGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgbGV0IGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIGNvbnN0IGJ5dGVzID0gW11cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgY29uc3QgYnl0ZUFycmF5ID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyLCB1bml0cykge1xuICBsZXQgYywgaGksIGxvXG4gIGNvbnN0IGJ5dGVBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgbGV0IGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbi8vIEFycmF5QnVmZmVyIG9yIFVpbnQ4QXJyYXkgb2JqZWN0cyBmcm9tIG90aGVyIGNvbnRleHRzIChpLmUuIGlmcmFtZXMpIGRvIG5vdCBwYXNzXG4vLyB0aGUgYGluc3RhbmNlb2ZgIGNoZWNrIGJ1dCB0aGV5IHNob3VsZCBiZSB0cmVhdGVkIGFzIG9mIHRoYXQgdHlwZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzE2NlxuZnVuY3Rpb24gaXNJbnN0YW5jZSAob2JqLCB0eXBlKSB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiB0eXBlIHx8XG4gICAgKG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICE9IG51bGwgJiZcbiAgICAgIG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSB0eXBlLm5hbWUpXG59XG5mdW5jdGlvbiBudW1iZXJJc05hTiAob2JqKSB7XG4gIC8vIEZvciBJRTExIHN1cHBvcnRcbiAgcmV0dXJuIG9iaiAhPT0gb2JqIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG5cbi8vIENyZWF0ZSBsb29rdXAgdGFibGUgZm9yIGB0b1N0cmluZygnaGV4JylgXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2lzc3Vlcy8yMTlcbmNvbnN0IGhleFNsaWNlTG9va3VwVGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5YWJjZGVmJ1xuICBjb25zdCB0YWJsZSA9IG5ldyBBcnJheSgyNTYpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgIGNvbnN0IGkxNiA9IGkgKiAxNlxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTY7ICsraikge1xuICAgICAgdGFibGVbaTE2ICsgal0gPSBhbHBoYWJldFtpXSArIGFscGhhYmV0W2pdXG4gICAgfVxuICB9XG4gIHJldHVybiB0YWJsZVxufSkoKVxuXG4vLyBSZXR1cm4gbm90IGZ1bmN0aW9uIHdpdGggRXJyb3IgaWYgQmlnSW50IG5vdCBzdXBwb3J0ZWRcbmZ1bmN0aW9uIGRlZmluZUJpZ0ludE1ldGhvZCAoZm4pIHtcbiAgcmV0dXJuIHR5cGVvZiBCaWdJbnQgPT09ICd1bmRlZmluZWQnID8gQnVmZmVyQmlnSW50Tm90RGVmaW5lZCA6IGZuXG59XG5cbmZ1bmN0aW9uIEJ1ZmZlckJpZ0ludE5vdERlZmluZWQgKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0JpZ0ludCBub3Qgc3VwcG9ydGVkJylcbn1cbiIsIi8qISBpZWVlNzU0LiBCU0QtMy1DbGF1c2UgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG5leHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wsIEl0ZXJhdG9yICovXG5cbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xuICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xuICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xuICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xuICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufVxuXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XG4gIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XG4gICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgfVxuICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XG4gIHZhciB0ID0ge307XG4gIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgdFtwXSA9IHNbcF07XG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgfVxuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19lc0RlY29yYXRlKGN0b3IsIGRlc2NyaXB0b3JJbiwgZGVjb3JhdG9ycywgY29udGV4dEluLCBpbml0aWFsaXplcnMsIGV4dHJhSW5pdGlhbGl6ZXJzKSB7XG4gIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxuICB2YXIga2luZCA9IGNvbnRleHRJbi5raW5kLCBrZXkgPSBraW5kID09PSBcImdldHRlclwiID8gXCJnZXRcIiA6IGtpbmQgPT09IFwic2V0dGVyXCIgPyBcInNldFwiIDogXCJ2YWx1ZVwiO1xuICB2YXIgdGFyZ2V0ID0gIWRlc2NyaXB0b3JJbiAmJiBjdG9yID8gY29udGV4dEluW1wic3RhdGljXCJdID8gY3RvciA6IGN0b3IucHJvdG90eXBlIDogbnVsbDtcbiAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XG4gIHZhciBfLCBkb25lID0gZmFsc2U7XG4gIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICB2YXIgY29udGV4dCA9IHt9O1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4pIGNvbnRleHRbcF0gPSBwID09PSBcImFjY2Vzc1wiID8ge30gOiBjb250ZXh0SW5bcF07XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbi5hY2Nlc3MpIGNvbnRleHQuYWNjZXNzW3BdID0gY29udGV4dEluLmFjY2Vzc1twXTtcbiAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XG4gICAgICB2YXIgcmVzdWx0ID0gKDAsIGRlY29yYXRvcnNbaV0pKGtpbmQgPT09IFwiYWNjZXNzb3JcIiA/IHsgZ2V0OiBkZXNjcmlwdG9yLmdldCwgc2V0OiBkZXNjcmlwdG9yLnNldCB9IDogZGVzY3JpcHRvcltrZXldLCBjb250ZXh0KTtcbiAgICAgIGlmIChraW5kID09PSBcImFjY2Vzc29yXCIpIHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgdHlwZW9mIHJlc3VsdCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZFwiKTtcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuZ2V0KSkgZGVzY3JpcHRvci5nZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmluaXQpKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xuICAgICAgICAgIGlmIChraW5kID09PSBcImZpZWxkXCIpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgICAgIGVsc2UgZGVzY3JpcHRvcltrZXldID0gXztcbiAgICAgIH1cbiAgfVxuICBpZiAodGFyZ2V0KSBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSwgZGVzY3JpcHRvcik7XG4gIGRvbmUgPSB0cnVlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcbiAgdmFyIHVzZVZhbHVlID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5pdGlhbGl6ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XG4gIH1cbiAgcmV0dXJuIHVzZVZhbHVlID8gdmFsdWUgOiB2b2lkIDA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19wcm9wS2V5KHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xuICBpZiAodHlwZW9mIG5hbWUgPT09IFwic3ltYm9sXCIpIG5hbWUgPSBuYW1lLmRlc2NyaXB0aW9uID8gXCJbXCIuY29uY2F0KG5hbWUuZGVzY3JpcHRpb24sIFwiXVwiKSA6IFwiXCI7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZiwgXCJuYW1lXCIsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcHJlZml4ID8gXCJcIi5jb25jYXQocHJlZml4LCBcIiBcIiwgbmFtZSkgOiBuYW1lIH0pO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcbiAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZyA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSk7XG4gIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICB9XG59XG5cbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XG4gIGlmICghZGVzYyB8fCAoXCJnZXRcIiBpbiBkZXNjID8gIW0uX19lc01vZHVsZSA6IGRlc2Mud3JpdGFibGUgfHwgZGVzYy5jb25maWd1cmFibGUpKSB7XG4gICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xuICB9XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgZGVzYyk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICBvW2syXSA9IG1ba107XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XG4gIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcbiAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgIH1cbiAgfTtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcbiAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICBpZiAoIW0pIHJldHVybiBvO1xuICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgdHJ5IHtcbiAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICB9XG4gIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICBmaW5hbGx5IHtcbiAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICB9XG4gICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgfVxuICByZXR1cm4gYXI7XG59XG5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xuICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcbiAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcbiAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgIHJba10gPSBhW2pdO1xuICByZXR1cm4gcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcbiAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xuICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XG4gIHJldHVybiBpID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEFzeW5jSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEFzeW5jSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSksIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiwgYXdhaXRSZXR1cm4pLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIGF3YWl0UmV0dXJuKGYpIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodikudGhlbihmLCByZWplY3QpOyB9OyB9XG4gIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpZiAoZ1tuXSkgeyBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyBpZiAoZikgaVtuXSA9IGYoaVtuXSk7IH0gfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxudmFyIG93bktleXMgPSBmdW5jdGlvbihvKSB7XG4gIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xuICAgIHZhciBhciA9IFtdO1xuICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XG4gICAgcmV0dXJuIGFyO1xuICB9O1xuICByZXR1cm4gb3duS2V5cyhvKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XG4gIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrID0gb3duS2V5cyhtb2QpLCBpID0gMDsgaSA8IGsubGVuZ3RoOyBpKyspIGlmIChrW2ldICE9PSBcImRlZmF1bHRcIikgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrW2ldKTtcbiAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcbiAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xuICBpZiAocmVjZWl2ZXIgPT09IG51bGwgfHwgKHR5cGVvZiByZWNlaXZlciAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgcmVjZWl2ZXIgIT09IFwiZnVuY3Rpb25cIikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgdXNlICdpbicgb3BlcmF0b3Igb24gbm9uLW9iamVjdFwiKTtcbiAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlKGVudiwgdmFsdWUsIGFzeW5jKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XG4gICAgdmFyIGRpc3Bvc2UsIGlubmVyO1xuICAgIGlmIChhc3luYykge1xuICAgICAgaWYgKCFTeW1ib2wuYXN5bmNEaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jRGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmFzeW5jRGlzcG9zZV07XG4gICAgfVxuICAgIGlmIChkaXNwb3NlID09PSB2b2lkIDApIHtcbiAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICBkaXNwb3NlID0gdmFsdWVbU3ltYm9sLmRpc3Bvc2VdO1xuICAgICAgaWYgKGFzeW5jKSBpbm5lciA9IGRpc3Bvc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBpZiAoaW5uZXIpIGRpc3Bvc2UgPSBmdW5jdGlvbigpIHsgdHJ5IHsgaW5uZXIuY2FsbCh0aGlzKTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7IH0gfTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgdmFyIHIsIHMgPSAwO1xuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIHdoaWxlIChyID0gZW52LnN0YWNrLnBvcCgpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIXIuYXN5bmMgJiYgcyA9PT0gMSkgcmV0dXJuIHMgPSAwLCBlbnYuc3RhY2sucHVzaChyKSwgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihuZXh0KTtcbiAgICAgICAgaWYgKHIuZGlzcG9zZSkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSByLmRpc3Bvc2UuY2FsbChyLnZhbHVlKTtcbiAgICAgICAgICBpZiAoci5hc3luYykgcmV0dXJuIHMgfD0gMiwgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCkudGhlbihuZXh0LCBmdW5jdGlvbihlKSB7IGZhaWwoZSk7IHJldHVybiBuZXh0KCk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcyB8PSAxO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgZmFpbChlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHMgPT09IDEpIHJldHVybiBlbnYuaGFzRXJyb3IgPyBQcm9taXNlLnJlamVjdChlbnYuZXJyb3IpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgaWYgKGVudi5oYXNFcnJvcikgdGhyb3cgZW52LmVycm9yO1xuICB9XG4gIHJldHVybiBuZXh0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jld3JpdGVSZWxhdGl2ZUltcG9ydEV4dGVuc2lvbihwYXRoLCBwcmVzZXJ2ZUpzeCkge1xuICBpZiAodHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIgJiYgL15cXC5cXC4/XFwvLy50ZXN0KHBhdGgpKSB7XG4gICAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC4odHN4KSR8KCg/OlxcLmQpPykoKD86XFwuW14uL10rPyk/KVxcLihbY21dPyl0cyQvaSwgZnVuY3Rpb24gKG0sIHRzeCwgZCwgZXh0LCBjbSkge1xuICAgICAgICAgIHJldHVybiB0c3ggPyBwcmVzZXJ2ZUpzeCA/IFwiLmpzeFwiIDogXCIuanNcIiA6IGQgJiYgKCFleHQgfHwgIWNtKSA/IG0gOiAoZCArIGV4dCArIFwiLlwiICsgY20udG9Mb3dlckNhc2UoKSArIFwianNcIik7XG4gICAgICB9KTtcbiAgfVxuICByZXR1cm4gcGF0aDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBfX2V4dGVuZHMsXG4gIF9fYXNzaWduLFxuICBfX3Jlc3QsXG4gIF9fZGVjb3JhdGUsXG4gIF9fcGFyYW0sXG4gIF9fZXNEZWNvcmF0ZSxcbiAgX19ydW5Jbml0aWFsaXplcnMsXG4gIF9fcHJvcEtleSxcbiAgX19zZXRGdW5jdGlvbk5hbWUsXG4gIF9fbWV0YWRhdGEsXG4gIF9fYXdhaXRlcixcbiAgX19nZW5lcmF0b3IsXG4gIF9fY3JlYXRlQmluZGluZyxcbiAgX19leHBvcnRTdGFyLFxuICBfX3ZhbHVlcyxcbiAgX19yZWFkLFxuICBfX3NwcmVhZCxcbiAgX19zcHJlYWRBcnJheXMsXG4gIF9fc3ByZWFkQXJyYXksXG4gIF9fYXdhaXQsXG4gIF9fYXN5bmNHZW5lcmF0b3IsXG4gIF9fYXN5bmNEZWxlZ2F0b3IsXG4gIF9fYXN5bmNWYWx1ZXMsXG4gIF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxuICBfX2ltcG9ydFN0YXIsXG4gIF9faW1wb3J0RGVmYXVsdCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCxcbiAgX19jbGFzc1ByaXZhdGVGaWVsZEluLFxuICBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZSxcbiAgX19kaXNwb3NlUmVzb3VyY2VzLFxuICBfX3Jld3JpdGVSZWxhdGl2ZUltcG9ydEV4dGVuc2lvbixcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGJhY2tncm91bmQuanNcblxuLy8gLS0tIEFXUyBTREsgSW1wb3J0cyAoQ29uY2VwdHVhbCAtIHJlcXVpcmVzIGJ1bmRsaW5nKSAtLS1cbmltcG9ydCB7IFRyYW5zY3JpYmVTdHJlYW1pbmdDbGllbnQsIFN0YXJ0U3RyZWFtVHJhbnNjcmlwdGlvbkNvbW1hbmQgfSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LXRyYW5zY3JpYmVcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUNsaWVudCwgVHJhbnNsYXRlVGV4dENvbW1hbmQgfSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LXRyYW5zbGF0ZVwiO1xuaW1wb3J0IHsgU2lnbmF0dXJlVjQgfSBmcm9tIFwiQGF3cy1zZGsvc2lnbmF0dXJlLXY0XCI7XG5pbXBvcnQgeyBTaGEyNTYgfSBmcm9tIFwiQGF3cy1jcnlwdG8vc2hhMjU2LWpzXCI7XG5pbXBvcnQgeyBwYXJzZVVybCB9IGZyb20gXCJAYXdzLXNkay91cmwtcGFyc2VyXCI7XG5pbXBvcnQgeyBidWlsZEh0dHBSZXF1ZXN0LCBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQgeyBFdmVudFN0cmVhbU1hcnNoYWxsZXIgfSBmcm9tIFwiQGF3cy1zZGsvZXZlbnRzdHJlYW0tbWFyc2hhbGxlclwiO1xuaW1wb3J0IHsgZnJvbVV0ZjgsIHRvVXRmOCB9IGZyb20gXCJAYXdzLXNkay91dGlsLXV0Zjgtbm9kZVwiOyAvLyBPciBicm93c2VyIGVxdWl2YWxlbnRcblxuY29uc29sZS5sb2coXCJCYWNrZ3JvdW5kIHNlcnZpY2Ugd29ya2VyIHN0YXJ0aW5nLi4uXCIpO1xuXG4vLyAtLS0gU3RhdGUgLS0tXG5sZXQgaXNSdW5uaW5nID0gZmFsc2U7XG5sZXQgYXdzQ29uZmlnID0gbnVsbDtcbmxldCB0cmFuc2NyaWJlV2ViU29ja2V0ID0gbnVsbDtcbmxldCB0cmFuc2xhdGVDbGllbnQgPSBudWxsOyAvLyBBV1MgVHJhbnNsYXRlIENsaWVudCBpbnN0YW5jZVxubGV0IGN1cnJlbnRUYWJJZCA9IG51bGw7IC8vIEtlZXAgdHJhY2sgb2YgdGhlIHRhYiB3aGVyZSBwcm9jZXNzaW5nIGlzIGFjdGl2ZVxuXG4vLyAtLS0gQ29uZmlndXJhdGlvbiAtLS1cbmNvbnN0IFRSQU5TQ1JJQkVfTEFOR1VBR0VfQ09ERSA9IFwiamEtSlBcIjsgLy8gSmFwYW5lc2UgZm9yIFNUVFxuY29uc3QgVFJBTlNMQVRFX1NPVVJDRV9MQU5HVUFHRSA9IFwiamFcIjsgLy8gSmFwYW5lc2UgZm9yIFRyYW5zbGF0ZVxuY29uc3QgVFJBTlNMQVRFX1RBUkdFVF9MQU5HVUFHRSA9IFwiemhcIjsgLy8gQ2hpbmVzZSBmb3IgVHJhbnNsYXRlXG4vLyBJTVBPUlRBTlQ6IFNhbXBsZSByYXRlIE1VU1QgbWF0Y2ggdGhlIHNhbXBsZSByYXRlIG9mIHRoZSBhdWRpbyBjaHVua3MgcmVjZWl2ZWQgZnJvbSBjb250ZW50LmpzXG4vLyBJZiBjb250ZW50LmpzIGNhcHR1cmVzIGF0IDQ0MTAwSHogYW5kIGRvZXNuJ3QgcmVzYW1wbGUsIHlvdSBtdXN0IHNldCB0aGlzIHRvIDQ0MTAwLlxuLy8gSWYgY29udGVudC5qcyByZXNhbXBsZXMgdG8gMTYwMDBIeiwgc2V0IHRoaXMgdG8gMTYwMDAuXG5jb25zdCBBVURJT19DSFVOS19TQU1QTEVfUkFURSA9IDE2MDAwOyAvLyBBc3N1bWluZyBjb250ZW50LmpzIHJlc2FtcGxlcyBvciBjYXB0dXJlcyBhdCB0aGlzIHJhdGVcblxuLy8gLS0tIEhlbHBlcjogR2V0IEFXUyBDcmVkZW50aWFscyAtLS1cbmFzeW5jIGZ1bmN0aW9uIGdldEF3c0NyZWRlbnRpYWxzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFsnYXdzQWNjZXNzS2V5SWQnLCAnYXdzU2VjcmV0QWNjZXNzS2V5JywgJ2F3c1JlZ2lvbiddLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5hd3NBY2Nlc3NLZXlJZCAmJiBkYXRhLmF3c1NlY3JldEFjY2Vzc0tleSAmJiBkYXRhLmF3c1JlZ2lvbikge1xuICAgICAgICBhd3NDb25maWcgPSB7XG4gICAgICAgICAgYWNjZXNzS2V5SWQ6IGRhdGEuYXdzQWNjZXNzS2V5SWQsXG4gICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBkYXRhLmF3c1NlY3JldEFjY2Vzc0tleSxcbiAgICAgICAgICByZWdpb246IGRhdGEuYXdzUmVnaW9uXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQVdTIENyZWRlbnRpYWxzIGxvYWRlZCBmcm9tIHN0b3JhZ2UuXCIpO1xuICAgICAgICByZXNvbHZlKGF3c0NvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJBV1MgQ3JlZGVudGlhbHMgbm90IGZvdW5kIGluIHN0b3JhZ2UuXCIpO1xuICAgICAgICByZWplY3QoXCJDcmVkZW50aWFscyBub3QgY29uZmlndXJlZFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIC0tLSBBV1MgVHJhbnNjcmliZSBSZWFsLXRpbWUgV2ViU29ja2V0IExvZ2ljIC0tLVxuLy8gKE1vc3RseSBzYW1lIGFzIGJlZm9yZSwgYnV0IHNlbmRzIEFVRElPX0NIVU5LX1NBTVBMRV9SQVRFKVxuYXN5bmMgZnVuY3Rpb24gc3RhcnRUcmFuc2NyaWJlV2ViU29ja2V0KGNvbmZpZykge1xuICBjb25zb2xlLmxvZyhcIkF0dGVtcHRpbmcgdG8gY29ubmVjdCB0byBBV1MgVHJhbnNjcmliZS4uLlwiKTtcblxuICBjb25zdCBlbmRwb2ludCA9IGB3c3M6Ly90cmFuc2NyaWJlc3RyZWFtaW5nLiR7Y29uZmlnLnJlZ2lvbn0uYW1hem9uYXdzLmNvbTo4NDQzYDtcbiAgLy8gQ29uc3RydWN0IHRoZSBzaWduZWQgV2ViU29ja2V0IFVSTCB1c2luZyBTaWdWNCAoY29tcGxleCwgcmVxdWlyZXMgU0RLIGhlbHBlcnMpXG4gIC8vIGNvbnN0IHNpZ25lZFVybCA9IGF3YWl0IGJ1aWxkU2lnbmVkVHJhbnNjcmliZVVybChjb25maWcsIGVuZHBvaW50LCBBVURJT19DSFVOS19TQU1QTEVfUkFURSk7IC8vIEh5cG90aGV0aWNhbCBoZWxwZXJcblxuICAvLyBQbGFjZWhvbGRlciBVUkwgc3RydWN0dXJlIChET0VTIE5PVCBJTkNMVURFIFJFQUwgU0lHVjQgU0lHTklORyEpXG4gIGNvbnN0IHBsYWNlaG9sZGVyVXJsID0gYCR7ZW5kcG9pbnR9Lz9sYW5ndWFnZS1jb2RlPSR7VFJBTlNDUklCRV9MQU5HVUFHRV9DT0RFfSZtZWRpYS1lbmNvZGluZz1wY20mc2FtcGxlLXJhdGU9JHtBVURJT19DSFVOS19TQU1QTEVfUkFURX1gO1xuICBjb25zb2xlLndhcm4oXCJVc2luZyBwbGFjZWhvbGRlciBXZWJTb2NrZXQgVVJMIHdpdGhvdXQgcmVhbCBTaWdWNCBzaWduaW5nLiBDb25uZWN0aW9uIHdpbGwgbGlrZWx5IGZhaWwuXCIpO1xuICB0cmFuc2NyaWJlV2ViU29ja2V0ID0gbmV3IFdlYlNvY2tldChwbGFjZWhvbGRlclVybCk7XG4gIC8vIGNvbnN0IGV2ZW50TWFyc2hhbGxlciA9IG5ldyBFdmVudFN0cmVhbU1hcnNoYWxsZXIodG9VdGY4LCBmcm9tVXRmOCk7IC8vIFJlcXVpcmVzIEBhd3Mtc2RrL2V2ZW50c3RyZWFtLW1hcnNoYWxsZXIsIHV0aWwtdXRmOC1ub2RlXG5cbiAgdHJhbnNjcmliZVdlYlNvY2tldC5vbm9wZW4gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlRyYW5zY3JpYmUgV2ViU29ja2V0IG9wZW5lZC5cIik7XG4gICAgLy8gU2VuZCBpbml0aWFsIHNldHRpbmdzIG1lc3NhZ2UgKGNvbmNlcHR1YWwsIHJlcXVpcmVzIGV2ZW50IHN0cmVhbSBtYXJzaGFsbGluZylcbiAgICAvKlxuICAgIGNvbnN0IGdyZWV0aW5nTWVzc2FnZSA9IHsgLi4uIH07IC8vIEJ1aWxkIFRyYW5zY3JpYmUgY29uZmlndXJhdGlvbiBtZXNzYWdlXG4gICAgY29uc3QgYmluYXJ5TWVzc2FnZSA9IGV2ZW50TWFyc2hhbGxlci5tYXJzaGFsbChncmVldGluZ01lc3NhZ2UpO1xuICAgIHRyYW5zY3JpYmVXZWJTb2NrZXQuc2VuZChiaW5hcnlNZXNzYWdlKTtcbiAgICAqL1xuICAgICBjb25zb2xlLmxvZyhcIldlYlNvY2tldCBvcGVuZWQuIFJlYWR5IHRvIHJlY2VpdmUgYXVkaW8gZGF0YSAoYW5kIHNlbmQgY29uZmlnIGlmIGltcGxlbWVudGVkKS5cIik7XG4gICAgIC8vIEluZm9ybSBjb250ZW50IHNjcmlwdCB0aGF0IEFXUyBpcyByZWFkeSB0byByZWNlaXZlIGF1ZGlvIChvcHRpb25hbClcbiAgICAgaWYgKGN1cnJlbnRUYWJJZCkge1xuICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoY3VycmVudFRhYklkLCB7IGFjdGlvbjogXCJhd3NSZWFkeVwiIH0pLmNhdGNoKGUgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIHNlbmRpbmcgYXdzUmVhZHkgdG8gdGFiOlwiLCBlKSk7XG4gICAgIH1cbiAgfTtcblxuICB0cmFuc2NyaWJlV2ViU29ja2V0Lm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgIC8vICoqKiBQYXJzZSB0aGUgaW5jb21pbmcgZXZlbnQgc3RyZWFtIG1lc3NhZ2UgZnJvbSBUcmFuc2NyaWJlICoqKlxuICAgIC8vIFRoaXMgaXMgd2hlcmUgeW91IGdldCB0aGUgdHJhbnNjcmliZWQgSmFwYW5lc2UgdGV4dC5cbiAgICAvLyBFeGFtcGxlIChjb25jZXB0dWFsLCByZXF1aXJlcyBldmVudHN0cmVhbS1tYXJzaGFsbGVyKTpcbiAgICAvKlxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJsb2IgPSBldmVudC5kYXRhO1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJyYXlCdWZmZXIgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGV2ZW50TWFyc2hhbGxlci51bm1hcnNoYWxsKG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VUeXBlID0gbWVzc2FnZS5oZWFkZXJzWyc6bWVzc2FnZS10eXBlJ10/LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZXZlbnRUeXBlID0gbWVzc2FnZS5oZWFkZXJzWyc6ZXZlbnQtdHlwZSddPy52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VUeXBlID09PSAnZXZlbnQnICYmIGV2ZW50VHlwZSA9PT0gJ3RyYW5zY3JpcHQtZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUJvZHkgPSBKU09OLnBhcnNlKG1lc3NhZ2UuYm9keSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IG1lc3NhZ2VCb2R5LlRyYW5zY3JpcHQ/LlJlc3VsdHM7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1swXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWx0ZXJuYXRpdmUgPSByZXN1bHQuQWx0ZXJuYXRpdmVzPy5bMF07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsdGVybmF0aXZlICYmIGFsdGVybmF0aXZlLlRyYW5zY3JpcHQgJiYgYWx0ZXJuYXRpdmUuVHJhbnNjcmlwdC50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNjcmlwdCA9IGFsdGVybmF0aXZlLlRyYW5zY3JpcHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1BhcnRpYWwgPSByZXN1bHQuSXNQYXJ0aWFsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzUGFydGlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmluYWwgSmFwYW5lc2U6XCIsIHRyYW5zY3JpcHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICoqKiBDQUxMIFRSQU5TTEFURSBIRVJFICoqKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVRleHQodHJhbnNjcmlwdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wdGlvbmFsOiBIYW5kbGUgcGFydGlhbCByZXN1bHRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlU3VidGl0bGVzSW5Db250ZW50U2NyaXB0KHRyYW5zY3JpcHQsIFwiLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlVHlwZSA9PT0gJ2V4Y2VwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUJvZHkgPSBKU09OLnBhcnNlKG1lc3NhZ2UuYm9keSk7XG4gICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2NyaWJlIEV4Y2VwdGlvbjpcIiwgbWVzc2FnZUJvZHkuTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdChcIlwiLCBgW1NUVOWHuumUmTogJHttZXNzYWdlQm9keS5NZXNzYWdlfV1gKTtcbiAgICAgICAgICAgICAgICAgc3RvcFByb2Nlc3NpbmcoKTsgLy8gU3RvcCBvbiBlcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYik7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcHJvY2Vzc2luZyBUcmFuc2NyaWJlIFdlYlNvY2tldCBtZXNzYWdlOlwiLCBlcnJvcik7XG4gICAgICAgIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdChcIlwiLCBgW+WkhOeQhlNUVOe7k+aenOWHuumUmTogJHtlcnJvci5tZXNzYWdlfV1gKTtcbiAgICAgICAgc3RvcFByb2Nlc3NpbmcoKTsgLy8gU3RvcCBvbiBlcnJvclxuICAgIH1cbiAgICAqL1xuXG4gICAgLy8gLS0tIFBsYWNlaG9sZGVyOiBTaW11bGF0ZSByZWNlaXZpbmcgYSBmaW5hbCB0cmFuc2NyaXB0IC0tLVxuICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgV2ViU29ja2V0IG1lc3NhZ2UgKHBsYWNlaG9sZGVyKS4gU2ltdWxhdGluZyB0cmFuc2NyaXB0IHJlc3VsdC5cIik7XG4gICAgLy8gSW4gYSByZWFsIHNjZW5hcmlvLCBwYXJzZSBldmVudC5kYXRhIGFuZCBjYWxsIHRyYW5zbGF0ZVRleHQocGFyc2VkSmFwYW5lc2VUZXh0KTtcbiAgICAvLyBGb3Igbm93LCBsZXQncyBzaW11bGF0ZSByZWNlaXZpbmcgdGV4dCBhbmQgdHJpZ2dlcmluZyB0cmFuc2xhdGlvbiBhZnRlciBhIHNob3J0IGRlbGF5LlxuICAgIC8vIFRoaXMgc2ltdWxhdGlvbiByZXBsYWNlcyB0aGUgYWN0dWFsIG1lc3NhZ2UgcGFyc2luZyBsb2dpYyBhYm92ZS5cbiAgICBpZiAoIXRyYW5zY3JpYmVXZWJTb2NrZXQuX3NpbXVsYXRpbmcpIHsgLy8gUHJldmVudCBtdWx0aXBsZSB0aW1lb3V0cyBmcm9tIG9uZSBtZXNzYWdlXG4gICAgICAgIHRyYW5zY3JpYmVXZWJTb2NrZXQuX3NpbXVsYXRpbmcgPSB0cnVlO1xuICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaW11bGF0ZWRKYXBhbmVzZVRleHQgPSBcIuOBk+OCk+OBq+OBoeOBr+OAgeOBk+OCjOOBr+OCv+ODluOCreODo+ODl+ODgeODo+OBi+OCieOBruODhuOCueODiOOBp+OBmeOAglwiOyAvLyBFeGFtcGxlIEphcGFuZXNlIHRleHRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2ltdWxhdGVkIEZpbmFsIEphcGFuZXNlOlwiLCBzaW11bGF0ZWRKYXBhbmVzZVRleHQpO1xuICAgICAgICAgICAgdHJhbnNsYXRlVGV4dChzaW11bGF0ZWRKYXBhbmVzZVRleHQpOyAvLyBDYWxsIHRyYW5zbGF0ZVxuICAgICAgICAgICAgZGVsZXRlIHRyYW5zY3JpYmVXZWJTb2NrZXQuX3NpbXVsYXRpbmc7XG4gICAgICAgICB9LCA1MDApOyAvLyBTaW11bGF0ZSBwcm9jZXNzaW5nIGRlbGF5XG4gICAgfVxuICAgIC8vIC0tLSBFbmQgUGxhY2Vob2xkZXIgU2ltdWxhdGlvbiAtLS1cbiAgfTtcblxuICB0cmFuc2NyaWJlV2ViU29ja2V0Lm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFwiVHJhbnNjcmliZSBXZWJTb2NrZXQgZXJyb3I6XCIsIGV2ZW50KTtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBldmVudD8ubWVzc2FnZSB8fCAnVW5rbm93biBXZWJTb2NrZXQgZXJyb3InO1xuICAgIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdChcIlwiLCBgW1NUVOi/nuaOpeWHuumUmTogJHtlcnJvck1lc3NhZ2V9XWApO1xuICAgIHN0b3BQcm9jZXNzaW5nKCk7IC8vIEVuc3VyZSBzdGF0ZSBpcyByZXNldFxuICB9O1xuXG4gIHRyYW5zY3JpYmVXZWJTb2NrZXQub25jbG9zZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiVHJhbnNjcmliZSBXZWJTb2NrZXQgY2xvc2VkOlwiLCBldmVudC5jb2RlLCBldmVudC5yZWFzb24pO1xuICAgIGlmIChpc1J1bm5pbmcpIHsgLy8gSWYgaXQgY2xvc2VkIHVuZXhwZWN0ZWRseSB3aGlsZSBydW5uaW5nXG4gICAgICAgY29uc29sZS5lcnJvcihcIldlYlNvY2tldCBjbG9zZWQgdW5leHBlY3RlZGx5LCBhdHRlbXB0aW5nIHRvIHN0b3AuXCIpO1xuICAgICAgIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdChcIlwiLCBcIltTVFTov57mjqXmhI/lpJblhbPpl61dXCIpO1xuICAgICAgIHN0b3BQcm9jZXNzaW5nKCk7IC8vIEVuc3VyZSBzdGF0ZSBpcyByZXNldFxuICAgIH0gZWxzZSB7XG4gICAgICAgY29uc29sZS5sb2coXCJXZWJTb2NrZXQgY2xvc2VkIGdyYWNlZnVsbHkuXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdHJhbnNjcmliZVdlYlNvY2tldDtcbn1cblxuZnVuY3Rpb24gc3RvcFRyYW5zY3JpYmVXZWJTb2NrZXQoKSB7XG4gIGlmICh0cmFuc2NyaWJlV2ViU29ja2V0KSB7XG4gICAgY29uc29sZS5sb2coXCJDbG9zaW5nIFRyYW5zY3JpYmUgV2ViU29ja2V0Li4uXCIpO1xuICAgIHRyYW5zY3JpYmVXZWJTb2NrZXQuY2xvc2UoMTAwMCwgXCJDbGllbnQgc3RvcHBpbmdcIik7IC8vIE5vcm1hbCBjbG9zdXJlXG4gICAgdHJhbnNjcmliZVdlYlNvY2tldCA9IG51bGw7XG4gIH1cbn1cblxuLy8gRnVuY3Rpb24gdG8gc2VuZCBhdWRpbyBjaHVua3MgKGNhbGxlZCBieSBjb250ZW50IHNjcmlwdClcbi8vIFRoZSBjaHVuayBzaG91bGQgYmUgYW4gQXJyYXlCdWZmZXIgY29udGFpbmluZyByYXcgYXVkaW8gZGF0YSAoSW50MTZBcnJheSBidWZmZXIpXG5mdW5jdGlvbiBzZW5kQXVkaW9DaHVua1RvVHJhbnNjcmliZShjaHVuaykge1xuICAgIGlmICh0cmFuc2NyaWJlV2ViU29ja2V0ICYmIHRyYW5zY3JpYmVXZWJTb2NrZXQucmVhZHlTdGF0ZSA9PT0gV2ViU29ja2V0Lk9QRU4pIHtcbiAgICAgICAgLy8gKioqIFNlbmQgdGhlIGF1ZGlvIGNodW5rIGFzIGEgYmluYXJ5IG1lc3NhZ2UgKioqXG4gICAgICAgIC8vIFRoaXMgaW52b2x2ZXMgY3JlYXRpbmcgYW4gRXZlbnRTdHJlYW0gbWVzc2FnZSBvZiB0eXBlICdBdWRpb0V2ZW50J1xuICAgICAgICAvLyB3aXRoIHRoZSBjaHVuayBhcyB0aGUgYm9keSwgYW5kIG1hcnNoYWxsaW5nIGl0IGludG8gYSBiaW5hcnkgZnJhbWUuXG4gICAgICAgIC8vIFJlcXVpcmVzIGV2ZW50c3RyZWFtLW1hcnNoYWxsZXIuXG4gICAgICAgIC8qXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhdWRpb0V2ZW50TWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICc6bWVzc2FnZS10eXBlJzogeyB0eXBlOiAnc3RyaW5nJywgdmFsdWU6ICdldmVudCcgfSxcbiAgICAgICAgICAgICAgICAgICAgJzpldmVudC10eXBlJzogeyB0eXBlOiAnc3RyaW5nJywgdmFsdWU6ICdBdWRpb0V2ZW50JyB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogbmV3IFVpbnQ4QXJyYXkoY2h1bmspLCAvLyBBdWRpbyBkYXRhIGFzIFVpbnQ4QXJyYXkgb3IgQnVmZmVyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgYmluYXJ5TWVzc2FnZSA9IGV2ZW50TWFyc2hhbGxlci5tYXJzaGFsbChhdWRpb0V2ZW50TWVzc2FnZSk7XG4gICAgICAgICAgICB0cmFuc2NyaWJlV2ViU29ja2V0LnNlbmQoYmluYXJ5TWVzc2FnZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNlbnQgYXVkaW8gY2h1bmsuIFNpemU6XCIsIGNodW5rLmJ5dGVMZW5ndGgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1hcnNoYWxsaW5nL3NlbmRpbmcgYXVkaW8gY2h1bms6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIC8vIERlY2lkZSBob3cgdG8gaGFuZGxlIHNlbmQgZXJyb3JzIC0gbWF5YmUgc3RvcCBvciBsb2dcbiAgICAgICAgICAgIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdChcIlwiLCBgW+WPkemAgemfs+mikeWHuumUmTogJHtlcnJvci5tZXNzYWdlfV1gKTtcbiAgICAgICAgICAgIC8vIHN0b3BQcm9jZXNzaW5nKCk7IC8vIE9wdGlvbmFsOiBzdG9wIG9uIHNlbmQgZXJyb3JcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGFuZCB3b3VsZCBzZW5kIGF1ZGlvIGNodW5rIChwcm9jZXNzaW5nIGRpc2FibGVkIGluIGV4YW1wbGUpLiBTaXplOlwiLCBjaHVuay5ieXRlTGVuZ3RoKTtcbiAgICAgICAgLy8gSW4gYSByZWFsIHNjZW5hcmlvLCB1bmNvbW1lbnQgdGhlIHRyeS9jYXRjaCBibG9jayBhYm92ZS5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLndhcm4oXCJXZWJTb2NrZXQgbm90IG9wZW4sIGNhbm5vdCBzZW5kIGF1ZGlvIGNodW5rLlwiKTtcbiAgICAgICAgLy8gSGFuZGxlIGNhc2Ugd2hlcmUgV1MgaXMgbm90IHJlYWR5IC0gYnVmZmVyIGNodW5rcz8gRHJvcCB0aGVtP1xuICAgIH1cbn1cblxuXG4vLyAtLS0gQVdTIFRyYW5zbGF0ZSBMb2dpYyAoU2FtZSBhcyBiZWZvcmUpIC0tLVxuYXN5bmMgZnVuY3Rpb24gdHJhbnNsYXRlVGV4dChqYXBhbmVzZVRleHQpIHtcbiAgaWYgKCFhd3NDb25maWcgfHwgIXRyYW5zbGF0ZUNsaWVudCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJBV1MgY29uZmlnIG9yIFRyYW5zbGF0ZUNsaWVudCBub3QgbG9hZGVkIGZvciB0cmFuc2xhdGlvbi5cIik7XG4gICAgdXBkYXRlU3VidGl0bGVzSW5Db250ZW50U2NyaXB0KGphcGFuZXNlVGV4dCwgXCJb57+76K+R5pyN5Yqh5pyq5ZCv5Yqo5oiW5Ye66ZSZXVwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIWphcGFuZXNlVGV4dCB8fCBqYXBhbmVzZVRleHQudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coXCJObyBtZWFuaW5nZnVsIHRleHQgdG8gdHJhbnNsYXRlLlwiKTtcbiAgICAgIC8vIElmIFRyYW5zY3JpYmUgc2VuZHMgZW1wdHkgb3Igd2hpdGVzcGFjZSByZXN1bHQsIG1heWJlIGNsZWFyIHN1YnRpdGxlcyBvciBzaG93IG9ubHkgcHJldmlvdXM/XG4gICAgICAvLyB1cGRhdGVTdWJ0aXRsZXNJbkNvbnRlbnRTY3JpcHQoXCJcIiwgXCJcIik7XG4gICAgICByZXR1cm47XG4gIH1cblxuICBjb25zb2xlLmxvZyhcIlRyYW5zbGF0aW5nOlwiLCBqYXBhbmVzZVRleHQpO1xuXG4gIHRyeSB7XG4gICAgLy8gKioqIENhbGwgVHJhbnNsYXRlIEFQSSAoUmVxdWlyZXMgQGF3cy1zZGsvY2xpZW50LXRyYW5zbGF0ZSkgKioqXG4gICAgLypcbiAgICBjb25zdCBjb21tYW5kID0gbmV3IFRyYW5zbGF0ZVRleHRDb21tYW5kKHtcbiAgICAgIFRleHQ6IGphcGFuZXNlVGV4dCxcbiAgICAgIFNvdXJjZUxhbmd1YWdlQ29kZTogVFJBTlNMQVRFX1NPVVJDRV9MQU5HVUFHRSxcbiAgICAgIFRhcmdldExhbmd1YWdlQ29kZTogVFJBTlNMQVRFX1RBUkdFVF9MQU5HVUFHRSxcbiAgICB9KTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRyYW5zbGF0ZUNsaWVudC5zZW5kKGNvbW1hbmQpO1xuICAgIGNvbnN0IGNoaW5lc2VUZXh0ID0gcmVzcG9uc2UuVHJhbnNsYXRlZFRleHQ7XG4gICAgKi9cblxuICAgIC8vIC0tLSBQbGFjZWhvbGRlcjogU2ltdWxhdGUgdHJhbnNsYXRpb24gZGVsYXkgYW5kIHJlc3VsdCAtLS1cbiAgICBjb25zdCBjaGluZXNlVGV4dCA9IGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoYFvnv7vor5E6ICR7amFwYW5lc2VUZXh0fV1gKTsgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCB0cmFuc2xhdGlvbiByZXN1bHQgZnJvbSBBV1NcbiAgICAgICAgfSwgMjAwKTsgLy8gU2ltdWxhdGUgbmV0d29yayBsYXRlbmN5IGZvciB0cmFuc2xhdGlvblxuICAgIH0pO1xuICAgIC8vIC0tLSBFbmQgUGxhY2Vob2xkZXIgLS0tXG5cbiAgICBjb25zb2xlLmxvZyhcIlRyYW5zbGF0ZWQ6XCIsIGNoaW5lc2VUZXh0KTtcblxuICAgIC8vIFNlbmQgYm90aCBvcmlnaW5hbCBhbmQgdHJhbnNsYXRlZCB0ZXh0IHRvIGNvbnRlbnQgc2NyaXB0XG4gICAgdXBkYXRlU3VidGl0bGVzSW5Db250ZW50U2NyaXB0KGphcGFuZXNlVGV4dCwgY2hpbmVzZVRleHQpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHRyYW5zbGF0aW5nIHRleHQ6XCIsIGVycm9yKTtcbiAgICB1cGRhdGVTdWJ0aXRsZXNJbkNvbnRlbnRTY3JpcHQoamFwYW5lc2VUZXh0LCBgW+e/u+ivkeWHuumUmTogJHtlcnJvci5tZXNzYWdlfV1gKTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgdG8gc2VuZCBzdWJ0aXRsZSB1cGRhdGUgbWVzc2FnZSB0byB0aGUgYWN0aXZlIHRhYlxuZnVuY3Rpb24gdXBkYXRlU3VidGl0bGVzSW5Db250ZW50U2NyaXB0KGphcGFuZXNlVGV4dCwgY2hpbmVzZVRleHQpIHtcbiAgICAvLyBTZW5kIG1lc3NhZ2Ugb25seSB0byB0aGUgdGFiIHRoYXQgaW5pdGlhdGVkIHRoZSBwcm9jZXNzXG4gICAgaWYgKGN1cnJlbnRUYWJJZCkge1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShjdXJyZW50VGFiSWQsIHtcbiAgICAgICAgICBhY3Rpb246IFwidXBkYXRlU3VidGl0bGVzXCIsXG4gICAgICAgICAgamFwYW5lc2U6IGphcGFuZXNlVGV4dCxcbiAgICAgICAgICBjaGluZXNlOiBjaGluZXNlVGV4dFxuICAgICAgICB9KS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIHVwZGF0ZVN1YnRpdGxlcyBtZXNzYWdlOlwiLCBlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiTm8gYWN0aXZlIHRhYiBJRCB0byBzZW5kIHN1YnRpdGxlIHVwZGF0ZS5cIik7XG4gICAgfVxufVxuXG5cbi8vIC0tLSBNYWluIENvbnRyb2wgRnVuY3Rpb25zIC0tLVxuYXN5bmMgZnVuY3Rpb24gc3RhcnRQcm9jZXNzaW5nKCkge1xuICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgY29uc29sZS5sb2coXCJBbHJlYWR5IHJ1bm5pbmcuXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJBbHJlYWR5IHJ1bm5pbmdcIiB9O1xuICB9XG5cbiAgY29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIHN0YXJ0IHByb2Nlc3NpbmcuLi5cIik7XG5cbiAgdHJ5IHtcbiAgICAvLyBHZXQgdGhlIGFjdGl2ZSB0YWIgZmlyc3QgdG8ga25vdyB3aGVyZSB0byBpbmplY3Qvc2VuZCBtZXNzYWdlc1xuICAgIGNvbnN0IFt0YWJdID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0pO1xuICAgIGlmICghdGFiIHx8ICF0YWIuaWQpIHtcbiAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBhY3RpdmUgdGFiIGZvdW5kIG9yIHRhYiBJRCBpcyBpbnZhbGlkLlwiKTtcbiAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJObyBhY3RpdmUgdGFiIGZvdW5kXCIgfTtcbiAgICB9XG4gICAgY3VycmVudFRhYklkID0gdGFiLmlkOyAvLyBTdG9yZSB0aGUgdGFiIElEXG5cbiAgICAvLyAxLiBHZXQgQVdTIENyZWRlbnRpYWxzXG4gICAgYXdzQ29uZmlnID0gYXdhaXQgZ2V0QXdzQ3JlZGVudGlhbHMoKTtcbiAgICBjb25zb2xlLmxvZyhcIkFXUyBDb25maWcgbG9hZGVkIHN1Y2Nlc3NmdWxseS5cIik7XG5cbiAgICAvLyAyLiBJbml0aWFsaXplIEFXUyBUcmFuc2xhdGUgQ2xpZW50XG4gICAgLy8gdHJhbnNsYXRlQ2xpZW50ID0gbmV3IFRyYW5zbGF0ZUNsaWVudCh7IC4uLiB9KTsgLy8gUmVxdWlyZXMgQGF3cy1zZGsvY2xpZW50LXRyYW5zbGF0ZVxuICAgIGNvbnNvbGUud2FybihcIlRyYW5zbGF0ZUNsaWVudCBpbml0aWFsaXphdGlvbiBwbGFjZWhvbGRlci5cIik7IC8vIFBsYWNlaG9sZGVyXG5cbiAgICAvLyAzLiBTdGFydCBBV1MgVHJhbnNjcmliZSBXZWJTb2NrZXQgY29ubmVjdGlvblxuICAgIC8vIFRoaXMgaXMgYXN5bmMgYW5kIG5lZWRzIHRvIGhhbmRsZSBjb25uZWN0aW9uIGxpZmVjeWNsZS5cbiAgICAvLyBXZSBzdGFydCB0aGUgV1MgY29ubmVjdGlvbiBlYXJseSB3aGlsZSB3YWl0aW5nIGZvciBhdWRpby5cbiAgICBhd2FpdCBzdGFydFRyYW5zY3JpYmVXZWJTb2NrZXQoYXdzQ29uZmlnKTtcbiAgICBjb25zb2xlLmxvZyhcIlRyYW5zY3JpYmUgV2ViU29ja2V0IHNldHVwIGluaXRpYXRlZC5cIik7XG5cbiAgICAvLyA0LiBJbmplY3QgY29udGVudCBzY3JpcHQgYW5kIENTUyAoaWYgbm90IGFscmVhZHkgdGhlcmUpIGFuZCBzaWduYWwgaXQgdG8gc3RhcnQgc3VidGl0bGVzXG4gICAgLy8gVGhpcyBlbnN1cmVzIHRoZSBjb250ZW50IHNjcmlwdCBpcyByZWFkeSBiZWZvcmUgd2UgYXNrIGl0IHRvIGNhcHR1cmUuXG4gICAgYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgdGFyZ2V0OiB7IHRhYklkOiBjdXJyZW50VGFiSWQgfSxcbiAgICAgICAgZmlsZXM6IFsnY29udGVudC5qcyddLCAvLyBJbmplY3QgY29udGVudC5qcyBpZiBub3QgYWxyZWFkeSB0aGVyZVxuICAgIH0pO1xuICAgICBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmluc2VydENTUyh7XG4gICAgICAgIHRhcmdldDogeyB0YWJJZDogY3VycmVudFRhYklkIH0sXG4gICAgICAgIGZpbGVzOiBbJ3N1YnRpdGxlLmNzcyddLCAvLyBJbmplY3QgQ1NTIGlmIG5vdCBhbHJlYWR5IHRoZXJlXG4gICAgfSk7XG5cbiAgICAvLyBTZW5kIHRoZSBpbml0aWFsIHN0YXJ0IHNpZ25hbCB0byB0aGUgY29udGVudCBzY3JpcHQgKHByaW1hcmlseSBmb3Igc3VidGl0bGVzKVxuICAgIGF3YWl0IGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKGN1cnJlbnRUYWJJZCwgeyBhY3Rpb246IFwic3RhcnRDb250ZW50U2NyaXB0XCIgfSk7XG4gICAgY29uc29sZS5sb2coXCJTZW50IHN0YXJ0Q29udGVudFNjcmlwdCBzaWduYWwgdG8gY29udGVudCBzY3JpcHQuXCIpO1xuXG4gICAgLy8gNS4gKioqIE5PVywgVEVMTCBUSEUgQ09OVEVOVCBTQ1JJUFQgVE8gSU5JVElBVEUgVEFCIENBUFRVUkUgKioqXG4gICAgLy8gVGhpcyB3aWxsIHRyaWdnZXIgdGhlIGNocm9tZS50YWJDYXB0dXJlLmNhcHR1cmUgY2FsbCBhbmQgdGhlIHBlcm1pc3Npb24gZGlhbG9nLlxuICAgIC8vIFRoZSBjb250ZW50IHNjcmlwdCB3aWxsIHRoZW4gc2VuZCBhdWRpbyBjaHVua3MgYmFjayB2aWEgJ2F1ZGlvQ2h1bmsnIG1lc3NhZ2VzLlxuICAgIGF3YWl0IGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKGN1cnJlbnRUYWJJZCwgeyBhY3Rpb246IFwiaW5pdGlhdGVUYWJDYXB0dXJlXCIgfSk7XG4gICAgY29uc29sZS5sb2coXCJTZW50IGluaXRpYXRlVGFiQ2FwdHVyZSBzaWduYWwgdG8gY29udGVudCBzY3JpcHQuXCIpO1xuXG5cbiAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgIGNvbnNvbGUubG9nKFwiUHJvY2Vzc2luZyBzdGFydGVkIHN1Y2Nlc3NmdWxseS5cIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBzdGFydCBwcm9jZXNzaW5nOlwiLCBlcnJvcik7XG4gICAgLy8gRW5zdXJlIGNsZWFudXAgaGFwcGVucyBpZiBzdGFydCBmYWlsc1xuICAgIHN0b3BQcm9jZXNzaW5nKCk7XG4gICAgbGV0IHVzZXJFcnJvciA9IFwiVW5rbm93biBlcnJvciBkdXJpbmcgc3RhcnQuXCI7XG4gICAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdXNlckVycm9yID0gZXJyb3I7XG4gICAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHVzZXJFcnJvciA9IGVycm9yLm1lc3NhZ2U7XG4gICAgfVxuICAgIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdChcIlwiLCBgW+WQr+WKqOWksei0pTogJHt1c2VyRXJyb3J9XWApOyAvLyBTaG93IGVycm9yIGluIHN1YnRpdGxlc1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXNlckVycm9yIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcFByb2Nlc3NpbmcoKSB7XG4gIGlmICghaXNSdW5uaW5nKSB7XG4gICAgY29uc29sZS5sb2coXCJOb3QgcnVubmluZy5cIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk5vdCBydW5uaW5nXCIgfTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiU3RvcHBpbmcgcHJvY2Vzc2luZy4uLlwiKTtcblxuICAvLyAxLiBTdG9wIEFXUyBUcmFuc2NyaWJlIFdlYlNvY2tldFxuICBzdG9wVHJhbnNjcmliZVdlYlNvY2tldCgpO1xuXG4gIC8vIDIuIEluZm9ybSBjb250ZW50IHNjcmlwdCB0byByZW1vdmUgc3VidGl0bGVzIGFuZCBzdG9wIGF1ZGlvIGNhcHR1cmVcbiAgaWYgKGN1cnJlbnRUYWJJZCkge1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoY3VycmVudFRhYklkLCB7IGFjdGlvbjogXCJzdG9wQ29udGVudFNjcmlwdFwiIH0pXG4gICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIHN0b3BDb250ZW50U2NyaXB0IG1lc3NhZ2U6XCIsIGUpKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VudCBzdG9wIHNpZ25hbCB0byBjb250ZW50IHNjcmlwdC5cIik7XG4gIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJObyBhY3RpdmUgdGFiIElEIHRvIHNlbmQgc3RvcCBzaWduYWwuXCIpO1xuICB9XG5cblxuICAvLyAzLiBSZXNldCBzdGF0ZVxuICBpc1J1bm5pbmcgPSBmYWxzZTtcbiAgYXdzQ29uZmlnID0gbnVsbDsgLy8gQ2xlYXIgY3JlZGVudGlhbHMgZnJvbSBtZW1vcnkgKGJlc3QgZWZmb3J0KVxuICB0cmFuc2xhdGVDbGllbnQgPSBudWxsOyAvLyBDbGVhciBjbGllbnQgaW5zdGFuY2VcbiAgY3VycmVudFRhYklkID0gbnVsbDsgLy8gQ2xlYXIgdGhlIGFjdGl2ZSB0YWIgSURcbiAgY29uc29sZS5sb2coXCJQcm9jZXNzaW5nIHN0b3BwZWQuXCIpO1xuICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG59XG5cblxuLy8gLS0tIE1lc3NhZ2UgTGlzdGVuZXIgZnJvbSBQb3B1cC9Db250ZW50IFNjcmlwdCAtLS1cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgY29uc29sZS5sb2coXCJCYWNrZ3JvdW5kIHJlY2VpdmVkIG1lc3NhZ2U6XCIsIHJlcXVlc3QuYWN0aW9uLCBzZW5kZXIudGFiID8gXCJmcm9tIGNvbnRlbnQgc2NyaXB0IGluIHRhYiBcIiArIHNlbmRlci50YWIuaWQgOiBcImZyb20gcG9wdXAvb3RoZXJcIik7XG5cbiAgLy8gSGFuZGxlIG1lc3NhZ2VzIGZyb20gcG9wdXAgb3IgY29udGVudCBzY3JpcHRcbiAgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcInN0YXJ0XCIpIHtcbiAgICAvLyBTdGFydCB0aGUgd2hvbGUgcHJvY2VzcyAodHJpZ2dlcmVkIGJ5IHBvcHVwKVxuICAgIHN0YXJ0UHJvY2Vzc2luZygpLnRoZW4oc2VuZFJlc3BvbnNlKTtcbiAgICByZXR1cm4gdHJ1ZTsgLy8gSW5kaWNhdGUgYXN5bmMgcmVzcG9uc2VcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gXCJzdG9wXCIpIHtcbiAgICAvLyBTdG9wIHRoZSB3aG9sZSBwcm9jZXNzICh0cmlnZ2VyZWQgYnkgcG9wdXApXG4gICAgc2VuZFJlc3BvbnNlKHN0b3BQcm9jZXNzaW5nKCkpO1xuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcImdldFN0YXR1c1wiKSB7XG4gICAgLy8gUmVwb3J0IGN1cnJlbnQgcnVubmluZyBzdGF0dXMgKHVzZWQgYnkgcG9wdXApXG4gICAgc2VuZFJlc3BvbnNlKHsgaXNSdW5uaW5nOiBpc1J1bm5pbmcgfSk7XG4gIH0gZWxzZSBpZiAocmVxdWVzdC5hY3Rpb24gPT09IFwiYXVkaW9DaHVua1wiKSB7XG4gICAgLy8gUmVjZWl2ZWQgYXVkaW8gZGF0YSBmcm9tIGNvbnRlbnQgc2NyaXB0IChmcm9tIHRhYkNhcHR1cmUgcHJvY2Vzc2luZylcbiAgICAvLyBFbnN1cmUgbWVzc2FnZSBjb21lcyBmcm9tIHRoZSB0YWIgd2UgZXhwZWN0XG4gICAgaWYgKHNlbmRlci50YWIgJiYgc2VuZGVyLnRhYi5pZCA9PT0gY3VycmVudFRhYklkICYmIHJlcXVlc3QuY2h1bmspIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJSZWNlaXZlZCBhdWRpbyBjaHVuayBmcm9tIGNvbnRlbnQgc2NyaXB0LiBTaXplOlwiLCByZXF1ZXN0LmNodW5rLmJ5dGVMZW5ndGgpO1xuICAgICAgICAvLyBTZW5kIHRoZSBhdWRpbyBjaHVuayB0byB0aGUgVHJhbnNjcmliZSBXZWJTb2NrZXRcbiAgICAgICAgc2VuZEF1ZGlvQ2h1bmtUb1RyYW5zY3JpYmUocmVxdWVzdC5jaHVuayk7IC8vIENhbGwgdGhlIGZ1bmN0aW9uIHRvIHNlbmQgdG8gV1NcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTsgLy8gQWNrbm93bGVkZ2UgcmVjZWlwdFxuICAgICAgICAvLyByZXR1cm4gdHJ1ZTsgLy8gVW5jb21tZW50IGlmIHNlbmRBdWRpb0NodW5rVG9UcmFuc2NyaWJlIGlzIGFzeW5jXG4gICAgfSBlbHNlIHtcbiAgICAgICAgIGNvbnNvbGUud2FybihcIlJlY2VpdmVkIGF1ZGlvQ2h1bmsgbWVzc2FnZSBmcm9tIHVuZXhwZWN0ZWQgc2VuZGVyIG9yIHdpdGhvdXQgZGF0YS5cIik7XG4gICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW52YWxpZCBhdWRpb0NodW5rIG1lc3NhZ2VcIiB9KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVxdWVzdC5hY3Rpb24gPT09IFwiYXVkaW9DYXB0dXJlRXJyb3JcIikge1xuICAgICAvLyBSZWNlaXZlZCBlcnJvciBtZXNzYWdlIGZyb20gY29udGVudCBzY3JpcHQgcmVnYXJkaW5nIGF1ZGlvIGNhcHR1cmVcbiAgICAgY29uc29sZS5lcnJvcihcIkF1ZGlvIGNhcHR1cmUgZmFpbGVkIGluIGNvbnRlbnQgc2NyaXB0OlwiLCByZXF1ZXN0LmVycm9yKTtcbiAgICAgLy8gT3B0aW9uYWxseSBzdG9wIHByb2Nlc3Npbmcgb3Igc2hvdyBhIG5vdGlmaWNhdGlvblxuICAgICAvLyBJdCdzIG9mdGVuIGJlc3QgdG8gc3RvcCB0aGUgd2hvbGUgcHJvY2VzcyBpZiBhdWRpbyBjYXB0dXJlIGZhaWxzLlxuICAgICB1cGRhdGVTdWJ0aXRsZXNJbkNvbnRlbnRTY3JpcHQoXCJcIiwgYFvpn7PpopHmjZXojrflpLHotKU6ICR7cmVxdWVzdC5lcnJvcn1dYCk7IC8vIEluZm9ybSB1c2VyIHZpYSBzdWJ0aXRsZXNcbiAgICAgc3RvcFByb2Nlc3NpbmcoKTsgLy8gU3RvcCB0aGUgZW50aXJlIHByb2Nlc3NcbiAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTsgLy8gQWNrbm93bGVkZ2UgcmVjZWlwdFxuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcImF1ZGlvUHJvY2Vzc2luZ1N0YXJ0ZWRcIikge1xuICAgICAgLy8gT3B0aW9uYWw6IENvbnRlbnQgc2NyaXB0IGNvbmZpcm1zIFdlYiBBdWRpbyBwcm9jZXNzaW5nIHN0YXJ0ZWRcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29udGVudCBzY3JpcHQgcmVwb3J0cyBhdWRpbyBwcm9jZXNzaW5nIHN0YXJ0ZWQuXCIpO1xuICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgfVxuICAvLyBBZGQgb3RoZXIgbWVzc2FnZSBoYW5kbGVycyBpZiBuZWVkZWRcbn0pO1xuXG4vLyAtLS0gSW5pdGlhbCBzdGF0ZSBjaGVjayAob3B0aW9uYWwpIC0tLVxuY29uc29sZS5sb2coXCJCYWNrZ3JvdW5kIHNlcnZpY2Ugd29ya2VyIGluaXRpYWxpemVkLiBTdGF0ZTogSWRsZS5cIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9