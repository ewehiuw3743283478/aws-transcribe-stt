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

// --- AWS SDK Imports ---
// These imports are necessary for SigV4 signing, Event Stream marshalling/unmarshalling,
// and the Translate Client. Ensure your bundler (Webpack) resolves these correctly.
 // Keep for potential type hints or future use






 // Provided by polyfill/bundler

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
const TRANSCRIBE_SERVICE_NAME = 'transcribe'; // AWS service name for Transcribe

// --- Helper: Get AWS Credentials (Same as before) ---
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
async function startTranscribeWebSocket(config) {
  console.log("Attempting to connect to AWS Transcribe...");

  const endpoint = `wss://transcribestreaming.${config.region}.amazonaws.com:8443`;
  const url = (0,_aws_sdk_url_parser__WEBPACK_IMPORTED_MODULE_2__.parseUrl)(endpoint); // Use parseUrl from SDK

  // --- SigV4 Signing Implementation (Task 1.2) ---
  // 1. Create a signer instance
  const signer = new _aws_sdk_signature_v4__WEBPACK_IMPORTED_MODULE_0__.SignatureV4({
    credentials: { // Provide AWS credentials
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
        // sessionToken: config.sessionToken, // Include if using temporary credentials
    },
    region: config.region, // AWS region
    service: TRANSCRIBE_SERVICE_NAME, // Service name
    sha256: _aws_crypto_sha256_js__WEBPACK_IMPORTED_MODULE_1__.Sha256, // Hashing function (Requires @aws-crypto/sha256-js)
  });

  // 2. Create an HttpRequest object representing the WebSocket handshake GET request
  // These parameters are required by the Transcribe streaming API.
  const request = new _aws_sdk_protocol_http__WEBPACK_IMPORTED_MODULE_3__.HttpRequest({
      method: 'GET', // WebSocket handshake starts with a GET request
      hostname: url.hostname,
      path: url.pathname,
      query: { // Query parameters required by Transcribe streaming API
          'language-code': TRANSCRIBE_LANGUAGE_CODE,
          'media-encoding': 'pcm', // Must match the format of the audio chunks sent (16-bit PCM)
          'sample-rate': AUDIO_CHUNK_SAMPLE_RATE.toString(), // Must match the sample rate of the audio chunks
          // Add other optional parameters here if needed, e.g.:
          // 'show-speaker-label': 'true',
          // 'enable-partial-results-stabilization': 'true',
          // 'partial-results-stability': 'high', // 'low', 'medium', 'high'
          // 'vocabulary-name': 'YourVocabularyName',
      },
      protocol: url.protocol,
      // headers: { Host: url.hostname }, // Host header is usually added by buildHttpRequest, but SigV4 might need it explicitly
  });

  // 3. Sign the request
  // The signing process adds Authorization, x-amz-date, etc. headers
  // expiresIn is in seconds (e.g., 300s = 5 minutes). Max is 7 days (604800 seconds).
  const signedRequest = await signer.sign(request, { signingDate: new Date(), expiresIn: 300 });

  // 4. Build the final WebSocket URL
  // The signed headers need to be transferred to query parameters for the WebSocket handshake.
  // Combine original query parameters and signed headers.
  const params = new URLSearchParams(signedRequest.query); // Start with original query params
  Object.entries(signedRequest.headers).forEach(([key, value]) => {
       // Add relevant signed headers as query parameters.
       // SigV4 requires Authorization, x-amz-date, and potentially x-amz-security-token.
       if (key.toLowerCase() === 'authorization' || key.toLowerCase() === 'x-amz-date' || key.toLowerCase() === 'x-amz-security-token') {
           params.append(key, value);
       }
  });

  // Construct the final WebSocket URL
  const signedUrl = `wss://${signedRequest.hostname}${signedRequest.path}?${params.toString()}`;

  console.log("Signed WebSocket URL constructed.");
  // console.log("Full Signed URL (for debugging):", signedUrl); // Be cautious logging credentials/signed info

  // 5. Create the WebSocket instance using the signed URL
  transcribeWebSocket = new WebSocket(signedUrl);

  // --- End SigV4 Signing Implementation ---


  // Event Stream Marshaller (Task 1.3/1.4)
  // const eventMarshaller = new EventStreamMarshaller(toUtf8, fromUtf8); // Requires @aws-sdk/eventstream-marshaller, util-utf8-node

  transcribeWebSocket.onopen = (event) => {
    console.log("Transcribe WebSocket opened successfully.");
    // Send initial settings message (required by Transcribe event stream protocol)
    // This message format is specific to Transcribe event stream.
    // It confirms configuration like language, encoding, sample rate.
    // Example implementation (Task 1.3/1.4, requires eventstream-marshaller):
    /*
    try {
        const greetingMessage = {
            headers: {
                ':message-type': { type: 'string', value: 'event' },
                ':event-type': { type: 'string', value: 'configuration-event' },
            },
            body: JSON.stringify({
                LanguageCode: TRANSCRIBE_LANGUAGE_CODE,
                MediaEncoding: 'pcm', // Must match audio format
                SampleRate: AUDIO_CHUNK_SAMPLE_RATE, // Must match audio sample rate
                // Add other configuration options here if needed
            }),
        };
        const binaryMessage = eventMarshaller.marshall(greetingMessage);
        transcribeWebSocket.send(binaryMessage);
        console.log("Sent Transcribe configuration message.");
    } catch (error) {
        console.error("Error sending Transcribe configuration message:", error);
        // Handle error, maybe close socket?
    }
    */
     console.log("WebSocket opened. Ready to receive audio data (and send config if implemented).");
     // Inform content script that AWS is ready to receive audio (optional but good practice)
     if (currentTabId) {
         chrome.tabs.sendMessage(currentTabId, { action: "awsReady" }).catch(e => console.error("Error sending awsReady to tab:", e));
     }
  };

  transcribeWebSocket.onmessage = (event) => {
    // *** Parse the incoming event stream message from Transcribe (Task 1.4) ***
    // event.data will be a binary Blob or ArrayBuffer.
    // You need to unmarshall it using EventStreamMarshaller.
    // Example implementation (Task 1.4, requires eventstream-marshaller, util-utf8-node):
    /*
    try {
        const blob = event.data;
        // Read blob as ArrayBuffer asynchronously
        const reader = new FileReader();
        reader.onloadend = () => {
            const arrayBuffer = reader.result;
            // Unmarshall the binary message
            const message = eventMarshaller.unmarshall(new Uint8Array(arrayBuffer));

            const messageType = message.headers[':message-type']?.value;
            const eventType = message.headers[':event-type']?.value;

            if (messageType === 'event' && eventType === 'transcript-event') {
                const messageBody = JSON.parse(message.body); // Message body is JSON
                const results = messageBody.Transcript?.Results;

                if (results && results.length > 0) {
                    // Process results. Transcribe can return multiple results/alternatives.
                    // We usually care about the first result and its first alternative.
                    const result = results[0];
                    const alternative = result.Alternatives?.[0];

                    if (alternative && alternative.Transcript && alternative.Transcript.trim().length > 0) {
                        const transcript = alternative.Transcript;
                        const isPartial = result.IsPartial;

                        if (!isPartial) {
                            // Got a final transcript segment
                            console.log("Final Japanese:", transcript);
                            // *** CALL TRANSLATE HERE (Task 1.5) ***
                            translateText(transcript);
                        } else {
                            // Optional: Handle partial results for immediate display (Task 1.4 refinement)
                            // console.log("Partial Japanese:", transcript);
                            // updateSubtitlesInContentScript(transcript, "..."); // Show partial JP, pending translation
                        }
                    }
                }
            } else if (messageType === 'exception') {
                 const messageBody = JSON.parse(message.body);
                 console.error("Transcribe Exception:", messageBody.Message);
                 updateSubtitlesInContentScript("", `[STT出错: ${messageBody.Message}]`);
                 stopProcessing(); // Stop on error
            } else {
                 console.log("Received unknown WebSocket message type:", messageType, eventType);
            }
        };
        reader.readAsArrayBuffer(blob);

    } catch (error) {
        console.error("Error processing Transcribe WebSocket message:", error);
        updateSubtitlesInContentScript("", `[处理STT结果出错: ${error.message}]`);
        stopProcessing(); // Stop on error
    }
    */
    // --- Placeholder: Simulate receiving a final transcript (Remove this when Task 1.4 is implemented) ---
    console.log("Received WebSocket message (placeholder). Simulating transcript result.");
    // In a real scenario, parse event.data and call translateText(parsedJapaneseText);
    // For now, let's simulate receiving text and triggering translation after a short delay.
    // This simulation replaces the actual message parsing logic above.
    if (!transcribeWebSocket._simulating) { // Prevent multiple timeouts from one message
        transcribeWebSocket._simulating = true;
         setTimeout(() => {
            const simulatedJapaneseText = "こんにちは、これはタブキャプチャからのテストです。"; // Example Japanese text
            console.log("Simulated Final Japanese:", simulatedJapaneseText);
            translateText(simulatedJapaneseText); // Call translate (Task 1.5 placeholder)
            delete transcribeWebSocket._simulating;
         }, 500); // Simulate processing delay
    }
    // --- End Placeholder Simulation ---
  };

   transcribeWebSocket.onerror = (event) => {
    console.error("Transcribe WebSocket error:", event);
    const errorMessage = event?.message || 'Unknown WebSocket error';
    // Attempt to get a more specific error message from the event if available
    // WebSocket ErrorEvent doesn't always have a detailed message property
    let detailedError = errorMessage;
    if (event.error) {
        detailedError = event.error.message || detailedError;
    }
    updateSubtitlesInContentScript("", `[STT连接出错: ${detailedError}]`);
    stopProcessing(); // Ensure state is reset
  };

  transcribeWebSocket.onclose = (event) => {
    console.log("Transcribe WebSocket closed:", event.code, event.reason);
    // Check if the closure was unexpected (e.g., not code 1000 or 1001)
    // See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent/code
    const unexpectedClose = isRunning && event.code !== 1000 && event.code !== 1001;

    if (unexpectedClose) {
       console.error("WebSocket closed unexpectedly, attempting to stop.");
       updateSubtitlesInContentScript("", `[STT连接意外关闭: ${event.code}]`);
       stopProcessing(); // Ensure state is reset
    } else {
       console.log("WebSocket closed gracefully or due to protocol error/going away.");
       // If isRunning is true here, it means stopProcessing was likely called,
       // which initiates the graceful close (code 1000).
       // If it was code 1001 (going away) while running, it's also unexpected.
       if (isRunning && event.code === 1001) {
            console.error("WebSocket closed unexpectedly (going away), attempting to stop.");
            updateSubtitlesInContentScript("", `[STT连接意外关闭: ${event.code}]`);
            stopProcessing();
       }
    }
  };


  // Return the WebSocket instance so the caller knows it was created (even if not fully open yet)
  return transcribeWebSocket;
}

function stopTranscribeWebSocket() {
  if (transcribeWebSocket) {
    console.log("Closing Transcribe WebSocket...");
    // Use code 1000 for normal closure
    transcribeWebSocket.close(1000, "Client stopping");
    transcribeWebSocket = null;
  }
}

// Function to send audio chunks (called by content script)
// The chunk should be an ArrayBuffer containing raw audio data (Int16Array buffer)
// This is Task 1.3. Event Stream marshalling needs to be implemented here.
function sendAudioChunkToTranscribe(chunk) {
    if (transcribeWebSocket && transcribeWebSocket.readyState === WebSocket.OPEN) {
        // *** Send the audio chunk as a binary message (Task 1.3) ***
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
        // Placeholder: Just log that a chunk was received but not sent (Remove this when Task 1.3 is implemented)
        // console.log("Received and would send audio chunk (processing disabled in example). Size:", chunk.byteLength);
        // In a real scenario, uncomment the try/catch block above.
    } else {
        // console.warn("WebSocket not open, cannot send audio chunk.");
        // Handle case where WS is not ready - buffer chunks? Drop them?
    }
}


// --- AWS Translate Logic (Task 1.5) ---
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
    // *** Call Translate API (Task 1.5, Requires @aws-sdk/client-translate) ***
    /*
    const command = new TranslateTextCommand({
      Text: japaneseText,
      SourceLanguageCode: TRANSLATE_SOURCE_LANGUAGE,
      TargetLanguageCode: TRANSLATE_TARGET_LANGUAGE,
    });
    const response = await translateClient.send(command);
    const chineseText = response.TranslatedText;
    */

    // --- Placeholder: Simulate translation delay and result (Remove this when Task 1.5 is implemented) ---
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

// Helper to send subtitle update message to the active tab (Same as before)
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

// --- Main Control Functions (Same as before, orchestrates capture initiation) ---
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

    // 2. Initialize AWS Translate Client (Task 1.5)
    // translateClient = new TranslateClient({ ... }); // Requires @aws-sdk/client-translate
    console.warn("TranslateClient initialization placeholder."); // Placeholder

    // 3. Start AWS Transcribe WebSocket connection (Now includes SigV4)
    // This is async and needs to handle connection lifecycle.
    // We start the WS connection early while waiting for audio.
    await startTranscribeWebSocket(awsConfig);
    console.log("Transcribe WebSocket setup initiated.");

    // 4. Inject content script and CSS (if not already there) and signal it to start subtitles
    // This ensures the content script is ready before we ask it to capture.
    // Note: chrome.scripting.executeScript requires 'scripting' permission and host_permissions.
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
    // This will trigger the chrome.tabCapture.capture call and the permission dialog in the content script.
    // The content script will then process audio and send chunks back via 'audioChunk' messages.
    // Requires 'tabCapture' permission in manifest.json.
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
        userError = error; // E.g., "Credentials not configured"
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

// --- Message Listener from Popup/Content Script (Same as before) ---
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
        // Send the audio chunk to the Transcribe WebSocket (Task 1.3)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsaUJBQWlCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFlBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtB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SUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWMsS0FBSztBQUN2RSx1QkFBdUI7QUFDdkIsb0JBQW9CLGVBQWUsR0FBRztBQUN0QyxJQUFJO0FBQ0o7QUFDQTtBQUNBLHFCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsbUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vY3JjMzIvYnVpbGQvYXdzX2NyYzMyLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by9jcmMzMi9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vY3JjMzIvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvYnVpbGQvY29udmVydFRvQnVmZmVyLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by9jcmMzMi9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vdXRpbC9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vY3JjMzIvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvYnVpbGQvaXNFbXB0eURhdGEuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL2NyYzMyL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL2J1aWxkL251bVRvVWludDguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL2NyYzMyL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL2J1aWxkL3VpbnQzMkFycmF5RnJvbS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vY3JjMzIvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vc2hhMjU2LWpzL2J1aWxkL21vZHVsZS9SYXdTaGEyNTYuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3NoYTI1Ni1qcy9idWlsZC9tb2R1bGUvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by9zaGEyNTYtanMvYnVpbGQvbW9kdWxlL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by9zaGEyNTYtanMvYnVpbGQvbW9kdWxlL2pzU2hhMjU2LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL2J1aWxkL21vZHVsZS9jb252ZXJ0VG9CdWZmZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvYnVpbGQvbW9kdWxlL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL2J1aWxkL21vZHVsZS9pc0VtcHR5RGF0YS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vdXRpbC9idWlsZC9tb2R1bGUvbnVtVG9VaW50OC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vdXRpbC9idWlsZC9tb2R1bGUvdWludDMyQXJyYXlGcm9tLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9kaXN0LWVzL0V2ZW50U3RyZWFtQ29kZWMuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLWNvZGVjL2Rpc3QtZXMvSGVhZGVyTWFyc2hhbGxlci5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0tY29kZWMvZGlzdC1lcy9JbnQ2NC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0tY29kZWMvZGlzdC1lcy9NZXNzYWdlLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9kaXN0LWVzL01lc3NhZ2VEZWNvZGVyU3RyZWFtLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9kaXN0LWVzL01lc3NhZ2VFbmNvZGVyU3RyZWFtLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9kaXN0LWVzL1NtaXRoeU1lc3NhZ2VEZWNvZGVyU3RyZWFtLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9kaXN0LWVzL1NtaXRoeU1lc3NhZ2VFbmNvZGVyU3RyZWFtLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9kaXN0LWVzL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9kaXN0LWVzL3NwbGl0TWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0tY29kZWMvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL2NyYzMyL2J1aWxkL2F3c19jcmMzMi5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0tY29kZWMvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL2NyYzMyL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vY3JjMzIvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0tY29kZWMvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvYnVpbGQvY29udmVydFRvQnVmZmVyLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1jb2RlYy9ub2RlX21vZHVsZXMvQGF3cy1jcnlwdG8vdXRpbC9idWlsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0tY29kZWMvbm9kZV9tb2R1bGVzL0Bhd3MtY3J5cHRvL3V0aWwvYnVpbGQvaXNFbXB0eURhdGEuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLWNvZGVjL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL2J1aWxkL251bVRvVWludDguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLWNvZGVjL25vZGVfbW9kdWxlcy9AYXdzLWNyeXB0by91dGlsL2J1aWxkL3VpbnQzMkFycmF5RnJvbS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvZXZlbnRzdHJlYW0tY29kZWMvbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtaGV4LWVuY29kaW5nL2Rpc3QtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLW1hcnNoYWxsZXIvZGlzdC1lcy9FdmVudFN0cmVhbU1hcnNoYWxsZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLW1hcnNoYWxsZXIvZGlzdC1lcy9IZWFkZXJNYXJzaGFsbGVyLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1tYXJzaGFsbGVyL2Rpc3QtZXMvSW50NjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLW1hcnNoYWxsZXIvZGlzdC1lcy9NZXNzYWdlLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9ldmVudHN0cmVhbS1tYXJzaGFsbGVyL2Rpc3QtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2V2ZW50c3RyZWFtLW1hcnNoYWxsZXIvZGlzdC1lcy9zcGxpdE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL2lzLWFycmF5LWJ1ZmZlci9kaXN0LWVzL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9wcm90b2NvbC1odHRwL2Rpc3QtZXMvRmllbGQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3Byb3RvY29sLWh0dHAvZGlzdC1lcy9GaWVsZFBvc2l0aW9uLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9wcm90b2NvbC1odHRwL2Rpc3QtZXMvRmllbGRzLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9wcm90b2NvbC1odHRwL2Rpc3QtZXMvaHR0cEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3Byb3RvY29sLWh0dHAvZGlzdC1lcy9odHRwUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvcHJvdG9jb2wtaHR0cC9kaXN0LWVzL2h0dHBSZXNwb25zZS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvcHJvdG9jb2wtaHR0cC9kaXN0LWVzL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9wcm90b2NvbC1odHRwL2Rpc3QtZXMvaXNWYWxpZEhvc3RuYW1lLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9xdWVyeXN0cmluZy1wYXJzZXIvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvc2lnbmF0dXJlLXY0L2Rpc3QtZXMvU2lnbmF0dXJlVjQuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3NpZ25hdHVyZS12NC9kaXN0LWVzL2Nsb25lUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvc2lnbmF0dXJlLXY0L2Rpc3QtZXMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9zaWduYXR1cmUtdjQvZGlzdC1lcy9jcmVkZW50aWFsRGVyaXZhdGlvbi5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvc2lnbmF0dXJlLXY0L2Rpc3QtZXMvZ2V0Q2Fub25pY2FsSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvc2lnbmF0dXJlLXY0L2Rpc3QtZXMvZ2V0Q2Fub25pY2FsUXVlcnkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3NpZ25hdHVyZS12NC9kaXN0LWVzL2dldFBheWxvYWRIYXNoLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9zaWduYXR1cmUtdjQvZGlzdC1lcy9oZWFkZXJVdGlsLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9zaWduYXR1cmUtdjQvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvc2lnbmF0dXJlLXY0L2Rpc3QtZXMvbW92ZUhlYWRlcnNUb1F1ZXJ5LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay9zaWduYXR1cmUtdjQvZGlzdC1lcy9wcmVwYXJlUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvc2lnbmF0dXJlLXY0L2Rpc3QtZXMvdXRpbERhdGUuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3NpZ25hdHVyZS12NC9ub2RlX21vZHVsZXMvQGF3cy1zZGsvdXRpbC1oZXgtZW5jb2RpbmcvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvdXJsLXBhcnNlci9kaXN0LWVzL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay91dGlsLWhleC1lbmNvZGluZy9kaXN0LWVzL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay91dGlsLW1pZGRsZXdhcmUvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvdXRpbC1taWRkbGV3YXJlL2Rpc3QtZXMvbm9ybWFsaXplUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtdXJpLWVzY2FwZS9kaXN0LWVzL2VzY2FwZS11cmktcGF0aC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvdXRpbC11cmktZXNjYXBlL2Rpc3QtZXMvZXNjYXBlLXVyaS5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvQGF3cy1zZGsvdXRpbC11cmktZXNjYXBlL2Rpc3QtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtdXRmOC1icm93c2VyL2Rpc3QtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtdXRmOC1icm93c2VyL2Rpc3QtZXMvcHVyZUpzLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay91dGlsLXV0ZjgtYnJvd3Nlci9kaXN0LWVzL3doYXR3Z0VuY29kaW5nQXBpLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay91dGlsLXV0Zjgtbm9kZS9kaXN0LWVzL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay91dGlsLXV0Zjgtbm9kZS9ub2RlX21vZHVsZXMvQGF3cy1zZGsvaXMtYXJyYXktYnVmZmVyL2Rpc3QtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtdXRmOC1ub2RlL25vZGVfbW9kdWxlcy9AYXdzLXNkay91dGlsLWJ1ZmZlci1mcm9tL2Rpc3QtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtdXRmOC9kaXN0LWVzL2Zyb21VdGY4LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtdXRmOC9kaXN0LWVzL2luZGV4LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9AYXdzLXNkay91dGlsLXV0ZjgvZGlzdC1lcy90b1VpbnQ4QXJyYXkuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0Bhd3Mtc2RrL3V0aWwtdXRmOC9kaXN0LWVzL3RvVXRmOC5icm93c2VyLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtdXRmOC9kaXN0LWVzL2Zyb21VdGY4LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11dGY4L2Rpc3QtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC11dGY4L2Rpc3QtZXMvdG9VaW50OEFycmF5LmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9Ac21pdGh5L3V0aWwtdXRmOC9kaXN0LWVzL3RvVXRmOC5icm93c2VyLmpzIiwid2VicGFjazovL2Nocm9tZS1hd3Mtc3R0LXRyYW5zbGF0ZS8uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2Lm1qcyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWF3cy1zdHQtdHJhbnNsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtYXdzLXN0dC10cmFuc2xhdGUvLi9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkF3c0NyYzMyID0gdm9pZCAwO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgdXRpbF8xID0gcmVxdWlyZShcIkBhd3MtY3J5cHRvL3V0aWxcIik7XG52YXIgaW5kZXhfMSA9IHJlcXVpcmUoXCIuL2luZGV4XCIpO1xudmFyIEF3c0NyYzMyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEF3c0NyYzMyKCkge1xuICAgICAgICB0aGlzLmNyYzMyID0gbmV3IGluZGV4XzEuQ3JjMzIoKTtcbiAgICB9XG4gICAgQXdzQ3JjMzIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICh0b0hhc2gpIHtcbiAgICAgICAgaWYgKCgwLCB1dGlsXzEuaXNFbXB0eURhdGEpKHRvSGFzaCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuY3JjMzIudXBkYXRlKCgwLCB1dGlsXzEuY29udmVydFRvQnVmZmVyKSh0b0hhc2gpKTtcbiAgICB9O1xuICAgIEF3c0NyYzMyLnByb3RvdHlwZS5kaWdlc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAoMCwgdHNsaWJfMS5fX2F3YWl0ZXIpKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKDAsIHRzbGliXzEuX19nZW5lcmF0b3IpKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCAoMCwgdXRpbF8xLm51bVRvVWludDgpKHRoaXMuY3JjMzIuZGlnZXN0KCkpXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBd3NDcmMzMjtcbn0oKSk7XG5leHBvcnRzLkF3c0NyYzMyID0gQXdzQ3JjMzI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZWGR6WDJOeVl6TXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaUxpNHZjM0pqTDJGM2MxOWpjbU16TWk1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUVzYjBWQlFXOUZPMEZCUTNCRkxITkRRVUZ6UXpzN096dEJRVWQwUXl4NVEwRkJORVU3UVVGRE5VVXNhVU5CUVdkRE8wRkJSV2hETzBsQlFVRTdVVUZEYlVJc1ZVRkJTeXhIUVVGSExFbEJRVWtzWVVGQlN5eEZRVUZGTEVOQlFVTTdTVUZYZGtNc1EwRkJRenRKUVZSRExIbENRVUZOTEVkQlFVNHNWVUZCVHl4TlFVRnJRanRSUVVOMlFpeEpRVUZKTEVsQlFVRXNhMEpCUVZjc1JVRkJReXhOUVVGTkxFTkJRVU03V1VGQlJTeFBRVUZQTzFGQlJXaERMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVRXNjMEpCUVdVc1JVRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlF6ZERMRU5CUVVNN1NVRkZTeXg1UWtGQlRTeEhRVUZhT3pzN1owSkJRMFVzYzBKQlFVOHNTVUZCUVN4cFFrRkJWU3hGUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJRenM3TzB0QlEzaERPMGxCUTBnc1pVRkJRenRCUVVGRUxFTkJRVU1zUVVGYVJDeEpRVmxETzBGQldsa3NORUpCUVZFaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJEYjNCNWNtbG5hSFFnUVcxaGVtOXVMbU52YlNCSmJtTXVJRzl5SUdsMGN5QmhabVpwYkdsaGRHVnpMaUJCYkd3Z1VtbG5hSFJ6SUZKbGMyVnlkbVZrTGx4dUx5OGdVMUJFV0MxTWFXTmxibk5sTFVsa1pXNTBhV1pwWlhJNklFRndZV05vWlMweUxqQmNibHh1YVcxd2IzSjBJSHNnU0dGemFDd2dVMjkxY21ObFJHRjBZU0I5SUdaeWIyMGdYQ0pBWVhkekxYTmtheTkwZVhCbGMxd2lPMXh1YVcxd2IzSjBJSHNnWTI5dWRtVnlkRlJ2UW5WbVptVnlMQ0JwYzBWdGNIUjVSR0YwWVN3Z2JuVnRWRzlWYVc1ME9DQjlJR1p5YjIwZ1hDSkFZWGR6TFdOeWVYQjBieTkxZEdsc1hDSTdYRzVwYlhCdmNuUWdleUJEY21Nek1pQjlJR1p5YjIwZ1hDSXVMMmx1WkdWNFhDSTdYRzVjYm1WNGNHOXlkQ0JqYkdGemN5QkJkM05EY21Nek1pQnBiWEJzWlcxbGJuUnpJRWhoYzJnZ2UxeHVJQ0J3Y21sMllYUmxJSEpsWVdSdmJteDVJR055WXpNeUlEMGdibVYzSUVOeVl6TXlLQ2s3WEc1Y2JpQWdkWEJrWVhSbEtIUnZTR0Z6YURvZ1UyOTFjbU5sUkdGMFlTa2dlMXh1SUNBZ0lHbG1JQ2hwYzBWdGNIUjVSR0YwWVNoMGIwaGhjMmdwS1NCeVpYUjFjbTQ3WEc1Y2JpQWdJQ0IwYUdsekxtTnlZek15TG5Wd1pHRjBaU2hqYjI1MlpYSjBWRzlDZFdabVpYSW9kRzlJWVhOb0tTazdYRzRnSUgxY2JseHVJQ0JoYzNsdVl5QmthV2RsYzNRb0tUb2dVSEp2YldselpUeFZhVzUwT0VGeWNtRjVQaUI3WEc0Z0lDQWdjbVYwZFhKdUlHNTFiVlJ2VldsdWREZ29kR2hwY3k1amNtTXpNaTVrYVdkbGMzUW9LU2s3WEc0Z0lIMWNibjFjYmlKZGZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXdzQ3JjMzIgPSBleHBvcnRzLkNyYzMyID0gZXhwb3J0cy5jcmMzMiA9IHZvaWQgMDtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCJAYXdzLWNyeXB0by91dGlsXCIpO1xuZnVuY3Rpb24gY3JjMzIoZGF0YSkge1xuICAgIHJldHVybiBuZXcgQ3JjMzIoKS51cGRhdGUoZGF0YSkuZGlnZXN0KCk7XG59XG5leHBvcnRzLmNyYzMyID0gY3JjMzI7XG52YXIgQ3JjMzIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ3JjMzIoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tzdW0gPSAweGZmZmZmZmZmO1xuICAgIH1cbiAgICBDcmMzMi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBkYXRhXzEgPSAoMCwgdHNsaWJfMS5fX3ZhbHVlcykoZGF0YSksIGRhdGFfMV8xID0gZGF0YV8xLm5leHQoKTsgIWRhdGFfMV8xLmRvbmU7IGRhdGFfMV8xID0gZGF0YV8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBieXRlID0gZGF0YV8xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja3N1bSA9XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmNoZWNrc3VtID4+PiA4KSBeIGxvb2t1cFRhYmxlWyh0aGlzLmNoZWNrc3VtIF4gYnl0ZSkgJiAweGZmXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFfMV8xICYmICFkYXRhXzFfMS5kb25lICYmIChfYSA9IGRhdGFfMS5yZXR1cm4pKSBfYS5jYWxsKGRhdGFfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBDcmMzMi5wcm90b3R5cGUuZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY2hlY2tzdW0gXiAweGZmZmZmZmZmKSA+Pj4gMDtcbiAgICB9O1xuICAgIHJldHVybiBDcmMzMjtcbn0oKSk7XG5leHBvcnRzLkNyYzMyID0gQ3JjMzI7XG4vLyBwcmV0dGllci1pZ25vcmVcbnZhciBhX2xvb2tVcFRhYmxlID0gW1xuICAgIDB4MDAwMDAwMDAsIDB4NzcwNzMwOTYsIDB4RUUwRTYxMkMsIDB4OTkwOTUxQkEsXG4gICAgMHgwNzZEQzQxOSwgMHg3MDZBRjQ4RiwgMHhFOTYzQTUzNSwgMHg5RTY0OTVBMyxcbiAgICAweDBFREI4ODMyLCAweDc5RENCOEE0LCAweEUwRDVFOTFFLCAweDk3RDJEOTg4LFxuICAgIDB4MDlCNjRDMkIsIDB4N0VCMTdDQkQsIDB4RTdCODJEMDcsIDB4OTBCRjFEOTEsXG4gICAgMHgxREI3MTA2NCwgMHg2QUIwMjBGMiwgMHhGM0I5NzE0OCwgMHg4NEJFNDFERSxcbiAgICAweDFBREFENDdELCAweDZERERFNEVCLCAweEY0RDRCNTUxLCAweDgzRDM4NUM3LFxuICAgIDB4MTM2Qzk4NTYsIDB4NjQ2QkE4QzAsIDB4RkQ2MkY5N0EsIDB4OEE2NUM5RUMsXG4gICAgMHgxNDAxNUM0RiwgMHg2MzA2NkNEOSwgMHhGQTBGM0Q2MywgMHg4RDA4MERGNSxcbiAgICAweDNCNkUyMEM4LCAweDRDNjkxMDVFLCAweEQ1NjA0MUU0LCAweEEyNjc3MTcyLFxuICAgIDB4M0MwM0U0RDEsIDB4NEIwNEQ0NDcsIDB4RDIwRDg1RkQsIDB4QTUwQUI1NkIsXG4gICAgMHgzNUI1QThGQSwgMHg0MkIyOTg2QywgMHhEQkJCQzlENiwgMHhBQ0JDRjk0MCxcbiAgICAweDMyRDg2Q0UzLCAweDQ1REY1Qzc1LCAweERDRDYwRENGLCAweEFCRDEzRDU5LFxuICAgIDB4MjZEOTMwQUMsIDB4NTFERTAwM0EsIDB4QzhENzUxODAsIDB4QkZEMDYxMTYsXG4gICAgMHgyMUI0RjRCNSwgMHg1NkIzQzQyMywgMHhDRkJBOTU5OSwgMHhCOEJEQTUwRixcbiAgICAweDI4MDJCODlFLCAweDVGMDU4ODA4LCAweEM2MENEOUIyLCAweEIxMEJFOTI0LFxuICAgIDB4MkY2RjdDODcsIDB4NTg2ODRDMTEsIDB4QzE2MTFEQUIsIDB4QjY2NjJEM0QsXG4gICAgMHg3NkRDNDE5MCwgMHgwMURCNzEwNiwgMHg5OEQyMjBCQywgMHhFRkQ1MTAyQSxcbiAgICAweDcxQjE4NTg5LCAweDA2QjZCNTFGLCAweDlGQkZFNEE1LCAweEU4QjhENDMzLFxuICAgIDB4NzgwN0M5QTIsIDB4MEYwMEY5MzQsIDB4OTYwOUE4OEUsIDB4RTEwRTk4MTgsXG4gICAgMHg3RjZBMERCQiwgMHgwODZEM0QyRCwgMHg5MTY0NkM5NywgMHhFNjYzNUMwMSxcbiAgICAweDZCNkI1MUY0LCAweDFDNkM2MTYyLCAweDg1NjUzMEQ4LCAweEYyNjIwMDRFLFxuICAgIDB4NkMwNjk1RUQsIDB4MUIwMUE1N0IsIDB4ODIwOEY0QzEsIDB4RjUwRkM0NTcsXG4gICAgMHg2NUIwRDlDNiwgMHgxMkI3RTk1MCwgMHg4QkJFQjhFQSwgMHhGQ0I5ODg3QyxcbiAgICAweDYyREQxRERGLCAweDE1REEyRDQ5LCAweDhDRDM3Q0YzLCAweEZCRDQ0QzY1LFxuICAgIDB4NERCMjYxNTgsIDB4M0FCNTUxQ0UsIDB4QTNCQzAwNzQsIDB4RDRCQjMwRTIsXG4gICAgMHg0QURGQTU0MSwgMHgzREQ4OTVENywgMHhBNEQxQzQ2RCwgMHhEM0Q2RjRGQixcbiAgICAweDQzNjlFOTZBLCAweDM0NkVEOUZDLCAweEFENjc4ODQ2LCAweERBNjBCOEQwLFxuICAgIDB4NDQwNDJENzMsIDB4MzMwMzFERTUsIDB4QUEwQTRDNUYsIDB4REQwRDdDQzksXG4gICAgMHg1MDA1NzEzQywgMHgyNzAyNDFBQSwgMHhCRTBCMTAxMCwgMHhDOTBDMjA4NixcbiAgICAweDU3NjhCNTI1LCAweDIwNkY4NUIzLCAweEI5NjZENDA5LCAweENFNjFFNDlGLFxuICAgIDB4NUVERUY5MEUsIDB4MjlEOUM5OTgsIDB4QjBEMDk4MjIsIDB4QzdEN0E4QjQsXG4gICAgMHg1OUIzM0QxNywgMHgyRUI0MEQ4MSwgMHhCN0JENUMzQiwgMHhDMEJBNkNBRCxcbiAgICAweEVEQjg4MzIwLCAweDlBQkZCM0I2LCAweDAzQjZFMjBDLCAweDc0QjFEMjlBLFxuICAgIDB4RUFENTQ3MzksIDB4OUREMjc3QUYsIDB4MDREQjI2MTUsIDB4NzNEQzE2ODMsXG4gICAgMHhFMzYzMEIxMiwgMHg5NDY0M0I4NCwgMHgwRDZENkEzRSwgMHg3QTZBNUFBOCxcbiAgICAweEU0MEVDRjBCLCAweDkzMDlGRjlELCAweDBBMDBBRTI3LCAweDdEMDc5RUIxLFxuICAgIDB4RjAwRjkzNDQsIDB4ODcwOEEzRDIsIDB4MUUwMUYyNjgsIDB4NjkwNkMyRkUsXG4gICAgMHhGNzYyNTc1RCwgMHg4MDY1NjdDQiwgMHgxOTZDMzY3MSwgMHg2RTZCMDZFNyxcbiAgICAweEZFRDQxQjc2LCAweDg5RDMyQkUwLCAweDEwREE3QTVBLCAweDY3REQ0QUNDLFxuICAgIDB4RjlCOURGNkYsIDB4OEVCRUVGRjksIDB4MTdCN0JFNDMsIDB4NjBCMDhFRDUsXG4gICAgMHhENkQ2QTNFOCwgMHhBMUQxOTM3RSwgMHgzOEQ4QzJDNCwgMHg0RkRGRjI1MixcbiAgICAweEQxQkI2N0YxLCAweEE2QkM1NzY3LCAweDNGQjUwNkRELCAweDQ4QjIzNjRCLFxuICAgIDB4RDgwRDJCREEsIDB4QUYwQTFCNEMsIDB4MzYwMzRBRjYsIDB4NDEwNDdBNjAsXG4gICAgMHhERjYwRUZDMywgMHhBODY3REY1NSwgMHgzMTZFOEVFRiwgMHg0NjY5QkU3OSxcbiAgICAweENCNjFCMzhDLCAweEJDNjY4MzFBLCAweDI1NkZEMkEwLCAweDUyNjhFMjM2LFxuICAgIDB4Q0MwQzc3OTUsIDB4QkIwQjQ3MDMsIDB4MjIwMjE2QjksIDB4NTUwNTI2MkYsXG4gICAgMHhDNUJBM0JCRSwgMHhCMkJEMEIyOCwgMHgyQkI0NUE5MiwgMHg1Q0IzNkEwNCxcbiAgICAweEMyRDdGRkE3LCAweEI1RDBDRjMxLCAweDJDRDk5RThCLCAweDVCREVBRTFELFxuICAgIDB4OUI2NEMyQjAsIDB4RUM2M0YyMjYsIDB4NzU2QUEzOUMsIDB4MDI2RDkzMEEsXG4gICAgMHg5QzA5MDZBOSwgMHhFQjBFMzYzRiwgMHg3MjA3Njc4NSwgMHgwNTAwNTcxMyxcbiAgICAweDk1QkY0QTgyLCAweEUyQjg3QTE0LCAweDdCQjEyQkFFLCAweDBDQjYxQjM4LFxuICAgIDB4OTJEMjhFOUIsIDB4RTVENUJFMEQsIDB4N0NEQ0VGQjcsIDB4MEJEQkRGMjEsXG4gICAgMHg4NkQzRDJENCwgMHhGMUQ0RTI0MiwgMHg2OEREQjNGOCwgMHgxRkRBODM2RSxcbiAgICAweDgxQkUxNkNELCAweEY2QjkyNjVCLCAweDZGQjA3N0UxLCAweDE4Qjc0Nzc3LFxuICAgIDB4ODgwODVBRTYsIDB4RkYwRjZBNzAsIDB4NjYwNjNCQ0EsIDB4MTEwMTBCNUMsXG4gICAgMHg4RjY1OUVGRiwgMHhGODYyQUU2OSwgMHg2MTZCRkZEMywgMHgxNjZDQ0Y0NSxcbiAgICAweEEwMEFFMjc4LCAweEQ3MEREMkVFLCAweDRFMDQ4MzU0LCAweDM5MDNCM0MyLFxuICAgIDB4QTc2NzI2NjEsIDB4RDA2MDE2RjcsIDB4NDk2OTQ3NEQsIDB4M0U2RTc3REIsXG4gICAgMHhBRUQxNkE0QSwgMHhEOUQ2NUFEQywgMHg0MERGMEI2NiwgMHgzN0Q4M0JGMCxcbiAgICAweEE5QkNBRTUzLCAweERFQkI5RUM1LCAweDQ3QjJDRjdGLCAweDMwQjVGRkU5LFxuICAgIDB4QkRCREYyMUMsIDB4Q0FCQUMyOEEsIDB4NTNCMzkzMzAsIDB4MjRCNEEzQTYsXG4gICAgMHhCQUQwMzYwNSwgMHhDREQ3MDY5MywgMHg1NERFNTcyOSwgMHgyM0Q5NjdCRixcbiAgICAweEIzNjY3QTJFLCAweEM0NjE0QUI4LCAweDVENjgxQjAyLCAweDJBNkYyQjk0LFxuICAgIDB4QjQwQkJFMzcsIDB4QzMwQzhFQTEsIDB4NUEwNURGMUIsIDB4MkQwMkVGOEQsXG5dO1xudmFyIGxvb2t1cFRhYmxlID0gKDAsIHV0aWxfMS51aW50MzJBcnJheUZyb20pKGFfbG9va1VwVGFibGUpO1xudmFyIGF3c19jcmMzMl8xID0gcmVxdWlyZShcIi4vYXdzX2NyYzMyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQXdzQ3JjMzJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGF3c19jcmMzMl8xLkF3c0NyYzMyOyB9IH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYVc1a1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lJdUxpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJMSGxEUVVGcFJEdEJRVVZxUkN4VFFVRm5RaXhMUVVGTExFTkJRVU1zU1VGQlowSTdTVUZEY0VNc1QwRkJUeXhKUVVGSkxFdEJRVXNzUlVGQlJTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF6dEJRVU16UXl4RFFVRkRPMEZCUmtRc2MwSkJSVU03UVVGRlJEdEpRVUZCTzFGQlExVXNZVUZCVVN4SFFVRkhMRlZCUVZVc1EwRkJRenRKUVdOb1F5eERRVUZETzBsQldrTXNjMEpCUVUwc1IwRkJUaXhWUVVGUExFbEJRV2RDT3pzN1dVRkRja0lzUzBGQmJVSXNTVUZCUVN4VFFVRkJMSE5DUVVGQkxFbEJRVWtzUTBGQlFTd3dRa0ZCUVN3MFEwRkJSVHRuUWtGQmNFSXNTVUZCVFN4SlFVRkpMR2xDUVVGQk8yZENRVU5pTEVsQlFVa3NRMEZCUXl4UlFVRlJPMjlDUVVOWUxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNTMEZCU3l4RFFVRkRMRU5CUVVNc1IwRkJSeXhYUVVGWExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlEzUkZPenM3T3pzN096czdVVUZGUkN4UFFVRlBMRWxCUVVrc1EwRkJRenRKUVVOa0xFTkJRVU03U1VGRlJDeHpRa0ZCVFN4SFFVRk9PMUZCUTBVc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wbEJRelZETEVOQlFVTTdTVUZEU0N4WlFVRkRPMEZCUVVRc1EwRkJReXhCUVdaRUxFbEJaVU03UVVGbVdTeHpRa0ZCU3p0QlFXbENiRUlzYTBKQlFXdENPMEZCUTJ4Q0xFbEJRVTBzWVVGQllTeEhRVUZITzBsQlEzQkNMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZET1VNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlR0SlFVTTVReXhWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZPMGxCUXpsRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRPVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWVHRKUVVNNVF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRemxETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRE9VTXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZUdEpRVU01UXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlF6bERMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZET1VNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlR0SlFVTTVReXhWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZPMGxCUXpsRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRPVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWVHRKUVVNNVF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRemxETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRE9VTXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZUdEpRVU01UXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlF6bERMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZET1VNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlR0SlFVTTVReXhWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZPMGxCUXpsRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRPVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWVHRKUVVNNVF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRemxETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRE9VTXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZUdEpRVU01UXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlF6bERMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZET1VNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlR0SlFVTTVReXhWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZPMGxCUXpsRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRPVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWVHRKUVVNNVF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRemxETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRE9VTXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZUdEpRVU01UXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlF6bERMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZET1VNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlR0SlFVTTVReXhWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZPMGxCUXpsRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRPVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWVHRKUVVNNVF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRemxETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRE9VTXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZUdEpRVU01UXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlF6bERMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZET1VNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlR0SlFVTTVReXhWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZPMGxCUXpsRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRPVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWVHRKUVVNNVF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRemxETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRE9VTXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZUdEpRVU01UXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlF6bERMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdTVUZET1VNc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlR0SlFVTTVReXhWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZPMGxCUXpsRExGVkJRVlVzUlVGQlJTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVN1NVRkRPVU1zVlVGQlZTeEZRVUZGTEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWVHRKUVVNNVF5eFZRVUZWTEVWQlFVVXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVk8wbEJRemxETEZWQlFWVXNSVUZCUlN4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlU3U1VGRE9VTXNWVUZCVlN4RlFVRkZMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZUdEpRVU01UXl4VlFVRlZMRVZCUVVVc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUlVGQlJTeFZRVUZWTzBsQlF6bERMRlZCUVZVc1JVRkJSU3hWUVVGVkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZWQlFWVTdRMEZETDBNc1EwRkJRenRCUVVOR0xFbEJRVTBzVjBGQlZ5eEhRVUZuUWl4SlFVRkJMSE5DUVVGbExFVkJRVU1zWVVGQllTeERRVUZETEVOQlFVRTdRVUZETDBRc2VVTkJRWFZETzBGQlFUbENMSEZIUVVGQkxGRkJRVkVzVDBGQlFTSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdkV2x1ZERNeVFYSnlZWGxHY205dGZTQm1jbTl0SUZ3aVFHRjNjeTFqY25sd2RHOHZkWFJwYkZ3aU8xeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZM0pqTXpJb1pHRjBZVG9nVldsdWREaEJjbkpoZVNrNklHNTFiV0psY2lCN1hHNGdJSEpsZEhWeWJpQnVaWGNnUTNKak16SW9LUzUxY0dSaGRHVW9aR0YwWVNrdVpHbG5aWE4wS0NrN1hHNTlYRzVjYm1WNGNHOXlkQ0JqYkdGemN5QkRjbU16TWlCN1hHNGdJSEJ5YVhaaGRHVWdZMmhsWTJ0emRXMGdQU0F3ZUdabVptWm1abVptTzF4dVhHNGdJSFZ3WkdGMFpTaGtZWFJoT2lCVmFXNTBPRUZ5Y21GNUtUb2dkR2hwY3lCN1hHNGdJQ0FnWm05eUlDaGpiMjV6ZENCaWVYUmxJRzltSUdSaGRHRXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVkyaGxZMnR6ZFcwZ1BWeHVJQ0FnSUNBZ0lDQW9kR2hwY3k1amFHVmphM04xYlNBK1BqNGdPQ2tnWGlCc2IyOXJkWEJVWVdKc1pWc29kR2hwY3k1amFHVmphM04xYlNCZUlHSjVkR1VwSUNZZ01IaG1abDA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCa2FXZGxjM1FvS1RvZ2JuVnRZbVZ5SUh0Y2JpQWdJQ0J5WlhSMWNtNGdLSFJvYVhNdVkyaGxZMnR6ZFcwZ1hpQXdlR1ptWm1abVptWm1LU0ErUGo0Z01EdGNiaUFnZlZ4dWZWeHVYRzR2THlCd2NtVjBkR2xsY2kxcFoyNXZjbVZjYm1OdmJuTjBJR0ZmYkc5dmExVndWR0ZpYkdVZ1BTQmJYRzRnSURCNE1EQXdNREF3TURBc0lEQjROemN3TnpNd09UWXNJREI0UlVVd1JUWXhNa01zSURCNE9Ua3dPVFV4UWtFc1hHNGdJREI0TURjMlJFTTBNVGtzSURCNE56QTJRVVkwT0VZc0lEQjRSVGsyTTBFMU16VXNJREI0T1VVMk5EazFRVE1zWEc0Z0lEQjRNRVZFUWpnNE16SXNJREI0TnpsRVEwSTRRVFFzSURCNFJUQkVOVVU1TVVVc0lEQjRPVGRFTWtRNU9EZ3NYRzRnSURCNE1EbENOalJETWtJc0lEQjROMFZDTVRkRFFrUXNJREI0UlRkQ09ESkVNRGNzSURCNE9UQkNSakZFT1RFc1hHNGdJREI0TVVSQ056RXdOalFzSURCNE5rRkNNREl3UmpJc0lEQjRSak5DT1RjeE5EZ3NJREI0T0RSQ1JUUXhSRVVzWEc0Z0lEQjRNVUZFUVVRME4wUXNJREI0TmtSRVJFVTBSVUlzSURCNFJqUkVORUkxTlRFc0lEQjRPRE5FTXpnMVF6Y3NYRzRnSURCNE1UTTJRems0TlRZc0lEQjROalEyUWtFNFF6QXNJREI0UmtRMk1rWTVOMEVzSURCNE9FRTJOVU01UlVNc1hHNGdJREI0TVRRd01UVkRORVlzSURCNE5qTXdOalpEUkRrc0lEQjRSa0V3UmpORU5qTXNJREI0T0VRd09EQkVSalVzWEc0Z0lEQjRNMEkyUlRJd1F6Z3NJREI0TkVNMk9URXdOVVVzSURCNFJEVTJNRFF4UlRRc0lEQjRRVEkyTnpjeE56SXNYRzRnSURCNE0wTXdNMFUwUkRFc0lEQjRORUl3TkVRME5EY3NJREI0UkRJd1JEZzFSa1FzSURCNFFUVXdRVUkxTmtJc1hHNGdJREI0TXpWQ05VRTRSa0VzSURCNE5ESkNNams0TmtNc0lEQjRSRUpDUWtNNVJEWXNJREI0UVVOQ1EwWTVOREFzWEc0Z0lEQjRNekpFT0RaRFJUTXNJREI0TkRWRVJqVkROelVzSURCNFJFTkVOakJFUTBZc0lEQjRRVUpFTVRORU5Ua3NYRzRnSURCNE1qWkVPVE13UVVNc0lEQjROVEZFUlRBd00wRXNJREI0UXpoRU56VXhPREFzSURCNFFrWkVNRFl4TVRZc1hHNGdJREI0TWpGQ05FWTBRalVzSURCNE5UWkNNME0wTWpNc0lEQjRRMFpDUVRrMU9Ua3NJREI0UWpoQ1JFRTFNRVlzWEc0Z0lEQjRNamd3TWtJNE9VVXNJREI0TlVZd05UZzRNRGdzSURCNFF6WXdRMFE1UWpJc0lEQjRRakV3UWtVNU1qUXNYRzRnSURCNE1rWTJSamRET0Rjc0lEQjROVGcyT0RSRE1URXNJREI0UXpFMk1URkVRVUlzSURCNFFqWTJOakpFTTBRc1hHNGdJREI0TnpaRVF6UXhPVEFzSURCNE1ERkVRamN4TURZc0lEQjRPVGhFTWpJd1FrTXNJREI0UlVaRU5URXdNa0VzWEc0Z0lEQjROekZDTVRnMU9Ea3NJREI0TURaQ05rSTFNVVlzSURCNE9VWkNSa1UwUVRVc0lEQjRSVGhDT0VRME16TXNYRzRnSURCNE56Z3dOME01UVRJc0lEQjRNRVl3TUVZNU16UXNJREI0T1RZd09VRTRPRVVzSURCNFJURXdSVGs0TVRnc1hHNGdJREI0TjBZMlFUQkVRa0lzSURCNE1EZzJSRE5FTWtRc0lEQjRPVEUyTkRaRE9UY3NJREI0UlRZMk16VkRNREVzWEc0Z0lEQjROa0kyUWpVeFJqUXNJREI0TVVNMlF6WXhOaklzSURCNE9EVTJOVE13UkRnc0lEQjRSakkyTWpBd05FVXNYRzRnSURCNE5rTXdOamsxUlVRc0lEQjRNVUl3TVVFMU4wSXNJREI0T0RJd09FWTBRekVzSURCNFJqVXdSa00wTlRjc1hHNGdJREI0TmpWQ01FUTVRellzSURCNE1USkNOMFU1TlRBc0lEQjRPRUpDUlVJNFJVRXNJREI0UmtOQ09UZzROME1zWEc0Z0lEQjROakpFUkRGRVJFWXNJREI0TVRWRVFUSkVORGtzSURCNE9FTkVNemREUmpNc0lEQjRSa0pFTkRSRE5qVXNYRzRnSURCNE5FUkNNall4TlRnc0lEQjRNMEZDTlRVeFEwVXNJREI0UVROQ1F6QXdOelFzSURCNFJEUkNRak13UlRJc1hHNGdJREI0TkVGRVJrRTFOREVzSURCNE0wUkVPRGsxUkRjc0lEQjRRVFJFTVVNME5rUXNJREI0UkRORU5rWTBSa0lzWEc0Z0lEQjRORE0yT1VVNU5rRXNJREI0TXpRMlJVUTVSa01zSURCNFFVUTJOemc0TkRZc0lEQjRSRUUyTUVJNFJEQXNYRzRnSURCNE5EUXdOREpFTnpNc0lEQjRNek13TXpGRVJUVXNJREI0UVVFd1FUUkROVVlzSURCNFJFUXdSRGREUXprc1hHNGdJREI0TlRBd05UY3hNME1zSURCNE1qY3dNalF4UVVFc0lEQjRRa1V3UWpFd01UQXNJREI0UXprd1F6SXdPRFlzWEc0Z0lEQjROVGMyT0VJMU1qVXNJREI0TWpBMlJqZzFRak1zSURCNFFqazJOa1EwTURrc0lEQjRRMFUyTVVVME9VWXNYRzRnSURCNE5VVkVSVVk1TUVVc0lEQjRNamxFT1VNNU9UZ3NJREI0UWpCRU1EazRNaklzSURCNFF6ZEVOMEU0UWpRc1hHNGdJREI0TlRsQ016TkVNVGNzSURCNE1rVkNOREJFT0RFc0lEQjRRamRDUkRWRE0wSXNJREI0UXpCQ1FUWkRRVVFzWEc0Z0lEQjRSVVJDT0Rnek1qQXNJREI0T1VGQ1JrSXpRallzSURCNE1ETkNOa1V5TUVNc0lEQjROelJDTVVReU9VRXNYRzRnSURCNFJVRkVOVFEzTXprc0lEQjRPVVJFTWpjM1FVWXNJREI0TURSRVFqSTJNVFVzSURCNE56TkVRekUyT0RNc1hHNGdJREI0UlRNMk16QkNNVElzSURCNE9UUTJORE5DT0RRc0lEQjRNRVEyUkRaQk0wVXNJREI0TjBFMlFUVkJRVGdzWEc0Z0lEQjRSVFF3UlVOR01FSXNJREI0T1RNd09VWkdPVVFzSURCNE1FRXdNRUZGTWpjc0lEQjROMFF3TnpsRlFqRXNYRzRnSURCNFJqQXdSamt6TkRRc0lEQjRPRGN3T0VFelJESXNJREI0TVVVd01VWXlOamdzSURCNE5qa3dOa015UmtVc1hHNGdJREI0UmpjMk1qVTNOVVFzSURCNE9EQTJOVFkzUTBJc0lEQjRNVGsyUXpNMk56RXNJREI0TmtVMlFqQTJSVGNzWEc0Z0lEQjRSa1ZFTkRGQ056WXNJREI0T0RsRU16SkNSVEFzSURCNE1UQkVRVGRCTlVFc0lEQjROamRFUkRSQlEwTXNYRzRnSURCNFJqbENPVVJHTmtZc0lEQjRPRVZDUlVWR1Jqa3NJREI0TVRkQ04wSkZORE1zSURCNE5qQkNNRGhGUkRVc1hHNGdJREI0UkRaRU5rRXpSVGdzSURCNFFURkVNVGt6TjBVc0lEQjRNemhFT0VNeVF6UXNJREI0TkVaRVJrWXlOVElzWEc0Z0lEQjRSREZDUWpZM1JqRXNJREI0UVRaQ1F6VTNOamNzSURCNE0wWkNOVEEyUkVRc0lEQjRORGhDTWpNMk5FSXNYRzRnSURCNFJEZ3dSREpDUkVFc0lEQjRRVVl3UVRGQ05FTXNJREI0TXpZd016UkJSallzSURCNE5ERXdORGRCTmpBc1hHNGdJREI0UkVZMk1FVkdRek1zSURCNFFUZzJOMFJHTlRVc0lEQjRNekUyUlRoRlJVWXNJREI0TkRZMk9VSkZOemtzWEc0Z0lEQjRRMEkyTVVJek9FTXNJREI0UWtNMk5qZ3pNVUVzSURCNE1qVTJSa1F5UVRBc0lEQjROVEkyT0VVeU16WXNYRzRnSURCNFEwTXdRemMzT1RVc0lEQjRRa0l3UWpRM01ETXNJREI0TWpJd01qRTJRamtzSURCNE5UVXdOVEkyTWtZc1hHNGdJREI0UXpWQ1FUTkNRa1VzSURCNFFqSkNSREJDTWpnc0lEQjRNa0pDTkRWQk9USXNJREI0TlVOQ016WkJNRFFzWEc0Z0lEQjRRekpFTjBaR1FUY3NJREI0UWpWRU1FTkdNekVzSURCNE1rTkVPVGxGT0VJc0lEQjROVUpFUlVGRk1VUXNYRzRnSURCNE9VSTJORU15UWpBc0lEQjRSVU0yTTBZeU1qWXNJREI0TnpVMlFVRXpPVU1zSURCNE1ESTJSRGt6TUVFc1hHNGdJREI0T1VNd09UQTJRVGtzSURCNFJVSXdSVE0yTTBZc0lEQjROekl3TnpZM09EVXNJREI0TURVd01EVTNNVE1zWEc0Z0lEQjRPVFZDUmpSQk9ESXNJREI0UlRKQ09EZEJNVFFzSURCNE4wSkNNVEpDUVVVc0lEQjRNRU5DTmpGQ016Z3NYRzRnSURCNE9USkVNamhGT1VJc0lEQjRSVFZFTlVKRk1FUXNJREI0TjBORVEwVkdRamNzSURCNE1FSkVRa1JHTWpFc1hHNGdJREI0T0RaRU0wUXlSRFFzSURCNFJqRkVORVV5TkRJc0lEQjROamhFUkVJelJqZ3NJREI0TVVaRVFUZ3pOa1VzWEc0Z0lEQjRPREZDUlRFMlEwUXNJREI0UmpaQ09USTJOVUlzSURCNE5rWkNNRGMzUlRFc0lEQjRNVGhDTnpRM056Y3NYRzRnSURCNE9EZ3dPRFZCUlRZc0lEQjRSa1l3UmpaQk56QXNJREI0TmpZd05qTkNRMEVzSURCNE1URXdNVEJDTlVNc1hHNGdJREI0T0VZMk5UbEZSa1lzSURCNFJqZzJNa0ZGTmprc0lEQjROakUyUWtaR1JETXNJREI0TVRZMlEwTkdORFVzWEc0Z0lEQjRRVEF3UVVVeU56Z3NJREI0UkRjd1JFUXlSVVVzSURCNE5FVXdORGd6TlRRc0lEQjRNemt3TTBJelF6SXNYRzRnSURCNFFUYzJOekkyTmpFc0lEQjRSREEyTURFMlJqY3NJREI0TkRrMk9UUTNORVFzSURCNE0wVTJSVGMzUkVJc1hHNGdJREI0UVVWRU1UWkJORUVzSURCNFJEbEVOalZCUkVNc0lEQjROREJFUmpCQ05qWXNJREI0TXpkRU9ETkNSakFzWEc0Z0lEQjRRVGxDUTBGRk5UTXNJREI0UkVWQ1FqbEZRelVzSURCNE5EZENNa05HTjBZc0lEQjRNekJDTlVaR1JUa3NYRzRnSURCNFFrUkNSRVl5TVVNc0lEQjRRMEZDUVVNeU9FRXNJREI0TlROQ016a3pNekFzSURCNE1qUkNORUV6UVRZc1hHNGdJREI0UWtGRU1ETTJNRFVzSURCNFEwUkVOekEyT1RNc0lEQjROVFJFUlRVM01qa3NJREI0TWpORU9UWTNRa1lzWEc0Z0lEQjRRak0yTmpkQk1rVXNJREI0UXpRMk1UUkJRamdzSURCNE5VUTJPREZDTURJc0lEQjRNa0UyUmpKQ09UUXNYRzRnSURCNFFqUXdRa0pGTXpjc0lEQjRRek13UXpoRlFURXNJREI0TlVFd05VUkdNVUlzSURCNE1rUXdNa1ZHT0VRc1hHNWRPMXh1WTI5dWMzUWdiRzl2YTNWd1ZHRmliR1U2SUZWcGJuUXpNa0Z5Y21GNUlEMGdkV2x1ZERNeVFYSnlZWGxHY205dEtHRmZiRzl2YTFWd1ZHRmliR1VwWEc1bGVIQnZjblFnZXlCQmQzTkRjbU16TWlCOUlHWnliMjBnWENJdUwyRjNjMTlqY21Nek1sd2lPMXh1SWwxOSIsIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbnZlcnRUb0J1ZmZlciA9IHZvaWQgMDtcbnZhciB1dGlsX3V0ZjhfYnJvd3Nlcl8xID0gcmVxdWlyZShcIkBhd3Mtc2RrL3V0aWwtdXRmOC1icm93c2VyXCIpO1xuLy8gUXVpY2sgcG9seWZpbGxcbnZhciBmcm9tVXRmOCA9IHR5cGVvZiBCdWZmZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgQnVmZmVyLmZyb21cbiAgICA/IGZ1bmN0aW9uIChpbnB1dCkgeyByZXR1cm4gQnVmZmVyLmZyb20oaW5wdXQsIFwidXRmOFwiKTsgfVxuICAgIDogdXRpbF91dGY4X2Jyb3dzZXJfMS5mcm9tVXRmODtcbmZ1bmN0aW9uIGNvbnZlcnRUb0J1ZmZlcihkYXRhKSB7XG4gICAgLy8gQWxyZWFkeSBhIFVpbnQ4LCBkbyBub3RoaW5nXG4gICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBVaW50OEFycmF5KVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGZyb21VdGY4KGRhdGEpO1xuICAgIH1cbiAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGggLyBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEpO1xufVxuZXhwb3J0cy5jb252ZXJ0VG9CdWZmZXIgPSBjb252ZXJ0VG9CdWZmZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb252ZXJ0VG9CdWZmZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudWludDMyQXJyYXlGcm9tID0gZXhwb3J0cy5udW1Ub1VpbnQ4ID0gZXhwb3J0cy5pc0VtcHR5RGF0YSA9IGV4cG9ydHMuY29udmVydFRvQnVmZmVyID0gdm9pZCAwO1xudmFyIGNvbnZlcnRUb0J1ZmZlcl8xID0gcmVxdWlyZShcIi4vY29udmVydFRvQnVmZmVyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiY29udmVydFRvQnVmZmVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb252ZXJ0VG9CdWZmZXJfMS5jb252ZXJ0VG9CdWZmZXI7IH0gfSk7XG52YXIgaXNFbXB0eURhdGFfMSA9IHJlcXVpcmUoXCIuL2lzRW1wdHlEYXRhXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaXNFbXB0eURhdGFcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGlzRW1wdHlEYXRhXzEuaXNFbXB0eURhdGE7IH0gfSk7XG52YXIgbnVtVG9VaW50OF8xID0gcmVxdWlyZShcIi4vbnVtVG9VaW50OFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIm51bVRvVWludDhcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bVRvVWludDhfMS5udW1Ub1VpbnQ4OyB9IH0pO1xudmFyIHVpbnQzMkFycmF5RnJvbV8xID0gcmVxdWlyZShcIi4vdWludDMyQXJyYXlGcm9tXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwidWludDMyQXJyYXlGcm9tXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1aW50MzJBcnJheUZyb21fMS51aW50MzJBcnJheUZyb207IH0gfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0VtcHR5RGF0YSA9IHZvaWQgMDtcbmZ1bmN0aW9uIGlzRW1wdHlEYXRhKGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5ieXRlTGVuZ3RoID09PSAwO1xufVxuZXhwb3J0cy5pc0VtcHR5RGF0YSA9IGlzRW1wdHlEYXRhO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNFbXB0eURhdGEuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubnVtVG9VaW50OCA9IHZvaWQgMDtcbmZ1bmN0aW9uIG51bVRvVWludDgobnVtKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgKG51bSAmIDB4ZmYwMDAwMDApID4+IDI0LFxuICAgICAgICAobnVtICYgMHgwMGZmMDAwMCkgPj4gMTYsXG4gICAgICAgIChudW0gJiAweDAwMDBmZjAwKSA+PiA4LFxuICAgICAgICBudW0gJiAweDAwMDAwMGZmLFxuICAgIF0pO1xufVxuZXhwb3J0cy5udW1Ub1VpbnQ4ID0gbnVtVG9VaW50ODtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW51bVRvVWludDguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudWludDMyQXJyYXlGcm9tID0gdm9pZCAwO1xuLy8gSUUgMTEgZG9lcyBub3Qgc3VwcG9ydCBBcnJheS5mcm9tLCBzbyB3ZSBkbyBpdCBtYW51YWxseVxuZnVuY3Rpb24gdWludDMyQXJyYXlGcm9tKGFfbG9va1VwVGFibGUpIHtcbiAgICBpZiAoIVVpbnQzMkFycmF5LmZyb20pIHtcbiAgICAgICAgdmFyIHJldHVybl9hcnJheSA9IG5ldyBVaW50MzJBcnJheShhX2xvb2tVcFRhYmxlLmxlbmd0aCk7XG4gICAgICAgIHZhciBhX2luZGV4ID0gMDtcbiAgICAgICAgd2hpbGUgKGFfaW5kZXggPCBhX2xvb2tVcFRhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuX2FycmF5W2FfaW5kZXhdID0gYV9sb29rVXBUYWJsZVthX2luZGV4XTtcbiAgICAgICAgICAgIGFfaW5kZXggKz0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuX2FycmF5O1xuICAgIH1cbiAgICByZXR1cm4gVWludDMyQXJyYXkuZnJvbShhX2xvb2tVcFRhYmxlKTtcbn1cbmV4cG9ydHMudWludDMyQXJyYXlGcm9tID0gdWludDMyQXJyYXlGcm9tO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dWludDMyQXJyYXlGcm9tLmpzLm1hcCIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NyZWF0ZUJpbmRpbmcobywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsImltcG9ydCB7IEJMT0NLX1NJWkUsIERJR0VTVF9MRU5HVEgsIElOSVQsIEtFWSwgTUFYX0hBU0hBQkxFX0xFTkdUSCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIFJhd1NoYTI1NiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSYXdTaGEyNTYoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBJbnQzMkFycmF5LmZyb20oSU5JVCk7XG4gICAgICAgIHRoaXMudGVtcCA9IG5ldyBJbnQzMkFycmF5KDY0KTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgVWludDhBcnJheSg2NCk7XG4gICAgICAgIHRoaXMuYnVmZmVyTGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5ieXRlc0hhc2hlZCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZmluaXNoZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgUmF3U2hhMjU2LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5maW5pc2hlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdGVkIHRvIHVwZGF0ZSBhbiBhbHJlYWR5IGZpbmlzaGVkIGhhc2guXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IDA7XG4gICAgICAgIHZhciBieXRlTGVuZ3RoID0gZGF0YS5ieXRlTGVuZ3RoO1xuICAgICAgICB0aGlzLmJ5dGVzSGFzaGVkICs9IGJ5dGVMZW5ndGg7XG4gICAgICAgIGlmICh0aGlzLmJ5dGVzSGFzaGVkICogOCA+IE1BWF9IQVNIQUJMRV9MRU5HVEgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBoYXNoIG1vcmUgdGhhbiAyXjUzIC0gMSBiaXRzXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChieXRlTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbdGhpcy5idWZmZXJMZW5ndGgrK10gPSBkYXRhW3Bvc2l0aW9uKytdO1xuICAgICAgICAgICAgYnl0ZUxlbmd0aC0tO1xuICAgICAgICAgICAgaWYgKHRoaXMuYnVmZmVyTGVuZ3RoID09PSBCTE9DS19TSVpFKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNoQnVmZmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXJMZW5ndGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBSYXdTaGEyNTYucHJvdG90eXBlLmRpZ2VzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpbmlzaGVkKSB7XG4gICAgICAgICAgICB2YXIgYml0c0hhc2hlZCA9IHRoaXMuYnl0ZXNIYXNoZWQgKiA4O1xuICAgICAgICAgICAgdmFyIGJ1ZmZlclZpZXcgPSBuZXcgRGF0YVZpZXcodGhpcy5idWZmZXIuYnVmZmVyLCB0aGlzLmJ1ZmZlci5ieXRlT2Zmc2V0LCB0aGlzLmJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgICAgICAgICAgIHZhciB1bmRlY29yYXRlZExlbmd0aCA9IHRoaXMuYnVmZmVyTGVuZ3RoO1xuICAgICAgICAgICAgYnVmZmVyVmlldy5zZXRVaW50OCh0aGlzLmJ1ZmZlckxlbmd0aCsrLCAweDgwKTtcbiAgICAgICAgICAgIC8vIEVuc3VyZSB0aGUgZmluYWwgYmxvY2sgaGFzIGVub3VnaCByb29tIGZvciB0aGUgaGFzaGVkIGxlbmd0aFxuICAgICAgICAgICAgaWYgKHVuZGVjb3JhdGVkTGVuZ3RoICUgQkxPQ0tfU0laRSA+PSBCTE9DS19TSVpFIC0gOCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmJ1ZmZlckxlbmd0aDsgaSA8IEJMT0NLX1NJWkU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXJWaWV3LnNldFVpbnQ4KGksIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmhhc2hCdWZmZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1ZmZlckxlbmd0aCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5idWZmZXJMZW5ndGg7IGkgPCBCTE9DS19TSVpFIC0gODsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyVmlldy5zZXRVaW50OChpLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1ZmZlclZpZXcuc2V0VWludDMyKEJMT0NLX1NJWkUgLSA4LCBNYXRoLmZsb29yKGJpdHNIYXNoZWQgLyAweDEwMDAwMDAwMCksIHRydWUpO1xuICAgICAgICAgICAgYnVmZmVyVmlldy5zZXRVaW50MzIoQkxPQ0tfU0laRSAtIDQsIGJpdHNIYXNoZWQpO1xuICAgICAgICAgICAgdGhpcy5oYXNoQnVmZmVyKCk7XG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGUgdmFsdWUgaW4gc3RhdGUgaXMgbGl0dGxlLWVuZGlhbiByYXRoZXIgdGhhbiBiaWctZW5kaWFuLCBzbyBmbGlwXG4gICAgICAgIC8vIGVhY2ggd29yZCBpbnRvIGEgbmV3IFVpbnQ4QXJyYXlcbiAgICAgICAgdmFyIG91dCA9IG5ldyBVaW50OEFycmF5KERJR0VTVF9MRU5HVEgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgb3V0W2kgKiA0XSA9ICh0aGlzLnN0YXRlW2ldID4+PiAyNCkgJiAweGZmO1xuICAgICAgICAgICAgb3V0W2kgKiA0ICsgMV0gPSAodGhpcy5zdGF0ZVtpXSA+Pj4gMTYpICYgMHhmZjtcbiAgICAgICAgICAgIG91dFtpICogNCArIDJdID0gKHRoaXMuc3RhdGVbaV0gPj4+IDgpICYgMHhmZjtcbiAgICAgICAgICAgIG91dFtpICogNCArIDNdID0gKHRoaXMuc3RhdGVbaV0gPj4+IDApICYgMHhmZjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgUmF3U2hhMjU2LnByb3RvdHlwZS5oYXNoQnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBidWZmZXIgPSBfYS5idWZmZXIsIHN0YXRlID0gX2Euc3RhdGU7XG4gICAgICAgIHZhciBzdGF0ZTAgPSBzdGF0ZVswXSwgc3RhdGUxID0gc3RhdGVbMV0sIHN0YXRlMiA9IHN0YXRlWzJdLCBzdGF0ZTMgPSBzdGF0ZVszXSwgc3RhdGU0ID0gc3RhdGVbNF0sIHN0YXRlNSA9IHN0YXRlWzVdLCBzdGF0ZTYgPSBzdGF0ZVs2XSwgc3RhdGU3ID0gc3RhdGVbN107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQkxPQ0tfU0laRTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA8IDE2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wW2ldID1cbiAgICAgICAgICAgICAgICAgICAgKChidWZmZXJbaSAqIDRdICYgMHhmZikgPDwgMjQpIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICgoYnVmZmVyW2kgKiA0ICsgMV0gJiAweGZmKSA8PCAxNikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgKChidWZmZXJbaSAqIDQgKyAyXSAmIDB4ZmYpIDw8IDgpIHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChidWZmZXJbaSAqIDQgKyAzXSAmIDB4ZmYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHUgPSB0aGlzLnRlbXBbaSAtIDJdO1xuICAgICAgICAgICAgICAgIHZhciB0MV8xID0gKCh1ID4+PiAxNykgfCAodSA8PCAxNSkpIF4gKCh1ID4+PiAxOSkgfCAodSA8PCAxMykpIF4gKHUgPj4+IDEwKTtcbiAgICAgICAgICAgICAgICB1ID0gdGhpcy50ZW1wW2kgLSAxNV07XG4gICAgICAgICAgICAgICAgdmFyIHQyXzEgPSAoKHUgPj4+IDcpIHwgKHUgPDwgMjUpKSBeICgodSA+Pj4gMTgpIHwgKHUgPDwgMTQpKSBeICh1ID4+PiAzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBbaV0gPVxuICAgICAgICAgICAgICAgICAgICAoKHQxXzEgKyB0aGlzLnRlbXBbaSAtIDddKSB8IDApICsgKCh0Ml8xICsgdGhpcy50ZW1wW2kgLSAxNl0pIHwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdDEgPSAoKCgoKChzdGF0ZTQgPj4+IDYpIHwgKHN0YXRlNCA8PCAyNikpIF5cbiAgICAgICAgICAgICAgICAoKHN0YXRlNCA+Pj4gMTEpIHwgKHN0YXRlNCA8PCAyMSkpIF5cbiAgICAgICAgICAgICAgICAoKHN0YXRlNCA+Pj4gMjUpIHwgKHN0YXRlNCA8PCA3KSkpICtcbiAgICAgICAgICAgICAgICAoKHN0YXRlNCAmIHN0YXRlNSkgXiAofnN0YXRlNCAmIHN0YXRlNikpKSB8XG4gICAgICAgICAgICAgICAgMCkgK1xuICAgICAgICAgICAgICAgICgoc3RhdGU3ICsgKChLRVlbaV0gKyB0aGlzLnRlbXBbaV0pIHwgMCkpIHwgMCkpIHxcbiAgICAgICAgICAgICAgICAwO1xuICAgICAgICAgICAgdmFyIHQyID0gKCgoKHN0YXRlMCA+Pj4gMikgfCAoc3RhdGUwIDw8IDMwKSkgXlxuICAgICAgICAgICAgICAgICgoc3RhdGUwID4+PiAxMykgfCAoc3RhdGUwIDw8IDE5KSkgXlxuICAgICAgICAgICAgICAgICgoc3RhdGUwID4+PiAyMikgfCAoc3RhdGUwIDw8IDEwKSkpICtcbiAgICAgICAgICAgICAgICAoKHN0YXRlMCAmIHN0YXRlMSkgXiAoc3RhdGUwICYgc3RhdGUyKSBeIChzdGF0ZTEgJiBzdGF0ZTIpKSkgfFxuICAgICAgICAgICAgICAgIDA7XG4gICAgICAgICAgICBzdGF0ZTcgPSBzdGF0ZTY7XG4gICAgICAgICAgICBzdGF0ZTYgPSBzdGF0ZTU7XG4gICAgICAgICAgICBzdGF0ZTUgPSBzdGF0ZTQ7XG4gICAgICAgICAgICBzdGF0ZTQgPSAoc3RhdGUzICsgdDEpIHwgMDtcbiAgICAgICAgICAgIHN0YXRlMyA9IHN0YXRlMjtcbiAgICAgICAgICAgIHN0YXRlMiA9IHN0YXRlMTtcbiAgICAgICAgICAgIHN0YXRlMSA9IHN0YXRlMDtcbiAgICAgICAgICAgIHN0YXRlMCA9ICh0MSArIHQyKSB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGVbMF0gKz0gc3RhdGUwO1xuICAgICAgICBzdGF0ZVsxXSArPSBzdGF0ZTE7XG4gICAgICAgIHN0YXRlWzJdICs9IHN0YXRlMjtcbiAgICAgICAgc3RhdGVbM10gKz0gc3RhdGUzO1xuICAgICAgICBzdGF0ZVs0XSArPSBzdGF0ZTQ7XG4gICAgICAgIHN0YXRlWzVdICs9IHN0YXRlNTtcbiAgICAgICAgc3RhdGVbNl0gKz0gc3RhdGU2O1xuICAgICAgICBzdGF0ZVs3XSArPSBzdGF0ZTc7XG4gICAgfTtcbiAgICByZXR1cm4gUmF3U2hhMjU2O1xufSgpKTtcbmV4cG9ydCB7IFJhd1NoYTI1NiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmF3U2hhMjU2LmpzLm1hcCIsIi8qKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCB2YXIgQkxPQ0tfU0laRSA9IDY0O1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IHZhciBESUdFU1RfTEVOR1RIID0gMzI7XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgdmFyIEtFWSA9IG5ldyBVaW50MzJBcnJheShbXG4gICAgMHg0MjhhMmY5OCxcbiAgICAweDcxMzc0NDkxLFxuICAgIDB4YjVjMGZiY2YsXG4gICAgMHhlOWI1ZGJhNSxcbiAgICAweDM5NTZjMjViLFxuICAgIDB4NTlmMTExZjEsXG4gICAgMHg5MjNmODJhNCxcbiAgICAweGFiMWM1ZWQ1LFxuICAgIDB4ZDgwN2FhOTgsXG4gICAgMHgxMjgzNWIwMSxcbiAgICAweDI0MzE4NWJlLFxuICAgIDB4NTUwYzdkYzMsXG4gICAgMHg3MmJlNWQ3NCxcbiAgICAweDgwZGViMWZlLFxuICAgIDB4OWJkYzA2YTcsXG4gICAgMHhjMTliZjE3NCxcbiAgICAweGU0OWI2OWMxLFxuICAgIDB4ZWZiZTQ3ODYsXG4gICAgMHgwZmMxOWRjNixcbiAgICAweDI0MGNhMWNjLFxuICAgIDB4MmRlOTJjNmYsXG4gICAgMHg0YTc0ODRhYSxcbiAgICAweDVjYjBhOWRjLFxuICAgIDB4NzZmOTg4ZGEsXG4gICAgMHg5ODNlNTE1MixcbiAgICAweGE4MzFjNjZkLFxuICAgIDB4YjAwMzI3YzgsXG4gICAgMHhiZjU5N2ZjNyxcbiAgICAweGM2ZTAwYmYzLFxuICAgIDB4ZDVhNzkxNDcsXG4gICAgMHgwNmNhNjM1MSxcbiAgICAweDE0MjkyOTY3LFxuICAgIDB4MjdiNzBhODUsXG4gICAgMHgyZTFiMjEzOCxcbiAgICAweDRkMmM2ZGZjLFxuICAgIDB4NTMzODBkMTMsXG4gICAgMHg2NTBhNzM1NCxcbiAgICAweDc2NmEwYWJiLFxuICAgIDB4ODFjMmM5MmUsXG4gICAgMHg5MjcyMmM4NSxcbiAgICAweGEyYmZlOGExLFxuICAgIDB4YTgxYTY2NGIsXG4gICAgMHhjMjRiOGI3MCxcbiAgICAweGM3NmM1MWEzLFxuICAgIDB4ZDE5MmU4MTksXG4gICAgMHhkNjk5MDYyNCxcbiAgICAweGY0MGUzNTg1LFxuICAgIDB4MTA2YWEwNzAsXG4gICAgMHgxOWE0YzExNixcbiAgICAweDFlMzc2YzA4LFxuICAgIDB4Mjc0ODc3NGMsXG4gICAgMHgzNGIwYmNiNSxcbiAgICAweDM5MWMwY2IzLFxuICAgIDB4NGVkOGFhNGEsXG4gICAgMHg1YjljY2E0ZixcbiAgICAweDY4MmU2ZmYzLFxuICAgIDB4NzQ4ZjgyZWUsXG4gICAgMHg3OGE1NjM2ZixcbiAgICAweDg0Yzg3ODE0LFxuICAgIDB4OGNjNzAyMDgsXG4gICAgMHg5MGJlZmZmYSxcbiAgICAweGE0NTA2Y2ViLFxuICAgIDB4YmVmOWEzZjcsXG4gICAgMHhjNjcxNzhmMlxuXSk7XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgdmFyIElOSVQgPSBbXG4gICAgMHg2YTA5ZTY2NyxcbiAgICAweGJiNjdhZTg1LFxuICAgIDB4M2M2ZWYzNzIsXG4gICAgMHhhNTRmZjUzYSxcbiAgICAweDUxMGU1MjdmLFxuICAgIDB4OWIwNTY4OGMsXG4gICAgMHgxZjgzZDlhYixcbiAgICAweDViZTBjZDE5XG5dO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IHZhciBNQVhfSEFTSEFCTEVfTEVOR1RIID0gTWF0aC5wb3coMiwgNTMpIC0gMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCJleHBvcnQgKiBmcm9tIFwiLi9qc1NoYTI1NlwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgX19hd2FpdGVyLCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgQkxPQ0tfU0laRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUmF3U2hhMjU2IH0gZnJvbSBcIi4vUmF3U2hhMjU2XCI7XG5pbXBvcnQgeyBpc0VtcHR5RGF0YSwgY29udmVydFRvQnVmZmVyIH0gZnJvbSBcIkBhd3MtY3J5cHRvL3V0aWxcIjtcbnZhciBTaGEyNTYgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2hhMjU2KHNlY3JldCkge1xuICAgICAgICB0aGlzLnNlY3JldCA9IHNlY3JldDtcbiAgICAgICAgdGhpcy5oYXNoID0gbmV3IFJhd1NoYTI1NigpO1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICAgIFNoYTI1Ni5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKHRvSGFzaCkge1xuICAgICAgICBpZiAoaXNFbXB0eURhdGEodG9IYXNoKSB8fCB0aGlzLmVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuaGFzaC51cGRhdGUoY29udmVydFRvQnVmZmVyKHRvSGFzaCkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yID0gZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyogVGhpcyBzeW5jaHJvbm91cyBtZXRob2Qga2VlcHMgY29tcGF0aWJpbGl0eVxuICAgICAqIHdpdGggdGhlIHYyIGF3cy1zZGsuXG4gICAgICovXG4gICAgU2hhMjU2LnByb3RvdHlwZS5kaWdlc3RTeW5jID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5lcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgdGhpcy5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vdXRlcikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm91dGVyLmZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlci51cGRhdGUodGhpcy5oYXNoLmRpZ2VzdCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm91dGVyLmRpZ2VzdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmhhc2guZGlnZXN0KCk7XG4gICAgfTtcbiAgICAvKiBUaGUgdW5kZXJseWluZyBkaWdlc3QgbWV0aG9kIGhlcmUgaXMgc3luY2hyb25vdXMuXG4gICAgICogVG8ga2VlcCB0aGUgc2FtZSBpbnRlcmZhY2Ugd2l0aCB0aGUgb3RoZXIgaGFzaCBmdW5jdGlvbnNcbiAgICAgKiB0aGUgZGVmYXVsdCBpcyB0byBleHBvc2UgdGhpcyBhcyBhbiBhc3luYyBtZXRob2QuXG4gICAgICogSG93ZXZlciwgaXQgY2FuIHNvbWV0aW1lcyBiZSB1c2VmdWwgdG8gaGF2ZSBhIHN5bmMgbWV0aG9kLlxuICAgICAqL1xuICAgIFNoYTI1Ni5wcm90b3R5cGUuZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuZGlnZXN0U3luYygpXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFNoYTI1Ni5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFzaCA9IG5ldyBSYXdTaGEyNTYoKTtcbiAgICAgICAgaWYgKHRoaXMuc2VjcmV0KSB7XG4gICAgICAgICAgICB0aGlzLm91dGVyID0gbmV3IFJhd1NoYTI1NigpO1xuICAgICAgICAgICAgdmFyIGlubmVyID0gYnVmZmVyRnJvbVNlY3JldCh0aGlzLnNlY3JldCk7XG4gICAgICAgICAgICB2YXIgb3V0ZXIgPSBuZXcgVWludDhBcnJheShCTE9DS19TSVpFKTtcbiAgICAgICAgICAgIG91dGVyLnNldChpbm5lcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEJMT0NLX1NJWkU7IGkrKykge1xuICAgICAgICAgICAgICAgIGlubmVyW2ldIF49IDB4MzY7XG4gICAgICAgICAgICAgICAgb3V0ZXJbaV0gXj0gMHg1YztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGFzaC51cGRhdGUoaW5uZXIpO1xuICAgICAgICAgICAgdGhpcy5vdXRlci51cGRhdGUob3V0ZXIpO1xuICAgICAgICAgICAgLy8gb3ZlcndyaXRlIHRoZSBjb3BpZWQga2V5IGluIG1lbW9yeVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbm5lci5ieXRlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpbm5lcltpXSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTaGEyNTY7XG59KCkpO1xuZXhwb3J0IHsgU2hhMjU2IH07XG5mdW5jdGlvbiBidWZmZXJGcm9tU2VjcmV0KHNlY3JldCkge1xuICAgIHZhciBpbnB1dCA9IGNvbnZlcnRUb0J1ZmZlcihzZWNyZXQpO1xuICAgIGlmIChpbnB1dC5ieXRlTGVuZ3RoID4gQkxPQ0tfU0laRSkge1xuICAgICAgICB2YXIgYnVmZmVySGFzaCA9IG5ldyBSYXdTaGEyNTYoKTtcbiAgICAgICAgYnVmZmVySGFzaC51cGRhdGUoaW5wdXQpO1xuICAgICAgICBpbnB1dCA9IGJ1ZmZlckhhc2guZGlnZXN0KCk7XG4gICAgfVxuICAgIHZhciBidWZmZXIgPSBuZXcgVWludDhBcnJheShCTE9DS19TSVpFKTtcbiAgICBidWZmZXIuc2V0KGlucHV0KTtcbiAgICByZXR1cm4gYnVmZmVyO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anNTaGEyNTYuanMubWFwIiwiLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5pbXBvcnQgeyBmcm9tVXRmOCBhcyBmcm9tVXRmOEJyb3dzZXIgfSBmcm9tIFwiQHNtaXRoeS91dGlsLXV0ZjhcIjtcbi8vIFF1aWNrIHBvbHlmaWxsXG52YXIgZnJvbVV0ZjggPSB0eXBlb2YgQnVmZmVyICE9PSBcInVuZGVmaW5lZFwiICYmIEJ1ZmZlci5mcm9tXG4gICAgPyBmdW5jdGlvbiAoaW5wdXQpIHsgcmV0dXJuIEJ1ZmZlci5mcm9tKGlucHV0LCBcInV0ZjhcIik7IH1cbiAgICA6IGZyb21VdGY4QnJvd3NlcjtcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9CdWZmZXIoZGF0YSkge1xuICAgIC8vIEFscmVhZHkgYSBVaW50OCwgZG8gbm90aGluZ1xuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgVWludDhBcnJheSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBmcm9tVXRmOChkYXRhKTtcbiAgICB9XG4gICAgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhkYXRhKSkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YS5idWZmZXIsIGRhdGEuYnl0ZU9mZnNldCwgZGF0YS5ieXRlTGVuZ3RoIC8gVWludDhBcnJheS5CWVRFU19QRVJfRUxFTUVOVCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnZlcnRUb0J1ZmZlci5qcy5tYXAiLCIvLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbmV4cG9ydCB7IGNvbnZlcnRUb0J1ZmZlciB9IGZyb20gXCIuL2NvbnZlcnRUb0J1ZmZlclwiO1xuZXhwb3J0IHsgaXNFbXB0eURhdGEgfSBmcm9tIFwiLi9pc0VtcHR5RGF0YVwiO1xuZXhwb3J0IHsgbnVtVG9VaW50OCB9IGZyb20gXCIuL251bVRvVWludDhcIjtcbmV4cG9ydCB7IHVpbnQzMkFycmF5RnJvbSB9IGZyb20gJy4vdWludDMyQXJyYXlGcm9tJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHlEYXRhKGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoID09PSAwO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YS5ieXRlTGVuZ3RoID09PSAwO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNFbXB0eURhdGEuanMubWFwIiwiLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5leHBvcnQgZnVuY3Rpb24gbnVtVG9VaW50OChudW0pIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAobnVtICYgMHhmZjAwMDAwMCkgPj4gMjQsXG4gICAgICAgIChudW0gJiAweDAwZmYwMDAwKSA+PiAxNixcbiAgICAgICAgKG51bSAmIDB4MDAwMGZmMDApID4+IDgsXG4gICAgICAgIG51bSAmIDB4MDAwMDAwZmYsXG4gICAgXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1udW1Ub1VpbnQ4LmpzLm1hcCIsIi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuLy8gSUUgMTEgZG9lcyBub3Qgc3VwcG9ydCBBcnJheS5mcm9tLCBzbyB3ZSBkbyBpdCBtYW51YWxseVxuZXhwb3J0IGZ1bmN0aW9uIHVpbnQzMkFycmF5RnJvbShhX2xvb2tVcFRhYmxlKSB7XG4gICAgaWYgKCFVaW50MzJBcnJheS5mcm9tKSB7XG4gICAgICAgIHZhciByZXR1cm5fYXJyYXkgPSBuZXcgVWludDMyQXJyYXkoYV9sb29rVXBUYWJsZS5sZW5ndGgpO1xuICAgICAgICB2YXIgYV9pbmRleCA9IDA7XG4gICAgICAgIHdoaWxlIChhX2luZGV4IDwgYV9sb29rVXBUYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybl9hcnJheVthX2luZGV4XSA9IGFfbG9va1VwVGFibGVbYV9pbmRleF07XG4gICAgICAgICAgICBhX2luZGV4ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldHVybl9hcnJheTtcbiAgICB9XG4gICAgcmV0dXJuIFVpbnQzMkFycmF5LmZyb20oYV9sb29rVXBUYWJsZSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11aW50MzJBcnJheUZyb20uanMubWFwIiwiaW1wb3J0IHsgQ3JjMzIgfSBmcm9tIFwiQGF3cy1jcnlwdG8vY3JjMzJcIjtcbmltcG9ydCB7IEhlYWRlck1hcnNoYWxsZXIgfSBmcm9tIFwiLi9IZWFkZXJNYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBzcGxpdE1lc3NhZ2UgfSBmcm9tIFwiLi9zcGxpdE1lc3NhZ2VcIjtcbmV4cG9ydCBjbGFzcyBFdmVudFN0cmVhbUNvZGVjIHtcbiAgICBjb25zdHJ1Y3Rvcih0b1V0ZjgsIGZyb21VdGY4KSB7XG4gICAgICAgIHRoaXMuaGVhZGVyTWFyc2hhbGxlciA9IG5ldyBIZWFkZXJNYXJzaGFsbGVyKHRvVXRmOCwgZnJvbVV0ZjgpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VCdWZmZXIgPSBbXTtcbiAgICAgICAgdGhpcy5pc0VuZE9mU3RyZWFtID0gZmFsc2U7XG4gICAgfVxuICAgIGZlZWQobWVzc2FnZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VCdWZmZXIucHVzaCh0aGlzLmRlY29kZShtZXNzYWdlKSk7XG4gICAgfVxuICAgIGVuZE9mU3RyZWFtKCkge1xuICAgICAgICB0aGlzLmlzRW5kT2ZTdHJlYW0gPSB0cnVlO1xuICAgIH1cbiAgICBnZXRNZXNzYWdlKCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5tZXNzYWdlQnVmZmVyLnBvcCgpO1xuICAgICAgICBjb25zdCBpc0VuZE9mU3RyZWFtID0gdGhpcy5pc0VuZE9mU3RyZWFtO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZ2V0TWVzc2FnZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0VuZE9mU3RyZWFtKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc0VuZE9mU3RyZWFtO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0QXZhaWxhYmxlTWVzc2FnZXMoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5tZXNzYWdlQnVmZmVyO1xuICAgICAgICB0aGlzLm1lc3NhZ2VCdWZmZXIgPSBbXTtcbiAgICAgICAgY29uc3QgaXNFbmRPZlN0cmVhbSA9IHRoaXMuaXNFbmRPZlN0cmVhbTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldE1lc3NhZ2VzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXNzYWdlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0VuZE9mU3RyZWFtKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc0VuZE9mU3RyZWFtO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZW5jb2RlKHsgaGVhZGVyczogcmF3SGVhZGVycywgYm9keSB9KSB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmhlYWRlck1hcnNoYWxsZXIuZm9ybWF0KHJhd0hlYWRlcnMpO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBoZWFkZXJzLmJ5dGVMZW5ndGggKyBib2R5LmJ5dGVMZW5ndGggKyAxNjtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldyhvdXQuYnVmZmVyLCBvdXQuYnl0ZU9mZnNldCwgb3V0LmJ5dGVMZW5ndGgpO1xuICAgICAgICBjb25zdCBjaGVja3N1bSA9IG5ldyBDcmMzMigpO1xuICAgICAgICB2aWV3LnNldFVpbnQzMigwLCBsZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgdmlldy5zZXRVaW50MzIoNCwgaGVhZGVycy5ieXRlTGVuZ3RoLCBmYWxzZSk7XG4gICAgICAgIHZpZXcuc2V0VWludDMyKDgsIGNoZWNrc3VtLnVwZGF0ZShvdXQuc3ViYXJyYXkoMCwgOCkpLmRpZ2VzdCgpLCBmYWxzZSk7XG4gICAgICAgIG91dC5zZXQoaGVhZGVycywgMTIpO1xuICAgICAgICBvdXQuc2V0KGJvZHksIGhlYWRlcnMuYnl0ZUxlbmd0aCArIDEyKTtcbiAgICAgICAgdmlldy5zZXRVaW50MzIobGVuZ3RoIC0gNCwgY2hlY2tzdW0udXBkYXRlKG91dC5zdWJhcnJheSg4LCBsZW5ndGggLSA0KSkuZGlnZXN0KCksIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgZGVjb2RlKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgeyBoZWFkZXJzLCBib2R5IH0gPSBzcGxpdE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB7IGhlYWRlcnM6IHRoaXMuaGVhZGVyTWFyc2hhbGxlci5wYXJzZShoZWFkZXJzKSwgYm9keSB9O1xuICAgIH1cbiAgICBmb3JtYXRIZWFkZXJzKHJhd0hlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyTWFyc2hhbGxlci5mb3JtYXQocmF3SGVhZGVycyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZnJvbUhleCwgdG9IZXggfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1oZXgtZW5jb2RpbmdcIjtcbmltcG9ydCB7IEludDY0IH0gZnJvbSBcIi4vSW50NjRcIjtcbmV4cG9ydCBjbGFzcyBIZWFkZXJNYXJzaGFsbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0b1V0ZjgsIGZyb21VdGY4KSB7XG4gICAgICAgIHRoaXMudG9VdGY4ID0gdG9VdGY4O1xuICAgICAgICB0aGlzLmZyb21VdGY4ID0gZnJvbVV0Zjg7XG4gICAgfVxuICAgIGZvcm1hdChoZWFkZXJzKSB7XG4gICAgICAgIGNvbnN0IGNodW5rcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGhlYWRlck5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykpIHtcbiAgICAgICAgICAgIGNvbnN0IGJ5dGVzID0gdGhpcy5mcm9tVXRmOChoZWFkZXJOYW1lKTtcbiAgICAgICAgICAgIGNodW5rcy5wdXNoKFVpbnQ4QXJyYXkuZnJvbShbYnl0ZXMuYnl0ZUxlbmd0aF0pLCBieXRlcywgdGhpcy5mb3JtYXRIZWFkZXJWYWx1ZShoZWFkZXJzW2hlYWRlck5hbWVdKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IFVpbnQ4QXJyYXkoY2h1bmtzLnJlZHVjZSgoY2FycnksIGJ5dGVzKSA9PiBjYXJyeSArIGJ5dGVzLmJ5dGVMZW5ndGgsIDApKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBjaHVuayBvZiBjaHVua3MpIHtcbiAgICAgICAgICAgIG91dC5zZXQoY2h1bmssIHBvc2l0aW9uKTtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9IGNodW5rLmJ5dGVMZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9XG4gICAgZm9ybWF0SGVhZGVyVmFsdWUoaGVhZGVyKSB7XG4gICAgICAgIHN3aXRjaCAoaGVhZGVyLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkuZnJvbShbaGVhZGVyLnZhbHVlID8gMCA6IDFdKTtcbiAgICAgICAgICAgIGNhc2UgXCJieXRlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkuZnJvbShbMiwgaGVhZGVyLnZhbHVlXSk7XG4gICAgICAgICAgICBjYXNlIFwic2hvcnRcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBzaG9ydFZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDMpKTtcbiAgICAgICAgICAgICAgICBzaG9ydFZpZXcuc2V0VWludDgoMCwgMyk7XG4gICAgICAgICAgICAgICAgc2hvcnRWaWV3LnNldEludDE2KDEsIGhlYWRlci52YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShzaG9ydFZpZXcuYnVmZmVyKTtcbiAgICAgICAgICAgIGNhc2UgXCJpbnRlZ2VyXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgaW50VmlldyA9IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoNSkpO1xuICAgICAgICAgICAgICAgIGludFZpZXcuc2V0VWludDgoMCwgNCk7XG4gICAgICAgICAgICAgICAgaW50Vmlldy5zZXRJbnQzMigxLCBoZWFkZXIudmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoaW50Vmlldy5idWZmZXIpO1xuICAgICAgICAgICAgY2FzZSBcImxvbmdcIjpcbiAgICAgICAgICAgICAgICBjb25zdCBsb25nQnl0ZXMgPSBuZXcgVWludDhBcnJheSg5KTtcbiAgICAgICAgICAgICAgICBsb25nQnl0ZXNbMF0gPSA1O1xuICAgICAgICAgICAgICAgIGxvbmdCeXRlcy5zZXQoaGVhZGVyLnZhbHVlLmJ5dGVzLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9uZ0J5dGVzO1xuICAgICAgICAgICAgY2FzZSBcImJpbmFyeVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IGJpblZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDMgKyBoZWFkZXIudmFsdWUuYnl0ZUxlbmd0aCkpO1xuICAgICAgICAgICAgICAgIGJpblZpZXcuc2V0VWludDgoMCwgNik7XG4gICAgICAgICAgICAgICAgYmluVmlldy5zZXRVaW50MTYoMSwgaGVhZGVyLnZhbHVlLmJ5dGVMZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBiaW5CeXRlcyA9IG5ldyBVaW50OEFycmF5KGJpblZpZXcuYnVmZmVyKTtcbiAgICAgICAgICAgICAgICBiaW5CeXRlcy5zZXQoaGVhZGVyLnZhbHVlLCAzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluQnl0ZXM7XG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgdXRmOEJ5dGVzID0gdGhpcy5mcm9tVXRmOChoZWFkZXIudmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0clZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDMgKyB1dGY4Qnl0ZXMuYnl0ZUxlbmd0aCkpO1xuICAgICAgICAgICAgICAgIHN0clZpZXcuc2V0VWludDgoMCwgNyk7XG4gICAgICAgICAgICAgICAgc3RyVmlldy5zZXRVaW50MTYoMSwgdXRmOEJ5dGVzLmJ5dGVMZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHJCeXRlcyA9IG5ldyBVaW50OEFycmF5KHN0clZpZXcuYnVmZmVyKTtcbiAgICAgICAgICAgICAgICBzdHJCeXRlcy5zZXQodXRmOEJ5dGVzLCAzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyQnl0ZXM7XG4gICAgICAgICAgICBjYXNlIFwidGltZXN0YW1wXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgdHNCeXRlcyA9IG5ldyBVaW50OEFycmF5KDkpO1xuICAgICAgICAgICAgICAgIHRzQnl0ZXNbMF0gPSA4O1xuICAgICAgICAgICAgICAgIHRzQnl0ZXMuc2V0KEludDY0LmZyb21OdW1iZXIoaGVhZGVyLnZhbHVlLnZhbHVlT2YoKSkuYnl0ZXMsIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0c0J5dGVzO1xuICAgICAgICAgICAgY2FzZSBcInV1aWRcIjpcbiAgICAgICAgICAgICAgICBpZiAoIVVVSURfUEFUVEVSTi50ZXN0KGhlYWRlci52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFVVSUQgcmVjZWl2ZWQ6ICR7aGVhZGVyLnZhbHVlfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB1dWlkQnl0ZXMgPSBuZXcgVWludDhBcnJheSgxNyk7XG4gICAgICAgICAgICAgICAgdXVpZEJ5dGVzWzBdID0gOTtcbiAgICAgICAgICAgICAgICB1dWlkQnl0ZXMuc2V0KGZyb21IZXgoaGVhZGVyLnZhbHVlLnJlcGxhY2UoL1xcLS9nLCBcIlwiKSksIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1dWlkQnl0ZXM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGFyc2UoaGVhZGVycykge1xuICAgICAgICBjb25zdCBvdXQgPSB7fTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gMDtcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgaGVhZGVycy5ieXRlTGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lTGVuZ3RoID0gaGVhZGVycy5nZXRVaW50OChwb3NpdGlvbisrKTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLnRvVXRmOChuZXcgVWludDhBcnJheShoZWFkZXJzLmJ1ZmZlciwgaGVhZGVycy5ieXRlT2Zmc2V0ICsgcG9zaXRpb24sIG5hbWVMZW5ndGgpKTtcbiAgICAgICAgICAgIHBvc2l0aW9uICs9IG5hbWVMZW5ndGg7XG4gICAgICAgICAgICBzd2l0Y2ggKGhlYWRlcnMuZ2V0VWludDgocG9zaXRpb24rKykpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEJPT0xFQU5fVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQk9PTEVBTl9UQUcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQllURV9UQUcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaGVhZGVycy5nZXRJbnQ4KHBvc2l0aW9uKyspLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFNIT1JUX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBoZWFkZXJzLmdldEludDE2KHBvc2l0aW9uLCBmYWxzZSksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogSU5UX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBoZWFkZXJzLmdldEludDMyKHBvc2l0aW9uLCBmYWxzZSksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTE9OR19UQUcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IEludDY0KG5ldyBVaW50OEFycmF5KGhlYWRlcnMuYnVmZmVyLCBoZWFkZXJzLmJ5dGVPZmZzZXQgKyBwb3NpdGlvbiwgOCkpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSA4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJpbmFyeUxlbmd0aCA9IGhlYWRlcnMuZ2V0VWludDE2KHBvc2l0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEJJTkFSWV9UQUcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCBiaW5hcnlMZW5ndGgpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSBiaW5hcnlMZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5nTGVuZ3RoID0gaGVhZGVycy5nZXRVaW50MTYocG9zaXRpb24sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogU1RSSU5HX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnRvVXRmOChuZXcgVWludDhBcnJheShoZWFkZXJzLmJ1ZmZlciwgaGVhZGVycy5ieXRlT2Zmc2V0ICsgcG9zaXRpb24sIHN0cmluZ0xlbmd0aCkpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSBzdHJpbmdMZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogVElNRVNUQU1QX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0ZShuZXcgSW50NjQobmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCA4KSkudmFsdWVPZigpKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gODtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1dWlkQnl0ZXMgPSBuZXcgVWludDhBcnJheShoZWFkZXJzLmJ1ZmZlciwgaGVhZGVycy5ieXRlT2Zmc2V0ICsgcG9zaXRpb24sIDE2KTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gMTY7XG4gICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFVVSURfVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGAke3RvSGV4KHV1aWRCeXRlcy5zdWJhcnJheSgwLCA0KSl9LSR7dG9IZXgodXVpZEJ5dGVzLnN1YmFycmF5KDQsIDYpKX0tJHt0b0hleCh1dWlkQnl0ZXMuc3ViYXJyYXkoNiwgOCkpfS0ke3RvSGV4KHV1aWRCeXRlcy5zdWJhcnJheSg4LCAxMCkpfS0ke3RvSGV4KHV1aWRCeXRlcy5zdWJhcnJheSgxMCkpfWAsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWNvZ25pemVkIGhlYWRlciB0eXBlIHRhZ2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfVxufVxudmFyIEhFQURFUl9WQUxVRV9UWVBFO1xuKGZ1bmN0aW9uIChIRUFERVJfVkFMVUVfVFlQRSkge1xuICAgIEhFQURFUl9WQUxVRV9UWVBFW0hFQURFUl9WQUxVRV9UWVBFW1wiYm9vbFRydWVcIl0gPSAwXSA9IFwiYm9vbFRydWVcIjtcbiAgICBIRUFERVJfVkFMVUVfVFlQRVtIRUFERVJfVkFMVUVfVFlQRVtcImJvb2xGYWxzZVwiXSA9IDFdID0gXCJib29sRmFsc2VcIjtcbiAgICBIRUFERVJfVkFMVUVfVFlQRVtIRUFERVJfVkFMVUVfVFlQRVtcImJ5dGVcIl0gPSAyXSA9IFwiYnl0ZVwiO1xuICAgIEhFQURFUl9WQUxVRV9UWVBFW0hFQURFUl9WQUxVRV9UWVBFW1wic2hvcnRcIl0gPSAzXSA9IFwic2hvcnRcIjtcbiAgICBIRUFERVJfVkFMVUVfVFlQRVtIRUFERVJfVkFMVUVfVFlQRVtcImludGVnZXJcIl0gPSA0XSA9IFwiaW50ZWdlclwiO1xuICAgIEhFQURFUl9WQUxVRV9UWVBFW0hFQURFUl9WQUxVRV9UWVBFW1wibG9uZ1wiXSA9IDVdID0gXCJsb25nXCI7XG4gICAgSEVBREVSX1ZBTFVFX1RZUEVbSEVBREVSX1ZBTFVFX1RZUEVbXCJieXRlQXJyYXlcIl0gPSA2XSA9IFwiYnl0ZUFycmF5XCI7XG4gICAgSEVBREVSX1ZBTFVFX1RZUEVbSEVBREVSX1ZBTFVFX1RZUEVbXCJzdHJpbmdcIl0gPSA3XSA9IFwic3RyaW5nXCI7XG4gICAgSEVBREVSX1ZBTFVFX1RZUEVbSEVBREVSX1ZBTFVFX1RZUEVbXCJ0aW1lc3RhbXBcIl0gPSA4XSA9IFwidGltZXN0YW1wXCI7XG4gICAgSEVBREVSX1ZBTFVFX1RZUEVbSEVBREVSX1ZBTFVFX1RZUEVbXCJ1dWlkXCJdID0gOV0gPSBcInV1aWRcIjtcbn0pKEhFQURFUl9WQUxVRV9UWVBFIHx8IChIRUFERVJfVkFMVUVfVFlQRSA9IHt9KSk7XG5jb25zdCBCT09MRUFOX1RBRyA9IFwiYm9vbGVhblwiO1xuY29uc3QgQllURV9UQUcgPSBcImJ5dGVcIjtcbmNvbnN0IFNIT1JUX1RBRyA9IFwic2hvcnRcIjtcbmNvbnN0IElOVF9UQUcgPSBcImludGVnZXJcIjtcbmNvbnN0IExPTkdfVEFHID0gXCJsb25nXCI7XG5jb25zdCBCSU5BUllfVEFHID0gXCJiaW5hcnlcIjtcbmNvbnN0IFNUUklOR19UQUcgPSBcInN0cmluZ1wiO1xuY29uc3QgVElNRVNUQU1QX1RBRyA9IFwidGltZXN0YW1wXCI7XG5jb25zdCBVVUlEX1RBRyA9IFwidXVpZFwiO1xuY29uc3QgVVVJRF9QQVRURVJOID0gL15bYS1mMC05XXs4fS1bYS1mMC05XXs0fS1bYS1mMC05XXs0fS1bYS1mMC05XXs0fS1bYS1mMC05XXsxMn0kLztcbiIsImltcG9ydCB7IHRvSGV4IH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtaGV4LWVuY29kaW5nXCI7XG5leHBvcnQgY2xhc3MgSW50NjQge1xuICAgIGNvbnN0cnVjdG9yKGJ5dGVzKSB7XG4gICAgICAgIHRoaXMuYnl0ZXMgPSBieXRlcztcbiAgICAgICAgaWYgKGJ5dGVzLmJ5dGVMZW5ndGggIT09IDgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludDY0IGJ1ZmZlcnMgbXVzdCBiZSBleGFjdGx5IDggYnl0ZXNcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGZyb21OdW1iZXIobnVtYmVyKSB7XG4gICAgICAgIGlmIChudW1iZXIgPiA5MjIzMzcyMDM2ODU0Nzc2MDAwIHx8IG51bWJlciA8IC05MjIzMzcyMDM2ODU0Nzc2MDAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bnVtYmVyfSBpcyB0b28gbGFyZ2UgKG9yLCBpZiBuZWdhdGl2ZSwgdG9vIHNtYWxsKSB0byByZXByZXNlbnQgYXMgYW4gSW50NjRgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KDgpO1xuICAgICAgICBmb3IgKGxldCBpID0gNywgcmVtYWluaW5nID0gTWF0aC5hYnMoTWF0aC5yb3VuZChudW1iZXIpKTsgaSA+IC0xICYmIHJlbWFpbmluZyA+IDA7IGktLSwgcmVtYWluaW5nIC89IDI1Nikge1xuICAgICAgICAgICAgYnl0ZXNbaV0gPSByZW1haW5pbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG51bWJlciA8IDApIHtcbiAgICAgICAgICAgIG5lZ2F0ZShieXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBJbnQ2NChieXRlcyk7XG4gICAgfVxuICAgIHZhbHVlT2YoKSB7XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gdGhpcy5ieXRlcy5zbGljZSgwKTtcbiAgICAgICAgY29uc3QgbmVnYXRpdmUgPSBieXRlc1swXSAmIDBiMTAwMDAwMDA7XG4gICAgICAgIGlmIChuZWdhdGl2ZSkge1xuICAgICAgICAgICAgbmVnYXRlKGJ5dGVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodG9IZXgoYnl0ZXMpLCAxNikgKiAobmVnYXRpdmUgPyAtMSA6IDEpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLnZhbHVlT2YoKSk7XG4gICAgfVxufVxuZnVuY3Rpb24gbmVnYXRlKGJ5dGVzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcbiAgICAgICAgYnl0ZXNbaV0gXj0gMHhmZjtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDc7IGkgPiAtMTsgaS0tKSB7XG4gICAgICAgIGJ5dGVzW2ldKys7XG4gICAgICAgIGlmIChieXRlc1tpXSAhPT0gMClcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbiIsImV4cG9ydCB7fTtcbiIsImV4cG9ydCBjbGFzcyBNZXNzYWdlRGVjb2RlclN0cmVhbSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc3luY0l0ZXJhdG9yKCk7XG4gICAgfVxuICAgIGFzeW5jICphc3luY0l0ZXJhdG9yKCkge1xuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IGJ5dGVzIG9mIHRoaXMub3B0aW9ucy5pbnB1dFN0cmVhbSkge1xuICAgICAgICAgICAgY29uc3QgZGVjb2RlZCA9IHRoaXMub3B0aW9ucy5kZWNvZGVyLmRlY29kZShieXRlcyk7XG4gICAgICAgICAgICB5aWVsZCBkZWNvZGVkO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE1lc3NhZ2VFbmNvZGVyU3RyZWFtIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIFtTeW1ib2wuYXN5bmNJdGVyYXRvcl0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzeW5jSXRlcmF0b3IoKTtcbiAgICB9XG4gICAgYXN5bmMgKmFzeW5jSXRlcmF0b3IoKSB7XG4gICAgICAgIGZvciBhd2FpdCAoY29uc3QgbXNnIG9mIHRoaXMub3B0aW9ucy5tZXNzYWdlU3RyZWFtKSB7XG4gICAgICAgICAgICBjb25zdCBlbmNvZGVkID0gdGhpcy5vcHRpb25zLmVuY29kZXIuZW5jb2RlKG1zZyk7XG4gICAgICAgICAgICB5aWVsZCBlbmNvZGVkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5jbHVkZUVuZEZyYW1lKSB7XG4gICAgICAgICAgICB5aWVsZCBuZXcgVWludDhBcnJheSgwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTbWl0aHlNZXNzYWdlRGVjb2RlclN0cmVhbSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbiAgICBbU3ltYm9sLmFzeW5jSXRlcmF0b3JdKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc3luY0l0ZXJhdG9yKCk7XG4gICAgfVxuICAgIGFzeW5jICphc3luY0l0ZXJhdG9yKCkge1xuICAgICAgICBmb3IgYXdhaXQgKGNvbnN0IG1lc3NhZ2Ugb2YgdGhpcy5vcHRpb25zLm1lc3NhZ2VTdHJlYW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2VyaWFsaXplZCA9IGF3YWl0IHRoaXMub3B0aW9ucy5kZXNlcmlhbGl6ZXIobWVzc2FnZSk7XG4gICAgICAgICAgICBpZiAoZGVzZXJpYWxpemVkID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB5aWVsZCBkZXNlcmlhbGl6ZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU21pdGh5TWVzc2FnZUVuY29kZXJTdHJlYW0ge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXN5bmNJdGVyYXRvcigpO1xuICAgIH1cbiAgICBhc3luYyAqYXN5bmNJdGVyYXRvcigpIHtcbiAgICAgICAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiB0aGlzLm9wdGlvbnMuaW5wdXRTdHJlYW0pIHtcbiAgICAgICAgICAgIGNvbnN0IHBheWxvYWRCdWYgPSB0aGlzLm9wdGlvbnMuc2VyaWFsaXplcihjaHVuayk7XG4gICAgICAgICAgICB5aWVsZCBwYXlsb2FkQnVmO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vRXZlbnRTdHJlYW1Db2RlY1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vSGVhZGVyTWFyc2hhbGxlclwiO1xuZXhwb3J0ICogZnJvbSBcIi4vSW50NjRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL01lc3NhZ2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL01lc3NhZ2VEZWNvZGVyU3RyZWFtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9NZXNzYWdlRW5jb2RlclN0cmVhbVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vU21pdGh5TWVzc2FnZURlY29kZXJTdHJlYW1cIjtcbmV4cG9ydCAqIGZyb20gXCIuL1NtaXRoeU1lc3NhZ2VFbmNvZGVyU3RyZWFtXCI7XG4iLCJpbXBvcnQgeyBDcmMzMiB9IGZyb20gXCJAYXdzLWNyeXB0by9jcmMzMlwiO1xuY29uc3QgUFJFTFVERV9NRU1CRVJfTEVOR1RIID0gNDtcbmNvbnN0IFBSRUxVREVfTEVOR1RIID0gUFJFTFVERV9NRU1CRVJfTEVOR1RIICogMjtcbmNvbnN0IENIRUNLU1VNX0xFTkdUSCA9IDQ7XG5jb25zdCBNSU5JTVVNX01FU1NBR0VfTEVOR1RIID0gUFJFTFVERV9MRU5HVEggKyBDSEVDS1NVTV9MRU5HVEggKiAyO1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0TWVzc2FnZSh7IGJ5dGVMZW5ndGgsIGJ5dGVPZmZzZXQsIGJ1ZmZlciB9KSB7XG4gICAgaWYgKGJ5dGVMZW5ndGggPCBNSU5JTVVNX01FU1NBR0VfTEVOR1RIKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVkIG1lc3NhZ2UgdG9vIHNob3J0IHRvIGFjY29tbW9kYXRlIGV2ZW50IHN0cmVhbSBtZXNzYWdlIG92ZXJoZWFkXCIpO1xuICAgIH1cbiAgICBjb25zdCB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgYnl0ZU9mZnNldCwgYnl0ZUxlbmd0aCk7XG4gICAgY29uc3QgbWVzc2FnZUxlbmd0aCA9IHZpZXcuZ2V0VWludDMyKDAsIGZhbHNlKTtcbiAgICBpZiAoYnl0ZUxlbmd0aCAhPT0gbWVzc2FnZUxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXBvcnRlZCBtZXNzYWdlIGxlbmd0aCBkb2VzIG5vdCBtYXRjaCByZWNlaXZlZCBtZXNzYWdlIGxlbmd0aFwiKTtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyTGVuZ3RoID0gdmlldy5nZXRVaW50MzIoUFJFTFVERV9NRU1CRVJfTEVOR1RILCBmYWxzZSk7XG4gICAgY29uc3QgZXhwZWN0ZWRQcmVsdWRlQ2hlY2tzdW0gPSB2aWV3LmdldFVpbnQzMihQUkVMVURFX0xFTkdUSCwgZmFsc2UpO1xuICAgIGNvbnN0IGV4cGVjdGVkTWVzc2FnZUNoZWNrc3VtID0gdmlldy5nZXRVaW50MzIoYnl0ZUxlbmd0aCAtIENIRUNLU1VNX0xFTkdUSCwgZmFsc2UpO1xuICAgIGNvbnN0IGNoZWNrc3VtbWVyID0gbmV3IENyYzMyKCkudXBkYXRlKG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgYnl0ZU9mZnNldCwgUFJFTFVERV9MRU5HVEgpKTtcbiAgICBpZiAoZXhwZWN0ZWRQcmVsdWRlQ2hlY2tzdW0gIT09IGNoZWNrc3VtbWVyLmRpZ2VzdCgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHByZWx1ZGUgY2hlY2tzdW0gc3BlY2lmaWVkIGluIHRoZSBtZXNzYWdlICgke2V4cGVjdGVkUHJlbHVkZUNoZWNrc3VtfSkgZG9lcyBub3QgbWF0Y2ggdGhlIGNhbGN1bGF0ZWQgQ1JDMzIgY2hlY2tzdW0gKCR7Y2hlY2tzdW1tZXIuZGlnZXN0KCl9KWApO1xuICAgIH1cbiAgICBjaGVja3N1bW1lci51cGRhdGUobmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCBieXRlT2Zmc2V0ICsgUFJFTFVERV9MRU5HVEgsIGJ5dGVMZW5ndGggLSAoUFJFTFVERV9MRU5HVEggKyBDSEVDS1NVTV9MRU5HVEgpKSk7XG4gICAgaWYgKGV4cGVjdGVkTWVzc2FnZUNoZWNrc3VtICE9PSBjaGVja3N1bW1lci5kaWdlc3QoKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBtZXNzYWdlIGNoZWNrc3VtICgke2NoZWNrc3VtbWVyLmRpZ2VzdCgpfSkgZGlkIG5vdCBtYXRjaCB0aGUgZXhwZWN0ZWQgdmFsdWUgb2YgJHtleHBlY3RlZE1lc3NhZ2VDaGVja3N1bX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyczogbmV3IERhdGFWaWV3KGJ1ZmZlciwgYnl0ZU9mZnNldCArIFBSRUxVREVfTEVOR1RIICsgQ0hFQ0tTVU1fTEVOR1RILCBoZWFkZXJMZW5ndGgpLFxuICAgICAgICBib2R5OiBuZXcgVWludDhBcnJheShidWZmZXIsIGJ5dGVPZmZzZXQgKyBQUkVMVURFX0xFTkdUSCArIENIRUNLU1VNX0xFTkdUSCArIGhlYWRlckxlbmd0aCwgbWVzc2FnZUxlbmd0aCAtIGhlYWRlckxlbmd0aCAtIChQUkVMVURFX0xFTkdUSCArIENIRUNLU1VNX0xFTkdUSCArIENIRUNLU1VNX0xFTkdUSCkpLFxuICAgIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Bd3NDcmMzMiA9IHZvaWQgMDtcbnZhciB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCJAYXdzLWNyeXB0by91dGlsXCIpO1xudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi9pbmRleFwiKTtcbnZhciBBd3NDcmMzMiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBd3NDcmMzMigpIHtcbiAgICAgICAgdGhpcy5jcmMzMiA9IG5ldyBpbmRleF8xLkNyYzMyKCk7XG4gICAgfVxuICAgIEF3c0NyYzMyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAodG9IYXNoKSB7XG4gICAgICAgIGlmICgoMCwgdXRpbF8xLmlzRW1wdHlEYXRhKSh0b0hhc2gpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmNyYzMyLnVwZGF0ZSgoMCwgdXRpbF8xLmNvbnZlcnRUb0J1ZmZlcikodG9IYXNoKSk7XG4gICAgfTtcbiAgICBBd3NDcmMzMi5wcm90b3R5cGUuZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0c2xpYl8xLl9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCAoMCwgdXRpbF8xLm51bVRvVWludDgpKHRoaXMuY3JjMzIuZGlnZXN0KCkpXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEF3c0NyYzMyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jcmMzMiA9IG5ldyBpbmRleF8xLkNyYzMyKCk7XG4gICAgfTtcbiAgICByZXR1cm4gQXdzQ3JjMzI7XG59KCkpO1xuZXhwb3J0cy5Bd3NDcmMzMiA9IEF3c0NyYzMyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXdzX2NyYzMyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Bd3NDcmMzMiA9IGV4cG9ydHMuQ3JjMzIgPSBleHBvcnRzLmNyYzMyID0gdm9pZCAwO1xudmFyIHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG52YXIgdXRpbF8xID0gcmVxdWlyZShcIkBhd3MtY3J5cHRvL3V0aWxcIik7XG5mdW5jdGlvbiBjcmMzMihkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBDcmMzMigpLnVwZGF0ZShkYXRhKS5kaWdlc3QoKTtcbn1cbmV4cG9ydHMuY3JjMzIgPSBjcmMzMjtcbnZhciBDcmMzMiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDcmMzMigpIHtcbiAgICAgICAgdGhpcy5jaGVja3N1bSA9IDB4ZmZmZmZmZmY7XG4gICAgfVxuICAgIENyYzMyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGRhdGFfMSA9IHRzbGliXzEuX192YWx1ZXMoZGF0YSksIGRhdGFfMV8xID0gZGF0YV8xLm5leHQoKTsgIWRhdGFfMV8xLmRvbmU7IGRhdGFfMV8xID0gZGF0YV8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBieXRlID0gZGF0YV8xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja3N1bSA9XG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmNoZWNrc3VtID4+PiA4KSBeIGxvb2t1cFRhYmxlWyh0aGlzLmNoZWNrc3VtIF4gYnl0ZSkgJiAweGZmXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFfMV8xICYmICFkYXRhXzFfMS5kb25lICYmIChfYSA9IGRhdGFfMS5yZXR1cm4pKSBfYS5jYWxsKGRhdGFfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBDcmMzMi5wcm90b3R5cGUuZGlnZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY2hlY2tzdW0gXiAweGZmZmZmZmZmKSA+Pj4gMDtcbiAgICB9O1xuICAgIHJldHVybiBDcmMzMjtcbn0oKSk7XG5leHBvcnRzLkNyYzMyID0gQ3JjMzI7XG4vLyBwcmV0dGllci1pZ25vcmVcbnZhciBhX2xvb2tVcFRhYmxlID0gW1xuICAgIDB4MDAwMDAwMDAsIDB4NzcwNzMwOTYsIDB4RUUwRTYxMkMsIDB4OTkwOTUxQkEsXG4gICAgMHgwNzZEQzQxOSwgMHg3MDZBRjQ4RiwgMHhFOTYzQTUzNSwgMHg5RTY0OTVBMyxcbiAgICAweDBFREI4ODMyLCAweDc5RENCOEE0LCAweEUwRDVFOTFFLCAweDk3RDJEOTg4LFxuICAgIDB4MDlCNjRDMkIsIDB4N0VCMTdDQkQsIDB4RTdCODJEMDcsIDB4OTBCRjFEOTEsXG4gICAgMHgxREI3MTA2NCwgMHg2QUIwMjBGMiwgMHhGM0I5NzE0OCwgMHg4NEJFNDFERSxcbiAgICAweDFBREFENDdELCAweDZERERFNEVCLCAweEY0RDRCNTUxLCAweDgzRDM4NUM3LFxuICAgIDB4MTM2Qzk4NTYsIDB4NjQ2QkE4QzAsIDB4RkQ2MkY5N0EsIDB4OEE2NUM5RUMsXG4gICAgMHgxNDAxNUM0RiwgMHg2MzA2NkNEOSwgMHhGQTBGM0Q2MywgMHg4RDA4MERGNSxcbiAgICAweDNCNkUyMEM4LCAweDRDNjkxMDVFLCAweEQ1NjA0MUU0LCAweEEyNjc3MTcyLFxuICAgIDB4M0MwM0U0RDEsIDB4NEIwNEQ0NDcsIDB4RDIwRDg1RkQsIDB4QTUwQUI1NkIsXG4gICAgMHgzNUI1QThGQSwgMHg0MkIyOTg2QywgMHhEQkJCQzlENiwgMHhBQ0JDRjk0MCxcbiAgICAweDMyRDg2Q0UzLCAweDQ1REY1Qzc1LCAweERDRDYwRENGLCAweEFCRDEzRDU5LFxuICAgIDB4MjZEOTMwQUMsIDB4NTFERTAwM0EsIDB4QzhENzUxODAsIDB4QkZEMDYxMTYsXG4gICAgMHgyMUI0RjRCNSwgMHg1NkIzQzQyMywgMHhDRkJBOTU5OSwgMHhCOEJEQTUwRixcbiAgICAweDI4MDJCODlFLCAweDVGMDU4ODA4LCAweEM2MENEOUIyLCAweEIxMEJFOTI0LFxuICAgIDB4MkY2RjdDODcsIDB4NTg2ODRDMTEsIDB4QzE2MTFEQUIsIDB4QjY2NjJEM0QsXG4gICAgMHg3NkRDNDE5MCwgMHgwMURCNzEwNiwgMHg5OEQyMjBCQywgMHhFRkQ1MTAyQSxcbiAgICAweDcxQjE4NTg5LCAweDA2QjZCNTFGLCAweDlGQkZFNEE1LCAweEU4QjhENDMzLFxuICAgIDB4NzgwN0M5QTIsIDB4MEYwMEY5MzQsIDB4OTYwOUE4OEUsIDB4RTEwRTk4MTgsXG4gICAgMHg3RjZBMERCQiwgMHgwODZEM0QyRCwgMHg5MTY0NkM5NywgMHhFNjYzNUMwMSxcbiAgICAweDZCNkI1MUY0LCAweDFDNkM2MTYyLCAweDg1NjUzMEQ4LCAweEYyNjIwMDRFLFxuICAgIDB4NkMwNjk1RUQsIDB4MUIwMUE1N0IsIDB4ODIwOEY0QzEsIDB4RjUwRkM0NTcsXG4gICAgMHg2NUIwRDlDNiwgMHgxMkI3RTk1MCwgMHg4QkJFQjhFQSwgMHhGQ0I5ODg3QyxcbiAgICAweDYyREQxRERGLCAweDE1REEyRDQ5LCAweDhDRDM3Q0YzLCAweEZCRDQ0QzY1LFxuICAgIDB4NERCMjYxNTgsIDB4M0FCNTUxQ0UsIDB4QTNCQzAwNzQsIDB4RDRCQjMwRTIsXG4gICAgMHg0QURGQTU0MSwgMHgzREQ4OTVENywgMHhBNEQxQzQ2RCwgMHhEM0Q2RjRGQixcbiAgICAweDQzNjlFOTZBLCAweDM0NkVEOUZDLCAweEFENjc4ODQ2LCAweERBNjBCOEQwLFxuICAgIDB4NDQwNDJENzMsIDB4MzMwMzFERTUsIDB4QUEwQTRDNUYsIDB4REQwRDdDQzksXG4gICAgMHg1MDA1NzEzQywgMHgyNzAyNDFBQSwgMHhCRTBCMTAxMCwgMHhDOTBDMjA4NixcbiAgICAweDU3NjhCNTI1LCAweDIwNkY4NUIzLCAweEI5NjZENDA5LCAweENFNjFFNDlGLFxuICAgIDB4NUVERUY5MEUsIDB4MjlEOUM5OTgsIDB4QjBEMDk4MjIsIDB4QzdEN0E4QjQsXG4gICAgMHg1OUIzM0QxNywgMHgyRUI0MEQ4MSwgMHhCN0JENUMzQiwgMHhDMEJBNkNBRCxcbiAgICAweEVEQjg4MzIwLCAweDlBQkZCM0I2LCAweDAzQjZFMjBDLCAweDc0QjFEMjlBLFxuICAgIDB4RUFENTQ3MzksIDB4OUREMjc3QUYsIDB4MDREQjI2MTUsIDB4NzNEQzE2ODMsXG4gICAgMHhFMzYzMEIxMiwgMHg5NDY0M0I4NCwgMHgwRDZENkEzRSwgMHg3QTZBNUFBOCxcbiAgICAweEU0MEVDRjBCLCAweDkzMDlGRjlELCAweDBBMDBBRTI3LCAweDdEMDc5RUIxLFxuICAgIDB4RjAwRjkzNDQsIDB4ODcwOEEzRDIsIDB4MUUwMUYyNjgsIDB4NjkwNkMyRkUsXG4gICAgMHhGNzYyNTc1RCwgMHg4MDY1NjdDQiwgMHgxOTZDMzY3MSwgMHg2RTZCMDZFNyxcbiAgICAweEZFRDQxQjc2LCAweDg5RDMyQkUwLCAweDEwREE3QTVBLCAweDY3REQ0QUNDLFxuICAgIDB4RjlCOURGNkYsIDB4OEVCRUVGRjksIDB4MTdCN0JFNDMsIDB4NjBCMDhFRDUsXG4gICAgMHhENkQ2QTNFOCwgMHhBMUQxOTM3RSwgMHgzOEQ4QzJDNCwgMHg0RkRGRjI1MixcbiAgICAweEQxQkI2N0YxLCAweEE2QkM1NzY3LCAweDNGQjUwNkRELCAweDQ4QjIzNjRCLFxuICAgIDB4RDgwRDJCREEsIDB4QUYwQTFCNEMsIDB4MzYwMzRBRjYsIDB4NDEwNDdBNjAsXG4gICAgMHhERjYwRUZDMywgMHhBODY3REY1NSwgMHgzMTZFOEVFRiwgMHg0NjY5QkU3OSxcbiAgICAweENCNjFCMzhDLCAweEJDNjY4MzFBLCAweDI1NkZEMkEwLCAweDUyNjhFMjM2LFxuICAgIDB4Q0MwQzc3OTUsIDB4QkIwQjQ3MDMsIDB4MjIwMjE2QjksIDB4NTUwNTI2MkYsXG4gICAgMHhDNUJBM0JCRSwgMHhCMkJEMEIyOCwgMHgyQkI0NUE5MiwgMHg1Q0IzNkEwNCxcbiAgICAweEMyRDdGRkE3LCAweEI1RDBDRjMxLCAweDJDRDk5RThCLCAweDVCREVBRTFELFxuICAgIDB4OUI2NEMyQjAsIDB4RUM2M0YyMjYsIDB4NzU2QUEzOUMsIDB4MDI2RDkzMEEsXG4gICAgMHg5QzA5MDZBOSwgMHhFQjBFMzYzRiwgMHg3MjA3Njc4NSwgMHgwNTAwNTcxMyxcbiAgICAweDk1QkY0QTgyLCAweEUyQjg3QTE0LCAweDdCQjEyQkFFLCAweDBDQjYxQjM4LFxuICAgIDB4OTJEMjhFOUIsIDB4RTVENUJFMEQsIDB4N0NEQ0VGQjcsIDB4MEJEQkRGMjEsXG4gICAgMHg4NkQzRDJENCwgMHhGMUQ0RTI0MiwgMHg2OEREQjNGOCwgMHgxRkRBODM2RSxcbiAgICAweDgxQkUxNkNELCAweEY2QjkyNjVCLCAweDZGQjA3N0UxLCAweDE4Qjc0Nzc3LFxuICAgIDB4ODgwODVBRTYsIDB4RkYwRjZBNzAsIDB4NjYwNjNCQ0EsIDB4MTEwMTBCNUMsXG4gICAgMHg4RjY1OUVGRiwgMHhGODYyQUU2OSwgMHg2MTZCRkZEMywgMHgxNjZDQ0Y0NSxcbiAgICAweEEwMEFFMjc4LCAweEQ3MEREMkVFLCAweDRFMDQ4MzU0LCAweDM5MDNCM0MyLFxuICAgIDB4QTc2NzI2NjEsIDB4RDA2MDE2RjcsIDB4NDk2OTQ3NEQsIDB4M0U2RTc3REIsXG4gICAgMHhBRUQxNkE0QSwgMHhEOUQ2NUFEQywgMHg0MERGMEI2NiwgMHgzN0Q4M0JGMCxcbiAgICAweEE5QkNBRTUzLCAweERFQkI5RUM1LCAweDQ3QjJDRjdGLCAweDMwQjVGRkU5LFxuICAgIDB4QkRCREYyMUMsIDB4Q0FCQUMyOEEsIDB4NTNCMzkzMzAsIDB4MjRCNEEzQTYsXG4gICAgMHhCQUQwMzYwNSwgMHhDREQ3MDY5MywgMHg1NERFNTcyOSwgMHgyM0Q5NjdCRixcbiAgICAweEIzNjY3QTJFLCAweEM0NjE0QUI4LCAweDVENjgxQjAyLCAweDJBNkYyQjk0LFxuICAgIDB4QjQwQkJFMzcsIDB4QzMwQzhFQTEsIDB4NUEwNURGMUIsIDB4MkQwMkVGOEQsXG5dO1xudmFyIGxvb2t1cFRhYmxlID0gKDAsIHV0aWxfMS51aW50MzJBcnJheUZyb20pKGFfbG9va1VwVGFibGUpO1xudmFyIGF3c19jcmMzMl8xID0gcmVxdWlyZShcIi4vYXdzX2NyYzMyXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQXdzQ3JjMzJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGF3c19jcmMzMl8xLkF3c0NyYzMyOyB9IH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBDb3B5cmlnaHQgQW1hem9uLmNvbSBJbmMuIG9yIGl0cyBhZmZpbGlhdGVzLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuLy8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29udmVydFRvQnVmZmVyID0gdm9pZCAwO1xudmFyIHV0aWxfdXRmOF9icm93c2VyXzEgPSByZXF1aXJlKFwiQGF3cy1zZGsvdXRpbC11dGY4LWJyb3dzZXJcIik7XG4vLyBRdWljayBwb2x5ZmlsbFxudmFyIGZyb21VdGY4ID0gdHlwZW9mIEJ1ZmZlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBCdWZmZXIuZnJvbVxuICAgID8gZnVuY3Rpb24gKGlucHV0KSB7IHJldHVybiBCdWZmZXIuZnJvbShpbnB1dCwgXCJ1dGY4XCIpOyB9XG4gICAgOiB1dGlsX3V0ZjhfYnJvd3Nlcl8xLmZyb21VdGY4O1xuZnVuY3Rpb24gY29udmVydFRvQnVmZmVyKGRhdGEpIHtcbiAgICAvLyBBbHJlYWR5IGEgVWludDgsIGRvIG5vdGhpbmdcbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZnJvbVV0ZjgoZGF0YSk7XG4gICAgfVxuICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCAvIFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG59XG5leHBvcnRzLmNvbnZlcnRUb0J1ZmZlciA9IGNvbnZlcnRUb0J1ZmZlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnZlcnRUb0J1ZmZlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51aW50MzJBcnJheUZyb20gPSBleHBvcnRzLm51bVRvVWludDggPSBleHBvcnRzLmlzRW1wdHlEYXRhID0gZXhwb3J0cy5jb252ZXJ0VG9CdWZmZXIgPSB2b2lkIDA7XG52YXIgY29udmVydFRvQnVmZmVyXzEgPSByZXF1aXJlKFwiLi9jb252ZXJ0VG9CdWZmZXJcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjb252ZXJ0VG9CdWZmZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbnZlcnRUb0J1ZmZlcl8xLmNvbnZlcnRUb0J1ZmZlcjsgfSB9KTtcbnZhciBpc0VtcHR5RGF0YV8xID0gcmVxdWlyZShcIi4vaXNFbXB0eURhdGFcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJpc0VtcHR5RGF0YVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNFbXB0eURhdGFfMS5pc0VtcHR5RGF0YTsgfSB9KTtcbnZhciBudW1Ub1VpbnQ4XzEgPSByZXF1aXJlKFwiLi9udW1Ub1VpbnQ4XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibnVtVG9VaW50OFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVtVG9VaW50OF8xLm51bVRvVWludDg7IH0gfSk7XG52YXIgdWludDMyQXJyYXlGcm9tXzEgPSByZXF1aXJlKFwiLi91aW50MzJBcnJheUZyb21cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ1aW50MzJBcnJheUZyb21cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVpbnQzMkFycmF5RnJvbV8xLnVpbnQzMkFycmF5RnJvbTsgfSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20gSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzRW1wdHlEYXRhID0gdm9pZCAwO1xuZnVuY3Rpb24gaXNFbXB0eURhdGEoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZGF0YS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIHJldHVybiBkYXRhLmJ5dGVMZW5ndGggPT09IDA7XG59XG5leHBvcnRzLmlzRW1wdHlEYXRhID0gaXNFbXB0eURhdGE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0VtcHR5RGF0YS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5udW1Ub1VpbnQ4ID0gdm9pZCAwO1xuZnVuY3Rpb24gbnVtVG9VaW50OChudW0pIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAobnVtICYgMHhmZjAwMDAwMCkgPj4gMjQsXG4gICAgICAgIChudW0gJiAweDAwZmYwMDAwKSA+PiAxNixcbiAgICAgICAgKG51bSAmIDB4MDAwMGZmMDApID4+IDgsXG4gICAgICAgIG51bSAmIDB4MDAwMDAwZmYsXG4gICAgXSk7XG59XG5leHBvcnRzLm51bVRvVWludDggPSBudW1Ub1VpbnQ4O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bnVtVG9VaW50OC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbi8vIENvcHlyaWdodCBBbWF6b24uY29tIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy51aW50MzJBcnJheUZyb20gPSB2b2lkIDA7XG4vLyBJRSAxMSBkb2VzIG5vdCBzdXBwb3J0IEFycmF5LmZyb20sIHNvIHdlIGRvIGl0IG1hbnVhbGx5XG5mdW5jdGlvbiB1aW50MzJBcnJheUZyb20oYV9sb29rVXBUYWJsZSkge1xuICAgIGlmICghVWludDMyQXJyYXkuZnJvbSkge1xuICAgICAgICB2YXIgcmV0dXJuX2FycmF5ID0gbmV3IFVpbnQzMkFycmF5KGFfbG9va1VwVGFibGUubGVuZ3RoKTtcbiAgICAgICAgdmFyIGFfaW5kZXggPSAwO1xuICAgICAgICB3aGlsZSAoYV9pbmRleCA8IGFfbG9va1VwVGFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm5fYXJyYXlbYV9pbmRleF0gPSBhX2xvb2tVcFRhYmxlW2FfaW5kZXhdO1xuICAgICAgICAgICAgYV9pbmRleCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5fYXJyYXk7XG4gICAgfVxuICAgIHJldHVybiBVaW50MzJBcnJheS5mcm9tKGFfbG9va1VwVGFibGUpO1xufVxuZXhwb3J0cy51aW50MzJBcnJheUZyb20gPSB1aW50MzJBcnJheUZyb207XG4vLyMgc291cmNlTWFwcGluZ1VSTD11aW50MzJBcnJheUZyb20uanMubWFwIiwiY29uc3QgU0hPUlRfVE9fSEVYID0ge307XG5jb25zdCBIRVhfVE9fU0hPUlQgPSB7fTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgICBsZXQgZW5jb2RlZEJ5dGUgPSBpLnRvU3RyaW5nKDE2KS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChlbmNvZGVkQnl0ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZW5jb2RlZEJ5dGUgPSBgMCR7ZW5jb2RlZEJ5dGV9YDtcbiAgICB9XG4gICAgU0hPUlRfVE9fSEVYW2ldID0gZW5jb2RlZEJ5dGU7XG4gICAgSEVYX1RPX1NIT1JUW2VuY29kZWRCeXRlXSA9IGk7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbUhleChlbmNvZGVkKSB7XG4gICAgaWYgKGVuY29kZWQubGVuZ3RoICUgMiAhPT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIZXggZW5jb2RlZCBzdHJpbmdzIG11c3QgaGF2ZSBhbiBldmVuIG51bWJlciBsZW5ndGhcIik7XG4gICAgfVxuICAgIGNvbnN0IG91dCA9IG5ldyBVaW50OEFycmF5KGVuY29kZWQubGVuZ3RoIC8gMik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIGNvbnN0IGVuY29kZWRCeXRlID0gZW5jb2RlZC5zbGljZShpLCBpICsgMikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGVuY29kZWRCeXRlIGluIEhFWF9UT19TSE9SVCkge1xuICAgICAgICAgICAgb3V0W2kgLyAyXSA9IEhFWF9UT19TSE9SVFtlbmNvZGVkQnl0ZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBkZWNvZGUgdW5yZWNvZ25pemVkIHNlcXVlbmNlICR7ZW5jb2RlZEJ5dGV9IGFzIGhleGFkZWNpbWFsYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b0hleChieXRlcykge1xuICAgIGxldCBvdXQgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMuYnl0ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG91dCArPSBTSE9SVF9UT19IRVhbYnl0ZXNbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuIiwiaW1wb3J0IHsgQ3JjMzIgfSBmcm9tIFwiQGF3cy1jcnlwdG8vY3JjMzJcIjtcbmltcG9ydCB7IEhlYWRlck1hcnNoYWxsZXIgfSBmcm9tIFwiLi9IZWFkZXJNYXJzaGFsbGVyXCI7XG5pbXBvcnQgeyBzcGxpdE1lc3NhZ2UgfSBmcm9tIFwiLi9zcGxpdE1lc3NhZ2VcIjtcbnZhciBFdmVudFN0cmVhbU1hcnNoYWxsZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50U3RyZWFtTWFyc2hhbGxlcih0b1V0ZjgsIGZyb21VdGY4KSB7XG4gICAgICAgIHRoaXMuaGVhZGVyTWFyc2hhbGxlciA9IG5ldyBIZWFkZXJNYXJzaGFsbGVyKHRvVXRmOCwgZnJvbVV0ZjgpO1xuICAgIH1cbiAgICBFdmVudFN0cmVhbU1hcnNoYWxsZXIucHJvdG90eXBlLm1hcnNoYWxsID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciByYXdIZWFkZXJzID0gX2EuaGVhZGVycywgYm9keSA9IF9hLmJvZHk7XG4gICAgICAgIHZhciBoZWFkZXJzID0gdGhpcy5oZWFkZXJNYXJzaGFsbGVyLmZvcm1hdChyYXdIZWFkZXJzKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGhlYWRlcnMuYnl0ZUxlbmd0aCArIGJvZHkuYnl0ZUxlbmd0aCArIDE2O1xuICAgICAgICB2YXIgb3V0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICAgICAgdmFyIHZpZXcgPSBuZXcgRGF0YVZpZXcob3V0LmJ1ZmZlciwgb3V0LmJ5dGVPZmZzZXQsIG91dC5ieXRlTGVuZ3RoKTtcbiAgICAgICAgdmFyIGNoZWNrc3VtID0gbmV3IENyYzMyKCk7XG4gICAgICAgIHZpZXcuc2V0VWludDMyKDAsIGxlbmd0aCwgZmFsc2UpO1xuICAgICAgICB2aWV3LnNldFVpbnQzMig0LCBoZWFkZXJzLmJ5dGVMZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgdmlldy5zZXRVaW50MzIoOCwgY2hlY2tzdW0udXBkYXRlKG91dC5zdWJhcnJheSgwLCA4KSkuZGlnZXN0KCksIGZhbHNlKTtcbiAgICAgICAgb3V0LnNldChoZWFkZXJzLCAxMik7XG4gICAgICAgIG91dC5zZXQoYm9keSwgaGVhZGVycy5ieXRlTGVuZ3RoICsgMTIpO1xuICAgICAgICB2aWV3LnNldFVpbnQzMihsZW5ndGggLSA0LCBjaGVja3N1bS51cGRhdGUob3V0LnN1YmFycmF5KDgsIGxlbmd0aCAtIDQpKS5kaWdlc3QoKSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgRXZlbnRTdHJlYW1NYXJzaGFsbGVyLnByb3RvdHlwZS51bm1hcnNoYWxsID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF9hID0gc3BsaXRNZXNzYWdlKG1lc3NhZ2UpLCBoZWFkZXJzID0gX2EuaGVhZGVycywgYm9keSA9IF9hLmJvZHk7XG4gICAgICAgIHJldHVybiB7IGhlYWRlcnM6IHRoaXMuaGVhZGVyTWFyc2hhbGxlci5wYXJzZShoZWFkZXJzKSwgYm9keTogYm9keSB9O1xuICAgIH07XG4gICAgRXZlbnRTdHJlYW1NYXJzaGFsbGVyLnByb3RvdHlwZS5mb3JtYXRIZWFkZXJzID0gZnVuY3Rpb24gKHJhd0hlYWRlcnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyTWFyc2hhbGxlci5mb3JtYXQocmF3SGVhZGVycyk7XG4gICAgfTtcbiAgICByZXR1cm4gRXZlbnRTdHJlYW1NYXJzaGFsbGVyO1xufSgpKTtcbmV4cG9ydCB7IEV2ZW50U3RyZWFtTWFyc2hhbGxlciB9O1xuIiwiaW1wb3J0IHsgX192YWx1ZXMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IGZyb21IZXgsIHRvSGV4IH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtaGV4LWVuY29kaW5nXCI7XG5pbXBvcnQgeyBJbnQ2NCB9IGZyb20gXCIuL0ludDY0XCI7XG52YXIgSGVhZGVyTWFyc2hhbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSGVhZGVyTWFyc2hhbGxlcih0b1V0ZjgsIGZyb21VdGY4KSB7XG4gICAgICAgIHRoaXMudG9VdGY4ID0gdG9VdGY4O1xuICAgICAgICB0aGlzLmZyb21VdGY4ID0gZnJvbVV0Zjg7XG4gICAgfVxuICAgIEhlYWRlck1hcnNoYWxsZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIChoZWFkZXJzKSB7XG4gICAgICAgIHZhciBlXzEsIF9hLCBlXzIsIF9iO1xuICAgICAgICB2YXIgY2h1bmtzID0gW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYyA9IF9fdmFsdWVzKE9iamVjdC5rZXlzKGhlYWRlcnMpKSwgX2QgPSBfYy5uZXh0KCk7ICFfZC5kb25lOyBfZCA9IF9jLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBoZWFkZXJOYW1lID0gX2QudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIGJ5dGVzID0gdGhpcy5mcm9tVXRmOChoZWFkZXJOYW1lKTtcbiAgICAgICAgICAgICAgICBjaHVua3MucHVzaChVaW50OEFycmF5LmZyb20oW2J5dGVzLmJ5dGVMZW5ndGhdKSwgYnl0ZXMsIHRoaXMuZm9ybWF0SGVhZGVyVmFsdWUoaGVhZGVyc1toZWFkZXJOYW1lXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2QgJiYgIV9kLmRvbmUgJiYgKF9hID0gX2MucmV0dXJuKSkgX2EuY2FsbChfYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG91dCA9IG5ldyBVaW50OEFycmF5KGNodW5rcy5yZWR1Y2UoZnVuY3Rpb24gKGNhcnJ5LCBieXRlcykgeyByZXR1cm4gY2FycnkgKyBieXRlcy5ieXRlTGVuZ3RoOyB9LCAwKSk7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBjaHVua3NfMSA9IF9fdmFsdWVzKGNodW5rcyksIGNodW5rc18xXzEgPSBjaHVua3NfMS5uZXh0KCk7ICFjaHVua3NfMV8xLmRvbmU7IGNodW5rc18xXzEgPSBjaHVua3NfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2h1bmsgPSBjaHVua3NfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIG91dC5zZXQoY2h1bmssIHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSBjaHVuay5ieXRlTGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoY2h1bmtzXzFfMSAmJiAhY2h1bmtzXzFfMS5kb25lICYmIChfYiA9IGNodW5rc18xLnJldHVybikpIF9iLmNhbGwoY2h1bmtzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQ7XG4gICAgfTtcbiAgICBIZWFkZXJNYXJzaGFsbGVyLnByb3RvdHlwZS5mb3JtYXRIZWFkZXJWYWx1ZSA9IGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgICAgc3dpdGNoIChoZWFkZXIudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKFtoZWFkZXIudmFsdWUgPyAwIDogMV0pO1xuICAgICAgICAgICAgY2FzZSBcImJ5dGVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKFsyLCBoZWFkZXIudmFsdWVdKTtcbiAgICAgICAgICAgIGNhc2UgXCJzaG9ydFwiOlxuICAgICAgICAgICAgICAgIHZhciBzaG9ydFZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDMpKTtcbiAgICAgICAgICAgICAgICBzaG9ydFZpZXcuc2V0VWludDgoMCwgMyk7XG4gICAgICAgICAgICAgICAgc2hvcnRWaWV3LnNldEludDE2KDEsIGhlYWRlci52YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShzaG9ydFZpZXcuYnVmZmVyKTtcbiAgICAgICAgICAgIGNhc2UgXCJpbnRlZ2VyXCI6XG4gICAgICAgICAgICAgICAgdmFyIGludFZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDUpKTtcbiAgICAgICAgICAgICAgICBpbnRWaWV3LnNldFVpbnQ4KDAsIDQpO1xuICAgICAgICAgICAgICAgIGludFZpZXcuc2V0SW50MzIoMSwgaGVhZGVyLnZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGludFZpZXcuYnVmZmVyKTtcbiAgICAgICAgICAgIGNhc2UgXCJsb25nXCI6XG4gICAgICAgICAgICAgICAgdmFyIGxvbmdCeXRlcyA9IG5ldyBVaW50OEFycmF5KDkpO1xuICAgICAgICAgICAgICAgIGxvbmdCeXRlc1swXSA9IDU7XG4gICAgICAgICAgICAgICAgbG9uZ0J5dGVzLnNldChoZWFkZXIudmFsdWUuYnl0ZXMsIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBsb25nQnl0ZXM7XG4gICAgICAgICAgICBjYXNlIFwiYmluYXJ5XCI6XG4gICAgICAgICAgICAgICAgdmFyIGJpblZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDMgKyBoZWFkZXIudmFsdWUuYnl0ZUxlbmd0aCkpO1xuICAgICAgICAgICAgICAgIGJpblZpZXcuc2V0VWludDgoMCwgNik7XG4gICAgICAgICAgICAgICAgYmluVmlldy5zZXRVaW50MTYoMSwgaGVhZGVyLnZhbHVlLmJ5dGVMZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2YXIgYmluQnl0ZXMgPSBuZXcgVWludDhBcnJheShiaW5WaWV3LmJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgYmluQnl0ZXMuc2V0KGhlYWRlci52YWx1ZSwgMyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbkJ5dGVzO1xuICAgICAgICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICAgICAgICAgIHZhciB1dGY4Qnl0ZXMgPSB0aGlzLmZyb21VdGY4KGhlYWRlci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIHN0clZpZXcgPSBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDMgKyB1dGY4Qnl0ZXMuYnl0ZUxlbmd0aCkpO1xuICAgICAgICAgICAgICAgIHN0clZpZXcuc2V0VWludDgoMCwgNyk7XG4gICAgICAgICAgICAgICAgc3RyVmlldy5zZXRVaW50MTYoMSwgdXRmOEJ5dGVzLmJ5dGVMZW5ndGgsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RyQnl0ZXMgPSBuZXcgVWludDhBcnJheShzdHJWaWV3LmJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgc3RyQnl0ZXMuc2V0KHV0ZjhCeXRlcywgMyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ckJ5dGVzO1xuICAgICAgICAgICAgY2FzZSBcInRpbWVzdGFtcFwiOlxuICAgICAgICAgICAgICAgIHZhciB0c0J5dGVzID0gbmV3IFVpbnQ4QXJyYXkoOSk7XG4gICAgICAgICAgICAgICAgdHNCeXRlc1swXSA9IDg7XG4gICAgICAgICAgICAgICAgdHNCeXRlcy5zZXQoSW50NjQuZnJvbU51bWJlcihoZWFkZXIudmFsdWUudmFsdWVPZigpKS5ieXRlcywgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRzQnl0ZXM7XG4gICAgICAgICAgICBjYXNlIFwidXVpZFwiOlxuICAgICAgICAgICAgICAgIGlmICghVVVJRF9QQVRURVJOLnRlc3QoaGVhZGVyLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFVVSUQgcmVjZWl2ZWQ6IFwiLmNvbmNhdChoZWFkZXIudmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHV1aWRCeXRlcyA9IG5ldyBVaW50OEFycmF5KDE3KTtcbiAgICAgICAgICAgICAgICB1dWlkQnl0ZXNbMF0gPSA5O1xuICAgICAgICAgICAgICAgIHV1aWRCeXRlcy5zZXQoZnJvbUhleChoZWFkZXIudmFsdWUucmVwbGFjZSgvXFwtL2csIFwiXCIpKSwgMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHV1aWRCeXRlcztcbiAgICAgICAgfVxuICAgIH07XG4gICAgSGVhZGVyTWFyc2hhbGxlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiAoaGVhZGVycykge1xuICAgICAgICB2YXIgb3V0ID0ge307XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IDA7XG4gICAgICAgIHdoaWxlIChwb3NpdGlvbiA8IGhlYWRlcnMuYnl0ZUxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIG5hbWVMZW5ndGggPSBoZWFkZXJzLmdldFVpbnQ4KHBvc2l0aW9uKyspO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRoaXMudG9VdGY4KG5ldyBVaW50OEFycmF5KGhlYWRlcnMuYnVmZmVyLCBoZWFkZXJzLmJ5dGVPZmZzZXQgKyBwb3NpdGlvbiwgbmFtZUxlbmd0aCkpO1xuICAgICAgICAgICAgcG9zaXRpb24gKz0gbmFtZUxlbmd0aDtcbiAgICAgICAgICAgIHN3aXRjaCAoaGVhZGVycy5nZXRVaW50OChwb3NpdGlvbisrKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVfMV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBCT09MRUFOX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXzFdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQk9PTEVBTl9UQUcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVfMV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBCWVRFX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBoZWFkZXJzLmdldEludDgocG9zaXRpb24rKyksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVfMV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBTSE9SVF9UQUcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaGVhZGVycy5nZXRJbnQxNihwb3NpdGlvbiwgZmFsc2UpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXzFdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogSU5UX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBoZWFkZXJzLmdldEludDMyKHBvc2l0aW9uLCBmYWxzZSksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVfMV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT05HX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgSW50NjQobmV3IFVpbnQ4QXJyYXkoaGVhZGVycy5idWZmZXIsIGhlYWRlcnMuYnl0ZU9mZnNldCArIHBvc2l0aW9uLCA4KSksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJpbmFyeUxlbmd0aCA9IGhlYWRlcnMuZ2V0VWludDE2KHBvc2l0aW9uLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IDI7XG4gICAgICAgICAgICAgICAgICAgIG91dFtuYW1lXzFdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogQklOQVJZX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgVWludDhBcnJheShoZWFkZXJzLmJ1ZmZlciwgaGVhZGVycy5ieXRlT2Zmc2V0ICsgcG9zaXRpb24sIGJpbmFyeUxlbmd0aCksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IGJpbmFyeUxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICB2YXIgc3RyaW5nTGVuZ3RoID0gaGVhZGVycy5nZXRVaW50MTYocG9zaXRpb24sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24gKz0gMjtcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVfMV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBTVFJJTkdfVEFHLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudG9VdGY4KG5ldyBVaW50OEFycmF5KGhlYWRlcnMuYnVmZmVyLCBoZWFkZXJzLmJ5dGVPZmZzZXQgKyBwb3NpdGlvbiwgc3RyaW5nTGVuZ3RoKSksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IHN0cmluZ0xlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICBvdXRbbmFtZV8xXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFRJTUVTVEFNUF9UQUcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IERhdGUobmV3IEludDY0KG5ldyBVaW50OEFycmF5KGhlYWRlcnMuYnVmZmVyLCBoZWFkZXJzLmJ5dGVPZmZzZXQgKyBwb3NpdGlvbiwgOCkpLnZhbHVlT2YoKSksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICs9IDg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgdmFyIHV1aWRCeXRlcyA9IG5ldyBVaW50OEFycmF5KGhlYWRlcnMuYnVmZmVyLCBoZWFkZXJzLmJ5dGVPZmZzZXQgKyBwb3NpdGlvbiwgMTYpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiArPSAxNjtcbiAgICAgICAgICAgICAgICAgICAgb3V0W25hbWVfMV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBVVUlEX1RBRyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLmNvbmNhdCh0b0hleCh1dWlkQnl0ZXMuc3ViYXJyYXkoMCwgNCkpLCBcIi1cIikuY29uY2F0KHRvSGV4KHV1aWRCeXRlcy5zdWJhcnJheSg0LCA2KSksIFwiLVwiKS5jb25jYXQodG9IZXgodXVpZEJ5dGVzLnN1YmFycmF5KDYsIDgpKSwgXCItXCIpLmNvbmNhdCh0b0hleCh1dWlkQnl0ZXMuc3ViYXJyYXkoOCwgMTApKSwgXCItXCIpLmNvbmNhdCh0b0hleCh1dWlkQnl0ZXMuc3ViYXJyYXkoMTApKSksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVucmVjb2duaXplZCBoZWFkZXIgdHlwZSB0YWdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuICAgIHJldHVybiBIZWFkZXJNYXJzaGFsbGVyO1xufSgpKTtcbmV4cG9ydCB7IEhlYWRlck1hcnNoYWxsZXIgfTtcbnZhciBIRUFERVJfVkFMVUVfVFlQRTtcbihmdW5jdGlvbiAoSEVBREVSX1ZBTFVFX1RZUEUpIHtcbiAgICBIRUFERVJfVkFMVUVfVFlQRVtIRUFERVJfVkFMVUVfVFlQRVtcImJvb2xUcnVlXCJdID0gMF0gPSBcImJvb2xUcnVlXCI7XG4gICAgSEVBREVSX1ZBTFVFX1RZUEVbSEVBREVSX1ZBTFVFX1RZUEVbXCJib29sRmFsc2VcIl0gPSAxXSA9IFwiYm9vbEZhbHNlXCI7XG4gICAgSEVBREVSX1ZBTFVFX1RZUEVbSEVBREVSX1ZBTFVFX1RZUEVbXCJieXRlXCJdID0gMl0gPSBcImJ5dGVcIjtcbiAgICBIRUFERVJfVkFMVUVfVFlQRVtIRUFERVJfVkFMVUVfVFlQRVtcInNob3J0XCJdID0gM10gPSBcInNob3J0XCI7XG4gICAgSEVBREVSX1ZBTFVFX1RZUEVbSEVBREVSX1ZBTFVFX1RZUEVbXCJpbnRlZ2VyXCJdID0gNF0gPSBcImludGVnZXJcIjtcbiAgICBIRUFERVJfVkFMVUVfVFlQRVtIRUFERVJfVkFMVUVfVFlQRVtcImxvbmdcIl0gPSA1XSA9IFwibG9uZ1wiO1xuICAgIEhFQURFUl9WQUxVRV9UWVBFW0hFQURFUl9WQUxVRV9UWVBFW1wiYnl0ZUFycmF5XCJdID0gNl0gPSBcImJ5dGVBcnJheVwiO1xuICAgIEhFQURFUl9WQUxVRV9UWVBFW0hFQURFUl9WQUxVRV9UWVBFW1wic3RyaW5nXCJdID0gN10gPSBcInN0cmluZ1wiO1xuICAgIEhFQURFUl9WQUxVRV9UWVBFW0hFQURFUl9WQUxVRV9UWVBFW1widGltZXN0YW1wXCJdID0gOF0gPSBcInRpbWVzdGFtcFwiO1xuICAgIEhFQURFUl9WQUxVRV9UWVBFW0hFQURFUl9WQUxVRV9UWVBFW1widXVpZFwiXSA9IDldID0gXCJ1dWlkXCI7XG59KShIRUFERVJfVkFMVUVfVFlQRSB8fCAoSEVBREVSX1ZBTFVFX1RZUEUgPSB7fSkpO1xudmFyIEJPT0xFQU5fVEFHID0gXCJib29sZWFuXCI7XG52YXIgQllURV9UQUcgPSBcImJ5dGVcIjtcbnZhciBTSE9SVF9UQUcgPSBcInNob3J0XCI7XG52YXIgSU5UX1RBRyA9IFwiaW50ZWdlclwiO1xudmFyIExPTkdfVEFHID0gXCJsb25nXCI7XG52YXIgQklOQVJZX1RBRyA9IFwiYmluYXJ5XCI7XG52YXIgU1RSSU5HX1RBRyA9IFwic3RyaW5nXCI7XG52YXIgVElNRVNUQU1QX1RBRyA9IFwidGltZXN0YW1wXCI7XG52YXIgVVVJRF9UQUcgPSBcInV1aWRcIjtcbnZhciBVVUlEX1BBVFRFUk4gPSAvXlthLWYwLTldezh9LVthLWYwLTldezR9LVthLWYwLTldezR9LVthLWYwLTldezR9LVthLWYwLTldezEyfSQvO1xuIiwiaW1wb3J0IHsgdG9IZXggfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1oZXgtZW5jb2RpbmdcIjtcbnZhciBJbnQ2NCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW50NjQoYnl0ZXMpIHtcbiAgICAgICAgdGhpcy5ieXRlcyA9IGJ5dGVzO1xuICAgICAgICBpZiAoYnl0ZXMuYnl0ZUxlbmd0aCAhPT0gOCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW50NjQgYnVmZmVycyBtdXN0IGJlIGV4YWN0bHkgOCBieXRlc1wiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBJbnQ2NC5mcm9tTnVtYmVyID0gZnVuY3Rpb24gKG51bWJlcikge1xuICAgICAgICBpZiAobnVtYmVyID4gOTIyMzM3MjAzNjg1NDc3NTgwNyB8fCBudW1iZXIgPCAtOTIyMzM3MjAzNjg1NDc3NTgwOCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXCIuY29uY2F0KG51bWJlciwgXCIgaXMgdG9vIGxhcmdlIChvciwgaWYgbmVnYXRpdmUsIHRvbyBzbWFsbCkgdG8gcmVwcmVzZW50IGFzIGFuIEludDY0XCIpKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheSg4KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDcsIHJlbWFpbmluZyA9IE1hdGguYWJzKE1hdGgucm91bmQobnVtYmVyKSk7IGkgPiAtMSAmJiByZW1haW5pbmcgPiAwOyBpLS0sIHJlbWFpbmluZyAvPSAyNTYpIHtcbiAgICAgICAgICAgIGJ5dGVzW2ldID0gcmVtYWluaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgICAgICBuZWdhdGUoYnl0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSW50NjQoYnl0ZXMpO1xuICAgIH07XG4gICAgSW50NjQucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBieXRlcyA9IHRoaXMuYnl0ZXMuc2xpY2UoMCk7XG4gICAgICAgIHZhciBuZWdhdGl2ZSA9IGJ5dGVzWzBdICYgMTI4O1xuICAgICAgICBpZiAobmVnYXRpdmUpIHtcbiAgICAgICAgICAgIG5lZ2F0ZShieXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRvSGV4KGJ5dGVzKSwgMTYpICogKG5lZ2F0aXZlID8gLTEgOiAxKTtcbiAgICB9O1xuICAgIEludDY0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLnZhbHVlT2YoKSk7XG4gICAgfTtcbiAgICByZXR1cm4gSW50NjQ7XG59KCkpO1xuZXhwb3J0IHsgSW50NjQgfTtcbmZ1bmN0aW9uIG5lZ2F0ZShieXRlcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIGJ5dGVzW2ldIF49IDB4ZmY7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSA3OyBpID4gLTE7IGktLSkge1xuICAgICAgICBieXRlc1tpXSsrO1xuICAgICAgICBpZiAoYnl0ZXNbaV0gIT09IDApXG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG4iLCJleHBvcnQge307XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9FdmVudFN0cmVhbU1hcnNoYWxsZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0ludDY0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9NZXNzYWdlXCI7XG4iLCJpbXBvcnQgeyBDcmMzMiB9IGZyb20gXCJAYXdzLWNyeXB0by9jcmMzMlwiO1xudmFyIFBSRUxVREVfTUVNQkVSX0xFTkdUSCA9IDQ7XG52YXIgUFJFTFVERV9MRU5HVEggPSBQUkVMVURFX01FTUJFUl9MRU5HVEggKiAyO1xudmFyIENIRUNLU1VNX0xFTkdUSCA9IDQ7XG52YXIgTUlOSU1VTV9NRVNTQUdFX0xFTkdUSCA9IFBSRUxVREVfTEVOR1RIICsgQ0hFQ0tTVU1fTEVOR1RIICogMjtcbmV4cG9ydCBmdW5jdGlvbiBzcGxpdE1lc3NhZ2UoX2EpIHtcbiAgICB2YXIgYnl0ZUxlbmd0aCA9IF9hLmJ5dGVMZW5ndGgsIGJ5dGVPZmZzZXQgPSBfYS5ieXRlT2Zmc2V0LCBidWZmZXIgPSBfYS5idWZmZXI7XG4gICAgaWYgKGJ5dGVMZW5ndGggPCBNSU5JTVVNX01FU1NBR0VfTEVOR1RIKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlByb3ZpZGVkIG1lc3NhZ2UgdG9vIHNob3J0IHRvIGFjY29tbW9kYXRlIGV2ZW50IHN0cmVhbSBtZXNzYWdlIG92ZXJoZWFkXCIpO1xuICAgIH1cbiAgICB2YXIgdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIsIGJ5dGVPZmZzZXQsIGJ5dGVMZW5ndGgpO1xuICAgIHZhciBtZXNzYWdlTGVuZ3RoID0gdmlldy5nZXRVaW50MzIoMCwgZmFsc2UpO1xuICAgIGlmIChieXRlTGVuZ3RoICE9PSBtZXNzYWdlTGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcG9ydGVkIG1lc3NhZ2UgbGVuZ3RoIGRvZXMgbm90IG1hdGNoIHJlY2VpdmVkIG1lc3NhZ2UgbGVuZ3RoXCIpO1xuICAgIH1cbiAgICB2YXIgaGVhZGVyTGVuZ3RoID0gdmlldy5nZXRVaW50MzIoUFJFTFVERV9NRU1CRVJfTEVOR1RILCBmYWxzZSk7XG4gICAgdmFyIGV4cGVjdGVkUHJlbHVkZUNoZWNrc3VtID0gdmlldy5nZXRVaW50MzIoUFJFTFVERV9MRU5HVEgsIGZhbHNlKTtcbiAgICB2YXIgZXhwZWN0ZWRNZXNzYWdlQ2hlY2tzdW0gPSB2aWV3LmdldFVpbnQzMihieXRlTGVuZ3RoIC0gQ0hFQ0tTVU1fTEVOR1RILCBmYWxzZSk7XG4gICAgdmFyIGNoZWNrc3VtbWVyID0gbmV3IENyYzMyKCkudXBkYXRlKG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgYnl0ZU9mZnNldCwgUFJFTFVERV9MRU5HVEgpKTtcbiAgICBpZiAoZXhwZWN0ZWRQcmVsdWRlQ2hlY2tzdW0gIT09IGNoZWNrc3VtbWVyLmRpZ2VzdCgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBwcmVsdWRlIGNoZWNrc3VtIHNwZWNpZmllZCBpbiB0aGUgbWVzc2FnZSAoXCIuY29uY2F0KGV4cGVjdGVkUHJlbHVkZUNoZWNrc3VtLCBcIikgZG9lcyBub3QgbWF0Y2ggdGhlIGNhbGN1bGF0ZWQgQ1JDMzIgY2hlY2tzdW0gKFwiKS5jb25jYXQoY2hlY2tzdW1tZXIuZGlnZXN0KCksIFwiKVwiKSk7XG4gICAgfVxuICAgIGNoZWNrc3VtbWVyLnVwZGF0ZShuZXcgVWludDhBcnJheShidWZmZXIsIGJ5dGVPZmZzZXQgKyBQUkVMVURFX0xFTkdUSCwgYnl0ZUxlbmd0aCAtIChQUkVMVURFX0xFTkdUSCArIENIRUNLU1VNX0xFTkdUSCkpKTtcbiAgICBpZiAoZXhwZWN0ZWRNZXNzYWdlQ2hlY2tzdW0gIT09IGNoZWNrc3VtbWVyLmRpZ2VzdCgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBtZXNzYWdlIGNoZWNrc3VtIChcIi5jb25jYXQoY2hlY2tzdW1tZXIuZGlnZXN0KCksIFwiKSBkaWQgbm90IG1hdGNoIHRoZSBleHBlY3RlZCB2YWx1ZSBvZiBcIikuY29uY2F0KGV4cGVjdGVkTWVzc2FnZUNoZWNrc3VtKSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcnM6IG5ldyBEYXRhVmlldyhidWZmZXIsIGJ5dGVPZmZzZXQgKyBQUkVMVURFX0xFTkdUSCArIENIRUNLU1VNX0xFTkdUSCwgaGVhZGVyTGVuZ3RoKSxcbiAgICAgICAgYm9keTogbmV3IFVpbnQ4QXJyYXkoYnVmZmVyLCBieXRlT2Zmc2V0ICsgUFJFTFVERV9MRU5HVEggKyBDSEVDS1NVTV9MRU5HVEggKyBoZWFkZXJMZW5ndGgsIG1lc3NhZ2VMZW5ndGggLSBoZWFkZXJMZW5ndGggLSAoUFJFTFVERV9MRU5HVEggKyBDSEVDS1NVTV9MRU5HVEggKyBDSEVDS1NVTV9MRU5HVEgpKSxcbiAgICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IGlzQXJyYXlCdWZmZXIgPSAoYXJnKSA9PiAodHlwZW9mIEFycmF5QnVmZmVyID09PSBcImZ1bmN0aW9uXCIgJiYgYXJnIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8XG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09IFwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIjtcbiIsImltcG9ydCB7IEZpZWxkUG9zaXRpb24gfSBmcm9tIFwiLi9GaWVsZFBvc2l0aW9uXCI7XG5leHBvcnQgY2xhc3MgRmllbGQge1xuICAgIGNvbnN0cnVjdG9yKHsgbmFtZSwga2luZCA9IEZpZWxkUG9zaXRpb24uSEVBREVSLCB2YWx1ZXMgPSBbXSB9KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMua2luZCA9IGtpbmQ7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgIH1cbiAgICBhZGQodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIHNldCh2YWx1ZXMpIHtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgfVxuICAgIHJlbW92ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzLmZpbHRlcigodikgPT4gdiAhPT0gdmFsdWUpO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLm1hcCgodikgPT4gKHYuaW5jbHVkZXMoXCIsXCIpIHx8IHYuaW5jbHVkZXMoXCIgXCIpID8gYFwiJHt2fVwiYCA6IHYpKS5qb2luKFwiLCBcIik7XG4gICAgfVxuICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgRmllbGRQb3NpdGlvbjtcbihmdW5jdGlvbiAoRmllbGRQb3NpdGlvbikge1xuICAgIEZpZWxkUG9zaXRpb25bRmllbGRQb3NpdGlvbltcIkhFQURFUlwiXSA9IDBdID0gXCJIRUFERVJcIjtcbiAgICBGaWVsZFBvc2l0aW9uW0ZpZWxkUG9zaXRpb25bXCJUUkFJTEVSXCJdID0gMV0gPSBcIlRSQUlMRVJcIjtcbn0pKEZpZWxkUG9zaXRpb24gfHwgKEZpZWxkUG9zaXRpb24gPSB7fSkpO1xuIiwiZXhwb3J0IGNsYXNzIEZpZWxkcyB7XG4gICAgY29uc3RydWN0b3IoeyBmaWVsZHMgPSBbXSwgZW5jb2RpbmcgPSBcInV0Zi04XCIgfSkge1xuICAgICAgICB0aGlzLmVudHJpZXMgPSB7fTtcbiAgICAgICAgZmllbGRzLmZvckVhY2godGhpcy5zZXRGaWVsZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5lbmNvZGluZyA9IGVuY29kaW5nO1xuICAgIH1cbiAgICBzZXRGaWVsZChmaWVsZCkge1xuICAgICAgICB0aGlzLmVudHJpZXNbZmllbGQubmFtZS50b0xvd2VyQ2FzZSgpXSA9IGZpZWxkO1xuICAgIH1cbiAgICBnZXRGaWVsZChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudHJpZXNbbmFtZS50b0xvd2VyQ2FzZSgpXTtcbiAgICB9XG4gICAgcmVtb3ZlRmllbGQobmFtZSkge1xuICAgICAgICBkZWxldGUgdGhpcy5lbnRyaWVzW25hbWUudG9Mb3dlckNhc2UoKV07XG4gICAgfVxuICAgIGdldEJ5VHlwZShraW5kKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuZW50cmllcykuZmlsdGVyKChmaWVsZCkgPT4gZmllbGQua2luZCA9PT0ga2luZCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IHt9O1xuIiwiZXhwb3J0IGNsYXNzIEh0dHBSZXF1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgXCJHRVRcIjtcbiAgICAgICAgdGhpcy5ob3N0bmFtZSA9IG9wdGlvbnMuaG9zdG5hbWUgfHwgXCJsb2NhbGhvc3RcIjtcbiAgICAgICAgdGhpcy5wb3J0ID0gb3B0aW9ucy5wb3J0O1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gb3B0aW9ucy5xdWVyeSB8fCB7fTtcbiAgICAgICAgdGhpcy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgICAgICB0aGlzLmJvZHkgPSBvcHRpb25zLmJvZHk7XG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBvcHRpb25zLnByb3RvY29sXG4gICAgICAgICAgICA/IG9wdGlvbnMucHJvdG9jb2wuc2xpY2UoLTEpICE9PSBcIjpcIlxuICAgICAgICAgICAgICAgID8gYCR7b3B0aW9ucy5wcm90b2NvbH06YFxuICAgICAgICAgICAgICAgIDogb3B0aW9ucy5wcm90b2NvbFxuICAgICAgICAgICAgOiBcImh0dHBzOlwiO1xuICAgICAgICB0aGlzLnBhdGggPSBvcHRpb25zLnBhdGggPyAob3B0aW9ucy5wYXRoLmNoYXJBdCgwKSAhPT0gXCIvXCIgPyBgLyR7b3B0aW9ucy5wYXRofWAgOiBvcHRpb25zLnBhdGgpIDogXCIvXCI7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBvcHRpb25zLnVzZXJuYW1lO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gb3B0aW9ucy5wYXNzd29yZDtcbiAgICAgICAgdGhpcy5mcmFnbWVudCA9IG9wdGlvbnMuZnJhZ21lbnQ7XG4gICAgfVxuICAgIHN0YXRpYyBpc0luc3RhbmNlKHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCByZXEgPSByZXF1ZXN0O1xuICAgICAgICByZXR1cm4gKFwibWV0aG9kXCIgaW4gcmVxICYmXG4gICAgICAgICAgICBcInByb3RvY29sXCIgaW4gcmVxICYmXG4gICAgICAgICAgICBcImhvc3RuYW1lXCIgaW4gcmVxICYmXG4gICAgICAgICAgICBcInBhdGhcIiBpbiByZXEgJiZcbiAgICAgICAgICAgIHR5cGVvZiByZXFbXCJxdWVyeVwiXSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgdHlwZW9mIHJlcVtcImhlYWRlcnNcIl0gPT09IFwib2JqZWN0XCIpO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgY29uc3QgY2xvbmVkID0gbmV3IEh0dHBSZXF1ZXN0KHtcbiAgICAgICAgICAgIC4uLnRoaXMsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IC4uLnRoaXMuaGVhZGVycyB9LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNsb25lZC5xdWVyeSlcbiAgICAgICAgICAgIGNsb25lZC5xdWVyeSA9IGNsb25lUXVlcnkoY2xvbmVkLnF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICB9XG59XG5mdW5jdGlvbiBjbG9uZVF1ZXJ5KHF1ZXJ5KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHF1ZXJ5KS5yZWR1Y2UoKGNhcnJ5LCBwYXJhbU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW0gPSBxdWVyeVtwYXJhbU5hbWVdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY2FycnksXG4gICAgICAgICAgICBbcGFyYW1OYW1lXTogQXJyYXkuaXNBcnJheShwYXJhbSkgPyBbLi4ucGFyYW1dIDogcGFyYW0sXG4gICAgICAgIH07XG4gICAgfSwge30pO1xufVxuIiwiZXhwb3J0IGNsYXNzIEh0dHBSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLnN0YXR1c0NvZGUgPSBvcHRpb25zLnN0YXR1c0NvZGU7XG4gICAgICAgIHRoaXMucmVhc29uID0gb3B0aW9ucy5yZWFzb247XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICAgICAgdGhpcy5ib2R5ID0gb3B0aW9ucy5ib2R5O1xuICAgIH1cbiAgICBzdGF0aWMgaXNJbnN0YW5jZShyZXNwb25zZSkge1xuICAgICAgICBpZiAoIXJlc3BvbnNlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCByZXNwID0gcmVzcG9uc2U7XG4gICAgICAgIHJldHVybiB0eXBlb2YgcmVzcC5zdGF0dXNDb2RlID09PSBcIm51bWJlclwiICYmIHR5cGVvZiByZXNwLmhlYWRlcnMgPT09IFwib2JqZWN0XCI7XG4gICAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSBcIi4vRmllbGRcIjtcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkUG9zaXRpb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vaHR0cEhhbmRsZXJcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2h0dHBSZXF1ZXN0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9odHRwUmVzcG9uc2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2lzVmFsaWRIb3N0bmFtZVwiO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRIb3N0bmFtZShob3N0bmFtZSkge1xuICAgIGNvbnN0IGhvc3RQYXR0ZXJuID0gL15bYS16MC05XVthLXowLTlcXC5cXC1dKlthLXowLTldJC87XG4gICAgcmV0dXJuIGhvc3RQYXR0ZXJuLnRlc3QoaG9zdG5hbWUpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnlTdHJpbmcocXVlcnlzdHJpbmcpIHtcbiAgICBjb25zdCBxdWVyeSA9IHt9O1xuICAgIHF1ZXJ5c3RyaW5nID0gcXVlcnlzdHJpbmcucmVwbGFjZSgvXlxcPy8sIFwiXCIpO1xuICAgIGlmIChxdWVyeXN0cmluZykge1xuICAgICAgICBmb3IgKGNvbnN0IHBhaXIgb2YgcXVlcnlzdHJpbmcuc3BsaXQoXCImXCIpKSB7XG4gICAgICAgICAgICBsZXQgW2tleSwgdmFsdWUgPSBudWxsXSA9IHBhaXIuc3BsaXQoXCI9XCIpO1xuICAgICAgICAgICAga2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gcXVlcnkpKSB7XG4gICAgICAgICAgICAgICAgcXVlcnlba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgICAgICAgICAgIHF1ZXJ5W2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0sIHZhbHVlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcXVlcnk7XG59XG4iLCJpbXBvcnQgeyBIZWFkZXJNYXJzaGFsbGVyIH0gZnJvbSBcIkBhd3Mtc2RrL2V2ZW50c3RyZWFtLWNvZGVjXCI7XG5pbXBvcnQgeyB0b0hleCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWhleC1lbmNvZGluZ1wiO1xuaW1wb3J0IHsgbm9ybWFsaXplUHJvdmlkZXIgfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1taWRkbGV3YXJlXCI7XG5pbXBvcnQgeyBmcm9tVXRmOCwgdG9VaW50OEFycmF5LCB0b1V0ZjggfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC11dGY4XCI7XG5pbXBvcnQgeyBBTEdPUklUSE1fSURFTlRJRklFUiwgQUxHT1JJVEhNX1FVRVJZX1BBUkFNLCBBTVpfREFURV9IRUFERVIsIEFNWl9EQVRFX1FVRVJZX1BBUkFNLCBBVVRIX0hFQURFUiwgQ1JFREVOVElBTF9RVUVSWV9QQVJBTSwgRVZFTlRfQUxHT1JJVEhNX0lERU5USUZJRVIsIEVYUElSRVNfUVVFUllfUEFSQU0sIE1BWF9QUkVTSUdORURfVFRMLCBTSEEyNTZfSEVBREVSLCBTSUdOQVRVUkVfUVVFUllfUEFSQU0sIFNJR05FRF9IRUFERVJTX1FVRVJZX1BBUkFNLCBUT0tFTl9IRUFERVIsIFRPS0VOX1FVRVJZX1BBUkFNLCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlU2NvcGUsIGdldFNpZ25pbmdLZXkgfSBmcm9tIFwiLi9jcmVkZW50aWFsRGVyaXZhdGlvblwiO1xuaW1wb3J0IHsgZ2V0Q2Fub25pY2FsSGVhZGVycyB9IGZyb20gXCIuL2dldENhbm9uaWNhbEhlYWRlcnNcIjtcbmltcG9ydCB7IGdldENhbm9uaWNhbFF1ZXJ5IH0gZnJvbSBcIi4vZ2V0Q2Fub25pY2FsUXVlcnlcIjtcbmltcG9ydCB7IGdldFBheWxvYWRIYXNoIH0gZnJvbSBcIi4vZ2V0UGF5bG9hZEhhc2hcIjtcbmltcG9ydCB7IGhhc0hlYWRlciB9IGZyb20gXCIuL2hlYWRlclV0aWxcIjtcbmltcG9ydCB7IG1vdmVIZWFkZXJzVG9RdWVyeSB9IGZyb20gXCIuL21vdmVIZWFkZXJzVG9RdWVyeVwiO1xuaW1wb3J0IHsgcHJlcGFyZVJlcXVlc3QgfSBmcm9tIFwiLi9wcmVwYXJlUmVxdWVzdFwiO1xuaW1wb3J0IHsgaXNvODYwMSB9IGZyb20gXCIuL3V0aWxEYXRlXCI7XG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlVjQge1xuICAgIGNvbnN0cnVjdG9yKHsgYXBwbHlDaGVja3N1bSwgY3JlZGVudGlhbHMsIHJlZ2lvbiwgc2VydmljZSwgc2hhMjU2LCB1cmlFc2NhcGVQYXRoID0gdHJ1ZSwgfSkge1xuICAgICAgICB0aGlzLmhlYWRlck1hcnNoYWxsZXIgPSBuZXcgSGVhZGVyTWFyc2hhbGxlcih0b1V0ZjgsIGZyb21VdGY4KTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcbiAgICAgICAgdGhpcy5zaGEyNTYgPSBzaGEyNTY7XG4gICAgICAgIHRoaXMudXJpRXNjYXBlUGF0aCA9IHVyaUVzY2FwZVBhdGg7XG4gICAgICAgIHRoaXMuYXBwbHlDaGVja3N1bSA9IHR5cGVvZiBhcHBseUNoZWNrc3VtID09PSBcImJvb2xlYW5cIiA/IGFwcGx5Q2hlY2tzdW0gOiB0cnVlO1xuICAgICAgICB0aGlzLnJlZ2lvblByb3ZpZGVyID0gbm9ybWFsaXplUHJvdmlkZXIocmVnaW9uKTtcbiAgICAgICAgdGhpcy5jcmVkZW50aWFsUHJvdmlkZXIgPSBub3JtYWxpemVQcm92aWRlcihjcmVkZW50aWFscyk7XG4gICAgfVxuICAgIGFzeW5jIHByZXNpZ24ob3JpZ2luYWxSZXF1ZXN0LCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgY29uc3QgeyBzaWduaW5nRGF0ZSA9IG5ldyBEYXRlKCksIGV4cGlyZXNJbiA9IDM2MDAsIHVuc2lnbmFibGVIZWFkZXJzLCB1bmhvaXN0YWJsZUhlYWRlcnMsIHNpZ25hYmxlSGVhZGVycywgc2lnbmluZ1JlZ2lvbiwgc2lnbmluZ1NlcnZpY2UsIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCBjcmVkZW50aWFscyA9IGF3YWl0IHRoaXMuY3JlZGVudGlhbFByb3ZpZGVyKCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGVSZXNvbHZlZENyZWRlbnRpYWxzKGNyZWRlbnRpYWxzKTtcbiAgICAgICAgY29uc3QgcmVnaW9uID0gc2lnbmluZ1JlZ2lvbiA/PyAoYXdhaXQgdGhpcy5yZWdpb25Qcm92aWRlcigpKTtcbiAgICAgICAgY29uc3QgeyBsb25nRGF0ZSwgc2hvcnREYXRlIH0gPSBmb3JtYXREYXRlKHNpZ25pbmdEYXRlKTtcbiAgICAgICAgaWYgKGV4cGlyZXNJbiA+IE1BWF9QUkVTSUdORURfVFRMKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJTaWduYXR1cmUgdmVyc2lvbiA0IHByZXNpZ25lZCBVUkxzXCIgKyBcIiBtdXN0IGhhdmUgYW4gZXhwaXJhdGlvbiBkYXRlIGxlc3MgdGhhbiBvbmUgd2VlayBpblwiICsgXCIgdGhlIGZ1dHVyZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzY29wZSA9IGNyZWF0ZVNjb3BlKHNob3J0RGF0ZSwgcmVnaW9uLCBzaWduaW5nU2VydmljZSA/PyB0aGlzLnNlcnZpY2UpO1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbW92ZUhlYWRlcnNUb1F1ZXJ5KHByZXBhcmVSZXF1ZXN0KG9yaWdpbmFsUmVxdWVzdCksIHsgdW5ob2lzdGFibGVIZWFkZXJzIH0pO1xuICAgICAgICBpZiAoY3JlZGVudGlhbHMuc2Vzc2lvblRva2VuKSB7XG4gICAgICAgICAgICByZXF1ZXN0LnF1ZXJ5W1RPS0VOX1FVRVJZX1BBUkFNXSA9IGNyZWRlbnRpYWxzLnNlc3Npb25Ub2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0LnF1ZXJ5W0FMR09SSVRITV9RVUVSWV9QQVJBTV0gPSBBTEdPUklUSE1fSURFTlRJRklFUjtcbiAgICAgICAgcmVxdWVzdC5xdWVyeVtDUkVERU5USUFMX1FVRVJZX1BBUkFNXSA9IGAke2NyZWRlbnRpYWxzLmFjY2Vzc0tleUlkfS8ke3Njb3BlfWA7XG4gICAgICAgIHJlcXVlc3QucXVlcnlbQU1aX0RBVEVfUVVFUllfUEFSQU1dID0gbG9uZ0RhdGU7XG4gICAgICAgIHJlcXVlc3QucXVlcnlbRVhQSVJFU19RVUVSWV9QQVJBTV0gPSBleHBpcmVzSW4udG9TdHJpbmcoMTApO1xuICAgICAgICBjb25zdCBjYW5vbmljYWxIZWFkZXJzID0gZ2V0Q2Fub25pY2FsSGVhZGVycyhyZXF1ZXN0LCB1bnNpZ25hYmxlSGVhZGVycywgc2lnbmFibGVIZWFkZXJzKTtcbiAgICAgICAgcmVxdWVzdC5xdWVyeVtTSUdORURfSEVBREVSU19RVUVSWV9QQVJBTV0gPSBnZXRDYW5vbmljYWxIZWFkZXJMaXN0KGNhbm9uaWNhbEhlYWRlcnMpO1xuICAgICAgICByZXF1ZXN0LnF1ZXJ5W1NJR05BVFVSRV9RVUVSWV9QQVJBTV0gPSBhd2FpdCB0aGlzLmdldFNpZ25hdHVyZShsb25nRGF0ZSwgc2NvcGUsIHRoaXMuZ2V0U2lnbmluZ0tleShjcmVkZW50aWFscywgcmVnaW9uLCBzaG9ydERhdGUsIHNpZ25pbmdTZXJ2aWNlKSwgdGhpcy5jcmVhdGVDYW5vbmljYWxSZXF1ZXN0KHJlcXVlc3QsIGNhbm9uaWNhbEhlYWRlcnMsIGF3YWl0IGdldFBheWxvYWRIYXNoKG9yaWdpbmFsUmVxdWVzdCwgdGhpcy5zaGEyNTYpKSk7XG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH1cbiAgICBhc3luYyBzaWduKHRvU2lnbiwgb3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIHRvU2lnbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnblN0cmluZyh0b1NpZ24sIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRvU2lnbi5oZWFkZXJzICYmIHRvU2lnbi5wYXlsb2FkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduRXZlbnQodG9TaWduLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0b1NpZ24ubWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnbk1lc3NhZ2UodG9TaWduLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ25SZXF1ZXN0KHRvU2lnbiwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgc2lnbkV2ZW50KHsgaGVhZGVycywgcGF5bG9hZCB9LCB7IHNpZ25pbmdEYXRlID0gbmV3IERhdGUoKSwgcHJpb3JTaWduYXR1cmUsIHNpZ25pbmdSZWdpb24sIHNpZ25pbmdTZXJ2aWNlIH0pIHtcbiAgICAgICAgY29uc3QgcmVnaW9uID0gc2lnbmluZ1JlZ2lvbiA/PyAoYXdhaXQgdGhpcy5yZWdpb25Qcm92aWRlcigpKTtcbiAgICAgICAgY29uc3QgeyBzaG9ydERhdGUsIGxvbmdEYXRlIH0gPSBmb3JtYXREYXRlKHNpZ25pbmdEYXRlKTtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBjcmVhdGVTY29wZShzaG9ydERhdGUsIHJlZ2lvbiwgc2lnbmluZ1NlcnZpY2UgPz8gdGhpcy5zZXJ2aWNlKTtcbiAgICAgICAgY29uc3QgaGFzaGVkUGF5bG9hZCA9IGF3YWl0IGdldFBheWxvYWRIYXNoKHsgaGVhZGVyczoge30sIGJvZHk6IHBheWxvYWQgfSwgdGhpcy5zaGEyNTYpO1xuICAgICAgICBjb25zdCBoYXNoID0gbmV3IHRoaXMuc2hhMjU2KCk7XG4gICAgICAgIGhhc2gudXBkYXRlKGhlYWRlcnMpO1xuICAgICAgICBjb25zdCBoYXNoZWRIZWFkZXJzID0gdG9IZXgoYXdhaXQgaGFzaC5kaWdlc3QoKSk7XG4gICAgICAgIGNvbnN0IHN0cmluZ1RvU2lnbiA9IFtcbiAgICAgICAgICAgIEVWRU5UX0FMR09SSVRITV9JREVOVElGSUVSLFxuICAgICAgICAgICAgbG9uZ0RhdGUsXG4gICAgICAgICAgICBzY29wZSxcbiAgICAgICAgICAgIHByaW9yU2lnbmF0dXJlLFxuICAgICAgICAgICAgaGFzaGVkSGVhZGVycyxcbiAgICAgICAgICAgIGhhc2hlZFBheWxvYWQsXG4gICAgICAgIF0uam9pbihcIlxcblwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnblN0cmluZyhzdHJpbmdUb1NpZ24sIHsgc2lnbmluZ0RhdGUsIHNpZ25pbmdSZWdpb246IHJlZ2lvbiwgc2lnbmluZ1NlcnZpY2UgfSk7XG4gICAgfVxuICAgIGFzeW5jIHNpZ25NZXNzYWdlKHNpZ25hYmxlTWVzc2FnZSwgeyBzaWduaW5nRGF0ZSA9IG5ldyBEYXRlKCksIHNpZ25pbmdSZWdpb24sIHNpZ25pbmdTZXJ2aWNlIH0pIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuc2lnbkV2ZW50KHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyTWFyc2hhbGxlci5mb3JtYXQoc2lnbmFibGVNZXNzYWdlLm1lc3NhZ2UuaGVhZGVycyksXG4gICAgICAgICAgICBwYXlsb2FkOiBzaWduYWJsZU1lc3NhZ2UubWVzc2FnZS5ib2R5LFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzaWduaW5nRGF0ZSxcbiAgICAgICAgICAgIHNpZ25pbmdSZWdpb24sXG4gICAgICAgICAgICBzaWduaW5nU2VydmljZSxcbiAgICAgICAgICAgIHByaW9yU2lnbmF0dXJlOiBzaWduYWJsZU1lc3NhZ2UucHJpb3JTaWduYXR1cmUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKChzaWduYXR1cmUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IHNpZ25hYmxlTWVzc2FnZS5tZXNzYWdlLCBzaWduYXR1cmUgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIHNpZ25TdHJpbmcoc3RyaW5nVG9TaWduLCB7IHNpZ25pbmdEYXRlID0gbmV3IERhdGUoKSwgc2lnbmluZ1JlZ2lvbiwgc2lnbmluZ1NlcnZpY2UgfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gYXdhaXQgdGhpcy5jcmVkZW50aWFsUHJvdmlkZXIoKTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVJlc29sdmVkQ3JlZGVudGlhbHMoY3JlZGVudGlhbHMpO1xuICAgICAgICBjb25zdCByZWdpb24gPSBzaWduaW5nUmVnaW9uID8/IChhd2FpdCB0aGlzLnJlZ2lvblByb3ZpZGVyKCkpO1xuICAgICAgICBjb25zdCB7IHNob3J0RGF0ZSB9ID0gZm9ybWF0RGF0ZShzaWduaW5nRGF0ZSk7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBuZXcgdGhpcy5zaGEyNTYoYXdhaXQgdGhpcy5nZXRTaWduaW5nS2V5KGNyZWRlbnRpYWxzLCByZWdpb24sIHNob3J0RGF0ZSwgc2lnbmluZ1NlcnZpY2UpKTtcbiAgICAgICAgaGFzaC51cGRhdGUodG9VaW50OEFycmF5KHN0cmluZ1RvU2lnbikpO1xuICAgICAgICByZXR1cm4gdG9IZXgoYXdhaXQgaGFzaC5kaWdlc3QoKSk7XG4gICAgfVxuICAgIGFzeW5jIHNpZ25SZXF1ZXN0KHJlcXVlc3RUb1NpZ24sIHsgc2lnbmluZ0RhdGUgPSBuZXcgRGF0ZSgpLCBzaWduYWJsZUhlYWRlcnMsIHVuc2lnbmFibGVIZWFkZXJzLCBzaWduaW5nUmVnaW9uLCBzaWduaW5nU2VydmljZSwgfSA9IHt9KSB7XG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gYXdhaXQgdGhpcy5jcmVkZW50aWFsUHJvdmlkZXIoKTtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVJlc29sdmVkQ3JlZGVudGlhbHMoY3JlZGVudGlhbHMpO1xuICAgICAgICBjb25zdCByZWdpb24gPSBzaWduaW5nUmVnaW9uID8/IChhd2FpdCB0aGlzLnJlZ2lvblByb3ZpZGVyKCkpO1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gcHJlcGFyZVJlcXVlc3QocmVxdWVzdFRvU2lnbik7XG4gICAgICAgIGNvbnN0IHsgbG9uZ0RhdGUsIHNob3J0RGF0ZSB9ID0gZm9ybWF0RGF0ZShzaWduaW5nRGF0ZSk7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gY3JlYXRlU2NvcGUoc2hvcnREYXRlLCByZWdpb24sIHNpZ25pbmdTZXJ2aWNlID8/IHRoaXMuc2VydmljZSk7XG4gICAgICAgIHJlcXVlc3QuaGVhZGVyc1tBTVpfREFURV9IRUFERVJdID0gbG9uZ0RhdGU7XG4gICAgICAgIGlmIChjcmVkZW50aWFscy5zZXNzaW9uVG9rZW4pIHtcbiAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVyc1tUT0tFTl9IRUFERVJdID0gY3JlZGVudGlhbHMuc2Vzc2lvblRva2VuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBheWxvYWRIYXNoID0gYXdhaXQgZ2V0UGF5bG9hZEhhc2gocmVxdWVzdCwgdGhpcy5zaGEyNTYpO1xuICAgICAgICBpZiAoIWhhc0hlYWRlcihTSEEyNTZfSEVBREVSLCByZXF1ZXN0LmhlYWRlcnMpICYmIHRoaXMuYXBwbHlDaGVja3N1bSkge1xuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzW1NIQTI1Nl9IRUFERVJdID0gcGF5bG9hZEhhc2g7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2Fub25pY2FsSGVhZGVycyA9IGdldENhbm9uaWNhbEhlYWRlcnMocmVxdWVzdCwgdW5zaWduYWJsZUhlYWRlcnMsIHNpZ25hYmxlSGVhZGVycyk7XG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHRoaXMuZ2V0U2lnbmF0dXJlKGxvbmdEYXRlLCBzY29wZSwgdGhpcy5nZXRTaWduaW5nS2V5KGNyZWRlbnRpYWxzLCByZWdpb24sIHNob3J0RGF0ZSwgc2lnbmluZ1NlcnZpY2UpLCB0aGlzLmNyZWF0ZUNhbm9uaWNhbFJlcXVlc3QocmVxdWVzdCwgY2Fub25pY2FsSGVhZGVycywgcGF5bG9hZEhhc2gpKTtcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzW0FVVEhfSEVBREVSXSA9XG4gICAgICAgICAgICBgJHtBTEdPUklUSE1fSURFTlRJRklFUn0gYCArXG4gICAgICAgICAgICAgICAgYENyZWRlbnRpYWw9JHtjcmVkZW50aWFscy5hY2Nlc3NLZXlJZH0vJHtzY29wZX0sIGAgK1xuICAgICAgICAgICAgICAgIGBTaWduZWRIZWFkZXJzPSR7Z2V0Q2Fub25pY2FsSGVhZGVyTGlzdChjYW5vbmljYWxIZWFkZXJzKX0sIGAgK1xuICAgICAgICAgICAgICAgIGBTaWduYXR1cmU9JHtzaWduYXR1cmV9YDtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuICAgIGNyZWF0ZUNhbm9uaWNhbFJlcXVlc3QocmVxdWVzdCwgY2Fub25pY2FsSGVhZGVycywgcGF5bG9hZEhhc2gpIHtcbiAgICAgICAgY29uc3Qgc29ydGVkSGVhZGVycyA9IE9iamVjdC5rZXlzKGNhbm9uaWNhbEhlYWRlcnMpLnNvcnQoKTtcbiAgICAgICAgcmV0dXJuIGAke3JlcXVlc3QubWV0aG9kfVxuJHt0aGlzLmdldENhbm9uaWNhbFBhdGgocmVxdWVzdCl9XG4ke2dldENhbm9uaWNhbFF1ZXJ5KHJlcXVlc3QpfVxuJHtzb3J0ZWRIZWFkZXJzLm1hcCgobmFtZSkgPT4gYCR7bmFtZX06JHtjYW5vbmljYWxIZWFkZXJzW25hbWVdfWApLmpvaW4oXCJcXG5cIil9XG5cbiR7c29ydGVkSGVhZGVycy5qb2luKFwiO1wiKX1cbiR7cGF5bG9hZEhhc2h9YDtcbiAgICB9XG4gICAgYXN5bmMgY3JlYXRlU3RyaW5nVG9TaWduKGxvbmdEYXRlLCBjcmVkZW50aWFsU2NvcGUsIGNhbm9uaWNhbFJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IG5ldyB0aGlzLnNoYTI1NigpO1xuICAgICAgICBoYXNoLnVwZGF0ZSh0b1VpbnQ4QXJyYXkoY2Fub25pY2FsUmVxdWVzdCkpO1xuICAgICAgICBjb25zdCBoYXNoZWRSZXF1ZXN0ID0gYXdhaXQgaGFzaC5kaWdlc3QoKTtcbiAgICAgICAgcmV0dXJuIGAke0FMR09SSVRITV9JREVOVElGSUVSfVxuJHtsb25nRGF0ZX1cbiR7Y3JlZGVudGlhbFNjb3BlfVxuJHt0b0hleChoYXNoZWRSZXF1ZXN0KX1gO1xuICAgIH1cbiAgICBnZXRDYW5vbmljYWxQYXRoKHsgcGF0aCB9KSB7XG4gICAgICAgIGlmICh0aGlzLnVyaUVzY2FwZVBhdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRQYXRoU2VnbWVudHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGF0aFNlZ21lbnQgb2YgcGF0aC5zcGxpdChcIi9cIikpIHtcbiAgICAgICAgICAgICAgICBpZiAocGF0aFNlZ21lbnQ/Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGhTZWdtZW50ID09PSBcIi5cIilcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGhTZWdtZW50ID09PSBcIi4uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsaXplZFBhdGhTZWdtZW50cy5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZWRQYXRoU2VnbWVudHMucHVzaChwYXRoU2VnbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBgJHtwYXRoPy5zdGFydHNXaXRoKFwiL1wiKSA/IFwiL1wiIDogXCJcIn0ke25vcm1hbGl6ZWRQYXRoU2VnbWVudHMuam9pbihcIi9cIil9JHtub3JtYWxpemVkUGF0aFNlZ21lbnRzLmxlbmd0aCA+IDAgJiYgcGF0aD8uZW5kc1dpdGgoXCIvXCIpID8gXCIvXCIgOiBcIlwifWA7XG4gICAgICAgICAgICBjb25zdCBkb3VibGVFbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KG5vcm1hbGl6ZWRQYXRoKTtcbiAgICAgICAgICAgIHJldHVybiBkb3VibGVFbmNvZGVkLnJlcGxhY2UoLyUyRi9nLCBcIi9cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuICAgIGFzeW5jIGdldFNpZ25hdHVyZShsb25nRGF0ZSwgY3JlZGVudGlhbFNjb3BlLCBrZXlQcm9taXNlLCBjYW5vbmljYWxSZXF1ZXN0KSB7XG4gICAgICAgIGNvbnN0IHN0cmluZ1RvU2lnbiA9IGF3YWl0IHRoaXMuY3JlYXRlU3RyaW5nVG9TaWduKGxvbmdEYXRlLCBjcmVkZW50aWFsU2NvcGUsIGNhbm9uaWNhbFJlcXVlc3QpO1xuICAgICAgICBjb25zdCBoYXNoID0gbmV3IHRoaXMuc2hhMjU2KGF3YWl0IGtleVByb21pc2UpO1xuICAgICAgICBoYXNoLnVwZGF0ZSh0b1VpbnQ4QXJyYXkoc3RyaW5nVG9TaWduKSk7XG4gICAgICAgIHJldHVybiB0b0hleChhd2FpdCBoYXNoLmRpZ2VzdCgpKTtcbiAgICB9XG4gICAgZ2V0U2lnbmluZ0tleShjcmVkZW50aWFscywgcmVnaW9uLCBzaG9ydERhdGUsIHNlcnZpY2UpIHtcbiAgICAgICAgcmV0dXJuIGdldFNpZ25pbmdLZXkodGhpcy5zaGEyNTYsIGNyZWRlbnRpYWxzLCBzaG9ydERhdGUsIHJlZ2lvbiwgc2VydmljZSB8fCB0aGlzLnNlcnZpY2UpO1xuICAgIH1cbiAgICB2YWxpZGF0ZVJlc29sdmVkQ3JlZGVudGlhbHMoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcmVkZW50aWFscyAhPT0gXCJvYmplY3RcIiB8fFxuICAgICAgICAgICAgdHlwZW9mIGNyZWRlbnRpYWxzLmFjY2Vzc0tleUlkICE9PSBcInN0cmluZ1wiIHx8XG4gICAgICAgICAgICB0eXBlb2YgY3JlZGVudGlhbHMuc2VjcmV0QWNjZXNzS2V5ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXNvbHZlZCBjcmVkZW50aWFsIG9iamVjdCBpcyBub3QgdmFsaWRcIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCBmb3JtYXREYXRlID0gKG5vdykgPT4ge1xuICAgIGNvbnN0IGxvbmdEYXRlID0gaXNvODYwMShub3cpLnJlcGxhY2UoL1tcXC06XS9nLCBcIlwiKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBsb25nRGF0ZSxcbiAgICAgICAgc2hvcnREYXRlOiBsb25nRGF0ZS5zbGljZSgwLCA4KSxcbiAgICB9O1xufTtcbmNvbnN0IGdldENhbm9uaWNhbEhlYWRlckxpc3QgPSAoaGVhZGVycykgPT4gT2JqZWN0LmtleXMoaGVhZGVycykuc29ydCgpLmpvaW4oXCI7XCIpO1xuIiwiZXhwb3J0IGNvbnN0IGNsb25lUmVxdWVzdCA9ICh7IGhlYWRlcnMsIHF1ZXJ5LCAuLi5yZXN0IH0pID0+ICh7XG4gICAgLi4ucmVzdCxcbiAgICBoZWFkZXJzOiB7IC4uLmhlYWRlcnMgfSxcbiAgICBxdWVyeTogcXVlcnkgPyBjbG9uZVF1ZXJ5KHF1ZXJ5KSA6IHVuZGVmaW5lZCxcbn0pO1xuZXhwb3J0IGNvbnN0IGNsb25lUXVlcnkgPSAocXVlcnkpID0+IE9iamVjdC5rZXlzKHF1ZXJ5KS5yZWR1Y2UoKGNhcnJ5LCBwYXJhbU5hbWUpID0+IHtcbiAgICBjb25zdCBwYXJhbSA9IHF1ZXJ5W3BhcmFtTmFtZV07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uY2FycnksXG4gICAgICAgIFtwYXJhbU5hbWVdOiBBcnJheS5pc0FycmF5KHBhcmFtKSA/IFsuLi5wYXJhbV0gOiBwYXJhbSxcbiAgICB9O1xufSwge30pO1xuIiwiZXhwb3J0IGNvbnN0IEFMR09SSVRITV9RVUVSWV9QQVJBTSA9IFwiWC1BbXotQWxnb3JpdGhtXCI7XG5leHBvcnQgY29uc3QgQ1JFREVOVElBTF9RVUVSWV9QQVJBTSA9IFwiWC1BbXotQ3JlZGVudGlhbFwiO1xuZXhwb3J0IGNvbnN0IEFNWl9EQVRFX1FVRVJZX1BBUkFNID0gXCJYLUFtei1EYXRlXCI7XG5leHBvcnQgY29uc3QgU0lHTkVEX0hFQURFUlNfUVVFUllfUEFSQU0gPSBcIlgtQW16LVNpZ25lZEhlYWRlcnNcIjtcbmV4cG9ydCBjb25zdCBFWFBJUkVTX1FVRVJZX1BBUkFNID0gXCJYLUFtei1FeHBpcmVzXCI7XG5leHBvcnQgY29uc3QgU0lHTkFUVVJFX1FVRVJZX1BBUkFNID0gXCJYLUFtei1TaWduYXR1cmVcIjtcbmV4cG9ydCBjb25zdCBUT0tFTl9RVUVSWV9QQVJBTSA9IFwiWC1BbXotU2VjdXJpdHktVG9rZW5cIjtcbmV4cG9ydCBjb25zdCBSRUdJT05fU0VUX1BBUkFNID0gXCJYLUFtei1SZWdpb24tU2V0XCI7XG5leHBvcnQgY29uc3QgQVVUSF9IRUFERVIgPSBcImF1dGhvcml6YXRpb25cIjtcbmV4cG9ydCBjb25zdCBBTVpfREFURV9IRUFERVIgPSBBTVpfREFURV9RVUVSWV9QQVJBTS50b0xvd2VyQ2FzZSgpO1xuZXhwb3J0IGNvbnN0IERBVEVfSEVBREVSID0gXCJkYXRlXCI7XG5leHBvcnQgY29uc3QgR0VORVJBVEVEX0hFQURFUlMgPSBbQVVUSF9IRUFERVIsIEFNWl9EQVRFX0hFQURFUiwgREFURV9IRUFERVJdO1xuZXhwb3J0IGNvbnN0IFNJR05BVFVSRV9IRUFERVIgPSBTSUdOQVRVUkVfUVVFUllfUEFSQU0udG9Mb3dlckNhc2UoKTtcbmV4cG9ydCBjb25zdCBTSEEyNTZfSEVBREVSID0gXCJ4LWFtei1jb250ZW50LXNoYTI1NlwiO1xuZXhwb3J0IGNvbnN0IFRPS0VOX0hFQURFUiA9IFRPS0VOX1FVRVJZX1BBUkFNLnRvTG93ZXJDYXNlKCk7XG5leHBvcnQgY29uc3QgSE9TVF9IRUFERVIgPSBcImhvc3RcIjtcbmV4cG9ydCBjb25zdCBBTFdBWVNfVU5TSUdOQUJMRV9IRUFERVJTID0ge1xuICAgIGF1dGhvcml6YXRpb246IHRydWUsXG4gICAgXCJjYWNoZS1jb250cm9sXCI6IHRydWUsXG4gICAgY29ubmVjdGlvbjogdHJ1ZSxcbiAgICBleHBlY3Q6IHRydWUsXG4gICAgZnJvbTogdHJ1ZSxcbiAgICBcImtlZXAtYWxpdmVcIjogdHJ1ZSxcbiAgICBcIm1heC1mb3J3YXJkc1wiOiB0cnVlLFxuICAgIHByYWdtYTogdHJ1ZSxcbiAgICByZWZlcmVyOiB0cnVlLFxuICAgIHRlOiB0cnVlLFxuICAgIHRyYWlsZXI6IHRydWUsXG4gICAgXCJ0cmFuc2Zlci1lbmNvZGluZ1wiOiB0cnVlLFxuICAgIHVwZ3JhZGU6IHRydWUsXG4gICAgXCJ1c2VyLWFnZW50XCI6IHRydWUsXG4gICAgXCJ4LWFtem4tdHJhY2UtaWRcIjogdHJ1ZSxcbn07XG5leHBvcnQgY29uc3QgUFJPWFlfSEVBREVSX1BBVFRFUk4gPSAvXnByb3h5LS87XG5leHBvcnQgY29uc3QgU0VDX0hFQURFUl9QQVRURVJOID0gL15zZWMtLztcbmV4cG9ydCBjb25zdCBVTlNJR05BQkxFX1BBVFRFUk5TID0gWy9ecHJveHktL2ksIC9ec2VjLS9pXTtcbmV4cG9ydCBjb25zdCBBTEdPUklUSE1fSURFTlRJRklFUiA9IFwiQVdTNC1ITUFDLVNIQTI1NlwiO1xuZXhwb3J0IGNvbnN0IEFMR09SSVRITV9JREVOVElGSUVSX1Y0QSA9IFwiQVdTNC1FQ0RTQS1QMjU2LVNIQTI1NlwiO1xuZXhwb3J0IGNvbnN0IEVWRU5UX0FMR09SSVRITV9JREVOVElGSUVSID0gXCJBV1M0LUhNQUMtU0hBMjU2LVBBWUxPQURcIjtcbmV4cG9ydCBjb25zdCBVTlNJR05FRF9QQVlMT0FEID0gXCJVTlNJR05FRC1QQVlMT0FEXCI7XG5leHBvcnQgY29uc3QgTUFYX0NBQ0hFX1NJWkUgPSA1MDtcbmV4cG9ydCBjb25zdCBLRVlfVFlQRV9JREVOVElGSUVSID0gXCJhd3M0X3JlcXVlc3RcIjtcbmV4cG9ydCBjb25zdCBNQVhfUFJFU0lHTkVEX1RUTCA9IDYwICogNjAgKiAyNCAqIDc7XG4iLCJpbXBvcnQgeyB0b0hleCB9IGZyb20gXCJAYXdzLXNkay91dGlsLWhleC1lbmNvZGluZ1wiO1xuaW1wb3J0IHsgdG9VaW50OEFycmF5IH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtdXRmOFwiO1xuaW1wb3J0IHsgS0VZX1RZUEVfSURFTlRJRklFUiwgTUFYX0NBQ0hFX1NJWkUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmNvbnN0IHNpZ25pbmdLZXlDYWNoZSA9IHt9O1xuY29uc3QgY2FjaGVRdWV1ZSA9IFtdO1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVNjb3BlID0gKHNob3J0RGF0ZSwgcmVnaW9uLCBzZXJ2aWNlKSA9PiBgJHtzaG9ydERhdGV9LyR7cmVnaW9ufS8ke3NlcnZpY2V9LyR7S0VZX1RZUEVfSURFTlRJRklFUn1gO1xuZXhwb3J0IGNvbnN0IGdldFNpZ25pbmdLZXkgPSBhc3luYyAoc2hhMjU2Q29uc3RydWN0b3IsIGNyZWRlbnRpYWxzLCBzaG9ydERhdGUsIHJlZ2lvbiwgc2VydmljZSkgPT4ge1xuICAgIGNvbnN0IGNyZWRzSGFzaCA9IGF3YWl0IGhtYWMoc2hhMjU2Q29uc3RydWN0b3IsIGNyZWRlbnRpYWxzLnNlY3JldEFjY2Vzc0tleSwgY3JlZGVudGlhbHMuYWNjZXNzS2V5SWQpO1xuICAgIGNvbnN0IGNhY2hlS2V5ID0gYCR7c2hvcnREYXRlfToke3JlZ2lvbn06JHtzZXJ2aWNlfToke3RvSGV4KGNyZWRzSGFzaCl9OiR7Y3JlZGVudGlhbHMuc2Vzc2lvblRva2VufWA7XG4gICAgaWYgKGNhY2hlS2V5IGluIHNpZ25pbmdLZXlDYWNoZSkge1xuICAgICAgICByZXR1cm4gc2lnbmluZ0tleUNhY2hlW2NhY2hlS2V5XTtcbiAgICB9XG4gICAgY2FjaGVRdWV1ZS5wdXNoKGNhY2hlS2V5KTtcbiAgICB3aGlsZSAoY2FjaGVRdWV1ZS5sZW5ndGggPiBNQVhfQ0FDSEVfU0laRSkge1xuICAgICAgICBkZWxldGUgc2lnbmluZ0tleUNhY2hlW2NhY2hlUXVldWUuc2hpZnQoKV07XG4gICAgfVxuICAgIGxldCBrZXkgPSBgQVdTNCR7Y3JlZGVudGlhbHMuc2VjcmV0QWNjZXNzS2V5fWA7XG4gICAgZm9yIChjb25zdCBzaWduYWJsZSBvZiBbc2hvcnREYXRlLCByZWdpb24sIHNlcnZpY2UsIEtFWV9UWVBFX0lERU5USUZJRVJdKSB7XG4gICAgICAgIGtleSA9IGF3YWl0IGhtYWMoc2hhMjU2Q29uc3RydWN0b3IsIGtleSwgc2lnbmFibGUpO1xuICAgIH1cbiAgICByZXR1cm4gKHNpZ25pbmdLZXlDYWNoZVtjYWNoZUtleV0gPSBrZXkpO1xufTtcbmV4cG9ydCBjb25zdCBjbGVhckNyZWRlbnRpYWxDYWNoZSA9ICgpID0+IHtcbiAgICBjYWNoZVF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgT2JqZWN0LmtleXMoc2lnbmluZ0tleUNhY2hlKS5mb3JFYWNoKChjYWNoZUtleSkgPT4ge1xuICAgICAgICBkZWxldGUgc2lnbmluZ0tleUNhY2hlW2NhY2hlS2V5XTtcbiAgICB9KTtcbn07XG5jb25zdCBobWFjID0gKGN0b3IsIHNlY3JldCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IGhhc2ggPSBuZXcgY3RvcihzZWNyZXQpO1xuICAgIGhhc2gudXBkYXRlKHRvVWludDhBcnJheShkYXRhKSk7XG4gICAgcmV0dXJuIGhhc2guZGlnZXN0KCk7XG59O1xuIiwiaW1wb3J0IHsgQUxXQVlTX1VOU0lHTkFCTEVfSEVBREVSUywgUFJPWFlfSEVBREVSX1BBVFRFUk4sIFNFQ19IRUFERVJfUEFUVEVSTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuZXhwb3J0IGNvbnN0IGdldENhbm9uaWNhbEhlYWRlcnMgPSAoeyBoZWFkZXJzIH0sIHVuc2lnbmFibGVIZWFkZXJzLCBzaWduYWJsZUhlYWRlcnMpID0+IHtcbiAgICBjb25zdCBjYW5vbmljYWwgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGhlYWRlck5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykuc29ydCgpKSB7XG4gICAgICAgIGlmIChoZWFkZXJzW2hlYWRlck5hbWVdID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2Fub25pY2FsSGVhZGVyTmFtZSA9IGhlYWRlck5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGNhbm9uaWNhbEhlYWRlck5hbWUgaW4gQUxXQVlTX1VOU0lHTkFCTEVfSEVBREVSUyB8fFxuICAgICAgICAgICAgdW5zaWduYWJsZUhlYWRlcnM/LmhhcyhjYW5vbmljYWxIZWFkZXJOYW1lKSB8fFxuICAgICAgICAgICAgUFJPWFlfSEVBREVSX1BBVFRFUk4udGVzdChjYW5vbmljYWxIZWFkZXJOYW1lKSB8fFxuICAgICAgICAgICAgU0VDX0hFQURFUl9QQVRURVJOLnRlc3QoY2Fub25pY2FsSGVhZGVyTmFtZSkpIHtcbiAgICAgICAgICAgIGlmICghc2lnbmFibGVIZWFkZXJzIHx8IChzaWduYWJsZUhlYWRlcnMgJiYgIXNpZ25hYmxlSGVhZGVycy5oYXMoY2Fub25pY2FsSGVhZGVyTmFtZSkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2Fub25pY2FsW2Nhbm9uaWNhbEhlYWRlck5hbWVdID0gaGVhZGVyc1toZWFkZXJOYW1lXS50cmltKCkucmVwbGFjZSgvXFxzKy9nLCBcIiBcIik7XG4gICAgfVxuICAgIHJldHVybiBjYW5vbmljYWw7XG59O1xuIiwiaW1wb3J0IHsgZXNjYXBlVXJpIH0gZnJvbSBcIkBhd3Mtc2RrL3V0aWwtdXJpLWVzY2FwZVwiO1xuaW1wb3J0IHsgU0lHTkFUVVJFX0hFQURFUiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuZXhwb3J0IGNvbnN0IGdldENhbm9uaWNhbFF1ZXJ5ID0gKHsgcXVlcnkgPSB7fSB9KSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IFtdO1xuICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhxdWVyeSkuc29ydCgpKSB7XG4gICAgICAgIGlmIChrZXkudG9Mb3dlckNhc2UoKSA9PT0gU0lHTkFUVVJFX0hFQURFUikge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlba2V5XTtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgc2VyaWFsaXplZFtrZXldID0gYCR7ZXNjYXBlVXJpKGtleSl9PSR7ZXNjYXBlVXJpKHZhbHVlKX1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBzZXJpYWxpemVkW2tleV0gPSB2YWx1ZVxuICAgICAgICAgICAgICAgIC5zbGljZSgwKVxuICAgICAgICAgICAgICAgIC5zb3J0KClcbiAgICAgICAgICAgICAgICAucmVkdWNlKChlbmNvZGVkLCB2YWx1ZSkgPT4gZW5jb2RlZC5jb25jYXQoW2Ake2VzY2FwZVVyaShrZXkpfT0ke2VzY2FwZVVyaSh2YWx1ZSl9YF0pLCBbXSlcbiAgICAgICAgICAgICAgICAuam9pbihcIiZcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGtleXNcbiAgICAgICAgLm1hcCgoa2V5KSA9PiBzZXJpYWxpemVkW2tleV0pXG4gICAgICAgIC5maWx0ZXIoKHNlcmlhbGl6ZWQpID0+IHNlcmlhbGl6ZWQpXG4gICAgICAgIC5qb2luKFwiJlwiKTtcbn07XG4iLCJpbXBvcnQgeyBpc0FycmF5QnVmZmVyIH0gZnJvbSBcIkBhd3Mtc2RrL2lzLWFycmF5LWJ1ZmZlclwiO1xuaW1wb3J0IHsgdG9IZXggfSBmcm9tIFwiQGF3cy1zZGsvdXRpbC1oZXgtZW5jb2RpbmdcIjtcbmltcG9ydCB7IHRvVWludDhBcnJheSB9IGZyb20gXCJAYXdzLXNkay91dGlsLXV0ZjhcIjtcbmltcG9ydCB7IFNIQTI1Nl9IRUFERVIsIFVOU0lHTkVEX1BBWUxPQUQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmV4cG9ydCBjb25zdCBnZXRQYXlsb2FkSGFzaCA9IGFzeW5jICh7IGhlYWRlcnMsIGJvZHkgfSwgaGFzaENvbnN0cnVjdG9yKSA9PiB7XG4gICAgZm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIE9iamVjdC5rZXlzKGhlYWRlcnMpKSB7XG4gICAgICAgIGlmIChoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFNIQTI1Nl9IRUFERVIpIHtcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXJzW2hlYWRlck5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChib2R5ID09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gXCJlM2IwYzQ0Mjk4ZmMxYzE0OWFmYmY0Yzg5OTZmYjkyNDI3YWU0MWU0NjQ5YjkzNGNhNDk1OTkxYjc4NTJiODU1XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSBcInN0cmluZ1wiIHx8IEFycmF5QnVmZmVyLmlzVmlldyhib2R5KSB8fCBpc0FycmF5QnVmZmVyKGJvZHkpKSB7XG4gICAgICAgIGNvbnN0IGhhc2hDdG9yID0gbmV3IGhhc2hDb25zdHJ1Y3RvcigpO1xuICAgICAgICBoYXNoQ3Rvci51cGRhdGUodG9VaW50OEFycmF5KGJvZHkpKTtcbiAgICAgICAgcmV0dXJuIHRvSGV4KGF3YWl0IGhhc2hDdG9yLmRpZ2VzdCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIFVOU0lHTkVEX1BBWUxPQUQ7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGhhc0hlYWRlciA9IChzb3VnaHRIZWFkZXIsIGhlYWRlcnMpID0+IHtcbiAgICBzb3VnaHRIZWFkZXIgPSBzb3VnaHRIZWFkZXIudG9Mb3dlckNhc2UoKTtcbiAgICBmb3IgKGNvbnN0IGhlYWRlck5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykpIHtcbiAgICAgICAgaWYgKHNvdWdodEhlYWRlciA9PT0gaGVhZGVyTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuZXhwb3J0IGNvbnN0IGdldEhlYWRlclZhbHVlID0gKHNvdWdodEhlYWRlciwgaGVhZGVycykgPT4ge1xuICAgIHNvdWdodEhlYWRlciA9IHNvdWdodEhlYWRlci50b0xvd2VyQ2FzZSgpO1xuICAgIGZvciAoY29uc3QgaGVhZGVyTmFtZSBvZiBPYmplY3Qua2V5cyhoZWFkZXJzKSkge1xuICAgICAgICBpZiAoc291Z2h0SGVhZGVyID09PSBoZWFkZXJOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBoZWFkZXJzW2hlYWRlck5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuZXhwb3J0IGNvbnN0IGRlbGV0ZUhlYWRlciA9IChzb3VnaHRIZWFkZXIsIGhlYWRlcnMpID0+IHtcbiAgICBzb3VnaHRIZWFkZXIgPSBzb3VnaHRIZWFkZXIudG9Mb3dlckNhc2UoKTtcbiAgICBmb3IgKGNvbnN0IGhlYWRlck5hbWUgb2YgT2JqZWN0LmtleXMoaGVhZGVycykpIHtcbiAgICAgICAgaWYgKHNvdWdodEhlYWRlciA9PT0gaGVhZGVyTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBkZWxldGUgaGVhZGVyc1toZWFkZXJOYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9TaWduYXR1cmVWNFwiO1xuZXhwb3J0IHsgZ2V0Q2Fub25pY2FsSGVhZGVycyB9IGZyb20gXCIuL2dldENhbm9uaWNhbEhlYWRlcnNcIjtcbmV4cG9ydCB7IGdldENhbm9uaWNhbFF1ZXJ5IH0gZnJvbSBcIi4vZ2V0Q2Fub25pY2FsUXVlcnlcIjtcbmV4cG9ydCB7IGdldFBheWxvYWRIYXNoIH0gZnJvbSBcIi4vZ2V0UGF5bG9hZEhhc2hcIjtcbmV4cG9ydCB7IG1vdmVIZWFkZXJzVG9RdWVyeSB9IGZyb20gXCIuL21vdmVIZWFkZXJzVG9RdWVyeVwiO1xuZXhwb3J0IHsgcHJlcGFyZVJlcXVlc3QgfSBmcm9tIFwiLi9wcmVwYXJlUmVxdWVzdFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vY3JlZGVudGlhbERlcml2YXRpb25cIjtcbiIsImltcG9ydCB7IGNsb25lUmVxdWVzdCB9IGZyb20gXCIuL2Nsb25lUmVxdWVzdFwiO1xuZXhwb3J0IGNvbnN0IG1vdmVIZWFkZXJzVG9RdWVyeSA9IChyZXF1ZXN0LCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB7IGhlYWRlcnMsIHF1ZXJ5ID0ge30gfSA9IHR5cGVvZiByZXF1ZXN0LmNsb25lID09PSBcImZ1bmN0aW9uXCIgPyByZXF1ZXN0LmNsb25lKCkgOiBjbG9uZVJlcXVlc3QocmVxdWVzdCk7XG4gICAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKGhlYWRlcnMpKSB7XG4gICAgICAgIGNvbnN0IGxuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAobG5hbWUuc2xpY2UoMCwgNikgPT09IFwieC1hbXotXCIgJiYgIW9wdGlvbnMudW5ob2lzdGFibGVIZWFkZXJzPy5oYXMobG5hbWUpKSB7XG4gICAgICAgICAgICBxdWVyeVtuYW1lXSA9IGhlYWRlcnNbbmFtZV07XG4gICAgICAgICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5yZXF1ZXN0LFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgICBxdWVyeSxcbiAgICB9O1xufTtcbiIsImltcG9ydCB7IGNsb25lUmVxdWVzdCB9IGZyb20gXCIuL2Nsb25lUmVxdWVzdFwiO1xuaW1wb3J0IHsgR0VORVJBVEVEX0hFQURFUlMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmV4cG9ydCBjb25zdCBwcmVwYXJlUmVxdWVzdCA9IChyZXF1ZXN0KSA9PiB7XG4gICAgcmVxdWVzdCA9IHR5cGVvZiByZXF1ZXN0LmNsb25lID09PSBcImZ1bmN0aW9uXCIgPyByZXF1ZXN0LmNsb25lKCkgOiBjbG9uZVJlcXVlc3QocmVxdWVzdCk7XG4gICAgZm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIE9iamVjdC5rZXlzKHJlcXVlc3QuaGVhZGVycykpIHtcbiAgICAgICAgaWYgKEdFTkVSQVRFRF9IRUFERVJTLmluZGV4T2YoaGVhZGVyTmFtZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XG4gICAgICAgICAgICBkZWxldGUgcmVxdWVzdC5oZWFkZXJzW2hlYWRlck5hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0O1xufTtcbiIsImV4cG9ydCBjb25zdCBpc284NjAxID0gKHRpbWUpID0+IHRvRGF0ZSh0aW1lKVxuICAgIC50b0lTT1N0cmluZygpXG4gICAgLnJlcGxhY2UoL1xcLlxcZHszfVokLywgXCJaXCIpO1xuZXhwb3J0IGNvbnN0IHRvRGF0ZSA9ICh0aW1lKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB0aW1lID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aW1lICogMTAwMCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdGltZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoTnVtYmVyKHRpbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoTnVtYmVyKHRpbWUpICogMTAwMCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRpbWUpO1xuICAgIH1cbiAgICByZXR1cm4gdGltZTtcbn07XG4iLCJjb25zdCBTSE9SVF9UT19IRVggPSB7fTtcbmNvbnN0IEhFWF9UT19TSE9SVCA9IHt9O1xuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgIGxldCBlbmNvZGVkQnl0ZSA9IGkudG9TdHJpbmcoMTYpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGVuY29kZWRCeXRlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBlbmNvZGVkQnl0ZSA9IGAwJHtlbmNvZGVkQnl0ZX1gO1xuICAgIH1cbiAgICBTSE9SVF9UT19IRVhbaV0gPSBlbmNvZGVkQnl0ZTtcbiAgICBIRVhfVE9fU0hPUlRbZW5jb2RlZEJ5dGVdID0gaTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmcm9tSGV4KGVuY29kZWQpIHtcbiAgICBpZiAoZW5jb2RlZC5sZW5ndGggJSAyICE9PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkhleCBlbmNvZGVkIHN0cmluZ3MgbXVzdCBoYXZlIGFuIGV2ZW4gbnVtYmVyIGxlbmd0aFwiKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0ID0gbmV3IFVpbnQ4QXJyYXkoZW5jb2RlZC5sZW5ndGggLyAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY29kZWQubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgY29uc3QgZW5jb2RlZEJ5dGUgPSBlbmNvZGVkLnNsaWNlKGksIGkgKyAyKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoZW5jb2RlZEJ5dGUgaW4gSEVYX1RPX1NIT1JUKSB7XG4gICAgICAgICAgICBvdXRbaSAvIDJdID0gSEVYX1RPX1NIT1JUW2VuY29kZWRCeXRlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGRlY29kZSB1bnJlY29nbml6ZWQgc2VxdWVuY2UgJHtlbmNvZGVkQnl0ZX0gYXMgaGV4YWRlY2ltYWxgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvSGV4KGJ5dGVzKSB7XG4gICAgbGV0IG91dCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5ieXRlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3V0ICs9IFNIT1JUX1RPX0hFWFtieXRlc1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG4iLCJpbXBvcnQgeyBwYXJzZVF1ZXJ5U3RyaW5nIH0gZnJvbSBcIkBhd3Mtc2RrL3F1ZXJ5c3RyaW5nLXBhcnNlclwiO1xuZXhwb3J0IGNvbnN0IHBhcnNlVXJsID0gKHVybCkgPT4ge1xuICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVVybChuZXcgVVJMKHVybCkpO1xuICAgIH1cbiAgICBjb25zdCB7IGhvc3RuYW1lLCBwYXRobmFtZSwgcG9ydCwgcHJvdG9jb2wsIHNlYXJjaCB9ID0gdXJsO1xuICAgIGxldCBxdWVyeTtcbiAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgIHF1ZXJ5ID0gcGFyc2VRdWVyeVN0cmluZyhzZWFyY2gpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBob3N0bmFtZSxcbiAgICAgICAgcG9ydDogcG9ydCA/IHBhcnNlSW50KHBvcnQpIDogdW5kZWZpbmVkLFxuICAgICAgICBwcm90b2NvbCxcbiAgICAgICAgcGF0aDogcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgIH07XG59O1xuIiwidmFyIFNIT1JUX1RPX0hFWCA9IHt9O1xudmFyIEhFWF9UT19TSE9SVCA9IHt9O1xuZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuICAgIHZhciBlbmNvZGVkQnl0ZSA9IGkudG9TdHJpbmcoMTYpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGVuY29kZWRCeXRlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBlbmNvZGVkQnl0ZSA9IFwiMFwiLmNvbmNhdChlbmNvZGVkQnl0ZSk7XG4gICAgfVxuICAgIFNIT1JUX1RPX0hFWFtpXSA9IGVuY29kZWRCeXRlO1xuICAgIEhFWF9UT19TSE9SVFtlbmNvZGVkQnl0ZV0gPSBpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZyb21IZXgoZW5jb2RlZCkge1xuICAgIGlmIChlbmNvZGVkLmxlbmd0aCAlIDIgIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSGV4IGVuY29kZWQgc3RyaW5ncyBtdXN0IGhhdmUgYW4gZXZlbiBudW1iZXIgbGVuZ3RoXCIpO1xuICAgIH1cbiAgICB2YXIgb3V0ID0gbmV3IFVpbnQ4QXJyYXkoZW5jb2RlZC5sZW5ndGggLyAyKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kZWQubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgdmFyIGVuY29kZWRCeXRlID0gZW5jb2RlZC5zbGljZShpLCBpICsgMikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGVuY29kZWRCeXRlIGluIEhFWF9UT19TSE9SVCkge1xuICAgICAgICAgICAgb3V0W2kgLyAyXSA9IEhFWF9UT19TSE9SVFtlbmNvZGVkQnl0ZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZGVjb2RlIHVucmVjb2duaXplZCBzZXF1ZW5jZSBcIi5jb25jYXQoZW5jb2RlZEJ5dGUsIFwiIGFzIGhleGFkZWNpbWFsXCIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvSGV4KGJ5dGVzKSB7XG4gICAgdmFyIG91dCA9IFwiXCI7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBieXRlcy5ieXRlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3V0ICs9IFNIT1JUX1RPX0hFWFtieXRlc1tpXV07XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9ub3JtYWxpemVQcm92aWRlclwiO1xuIiwiZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVByb3ZpZGVyID0gKGlucHV0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgY29uc3QgcHJvbWlzaWZpZWQgPSBQcm9taXNlLnJlc29sdmUoaW5wdXQpO1xuICAgIHJldHVybiAoKSA9PiBwcm9taXNpZmllZDtcbn07XG4iLCJpbXBvcnQgeyBlc2NhcGVVcmkgfSBmcm9tIFwiLi9lc2NhcGUtdXJpXCI7XG5leHBvcnQgY29uc3QgZXNjYXBlVXJpUGF0aCA9ICh1cmkpID0+IHVyaS5zcGxpdChcIi9cIikubWFwKGVzY2FwZVVyaSkuam9pbihcIi9cIik7XG4iLCJleHBvcnQgY29uc3QgZXNjYXBlVXJpID0gKHVyaSkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KHVyaSkucmVwbGFjZSgvWyEnKCkqXS9nLCBoZXhFbmNvZGUpO1xuY29uc3QgaGV4RW5jb2RlID0gKGMpID0+IGAlJHtjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9YDtcbiIsImV4cG9ydCAqIGZyb20gXCIuL2VzY2FwZS11cmlcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2VzY2FwZS11cmktcGF0aFwiO1xuIiwiaW1wb3J0IHsgZnJvbVV0ZjggYXMganNGcm9tVXRmOCwgdG9VdGY4IGFzIGpzVG9VdGY4IH0gZnJvbSBcIi4vcHVyZUpzXCI7XG5pbXBvcnQgeyBmcm9tVXRmOCBhcyB0ZXh0RW5jb2RlckZyb21VdGY4LCB0b1V0ZjggYXMgdGV4dEVuY29kZXJUb1V0ZjggfSBmcm9tIFwiLi93aGF0d2dFbmNvZGluZ0FwaVwiO1xuZXhwb3J0IGNvbnN0IGZyb21VdGY4ID0gKGlucHV0KSA9PiB0eXBlb2YgVGV4dEVuY29kZXIgPT09IFwiZnVuY3Rpb25cIiA/IHRleHRFbmNvZGVyRnJvbVV0ZjgoaW5wdXQpIDoganNGcm9tVXRmOChpbnB1dCk7XG5leHBvcnQgY29uc3QgdG9VdGY4ID0gKGlucHV0KSA9PiB0eXBlb2YgVGV4dERlY29kZXIgPT09IFwiZnVuY3Rpb25cIiA/IHRleHRFbmNvZGVyVG9VdGY4KGlucHV0KSA6IGpzVG9VdGY4KGlucHV0KTtcbiIsImV4cG9ydCBjb25zdCBmcm9tVXRmOCA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IGJ5dGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGlucHV0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKHZhbHVlIDwgMHg4MCkge1xuICAgICAgICAgICAgYnl0ZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPCAweDgwMCkge1xuICAgICAgICAgICAgYnl0ZXMucHVzaCgodmFsdWUgPj4gNikgfCAwYjExMDAwMDAwLCAodmFsdWUgJiAwYjExMTExMSkgfCAwYjEwMDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpICsgMSA8IGlucHV0Lmxlbmd0aCAmJiAodmFsdWUgJiAweGZjMDApID09PSAweGQ4MDAgJiYgKGlucHV0LmNoYXJDb2RlQXQoaSArIDEpICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XG4gICAgICAgICAgICBjb25zdCBzdXJyb2dhdGVQYWlyID0gMHgxMDAwMCArICgodmFsdWUgJiAwYjExMTExMTExMTEpIDw8IDEwKSArIChpbnB1dC5jaGFyQ29kZUF0KCsraSkgJiAwYjExMTExMTExMTEpO1xuICAgICAgICAgICAgYnl0ZXMucHVzaCgoc3Vycm9nYXRlUGFpciA+PiAxOCkgfCAwYjExMTEwMDAwLCAoKHN1cnJvZ2F0ZVBhaXIgPj4gMTIpICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCwgKChzdXJyb2dhdGVQYWlyID4+IDYpICYgMGIxMTExMTEpIHwgMGIxMDAwMDAwMCwgKHN1cnJvZ2F0ZVBhaXIgJiAwYjExMTExMSkgfCAwYjEwMDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJ5dGVzLnB1c2goKHZhbHVlID4+IDEyKSB8IDBiMTExMDAwMDAsICgodmFsdWUgPj4gNikgJiAwYjExMTExMSkgfCAwYjEwMDAwMDAwLCAodmFsdWUgJiAwYjExMTExMSkgfCAwYjEwMDAwMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gVWludDhBcnJheS5mcm9tKGJ5dGVzKTtcbn07XG5leHBvcnQgY29uc3QgdG9VdGY4ID0gKGlucHV0KSA9PiB7XG4gICAgbGV0IGRlY29kZWQgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBpbnB1dC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBieXRlID0gaW5wdXRbaV07XG4gICAgICAgIGlmIChieXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgZGVjb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKDBiMTEwMDAwMDAgPD0gYnl0ZSAmJiBieXRlIDwgMGIxMTEwMDAwMCkge1xuICAgICAgICAgICAgY29uc3QgbmV4dEJ5dGUgPSBpbnB1dFsrK2ldO1xuICAgICAgICAgICAgZGVjb2RlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYnl0ZSAmIDBiMTExMTEpIDw8IDYpIHwgKG5leHRCeXRlICYgMGIxMTExMTEpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgwYjExMTEwMDAwIDw9IGJ5dGUgJiYgYnl0ZSA8IDBiMTAxMTAxMTAxKSB7XG4gICAgICAgICAgICBjb25zdCBzdXJyb2dhdGVQYWlyID0gW2J5dGUsIGlucHV0WysraV0sIGlucHV0WysraV0sIGlucHV0WysraV1dO1xuICAgICAgICAgICAgY29uc3QgZW5jb2RlZCA9IFwiJVwiICsgc3Vycm9nYXRlUGFpci5tYXAoKGJ5dGVWYWx1ZSkgPT4gYnl0ZVZhbHVlLnRvU3RyaW5nKDE2KSkuam9pbihcIiVcIik7XG4gICAgICAgICAgICBkZWNvZGVkICs9IGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlY29kZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGJ5dGUgJiAwYjExMTEpIDw8IDEyKSB8ICgoaW5wdXRbKytpXSAmIDBiMTExMTExKSA8PCA2KSB8IChpbnB1dFsrK2ldICYgMGIxMTExMTEpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlZDtcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gZnJvbVV0ZjgoaW5wdXQpIHtcbiAgICByZXR1cm4gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKGlucHV0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1V0ZjgoaW5wdXQpIHtcbiAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIikuZGVjb2RlKGlucHV0KTtcbn1cbiIsImltcG9ydCB7IGZyb21BcnJheUJ1ZmZlciwgZnJvbVN0cmluZyB9IGZyb20gXCJAYXdzLXNkay91dGlsLWJ1ZmZlci1mcm9tXCI7XG5leHBvcnQgY29uc3QgZnJvbVV0ZjggPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCBidWYgPSBmcm9tU3RyaW5nKGlucHV0LCBcInV0ZjhcIik7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1Zi5idWZmZXIsIGJ1Zi5ieXRlT2Zmc2V0LCBidWYuYnl0ZUxlbmd0aCAvIFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlQpO1xufTtcbmV4cG9ydCBjb25zdCB0b1V0ZjggPSAoaW5wdXQpID0+IGZyb21BcnJheUJ1ZmZlcihpbnB1dC5idWZmZXIsIGlucHV0LmJ5dGVPZmZzZXQsIGlucHV0LmJ5dGVMZW5ndGgpLnRvU3RyaW5nKFwidXRmOFwiKTtcbiIsImV4cG9ydCBjb25zdCBpc0FycmF5QnVmZmVyID0gKGFyZykgPT4gKHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiICYmIGFyZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fFxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSBcIltvYmplY3QgQXJyYXlCdWZmZXJdXCI7XG4iLCJpbXBvcnQgeyBpc0FycmF5QnVmZmVyIH0gZnJvbSBcIkBhd3Mtc2RrL2lzLWFycmF5LWJ1ZmZlclwiO1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSBcImJ1ZmZlclwiO1xuZXhwb3J0IGNvbnN0IGZyb21BcnJheUJ1ZmZlciA9IChpbnB1dCwgb2Zmc2V0ID0gMCwgbGVuZ3RoID0gaW5wdXQuYnl0ZUxlbmd0aCAtIG9mZnNldCkgPT4ge1xuICAgIGlmICghaXNBcnJheUJ1ZmZlcihpbnB1dCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFwiaW5wdXRcIiBhcmd1bWVudCBtdXN0IGJlIEFycmF5QnVmZmVyLiBSZWNlaXZlZCB0eXBlICR7dHlwZW9mIGlucHV0fSAoJHtpbnB1dH0pYCk7XG4gICAgfVxuICAgIHJldHVybiBCdWZmZXIuZnJvbShpbnB1dCwgb2Zmc2V0LCBsZW5ndGgpO1xufTtcbmV4cG9ydCBjb25zdCBmcm9tU3RyaW5nID0gKGlucHV0LCBlbmNvZGluZykgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgVGhlIFwiaW5wdXRcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nLiBSZWNlaXZlZCB0eXBlICR7dHlwZW9mIGlucHV0fSAoJHtpbnB1dH0pYCk7XG4gICAgfVxuICAgIHJldHVybiBlbmNvZGluZyA/IEJ1ZmZlci5mcm9tKGlucHV0LCBlbmNvZGluZykgOiBCdWZmZXIuZnJvbShpbnB1dCk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGZyb21VdGY4ID0gKGlucHV0KSA9PiBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoaW5wdXQpO1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vZnJvbVV0ZjhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3RvVWludDhBcnJheVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdG9VdGY4XCI7XG4iLCJpbXBvcnQgeyBmcm9tVXRmOCB9IGZyb20gXCIuL2Zyb21VdGY4XCI7XG5leHBvcnQgY29uc3QgdG9VaW50OEFycmF5ID0gKGRhdGEpID0+IHtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGZyb21VdGY4KGRhdGEpO1xuICAgIH1cbiAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGRhdGEpKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShkYXRhLmJ1ZmZlciwgZGF0YS5ieXRlT2Zmc2V0LCBkYXRhLmJ5dGVMZW5ndGggLyBVaW50OEFycmF5LkJZVEVTX1BFUl9FTEVNRU5UKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEpO1xufTtcbiIsImV4cG9ydCBjb25zdCB0b1V0ZjggPSAoaW5wdXQpID0+IG5ldyBUZXh0RGVjb2RlcihcInV0Zi04XCIpLmRlY29kZShpbnB1dCk7XG4iLCJleHBvcnQgY29uc3QgZnJvbVV0ZjggPSAoaW5wdXQpID0+IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShpbnB1dCk7XG4iLCJleHBvcnQgKiBmcm9tIFwiLi9mcm9tVXRmOFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vdG9VaW50OEFycmF5XCI7XG5leHBvcnQgKiBmcm9tIFwiLi90b1V0ZjhcIjtcbiIsImltcG9ydCB7IGZyb21VdGY4IH0gZnJvbSBcIi4vZnJvbVV0ZjhcIjtcbmV4cG9ydCBjb25zdCB0b1VpbnQ4QXJyYXkgPSAoZGF0YSkgPT4ge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gZnJvbVV0ZjgoZGF0YSk7XG4gICAgfVxuICAgIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRhdGEuYnVmZmVyLCBkYXRhLmJ5dGVPZmZzZXQsIGRhdGEuYnl0ZUxlbmd0aCAvIFVpbnQ4QXJyYXkuQllURVNfUEVSX0VMRU1FTlQpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHRvVXRmOCA9IChpbnB1dCkgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBpbnB1dC5ieXRlT2Zmc2V0ICE9PSBcIm51bWJlclwiIHx8IHR5cGVvZiBpbnB1dC5ieXRlTGVuZ3RoICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkBzbWl0aHkvdXRpbC11dGY4OiB0b1V0ZjggZW5jb2RlciBmdW5jdGlvbiBvbmx5IGFjY2VwdHMgc3RyaW5nIHwgVWludDhBcnJheS5cIik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoXCJ1dGYtOFwiKS5kZWNvZGUoaW5wdXQpO1xufTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIHZhciBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayh1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxuY29uc3QgYmFzZTY0ID0gcmVxdWlyZSgnYmFzZTY0LWpzJylcbmNvbnN0IGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbmNvbnN0IGN1c3RvbUluc3BlY3RTeW1ib2wgPVxuICAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgU3ltYm9sWydmb3InXSA9PT0gJ2Z1bmN0aW9uJykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICA/IFN5bWJvbFsnZm9yJ10oJ25vZGVqcy51dGlsLmluc3BlY3QuY3VzdG9tJykgLy8gZXNsaW50LWRpc2FibGUtbGluZSBkb3Qtbm90YXRpb25cbiAgICA6IG51bGxcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG5jb25zdCBLX01BWF9MRU5HVEggPSAweDdmZmZmZmZmXG5leHBvcnRzLmtNYXhMZW5ndGggPSBLX01BWF9MRU5HVEhcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgUHJpbnQgd2FybmluZyBhbmQgcmVjb21tZW5kIHVzaW5nIGBidWZmZXJgIHY0Lnggd2hpY2ggaGFzIGFuIE9iamVjdFxuICogICAgICAgICAgICAgICBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogV2UgcmVwb3J0IHRoYXQgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0eXBlZCBhcnJheXMgaWYgdGhlIGFyZSBub3Qgc3ViY2xhc3NhYmxlXG4gKiB1c2luZyBfX3Byb3RvX18uIEZpcmVmb3ggNC0yOSBsYWNrcyBzdXBwb3J0IGZvciBhZGRpbmcgbmV3IHByb3BlcnRpZXMgdG8gYFVpbnQ4QXJyYXlgXG4gKiAoU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzgpLiBJRSAxMCBsYWNrcyBzdXBwb3J0XG4gKiBmb3IgX19wcm90b19fIGFuZCBoYXMgYSBidWdneSB0eXBlZCBhcnJheSBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbmlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgY29uc29sZS5lcnJvcihcbiAgICAnVGhpcyBicm93c2VyIGxhY2tzIHR5cGVkIGFycmF5IChVaW50OEFycmF5KSBzdXBwb3J0IHdoaWNoIGlzIHJlcXVpcmVkIGJ5ICcgK1xuICAgICdgYnVmZmVyYCB2NS54LiBVc2UgYGJ1ZmZlcmAgdjQueCBpZiB5b3UgcmVxdWlyZSBvbGQgYnJvd3NlciBzdXBwb3J0LidcbiAgKVxufVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIC8vIENhbiB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZD9cbiAgdHJ5IHtcbiAgICBjb25zdCBhcnIgPSBuZXcgVWludDhBcnJheSgxKVxuICAgIGNvbnN0IHByb3RvID0geyBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH0gfVxuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihwcm90bywgVWludDhBcnJheS5wcm90b3R5cGUpXG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGFyciwgcHJvdG8pXG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDJcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdWZmZXIucHJvdG90eXBlLCAncGFyZW50Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0aGlzKSkgcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiB0aGlzLmJ1ZmZlclxuICB9XG59KVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLnByb3RvdHlwZSwgJ29mZnNldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGhpcykpIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gdGhpcy5ieXRlT2Zmc2V0XG4gIH1cbn0pXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlciAobGVuZ3RoKSB7XG4gIGlmIChsZW5ndGggPiBLX01BWF9MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIFwiJyArIGxlbmd0aCArICdcIiBpcyBpbnZhbGlkIGZvciBvcHRpb24gXCJzaXplXCInKVxuICB9XG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIGNvbnN0IGJ1ZiA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGJ1ZiwgQnVmZmVyLnByb3RvdHlwZSlcbiAgcmV0dXJuIGJ1ZlxufVxuXG4vKipcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgaGF2ZSB0aGVpclxuICogcHJvdG90eXBlIGNoYW5nZWQgdG8gYEJ1ZmZlci5wcm90b3R5cGVgLiBGdXJ0aGVybW9yZSwgYEJ1ZmZlcmAgaXMgYSBzdWJjbGFzcyBvZlxuICogYFVpbnQ4QXJyYXlgLCBzbyB0aGUgcmV0dXJuZWQgaW5zdGFuY2VzIHdpbGwgaGF2ZSBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgbWV0aG9kc1xuICogYW5kIHRoZSBgVWludDhBcnJheWAgbWV0aG9kcy4gU3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXRcbiAqIHJldHVybnMgYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogVGhlIGBVaW50OEFycmF5YCBwcm90b3R5cGUgcmVtYWlucyB1bm1vZGlmaWVkLlxuICovXG5cbmZ1bmN0aW9uIEJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdUaGUgXCJzdHJpbmdcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgc3RyaW5nLiBSZWNlaXZlZCB0eXBlIG51bWJlcidcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKGFyZylcbiAgfVxuICByZXR1cm4gZnJvbShhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbmZ1bmN0aW9uIGZyb20gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheVZpZXcodmFsdWUpXG4gIH1cblxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIGZpcnN0IGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgc3RyaW5nLCBCdWZmZXIsIEFycmF5QnVmZmVyLCBBcnJheSwgJyArXG4gICAgICAnb3IgQXJyYXktbGlrZSBPYmplY3QuIFJlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdmFsdWUpXG4gICAgKVxuICB9XG5cbiAgaWYgKGlzSW5zdGFuY2UodmFsdWUsIEFycmF5QnVmZmVyKSB8fFxuICAgICAgKHZhbHVlICYmIGlzSW5zdGFuY2UodmFsdWUuYnVmZmVyLCBBcnJheUJ1ZmZlcikpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBTaGFyZWRBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIChpc0luc3RhbmNlKHZhbHVlLCBTaGFyZWRBcnJheUJ1ZmZlcikgfHxcbiAgICAgICh2YWx1ZSAmJiBpc0luc3RhbmNlKHZhbHVlLmJ1ZmZlciwgU2hhcmVkQXJyYXlCdWZmZXIpKSkpIHtcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAnVGhlIFwidmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBvZiB0eXBlIG51bWJlci4gUmVjZWl2ZWQgdHlwZSBudW1iZXInXG4gICAgKVxuICB9XG5cbiAgY29uc3QgdmFsdWVPZiA9IHZhbHVlLnZhbHVlT2YgJiYgdmFsdWUudmFsdWVPZigpXG4gIGlmICh2YWx1ZU9mICE9IG51bGwgJiYgdmFsdWVPZiAhPT0gdmFsdWUpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20odmFsdWVPZiwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgY29uc3QgYiA9IGZyb21PYmplY3QodmFsdWUpXG4gIGlmIChiKSByZXR1cm4gYlxuXG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9QcmltaXRpdmUgIT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIHZhbHVlW1N5bWJvbC50b1ByaW1pdGl2ZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20odmFsdWVbU3ltYm9sLnRvUHJpbWl0aXZlXSgnc3RyaW5nJyksIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgJ1RoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksICcgK1xuICAgICdvciBBcnJheS1saWtlIE9iamVjdC4gUmVjZWl2ZWQgdHlwZSAnICsgKHR5cGVvZiB2YWx1ZSlcbiAgKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbi8vIE5vdGU6IENoYW5nZSBwcm90b3R5cGUgKmFmdGVyKiBCdWZmZXIuZnJvbSBpcyBkZWZpbmVkIHRvIHdvcmthcm91bmQgQ2hyb21lIGJ1Zzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvMTQ4XG5PYmplY3Quc2V0UHJvdG90eXBlT2YoQnVmZmVyLnByb3RvdHlwZSwgVWludDhBcnJheS5wcm90b3R5cGUpXG5PYmplY3Quc2V0UHJvdG90eXBlT2YoQnVmZmVyLCBVaW50OEFycmF5KVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgXCInICsgc2l6ZSArICdcIiBpcyBpbnZhbGlkIGZvciBvcHRpb24gXCJzaXplXCInKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFsbG9jIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIGlmIChzaXplIDw9IDApIHtcbiAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHNpemUpXG4gIH1cbiAgaWYgKGZpbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9ubHkgcGF5IGF0dGVudGlvbiB0byBlbmNvZGluZyBpZiBpdCdzIGEgc3RyaW5nLiBUaGlzXG4gICAgLy8gcHJldmVudHMgYWNjaWRlbnRhbGx5IHNlbmRpbmcgaW4gYSBudW1iZXIgdGhhdCB3b3VsZFxuICAgIC8vIGJlIGludGVycHJldGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcihzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIoc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAoc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHJldHVybiBjcmVhdGVCdWZmZXIoc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG59XG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqICovXG5CdWZmZXIuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUoc2l6ZSlcbn1cbi8qKlxuICogRXF1aXZhbGVudCB0byBTbG93QnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICByZXR1cm4gYWxsb2NVbnNhZmUoc2l6ZSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gIH1cblxuICBjb25zdCBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICBsZXQgYnVmID0gY3JlYXRlQnVmZmVyKGxlbmd0aClcblxuICBjb25zdCBhY3R1YWwgPSBidWYud3JpdGUoc3RyaW5nLCBlbmNvZGluZylcblxuICBpZiAoYWN0dWFsICE9PSBsZW5ndGgpIHtcbiAgICAvLyBXcml0aW5nIGEgaGV4IHN0cmluZywgZm9yIGV4YW1wbGUsIHRoYXQgY29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzIHdpbGxcbiAgICAvLyBjYXVzZSBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCBpbnZhbGlkIGNoYXJhY3RlciB0byBiZSBpZ25vcmVkLiAoZS5nLlxuICAgIC8vICdhYnh4Y2QnIHdpbGwgYmUgdHJlYXRlZCBhcyAnYWInKVxuICAgIGJ1ZiA9IGJ1Zi5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUxpa2UgKGFycmF5KSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICBjb25zdCBidWYgPSBjcmVhdGVCdWZmZXIobGVuZ3RoKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgYnVmW2ldID0gYXJyYXlbaV0gJiAyNTVcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheVZpZXcgKGFycmF5Vmlldykge1xuICBpZiAoaXNJbnN0YW5jZShhcnJheVZpZXcsIFVpbnQ4QXJyYXkpKSB7XG4gICAgY29uc3QgY29weSA9IG5ldyBVaW50OEFycmF5KGFycmF5VmlldylcbiAgICByZXR1cm4gZnJvbUFycmF5QnVmZmVyKGNvcHkuYnVmZmVyLCBjb3B5LmJ5dGVPZmZzZXQsIGNvcHkuYnl0ZUxlbmd0aClcbiAgfVxuICByZXR1cm4gZnJvbUFycmF5TGlrZShhcnJheVZpZXcpXG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAoYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJvZmZzZXRcIiBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcImxlbmd0aFwiIGlzIG91dHNpZGUgb2YgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBsZXQgYnVmXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBidWYgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0KVxuICB9IGVsc2Uge1xuICAgIGJ1ZiA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZVxuICBPYmplY3Quc2V0UHJvdG90eXBlT2YoYnVmLCBCdWZmZXIucHJvdG90eXBlKVxuXG4gIHJldHVybiBidWZcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAob2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIGNvbnN0IGxlbiA9IGNoZWNrZWQob2JqLmxlbmd0aCkgfCAwXG4gICAgY29uc3QgYnVmID0gY3JlYXRlQnVmZmVyKGxlbilcblxuICAgIGlmIChidWYubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYnVmXG4gICAgfVxuXG4gICAgb2JqLmNvcHkoYnVmLCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIGJ1ZlxuICB9XG5cbiAgaWYgKG9iai5sZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgbnVtYmVySXNOYU4ob2JqLmxlbmd0aCkpIHtcbiAgICAgIHJldHVybiBjcmVhdGVCdWZmZXIoMClcbiAgICB9XG4gICAgcmV0dXJuIGZyb21BcnJheUxpa2Uob2JqKVxuICB9XG5cbiAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBBcnJheS5pc0FycmF5KG9iai5kYXRhKSkge1xuICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKG9iai5kYXRhKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBLX01BWF9MRU5HVEhgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0gS19NQVhfTEVOR1RIKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIEtfTUFYX0xFTkdUSC50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuIGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlciA9PT0gdHJ1ZSAmJlxuICAgIGIgIT09IEJ1ZmZlci5wcm90b3R5cGUgLy8gc28gQnVmZmVyLmlzQnVmZmVyKEJ1ZmZlci5wcm90b3R5cGUpIHdpbGwgYmUgZmFsc2Vcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmIChpc0luc3RhbmNlKGEsIFVpbnQ4QXJyYXkpKSBhID0gQnVmZmVyLmZyb20oYSwgYS5vZmZzZXQsIGEuYnl0ZUxlbmd0aClcbiAgaWYgKGlzSW5zdGFuY2UoYiwgVWludDhBcnJheSkpIGIgPSBCdWZmZXIuZnJvbShiLCBiLm9mZnNldCwgYi5ieXRlTGVuZ3RoKVxuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJidWYxXCIsIFwiYnVmMlwiIGFyZ3VtZW50cyBtdXN0IGJlIG9uZSBvZiB0eXBlIEJ1ZmZlciBvciBVaW50OEFycmF5J1xuICAgIClcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIGxldCB4ID0gYS5sZW5ndGhcbiAgbGV0IHkgPSBiLmxlbmd0aFxuXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgbGV0IGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICBjb25zdCBidWZmZXIgPSBCdWZmZXIuYWxsb2NVbnNhZmUobGVuZ3RoKVxuICBsZXQgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgIGxldCBidWYgPSBsaXN0W2ldXG4gICAgaWYgKGlzSW5zdGFuY2UoYnVmLCBVaW50OEFycmF5KSkge1xuICAgICAgaWYgKHBvcyArIGJ1Zi5sZW5ndGggPiBidWZmZXIubGVuZ3RoKSB7XG4gICAgICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIGJ1ZiA9IEJ1ZmZlci5mcm9tKGJ1ZilcbiAgICAgICAgYnVmLmNvcHkoYnVmZmVyLCBwb3MpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgICAgICBidWZmZXIsXG4gICAgICAgICAgYnVmLFxuICAgICAgICAgIHBvc1xuICAgICAgICApXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIH1cbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBpc0luc3RhbmNlKHN0cmluZywgQXJyYXlCdWZmZXIpKSB7XG4gICAgcmV0dXJuIHN0cmluZy5ieXRlTGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICdUaGUgXCJzdHJpbmdcIiBhcmd1bWVudCBtdXN0IGJlIG9uZSBvZiB0eXBlIHN0cmluZywgQnVmZmVyLCBvciBBcnJheUJ1ZmZlci4gJyArXG4gICAgICAnUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIHN0cmluZ1xuICAgIClcbiAgfVxuXG4gIGNvbnN0IGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgY29uc3QgbXVzdE1hdGNoID0gKGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSA9PT0gdHJ1ZSlcbiAgaWYgKCFtdXN0TWF0Y2ggJiYgbGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICBsZXQgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB7XG4gICAgICAgICAgcmV0dXJuIG11c3RNYXRjaCA/IC0xIDogdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgfVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgbGV0IGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJjaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoaXMgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCAoYW5kIHRoZSBgaXMtYnVmZmVyYCBucG0gcGFja2FnZSlcbi8vIHRvIGRldGVjdCBhIEJ1ZmZlciBpbnN0YW5jZS4gSXQncyBub3QgcG9zc2libGUgdG8gdXNlIGBpbnN0YW5jZW9mIEJ1ZmZlcmBcbi8vIHJlbGlhYmx5IGluIGEgYnJvd3NlcmlmeSBjb250ZXh0IGJlY2F1c2UgdGhlcmUgY291bGQgYmUgbXVsdGlwbGUgZGlmZmVyZW50XG4vLyBjb3BpZXMgb2YgdGhlICdidWZmZXInIHBhY2thZ2UgaW4gdXNlLiBUaGlzIG1ldGhvZCB3b3JrcyBldmVuIGZvciBCdWZmZXJcbi8vIGluc3RhbmNlcyB0aGF0IHdlcmUgY3JlYXRlZCBmcm9tIGFub3RoZXIgY29weSBvZiB0aGUgYGJ1ZmZlcmAgcGFja2FnZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9idWZmZXIvaXNzdWVzLzE1NFxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgY29uc3QgaSA9IGJbbl1cbiAgYltuXSA9IGJbbV1cbiAgYlttXSA9IGlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMTYgPSBmdW5jdGlvbiBzd2FwMTYgKCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICBjb25zdCBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgOCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNjQtYml0cycpXG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gOCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDcpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDYpXG4gICAgc3dhcCh0aGlzLCBpICsgMiwgaSArIDUpXG4gICAgc3dhcCh0aGlzLCBpICsgMywgaSArIDQpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgY29uc3QgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9Mb2NhbGVTdHJpbmcgPSBCdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nXG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgbGV0IHN0ciA9ICcnXG4gIGNvbnN0IG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5yZXBsYWNlKC8oLnsyfSkvZywgJyQxICcpLnRyaW0oKVxuICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIHJldHVybiAnPEJ1ZmZlciAnICsgc3RyICsgJz4nXG59XG5pZiAoY3VzdG9tSW5zcGVjdFN5bWJvbCkge1xuICBCdWZmZXIucHJvdG90eXBlW2N1c3RvbUluc3BlY3RTeW1ib2xdID0gQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uIGNvbXBhcmUgKHRhcmdldCwgc3RhcnQsIGVuZCwgdGhpc1N0YXJ0LCB0aGlzRW5kKSB7XG4gIGlmIChpc0luc3RhbmNlKHRhcmdldCwgVWludDhBcnJheSkpIHtcbiAgICB0YXJnZXQgPSBCdWZmZXIuZnJvbSh0YXJnZXQsIHRhcmdldC5vZmZzZXQsIHRhcmdldC5ieXRlTGVuZ3RoKVxuICB9XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ1RoZSBcInRhcmdldFwiIGFyZ3VtZW50IG11c3QgYmUgb25lIG9mIHR5cGUgQnVmZmVyIG9yIFVpbnQ4QXJyYXkuICcgK1xuICAgICAgJ1JlY2VpdmVkIHR5cGUgJyArICh0eXBlb2YgdGFyZ2V0KVxuICAgIClcbiAgfVxuXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gdGFyZ2V0ID8gdGFyZ2V0Lmxlbmd0aCA6IDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzU3RhcnQgPSAwXG4gIH1cbiAgaWYgKHRoaXNFbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNFbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBlbmQgPiB0YXJnZXQubGVuZ3RoIHx8IHRoaXNTdGFydCA8IDAgfHwgdGhpc0VuZCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ291dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQgJiYgc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodGhpc1N0YXJ0ID49IHRoaXNFbmQpIHtcbiAgICByZXR1cm4gLTFcbiAgfVxuICBpZiAoc3RhcnQgPj0gZW5kKSB7XG4gICAgcmV0dXJuIDFcbiAgfVxuXG4gIHN0YXJ0ID4+Pj0gMFxuICBlbmQgPj4+PSAwXG4gIHRoaXNTdGFydCA+Pj49IDBcbiAgdGhpc0VuZCA+Pj49IDBcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0KSByZXR1cm4gMFxuXG4gIGxldCB4ID0gdGhpc0VuZCAtIHRoaXNTdGFydFxuICBsZXQgeSA9IGVuZCAtIHN0YXJ0XG4gIGNvbnN0IGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgY29uc3QgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgY29uc3QgdGFyZ2V0Q29weSA9IHRhcmdldC5zbGljZShzdGFydCwgZW5kKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICBpZiAodGhpc0NvcHlbaV0gIT09IHRhcmdldENvcHlbaV0pIHtcbiAgICAgIHggPSB0aGlzQ29weVtpXVxuICAgICAgeSA9IHRhcmdldENvcHlbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG4vLyBGaW5kcyBlaXRoZXIgdGhlIGZpcnN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA+PSBgYnl0ZU9mZnNldGAsXG4vLyBPUiB0aGUgbGFzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPD0gYGJ5dGVPZmZzZXRgLlxuLy9cbi8vIEFyZ3VtZW50czpcbi8vIC0gYnVmZmVyIC0gYSBCdWZmZXIgdG8gc2VhcmNoXG4vLyAtIHZhbCAtIGEgc3RyaW5nLCBCdWZmZXIsIG9yIG51bWJlclxuLy8gLSBieXRlT2Zmc2V0IC0gYW4gaW5kZXggaW50byBgYnVmZmVyYDsgd2lsbCBiZSBjbGFtcGVkIHRvIGFuIGludDMyXG4vLyAtIGVuY29kaW5nIC0gYW4gb3B0aW9uYWwgZW5jb2RpbmcsIHJlbGV2YW50IGlzIHZhbCBpcyBhIHN0cmluZ1xuLy8gLSBkaXIgLSB0cnVlIGZvciBpbmRleE9mLCBmYWxzZSBmb3IgbGFzdEluZGV4T2ZcbmZ1bmN0aW9uIGJpZGlyZWN0aW9uYWxJbmRleE9mIChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICAvLyBFbXB0eSBidWZmZXIgbWVhbnMgbm8gbWF0Y2hcbiAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHJldHVybiAtMVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0XG4gIGlmICh0eXBlb2YgYnl0ZU9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IGJ5dGVPZmZzZXRcbiAgICBieXRlT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPiAweDdmZmZmZmZmKSB7XG4gICAgYnl0ZU9mZnNldCA9IDB4N2ZmZmZmZmZcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgLTB4ODAwMDAwMDApIHtcbiAgICBieXRlT2Zmc2V0ID0gLTB4ODAwMDAwMDBcbiAgfVxuICBieXRlT2Zmc2V0ID0gK2J5dGVPZmZzZXQgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKG51bWJlcklzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgW3ZhbF0sIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWwgbXVzdCBiZSBzdHJpbmcsIG51bWJlciBvciBCdWZmZXInKVxufVxuXG5mdW5jdGlvbiBhcnJheUluZGV4T2YgKGFyciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIGxldCBpbmRleFNpemUgPSAxXG4gIGxldCBhcnJMZW5ndGggPSBhcnIubGVuZ3RoXG4gIGxldCB2YWxMZW5ndGggPSB2YWwubGVuZ3RoXG5cbiAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgIGlmIChlbmNvZGluZyA9PT0gJ3VjczInIHx8IGVuY29kaW5nID09PSAndWNzLTInIHx8XG4gICAgICAgIGVuY29kaW5nID09PSAndXRmMTZsZScgfHwgZW5jb2RpbmcgPT09ICd1dGYtMTZsZScpIHtcbiAgICAgIGlmIChhcnIubGVuZ3RoIDwgMiB8fCB2YWwubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm4gLTFcbiAgICAgIH1cbiAgICAgIGluZGV4U2l6ZSA9IDJcbiAgICAgIGFyckxlbmd0aCAvPSAyXG4gICAgICB2YWxMZW5ndGggLz0gMlxuICAgICAgYnl0ZU9mZnNldCAvPSAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZCAoYnVmLCBpKSB7XG4gICAgaWYgKGluZGV4U2l6ZSA9PT0gMSkge1xuICAgICAgcmV0dXJuIGJ1ZltpXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnVmLnJlYWRVSW50MTZCRShpICogaW5kZXhTaXplKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpXG4gIGlmIChkaXIpIHtcbiAgICBsZXQgZm91bmRJbmRleCA9IC0xXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVhZChhcnIsIGkpID09PSByZWFkKHZhbCwgZm91bmRJbmRleCA9PT0gLTEgPyAwIDogaSAtIGZvdW5kSW5kZXgpKSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ID09PSAtMSkgZm91bmRJbmRleCA9IGlcbiAgICAgICAgaWYgKGkgLSBmb3VuZEluZGV4ICsgMSA9PT0gdmFsTGVuZ3RoKSByZXR1cm4gZm91bmRJbmRleCAqIGluZGV4U2l6ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggIT09IC0xKSBpIC09IGkgLSBmb3VuZEluZGV4XG4gICAgICAgIGZvdW5kSW5kZXggPSAtMVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoYnl0ZU9mZnNldCArIHZhbExlbmd0aCA+IGFyckxlbmd0aCkgYnl0ZU9mZnNldCA9IGFyckxlbmd0aCAtIHZhbExlbmd0aFxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgZm91bmQgPSB0cnVlXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHZhbExlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChyZWFkKGFyciwgaSArIGopICE9PSByZWFkKHZhbCwgaikpIHtcbiAgICAgICAgICBmb3VuZCA9IGZhbHNlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGZvdW5kKSByZXR1cm4gaVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzID0gZnVuY3Rpb24gaW5jbHVkZXMgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIHRoaXMuaW5kZXhPZih2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSAhPT0gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgdHJ1ZSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5sYXN0SW5kZXhPZiA9IGZ1bmN0aW9uIGxhc3RJbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBmYWxzZSlcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIGNvbnN0IHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBsZXQgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKG51bWJlcklzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBiYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGJhc2U2NFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gdWNzMldyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmMTZsZVRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nKVxuICBpZiAob2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBlbmNvZGluZylcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIG9mZnNldFssIGxlbmd0aF1bLCBlbmNvZGluZ10pXG4gIH0gZWxzZSBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggPj4+IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICBjb25zdCByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIGxldCBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBhc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgY29uc3QgcmVzID0gW11cblxuICBsZXQgaSA9IHN0YXJ0XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgY29uc3QgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgbGV0IGNvZGVQb2ludCA9IG51bGxcbiAgICBsZXQgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKVxuICAgICAgPyA0XG4gICAgICA6IChmaXJzdEJ5dGUgPiAweERGKVxuICAgICAgICAgID8gM1xuICAgICAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4QkYpXG4gICAgICAgICAgICAgID8gMlxuICAgICAgICAgICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIGxldCBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbmNvbnN0IE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICBjb25zdCBsZW4gPSBjb2RlUG9pbnRzLmxlbmd0aFxuICBpZiAobGVuIDw9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKSB7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlUG9pbnRzKSAvLyBhdm9pZCBleHRyYSBzbGljZSgpXG4gIH1cblxuICAvLyBEZWNvZGUgaW4gY2h1bmtzIHRvIGF2b2lkIFwiY2FsbCBzdGFjayBzaXplIGV4Y2VlZGVkXCIuXG4gIGxldCByZXMgPSAnJ1xuICBsZXQgaSA9IDBcbiAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShcbiAgICAgIFN0cmluZyxcbiAgICAgIGNvZGVQb2ludHMuc2xpY2UoaSwgaSArPSBNQVhfQVJHVU1FTlRTX0xFTkdUSClcbiAgICApXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiBhc2NpaVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgbGV0IHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSAmIDB4N0YpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBsYXRpbjFTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGxldCByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5mdW5jdGlvbiBoZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGNvbnN0IGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICBsZXQgb3V0ID0gJydcbiAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gaGV4U2xpY2VMb29rdXBUYWJsZVtidWZbaV1dXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBjb25zdCBieXRlcyA9IGJ1Zi5zbGljZShzdGFydCwgZW5kKVxuICBsZXQgcmVzID0gJydcbiAgLy8gSWYgYnl0ZXMubGVuZ3RoIGlzIG9kZCwgdGhlIGxhc3QgOCBiaXRzIG11c3QgYmUgaWdub3JlZCAoc2FtZSBhcyBub2RlLmpzKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aCAtIDE7IGkgKz0gMikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGVzW2ldICsgKGJ5dGVzW2kgKyAxXSAqIDI1NikpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgY29uc3QgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICBjb25zdCBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gIC8vIFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlXG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZihuZXdCdWYsIEJ1ZmZlci5wcm90b3R5cGUpXG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludExFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgbGV0IHZhbCA9IHRoaXNbb2Zmc2V0XVxuICBsZXQgbXVsID0gMVxuICBsZXQgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50QkUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICBsZXQgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIGxldCBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDggPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDE2TEUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEUgPSBmdW5jdGlvbiByZWFkVUludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVaW50MTZCRSA9XG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVpbnQzMkxFID1cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAoKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpKSArXG4gICAgICAodGhpc1tvZmZzZXQgKyAzXSAqIDB4MTAwMDAwMClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVWludDMyQkUgPVxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyQkUgPSBmdW5jdGlvbiByZWFkVUludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkQmlnVUludDY0TEUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gcmVhZEJpZ1VJbnQ2NExFIChvZmZzZXQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGNvbnN0IGZpcnN0ID0gdGhpc1tvZmZzZXRdXG4gIGNvbnN0IGxhc3QgPSB0aGlzW29mZnNldCArIDddXG4gIGlmIChmaXJzdCA9PT0gdW5kZWZpbmVkIHx8IGxhc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIGJvdW5kc0Vycm9yKG9mZnNldCwgdGhpcy5sZW5ndGggLSA4KVxuICB9XG5cbiAgY29uc3QgbG8gPSBmaXJzdCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDI0XG5cbiAgY29uc3QgaGkgPSB0aGlzWysrb2Zmc2V0XSArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgbGFzdCAqIDIgKiogMjRcblxuICByZXR1cm4gQmlnSW50KGxvKSArIChCaWdJbnQoaGkpIDw8IEJpZ0ludCgzMikpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRCaWdVSW50NjRCRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiByZWFkQmlnVUludDY0QkUgKG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgY29uc3QgZmlyc3QgPSB0aGlzW29mZnNldF1cbiAgY29uc3QgbGFzdCA9IHRoaXNbb2Zmc2V0ICsgN11cbiAgaWYgKGZpcnN0ID09PSB1bmRlZmluZWQgfHwgbGFzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCB0aGlzLmxlbmd0aCAtIDgpXG4gIH1cblxuICBjb25zdCBoaSA9IGZpcnN0ICogMiAqKiAyNCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgdGhpc1srK29mZnNldF1cblxuICBjb25zdCBsbyA9IHRoaXNbKytvZmZzZXRdICogMiAqKiAyNCArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDE2ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogOCArXG4gICAgbGFzdFxuXG4gIHJldHVybiAoQmlnSW50KGhpKSA8PCBCaWdJbnQoMzIpKSArIEJpZ0ludChsbylcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIGxldCB2YWwgPSB0aGlzW29mZnNldF1cbiAgbGV0IG11bCA9IDFcbiAgbGV0IGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuICBtdWwgKj0gMHg4MFxuXG4gIGlmICh2YWwgPj0gbXVsKSB2YWwgLT0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpXG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRSA9IGZ1bmN0aW9uIHJlYWRJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICBsZXQgaSA9IGJ5dGVMZW5ndGhcbiAgbGV0IG11bCA9IDFcbiAgbGV0IHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIGNvbnN0IHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICBjb25zdCB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gcmVhZEludDMyQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkQmlnSW50NjRMRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiByZWFkQmlnSW50NjRMRSAob2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICB2YWxpZGF0ZU51bWJlcihvZmZzZXQsICdvZmZzZXQnKVxuICBjb25zdCBmaXJzdCA9IHRoaXNbb2Zmc2V0XVxuICBjb25zdCBsYXN0ID0gdGhpc1tvZmZzZXQgKyA3XVxuICBpZiAoZmlyc3QgPT09IHVuZGVmaW5lZCB8fCBsYXN0ID09PSB1bmRlZmluZWQpIHtcbiAgICBib3VuZHNFcnJvcihvZmZzZXQsIHRoaXMubGVuZ3RoIC0gOClcbiAgfVxuXG4gIGNvbnN0IHZhbCA9IHRoaXNbb2Zmc2V0ICsgNF0gK1xuICAgIHRoaXNbb2Zmc2V0ICsgNV0gKiAyICoqIDggK1xuICAgIHRoaXNbb2Zmc2V0ICsgNl0gKiAyICoqIDE2ICtcbiAgICAobGFzdCA8PCAyNCkgLy8gT3ZlcmZsb3dcblxuICByZXR1cm4gKEJpZ0ludCh2YWwpIDw8IEJpZ0ludCgzMikpICtcbiAgICBCaWdJbnQoZmlyc3QgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAyNClcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEJpZ0ludDY0QkUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gcmVhZEJpZ0ludDY0QkUgKG9mZnNldCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgdmFsaWRhdGVOdW1iZXIob2Zmc2V0LCAnb2Zmc2V0JylcbiAgY29uc3QgZmlyc3QgPSB0aGlzW29mZnNldF1cbiAgY29uc3QgbGFzdCA9IHRoaXNbb2Zmc2V0ICsgN11cbiAgaWYgKGZpcnN0ID09PSB1bmRlZmluZWQgfHwgbGFzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCB0aGlzLmxlbmd0aCAtIDgpXG4gIH1cblxuICBjb25zdCB2YWwgPSAoZmlyc3QgPDwgMjQpICsgLy8gT3ZlcmZsb3dcbiAgICB0aGlzWysrb2Zmc2V0XSAqIDIgKiogMTYgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiA4ICtcbiAgICB0aGlzWysrb2Zmc2V0XVxuXG4gIHJldHVybiAoQmlnSW50KHZhbCkgPDwgQmlnSW50KDMyKSkgK1xuICAgIEJpZ0ludCh0aGlzWysrb2Zmc2V0XSAqIDIgKiogMjQgK1xuICAgIHRoaXNbKytvZmZzZXRdICogMiAqKiAxNiArXG4gICAgdGhpc1srK29mZnNldF0gKiAyICoqIDggK1xuICAgIGxhc3QpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdExFID0gZnVuY3Rpb24gcmVhZEZsb2F0TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIHRydWUsIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnRMRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludExFID0gZnVuY3Rpb24gd3JpdGVVSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY29uc3QgbWF4Qnl0ZXMgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCkgLSAxXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbWF4Qnl0ZXMsIDApXG4gIH1cblxuICBsZXQgbXVsID0gMVxuICBsZXQgaSA9IDBcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdGhpc1tvZmZzZXQgKyBpXSA9ICh2YWx1ZSAvIG11bCkgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludEJFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjb25zdCBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIGxldCBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgbGV0IG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50OCA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiB3cml0ZVVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQxNkxFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVaW50MTZCRSA9XG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVWludDMyTEUgPVxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVpbnQzMkJFID1cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbmZ1bmN0aW9uIHdydEJpZ1VJbnQ2NExFIChidWYsIHZhbHVlLCBvZmZzZXQsIG1pbiwgbWF4KSB7XG4gIGNoZWNrSW50QkkodmFsdWUsIG1pbiwgbWF4LCBidWYsIG9mZnNldCwgNylcblxuICBsZXQgbG8gPSBOdW1iZXIodmFsdWUgJiBCaWdJbnQoMHhmZmZmZmZmZikpXG4gIGJ1ZltvZmZzZXQrK10gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0KytdID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBsb1xuICBsZXQgaGkgPSBOdW1iZXIodmFsdWUgPj4gQmlnSW50KDMyKSAmIEJpZ0ludCgweGZmZmZmZmZmKSlcbiAgYnVmW29mZnNldCsrXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0KytdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXQrK10gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCsrXSA9IGhpXG4gIHJldHVybiBvZmZzZXRcbn1cblxuZnVuY3Rpb24gd3J0QmlnVUludDY0QkUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbWluLCBtYXgpIHtcbiAgY2hlY2tJbnRCSSh2YWx1ZSwgbWluLCBtYXgsIGJ1Ziwgb2Zmc2V0LCA3KVxuXG4gIGxldCBsbyA9IE51bWJlcih2YWx1ZSAmIEJpZ0ludCgweGZmZmZmZmZmKSlcbiAgYnVmW29mZnNldCArIDddID0gbG9cbiAgbG8gPSBsbyA+PiA4XG4gIGJ1ZltvZmZzZXQgKyA2XSA9IGxvXG4gIGxvID0gbG8gPj4gOFxuICBidWZbb2Zmc2V0ICsgNV0gPSBsb1xuICBsbyA9IGxvID4+IDhcbiAgYnVmW29mZnNldCArIDRdID0gbG9cbiAgbGV0IGhpID0gTnVtYmVyKHZhbHVlID4+IEJpZ0ludCgzMikgJiBCaWdJbnQoMHhmZmZmZmZmZikpXG4gIGJ1ZltvZmZzZXQgKyAzXSA9IGhpXG4gIGhpID0gaGkgPj4gOFxuICBidWZbb2Zmc2V0ICsgMl0gPSBoaVxuICBoaSA9IGhpID4+IDhcbiAgYnVmW29mZnNldCArIDFdID0gaGlcbiAgaGkgPSBoaSA+PiA4XG4gIGJ1ZltvZmZzZXRdID0gaGlcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUJpZ1VJbnQ2NExFID0gZGVmaW5lQmlnSW50TWV0aG9kKGZ1bmN0aW9uIHdyaXRlQmlnVUludDY0TEUgKHZhbHVlLCBvZmZzZXQgPSAwKSB7XG4gIHJldHVybiB3cnRCaWdVSW50NjRMRSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBCaWdJbnQoMCksIEJpZ0ludCgnMHhmZmZmZmZmZmZmZmZmZmZmJykpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlQmlnVUludDY0QkUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gd3JpdGVCaWdVSW50NjRCRSAodmFsdWUsIG9mZnNldCA9IDApIHtcbiAgcmV0dXJuIHdydEJpZ1VJbnQ2NEJFKHRoaXMsIHZhbHVlLCBvZmZzZXQsIEJpZ0ludCgwKSwgQmlnSW50KCcweGZmZmZmZmZmZmZmZmZmZmYnKSlcbn0pXG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY29uc3QgbGltaXQgPSBNYXRoLnBvdygyLCAoOCAqIGJ5dGVMZW5ndGgpIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgbGV0IGkgPSAwXG4gIGxldCBtdWwgPSAxXG4gIGxldCBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY29uc3QgbGltaXQgPSBNYXRoLnBvdygyLCAoOCAqIGJ5dGVMZW5ndGgpIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgbGV0IGkgPSBieXRlTGVuZ3RoIC0gMVxuICBsZXQgbXVsID0gMVxuICBsZXQgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHg3ZiwgLTB4ODApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZUludDE2QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUJpZ0ludDY0TEUgPSBkZWZpbmVCaWdJbnRNZXRob2QoZnVuY3Rpb24gd3JpdGVCaWdJbnQ2NExFICh2YWx1ZSwgb2Zmc2V0ID0gMCkge1xuICByZXR1cm4gd3J0QmlnVUludDY0TEUodGhpcywgdmFsdWUsIG9mZnNldCwgLUJpZ0ludCgnMHg4MDAwMDAwMDAwMDAwMDAwJyksIEJpZ0ludCgnMHg3ZmZmZmZmZmZmZmZmZmZmJykpXG59KVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlQmlnSW50NjRCRSA9IGRlZmluZUJpZ0ludE1ldGhvZChmdW5jdGlvbiB3cml0ZUJpZ0ludDY0QkUgKHZhbHVlLCBvZmZzZXQgPSAwKSB7XG4gIHJldHVybiB3cnRCaWdVSW50NjRCRSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAtQmlnSW50KCcweDgwMDAwMDAwMDAwMDAwMDAnKSwgQmlnSW50KCcweDdmZmZmZmZmZmZmZmZmZmYnKSlcbn0pXG5cbmZ1bmN0aW9uIGNoZWNrSUVFRTc1NCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBleHQsIG1heCwgbWluKSB7XG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbiAgaWYgKG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxufVxuXG5mdW5jdGlvbiB3cml0ZUZsb2F0IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKHRhcmdldCkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHNob3VsZCBiZSBhIEJ1ZmZlcicpXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICBjb25zdCBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQgJiYgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBVc2UgYnVpbHQtaW4gd2hlbiBhdmFpbGFibGUsIG1pc3NpbmcgZnJvbSBJRTExXG4gICAgdGhpcy5jb3B5V2l0aGluKHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKVxuICB9IGVsc2Uge1xuICAgIFVpbnQ4QXJyYXkucHJvdG90eXBlLnNldC5jYWxsKFxuICAgICAgdGFyZ2V0LFxuICAgICAgdGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGNvZGUgPSB2YWwuY2hhckNvZGVBdCgwKVxuICAgICAgaWYgKChlbmNvZGluZyA9PT0gJ3V0ZjgnICYmIGNvZGUgPCAxMjgpIHx8XG4gICAgICAgICAgZW5jb2RpbmcgPT09ICdsYXRpbjEnKSB7XG4gICAgICAgIC8vIEZhc3QgcGF0aDogSWYgYHZhbGAgZml0cyBpbnRvIGEgc2luZ2xlIGJ5dGUsIHVzZSB0aGF0IG51bWVyaWMgdmFsdWUuXG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpIHtcbiAgICB2YWwgPSBOdW1iZXIodmFsKVxuICB9XG5cbiAgLy8gSW52YWxpZCByYW5nZXMgYXJlIG5vdCBzZXQgdG8gYSBkZWZhdWx0LCBzbyBjYW4gcmFuZ2UgY2hlY2sgZWFybHkuXG4gIGlmIChzdGFydCA8IDAgfHwgdGhpcy5sZW5ndGggPCBzdGFydCB8fCB0aGlzLmxlbmd0aCA8IGVuZCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdPdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBzdGFydCA9IHN0YXJ0ID4+PiAwXG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIXZhbCkgdmFsID0gMFxuXG4gIGxldCBpXG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIGZvciAoaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSB2YWxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgICBjb25zdCBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgdmFsdWUgXCInICsgdmFsICtcbiAgICAgICAgJ1wiIGlzIGludmFsaWQgZm9yIGFyZ3VtZW50IFwidmFsdWVcIicpXG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIENVU1RPTSBFUlJPUlNcbi8vID09PT09PT09PT09PT1cblxuLy8gU2ltcGxpZmllZCB2ZXJzaW9ucyBmcm9tIE5vZGUsIGNoYW5nZWQgZm9yIEJ1ZmZlci1vbmx5IHVzYWdlXG5jb25zdCBlcnJvcnMgPSB7fVxuZnVuY3Rpb24gRSAoc3ltLCBnZXRNZXNzYWdlLCBCYXNlKSB7XG4gIGVycm9yc1tzeW1dID0gY2xhc3MgTm9kZUVycm9yIGV4dGVuZHMgQmFzZSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgc3VwZXIoKVxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ21lc3NhZ2UnLCB7XG4gICAgICAgIHZhbHVlOiBnZXRNZXNzYWdlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH0pXG5cbiAgICAgIC8vIEFkZCB0aGUgZXJyb3IgY29kZSB0byB0aGUgbmFtZSB0byBpbmNsdWRlIGl0IGluIHRoZSBzdGFjayB0cmFjZS5cbiAgICAgIHRoaXMubmFtZSA9IGAke3RoaXMubmFtZX0gWyR7c3ltfV1gXG4gICAgICAvLyBBY2Nlc3MgdGhlIHN0YWNrIHRvIGdlbmVyYXRlIHRoZSBlcnJvciBtZXNzYWdlIGluY2x1ZGluZyB0aGUgZXJyb3IgY29kZVxuICAgICAgLy8gZnJvbSB0aGUgbmFtZS5cbiAgICAgIHRoaXMuc3RhY2sgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgIC8vIFJlc2V0IHRoZSBuYW1lIHRvIHRoZSBhY3R1YWwgbmFtZS5cbiAgICAgIGRlbGV0ZSB0aGlzLm5hbWVcbiAgICB9XG5cbiAgICBnZXQgY29kZSAoKSB7XG4gICAgICByZXR1cm4gc3ltXG4gICAgfVxuXG4gICAgc2V0IGNvZGUgKHZhbHVlKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvZGUnLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRvU3RyaW5nICgpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLm5hbWV9IFske3N5bX1dOiAke3RoaXMubWVzc2FnZX1gXG4gICAgfVxuICB9XG59XG5cbkUoJ0VSUl9CVUZGRVJfT1VUX09GX0JPVU5EUycsXG4gIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiBgJHtuYW1lfSBpcyBvdXRzaWRlIG9mIGJ1ZmZlciBib3VuZHNgXG4gICAgfVxuXG4gICAgcmV0dXJuICdBdHRlbXB0IHRvIGFjY2VzcyBtZW1vcnkgb3V0c2lkZSBidWZmZXIgYm91bmRzJ1xuICB9LCBSYW5nZUVycm9yKVxuRSgnRVJSX0lOVkFMSURfQVJHX1RZUEUnLFxuICBmdW5jdGlvbiAobmFtZSwgYWN0dWFsKSB7XG4gICAgcmV0dXJuIGBUaGUgXCIke25hbWV9XCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIG51bWJlci4gUmVjZWl2ZWQgdHlwZSAke3R5cGVvZiBhY3R1YWx9YFxuICB9LCBUeXBlRXJyb3IpXG5FKCdFUlJfT1VUX09GX1JBTkdFJyxcbiAgZnVuY3Rpb24gKHN0ciwgcmFuZ2UsIGlucHV0KSB7XG4gICAgbGV0IG1zZyA9IGBUaGUgdmFsdWUgb2YgXCIke3N0cn1cIiBpcyBvdXQgb2YgcmFuZ2UuYFxuICAgIGxldCByZWNlaXZlZCA9IGlucHV0XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoaW5wdXQpICYmIE1hdGguYWJzKGlucHV0KSA+IDIgKiogMzIpIHtcbiAgICAgIHJlY2VpdmVkID0gYWRkTnVtZXJpY2FsU2VwYXJhdG9yKFN0cmluZyhpbnB1dCkpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdiaWdpbnQnKSB7XG4gICAgICByZWNlaXZlZCA9IFN0cmluZyhpbnB1dClcbiAgICAgIGlmIChpbnB1dCA+IEJpZ0ludCgyKSAqKiBCaWdJbnQoMzIpIHx8IGlucHV0IDwgLShCaWdJbnQoMikgKiogQmlnSW50KDMyKSkpIHtcbiAgICAgICAgcmVjZWl2ZWQgPSBhZGROdW1lcmljYWxTZXBhcmF0b3IocmVjZWl2ZWQpXG4gICAgICB9XG4gICAgICByZWNlaXZlZCArPSAnbidcbiAgICB9XG4gICAgbXNnICs9IGAgSXQgbXVzdCBiZSAke3JhbmdlfS4gUmVjZWl2ZWQgJHtyZWNlaXZlZH1gXG4gICAgcmV0dXJuIG1zZ1xuICB9LCBSYW5nZUVycm9yKVxuXG5mdW5jdGlvbiBhZGROdW1lcmljYWxTZXBhcmF0b3IgKHZhbCkge1xuICBsZXQgcmVzID0gJydcbiAgbGV0IGkgPSB2YWwubGVuZ3RoXG4gIGNvbnN0IHN0YXJ0ID0gdmFsWzBdID09PSAnLScgPyAxIDogMFxuICBmb3IgKDsgaSA+PSBzdGFydCArIDQ7IGkgLT0gMykge1xuICAgIHJlcyA9IGBfJHt2YWwuc2xpY2UoaSAtIDMsIGkpfSR7cmVzfWBcbiAgfVxuICByZXR1cm4gYCR7dmFsLnNsaWNlKDAsIGkpfSR7cmVzfWBcbn1cblxuLy8gQ0hFQ0sgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gY2hlY2tCb3VuZHMgKGJ1Ziwgb2Zmc2V0LCBieXRlTGVuZ3RoKSB7XG4gIHZhbGlkYXRlTnVtYmVyKG9mZnNldCwgJ29mZnNldCcpXG4gIGlmIChidWZbb2Zmc2V0XSA9PT0gdW5kZWZpbmVkIHx8IGJ1ZltvZmZzZXQgKyBieXRlTGVuZ3RoXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYm91bmRzRXJyb3Iob2Zmc2V0LCBidWYubGVuZ3RoIC0gKGJ5dGVMZW5ndGggKyAxKSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0ludEJJICh2YWx1ZSwgbWluLCBtYXgsIGJ1Ziwgb2Zmc2V0LCBieXRlTGVuZ3RoKSB7XG4gIGlmICh2YWx1ZSA+IG1heCB8fCB2YWx1ZSA8IG1pbikge1xuICAgIGNvbnN0IG4gPSB0eXBlb2YgbWluID09PSAnYmlnaW50JyA/ICduJyA6ICcnXG4gICAgbGV0IHJhbmdlXG4gICAgaWYgKGJ5dGVMZW5ndGggPiAzKSB7XG4gICAgICBpZiAobWluID09PSAwIHx8IG1pbiA9PT0gQmlnSW50KDApKSB7XG4gICAgICAgIHJhbmdlID0gYD49IDAke259IGFuZCA8IDIke259ICoqICR7KGJ5dGVMZW5ndGggKyAxKSAqIDh9JHtufWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhbmdlID0gYD49IC0oMiR7bn0gKiogJHsoYnl0ZUxlbmd0aCArIDEpICogOCAtIDF9JHtufSkgYW5kIDwgMiAqKiBgICtcbiAgICAgICAgICAgICAgICBgJHsoYnl0ZUxlbmd0aCArIDEpICogOCAtIDF9JHtufWBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmFuZ2UgPSBgPj0gJHttaW59JHtufSBhbmQgPD0gJHttYXh9JHtufWBcbiAgICB9XG4gICAgdGhyb3cgbmV3IGVycm9ycy5FUlJfT1VUX09GX1JBTkdFKCd2YWx1ZScsIHJhbmdlLCB2YWx1ZSlcbiAgfVxuICBjaGVja0JvdW5kcyhidWYsIG9mZnNldCwgYnl0ZUxlbmd0aClcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVOdW1iZXIgKHZhbHVlLCBuYW1lKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IGVycm9ycy5FUlJfSU5WQUxJRF9BUkdfVFlQRShuYW1lLCAnbnVtYmVyJywgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gYm91bmRzRXJyb3IgKHZhbHVlLCBsZW5ndGgsIHR5cGUpIHtcbiAgaWYgKE1hdGguZmxvb3IodmFsdWUpICE9PSB2YWx1ZSkge1xuICAgIHZhbGlkYXRlTnVtYmVyKHZhbHVlLCB0eXBlKVxuICAgIHRocm93IG5ldyBlcnJvcnMuRVJSX09VVF9PRl9SQU5HRSh0eXBlIHx8ICdvZmZzZXQnLCAnYW4gaW50ZWdlcicsIHZhbHVlKVxuICB9XG5cbiAgaWYgKGxlbmd0aCA8IDApIHtcbiAgICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9CVUZGRVJfT1VUX09GX0JPVU5EUygpXG4gIH1cblxuICB0aHJvdyBuZXcgZXJyb3JzLkVSUl9PVVRfT0ZfUkFOR0UodHlwZSB8fCAnb2Zmc2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGA+PSAke3R5cGUgPyAxIDogMH0gYW5kIDw9ICR7bGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSlcbn1cblxuLy8gSEVMUEVSIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PVxuXG5jb25zdCBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXisvMC05QS1aYS16LV9dL2dcblxuZnVuY3Rpb24gYmFzZTY0Y2xlYW4gKHN0cikge1xuICAvLyBOb2RlIHRha2VzIGVxdWFsIHNpZ25zIGFzIGVuZCBvZiB0aGUgQmFzZTY0IGVuY29kaW5nXG4gIHN0ciA9IHN0ci5zcGxpdCgnPScpWzBdXG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHIudHJpbSgpLnJlcGxhY2UoSU5WQUxJRF9CQVNFNjRfUkUsICcnKVxuICAvLyBOb2RlIGNvbnZlcnRzIHN0cmluZ3Mgd2l0aCBsZW5ndGggPCAyIHRvICcnXG4gIGlmIChzdHIubGVuZ3RoIDwgMikgcmV0dXJuICcnXG4gIC8vIE5vZGUgYWxsb3dzIGZvciBub24tcGFkZGVkIGJhc2U2NCBzdHJpbmdzIChtaXNzaW5nIHRyYWlsaW5nID09PSksIGJhc2U2NC1qcyBkb2VzIG5vdFxuICB3aGlsZSAoc3RyLmxlbmd0aCAlIDQgIT09IDApIHtcbiAgICBzdHIgPSBzdHIgKyAnPSdcbiAgfVxuICByZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgbGV0IGNvZGVQb2ludFxuICBjb25zdCBsZW5ndGggPSBzdHJpbmcubGVuZ3RoXG4gIGxldCBsZWFkU3Vycm9nYXRlID0gbnVsbFxuICBjb25zdCBieXRlcyA9IFtdXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIGNvbnN0IGJ5dGVBcnJheSA9IFtdXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgbGV0IGMsIGhpLCBsb1xuICBjb25zdCBieXRlQXJyYXkgPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuXG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoYmFzZTY0Y2xlYW4oc3RyKSlcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIGxldCBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG4vLyBBcnJheUJ1ZmZlciBvciBVaW50OEFycmF5IG9iamVjdHMgZnJvbSBvdGhlciBjb250ZXh0cyAoaS5lLiBpZnJhbWVzKSBkbyBub3QgcGFzc1xuLy8gdGhlIGBpbnN0YW5jZW9mYCBjaGVjayBidXQgdGhleSBzaG91bGQgYmUgdHJlYXRlZCBhcyBvZiB0aGF0IHR5cGUuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL2lzc3Vlcy8xNjZcbmZ1bmN0aW9uIGlzSW5zdGFuY2UgKG9iaiwgdHlwZSkge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgdHlwZSB8fFxuICAgIChvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IubmFtZSAhPSBudWxsICYmXG4gICAgICBvYmouY29uc3RydWN0b3IubmFtZSA9PT0gdHlwZS5uYW1lKVxufVxuZnVuY3Rpb24gbnVtYmVySXNOYU4gKG9iaikge1xuICAvLyBGb3IgSUUxMSBzdXBwb3J0XG4gIHJldHVybiBvYmogIT09IG9iaiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuXG4vLyBDcmVhdGUgbG9va3VwIHRhYmxlIGZvciBgdG9TdHJpbmcoJ2hleCcpYFxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9pc3N1ZXMvMjE5XG5jb25zdCBoZXhTbGljZUxvb2t1cFRhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYWxwaGFiZXQgPSAnMDEyMzQ1Njc4OWFiY2RlZidcbiAgY29uc3QgdGFibGUgPSBuZXcgQXJyYXkoMjU2KVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICBjb25zdCBpMTYgPSBpICogMTZcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE2OyArK2opIHtcbiAgICAgIHRhYmxlW2kxNiArIGpdID0gYWxwaGFiZXRbaV0gKyBhbHBoYWJldFtqXVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFibGVcbn0pKClcblxuLy8gUmV0dXJuIG5vdCBmdW5jdGlvbiB3aXRoIEVycm9yIGlmIEJpZ0ludCBub3Qgc3VwcG9ydGVkXG5mdW5jdGlvbiBkZWZpbmVCaWdJbnRNZXRob2QgKGZuKSB7XG4gIHJldHVybiB0eXBlb2YgQmlnSW50ID09PSAndW5kZWZpbmVkJyA/IEJ1ZmZlckJpZ0ludE5vdERlZmluZWQgOiBmblxufVxuXG5mdW5jdGlvbiBCdWZmZXJCaWdJbnROb3REZWZpbmVkICgpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdCaWdJbnQgbm90IHN1cHBvcnRlZCcpXG59XG4iLCIvKiEgaWVlZTc1NC4gQlNELTMtQ2xhdXNlIExpY2Vuc2UuIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZy9vcGVuc291cmNlPiAqL1xuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24gKGJ1ZmZlciwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG1cbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSAoZSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBtID0gZSAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBlID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBtTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IG0gPSAobSAqIDI1NikgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCkge31cblxuICBpZiAoZSA9PT0gMCkge1xuICAgIGUgPSAxIC0gZUJpYXNcbiAgfSBlbHNlIGlmIChlID09PSBlTWF4KSB7XG4gICAgcmV0dXJuIG0gPyBOYU4gOiAoKHMgPyAtMSA6IDEpICogSW5maW5pdHkpXG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKVxuICAgIGUgPSBlIC0gZUJpYXNcbiAgfVxuICByZXR1cm4gKHMgPyAtMSA6IDEpICogbSAqIE1hdGgucG93KDIsIGUgLSBtTGVuKVxufVxuXG5leHBvcnRzLndyaXRlID0gZnVuY3Rpb24gKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICgodmFsdWUgKiBjKSAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSBlICsgZUJpYXNcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gMFxuICAgIH1cbiAgfVxuXG4gIGZvciAoOyBtTGVuID49IDg7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IG0gJiAweGZmLCBpICs9IGQsIG0gLz0gMjU2LCBtTGVuIC09IDgpIHt9XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbVxuICBlTGVuICs9IG1MZW5cbiAgZm9yICg7IGVMZW4gPiAwOyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBlICYgMHhmZiwgaSArPSBkLCBlIC89IDI1NiwgZUxlbiAtPSA4KSB7fVxuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyOFxufVxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sLCBJdGVyYXRvciAqL1xuXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcbiAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcbiAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcbiAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcbiAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn1cblxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xuICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xuICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHQ7XG4gIH1cbiAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xuICB2YXIgdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgIHRbcF0gPSBzW3BdO1xuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgIH1cbiAgcmV0dXJuIHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXNEZWNvcmF0ZShjdG9yLCBkZXNjcmlwdG9ySW4sIGRlY29yYXRvcnMsIGNvbnRleHRJbiwgaW5pdGlhbGl6ZXJzLCBleHRyYUluaXRpYWxpemVycykge1xuICBmdW5jdGlvbiBhY2NlcHQoZikgeyBpZiAoZiAhPT0gdm9pZCAwICYmIHR5cGVvZiBmICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGdW5jdGlvbiBleHBlY3RlZFwiKTsgcmV0dXJuIGY7IH1cbiAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcbiAgdmFyIHRhcmdldCA9ICFkZXNjcmlwdG9ySW4gJiYgY3RvciA/IGNvbnRleHRJbltcInN0YXRpY1wiXSA/IGN0b3IgOiBjdG9yLnByb3RvdHlwZSA6IG51bGw7XG4gIHZhciBkZXNjcmlwdG9yID0gZGVzY3JpcHRvckluIHx8ICh0YXJnZXQgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgY29udGV4dEluLm5hbWUpIDoge30pO1xuICB2YXIgXywgZG9uZSA9IGZhbHNlO1xuICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB7fTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xuICAgICAgZm9yICh2YXIgcCBpbiBjb250ZXh0SW4uYWNjZXNzKSBjb250ZXh0LmFjY2Vzc1twXSA9IGNvbnRleHRJbi5hY2Nlc3NbcF07XG4gICAgICBjb250ZXh0LmFkZEluaXRpYWxpemVyID0gZnVuY3Rpb24gKGYpIHsgaWYgKGRvbmUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgYWRkIGluaXRpYWxpemVycyBhZnRlciBkZWNvcmF0aW9uIGhhcyBjb21wbGV0ZWRcIik7IGV4dHJhSW5pdGlhbGl6ZXJzLnB1c2goYWNjZXB0KGYgfHwgbnVsbCkpOyB9O1xuICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XG4gICAgICBpZiAoa2luZCA9PT0gXCJhY2Nlc3NvclwiKSB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdm9pZCAwKSBjb250aW51ZTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LmdldCkpIGRlc2NyaXB0b3IuZ2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuc2V0KSkgZGVzY3JpcHRvci5zZXQgPSBfO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChfID0gYWNjZXB0KHJlc3VsdCkpIHtcbiAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcbiAgICAgICAgICBlbHNlIGRlc2NyaXB0b3Jba2V5XSA9IF87XG4gICAgICB9XG4gIH1cbiAgaWYgKHRhcmdldCkgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29udGV4dEluLm5hbWUsIGRlc2NyaXB0b3IpO1xuICBkb25lID0gdHJ1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3J1bkluaXRpYWxpemVycyh0aGlzQXJnLCBpbml0aWFsaXplcnMsIHZhbHVlKSB7XG4gIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGluaXRpYWxpemVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSB1c2VWYWx1ZSA/IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcsIHZhbHVlKSA6IGluaXRpYWxpemVyc1tpXS5jYWxsKHRoaXNBcmcpO1xuICB9XG4gIHJldHVybiB1c2VWYWx1ZSA/IHZhbHVlIDogdm9pZCAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fcHJvcEtleSh4KSB7XG4gIHJldHVybiB0eXBlb2YgeCA9PT0gXCJzeW1ib2xcIiA/IHggOiBcIlwiLmNvbmNhdCh4KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NldEZ1bmN0aW9uTmFtZShmLCBuYW1lLCBwcmVmaXgpIHtcbiAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGYsIFwibmFtZVwiLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHByZWZpeCA/IFwiXCIuY29uY2F0KHByZWZpeCwgXCIgXCIsIG5hbWUpIDogbmFtZSB9KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XG4gIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGcgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEl0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpO1xuICByZXR1cm4gZy5uZXh0ID0gdmVyYigwKSwgZ1tcInRocm93XCJdID0gdmVyYigxKSwgZ1tcInJldHVyblwiXSA9IHZlcmIoMiksIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBBc3luY0l0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBBc3luY0l0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpLCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIsIGF3YWl0UmV0dXJuKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiBhd2FpdFJldHVybihmKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZiwgcmVqZWN0KTsgfTsgfVxuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKGdbbl0pIHsgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgaWYgKGYpIGlbbl0gPSBmKGlbbl0pOyB9IH1cbiAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxuICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cbiAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxuICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xuICB2YXIgaSwgcDtcbiAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcbiAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogZmFsc2UgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xuICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cbiAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcbiAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cbiAgcmV0dXJuIGNvb2tlZDtcbn07XG5cbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xufSkgOiBmdW5jdGlvbihvLCB2KSB7XG4gIG9bXCJkZWZhdWx0XCJdID0gdjtcbn07XG5cbnZhciBvd25LZXlzID0gZnVuY3Rpb24obykge1xuICBvd25LZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gKG8pIHtcbiAgICB2YXIgYXIgPSBbXTtcbiAgICBmb3IgKHZhciBrIGluIG8pIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgaykpIGFyW2FyLmxlbmd0aF0gPSBrO1xuICAgIHJldHVybiBhcjtcbiAgfTtcbiAgcmV0dXJuIG93bktleXMobyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xuICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayA9IG93bktleXMobW9kKSwgaSA9IDA7IGkgPCBrLmxlbmd0aDsgaSsrKSBpZiAoa1tpXSAhPT0gXCJkZWZhdWx0XCIpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwga1tpXSk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlLCBpbm5lcjtcbiAgICBpZiAoYXN5bmMpIHtcbiAgICAgIGlmICghU3ltYm9sLmFzeW5jRGlzcG9zZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0Rpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpZiAoIVN5bWJvbC5kaXNwb3NlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmRpc3Bvc2UgaXMgbm90IGRlZmluZWQuXCIpO1xuICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5kaXNwb3NlXTtcbiAgICAgIGlmIChhc3luYykgaW5uZXIgPSBkaXNwb3NlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XG4gICAgaWYgKGlubmVyKSBkaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRyeSB7IGlubmVyLmNhbGwodGhpcyk7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpOyB9IH07XG4gICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcbiAgfVxuICBlbHNlIGlmIChhc3luYykge1xuICAgIGVudi5zdGFjay5wdXNoKHsgYXN5bmM6IHRydWUgfSk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG52YXIgX1N1cHByZXNzZWRFcnJvciA9IHR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xuICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2Rpc3Bvc2VSZXNvdXJjZXMoZW52KSB7XG4gIGZ1bmN0aW9uIGZhaWwoZSkge1xuICAgIGVudi5lcnJvciA9IGVudi5oYXNFcnJvciA/IG5ldyBfU3VwcHJlc3NlZEVycm9yKGUsIGVudi5lcnJvciwgXCJBbiBlcnJvciB3YXMgc3VwcHJlc3NlZCBkdXJpbmcgZGlzcG9zYWwuXCIpIDogZTtcbiAgICBlbnYuaGFzRXJyb3IgPSB0cnVlO1xuICB9XG4gIHZhciByLCBzID0gMDtcbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAociA9IGVudi5zdGFjay5wb3AoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFyLmFzeW5jICYmIHMgPT09IDEpIHJldHVybiBzID0gMCwgZW52LnN0YWNrLnB1c2gociksIFByb21pc2UucmVzb2x2ZSgpLnRoZW4obmV4dCk7XG4gICAgICAgIGlmIChyLmRpc3Bvc2UpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gci5kaXNwb3NlLmNhbGwoci52YWx1ZSk7XG4gICAgICAgICAgaWYgKHIuYXN5bmMpIHJldHVybiBzIHw9IDIsIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHMgfD0gMTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzID09PSAxKSByZXR1cm4gZW52Lmhhc0Vycm9yID8gUHJvbWlzZS5yZWplY3QoZW52LmVycm9yKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXdyaXRlUmVsYXRpdmVJbXBvcnRFeHRlbnNpb24ocGF0aCwgcHJlc2VydmVKc3gpIHtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiICYmIC9eXFwuXFwuP1xcLy8udGVzdChwYXRoKSkge1xuICAgICAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwuKHRzeCkkfCgoPzpcXC5kKT8pKCg/OlxcLlteLi9dKz8pPylcXC4oW2NtXT8pdHMkL2ksIGZ1bmN0aW9uIChtLCB0c3gsIGQsIGV4dCwgY20pIHtcbiAgICAgICAgICByZXR1cm4gdHN4ID8gcHJlc2VydmVKc3ggPyBcIi5qc3hcIiA6IFwiLmpzXCIgOiBkICYmICghZXh0IHx8ICFjbSkgPyBtIDogKGQgKyBleHQgKyBcIi5cIiArIGNtLnRvTG93ZXJDYXNlKCkgKyBcImpzXCIpO1xuICAgICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhdGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgX19leHRlbmRzLFxuICBfX2Fzc2lnbixcbiAgX19yZXN0LFxuICBfX2RlY29yYXRlLFxuICBfX3BhcmFtLFxuICBfX2VzRGVjb3JhdGUsXG4gIF9fcnVuSW5pdGlhbGl6ZXJzLFxuICBfX3Byb3BLZXksXG4gIF9fc2V0RnVuY3Rpb25OYW1lLFxuICBfX21ldGFkYXRhLFxuICBfX2F3YWl0ZXIsXG4gIF9fZ2VuZXJhdG9yLFxuICBfX2NyZWF0ZUJpbmRpbmcsXG4gIF9fZXhwb3J0U3RhcixcbiAgX192YWx1ZXMsXG4gIF9fcmVhZCxcbiAgX19zcHJlYWQsXG4gIF9fc3ByZWFkQXJyYXlzLFxuICBfX3NwcmVhZEFycmF5LFxuICBfX2F3YWl0LFxuICBfX2FzeW5jR2VuZXJhdG9yLFxuICBfX2FzeW5jRGVsZWdhdG9yLFxuICBfX2FzeW5jVmFsdWVzLFxuICBfX21ha2VUZW1wbGF0ZU9iamVjdCxcbiAgX19pbXBvcnRTdGFyLFxuICBfX2ltcG9ydERlZmF1bHQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRTZXQsXG4gIF9fY2xhc3NQcml2YXRlRmllbGRJbixcbiAgX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXG4gIF9fZGlzcG9zZVJlc291cmNlcyxcbiAgX19yZXdyaXRlUmVsYXRpdmVJbXBvcnRFeHRlbnNpb24sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBiYWNrZ3JvdW5kLmpzXG5cbi8vIC0tLSBBV1MgU0RLIEltcG9ydHMgLS0tXG4vLyBUaGVzZSBpbXBvcnRzIGFyZSBuZWNlc3NhcnkgZm9yIFNpZ1Y0IHNpZ25pbmcsIEV2ZW50IFN0cmVhbSBtYXJzaGFsbGluZy91bm1hcnNoYWxsaW5nLFxuLy8gYW5kIHRoZSBUcmFuc2xhdGUgQ2xpZW50LiBFbnN1cmUgeW91ciBidW5kbGVyIChXZWJwYWNrKSByZXNvbHZlcyB0aGVzZSBjb3JyZWN0bHkuXG5pbXBvcnQgeyBUcmFuc2NyaWJlU3RyZWFtaW5nQ2xpZW50IH0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC10cmFuc2NyaWJlXCI7IC8vIEtlZXAgZm9yIHBvdGVudGlhbCB0eXBlIGhpbnRzIG9yIGZ1dHVyZSB1c2VcbmltcG9ydCB7IFRyYW5zbGF0ZUNsaWVudCwgVHJhbnNsYXRlVGV4dENvbW1hbmQgfSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LXRyYW5zbGF0ZVwiO1xuaW1wb3J0IHsgU2lnbmF0dXJlVjQgfSBmcm9tIFwiQGF3cy1zZGsvc2lnbmF0dXJlLXY0XCI7XG5pbXBvcnQgeyBTaGEyNTYgfSBmcm9tIFwiQGF3cy1jcnlwdG8vc2hhMjU2LWpzXCI7XG5pbXBvcnQgeyBwYXJzZVVybCB9IGZyb20gXCJAYXdzLXNkay91cmwtcGFyc2VyXCI7XG5pbXBvcnQgeyBidWlsZEh0dHBSZXF1ZXN0LCBIdHRwUmVxdWVzdCB9IGZyb20gXCJAYXdzLXNkay9wcm90b2NvbC1odHRwXCI7XG5pbXBvcnQgeyBFdmVudFN0cmVhbU1hcnNoYWxsZXIgfSBmcm9tIFwiQGF3cy1zZGsvZXZlbnRzdHJlYW0tbWFyc2hhbGxlclwiO1xuaW1wb3J0IHsgZnJvbVV0ZjgsIHRvVXRmOCB9IGZyb20gXCJAYXdzLXNkay91dGlsLXV0Zjgtbm9kZVwiOyAvLyBQcm92aWRlZCBieSBwb2x5ZmlsbC9idW5kbGVyXG5cbmNvbnNvbGUubG9nKFwiQmFja2dyb3VuZCBzZXJ2aWNlIHdvcmtlciBzdGFydGluZy4uLlwiKTtcblxuLy8gLS0tIFN0YXRlIC0tLVxubGV0IGlzUnVubmluZyA9IGZhbHNlO1xubGV0IGF3c0NvbmZpZyA9IG51bGw7XG5sZXQgdHJhbnNjcmliZVdlYlNvY2tldCA9IG51bGw7XG5sZXQgdHJhbnNsYXRlQ2xpZW50ID0gbnVsbDsgLy8gQVdTIFRyYW5zbGF0ZSBDbGllbnQgaW5zdGFuY2VcbmxldCBjdXJyZW50VGFiSWQgPSBudWxsOyAvLyBLZWVwIHRyYWNrIG9mIHRoZSB0YWIgd2hlcmUgcHJvY2Vzc2luZyBpcyBhY3RpdmVcblxuLy8gLS0tIENvbmZpZ3VyYXRpb24gLS0tXG5jb25zdCBUUkFOU0NSSUJFX0xBTkdVQUdFX0NPREUgPSBcImphLUpQXCI7IC8vIEphcGFuZXNlIGZvciBTVFRcbmNvbnN0IFRSQU5TTEFURV9TT1VSQ0VfTEFOR1VBR0UgPSBcImphXCI7IC8vIEphcGFuZXNlIGZvciBUcmFuc2xhdGVcbmNvbnN0IFRSQU5TTEFURV9UQVJHRVRfTEFOR1VBR0UgPSBcInpoXCI7IC8vIENoaW5lc2UgZm9yIFRyYW5zbGF0ZVxuLy8gSU1QT1JUQU5UOiBTYW1wbGUgcmF0ZSBNVVNUIG1hdGNoIHRoZSBzYW1wbGUgcmF0ZSBvZiB0aGUgYXVkaW8gY2h1bmtzIHJlY2VpdmVkIGZyb20gY29udGVudC5qc1xuLy8gSWYgY29udGVudC5qcyBjYXB0dXJlcyBhdCA0NDEwMEh6IGFuZCBkb2Vzbid0IHJlc2FtcGxlLCB5b3UgbXVzdCBzZXQgdGhpcyB0byA0NDEwMC5cbi8vIElmIGNvbnRlbnQuanMgcmVzYW1wbGVzIHRvIDE2MDAwSHosIHNldCB0aGlzIHRvIDE2MDAwLlxuY29uc3QgQVVESU9fQ0hVTktfU0FNUExFX1JBVEUgPSAxNjAwMDsgLy8gQXNzdW1pbmcgY29udGVudC5qcyByZXNhbXBsZXMgb3IgY2FwdHVyZXMgYXQgdGhpcyByYXRlXG5jb25zdCBUUkFOU0NSSUJFX1NFUlZJQ0VfTkFNRSA9ICd0cmFuc2NyaWJlJzsgLy8gQVdTIHNlcnZpY2UgbmFtZSBmb3IgVHJhbnNjcmliZVxuXG4vLyAtLS0gSGVscGVyOiBHZXQgQVdTIENyZWRlbnRpYWxzIChTYW1lIGFzIGJlZm9yZSkgLS0tXG5hc3luYyBmdW5jdGlvbiBnZXRBd3NDcmVkZW50aWFscygpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChbJ2F3c0FjY2Vzc0tleUlkJywgJ2F3c1NlY3JldEFjY2Vzc0tleScsICdhd3NSZWdpb24nXSwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgaWYgKGRhdGEuYXdzQWNjZXNzS2V5SWQgJiYgZGF0YS5hd3NTZWNyZXRBY2Nlc3NLZXkgJiYgZGF0YS5hd3NSZWdpb24pIHtcbiAgICAgICAgYXdzQ29uZmlnID0ge1xuICAgICAgICAgIGFjY2Vzc0tleUlkOiBkYXRhLmF3c0FjY2Vzc0tleUlkLFxuICAgICAgICAgIHNlY3JldEFjY2Vzc0tleTogZGF0YS5hd3NTZWNyZXRBY2Nlc3NLZXksXG4gICAgICAgICAgcmVnaW9uOiBkYXRhLmF3c1JlZ2lvblxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFXUyBDcmVkZW50aWFscyBsb2FkZWQgZnJvbSBzdG9yYWdlLlwiKTtcbiAgICAgICAgcmVzb2x2ZShhd3NDb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiQVdTIENyZWRlbnRpYWxzIG5vdCBmb3VuZCBpbiBzdG9yYWdlLlwiKTtcbiAgICAgICAgcmVqZWN0KFwiQ3JlZGVudGlhbHMgbm90IGNvbmZpZ3VyZWRcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyAtLS0gQVdTIFRyYW5zY3JpYmUgUmVhbC10aW1lIFdlYlNvY2tldCBMb2dpYyAtLS1cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0VHJhbnNjcmliZVdlYlNvY2tldChjb25maWcpIHtcbiAgY29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIGNvbm5lY3QgdG8gQVdTIFRyYW5zY3JpYmUuLi5cIik7XG5cbiAgY29uc3QgZW5kcG9pbnQgPSBgd3NzOi8vdHJhbnNjcmliZXN0cmVhbWluZy4ke2NvbmZpZy5yZWdpb259LmFtYXpvbmF3cy5jb206ODQ0M2A7XG4gIGNvbnN0IHVybCA9IHBhcnNlVXJsKGVuZHBvaW50KTsgLy8gVXNlIHBhcnNlVXJsIGZyb20gU0RLXG5cbiAgLy8gLS0tIFNpZ1Y0IFNpZ25pbmcgSW1wbGVtZW50YXRpb24gKFRhc2sgMS4yKSAtLS1cbiAgLy8gMS4gQ3JlYXRlIGEgc2lnbmVyIGluc3RhbmNlXG4gIGNvbnN0IHNpZ25lciA9IG5ldyBTaWduYXR1cmVWNCh7XG4gICAgY3JlZGVudGlhbHM6IHsgLy8gUHJvdmlkZSBBV1MgY3JlZGVudGlhbHNcbiAgICAgICAgYWNjZXNzS2V5SWQ6IGNvbmZpZy5hY2Nlc3NLZXlJZCxcbiAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBjb25maWcuc2VjcmV0QWNjZXNzS2V5LFxuICAgICAgICAvLyBzZXNzaW9uVG9rZW46IGNvbmZpZy5zZXNzaW9uVG9rZW4sIC8vIEluY2x1ZGUgaWYgdXNpbmcgdGVtcG9yYXJ5IGNyZWRlbnRpYWxzXG4gICAgfSxcbiAgICByZWdpb246IGNvbmZpZy5yZWdpb24sIC8vIEFXUyByZWdpb25cbiAgICBzZXJ2aWNlOiBUUkFOU0NSSUJFX1NFUlZJQ0VfTkFNRSwgLy8gU2VydmljZSBuYW1lXG4gICAgc2hhMjU2OiBTaGEyNTYsIC8vIEhhc2hpbmcgZnVuY3Rpb24gKFJlcXVpcmVzIEBhd3MtY3J5cHRvL3NoYTI1Ni1qcylcbiAgfSk7XG5cbiAgLy8gMi4gQ3JlYXRlIGFuIEh0dHBSZXF1ZXN0IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIFdlYlNvY2tldCBoYW5kc2hha2UgR0VUIHJlcXVlc3RcbiAgLy8gVGhlc2UgcGFyYW1ldGVycyBhcmUgcmVxdWlyZWQgYnkgdGhlIFRyYW5zY3JpYmUgc3RyZWFtaW5nIEFQSS5cbiAgY29uc3QgcmVxdWVzdCA9IG5ldyBIdHRwUmVxdWVzdCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLCAvLyBXZWJTb2NrZXQgaGFuZHNoYWtlIHN0YXJ0cyB3aXRoIGEgR0VUIHJlcXVlc3RcbiAgICAgIGhvc3RuYW1lOiB1cmwuaG9zdG5hbWUsXG4gICAgICBwYXRoOiB1cmwucGF0aG5hbWUsXG4gICAgICBxdWVyeTogeyAvLyBRdWVyeSBwYXJhbWV0ZXJzIHJlcXVpcmVkIGJ5IFRyYW5zY3JpYmUgc3RyZWFtaW5nIEFQSVxuICAgICAgICAgICdsYW5ndWFnZS1jb2RlJzogVFJBTlNDUklCRV9MQU5HVUFHRV9DT0RFLFxuICAgICAgICAgICdtZWRpYS1lbmNvZGluZyc6ICdwY20nLCAvLyBNdXN0IG1hdGNoIHRoZSBmb3JtYXQgb2YgdGhlIGF1ZGlvIGNodW5rcyBzZW50ICgxNi1iaXQgUENNKVxuICAgICAgICAgICdzYW1wbGUtcmF0ZSc6IEFVRElPX0NIVU5LX1NBTVBMRV9SQVRFLnRvU3RyaW5nKCksIC8vIE11c3QgbWF0Y2ggdGhlIHNhbXBsZSByYXRlIG9mIHRoZSBhdWRpbyBjaHVua3NcbiAgICAgICAgICAvLyBBZGQgb3RoZXIgb3B0aW9uYWwgcGFyYW1ldGVycyBoZXJlIGlmIG5lZWRlZCwgZS5nLjpcbiAgICAgICAgICAvLyAnc2hvdy1zcGVha2VyLWxhYmVsJzogJ3RydWUnLFxuICAgICAgICAgIC8vICdlbmFibGUtcGFydGlhbC1yZXN1bHRzLXN0YWJpbGl6YXRpb24nOiAndHJ1ZScsXG4gICAgICAgICAgLy8gJ3BhcnRpYWwtcmVzdWx0cy1zdGFiaWxpdHknOiAnaGlnaCcsIC8vICdsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXG4gICAgICAgICAgLy8gJ3ZvY2FidWxhcnktbmFtZSc6ICdZb3VyVm9jYWJ1bGFyeU5hbWUnLFxuICAgICAgfSxcbiAgICAgIHByb3RvY29sOiB1cmwucHJvdG9jb2wsXG4gICAgICAvLyBoZWFkZXJzOiB7IEhvc3Q6IHVybC5ob3N0bmFtZSB9LCAvLyBIb3N0IGhlYWRlciBpcyB1c3VhbGx5IGFkZGVkIGJ5IGJ1aWxkSHR0cFJlcXVlc3QsIGJ1dCBTaWdWNCBtaWdodCBuZWVkIGl0IGV4cGxpY2l0bHlcbiAgfSk7XG5cbiAgLy8gMy4gU2lnbiB0aGUgcmVxdWVzdFxuICAvLyBUaGUgc2lnbmluZyBwcm9jZXNzIGFkZHMgQXV0aG9yaXphdGlvbiwgeC1hbXotZGF0ZSwgZXRjLiBoZWFkZXJzXG4gIC8vIGV4cGlyZXNJbiBpcyBpbiBzZWNvbmRzIChlLmcuLCAzMDBzID0gNSBtaW51dGVzKS4gTWF4IGlzIDcgZGF5cyAoNjA0ODAwIHNlY29uZHMpLlxuICBjb25zdCBzaWduZWRSZXF1ZXN0ID0gYXdhaXQgc2lnbmVyLnNpZ24ocmVxdWVzdCwgeyBzaWduaW5nRGF0ZTogbmV3IERhdGUoKSwgZXhwaXJlc0luOiAzMDAgfSk7XG5cbiAgLy8gNC4gQnVpbGQgdGhlIGZpbmFsIFdlYlNvY2tldCBVUkxcbiAgLy8gVGhlIHNpZ25lZCBoZWFkZXJzIG5lZWQgdG8gYmUgdHJhbnNmZXJyZWQgdG8gcXVlcnkgcGFyYW1ldGVycyBmb3IgdGhlIFdlYlNvY2tldCBoYW5kc2hha2UuXG4gIC8vIENvbWJpbmUgb3JpZ2luYWwgcXVlcnkgcGFyYW1ldGVycyBhbmQgc2lnbmVkIGhlYWRlcnMuXG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2lnbmVkUmVxdWVzdC5xdWVyeSk7IC8vIFN0YXJ0IHdpdGggb3JpZ2luYWwgcXVlcnkgcGFyYW1zXG4gIE9iamVjdC5lbnRyaWVzKHNpZ25lZFJlcXVlc3QuaGVhZGVycykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgLy8gQWRkIHJlbGV2YW50IHNpZ25lZCBoZWFkZXJzIGFzIHF1ZXJ5IHBhcmFtZXRlcnMuXG4gICAgICAgLy8gU2lnVjQgcmVxdWlyZXMgQXV0aG9yaXphdGlvbiwgeC1hbXotZGF0ZSwgYW5kIHBvdGVudGlhbGx5IHgtYW16LXNlY3VyaXR5LXRva2VuLlxuICAgICAgIGlmIChrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2F1dGhvcml6YXRpb24nIHx8IGtleS50b0xvd2VyQ2FzZSgpID09PSAneC1hbXotZGF0ZScgfHwga2V5LnRvTG93ZXJDYXNlKCkgPT09ICd4LWFtei1zZWN1cml0eS10b2tlbicpIHtcbiAgICAgICAgICAgcGFyYW1zLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICB9XG4gIH0pO1xuXG4gIC8vIENvbnN0cnVjdCB0aGUgZmluYWwgV2ViU29ja2V0IFVSTFxuICBjb25zdCBzaWduZWRVcmwgPSBgd3NzOi8vJHtzaWduZWRSZXF1ZXN0Lmhvc3RuYW1lfSR7c2lnbmVkUmVxdWVzdC5wYXRofT8ke3BhcmFtcy50b1N0cmluZygpfWA7XG5cbiAgY29uc29sZS5sb2coXCJTaWduZWQgV2ViU29ja2V0IFVSTCBjb25zdHJ1Y3RlZC5cIik7XG4gIC8vIGNvbnNvbGUubG9nKFwiRnVsbCBTaWduZWQgVVJMIChmb3IgZGVidWdnaW5nKTpcIiwgc2lnbmVkVXJsKTsgLy8gQmUgY2F1dGlvdXMgbG9nZ2luZyBjcmVkZW50aWFscy9zaWduZWQgaW5mb1xuXG4gIC8vIDUuIENyZWF0ZSB0aGUgV2ViU29ja2V0IGluc3RhbmNlIHVzaW5nIHRoZSBzaWduZWQgVVJMXG4gIHRyYW5zY3JpYmVXZWJTb2NrZXQgPSBuZXcgV2ViU29ja2V0KHNpZ25lZFVybCk7XG5cbiAgLy8gLS0tIEVuZCBTaWdWNCBTaWduaW5nIEltcGxlbWVudGF0aW9uIC0tLVxuXG5cbiAgLy8gRXZlbnQgU3RyZWFtIE1hcnNoYWxsZXIgKFRhc2sgMS4zLzEuNClcbiAgLy8gY29uc3QgZXZlbnRNYXJzaGFsbGVyID0gbmV3IEV2ZW50U3RyZWFtTWFyc2hhbGxlcih0b1V0ZjgsIGZyb21VdGY4KTsgLy8gUmVxdWlyZXMgQGF3cy1zZGsvZXZlbnRzdHJlYW0tbWFyc2hhbGxlciwgdXRpbC11dGY4LW5vZGVcblxuICB0cmFuc2NyaWJlV2ViU29ja2V0Lm9ub3BlbiA9IChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiVHJhbnNjcmliZSBXZWJTb2NrZXQgb3BlbmVkIHN1Y2Nlc3NmdWxseS5cIik7XG4gICAgLy8gU2VuZCBpbml0aWFsIHNldHRpbmdzIG1lc3NhZ2UgKHJlcXVpcmVkIGJ5IFRyYW5zY3JpYmUgZXZlbnQgc3RyZWFtIHByb3RvY29sKVxuICAgIC8vIFRoaXMgbWVzc2FnZSBmb3JtYXQgaXMgc3BlY2lmaWMgdG8gVHJhbnNjcmliZSBldmVudCBzdHJlYW0uXG4gICAgLy8gSXQgY29uZmlybXMgY29uZmlndXJhdGlvbiBsaWtlIGxhbmd1YWdlLCBlbmNvZGluZywgc2FtcGxlIHJhdGUuXG4gICAgLy8gRXhhbXBsZSBpbXBsZW1lbnRhdGlvbiAoVGFzayAxLjMvMS40LCByZXF1aXJlcyBldmVudHN0cmVhbS1tYXJzaGFsbGVyKTpcbiAgICAvKlxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGdyZWV0aW5nTWVzc2FnZSA9IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnOm1lc3NhZ2UtdHlwZSc6IHsgdHlwZTogJ3N0cmluZycsIHZhbHVlOiAnZXZlbnQnIH0sXG4gICAgICAgICAgICAgICAgJzpldmVudC10eXBlJzogeyB0eXBlOiAnc3RyaW5nJywgdmFsdWU6ICdjb25maWd1cmF0aW9uLWV2ZW50JyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBMYW5ndWFnZUNvZGU6IFRSQU5TQ1JJQkVfTEFOR1VBR0VfQ09ERSxcbiAgICAgICAgICAgICAgICBNZWRpYUVuY29kaW5nOiAncGNtJywgLy8gTXVzdCBtYXRjaCBhdWRpbyBmb3JtYXRcbiAgICAgICAgICAgICAgICBTYW1wbGVSYXRlOiBBVURJT19DSFVOS19TQU1QTEVfUkFURSwgLy8gTXVzdCBtYXRjaCBhdWRpbyBzYW1wbGUgcmF0ZVxuICAgICAgICAgICAgICAgIC8vIEFkZCBvdGhlciBjb25maWd1cmF0aW9uIG9wdGlvbnMgaGVyZSBpZiBuZWVkZWRcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBiaW5hcnlNZXNzYWdlID0gZXZlbnRNYXJzaGFsbGVyLm1hcnNoYWxsKGdyZWV0aW5nTWVzc2FnZSk7XG4gICAgICAgIHRyYW5zY3JpYmVXZWJTb2NrZXQuc2VuZChiaW5hcnlNZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJTZW50IFRyYW5zY3JpYmUgY29uZmlndXJhdGlvbiBtZXNzYWdlLlwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2VuZGluZyBUcmFuc2NyaWJlIGNvbmZpZ3VyYXRpb24gbWVzc2FnZTpcIiwgZXJyb3IpO1xuICAgICAgICAvLyBIYW5kbGUgZXJyb3IsIG1heWJlIGNsb3NlIHNvY2tldD9cbiAgICB9XG4gICAgKi9cbiAgICAgY29uc29sZS5sb2coXCJXZWJTb2NrZXQgb3BlbmVkLiBSZWFkeSB0byByZWNlaXZlIGF1ZGlvIGRhdGEgKGFuZCBzZW5kIGNvbmZpZyBpZiBpbXBsZW1lbnRlZCkuXCIpO1xuICAgICAvLyBJbmZvcm0gY29udGVudCBzY3JpcHQgdGhhdCBBV1MgaXMgcmVhZHkgdG8gcmVjZWl2ZSBhdWRpbyAob3B0aW9uYWwgYnV0IGdvb2QgcHJhY3RpY2UpXG4gICAgIGlmIChjdXJyZW50VGFiSWQpIHtcbiAgICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKGN1cnJlbnRUYWJJZCwgeyBhY3Rpb246IFwiYXdzUmVhZHlcIiB9KS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIGF3c1JlYWR5IHRvIHRhYjpcIiwgZSkpO1xuICAgICB9XG4gIH07XG5cbiAgdHJhbnNjcmliZVdlYlNvY2tldC5vbm1lc3NhZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAvLyAqKiogUGFyc2UgdGhlIGluY29taW5nIGV2ZW50IHN0cmVhbSBtZXNzYWdlIGZyb20gVHJhbnNjcmliZSAoVGFzayAxLjQpICoqKlxuICAgIC8vIGV2ZW50LmRhdGEgd2lsbCBiZSBhIGJpbmFyeSBCbG9iIG9yIEFycmF5QnVmZmVyLlxuICAgIC8vIFlvdSBuZWVkIHRvIHVubWFyc2hhbGwgaXQgdXNpbmcgRXZlbnRTdHJlYW1NYXJzaGFsbGVyLlxuICAgIC8vIEV4YW1wbGUgaW1wbGVtZW50YXRpb24gKFRhc2sgMS40LCByZXF1aXJlcyBldmVudHN0cmVhbS1tYXJzaGFsbGVyLCB1dGlsLXV0Zjgtbm9kZSk6XG4gICAgLypcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBibG9iID0gZXZlbnQuZGF0YTtcbiAgICAgICAgLy8gUmVhZCBibG9iIGFzIEFycmF5QnVmZmVyIGFzeW5jaHJvbm91c2x5XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICAvLyBVbm1hcnNoYWxsIHRoZSBiaW5hcnkgbWVzc2FnZVxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGV2ZW50TWFyc2hhbGxlci51bm1hcnNoYWxsKG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VUeXBlID0gbWVzc2FnZS5oZWFkZXJzWyc6bWVzc2FnZS10eXBlJ10/LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZXZlbnRUeXBlID0gbWVzc2FnZS5oZWFkZXJzWyc6ZXZlbnQtdHlwZSddPy52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VUeXBlID09PSAnZXZlbnQnICYmIGV2ZW50VHlwZSA9PT0gJ3RyYW5zY3JpcHQtZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZUJvZHkgPSBKU09OLnBhcnNlKG1lc3NhZ2UuYm9keSk7IC8vIE1lc3NhZ2UgYm9keSBpcyBKU09OXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IG1lc3NhZ2VCb2R5LlRyYW5zY3JpcHQ/LlJlc3VsdHM7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUHJvY2VzcyByZXN1bHRzLiBUcmFuc2NyaWJlIGNhbiByZXR1cm4gbXVsdGlwbGUgcmVzdWx0cy9hbHRlcm5hdGl2ZXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHVzdWFsbHkgY2FyZSBhYm91dCB0aGUgZmlyc3QgcmVzdWx0IGFuZCBpdHMgZmlyc3QgYWx0ZXJuYXRpdmUuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsdGVybmF0aXZlID0gcmVzdWx0LkFsdGVybmF0aXZlcz8uWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbHRlcm5hdGl2ZSAmJiBhbHRlcm5hdGl2ZS5UcmFuc2NyaXB0ICYmIGFsdGVybmF0aXZlLlRyYW5zY3JpcHQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zY3JpcHQgPSBhbHRlcm5hdGl2ZS5UcmFuc2NyaXB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNQYXJ0aWFsID0gcmVzdWx0LklzUGFydGlhbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1BhcnRpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHb3QgYSBmaW5hbCB0cmFuc2NyaXB0IHNlZ21lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbmFsIEphcGFuZXNlOlwiLCB0cmFuc2NyaXB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAqKiogQ0FMTCBUUkFOU0xBVEUgSEVSRSAoVGFzayAxLjUpICoqKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVRleHQodHJhbnNjcmlwdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wdGlvbmFsOiBIYW5kbGUgcGFydGlhbCByZXN1bHRzIGZvciBpbW1lZGlhdGUgZGlzcGxheSAoVGFzayAxLjQgcmVmaW5lbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlBhcnRpYWwgSmFwYW5lc2U6XCIsIHRyYW5zY3JpcHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdCh0cmFuc2NyaXB0LCBcIi4uLlwiKTsgLy8gU2hvdyBwYXJ0aWFsIEpQLCBwZW5kaW5nIHRyYW5zbGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VUeXBlID09PSAnZXhjZXB0aW9uJykge1xuICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlQm9keSA9IEpTT04ucGFyc2UobWVzc2FnZS5ib2R5KTtcbiAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRyYW5zY3JpYmUgRXhjZXB0aW9uOlwiLCBtZXNzYWdlQm9keS5NZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgdXBkYXRlU3VidGl0bGVzSW5Db250ZW50U2NyaXB0KFwiXCIsIGBbU1RU5Ye66ZSZOiAke21lc3NhZ2VCb2R5Lk1lc3NhZ2V9XWApO1xuICAgICAgICAgICAgICAgICBzdG9wUHJvY2Vzc2luZygpOyAvLyBTdG9wIG9uIGVycm9yXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIHVua25vd24gV2ViU29ja2V0IG1lc3NhZ2UgdHlwZTpcIiwgbWVzc2FnZVR5cGUsIGV2ZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwcm9jZXNzaW5nIFRyYW5zY3JpYmUgV2ViU29ja2V0IG1lc3NhZ2U6XCIsIGVycm9yKTtcbiAgICAgICAgdXBkYXRlU3VidGl0bGVzSW5Db250ZW50U2NyaXB0KFwiXCIsIGBb5aSE55CGU1RU57uT5p6c5Ye66ZSZOiAke2Vycm9yLm1lc3NhZ2V9XWApO1xuICAgICAgICBzdG9wUHJvY2Vzc2luZygpOyAvLyBTdG9wIG9uIGVycm9yXG4gICAgfVxuICAgICovXG4gICAgLy8gLS0tIFBsYWNlaG9sZGVyOiBTaW11bGF0ZSByZWNlaXZpbmcgYSBmaW5hbCB0cmFuc2NyaXB0IChSZW1vdmUgdGhpcyB3aGVuIFRhc2sgMS40IGlzIGltcGxlbWVudGVkKSAtLS1cbiAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIFdlYlNvY2tldCBtZXNzYWdlIChwbGFjZWhvbGRlcikuIFNpbXVsYXRpbmcgdHJhbnNjcmlwdCByZXN1bHQuXCIpO1xuICAgIC8vIEluIGEgcmVhbCBzY2VuYXJpbywgcGFyc2UgZXZlbnQuZGF0YSBhbmQgY2FsbCB0cmFuc2xhdGVUZXh0KHBhcnNlZEphcGFuZXNlVGV4dCk7XG4gICAgLy8gRm9yIG5vdywgbGV0J3Mgc2ltdWxhdGUgcmVjZWl2aW5nIHRleHQgYW5kIHRyaWdnZXJpbmcgdHJhbnNsYXRpb24gYWZ0ZXIgYSBzaG9ydCBkZWxheS5cbiAgICAvLyBUaGlzIHNpbXVsYXRpb24gcmVwbGFjZXMgdGhlIGFjdHVhbCBtZXNzYWdlIHBhcnNpbmcgbG9naWMgYWJvdmUuXG4gICAgaWYgKCF0cmFuc2NyaWJlV2ViU29ja2V0Ll9zaW11bGF0aW5nKSB7IC8vIFByZXZlbnQgbXVsdGlwbGUgdGltZW91dHMgZnJvbSBvbmUgbWVzc2FnZVxuICAgICAgICB0cmFuc2NyaWJlV2ViU29ja2V0Ll9zaW11bGF0aW5nID0gdHJ1ZTtcbiAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2ltdWxhdGVkSmFwYW5lc2VUZXh0ID0gXCLjgZPjgpPjgavjgaHjga/jgIHjgZPjgozjga/jgr/jg5bjgq3jg6Pjg5fjg4Hjg6PjgYvjgonjga7jg4bjgrnjg4jjgafjgZnjgIJcIjsgLy8gRXhhbXBsZSBKYXBhbmVzZSB0ZXh0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNpbXVsYXRlZCBGaW5hbCBKYXBhbmVzZTpcIiwgc2ltdWxhdGVkSmFwYW5lc2VUZXh0KTtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVRleHQoc2ltdWxhdGVkSmFwYW5lc2VUZXh0KTsgLy8gQ2FsbCB0cmFuc2xhdGUgKFRhc2sgMS41IHBsYWNlaG9sZGVyKVxuICAgICAgICAgICAgZGVsZXRlIHRyYW5zY3JpYmVXZWJTb2NrZXQuX3NpbXVsYXRpbmc7XG4gICAgICAgICB9LCA1MDApOyAvLyBTaW11bGF0ZSBwcm9jZXNzaW5nIGRlbGF5XG4gICAgfVxuICAgIC8vIC0tLSBFbmQgUGxhY2Vob2xkZXIgU2ltdWxhdGlvbiAtLS1cbiAgfTtcblxuICAgdHJhbnNjcmliZVdlYlNvY2tldC5vbmVycm9yID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcIlRyYW5zY3JpYmUgV2ViU29ja2V0IGVycm9yOlwiLCBldmVudCk7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXZlbnQ/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gV2ViU29ja2V0IGVycm9yJztcbiAgICAvLyBBdHRlbXB0IHRvIGdldCBhIG1vcmUgc3BlY2lmaWMgZXJyb3IgbWVzc2FnZSBmcm9tIHRoZSBldmVudCBpZiBhdmFpbGFibGVcbiAgICAvLyBXZWJTb2NrZXQgRXJyb3JFdmVudCBkb2Vzbid0IGFsd2F5cyBoYXZlIGEgZGV0YWlsZWQgbWVzc2FnZSBwcm9wZXJ0eVxuICAgIGxldCBkZXRhaWxlZEVycm9yID0gZXJyb3JNZXNzYWdlO1xuICAgIGlmIChldmVudC5lcnJvcikge1xuICAgICAgICBkZXRhaWxlZEVycm9yID0gZXZlbnQuZXJyb3IubWVzc2FnZSB8fCBkZXRhaWxlZEVycm9yO1xuICAgIH1cbiAgICB1cGRhdGVTdWJ0aXRsZXNJbkNvbnRlbnRTY3JpcHQoXCJcIiwgYFtTVFTov57mjqXlh7rplJk6ICR7ZGV0YWlsZWRFcnJvcn1dYCk7XG4gICAgc3RvcFByb2Nlc3NpbmcoKTsgLy8gRW5zdXJlIHN0YXRlIGlzIHJlc2V0XG4gIH07XG5cbiAgdHJhbnNjcmliZVdlYlNvY2tldC5vbmNsb3NlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJUcmFuc2NyaWJlIFdlYlNvY2tldCBjbG9zZWQ6XCIsIGV2ZW50LmNvZGUsIGV2ZW50LnJlYXNvbik7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNsb3N1cmUgd2FzIHVuZXhwZWN0ZWQgKGUuZy4sIG5vdCBjb2RlIDEwMDAgb3IgMTAwMSlcbiAgICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0Nsb3NlRXZlbnQvY29kZVxuICAgIGNvbnN0IHVuZXhwZWN0ZWRDbG9zZSA9IGlzUnVubmluZyAmJiBldmVudC5jb2RlICE9PSAxMDAwICYmIGV2ZW50LmNvZGUgIT09IDEwMDE7XG5cbiAgICBpZiAodW5leHBlY3RlZENsb3NlKSB7XG4gICAgICAgY29uc29sZS5lcnJvcihcIldlYlNvY2tldCBjbG9zZWQgdW5leHBlY3RlZGx5LCBhdHRlbXB0aW5nIHRvIHN0b3AuXCIpO1xuICAgICAgIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdChcIlwiLCBgW1NUVOi/nuaOpeaEj+WkluWFs+mXrTogJHtldmVudC5jb2RlfV1gKTtcbiAgICAgICBzdG9wUHJvY2Vzc2luZygpOyAvLyBFbnN1cmUgc3RhdGUgaXMgcmVzZXRcbiAgICB9IGVsc2Uge1xuICAgICAgIGNvbnNvbGUubG9nKFwiV2ViU29ja2V0IGNsb3NlZCBncmFjZWZ1bGx5IG9yIGR1ZSB0byBwcm90b2NvbCBlcnJvci9nb2luZyBhd2F5LlwiKTtcbiAgICAgICAvLyBJZiBpc1J1bm5pbmcgaXMgdHJ1ZSBoZXJlLCBpdCBtZWFucyBzdG9wUHJvY2Vzc2luZyB3YXMgbGlrZWx5IGNhbGxlZCxcbiAgICAgICAvLyB3aGljaCBpbml0aWF0ZXMgdGhlIGdyYWNlZnVsIGNsb3NlIChjb2RlIDEwMDApLlxuICAgICAgIC8vIElmIGl0IHdhcyBjb2RlIDEwMDEgKGdvaW5nIGF3YXkpIHdoaWxlIHJ1bm5pbmcsIGl0J3MgYWxzbyB1bmV4cGVjdGVkLlxuICAgICAgIGlmIChpc1J1bm5pbmcgJiYgZXZlbnQuY29kZSA9PT0gMTAwMSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIldlYlNvY2tldCBjbG9zZWQgdW5leHBlY3RlZGx5IChnb2luZyBhd2F5KSwgYXR0ZW1wdGluZyB0byBzdG9wLlwiKTtcbiAgICAgICAgICAgIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdChcIlwiLCBgW1NUVOi/nuaOpeaEj+WkluWFs+mXrTogJHtldmVudC5jb2RlfV1gKTtcbiAgICAgICAgICAgIHN0b3BQcm9jZXNzaW5nKCk7XG4gICAgICAgfVxuICAgIH1cbiAgfTtcblxuXG4gIC8vIFJldHVybiB0aGUgV2ViU29ja2V0IGluc3RhbmNlIHNvIHRoZSBjYWxsZXIga25vd3MgaXQgd2FzIGNyZWF0ZWQgKGV2ZW4gaWYgbm90IGZ1bGx5IG9wZW4geWV0KVxuICByZXR1cm4gdHJhbnNjcmliZVdlYlNvY2tldDtcbn1cblxuZnVuY3Rpb24gc3RvcFRyYW5zY3JpYmVXZWJTb2NrZXQoKSB7XG4gIGlmICh0cmFuc2NyaWJlV2ViU29ja2V0KSB7XG4gICAgY29uc29sZS5sb2coXCJDbG9zaW5nIFRyYW5zY3JpYmUgV2ViU29ja2V0Li4uXCIpO1xuICAgIC8vIFVzZSBjb2RlIDEwMDAgZm9yIG5vcm1hbCBjbG9zdXJlXG4gICAgdHJhbnNjcmliZVdlYlNvY2tldC5jbG9zZSgxMDAwLCBcIkNsaWVudCBzdG9wcGluZ1wiKTtcbiAgICB0cmFuc2NyaWJlV2ViU29ja2V0ID0gbnVsbDtcbiAgfVxufVxuXG4vLyBGdW5jdGlvbiB0byBzZW5kIGF1ZGlvIGNodW5rcyAoY2FsbGVkIGJ5IGNvbnRlbnQgc2NyaXB0KVxuLy8gVGhlIGNodW5rIHNob3VsZCBiZSBhbiBBcnJheUJ1ZmZlciBjb250YWluaW5nIHJhdyBhdWRpbyBkYXRhIChJbnQxNkFycmF5IGJ1ZmZlcilcbi8vIFRoaXMgaXMgVGFzayAxLjMuIEV2ZW50IFN0cmVhbSBtYXJzaGFsbGluZyBuZWVkcyB0byBiZSBpbXBsZW1lbnRlZCBoZXJlLlxuZnVuY3Rpb24gc2VuZEF1ZGlvQ2h1bmtUb1RyYW5zY3JpYmUoY2h1bmspIHtcbiAgICBpZiAodHJhbnNjcmliZVdlYlNvY2tldCAmJiB0cmFuc2NyaWJlV2ViU29ja2V0LnJlYWR5U3RhdGUgPT09IFdlYlNvY2tldC5PUEVOKSB7XG4gICAgICAgIC8vICoqKiBTZW5kIHRoZSBhdWRpbyBjaHVuayBhcyBhIGJpbmFyeSBtZXNzYWdlIChUYXNrIDEuMykgKioqXG4gICAgICAgIC8vIFRoaXMgaW52b2x2ZXMgY3JlYXRpbmcgYW4gRXZlbnRTdHJlYW0gbWVzc2FnZSBvZiB0eXBlICdBdWRpb0V2ZW50J1xuICAgICAgICAvLyB3aXRoIHRoZSBjaHVuayBhcyB0aGUgYm9keSwgYW5kIG1hcnNoYWxsaW5nIGl0IGludG8gYSBiaW5hcnkgZnJhbWUuXG4gICAgICAgIC8vIFJlcXVpcmVzIGV2ZW50c3RyZWFtLW1hcnNoYWxsZXIuXG4gICAgICAgIC8qXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhdWRpb0V2ZW50TWVzc2FnZSA9IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICc6bWVzc2FnZS10eXBlJzogeyB0eXBlOiAnc3RyaW5nJywgdmFsdWU6ICdldmVudCcgfSxcbiAgICAgICAgICAgICAgICAgICAgJzpldmVudC10eXBlJzogeyB0eXBlOiAnc3RyaW5nJywgdmFsdWU6ICdBdWRpb0V2ZW50JyB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogbmV3IFVpbnQ4QXJyYXkoY2h1bmspLCAvLyBBdWRpbyBkYXRhIGFzIFVpbnQ4QXJyYXkgb3IgQnVmZmVyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgYmluYXJ5TWVzc2FnZSA9IGV2ZW50TWFyc2hhbGxlci5tYXJzaGFsbChhdWRpb0V2ZW50TWVzc2FnZSk7XG4gICAgICAgICAgICB0cmFuc2NyaWJlV2ViU29ja2V0LnNlbmQoYmluYXJ5TWVzc2FnZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNlbnQgYXVkaW8gY2h1bmsuIFNpemU6XCIsIGNodW5rLmJ5dGVMZW5ndGgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIG1hcnNoYWxsaW5nL3NlbmRpbmcgYXVkaW8gY2h1bms6XCIsIGVycm9yKTtcbiAgICAgICAgICAgIC8vIERlY2lkZSBob3cgdG8gaGFuZGxlIHNlbmQgZXJyb3JzIC0gbWF5YmUgc3RvcCBvciBsb2dcbiAgICAgICAgICAgIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdChcIlwiLCBgW+WPkemAgemfs+mikeWHuumUmTogJHtlcnJvci5tZXNzYWdlfV1gKTtcbiAgICAgICAgICAgIC8vIHN0b3BQcm9jZXNzaW5nKCk7IC8vIE9wdGlvbmFsOiBzdG9wIG9uIHNlbmQgZXJyb3JcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICAvLyBQbGFjZWhvbGRlcjogSnVzdCBsb2cgdGhhdCBhIGNodW5rIHdhcyByZWNlaXZlZCBidXQgbm90IHNlbnQgKFJlbW92ZSB0aGlzIHdoZW4gVGFzayAxLjMgaXMgaW1wbGVtZW50ZWQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgYW5kIHdvdWxkIHNlbmQgYXVkaW8gY2h1bmsgKHByb2Nlc3NpbmcgZGlzYWJsZWQgaW4gZXhhbXBsZSkuIFNpemU6XCIsIGNodW5rLmJ5dGVMZW5ndGgpO1xuICAgICAgICAvLyBJbiBhIHJlYWwgc2NlbmFyaW8sIHVuY29tbWVudCB0aGUgdHJ5L2NhdGNoIGJsb2NrIGFib3ZlLlxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUud2FybihcIldlYlNvY2tldCBub3Qgb3BlbiwgY2Fubm90IHNlbmQgYXVkaW8gY2h1bmsuXCIpO1xuICAgICAgICAvLyBIYW5kbGUgY2FzZSB3aGVyZSBXUyBpcyBub3QgcmVhZHkgLSBidWZmZXIgY2h1bmtzPyBEcm9wIHRoZW0/XG4gICAgfVxufVxuXG5cbi8vIC0tLSBBV1MgVHJhbnNsYXRlIExvZ2ljIChUYXNrIDEuNSkgLS0tXG5hc3luYyBmdW5jdGlvbiB0cmFuc2xhdGVUZXh0KGphcGFuZXNlVGV4dCkge1xuICBpZiAoIWF3c0NvbmZpZyB8fCAhdHJhbnNsYXRlQ2xpZW50KSB7XG4gICAgY29uc29sZS5lcnJvcihcIkFXUyBjb25maWcgb3IgVHJhbnNsYXRlQ2xpZW50IG5vdCBsb2FkZWQgZm9yIHRyYW5zbGF0aW9uLlwiKTtcbiAgICB1cGRhdGVTdWJ0aXRsZXNJbkNvbnRlbnRTY3JpcHQoamFwYW5lc2VUZXh0LCBcIlvnv7vor5HmnI3liqHmnKrlkK/liqjmiJblh7rplJldXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghamFwYW5lc2VUZXh0IHx8IGphcGFuZXNlVGV4dC50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vIG1lYW5pbmdmdWwgdGV4dCB0byB0cmFuc2xhdGUuXCIpO1xuICAgICAgLy8gSWYgVHJhbnNjcmliZSBzZW5kcyBlbXB0eSBvciB3aGl0ZXNwYWNlIHJlc3VsdCwgbWF5YmUgY2xlYXIgc3VidGl0bGVzIG9yIHNob3cgb25seSBwcmV2aW91cz9cbiAgICAgIC8vIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdChcIlwiLCBcIlwiKTtcbiAgICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiVHJhbnNsYXRpbmc6XCIsIGphcGFuZXNlVGV4dCk7XG5cbiAgdHJ5IHtcbiAgICAvLyAqKiogQ2FsbCBUcmFuc2xhdGUgQVBJIChUYXNrIDEuNSwgUmVxdWlyZXMgQGF3cy1zZGsvY2xpZW50LXRyYW5zbGF0ZSkgKioqXG4gICAgLypcbiAgICBjb25zdCBjb21tYW5kID0gbmV3IFRyYW5zbGF0ZVRleHRDb21tYW5kKHtcbiAgICAgIFRleHQ6IGphcGFuZXNlVGV4dCxcbiAgICAgIFNvdXJjZUxhbmd1YWdlQ29kZTogVFJBTlNMQVRFX1NPVVJDRV9MQU5HVUFHRSxcbiAgICAgIFRhcmdldExhbmd1YWdlQ29kZTogVFJBTlNMQVRFX1RBUkdFVF9MQU5HVUFHRSxcbiAgICB9KTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRyYW5zbGF0ZUNsaWVudC5zZW5kKGNvbW1hbmQpO1xuICAgIGNvbnN0IGNoaW5lc2VUZXh0ID0gcmVzcG9uc2UuVHJhbnNsYXRlZFRleHQ7XG4gICAgKi9cblxuICAgIC8vIC0tLSBQbGFjZWhvbGRlcjogU2ltdWxhdGUgdHJhbnNsYXRpb24gZGVsYXkgYW5kIHJlc3VsdCAoUmVtb3ZlIHRoaXMgd2hlbiBUYXNrIDEuNSBpcyBpbXBsZW1lbnRlZCkgLS0tXG4gICAgY29uc3QgY2hpbmVzZVRleHQgPSBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKGBb57+76K+ROiAke2phcGFuZXNlVGV4dH1dYCk7IC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgdHJhbnNsYXRpb24gcmVzdWx0IGZyb20gQVdTXG4gICAgICAgIH0sIDIwMCk7IC8vIFNpbXVsYXRlIG5ldHdvcmsgbGF0ZW5jeSBmb3IgdHJhbnNsYXRpb25cbiAgICB9KTtcbiAgICAvLyAtLS0gRW5kIFBsYWNlaG9sZGVyIC0tLVxuXG4gICAgY29uc29sZS5sb2coXCJUcmFuc2xhdGVkOlwiLCBjaGluZXNlVGV4dCk7XG5cbiAgICAvLyBTZW5kIGJvdGggb3JpZ2luYWwgYW5kIHRyYW5zbGF0ZWQgdGV4dCB0byBjb250ZW50IHNjcmlwdFxuICAgIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdChqYXBhbmVzZVRleHQsIGNoaW5lc2VUZXh0KTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB0cmFuc2xhdGluZyB0ZXh0OlwiLCBlcnJvcik7XG4gICAgdXBkYXRlU3VidGl0bGVzSW5Db250ZW50U2NyaXB0KGphcGFuZXNlVGV4dCwgYFvnv7vor5Hlh7rplJk6ICR7ZXJyb3IubWVzc2FnZX1dYCk7XG4gIH1cbn1cblxuLy8gSGVscGVyIHRvIHNlbmQgc3VidGl0bGUgdXBkYXRlIG1lc3NhZ2UgdG8gdGhlIGFjdGl2ZSB0YWIgKFNhbWUgYXMgYmVmb3JlKVxuZnVuY3Rpb24gdXBkYXRlU3VidGl0bGVzSW5Db250ZW50U2NyaXB0KGphcGFuZXNlVGV4dCwgY2hpbmVzZVRleHQpIHtcbiAgICAvLyBTZW5kIG1lc3NhZ2Ugb25seSB0byB0aGUgdGFiIHRoYXQgaW5pdGlhdGVkIHRoZSBwcm9jZXNzXG4gICAgaWYgKGN1cnJlbnRUYWJJZCkge1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShjdXJyZW50VGFiSWQsIHtcbiAgICAgICAgICBhY3Rpb246IFwidXBkYXRlU3VidGl0bGVzXCIsXG4gICAgICAgICAgamFwYW5lc2U6IGphcGFuZXNlVGV4dCxcbiAgICAgICAgICBjaGluZXNlOiBjaGluZXNlVGV4dFxuICAgICAgICB9KS5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIHVwZGF0ZVN1YnRpdGxlcyBtZXNzYWdlOlwiLCBlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiTm8gYWN0aXZlIHRhYiBJRCB0byBzZW5kIHN1YnRpdGxlIHVwZGF0ZS5cIik7XG4gICAgfVxufVxuXG4vLyAtLS0gTWFpbiBDb250cm9sIEZ1bmN0aW9ucyAoU2FtZSBhcyBiZWZvcmUsIG9yY2hlc3RyYXRlcyBjYXB0dXJlIGluaXRpYXRpb24pIC0tLVxuYXN5bmMgZnVuY3Rpb24gc3RhcnRQcm9jZXNzaW5nKCkge1xuICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgY29uc29sZS5sb2coXCJBbHJlYWR5IHJ1bm5pbmcuXCIpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJBbHJlYWR5IHJ1bm5pbmdcIiB9O1xuICB9XG5cbiAgY29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIHN0YXJ0IHByb2Nlc3NpbmcuLi5cIik7XG5cbiAgdHJ5IHtcbiAgICAvLyBHZXQgdGhlIGFjdGl2ZSB0YWIgZmlyc3QgdG8ga25vdyB3aGVyZSB0byBpbmplY3Qvc2VuZCBtZXNzYWdlc1xuICAgIGNvbnN0IFt0YWJdID0gYXdhaXQgY2hyb21lLnRhYnMucXVlcnkoe2FjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZX0pO1xuICAgIGlmICghdGFiIHx8ICF0YWIuaWQpIHtcbiAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJObyBhY3RpdmUgdGFiIGZvdW5kIG9yIHRhYiBJRCBpcyBpbnZhbGlkLlwiKTtcbiAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJObyBhY3RpdmUgdGFiIGZvdW5kXCIgfTtcbiAgICB9XG4gICAgY3VycmVudFRhYklkID0gdGFiLmlkOyAvLyBTdG9yZSB0aGUgdGFiIElEXG5cbiAgICAvLyAxLiBHZXQgQVdTIENyZWRlbnRpYWxzXG4gICAgYXdzQ29uZmlnID0gYXdhaXQgZ2V0QXdzQ3JlZGVudGlhbHMoKTtcbiAgICBjb25zb2xlLmxvZyhcIkFXUyBDb25maWcgbG9hZGVkIHN1Y2Nlc3NmdWxseS5cIik7XG5cbiAgICAvLyAyLiBJbml0aWFsaXplIEFXUyBUcmFuc2xhdGUgQ2xpZW50IChUYXNrIDEuNSlcbiAgICAvLyB0cmFuc2xhdGVDbGllbnQgPSBuZXcgVHJhbnNsYXRlQ2xpZW50KHsgLi4uIH0pOyAvLyBSZXF1aXJlcyBAYXdzLXNkay9jbGllbnQtdHJhbnNsYXRlXG4gICAgY29uc29sZS53YXJuKFwiVHJhbnNsYXRlQ2xpZW50IGluaXRpYWxpemF0aW9uIHBsYWNlaG9sZGVyLlwiKTsgLy8gUGxhY2Vob2xkZXJcblxuICAgIC8vIDMuIFN0YXJ0IEFXUyBUcmFuc2NyaWJlIFdlYlNvY2tldCBjb25uZWN0aW9uIChOb3cgaW5jbHVkZXMgU2lnVjQpXG4gICAgLy8gVGhpcyBpcyBhc3luYyBhbmQgbmVlZHMgdG8gaGFuZGxlIGNvbm5lY3Rpb24gbGlmZWN5Y2xlLlxuICAgIC8vIFdlIHN0YXJ0IHRoZSBXUyBjb25uZWN0aW9uIGVhcmx5IHdoaWxlIHdhaXRpbmcgZm9yIGF1ZGlvLlxuICAgIGF3YWl0IHN0YXJ0VHJhbnNjcmliZVdlYlNvY2tldChhd3NDb25maWcpO1xuICAgIGNvbnNvbGUubG9nKFwiVHJhbnNjcmliZSBXZWJTb2NrZXQgc2V0dXAgaW5pdGlhdGVkLlwiKTtcblxuICAgIC8vIDQuIEluamVjdCBjb250ZW50IHNjcmlwdCBhbmQgQ1NTIChpZiBub3QgYWxyZWFkeSB0aGVyZSkgYW5kIHNpZ25hbCBpdCB0byBzdGFydCBzdWJ0aXRsZXNcbiAgICAvLyBUaGlzIGVuc3VyZXMgdGhlIGNvbnRlbnQgc2NyaXB0IGlzIHJlYWR5IGJlZm9yZSB3ZSBhc2sgaXQgdG8gY2FwdHVyZS5cbiAgICAvLyBOb3RlOiBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQgcmVxdWlyZXMgJ3NjcmlwdGluZycgcGVybWlzc2lvbiBhbmQgaG9zdF9wZXJtaXNzaW9ucy5cbiAgICBhd2FpdCBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICB0YXJnZXQ6IHsgdGFiSWQ6IGN1cnJlbnRUYWJJZCB9LFxuICAgICAgICBmaWxlczogWydjb250ZW50LmpzJ10sIC8vIEluamVjdCBjb250ZW50LmpzIGlmIG5vdCBhbHJlYWR5IHRoZXJlXG4gICAgfSk7XG4gICAgIGF3YWl0IGNocm9tZS5zY3JpcHRpbmcuaW5zZXJ0Q1NTKHtcbiAgICAgICAgdGFyZ2V0OiB7IHRhYklkOiBjdXJyZW50VGFiSWQgfSxcbiAgICAgICAgZmlsZXM6IFsnc3VidGl0bGUuY3NzJ10sIC8vIEluamVjdCBDU1MgaWYgbm90IGFscmVhZHkgdGhlcmVcbiAgICB9KTtcblxuICAgIC8vIFNlbmQgdGhlIGluaXRpYWwgc3RhcnQgc2lnbmFsIHRvIHRoZSBjb250ZW50IHNjcmlwdCAocHJpbWFyaWx5IGZvciBzdWJ0aXRsZXMpXG4gICAgYXdhaXQgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoY3VycmVudFRhYklkLCB7IGFjdGlvbjogXCJzdGFydENvbnRlbnRTY3JpcHRcIiB9KTtcbiAgICBjb25zb2xlLmxvZyhcIlNlbnQgc3RhcnRDb250ZW50U2NyaXB0IHNpZ25hbCB0byBjb250ZW50IHNjcmlwdC5cIik7XG5cbiAgICAvLyA1LiAqKiogTk9XLCBURUxMIFRIRSBDT05URU5UIFNDUklQVCBUTyBJTklUSUFURSBUQUIgQ0FQVFVSRSAqKipcbiAgICAvLyBUaGlzIHdpbGwgdHJpZ2dlciB0aGUgY2hyb21lLnRhYkNhcHR1cmUuY2FwdHVyZSBjYWxsIGFuZCB0aGUgcGVybWlzc2lvbiBkaWFsb2cgaW4gdGhlIGNvbnRlbnQgc2NyaXB0LlxuICAgIC8vIFRoZSBjb250ZW50IHNjcmlwdCB3aWxsIHRoZW4gcHJvY2VzcyBhdWRpbyBhbmQgc2VuZCBjaHVua3MgYmFjayB2aWEgJ2F1ZGlvQ2h1bmsnIG1lc3NhZ2VzLlxuICAgIC8vIFJlcXVpcmVzICd0YWJDYXB0dXJlJyBwZXJtaXNzaW9uIGluIG1hbmlmZXN0Lmpzb24uXG4gICAgYXdhaXQgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoY3VycmVudFRhYklkLCB7IGFjdGlvbjogXCJpbml0aWF0ZVRhYkNhcHR1cmVcIiB9KTtcbiAgICBjb25zb2xlLmxvZyhcIlNlbnQgaW5pdGlhdGVUYWJDYXB0dXJlIHNpZ25hbCB0byBjb250ZW50IHNjcmlwdC5cIik7XG5cblxuICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJQcm9jZXNzaW5nIHN0YXJ0ZWQgc3VjY2Vzc2Z1bGx5LlwiKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHN0YXJ0IHByb2Nlc3Npbmc6XCIsIGVycm9yKTtcbiAgICAvLyBFbnN1cmUgY2xlYW51cCBoYXBwZW5zIGlmIHN0YXJ0IGZhaWxzXG4gICAgc3RvcFByb2Nlc3NpbmcoKTtcbiAgICBsZXQgdXNlckVycm9yID0gXCJVbmtub3duIGVycm9yIGR1cmluZyBzdGFydC5cIjtcbiAgICBpZiAodHlwZW9mIGVycm9yID09PSAnc3RyaW5nJykge1xuICAgICAgICB1c2VyRXJyb3IgPSBlcnJvcjsgLy8gRS5nLiwgXCJDcmVkZW50aWFscyBub3QgY29uZmlndXJlZFwiXG4gICAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHVzZXJFcnJvciA9IGVycm9yLm1lc3NhZ2U7XG4gICAgfVxuICAgIHVwZGF0ZVN1YnRpdGxlc0luQ29udGVudFNjcmlwdChcIlwiLCBgW+WQr+WKqOWksei0pTogJHt1c2VyRXJyb3J9XWApOyAvLyBTaG93IGVycm9yIGluIHN1YnRpdGxlc1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogdXNlckVycm9yIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcFByb2Nlc3NpbmcoKSB7XG4gIGlmICghaXNSdW5uaW5nKSB7XG4gICAgY29uc29sZS5sb2coXCJOb3QgcnVubmluZy5cIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIk5vdCBydW5uaW5nXCIgfTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiU3RvcHBpbmcgcHJvY2Vzc2luZy4uLlwiKTtcblxuICAvLyAxLiBTdG9wIEFXUyBUcmFuc2NyaWJlIFdlYlNvY2tldFxuICBzdG9wVHJhbnNjcmliZVdlYlNvY2tldCgpO1xuXG4gIC8vIDIuIEluZm9ybSBjb250ZW50IHNjcmlwdCB0byByZW1vdmUgc3VidGl0bGVzIGFuZCBzdG9wIGF1ZGlvIGNhcHR1cmVcbiAgaWYgKGN1cnJlbnRUYWJJZCkge1xuICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoY3VycmVudFRhYklkLCB7IGFjdGlvbjogXCJzdG9wQ29udGVudFNjcmlwdFwiIH0pXG4gICAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZW5kaW5nIHN0b3BDb250ZW50U2NyaXB0IG1lc3NhZ2U6XCIsIGUpKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VudCBzdG9wIHNpZ25hbCB0byBjb250ZW50IHNjcmlwdC5cIik7XG4gIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJObyBhY3RpdmUgdGFiIElEIHRvIHNlbmQgc3RvcCBzaWduYWwuXCIpO1xuICB9XG5cbiAgLy8gMy4gUmVzZXQgc3RhdGVcbiAgaXNSdW5uaW5nID0gZmFsc2U7XG4gIGF3c0NvbmZpZyA9IG51bGw7IC8vIENsZWFyIGNyZWRlbnRpYWxzIGZyb20gbWVtb3J5IChiZXN0IGVmZm9ydClcbiAgdHJhbnNsYXRlQ2xpZW50ID0gbnVsbDsgLy8gQ2xlYXIgY2xpZW50IGluc3RhbmNlXG4gIGN1cnJlbnRUYWJJZCA9IG51bGw7IC8vIENsZWFyIHRoZSBhY3RpdmUgdGFiIElEXG4gIGNvbnNvbGUubG9nKFwiUHJvY2Vzc2luZyBzdG9wcGVkLlwiKTtcbiAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9O1xufVxuXG4vLyAtLS0gTWVzc2FnZSBMaXN0ZW5lciBmcm9tIFBvcHVwL0NvbnRlbnQgU2NyaXB0IChTYW1lIGFzIGJlZm9yZSkgLS0tXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiQmFja2dyb3VuZCByZWNlaXZlZCBtZXNzYWdlOlwiLCByZXF1ZXN0LmFjdGlvbiwgc2VuZGVyLnRhYiA/IFwiZnJvbSBjb250ZW50IHNjcmlwdCBpbiB0YWIgXCIgKyBzZW5kZXIudGFiLmlkIDogXCJmcm9tIHBvcHVwL290aGVyXCIpO1xuXG4gIC8vIEhhbmRsZSBtZXNzYWdlcyBmcm9tIHBvcHVwIG9yIGNvbnRlbnQgc2NyaXB0XG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gXCJzdGFydFwiKSB7XG4gICAgLy8gU3RhcnQgdGhlIHdob2xlIHByb2Nlc3MgKHRyaWdnZXJlZCBieSBwb3B1cClcbiAgICBzdGFydFByb2Nlc3NpbmcoKS50aGVuKHNlbmRSZXNwb25zZSk7XG4gICAgcmV0dXJuIHRydWU7IC8vIEluZGljYXRlIGFzeW5jIHJlc3BvbnNlXG4gIH0gZWxzZSBpZiAocmVxdWVzdC5hY3Rpb24gPT09IFwic3RvcFwiKSB7XG4gICAgLy8gU3RvcCB0aGUgd2hvbGUgcHJvY2VzcyAodHJpZ2dlcmVkIGJ5IHBvcHVwKVxuICAgIHNlbmRSZXNwb25zZShzdG9wUHJvY2Vzc2luZygpKTtcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gXCJnZXRTdGF0dXNcIikge1xuICAgIC8vIFJlcG9ydCBjdXJyZW50IHJ1bm5pbmcgc3RhdHVzICh1c2VkIGJ5IHBvcHVwKVxuICAgIHNlbmRSZXNwb25zZSh7IGlzUnVubmluZzogaXNSdW5uaW5nIH0pO1xuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcImF1ZGlvQ2h1bmtcIikge1xuICAgIC8vIFJlY2VpdmVkIGF1ZGlvIGRhdGEgZnJvbSBjb250ZW50IHNjcmlwdCAoZnJvbSB0YWJDYXB0dXJlIHByb2Nlc3NpbmcpXG4gICAgLy8gRW5zdXJlIG1lc3NhZ2UgY29tZXMgZnJvbSB0aGUgdGFiIHdlIGV4cGVjdFxuICAgIGlmIChzZW5kZXIudGFiICYmIHNlbmRlci50YWIuaWQgPT09IGN1cnJlbnRUYWJJZCAmJiByZXF1ZXN0LmNodW5rKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgYXVkaW8gY2h1bmsgZnJvbSBjb250ZW50IHNjcmlwdC4gU2l6ZTpcIiwgcmVxdWVzdC5jaHVuay5ieXRlTGVuZ3RoKTtcbiAgICAgICAgLy8gU2VuZCB0aGUgYXVkaW8gY2h1bmsgdG8gdGhlIFRyYW5zY3JpYmUgV2ViU29ja2V0IChUYXNrIDEuMylcbiAgICAgICAgc2VuZEF1ZGlvQ2h1bmtUb1RyYW5zY3JpYmUocmVxdWVzdC5jaHVuayk7IC8vIENhbGwgdGhlIGZ1bmN0aW9uIHRvIHNlbmQgdG8gV1NcbiAgICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTsgLy8gQWNrbm93bGVkZ2UgcmVjZWlwdFxuICAgICAgICAvLyByZXR1cm4gdHJ1ZTsgLy8gVW5jb21tZW50IGlmIHNlbmRBdWRpb0NodW5rVG9UcmFuc2NyaWJlIGlzIGFzeW5jXG4gICAgfSBlbHNlIHtcbiAgICAgICAgIGNvbnNvbGUud2FybihcIlJlY2VpdmVkIGF1ZGlvQ2h1bmsgbWVzc2FnZSBmcm9tIHVuZXhwZWN0ZWQgc2VuZGVyIG9yIHdpdGhvdXQgZGF0YS5cIik7XG4gICAgICAgICBzZW5kUmVzcG9uc2UoeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW52YWxpZCBhdWRpb0NodW5rIG1lc3NhZ2VcIiB9KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocmVxdWVzdC5hY3Rpb24gPT09IFwiYXVkaW9DYXB0dXJlRXJyb3JcIikge1xuICAgICAvLyBSZWNlaXZlZCBlcnJvciBtZXNzYWdlIGZyb20gY29udGVudCBzY3JpcHQgcmVnYXJkaW5nIGF1ZGlvIGNhcHR1cmVcbiAgICAgY29uc29sZS5lcnJvcihcIkF1ZGlvIGNhcHR1cmUgZmFpbGVkIGluIGNvbnRlbnQgc2NyaXB0OlwiLCByZXF1ZXN0LmVycm9yKTtcbiAgICAgLy8gT3B0aW9uYWxseSBzdG9wIHByb2Nlc3Npbmcgb3Igc2hvdyBhIG5vdGlmaWNhdGlvblxuICAgICAvLyBJdCdzIG9mdGVuIGJlc3QgdG8gc3RvcCB0aGUgd2hvbGUgcHJvY2VzcyBpZiBhdWRpbyBjYXB0dXJlIGZhaWxzLlxuICAgICB1cGRhdGVTdWJ0aXRsZXNJbkNvbnRlbnRTY3JpcHQoXCJcIiwgYFvpn7PpopHmjZXojrflpLHotKU6ICR7cmVxdWVzdC5lcnJvcn1dYCk7IC8vIEluZm9ybSB1c2VyIHZpYSBzdWJ0aXRsZXNcbiAgICAgc3RvcFByb2Nlc3NpbmcoKTsgLy8gU3RvcCB0aGUgZW50aXJlIHByb2Nlc3NcbiAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTsgLy8gQWNrbm93bGVkZ2UgcmVjZWlwdFxuICB9IGVsc2UgaWYgKHJlcXVlc3QuYWN0aW9uID09PSBcImF1ZGlvUHJvY2Vzc2luZ1N0YXJ0ZWRcIikge1xuICAgICAgLy8gT3B0aW9uYWw6IENvbnRlbnQgc2NyaXB0IGNvbmZpcm1zIFdlYiBBdWRpbyBwcm9jZXNzaW5nIHN0YXJ0ZWRcbiAgICAgIGNvbnNvbGUubG9nKFwiQ29udGVudCBzY3JpcHQgcmVwb3J0cyBhdWRpbyBwcm9jZXNzaW5nIHN0YXJ0ZWQuXCIpO1xuICAgICAgc2VuZFJlc3BvbnNlKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgfVxuICAvLyBBZGQgb3RoZXIgbWVzc2FnZSBoYW5kbGVycyBpZiBuZWVkZWRcbn0pO1xuXG4vLyAtLS0gSW5pdGlhbCBzdGF0ZSBjaGVjayAob3B0aW9uYWwpIC0tLVxuY29uc29sZS5sb2coXCJCYWNrZ3JvdW5kIHNlcnZpY2Ugd29ya2VyIGluaXRpYWxpemVkLiBTdGF0ZTogSWRsZS5cIik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9