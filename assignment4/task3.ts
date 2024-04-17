let var1:number=10,var2:number=20;
console.log(`VALUE OF VAR1 BEFORE SWAP IS ${var1}`)
console.log(`VALUE OF VAR2 BEFORE SWAP IS ${var2}`)
var1=var1+var2;
var2=var1-var2;
var1=var1-var2;
console.log(`VALUE OF VAR1 AFTER SWAP IS ${var1}`)
console.log(`VALUE OF VAR2 AFTER SWAP IS ${var2}`)