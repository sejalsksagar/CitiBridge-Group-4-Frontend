export class Transaction{
    transactionId: String;
    impactDate: Date;
    payerName: String;
    payerAccount: String;
    payeeName: String;
    payeeAccount: String;
    amount: DoubleRange;
    validate: String;
    screen: String;

    constructor(transactionId: String, impactDate: Date, payerName: String, payerAccount: String, payeeName: String, payeeAccount: String, amount: DoubleRange, validate: String, screen: String){
        this.transactionId = transactionId;
        this.impactDate = impactDate;
        this.payerName = payerName;
        this.payerAccount = payerAccount;
        this.payeeName = payeeName;
        this.payeeAccount = payeeAccount;
        this.amount = amount;
        this.validate = validate;
        this.screen = screen;
    }
}