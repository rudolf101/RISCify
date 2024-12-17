
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
          },
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
        ]
      }
    ]
  }
];
  