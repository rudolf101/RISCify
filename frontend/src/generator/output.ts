
    class Add {
        name: string;
        fields: any[];
        args: any[];
    
        constructor() {
            this.name = "add";
            this.fields = [
                
                {
                    mnemonic: "opcode",
                    span: "2,6",
                    value: "00110",
                },
                
                {
                    mnemonic: "funct3",
                    span: "12:14",
                    value: "000",
                },
                
                {
                    mnemonic: "funct7",
                    span: "25:31",
                    value: "0000000",
                },
                
            ];
            this.args = [
                
                {
                    mnemonic: "rd",
                    span: "7:11",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs1",
                    span: "15:19",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs2",
                    span: "20:24",
                    display: "regx",
                },
                
            ];
        }
    }
    
    class Sub {
        name: string;
        fields: any[];
        args: any[];
    
        constructor() {
            this.name = "sub";
            this.fields = [
                
                {
                    mnemonic: "opcode",
                    span: "2,6",
                    value: "00110",
                },
                
                {
                    mnemonic: "funct3",
                    span: "12:14",
                    value: "000",
                },
                
                {
                    mnemonic: "funct7",
                    span: "25:31",
                    value: "0000010",
                },
                
            ];
            this.args = [
                
                {
                    mnemonic: "rd",
                    span: "7:11",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs1",
                    span: "15:19",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs2",
                    span: "20:24",
                    display: "regx",
                },
                
            ];
        }
    }
    
    class Slt {
        name: string;
        fields: any[];
        args: any[];
    
        constructor() {
            this.name = "slt";
            this.fields = [
                
                {
                    mnemonic: "opcode",
                    span: "2,6",
                    value: "00110",
                },
                
                {
                    mnemonic: "funct3",
                    span: "12:14",
                    value: "010",
                },
                
                {
                    mnemonic: "funct7",
                    span: "25:31",
                    value: "0000000",
                },
                
            ];
            this.args = [
                
                {
                    mnemonic: "rd",
                    span: "7:11",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs1",
                    span: "15:19",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs2",
                    span: "20:24",
                    display: "regx",
                },
                
            ];
        }
    }
    
    class Sltu {
        name: string;
        fields: any[];
        args: any[];
    
        constructor() {
            this.name = "sltu";
            this.fields = [
                
                {
                    mnemonic: "opcode",
                    span: "2,6",
                    value: "00110",
                },
                
                {
                    mnemonic: "funct3",
                    span: "12:14",
                    value: "110",
                },
                
                {
                    mnemonic: "funct7",
                    span: "25:31",
                    value: "0000000",
                },
                
            ];
            this.args = [
                
                {
                    mnemonic: "rd",
                    span: "7:11",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs1",
                    span: "15:19",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs2",
                    span: "20:24",
                    display: "regx",
                },
                
            ];
        }
    }
    
    class And {
        name: string;
        fields: any[];
        args: any[];
    
        constructor() {
            this.name = "and";
            this.fields = [
                
                {
                    mnemonic: "opcode",
                    span: "2,6",
                    value: "00110",
                },
                
                {
                    mnemonic: "funct3",
                    span: "12:14",
                    value: "111",
                },
                
                {
                    mnemonic: "funct7",
                    span: "25:31",
                    value: "0000000",
                },
                
            ];
            this.args = [
                
                {
                    mnemonic: "rd",
                    span: "7:11",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs1",
                    span: "15:19",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs2",
                    span: "20:24",
                    display: "regx",
                },
                
            ];
        }
    }
    
    class Or {
        name: string;
        fields: any[];
        args: any[];
    
        constructor() {
            this.name = "or";
            this.fields = [
                
                {
                    mnemonic: "opcode",
                    span: "2,6",
                    value: "00110",
                },
                
                {
                    mnemonic: "funct3",
                    span: "12:14",
                    value: "011",
                },
                
                {
                    mnemonic: "funct7",
                    span: "25:31",
                    value: "0000000",
                },
                
            ];
            this.args = [
                
                {
                    mnemonic: "rd",
                    span: "7:11",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs1",
                    span: "15:19",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs2",
                    span: "20:24",
                    display: "regx",
                },
                
            ];
        }
    }
    
    class Xor {
        name: string;
        fields: any[];
        args: any[];
    
        constructor() {
            this.name = "xor";
            this.fields = [
                
                {
                    mnemonic: "opcode",
                    span: "2,6",
                    value: "00110",
                },
                
                {
                    mnemonic: "funct3",
                    span: "12:14",
                    value: "001",
                },
                
                {
                    mnemonic: "funct7",
                    span: "25:31",
                    value: "0000000",
                },
                
            ];
            this.args = [
                
                {
                    mnemonic: "rd",
                    span: "7:11",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs1",
                    span: "15:19",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs2",
                    span: "20:24",
                    display: "regx",
                },
                
            ];
        }
    }
    
    class Sll {
        name: string;
        fields: any[];
        args: any[];
    
        constructor() {
            this.name = "sll";
            this.fields = [
                
                {
                    mnemonic: "opcode",
                    span: "2,6",
                    value: "00110",
                },
                
                {
                    mnemonic: "funct3",
                    span: "12:14",
                    value: "100",
                },
                
                {
                    mnemonic: "funct7",
                    span: "25:31",
                    value: "0000000",
                },
                
            ];
            this.args = [
                
                {
                    mnemonic: "rd",
                    span: "7:11",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs1",
                    span: "15:19",
                    display: "regx",
                },
                
                {
                    mnemonic: "imm",
                    span: "20:24",
                    display: "unum",
                },
                
            ];
        }
    }
    
    class Srl {
        name: string;
        fields: any[];
        args: any[];
    
        constructor() {
            this.name = "srl";
            this.fields = [
                
                {
                    mnemonic: "opcode",
                    span: "2,6",
                    value: "00110",
                },
                
                {
                    mnemonic: "funct3",
                    span: "12:14",
                    value: "101",
                },
                
                {
                    mnemonic: "funct7",
                    span: "25:31",
                    value: "0000000",
                },
                
            ];
            this.args = [
                
                {
                    mnemonic: "rd",
                    span: "7:11",
                    display: "regx",
                },
                
                {
                    mnemonic: "rs1",
                    span: "15:19",
                    display: "regx",
                },
                
                {
                    mnemonic: "imm",
                    span: "20:24",
                    display: "unum",
                },
                
            ];
        }
    }
    
    