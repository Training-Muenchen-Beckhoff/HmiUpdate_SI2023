// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.44/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var _2_HmiProjekt;
        (function (_2_HmiProjekt) {
            function AdditionWithProperties() {

                TcHmi.Symbol.readEx2("%s%PLC1.HmiFunctionAddition.iHmiAddition::AdditionWithProperty%/s%", function (data) {
                    console.log(data);
                });

            }
            _2_HmiProjekt.AdditionWithProperties = AdditionWithProperties;
        })(_2_HmiProjekt = Functions._2_HmiProjekt || (Functions._2_HmiProjekt = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('AdditionWithProperties', 'TcHmi.Functions._2_HmiProjekt', TcHmi.Functions._2_HmiProjekt.AdditionWithProperties);
