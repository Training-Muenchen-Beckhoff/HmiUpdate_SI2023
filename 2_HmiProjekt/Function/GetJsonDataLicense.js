// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.44/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var _2_HmiProjekt;
        (function (_2_HmiProjekt) {
            function GetJsonDataLicense(ctx, LicType) {
                console.log(LicType);
                var txt = '';

                // call of method with parameter
                TcHmi.Symbol.writeEx("%s%PLC1.HmiFunctionLizenz.iAllLicenses.GetJsonDataLicenses%/s%", { LicensesType: LicType }, function (data) {
                    console.log(ctx);

                    if (data.error === TcHmi.Errors.NONE) {
                        // success
                        //                        txt = data.response.commands[0].readValue;
                        ctx.success(data.value);
                    } else {
                        // error
                        ctx.error(data.error);
                    }

                });

                return txt;
            }
            _2_HmiProjekt.GetJsonDataLicense = GetJsonDataLicense;
        })(_2_HmiProjekt = Functions._2_HmiProjekt || (Functions._2_HmiProjekt = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('GetJsonDataLicense', 'TcHmi.Functions._2_HmiProjekt', TcHmi.Functions._2_HmiProjekt.GetJsonDataLicense);
