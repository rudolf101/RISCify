
  import { YAMLData } from './models'; 
  
  export const YAMLDataGen: YAMLData[] = [
  {
    "Args": {
      "a_rd": {
        "name": "rd",
        "span": "7:11",
        "display": "regx"
      },
      "a_rs1": {
        "name": "rs1",
        "span": "15:19",
        "display": "par(regx)"
      },
      "a_rs2": {
        "name": "rs2",
        "span": "20:24",
        "display": "regx"
      }
    },
    "Fields": {
      "a_op": {
        "name": "opcode",
        "span": "0:6",
        "value": "1111010"
      },
      "a_f3_w": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "a_f3_d": {
        "name": "funct3",
        "span": "12:14",
        "value": "110"
      },
      "a_f5_lr": {
        "name": "funct5",
        "span": "27:31",
        "value": "01000"
      },
      "a_f5_sc": {
        "name": "funct5",
        "span": "27:31",
        "value": "01000"
      },
      "a_f5_swap": {
        "name": "funct5",
        "span": "27:31",
        "value": "01000"
      },
      "a_f5_add": {
        "name": "funct5",
        "span": "27:31",
        "value": "01000"
      },
      "a_f5_xor": {
        "name": "funct5",
        "span": "27:31",
        "value": "01000"
      },
      "a_f5_and": {
        "name": "funct5",
        "span": "27:31",
        "value": "01000"
      },
      "a_f5_or": {
        "name": "funct5",
        "span": "27:31",
        "value": "01000"
      },
      "a_f5_min": {
        "name": "funct5",
        "span": "27:31",
        "value": "01000"
      },
      "a_f5_max": {
        "name": "funct5",
        "span": "27:31",
        "value": "01000"
      },
      "a_f5_minu": {
        "name": "funct5",
        "span": "27:31",
        "value": "01000"
      },
      "a_f5_maxu": {
        "name": "funct5",
        "span": "27:31",
        "value": "01000"
      },
      "a_rl0": {
        "name": "rl",
        "span": "25",
        "value": "0"
      },
      "a_rl1": {
        "name": "rl",
        "span": "25",
        "value": "1"
      },
      "a_aq0": {
        "name": "aq",
        "span": "26",
        "value": "0"
      },
      "a_aq1": {
        "name": "aq",
        "span": "26",
        "value": "1"
      },
      "a_rs2_0": {
        "name": "rs2",
        "span": "20:24",
        "value": "00000"
      }
    },
    "Sets": [
      {
        "name": "RV32A",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "lr.w",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_lr",
              "a_rl0",
              "a_aq0",
              "a_rs2_0"
            ],
            "args": [
              "a_rd",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "lr.w.aq",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_lr",
              "a_rl0",
              "a_aq1",
              "a_rs2_0"
            ],
            "args": [
              "a_rd",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "lr.w.rl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_lr",
              "a_rl1",
              "a_aq0",
              "a_rs2_0"
            ],
            "args": [
              "a_rd",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "lr.w.aqrl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_lr",
              "a_rl1",
              "a_aq1",
              "a_rs2_0"
            ],
            "args": [
              "a_rd",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "sc.w",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_sc",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "sc.w.aq",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_sc",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "sc.w.rl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_sc",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "sc.w.aqrl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_sc",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoswap.w",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_swap",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoswap.w.aq",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_swap",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoswap.w.rl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_swap",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoswap.w.aqrl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_swap",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoadd.w",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_add",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoadd.w.aq",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_add",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoadd.w.rl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_add",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoadd.w.aqrl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_add",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoxor.w",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_xor",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoxor.w.aq",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_xor",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoxor.w.rl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_xor",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoxor.w.aqrl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_xor",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoand.w",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_and",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoand.w.aq",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_and",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoand.w.rl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_and",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoand.w.aqrl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_and",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoor.w",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_or",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoor.w.aq",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_or",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoor.w.rl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_or",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoor.w.aqrl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_or",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomin.w",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_min",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomin.w.aq",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_min",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomin.w.rl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_min",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomin.w.aqrl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_min",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomax.w",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_max",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomax.w.aq",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_max",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomax.w.rl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_max",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomax.w.aqrl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_max",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amominu.w",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_minu",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amominu.w.aq",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_minu",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amominu.w.rl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_minu",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amominu.w.aqrl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_minu",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomaxu.w",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_maxu",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomaxu.w.aq",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_maxu",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomaxu.w.rl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_maxu",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomaxu.w.aqrl",
            "fields": [
              "a_op",
              "a_f3_w",
              "a_f5_maxu",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          }
        ]
      },
      {
        "name": "RV64A",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "lr.d",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_lr",
              "a_rl0",
              "a_aq0",
              "a_rs2_0"
            ],
            "args": [
              "a_rd",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "lr.d.aq",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_lr",
              "a_rl0",
              "a_aq1",
              "a_rs2_0"
            ],
            "args": [
              "a_rd",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "lr.d.rl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_lr",
              "a_rl1",
              "a_aq0",
              "a_rs2_0"
            ],
            "args": [
              "a_rd",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "lr.d.aqrl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_lr",
              "a_rl1",
              "a_aq1",
              "a_rs2_0"
            ],
            "args": [
              "a_rd",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "sc.d",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_sc",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "sc.d.aq",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_sc",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "sc.d.rl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_sc",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "sc.d.aqrl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_sc",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoswap.d",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_swap",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoswap.d.aq",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_swap",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoswap.d.rl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_swap",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoswap.d.aqrl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_swap",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoadd.d",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_add",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoadd.d.aq",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_add",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoadd.d.rl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_add",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoadd.d.aqrl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_add",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoxor.d",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_xor",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoxor.d.aq",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_xor",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoxor.d.rl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_xor",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoxor.d.aqrl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_xor",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoand.d",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_and",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoand.d.aq",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_and",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoand.d.rl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_and",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoand.d.aqrl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_and",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoor.d",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_or",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoor.d.aq",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_or",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoor.d.rl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_or",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amoor.d.aqrl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_or",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomin.d",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_min",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomin.d.aq",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_min",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomin.d.rl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_min",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomin.d.aqrl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_min",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomax.d",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_max",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomax.d.aq",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_max",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomax.d.rl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_max",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomax.d.aqrl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_max",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amominu.d",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_minu",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amominu.d.aq",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_minu",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amominu.d.rl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_minu",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amominu.d.aqrl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_minu",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomaxu.d",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_maxu",
              "a_rl0",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomaxu.d.aq",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_maxu",
              "a_rl0",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomaxu.d.rl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_maxu",
              "a_rl1",
              "a_aq0"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          },
          {
            "mnemonic": "amomaxu.d.aqrl",
            "fields": [
              "a_op",
              "a_f3_d",
              "a_f5_maxu",
              "a_rl1",
              "a_aq1"
            ],
            "args": [
              "a_rd",
              "a_rs2",
              "a_rs1"
            ]
          }
        ]
      }
    ]
  },
  {
    "Args": {
      "d_rd_x": {
        "name": "rd",
        "span": "7:11",
        "display": "regx"
      },
      "d_rs1_x": {
        "name": "rs1",
        "span": "15:19",
        "display": "regx"
      },
      "d_rs2_x": {
        "name": "rs2",
        "span": "20:24",
        "display": "regx"
      },
      "d_rs3_x": {
        "name": "rs3",
        "span": "27:31",
        "display": "regx"
      },
      "d_rd": {
        "name": "rd",
        "span": "7:11",
        "display": "regf"
      },
      "d_rs1": {
        "name": "rs1",
        "span": "15:19",
        "display": "regf"
      },
      "d_rs2": {
        "name": "rs2",
        "span": "20:24",
        "display": "regf"
      },
      "d_rs3": {
        "name": "rs3",
        "span": "27:31",
        "display": "regf"
      },
      "d_rm": {
        "name": "rm",
        "span": "12:14",
        "display": "rm"
      },
      "d_i_imm": {
        "name": "imm",
        "span": "20:31",
        "display": "num"
      },
      "d_s_imm": {
        "name": "imm",
        "span": "7:11,25:31",
        "display": "num"
      }
    },
    "Fields": {
      "d_fmt": {
        "name": "fmt",
        "span": "25:26",
        "value": "10"
      },
      "d_fmt_cvtsd": {
        "name": "fmt",
        "span": "25:26",
        "value": "00"
      },
      "d_opcode_lw": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110000"
      },
      "d_opcode_sw": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110010"
      },
      "d_opcode_madd": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100010"
      },
      "d_opcode_msub": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110010"
      },
      "d_opcode_nmsub": {
        "name": "opcode",
        "span": "0:6",
        "value": "1101010"
      },
      "d_opcode_nmadd": {
        "name": "opcode",
        "span": "0:6",
        "value": "1111010"
      },
      "d_opcode_op": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100101"
      },
      "d_funct3_lw": {
        "name": "funct3",
        "span": "12:14",
        "value": "110"
      },
      "d_funct3_sw": {
        "name": "funct3",
        "span": "12:14",
        "value": "110"
      },
      "d_funct3_sgnj": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "d_funct3_sgnjn": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "d_funct3_sgnjx": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "d_funct3_min": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "d_funct3_max": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "d_funct3_mv": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "d_funct3_eq": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "d_funct3_lt": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "d_funct3_le": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "d_funct3_class": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "d_funct5_add": {
        "name": "funct5",
        "span": "27:14",
        "value": "00000"
      },
      "d_funct5_sub": {
        "name": "funct5",
        "span": "27:14",
        "value": "10000"
      },
      "d_funct5_mul": {
        "name": "funct5",
        "span": "27:14",
        "value": "01000"
      },
      "d_funct5_div": {
        "name": "funct5",
        "span": "27:14",
        "value": "11000"
      },
      "d_funct5_sqrt": {
        "name": "funct5",
        "span": "27:14",
        "value": "11010"
      },
      "d_funct5_sgnj": {
        "name": "funct5",
        "span": "27:14",
        "value": "00100"
      },
      "d_funct5_minmax": {
        "name": "funct5",
        "span": "27:14",
        "value": "10100"
      },
      "d_funct5_cvtff": {
        "name": "funct5",
        "span": "27:14",
        "value": "00010"
      },
      "d_funct5_cmp": {
        "name": "funct5",
        "span": "27:14",
        "value": "00101"
      },
      "d_funct5_class": {
        "name": "funct5",
        "span": "27:14",
        "value": "00111"
      },
      "d_funct5_cvtif": {
        "name": "funct5",
        "span": "27:14",
        "value": "00011"
      },
      "d_funct5_cvtfi": {
        "name": "funct5",
        "span": "27:14",
        "value": "01011"
      },
      "d_funct5_mvfi": {
        "name": "funct5",
        "span": "27:14",
        "value": "00111"
      },
      "d_funct5_mvif": {
        "name": "funct5",
        "span": "27:14",
        "value": "01111"
      },
      "d_rs2_0": {
        "name": "rs2",
        "span": "20:24",
        "value": "00000"
      },
      "d_rs2_1": {
        "name": "rs2",
        "span": "20:24",
        "value": "10000"
      },
      "d_rs2_2": {
        "name": "rs2",
        "span": "20:24",
        "value": "01000"
      },
      "d_rs2_3": {
        "name": "rs2",
        "span": "20:24",
        "value": "11000"
      }
    },
    "Sets": [
      {
        "name": "RV32D",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "flw",
            "fields": [
              "d_opcode_lw",
              "d_funct3_lw"
            ],
            "args": [
              "d_rd",
              "d_i_imm",
              "d_rs1_x"
            ]
          },
          {
            "mnemonic": "fsw",
            "fields": [
              "d_opcode_sw",
              "d_funct3_sw"
            ],
            "args": [
              "d_rs2",
              "d_i_imm",
              "d_rs1_x"
            ]
          },
          {
            "mnemonic": "fmadd.d",
            "fields": [
              "d_opcode_madd",
              "d_fmt"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rs2",
              "d_rs3",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fmsub.d",
            "fields": [
              "d_opcode_msub",
              "d_fmt"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rs2",
              "d_rs3",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fnmsub.d",
            "fields": [
              "d_opcode_nmsub",
              "d_fmt"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rs2",
              "d_rs3",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fmdd.d",
            "fields": [
              "d_opcode_madd",
              "d_fmt"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rs2",
              "d_rs3",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fadd.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_add"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rs2",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fsub.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_sub"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rs2",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fmul.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_mul"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rs2",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fdiv.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_div"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rs2",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fsqrt.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_sqrt",
              "d_rs2_0"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fsgnj.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_sgnj",
              "d_funct3_sgnj"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rs2"
            ]
          },
          {
            "mnemonic": "fsgnjn.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_sgnj",
              "d_funct3_sgnjn"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rs2"
            ]
          },
          {
            "mnemonic": "fsgnjx.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_sgnj",
              "d_funct3_sgnjx"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rs2"
            ]
          },
          {
            "mnemonic": "fmin.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_minmax",
              "d_funct3_min"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rs2"
            ]
          },
          {
            "mnemonic": "fmax.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_minmax",
              "d_funct3_max"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rs2"
            ]
          },
          {
            "mnemonic": "fcvt.s.d",
            "fields": [
              "d_opcode_op",
              "d_fmt_cvtsd",
              "d_funct5_cvtff",
              "d_rs2_1"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fcvt.d.s",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_cvtff",
              "d_rs2_0"
            ],
            "args": [
              "d_rd",
              "d_rs1",
              "d_rm"
            ]
          },
          {
            "mnemonic": "feq.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_cmp",
              "d_funct3_eq"
            ],
            "args": [
              "d_rd_x",
              "d_rs1",
              "d_rs2"
            ]
          },
          {
            "mnemonic": "flt.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_cmp",
              "d_funct3_lt"
            ],
            "args": [
              "d_rd_x",
              "d_rs1",
              "d_rs2"
            ]
          },
          {
            "mnemonic": "fle.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_cmp",
              "d_funct3_le"
            ],
            "args": [
              "d_rd_x",
              "d_rs1",
              "d_rs2"
            ]
          },
          {
            "mnemonic": "class.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_class",
              "d_funct3_class",
              "d_rs2_0"
            ],
            "args": [
              "d_rd_x",
              "d_rs1"
            ]
          },
          {
            "mnemonic": "fcvt.w.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_cvtif",
              "d_rs2_0"
            ],
            "args": [
              "d_rd",
              "d_rs1_x",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fcvt.wu.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_cvtif",
              "d_rs2_1"
            ],
            "args": [
              "d_rd",
              "d_rs1_x",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fcvt.d.w",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_cvtfi",
              "d_rs2_0"
            ],
            "args": [
              "d_rd_x",
              "d_rs1",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fcvt.d.wu",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_cvtfi",
              "d_rs2_1"
            ],
            "args": [
              "d_rd_x",
              "d_rs1",
              "d_rm"
            ]
          }
        ]
      },
      {
        "name": "RV64D",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "fcvt.l.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_cvtif",
              "d_rs2_2"
            ],
            "args": [
              "d_rd",
              "d_rs1_x",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fcvt.lu.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_cvtif",
              "d_rs2_3"
            ],
            "args": [
              "d_rd",
              "d_rs1_x",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fmv.x.d",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct3_mv",
              "d_funct5_mvfi",
              "d_rs2_0"
            ],
            "args": [
              "d_rd_x",
              "d_rs1"
            ]
          },
          {
            "mnemonic": "fcvt.d.l",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_cvtfi",
              "d_rs2_2"
            ],
            "args": [
              "d_rd_x",
              "d_rs1",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fcvt.d.lu",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct5_cvtfi",
              "d_rs2_3"
            ],
            "args": [
              "d_rd_x",
              "d_rs1",
              "d_rm"
            ]
          },
          {
            "mnemonic": "fmv.d.x",
            "fields": [
              "d_opcode_op",
              "d_fmt",
              "d_funct3_mv",
              "d_funct5_mvif",
              "d_rs2_0"
            ],
            "args": [
              "d_rd",
              "d_rs1_x"
            ]
          }
        ]
      }
    ]
  },
  {
    "Args": {
      "f_rd_x": {
        "name": "rd",
        "span": "7:11",
        "display": "regx"
      },
      "f_rs1_x": {
        "name": "rs1",
        "span": "15:19",
        "display": "regx"
      },
      "f_rs2_x": {
        "name": "rs2",
        "span": "20:24",
        "display": "regx"
      },
      "f_rs3_x": {
        "name": "rs3",
        "span": "27:31",
        "display": "regx"
      },
      "f_rd": {
        "name": "rd",
        "span": "7:11",
        "display": "regf"
      },
      "f_rs1": {
        "name": "rs1",
        "span": "15:19",
        "display": "regf"
      },
      "f_rs2": {
        "name": "rs2",
        "span": "20:24",
        "display": "regf"
      },
      "f_rs3": {
        "name": "rs3",
        "span": "27:31",
        "display": "regf"
      },
      "f_rm": {
        "name": "rm",
        "span": "12:14",
        "display": "rm"
      },
      "f_i_imm": {
        "name": "imm",
        "span": "20:31",
        "display": "num"
      },
      "f_s_imm": {
        "name": "imm",
        "span": "7:11,25:31",
        "display": "num"
      }
    },
    "Fields": {
      "f_fmt": {
        "name": "fmt",
        "span": "25:26",
        "value": "00"
      },
      "f_opcode_lw": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110000"
      },
      "f_opcode_sw": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110010"
      },
      "f_opcode_madd": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100010"
      },
      "f_opcode_msub": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110010"
      },
      "f_opcode_nmsub": {
        "name": "opcode",
        "span": "0:6",
        "value": "1101010"
      },
      "f_opcode_nmadd": {
        "name": "opcode",
        "span": "0:6",
        "value": "1111010"
      },
      "f_opcode_op": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100101"
      },
      "f_funct3_lw": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "f_funct3_sw": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "f_funct3_sgnj": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "f_funct3_sgnjn": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "f_funct3_sgnjx": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "f_funct3_min": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "f_funct3_max": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "f_funct3_mv": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "f_funct3_eq": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "f_funct3_lt": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "f_funct3_le": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "f_funct3_class": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "f_funct5_add": {
        "name": "funct5",
        "span": "27:14",
        "value": "00000"
      },
      "f_funct5_sub": {
        "name": "funct5",
        "span": "27:14",
        "value": "10000"
      },
      "f_funct5_mul": {
        "name": "funct5",
        "span": "27:14",
        "value": "01000"
      },
      "f_funct5_div": {
        "name": "funct5",
        "span": "27:14",
        "value": "11000"
      },
      "f_funct5_sqrt": {
        "name": "funct5",
        "span": "27:14",
        "value": "11010"
      },
      "f_funct5_sgnj": {
        "name": "funct5",
        "span": "27:14",
        "value": "00100"
      },
      "f_funct5_minmax": {
        "name": "funct5",
        "span": "27:14",
        "value": "10100"
      },
      "f_funct5_cvtif": {
        "name": "funct5",
        "span": "27:14",
        "value": "00011"
      },
      "f_funct5_mvfi": {
        "name": "funct5",
        "span": "27:14",
        "value": "00111"
      },
      "f_funct5_cmp": {
        "name": "funct5",
        "span": "27:14",
        "value": "00101"
      },
      "f_funct5_class": {
        "name": "funct5",
        "span": "27:14",
        "value": "00111"
      },
      "f_funct5_cvtfi": {
        "name": "funct5",
        "span": "27:14",
        "value": "01011"
      },
      "f_funct5_mvif": {
        "name": "funct5",
        "span": "27:14",
        "value": "01111"
      },
      "f_rs2_0": {
        "name": "rs2",
        "span": "20:24",
        "value": "00000"
      },
      "f_rs2_1": {
        "name": "rs2",
        "span": "20:24",
        "value": "10000"
      },
      "f_rs2_2": {
        "name": "rs2",
        "span": "20:24",
        "value": "01000"
      },
      "f_rs2_3": {
        "name": "rs2",
        "span": "20:24",
        "value": "11000"
      }
    },
    "Sets": [
      {
        "name": "RV32F",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "flw",
            "fields": [
              "f_opcode_lw",
              "f_funct3_lw"
            ],
            "args": [
              "f_rd",
              "f_i_imm",
              "f_rs1_x"
            ]
          },
          {
            "mnemonic": "fsw",
            "fields": [
              "f_opcode_sw",
              "f_funct3_sw"
            ],
            "args": [
              "f_rs2",
              "f_i_imm",
              "f_rs1_x"
            ]
          },
          {
            "mnemonic": "fmadd.s",
            "fields": [
              "f_opcode_madd",
              "f_fmt"
            ],
            "args": [
              "f_rd",
              "f_rs1",
              "f_rs2",
              "f_rs3",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fmsub.s",
            "fields": [
              "f_opcode_msub",
              "f_fmt"
            ],
            "args": [
              "f_rd",
              "f_rs1",
              "f_rs2",
              "f_rs3",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fnmsub.s",
            "fields": [
              "f_opcode_nmsub",
              "f_fmt"
            ],
            "args": [
              "f_rd",
              "f_rs1",
              "f_rs2",
              "f_rs3",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fmdd.s",
            "fields": [
              "f_opcode_madd",
              "f_fmt"
            ],
            "args": [
              "f_rd",
              "f_rs1",
              "f_rs2",
              "f_rs3",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fadd.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_add"
            ],
            "args": [
              "f_rd",
              "f_rs1",
              "f_rs2",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fsub.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_sub"
            ],
            "args": [
              "f_rd",
              "f_rs1",
              "f_rs2",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fmul.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_mul"
            ],
            "args": [
              "f_rd",
              "f_rs1",
              "f_rs2",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fdiv.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_div"
            ],
            "args": [
              "f_rd",
              "f_rs1",
              "f_rs2",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fsqrt.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_sqrt",
              "f_rs2_0"
            ],
            "args": [
              "f_rd",
              "f_rs1",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fsgnj.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_sgnj",
              "f_funct3_sgnj"
            ],
            "args": [
              "f_rd",
              "f_rs1",
              "f_rs2"
            ]
          },
          {
            "mnemonic": "fsgnjn.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_sgnj",
              "f_funct3_sgnjn"
            ],
            "args": [
              "f_rd",
              "f_rs1",
              "f_rs2"
            ]
          },
          {
            "mnemonic": "fsgnjx.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_sgnj",
              "f_funct3_sgnjx"
            ],
            "args": [
              "f_rd",
              "f_rs1",
              "f_rs2"
            ]
          },
          {
            "mnemonic": "fmin.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_minmax",
              "f_funct3_min"
            ],
            "args": [
              "f_rd",
              "f_rs1",
              "f_rs2"
            ]
          },
          {
            "mnemonic": "fmax.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_minmax",
              "f_funct3_max"
            ],
            "args": [
              "f_rd",
              "f_rs1",
              "f_rs2"
            ]
          },
          {
            "mnemonic": "fcvt.w.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_cvtif",
              "f_rs2_0"
            ],
            "args": [
              "f_rd",
              "f_rs1_x",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fcvt.wu.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_cvtif",
              "f_rs2_1"
            ],
            "args": [
              "f_rd",
              "f_rs1_x",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fmv.x.w",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct3_mv",
              "f_funct5_mvfi",
              "f_rs2_0"
            ],
            "args": [
              "f_rd_x",
              "f_rs1"
            ]
          },
          {
            "mnemonic": "feq.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_cmp",
              "f_funct3_eq"
            ],
            "args": [
              "f_rd_x",
              "f_rs1",
              "f_rs2"
            ]
          },
          {
            "mnemonic": "flt.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_cmp",
              "f_funct3_lt"
            ],
            "args": [
              "f_rd_x",
              "f_rs1",
              "f_rs2"
            ]
          },
          {
            "mnemonic": "fle.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_cmp",
              "f_funct3_le"
            ],
            "args": [
              "f_rd_x",
              "f_rs1",
              "f_rs2"
            ]
          },
          {
            "mnemonic": "class.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_class",
              "f_funct3_class",
              "f_rs2_0"
            ],
            "args": [
              "f_rd_x",
              "f_rs1"
            ]
          },
          {
            "mnemonic": "fcvt.s.w",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_cvtfi",
              "f_rs2_0"
            ],
            "args": [
              "f_rd_x",
              "f_rs1",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fcvt.s.wu",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_cvtfi",
              "f_rs2_1"
            ],
            "args": [
              "f_rd_x",
              "f_rs1",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fmv.w.x",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct3_mv",
              "f_funct5_mvif",
              "f_rs2_0"
            ],
            "args": [
              "f_rd",
              "f_rs1_x"
            ]
          }
        ]
      },
      {
        "name": "RV64F",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "fcvt.l.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_cvtif",
              "f_rs2_2"
            ],
            "args": [
              "f_rd",
              "f_rs1_x",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fcvt.lu.s",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_cvtif",
              "f_rs2_3"
            ],
            "args": [
              "f_rd",
              "f_rs1_x",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fcvt.s.l",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_cvtfi",
              "f_rs2_2"
            ],
            "args": [
              "f_rd_x",
              "f_rs1",
              "f_rm"
            ]
          },
          {
            "mnemonic": "fcvt.s.lu",
            "fields": [
              "f_opcode_op",
              "f_fmt",
              "f_funct5_cvtfi",
              "f_rs2_3"
            ],
            "args": [
              "f_rd_x",
              "f_rs1",
              "f_rm"
            ]
          }
        ]
      }
    ]
  },
  {
    "Args": {
      "m_rd": {
        "name": "rd",
        "span": "7:11",
        "display": "regx"
      },
      "m_rs1": {
        "name": "rs1",
        "span": "15:19",
        "display": "regx"
      },
      "m_rs2": {
        "name": "rs2",
        "span": "20:24",
        "display": "regx"
      }
    },
    "Fields": {
      "m_opcode": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100110"
      },
      "m_opcode_w": {
        "name": "opcode",
        "span": "0:6",
        "value": "1101110"
      },
      "m_funct3_mul": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "m_funct3_mulh": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "m_funct3_mulhsu": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "m_funct3_mulhu": {
        "name": "funct3",
        "span": "12:14",
        "value": "110"
      },
      "m_funct3_div": {
        "name": "funct3",
        "span": "12:14",
        "value": "001"
      },
      "m_funct3_divu": {
        "name": "funct3",
        "span": "12:14",
        "value": "101"
      },
      "m_funct3_rem": {
        "name": "funct3",
        "span": "12:14",
        "value": "011"
      },
      "m_funct3_remu": {
        "name": "funct3",
        "span": "12:14",
        "value": "111"
      },
      "m_funct7": {
        "name": "funct7",
        "span": "25:31",
        "value": "1000000"
      }
    },
    "Sets": [
      {
        "name": "RV32M",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "mul",
            "fields": [
              "m_opcode",
              "m_funct3_mul",
              "m_funct7"
            ],
            "args": [
              "m_rd",
              "m_rs1",
              "m_rs2"
            ]
          },
          {
            "mnemonic": "mulh",
            "fields": [
              "m_opcode",
              "m_funct3_mulh",
              "m_funct7"
            ],
            "args": [
              "m_rd",
              "m_rs1",
              "m_rs2"
            ]
          },
          {
            "mnemonic": "mulhsu",
            "fields": [
              "m_opcode",
              "m_funct3_mulhsu",
              "m_funct7"
            ],
            "args": [
              "m_rd",
              "m_rs1",
              "m_rs2"
            ]
          },
          {
            "mnemonic": "mulhu",
            "fields": [
              "m_opcode",
              "m_funct3_mulhu",
              "m_funct7"
            ],
            "args": [
              "m_rd",
              "m_rs1",
              "m_rs2"
            ]
          },
          {
            "mnemonic": "div",
            "fields": [
              "m_opcode",
              "m_funct3_div",
              "m_funct7"
            ],
            "args": [
              "m_rd",
              "m_rs1",
              "m_rs2"
            ]
          },
          {
            "mnemonic": "divu",
            "fields": [
              "m_opcode",
              "m_funct3_divu",
              "m_funct7"
            ],
            "args": [
              "m_rd",
              "m_rs1",
              "m_rs2"
            ]
          },
          {
            "mnemonic": "rem",
            "fields": [
              "m_opcode",
              "m_funct3_rem",
              "m_funct7"
            ],
            "args": [
              "m_rd",
              "m_rs1",
              "m_rs2"
            ]
          },
          {
            "mnemonic": "remu",
            "fields": [
              "m_opcode",
              "m_funct3_remu",
              "m_funct7"
            ],
            "args": [
              "m_rd",
              "m_rs1",
              "m_rs2"
            ]
          }
        ]
      },
      {
        "name": "RV64M",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "mulw",
            "fields": [
              "m_opcode_w",
              "m_funct3_mul",
              "m_funct7"
            ],
            "args": [
              "m_rd",
              "m_rs1",
              "m_rs2"
            ]
          },
          {
            "mnemonic": "divw",
            "fields": [
              "m_opcode_w",
              "m_funct3_div",
              "m_funct7"
            ],
            "args": [
              "m_rd",
              "m_rs1",
              "m_rs2"
            ]
          },
          {
            "mnemonic": "divuw",
            "fields": [
              "m_opcode_w",
              "m_funct3_divu",
              "m_funct7"
            ],
            "args": [
              "m_rd",
              "m_rs1",
              "m_rs2"
            ]
          },
          {
            "mnemonic": "remw",
            "fields": [
              "m_opcode_w",
              "m_funct3_rem",
              "m_funct7"
            ],
            "args": [
              "m_rd",
              "m_rs1",
              "m_rs2"
            ]
          },
          {
            "mnemonic": "remuw",
            "fields": [
              "m_opcode_w",
              "m_funct3_remu",
              "m_funct7"
            ],
            "args": [
              "m_rd",
              "m_rs1",
              "m_rs2"
            ]
          }
        ]
      }
    ]
  },
  {
    "Args": {
      "q_rd_x": {
        "name": "rd",
        "span": "7:11",
        "display": "regx"
      },
      "q_rs1_x": {
        "name": "rs1",
        "span": "15:19",
        "display": "regx"
      },
      "q_rs2_x": {
        "name": "rs2",
        "span": "20:24",
        "display": "regx"
      },
      "q_rs3_x": {
        "name": "rs3",
        "span": "27:31",
        "display": "regx"
      },
      "q_rd": {
        "name": "rd",
        "span": "7:11",
        "display": "regf"
      },
      "q_rs1": {
        "name": "rs1",
        "span": "15:19",
        "display": "regf"
      },
      "q_rs2": {
        "name": "rs2",
        "span": "20:24",
        "display": "regf"
      },
      "q_rs3": {
        "name": "rs3",
        "span": "27:31",
        "display": "regf"
      },
      "q_rm": {
        "name": "rm",
        "span": "12:14",
        "display": "rm"
      },
      "q_i_imm": {
        "name": "imm",
        "span": "20:31",
        "display": "num"
      },
      "q_s_imm": {
        "name": "imm",
        "span": "7:11,25:31",
        "display": "num"
      }
    },
    "Fields": {
      "q_fmt": {
        "name": "fmt",
        "span": "25:26",
        "value": "11"
      },
      "q_fmt_cvtsq": {
        "name": "fmt",
        "span": "25:26",
        "value": "00"
      },
      "q_fmt_cvtdq": {
        "name": "fmt",
        "span": "25:26",
        "value": "10"
      },
      "q_opcode_lw": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110000"
      },
      "q_opcode_sw": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110010"
      },
      "q_opcode_madd": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100010"
      },
      "q_opcode_msub": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110010"
      },
      "q_opcode_nmsub": {
        "name": "opcode",
        "span": "0:6",
        "value": "1101010"
      },
      "q_opcode_nmadd": {
        "name": "opcode",
        "span": "0:6",
        "value": "1111010"
      },
      "q_opcode_op": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100101"
      },
      "q_funct3_lw": {
        "name": "funct3",
        "span": "12:14",
        "value": "001"
      },
      "q_funct3_sw": {
        "name": "funct3",
        "span": "12:14",
        "value": "001"
      },
      "q_funct3_sgnj": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "q_funct3_sgnjn": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "q_funct3_sgnjx": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "q_funct3_min": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "q_funct3_max": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "q_funct3_mv": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "q_funct3_eq": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "q_funct3_lt": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "q_funct3_le": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "q_funct3_class": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "q_funct5_add": {
        "name": "funct5",
        "span": "27:14",
        "value": "00000"
      },
      "q_funct5_sub": {
        "name": "funct5",
        "span": "27:14",
        "value": "10000"
      },
      "q_funct5_mul": {
        "name": "funct5",
        "span": "27:14",
        "value": "01000"
      },
      "q_funct5_div": {
        "name": "funct5",
        "span": "27:14",
        "value": "11000"
      },
      "q_funct5_sqrt": {
        "name": "funct5",
        "span": "27:14",
        "value": "11010"
      },
      "q_funct5_sgnj": {
        "name": "funct5",
        "span": "27:14",
        "value": "00100"
      },
      "q_funct5_minmax": {
        "name": "funct5",
        "span": "27:14",
        "value": "10100"
      },
      "q_funct5_cvtff": {
        "name": "funct5",
        "span": "27:14",
        "value": "00010"
      },
      "q_funct5_cmp": {
        "name": "funct5",
        "span": "27:14",
        "value": "00101"
      },
      "q_funct5_class": {
        "name": "funct5",
        "span": "27:14",
        "value": "00111"
      },
      "q_funct5_cvtif": {
        "name": "funct5",
        "span": "27:14",
        "value": "00011"
      },
      "q_funct5_cvtfi": {
        "name": "funct5",
        "span": "27:14",
        "value": "01011"
      },
      "q_funct5_mvfi": {
        "name": "funct5",
        "span": "27:14",
        "value": "00111"
      },
      "q_funct5_mvif": {
        "name": "funct5",
        "span": "27:14",
        "value": "01111"
      },
      "q_rs2_0": {
        "name": "rs2",
        "span": "20:24",
        "value": "00000"
      },
      "q_rs2_1": {
        "name": "rs2",
        "span": "20:24",
        "value": "10000"
      },
      "q_rs2_2": {
        "name": "rs2",
        "span": "20:24",
        "value": "01000"
      },
      "q_rs2_3": {
        "name": "rs2",
        "span": "20:24",
        "value": "11000"
      }
    },
    "Sets": [
      {
        "name": "RV32Q",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "flw",
            "fields": [
              "q_opcode_lw",
              "q_funct3_lw"
            ],
            "args": [
              "q_rd",
              "q_i_imm",
              "q_rs1_x"
            ]
          },
          {
            "mnemonic": "fsw",
            "fields": [
              "q_opcode_sw",
              "q_funct3_sw"
            ],
            "args": [
              "q_rs2",
              "q_i_imm",
              "q_rs1_x"
            ]
          },
          {
            "mnemonic": "fmadd.q",
            "fields": [
              "q_opcode_madd",
              "q_fmt"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rs2",
              "q_rs3",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fmsub.q",
            "fields": [
              "q_opcode_msub",
              "q_fmt"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rs2",
              "q_rs3",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fnmsub.q",
            "fields": [
              "q_opcode_nmsub",
              "q_fmt"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rs2",
              "q_rs3",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fmdd.q",
            "fields": [
              "q_opcode_madd",
              "q_fmt"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rs2",
              "q_rs3",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fadd.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_add"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rs2",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fsub.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_sub"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rs2",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fmul.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_mul"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rs2",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fdiv.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_div"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rs2",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fsqrt.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_sqrt",
              "q_rs2_0"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fsgnj.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_sgnj",
              "q_funct3_sgnj"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rs2"
            ]
          },
          {
            "mnemonic": "fsgnjn.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_sgnj",
              "q_funct3_sgnjn"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rs2"
            ]
          },
          {
            "mnemonic": "fsgnjx.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_sgnj",
              "q_funct3_sgnjx"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rs2"
            ]
          },
          {
            "mnemonic": "fmin.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_minmax",
              "q_funct3_min"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rs2"
            ]
          },
          {
            "mnemonic": "fmax.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_minmax",
              "q_funct3_max"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rs2"
            ]
          },
          {
            "mnemonic": "fcvt.s.q",
            "fields": [
              "q_opcode_op",
              "q_fmt_cvtsq",
              "q_funct5_cvtff",
              "q_rs2_3"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fcvt.q.s",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_cvtff",
              "q_rs2_0"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fcvt.d.q",
            "fields": [
              "q_opcode_op",
              "q_fmt_cvtdq",
              "q_funct5_cvtff",
              "q_rs2_3"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fcvt.q.d",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_cvtff",
              "q_rs2_1"
            ],
            "args": [
              "q_rd",
              "q_rs1",
              "q_rm"
            ]
          },
          {
            "mnemonic": "feq.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_cmp",
              "q_funct3_eq"
            ],
            "args": [
              "q_rd_x",
              "q_rs1",
              "q_rs2"
            ]
          },
          {
            "mnemonic": "flt.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_cmp",
              "q_funct3_lt"
            ],
            "args": [
              "q_rd_x",
              "q_rs1",
              "q_rs2"
            ]
          },
          {
            "mnemonic": "fle.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_cmp",
              "q_funct3_le"
            ],
            "args": [
              "q_rd_x",
              "q_rs1",
              "q_rs2"
            ]
          },
          {
            "mnemonic": "class.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_class",
              "q_funct3_class",
              "q_rs2_0"
            ],
            "args": [
              "q_rd_x",
              "q_rs1"
            ]
          },
          {
            "mnemonic": "fcvt.w.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_cvtif",
              "q_rs2_0"
            ],
            "args": [
              "q_rd",
              "q_rs1_x",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fcvt.wu.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_cvtif",
              "q_rs2_1"
            ],
            "args": [
              "q_rd",
              "q_rs1_x",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fcvt.q.w",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_cvtfi",
              "q_rs2_0"
            ],
            "args": [
              "q_rd_x",
              "q_rs1",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fcvt.q.wu",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_cvtfi",
              "q_rs2_1"
            ],
            "args": [
              "q_rd_x",
              "q_rs1",
              "q_rm"
            ]
          }
        ]
      },
      {
        "name": "RV64Q",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "fcvt.l.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_cvtif",
              "q_rs2_2"
            ],
            "args": [
              "q_rd",
              "q_rs1_x",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fcvt.lu.q",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_cvtif",
              "q_rs2_3"
            ],
            "args": [
              "q_rd",
              "q_rs1_x",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fcvt.q.l",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_cvtfi",
              "q_rs2_2"
            ],
            "args": [
              "q_rd_x",
              "q_rs1",
              "q_rm"
            ]
          },
          {
            "mnemonic": "fcvt.q.lu",
            "fields": [
              "q_opcode_op",
              "q_fmt",
              "q_funct5_cvtfi",
              "q_rs2_3"
            ],
            "args": [
              "q_rd_x",
              "q_rs1",
              "q_rm"
            ]
          }
        ]
      }
    ]
  },
  {
    "Args": {
      "rv32i_rd": {
        "name": "rd",
        "span": "7:11",
        "display": "regx"
      },
      "rv32i_rs1": {
        "name": "rs1",
        "span": "15:19",
        "display": "regx"
      },
      "rv32i_rs2": {
        "name": "rs2",
        "span": "20:24",
        "display": "regx"
      },
      "rv32i_shamt": {
        "name": "imm",
        "span": "20:24",
        "display": "unum"
      },
      "rv32i_i_imm": {
        "name": "imm",
        "span": "20:31",
        "display": "num"
      },
      "rv32i_i_imm_mem": {
        "name": "imm",
        "span": "20:31",
        "display": "pnum"
      },
      "rv32i_s_imm": {
        "name": "imm",
        "span": "7:11,25:31",
        "display": "num"
      },
      "rv32i_s_imm_mem": {
        "name": "imm",
        "span": "7:11,25:31",
        "display": "pnum"
      },
      "rv32i_b_imm": {
        "name": "imm",
        "span": "8:11,25:30,7,31",
        "display": "double"
      },
      "rv32i_u_imm": {
        "name": "imm",
        "span": "12:31",
        "display": "num"
      },
      "rv32i_j_imm": {
        "name": "imm",
        "span": "21:30,20,12:19,31",
        "display": "double"
      },
      "rv32i_f_succ": {
        "name": "succ",
        "span": "20:23",
        "display": "fence"
      },
      "rv32i_f_pred": {
        "name": "pred",
        "span": "24:27",
        "display": "fence"
      }
    },
    "Fields": {
      "rv32i_opcode_load": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100000"
      },
      "rv32i_opcode_store": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100010"
      },
      "rv32i_opcode_regimm": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100100"
      },
      "rv32i_opcode_regreg": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100110"
      },
      "rv32i_opcode_lui": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110110"
      },
      "rv32i_opcode_auipc": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110100"
      },
      "rv32i_opcode_branch": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100011"
      },
      "rv32i_opcode_jal": {
        "name": "opcode",
        "span": "0:6",
        "value": "1111011"
      },
      "rv32i_opcode_jalr": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110011"
      },
      "rv32i_opcode_jump": {
        "name": "opcode",
        "span": "0:6",
        "value": "1111011"
      },
      "rv32i_opcode_fence": {
        "name": "opcode",
        "span": "0:6",
        "value": "1111000"
      },
      "rv32i_opcode_system": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100111"
      },
      "rv32i_funct3_add": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "rv32i_funct3_slt": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "rv32i_funct3_sltu": {
        "name": "funct3",
        "span": "12:14",
        "value": "110"
      },
      "rv32i_funct3_and": {
        "name": "funct3",
        "span": "12:14",
        "value": "111"
      },
      "rv32i_funct3_or": {
        "name": "funct3",
        "span": "12:14",
        "value": "011"
      },
      "rv32i_funct3_xor": {
        "name": "funct3",
        "span": "12:14",
        "value": "001"
      },
      "rv32i_funct3_sll": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "rv32i_funct3_srl": {
        "name": "funct3",
        "span": "12:14",
        "value": "101"
      },
      "rv32i_funct3_jalr": {
        "name": "funct3",
        "span": "12:14",
        "value": "001"
      },
      "rv32i_funct3_wb": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "rv32i_funct3_wbu": {
        "name": "funct3",
        "span": "12:14",
        "value": "001"
      },
      "rv32i_funct3_wh": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "rv32i_funct3_whu": {
        "name": "funct3",
        "span": "12:14",
        "value": "101"
      },
      "rv32i_funct3_ww": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "rv32i_funct3_beq": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "rv32i_funct3_bne": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "rv32i_funct3_blt": {
        "name": "funct3",
        "span": "12:14",
        "value": "001"
      },
      "rv32i_funct3_bltu": {
        "name": "funct3",
        "span": "12:14",
        "value": "011"
      },
      "rv32i_funct3_bge": {
        "name": "funct3",
        "span": "12:14",
        "value": "101"
      },
      "rv32i_funct3_bgeu": {
        "name": "funct3",
        "span": "12:14",
        "value": "111"
      },
      "rv32i_funct3_fence": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "rv32i_funct3_system": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "rv32i_funct7_normal": {
        "name": "funct7",
        "span": "25:31",
        "value": "0000000"
      },
      "rv32i_funct7_alter": {
        "name": "funct7",
        "span": "25:31",
        "value": "0000010"
      },
      "rv32i_null_rd": {
        "name": "rd",
        "span": "7:11",
        "value": "00000"
      },
      "rv32i_null_rs1": {
        "name": "rs1",
        "span": "15:19",
        "value": "00000"
      },
      "rv32i_null_rs2": {
        "name": "rs2",
        "span": "20:24",
        "value": "00000"
      },
      "rv32i_null_i_imm": {
        "name": "imm",
        "span": "20:31",
        "value": "000000000000"
      },
      "rv32i_one_i_imm": {
        "name": "imm",
        "span": "20:31",
        "value": "100000000000"
      },
      "rv32i_neg_i_imm": {
        "name": "imm",
        "span": "20:31",
        "value": "111111111111"
      },
      "rv32i_pause_fm": {
        "name": "fm",
        "span": "28:31",
        "value": "0000"
      },
      "rv32i_pause_pred": {
        "name": "pred",
        "span": "24:27",
        "value": "1000"
      },
      "rv32i_pause_succ": {
        "name": "succ",
        "span": "20:23",
        "value": "0000"
      },
      "rv32i_fence_fm": {
        "name": "fm",
        "span": "28:31",
        "value": "0000"
      },
      "rv32i_fence_pred": {
        "name": "pred",
        "span": "24:27",
        "value": "1111"
      },
      "rv32i_fence_succ": {
        "name": "succ",
        "span": "20:23",
        "value": "1111"
      },
      "rv32i_ftso_fm": {
        "name": "fm",
        "span": "28:31",
        "value": "0001"
      },
      "rv32i_ftso_pred": {
        "name": "pred",
        "span": "24:27",
        "value": "1100"
      },
      "rv32i_ftso_succ": {
        "name": "succ",
        "span": "20:23",
        "value": "1100"
      }
    },
    "Sets": [
      {
        "name": "RV32I",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "add",
            "fields": [
              "rv32i_opcode_regreg",
              "rv32i_funct3_add",
              "rv32i_funct7_normal"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_rs2"
            ]
          },
          {
            "mnemonic": "sub",
            "fields": [
              "rv32i_opcode_regreg",
              "rv32i_funct3_add",
              "rv32i_funct7_alter"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_rs2"
            ]
          },
          {
            "mnemonic": "slt",
            "fields": [
              "rv32i_opcode_regreg",
              "rv32i_funct3_slt",
              "rv32i_funct7_normal"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_rs2"
            ]
          },
          {
            "mnemonic": "sltu",
            "fields": [
              "rv32i_opcode_regreg",
              "rv32i_funct3_sltu",
              "rv32i_funct7_normal"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_rs2"
            ]
          },
          {
            "mnemonic": "and",
            "fields": [
              "rv32i_opcode_regreg",
              "rv32i_funct3_and",
              "rv32i_funct7_normal"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_rs2"
            ]
          },
          {
            "mnemonic": "or",
            "fields": [
              "rv32i_opcode_regreg",
              "rv32i_funct3_or",
              "rv32i_funct7_normal"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_rs2"
            ]
          },
          {
            "mnemonic": "xor",
            "fields": [
              "rv32i_opcode_regreg",
              "rv32i_funct3_xor",
              "rv32i_funct7_normal"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_rs2"
            ]
          },
          {
            "mnemonic": "sll",
            "fields": [
              "rv32i_opcode_regreg",
              "rv32i_funct3_sll",
              "rv32i_funct7_normal"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_rs2"
            ]
          },
          {
            "mnemonic": "srl",
            "fields": [
              "rv32i_opcode_regreg",
              "rv32i_funct3_srl",
              "rv32i_funct7_normal"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_rs2"
            ]
          },
          {
            "mnemonic": "sra",
            "fields": [
              "rv32i_opcode_regreg",
              "rv32i_funct3_srl",
              "rv32i_funct7_alter"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_rs2"
            ]
          },
          {
            "mnemonic": "nop",
            "fields": [
              "rv32i_opcode_regimm",
              "rv32i_funct3_add",
              "rv32i_null_rd",
              "rv32i_null_rs1",
              "rv32i_null_i_imm"
            ],
            "args": []
          },
          {
            "mnemonic": "mv",
            "fields": [
              "rv32i_opcode_regimm",
              "rv32i_funct3_add",
              "rv32i_null_i_imm"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1"
            ]
          },
          {
            "mnemonic": "addi",
            "fields": [
              "rv32i_opcode_regimm",
              "rv32i_funct3_add"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_i_imm"
            ]
          },
          {
            "mnemonic": "slti",
            "fields": [
              "rv32i_opcode_regimm",
              "rv32i_funct3_slt"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_i_imm"
            ]
          },
          {
            "mnemonic": "seqz",
            "fields": [
              "rv32i_opcode_regimm",
              "rv32i_funct3_sltu",
              "rv32i_one_i_imm"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1"
            ]
          },
          {
            "mnemonic": "sltiu",
            "fields": [
              "rv32i_opcode_regimm",
              "rv32i_funct3_sltu"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_i_imm"
            ]
          },
          {
            "mnemonic": "andi",
            "fields": [
              "rv32i_opcode_regimm",
              "rv32i_funct3_and"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_i_imm"
            ]
          },
          {
            "mnemonic": "ori",
            "fields": [
              "rv32i_opcode_regimm",
              "rv32i_funct3_or"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_i_imm"
            ]
          },
          {
            "mnemonic": "not",
            "fields": [
              "rv32i_opcode_regimm",
              "rv32i_funct3_xor",
              "rv32i_neg_i_imm"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1"
            ]
          },
          {
            "mnemonic": "xori",
            "fields": [
              "rv32i_opcode_regimm",
              "rv32i_funct3_xor"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_i_imm"
            ]
          },
          {
            "mnemonic": "slli",
            "fields": [
              "rv32i_opcode_regimm",
              "rv32i_funct3_sll",
              "rv32i_funct7_normal"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_shamt"
            ]
          },
          {
            "mnemonic": "srli",
            "fields": [
              "rv32i_opcode_regimm",
              "rv32i_funct3_srl",
              "rv32i_funct7_normal"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_shamt"
            ]
          },
          {
            "mnemonic": "srai",
            "fields": [
              "rv32i_opcode_regimm",
              "rv32i_funct3_srl",
              "rv32i_funct7_alter"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_shamt"
            ]
          },
          {
            "mnemonic": "lw",
            "fields": [
              "rv32i_opcode_load",
              "rv32i_funct3_ww"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_i_imm_mem",
              "rv32i_rs1"
            ]
          },
          {
            "mnemonic": "lh",
            "fields": [
              "rv32i_opcode_load",
              "rv32i_funct3_wh"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_i_imm_mem",
              "rv32i_rs1"
            ]
          },
          {
            "mnemonic": "lb",
            "fields": [
              "rv32i_opcode_load",
              "rv32i_funct3_wb"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_i_imm_mem",
              "rv32i_rs1"
            ]
          },
          {
            "mnemonic": "lhu",
            "fields": [
              "rv32i_opcode_load",
              "rv32i_funct3_whu"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_i_imm_mem",
              "rv32i_rs1"
            ]
          },
          {
            "mnemonic": "lbu",
            "fields": [
              "rv32i_opcode_load",
              "rv32i_funct3_wbu"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_i_imm_mem",
              "rv32i_rs1"
            ]
          },
          {
            "mnemonic": "sw",
            "fields": [
              "rv32i_opcode_store",
              "rv32i_funct3_ww"
            ],
            "args": [
              "rv32i_rs2",
              "rv32i_s_imm_mem",
              "rv32i_rs1"
            ]
          },
          {
            "mnemonic": "sh",
            "fields": [
              "rv32i_opcode_store",
              "rv32i_funct3_wh"
            ],
            "args": [
              "rv32i_rs2",
              "rv32i_s_imm_mem",
              "rv32i_rs1"
            ]
          },
          {
            "mnemonic": "sb",
            "fields": [
              "rv32i_opcode_store",
              "rv32i_funct3_wb"
            ],
            "args": [
              "rv32i_rs2",
              "rv32i_s_imm_mem",
              "rv32i_rs1"
            ]
          },
          {
            "mnemonic": "lui",
            "fields": [
              "rv32i_opcode_lui"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_u_imm"
            ]
          },
          {
            "mnemonic": "auipc",
            "fields": [
              "rv32i_opcode_auipc"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_u_imm"
            ]
          },
          {
            "mnemonic": "beq",
            "fields": [
              "rv32i_opcode_branch",
              "rv32i_funct3_beq"
            ],
            "args": [
              "rv32i_rs1",
              "rv32i_rs2",
              "rv32i_b_imm"
            ]
          },
          {
            "mnemonic": "bne",
            "fields": [
              "rv32i_opcode_branch",
              "rv32i_funct3_bne"
            ],
            "args": [
              "rv32i_rs1",
              "rv32i_rs2",
              "rv32i_b_imm"
            ]
          },
          {
            "mnemonic": "blt",
            "fields": [
              "rv32i_opcode_branch",
              "rv32i_funct3_blt"
            ],
            "args": [
              "rv32i_rs1",
              "rv32i_rs2",
              "rv32i_b_imm"
            ]
          },
          {
            "mnemonic": "bltu",
            "fields": [
              "rv32i_opcode_branch",
              "rv32i_funct3_bltu"
            ],
            "args": [
              "rv32i_rs1",
              "rv32i_rs2",
              "rv32i_b_imm"
            ]
          },
          {
            "mnemonic": "bge",
            "fields": [
              "rv32i_opcode_branch",
              "rv32i_funct3_bge"
            ],
            "args": [
              "rv32i_rs1",
              "rv32i_rs2",
              "rv32i_b_imm"
            ]
          },
          {
            "mnemonic": "bgeu",
            "fields": [
              "rv32i_opcode_branch",
              "rv32i_funct3_bgeu"
            ],
            "args": [
              "rv32i_rs1",
              "rv32i_rs2",
              "rv32i_b_imm"
            ]
          },
          {
            "mnemonic": "bgt",
            "fields": [
              "rv32i_opcode_branch",
              "rv32i_funct3_blt"
            ],
            "args": [
              "rv32i_rs2",
              "rv32i_rs1",
              "rv32i_b_imm"
            ]
          },
          {
            "mnemonic": "bgtu",
            "fields": [
              "rv32i_opcode_branch",
              "rv32i_funct3_bltu"
            ],
            "args": [
              "rv32i_rs2",
              "rv32i_rs1",
              "rv32i_b_imm"
            ]
          },
          {
            "mnemonic": "ble",
            "fields": [
              "rv32i_opcode_branch",
              "rv32i_funct3_bge"
            ],
            "args": [
              "rv32i_rs2",
              "rv32i_rs1",
              "rv32i_b_imm"
            ]
          },
          {
            "mnemonic": "bleu",
            "fields": [
              "rv32i_opcode_branch",
              "rv32i_funct3_bgeu"
            ],
            "args": [
              "rv32i_rs2",
              "rv32i_rs1",
              "rv32i_b_imm"
            ]
          },
          {
            "mnemonic": "j",
            "fields": [
              "rv32i_opcode_jal",
              "rv32i_null_rd"
            ],
            "args": [
              "rv32i_j_imm"
            ]
          },
          {
            "mnemonic": "jal",
            "fields": [
              "rv32i_opcode_jal"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_j_imm"
            ]
          },
          {
            "mnemonic": "jalr",
            "fields": [
              "rv32i_opcode_jalr",
              "rv32i_funct3_jalr"
            ],
            "args": [
              "rv32i_rd",
              "rv32i_rs1",
              "rv32i_j_imm"
            ]
          },
          {
            "mnemonic": "pause",
            "fields": [
              "rv32i_opcode_fence",
              "rv32i_funct3_fence",
              "rv32i_null_rd",
              "rv32i_null_rs1",
              "rv32i_pause_fm",
              "rv32i_pause_pred",
              "rv32i_pause_succ"
            ],
            "args": []
          },
          {
            "mnemonic": "fence",
            "fields": [
              "rv32i_opcode_fence",
              "rv32i_funct3_fence",
              "rv32i_null_rd",
              "rv32i_null_rs1",
              "rv32i_fence_fm",
              "rv32i_fence_pred",
              "rv32i_fence_succ"
            ],
            "args": []
          },
          {
            "mnemonic": "fence",
            "fields": [
              "rv32i_opcode_fence",
              "rv32i_funct3_fence",
              "rv32i_null_rd",
              "rv32i_null_rs1",
              "rv32i_fence_fm"
            ],
            "args": [
              "rv32i_f_pred",
              "rv32i_f_succ"
            ]
          },
          {
            "mnemonic": "fence.tso",
            "fields": [
              "rv32i_opcode_fence",
              "rv32i_funct3_fence",
              "rv32i_null_rd",
              "rv32i_null_rs1",
              "rv32i_tso_fm",
              "rv32i_tso_pred",
              "rv32i_tso_succ"
            ],
            "args": []
          },
          {
            "mnemonic": "ecall",
            "fields": [
              "rv32i_opcode_system",
              "rv32i_funct3_system",
              "rv32i_null_rd",
              "rv32i_null_rs1",
              "rv32i_null_i_imm"
            ],
            "args": []
          },
          {
            "mnemonic": "ebreak",
            "fields": [
              "rv32i_opcode_system",
              "rv32i_funct3_system",
              "rv32i_null_rd",
              "rv32i_null_rs1",
              "rv32i_one_i_imm"
            ],
            "args": []
          }
        ]
      }
    ]
  },
  {
    "Args": {
      "rv64i_rd": {
        "name": "rd",
        "span": "7:11",
        "display": "regx"
      },
      "rv64i_rs1": {
        "name": "rs1",
        "span": "15:19",
        "display": "regx"
      },
      "rv64i_rs2": {
        "name": "rs2",
        "span": "20:24",
        "display": "regx"
      },
      "rv64i_shamt": {
        "name": "imm",
        "span": "20:25",
        "display": "unum"
      },
      "rv64i_shamt_w": {
        "name": "imm",
        "span": "20:24",
        "display": "unum"
      },
      "rv64i_i_imm": {
        "name": "imm",
        "span": "20:31",
        "display": "num"
      }
    },
    "Fields": {
      "rv64i_opcode_load": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100000"
      },
      "rv64i_opcode_store": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100010"
      },
      "rv64i_opcode_regimm": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100100"
      },
      "rv64i_opcode_regreg": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100110"
      },
      "rv64i_opcode_regimm_w": {
        "name": "opcode",
        "span": "0:6",
        "value": "1101100"
      },
      "rv64i_opcode_regreg_w": {
        "name": "opcode",
        "span": "0:6",
        "value": "1101110"
      },
      "rv64i_funct3_add": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "rv64i_funct3_sll": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "rv64i_funct3_srl": {
        "name": "funct3",
        "span": "12:14",
        "value": "101"
      },
      "rv64i_funct3_wwu": {
        "name": "funct3",
        "span": "12:14",
        "value": "011"
      },
      "rv64i_funct3_wd": {
        "name": "funct3",
        "span": "12:14",
        "value": "110"
      },
      "rv64i_funct7_normal": {
        "name": "funct7",
        "span": "25:31",
        "value": "0000000"
      },
      "rv64i_funct7_alter": {
        "name": "funct7",
        "span": "25:31",
        "value": "0000010"
      },
      "rv64i_funct6_normal": {
        "name": "funct7",
        "span": "26:31",
        "value": "000000"
      },
      "rv64i_funct6_alter": {
        "name": "funct7",
        "span": "26:31",
        "value": "000010"
      }
    },
    "Sets": [
      {
        "name": "RV64I",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "addw",
            "fields": [
              "rv64i_opcode_regreg_w",
              "rv64i_funct3_add",
              "rv64i_funct7_normal"
            ],
            "args": [
              "rv64i_rd",
              "rv64i_rs1",
              "rv64i_rs2"
            ]
          },
          {
            "mnemonic": "subw",
            "fields": [
              "rv64i_opcode_regreg_w",
              "rv64i_funct3_add",
              "rv64i_funct7_alter"
            ],
            "args": [
              "rv64i_rd",
              "rv64i_rs1",
              "rv64i_rs2"
            ]
          },
          {
            "mnemonic": "sllw",
            "fields": [
              "rv64i_opcode_regreg_w",
              "rv64i_funct3_sll",
              "rv64i_funct7_normal"
            ],
            "args": [
              "rv64i_rd",
              "rv64i_rs1",
              "rv64i_rs2"
            ]
          },
          {
            "mnemonic": "srlw",
            "fields": [
              "rv64i_opcode_regreg_w",
              "rv64i_funct3_srl",
              "rv64i_funct7_normal"
            ],
            "args": [
              "rv64i_rd",
              "rv64i_rs1",
              "rv64i_rs2"
            ]
          },
          {
            "mnemonic": "sraw",
            "fields": [
              "rv64i_opcode_regreg_w",
              "rv64i_funct3_srl",
              "rv64i_funct7_alter"
            ],
            "args": [
              "rv64i_rd",
              "rv64i_rs1",
              "rv64i_rs2"
            ]
          },
          {
            "mnemonic": "slli",
            "fields": [
              "rv64i_opcode_regimm",
              "rv64i_funct3_sll",
              "rv64i_funct6_normal"
            ],
            "args": [
              "rv64i_rd",
              "rv64i_rs1",
              "rv64i_shamt"
            ]
          },
          {
            "mnemonic": "srli",
            "fields": [
              "rv64i_opcode_regimm",
              "rv64i_funct3_srl",
              "rv64i_funct6_normal"
            ],
            "args": [
              "rv64i_rd",
              "rv64i_rs1",
              "rv64i_shamt"
            ]
          },
          {
            "mnemonic": "srai",
            "fields": [
              "rv64i_opcode_regimm",
              "rv64i_funct3_srl",
              "rv64i_funct6_alter"
            ],
            "args": [
              "rv64i_rd",
              "rv64i_rs1",
              "rv64i_shamt"
            ]
          },
          {
            "mnemonic": "addiw",
            "fields": [
              "rv64i_opcode_regimm_w",
              "rv64i_funct3_add"
            ],
            "args": [
              "rv64i_rd",
              "rv64i_rs1",
              "rv64i_i_imm"
            ]
          },
          {
            "mnemonic": "slliw",
            "fields": [
              "rv64i_opcode_regimm_w",
              "rv64i_funct3_sll",
              "rv64i_funct7_normal"
            ],
            "args": [
              "rv64i_rd",
              "rv64i_rs1",
              "rv64i_shamt_w"
            ]
          },
          {
            "mnemonic": "srliw",
            "fields": [
              "rv64i_opcode_regimm_w",
              "rv64i_funct3_srl",
              "rv64i_funct7_normal"
            ],
            "args": [
              "rv64i_rd",
              "rv64i_rs1",
              "rv64i_shamt_w"
            ]
          },
          {
            "mnemonic": "sraiw",
            "fields": [
              "rv64i_opcode_regimm_w",
              "rv64i_funct3_srl",
              "rv64i_funct7_alter"
            ],
            "args": [
              "rv64i_rd",
              "rv64i_rs1",
              "rv64i_shamt_w"
            ]
          },
          {
            "mnemonic": "ld",
            "fields": [
              "rv64i_opcode_load",
              "rv64i_funct3_wd"
            ],
            "args": [
              "rv64i_rd",
              "rv64i_i_imm_mem",
              "rv64i_rs1"
            ]
          },
          {
            "mnemonic": "lwu",
            "fields": [
              "rv64i_opcode_load",
              "rv64i_funct3_wwu"
            ],
            "args": [
              "rv64i_rd",
              "rv64i_i_imm_mem",
              "rv64i_rs1"
            ]
          },
          {
            "mnemonic": "sw",
            "fields": [
              "rv64i_opcode_store",
              "rv64i_funct3_wd"
            ],
            "args": [
              "rv64i_rs2",
              "rv64i_s_imm_mem",
              "rv64i_rs1"
            ]
          }
        ]
      }
    ]
  },
  {
    "Args": {},
    "Fields": {
      "zawrs_nto_opcode": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100111"
      },
      "zawrs_nto_rd": {
        "name": "rd",
        "span": "7:11",
        "value": "00000"
      },
      "zawrs_nto_funct3": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "zawrs_nto_rs1": {
        "name": "rs1",
        "span": "15:19",
        "value": "00000"
      },
      "zawrs_nto_imm": {
        "name": "imm",
        "span": "20:31",
        "value": "101100000000"
      },
      "zawrs_sto_opcode": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100111"
      },
      "zawrs_sto_rd": {
        "name": "rd",
        "span": "7:11",
        "value": "00000"
      },
      "zawrs_sto_funct3": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "zawrs_sto_rs1": {
        "name": "rs1",
        "span": "15:19",
        "value": "00000"
      },
      "zawrs_sto_imm": {
        "name": "imm",
        "span": "20:31",
        "value": "101110000000"
      }
    },
    "Sets": [
      {
        "name": "Zawrs",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "wrs.nto",
            "fields": [
              "zawrs_nto_opcode",
              "zawrs_nto_rd",
              "zawrs_nto_funct3",
              "zawrs_nto_rs1",
              "zawrs_nto_imm"
            ],
            "args": []
          },
          {
            "mnemonic": "wrs.sto",
            "fields": [
              "zawrs_sto_opcode",
              "zawrs_sto_rd",
              "zawrs_sto_funct3",
              "zawrs_sto_rs1",
              "zawrs_sto_imm"
            ],
            "args": []
          }
        ]
      }
    ]
  },
  {
    "Args": {
      "h_rd_x": {
        "name": "rd",
        "span": "7:11",
        "display": "regx"
      },
      "h_rs1_x": {
        "name": "rs1",
        "span": "15:19",
        "display": "regx"
      },
      "h_rs2_x": {
        "name": "rs2",
        "span": "20:24",
        "display": "regx"
      },
      "h_rs3_x": {
        "name": "rs3",
        "span": "27:31",
        "display": "regx"
      },
      "h_rd": {
        "name": "rd",
        "span": "7:11",
        "display": "regf"
      },
      "h_rs1": {
        "name": "rs1",
        "span": "15:19",
        "display": "regf"
      },
      "h_rs2": {
        "name": "rs2",
        "span": "20:24",
        "display": "regf"
      },
      "h_rs3": {
        "name": "rs3",
        "span": "27:31",
        "display": "regf"
      },
      "h_rm": {
        "name": "rm",
        "span": "12:14",
        "display": "rm"
      },
      "h_i_imm": {
        "name": "imm",
        "span": "20:31",
        "display": "num"
      },
      "h_s_imm": {
        "name": "imm",
        "span": "7:11,25:31",
        "display": "num"
      }
    },
    "Fields": {
      "h_fmt": {
        "name": "fmt",
        "span": "25:26",
        "value": "01"
      },
      "h_fmt_cvtsh": {
        "name": "fmt",
        "span": "25:26",
        "value": "00"
      },
      "h_fmt_cvtdh": {
        "name": "fmt",
        "span": "25:26",
        "value": "10"
      },
      "h_fmt_cvtqh": {
        "name": "fmt",
        "span": "25:26",
        "value": "10"
      },
      "h_opcode_lw": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110000"
      },
      "h_opcode_sw": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110010"
      },
      "h_opcode_madd": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100010"
      },
      "h_opcode_msub": {
        "name": "opcode",
        "span": "0:6",
        "value": "1110010"
      },
      "h_opcode_nmsub": {
        "name": "opcode",
        "span": "0:6",
        "value": "1101010"
      },
      "h_opcode_nmadd": {
        "name": "opcode",
        "span": "0:6",
        "value": "1111010"
      },
      "h_opcode_op": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100101"
      },
      "h_funct3_lw": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "h_funct3_sw": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "h_funct3_sgnj": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "h_funct3_sgnjn": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "h_funct3_sgnjx": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "h_funct3_min": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "h_funct3_max": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "h_funct3_mv": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "h_funct3_eq": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "h_funct3_lt": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "h_funct3_le": {
        "name": "funct3",
        "span": "12:14",
        "value": "000"
      },
      "h_funct3_class": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "h_funct5_add": {
        "name": "funct5",
        "span": "27:14",
        "value": "00000"
      },
      "h_funct5_sub": {
        "name": "funct5",
        "span": "27:14",
        "value": "10000"
      },
      "h_funct5_mul": {
        "name": "funct5",
        "span": "27:14",
        "value": "01000"
      },
      "h_funct5_div": {
        "name": "funct5",
        "span": "27:14",
        "value": "11000"
      },
      "h_funct5_sqrt": {
        "name": "funct5",
        "span": "27:14",
        "value": "11010"
      },
      "h_funct5_sgnj": {
        "name": "funct5",
        "span": "27:14",
        "value": "00100"
      },
      "h_funct5_minmax": {
        "name": "funct5",
        "span": "27:14",
        "value": "10100"
      },
      "h_funct5_cvtff": {
        "name": "funct5",
        "span": "27:14",
        "value": "00010"
      },
      "h_funct5_cmp": {
        "name": "funct5",
        "span": "27:14",
        "value": "00101"
      },
      "h_funct5_class": {
        "name": "funct5",
        "span": "27:14",
        "value": "00111"
      },
      "h_funct5_cvtif": {
        "name": "funct5",
        "span": "27:14",
        "value": "00011"
      },
      "h_funct5_cvtfi": {
        "name": "funct5",
        "span": "27:14",
        "value": "01011"
      },
      "h_funct5_mvfi": {
        "name": "funct5",
        "span": "27:14",
        "value": "00111"
      },
      "h_funct5_mvif": {
        "name": "funct5",
        "span": "27:14",
        "value": "01111"
      },
      "h_rs2_0": {
        "name": "rs2",
        "span": "20:24",
        "value": "00000"
      },
      "h_rs2_1": {
        "name": "rs2",
        "span": "20:24",
        "value": "10000"
      },
      "h_rs2_2": {
        "name": "rs2",
        "span": "20:24",
        "value": "01000"
      },
      "h_rs2_3": {
        "name": "rs2",
        "span": "20:24",
        "value": "11000"
      }
    },
    "Sets": [
      {
        "name": "RV32Zfh",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "flw",
            "fields": [
              "h_opcode_lw",
              "h_funct3_lw"
            ],
            "args": [
              "h_rd",
              "h_i_imm",
              "h_rs1_x"
            ]
          },
          {
            "mnemonic": "fsw",
            "fields": [
              "h_opcode_sw",
              "h_funct3_sw"
            ],
            "args": [
              "h_rs2",
              "h_i_imm",
              "h_rs1_x"
            ]
          },
          {
            "mnemonic": "fmadd.h",
            "fields": [
              "h_opcode_madd",
              "h_fmt"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rs2",
              "h_rs3",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fmsub.h",
            "fields": [
              "h_opcode_msub",
              "h_fmt"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rs2",
              "h_rs3",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fnmsub.h",
            "fields": [
              "h_opcode_nmsub",
              "h_fmt"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rs2",
              "h_rs3",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fmdd.h",
            "fields": [
              "h_opcode_madd",
              "h_fmt"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rs2",
              "h_rs3",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fadd.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_add"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rs2",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fsub.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_sub"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rs2",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fmul.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_mul"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rs2",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fdiv.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_div"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rs2",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fsqrt.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_sqrt",
              "h_rs2_0"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fsgnj.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_sgnj",
              "h_funct3_sgnj"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rs2"
            ]
          },
          {
            "mnemonic": "fsgnjn.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_sgnj",
              "h_funct3_sgnjn"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rs2"
            ]
          },
          {
            "mnemonic": "fsgnjx.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_sgnj",
              "h_funct3_sgnjx"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rs2"
            ]
          },
          {
            "mnemonic": "fmin.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_minmax",
              "h_funct3_min"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rs2"
            ]
          },
          {
            "mnemonic": "fmax.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_minmax",
              "h_funct3_max"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rs2"
            ]
          },
          {
            "mnemonic": "fcvt.s.h",
            "fields": [
              "h_opcode_op",
              "h_fmt_cvtsh",
              "h_funct5_cvtff",
              "h_rs2_2"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fcvt.h.s",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_cvtff",
              "h_rs2_0"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fcvt.d.h",
            "fields": [
              "h_opcode_op",
              "h_fmt_cvtdh",
              "h_funct5_cvtff",
              "h_rs2_2"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fcvt.h.d",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_cvtff",
              "h_rs2_1"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fcvt.q.h",
            "fields": [
              "h_opcode_op",
              "h_fmt_cvtqh",
              "h_funct5_cvtff",
              "h_rs2_2"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fcvt.h.q",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_cvtff",
              "h_rs2_3"
            ],
            "args": [
              "h_rd",
              "h_rs1",
              "h_rm"
            ]
          },
          {
            "mnemonic": "feq.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_cmp",
              "h_funct3_eq"
            ],
            "args": [
              "h_rd_x",
              "h_rs1",
              "h_rs2"
            ]
          },
          {
            "mnemonic": "flt.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_cmp",
              "h_funct3_lt"
            ],
            "args": [
              "h_rd_x",
              "h_rs1",
              "h_rs2"
            ]
          },
          {
            "mnemonic": "fle.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_cmp",
              "h_funct3_le"
            ],
            "args": [
              "h_rd_x",
              "h_rs1",
              "h_rs2"
            ]
          },
          {
            "mnemonic": "class.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_class",
              "h_funct3_class",
              "h_rs2_0"
            ],
            "args": [
              "h_rd_x",
              "h_rs1"
            ]
          },
          {
            "mnemonic": "fcvt.w.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_cvtif",
              "h_rs2_0"
            ],
            "args": [
              "h_rd",
              "h_rs1_x",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fcvt.wu.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_cvtif",
              "h_rs2_1"
            ],
            "args": [
              "h_rd",
              "h_rs1_x",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fmv.x.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct3_mv",
              "h_funct5_mvfi",
              "h_rs2_0"
            ],
            "args": [
              "h_rd",
              "h_rs1"
            ]
          },
          {
            "mnemonic": "fcvt.h.w",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_cvtfi",
              "h_rs2_0"
            ],
            "args": [
              "h_rd_x",
              "h_rs1",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fcvt.h.wu",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_cvtfi",
              "h_rs2_1"
            ],
            "args": [
              "h_rd_x",
              "h_rs1",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fmv.h.x",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct3_mv",
              "h_funct5_mvif",
              "h_rs2_0"
            ],
            "args": [
              "h_rd",
              "h_rs1"
            ]
          }
        ]
      },
      {
        "name": "RV64Zfh",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "fcvt.l.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_cvtif",
              "h_rs2_2"
            ],
            "args": [
              "h_rd",
              "h_rs1_x",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fcvt.lu.h",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_cvtif",
              "h_rs2_3"
            ],
            "args": [
              "h_rd",
              "h_rs1_x",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fcvt.h.l",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_cvtfi",
              "h_rs2_2"
            ],
            "args": [
              "h_rd_x",
              "h_rs1",
              "h_rm"
            ]
          },
          {
            "mnemonic": "fcvt.h.lu",
            "fields": [
              "h_opcode_op",
              "h_fmt",
              "h_funct5_cvtfi",
              "h_rs2_3"
            ],
            "args": [
              "h_rd_x",
              "h_rs1",
              "h_rm"
            ]
          }
        ]
      }
    ]
  },
  {
    "Args": {
      "zicsr_rd": {
        "name": "rd",
        "span": "7:11",
        "display": "regx"
      },
      "zicsr_rs1": {
        "name": "rs1",
        "span": "15:19",
        "display": "regx"
      },
      "zicsr_uimm": {
        "name": "uimm",
        "span": "15:19",
        "display": "unum"
      },
      "zicsr_csr": {
        "name": "csr",
        "span": "20:31",
        "display": "num"
      }
    },
    "Fields": {
      "zicsr_opcode_csr": {
        "name": "opcode",
        "span": "0:6",
        "value": "1100111"
      },
      "zicsr_funct3_w": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "zicsr_funct3_s": {
        "name": "funct3",
        "span": "12:14",
        "value": "010"
      },
      "zicsr_funct3_c": {
        "name": "funct3",
        "span": "12:14",
        "value": "110"
      },
      "zicsr_funct3_wi": {
        "name": "funct3",
        "span": "12:14",
        "value": "101"
      },
      "zicsr_funct3_si": {
        "name": "funct3",
        "span": "12:14",
        "value": "011"
      },
      "zicsr_funct3_ci": {
        "name": "funct3",
        "span": "12:14",
        "value": "111"
      }
    },
    "Sets": [
      {
        "name": "Zicsr",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "csrrw",
            "fields": [
              "zicsr_opcode_csr",
              "zicsr_funct3_w"
            ],
            "args": [
              "zicsr_rd",
              "zicsr_rs1",
              "zicsr_csr"
            ]
          },
          {
            "mnemonic": "csrrs",
            "fields": [
              "zicsr_opcode_csr",
              "zicsr_funct3_s"
            ],
            "args": [
              "zicsr_rd",
              "zicsr_rs1",
              "zicsr_csr"
            ]
          },
          {
            "mnemonic": "csrrc",
            "fields": [
              "zicsr_opcode_csr",
              "zicsr_funct3_c"
            ],
            "args": [
              "zicsr_rd",
              "zicsr_rs1",
              "zicsr_csr"
            ]
          },
          {
            "mnemonic": "csrrwi",
            "fields": [
              "zicsr_opcode_csr",
              "zicsr_funct3_wi"
            ],
            "args": [
              "zicsr_rd",
              "zicsr_uimm",
              "zicsr_csr"
            ]
          },
          {
            "mnemonic": "csrrsi",
            "fields": [
              "zicsr_opcode_csr",
              "zicsr_funct3_si"
            ],
            "args": [
              "zicsr_rd",
              "zicsr_uimm",
              "zicsr_csr"
            ]
          },
          {
            "mnemonic": "csrrci",
            "fields": [
              "zicsr_opcode_csr",
              "zicsr_funct3_ci"
            ],
            "args": [
              "zicsr_rd",
              "zicsr_uimm",
              "zicsr_csr"
            ]
          }
        ]
      }
    ]
  },
  {
    "Args": {},
    "Fields": {
      "zifencei_opcode": {
        "name": "opcode",
        "span": "0:6",
        "value": "1111000"
      },
      "zifencei_funct3": {
        "name": "funct3",
        "span": "12:14",
        "value": "100"
      },
      "zifencei_rd": {
        "name": "rd",
        "span": "7:11",
        "value": "00000"
      },
      "zifencei_rs1": {
        "name": "rs1",
        "span": "15:19",
        "value": "00000"
      },
      "zifencei_imm": {
        "name": "imm",
        "span": "20:31",
        "value": "000000000000"
      }
    },
    "Sets": [
      {
        "name": "Zifencei",
        "size": "32",
        "instructions": [
          {
            "mnemonic": "fence.i",
            "fields": [
              "zifencei_opcode",
              "zifencei_funct3",
              "zifencei_rd",
              "zifencei_rs1",
              "zifencei_imm"
            ],
            "args": []
          }
        ]
      }
    ]
  }
];
  