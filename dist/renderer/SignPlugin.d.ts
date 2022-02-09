declare type CallBackFunction = (callback: {
    code: number;
    data: any;
}) => void;
interface IMessage {
    nonce: string;
    callback: CallBackFunction;
}
interface IData {
    action: string;
    data: any;
}
declare class SignPlugin {
    msgTable: Array<IMessage>;
    esignws: WebSocket | null;
    isConnected: boolean;
    dispose(): void;
    connect(stateCallback: CallBackFunction): void;
    execute(msg: IData, callback: CallBackFunction): void;
}
export declare const eSignAction: {
    SignHash: string;
    SignData: string;
    SignXml: string;
    GetCertificateList: string;
    GetCertAction: string;
    GetPKCS11ModuleList: string;
    VerifyCertificate: string;
};
export declare const eSignPlugin: SignPlugin;
export {};
//# sourceMappingURL=SignPlugin.d.ts.map