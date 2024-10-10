const MenuScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function MenuScene() {
    Phaser.Scene.call(this, { key: "MenuScene" });
  },
  preload: preloadMenu,
  create: createMenu,
});

let web3;
let account;

async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      account = accounts[0];
      console.log(`Connected to account: ${account}`);
    } catch (error) {
      console.error("User denied account access");
    }
  } else {
    console.error(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
}

async function pushScoreToLeaderboard(score) {
  const leaderboardContractAddress =
    "0xDf2338186fB699A30747F0F81Fcc63213DBf3e58";
  const leaderboardContractABI = [
    /* Your Leaderboard Contract ABI */ {
      deploy: {
        "VM:-": {
          linkReferences: {},
          autoDeployLib: true,
        },
        "main:1": {
          linkReferences: {},
          autoDeployLib: true,
        },
        "ropsten:3": {
          linkReferences: {},
          autoDeployLib: true,
        },
        "rinkeby:4": {
          linkReferences: {},
          autoDeployLib: true,
        },
        "kovan:42": {
          linkReferences: {},
          autoDeployLib: true,
        },
        "goerli:5": {
          linkReferences: {},
          autoDeployLib: true,
        },
        Custom: {
          linkReferences: {},
          autoDeployLib: true,
        },
      },
      data: {
        bytecode: {
          functionDebugData: {
            "@_57": {
              entryPoint: null,
              id: 57,
              parameterSlots: 1,
              returnSlots: 0,
            },
            abi_decode_t_uint256_fromMemory: {
              entryPoint: 153,
              id: null,
              parameterSlots: 2,
              returnSlots: 1,
            },
            abi_decode_tuple_t_uint256_fromMemory: {
              entryPoint: 171,
              id: null,
              parameterSlots: 2,
              returnSlots: 1,
            },
            allocate_unbounded: {
              entryPoint: null,
              id: null,
              parameterSlots: 0,
              returnSlots: 1,
            },
            cleanup_t_uint256: {
              entryPoint: 125,
              id: null,
              parameterSlots: 1,
              returnSlots: 1,
            },
            revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db:
              {
                entryPoint: null,
                id: null,
                parameterSlots: 0,
                returnSlots: 0,
              },
            revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b:
              {
                entryPoint: 121,
                id: null,
                parameterSlots: 0,
                returnSlots: 0,
              },
            validator_revert_t_uint256: {
              entryPoint: 134,
              id: null,
              parameterSlots: 1,
              returnSlots: 0,
            },
          },
          generatedSources: [
            {
              ast: {
                nativeSrc: "0:1048:1",
                nodeType: "YulBlock",
                src: "0:1048:1",
                statements: [
                  {
                    body: {
                      nativeSrc: "47:35:1",
                      nodeType: "YulBlock",
                      src: "47:35:1",
                      statements: [
                        {
                          nativeSrc: "57:19:1",
                          nodeType: "YulAssignment",
                          src: "57:19:1",
                          value: {
                            arguments: [
                              {
                                kind: "number",
                                nativeSrc: "73:2:1",
                                nodeType: "YulLiteral",
                                src: "73:2:1",
                                type: "",
                                value: "64",
                              },
                            ],
                            functionName: {
                              name: "mload",
                              nativeSrc: "67:5:1",
                              nodeType: "YulIdentifier",
                              src: "67:5:1",
                            },
                            nativeSrc: "67:9:1",
                            nodeType: "YulFunctionCall",
                            src: "67:9:1",
                          },
                          variableNames: [
                            {
                              name: "memPtr",
                              nativeSrc: "57:6:1",
                              nodeType: "YulIdentifier",
                              src: "57:6:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "allocate_unbounded",
                    nativeSrc: "7:75:1",
                    nodeType: "YulFunctionDefinition",
                    returnVariables: [
                      {
                        name: "memPtr",
                        nativeSrc: "40:6:1",
                        nodeType: "YulTypedName",
                        src: "40:6:1",
                        type: "",
                      },
                    ],
                    src: "7:75:1",
                  },
                  {
                    body: {
                      nativeSrc: "177:28:1",
                      nodeType: "YulBlock",
                      src: "177:28:1",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nativeSrc: "194:1:1",
                                nodeType: "YulLiteral",
                                src: "194:1:1",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nativeSrc: "197:1:1",
                                nodeType: "YulLiteral",
                                src: "197:1:1",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nativeSrc: "187:6:1",
                              nodeType: "YulIdentifier",
                              src: "187:6:1",
                            },
                            nativeSrc: "187:12:1",
                            nodeType: "YulFunctionCall",
                            src: "187:12:1",
                          },
                          nativeSrc: "187:12:1",
                          nodeType: "YulExpressionStatement",
                          src: "187:12:1",
                        },
                      ],
                    },
                    name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                    nativeSrc: "88:117:1",
                    nodeType: "YulFunctionDefinition",
                    src: "88:117:1",
                  },
                  {
                    body: {
                      nativeSrc: "300:28:1",
                      nodeType: "YulBlock",
                      src: "300:28:1",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nativeSrc: "317:1:1",
                                nodeType: "YulLiteral",
                                src: "317:1:1",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nativeSrc: "320:1:1",
                                nodeType: "YulLiteral",
                                src: "320:1:1",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nativeSrc: "310:6:1",
                              nodeType: "YulIdentifier",
                              src: "310:6:1",
                            },
                            nativeSrc: "310:12:1",
                            nodeType: "YulFunctionCall",
                            src: "310:12:1",
                          },
                          nativeSrc: "310:12:1",
                          nodeType: "YulExpressionStatement",
                          src: "310:12:1",
                        },
                      ],
                    },
                    name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                    nativeSrc: "211:117:1",
                    nodeType: "YulFunctionDefinition",
                    src: "211:117:1",
                  },
                  {
                    body: {
                      nativeSrc: "379:32:1",
                      nodeType: "YulBlock",
                      src: "379:32:1",
                      statements: [
                        {
                          nativeSrc: "389:16:1",
                          nodeType: "YulAssignment",
                          src: "389:16:1",
                          value: {
                            name: "value",
                            nativeSrc: "400:5:1",
                            nodeType: "YulIdentifier",
                            src: "400:5:1",
                          },
                          variableNames: [
                            {
                              name: "cleaned",
                              nativeSrc: "389:7:1",
                              nodeType: "YulIdentifier",
                              src: "389:7:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "cleanup_t_uint256",
                    nativeSrc: "334:77:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "361:5:1",
                        nodeType: "YulTypedName",
                        src: "361:5:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "cleaned",
                        nativeSrc: "371:7:1",
                        nodeType: "YulTypedName",
                        src: "371:7:1",
                        type: "",
                      },
                    ],
                    src: "334:77:1",
                  },
                  {
                    body: {
                      nativeSrc: "460:79:1",
                      nodeType: "YulBlock",
                      src: "460:79:1",
                      statements: [
                        {
                          body: {
                            nativeSrc: "517:16:1",
                            nodeType: "YulBlock",
                            src: "517:16:1",
                            statements: [
                              {
                                expression: {
                                  arguments: [
                                    {
                                      kind: "number",
                                      nativeSrc: "526:1:1",
                                      nodeType: "YulLiteral",
                                      src: "526:1:1",
                                      type: "",
                                      value: "0",
                                    },
                                    {
                                      kind: "number",
                                      nativeSrc: "529:1:1",
                                      nodeType: "YulLiteral",
                                      src: "529:1:1",
                                      type: "",
                                      value: "0",
                                    },
                                  ],
                                  functionName: {
                                    name: "revert",
                                    nativeSrc: "519:6:1",
                                    nodeType: "YulIdentifier",
                                    src: "519:6:1",
                                  },
                                  nativeSrc: "519:12:1",
                                  nodeType: "YulFunctionCall",
                                  src: "519:12:1",
                                },
                                nativeSrc: "519:12:1",
                                nodeType: "YulExpressionStatement",
                                src: "519:12:1",
                              },
                            ],
                          },
                          condition: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "value",
                                    nativeSrc: "483:5:1",
                                    nodeType: "YulIdentifier",
                                    src: "483:5:1",
                                  },
                                  {
                                    arguments: [
                                      {
                                        name: "value",
                                        nativeSrc: "508:5:1",
                                        nodeType: "YulIdentifier",
                                        src: "508:5:1",
                                      },
                                    ],
                                    functionName: {
                                      name: "cleanup_t_uint256",
                                      nativeSrc: "490:17:1",
                                      nodeType: "YulIdentifier",
                                      src: "490:17:1",
                                    },
                                    nativeSrc: "490:24:1",
                                    nodeType: "YulFunctionCall",
                                    src: "490:24:1",
                                  },
                                ],
                                functionName: {
                                  name: "eq",
                                  nativeSrc: "480:2:1",
                                  nodeType: "YulIdentifier",
                                  src: "480:2:1",
                                },
                                nativeSrc: "480:35:1",
                                nodeType: "YulFunctionCall",
                                src: "480:35:1",
                              },
                            ],
                            functionName: {
                              name: "iszero",
                              nativeSrc: "473:6:1",
                              nodeType: "YulIdentifier",
                              src: "473:6:1",
                            },
                            nativeSrc: "473:43:1",
                            nodeType: "YulFunctionCall",
                            src: "473:43:1",
                          },
                          nativeSrc: "470:63:1",
                          nodeType: "YulIf",
                          src: "470:63:1",
                        },
                      ],
                    },
                    name: "validator_revert_t_uint256",
                    nativeSrc: "417:122:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "453:5:1",
                        nodeType: "YulTypedName",
                        src: "453:5:1",
                        type: "",
                      },
                    ],
                    src: "417:122:1",
                  },
                  {
                    body: {
                      nativeSrc: "608:80:1",
                      nodeType: "YulBlock",
                      src: "608:80:1",
                      statements: [
                        {
                          nativeSrc: "618:22:1",
                          nodeType: "YulAssignment",
                          src: "618:22:1",
                          value: {
                            arguments: [
                              {
                                name: "offset",
                                nativeSrc: "633:6:1",
                                nodeType: "YulIdentifier",
                                src: "633:6:1",
                              },
                            ],
                            functionName: {
                              name: "mload",
                              nativeSrc: "627:5:1",
                              nodeType: "YulIdentifier",
                              src: "627:5:1",
                            },
                            nativeSrc: "627:13:1",
                            nodeType: "YulFunctionCall",
                            src: "627:13:1",
                          },
                          variableNames: [
                            {
                              name: "value",
                              nativeSrc: "618:5:1",
                              nodeType: "YulIdentifier",
                              src: "618:5:1",
                            },
                          ],
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                name: "value",
                                nativeSrc: "676:5:1",
                                nodeType: "YulIdentifier",
                                src: "676:5:1",
                              },
                            ],
                            functionName: {
                              name: "validator_revert_t_uint256",
                              nativeSrc: "649:26:1",
                              nodeType: "YulIdentifier",
                              src: "649:26:1",
                            },
                            nativeSrc: "649:33:1",
                            nodeType: "YulFunctionCall",
                            src: "649:33:1",
                          },
                          nativeSrc: "649:33:1",
                          nodeType: "YulExpressionStatement",
                          src: "649:33:1",
                        },
                      ],
                    },
                    name: "abi_decode_t_uint256_fromMemory",
                    nativeSrc: "545:143:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "offset",
                        nativeSrc: "586:6:1",
                        nodeType: "YulTypedName",
                        src: "586:6:1",
                        type: "",
                      },
                      {
                        name: "end",
                        nativeSrc: "594:3:1",
                        nodeType: "YulTypedName",
                        src: "594:3:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "value",
                        nativeSrc: "602:5:1",
                        nodeType: "YulTypedName",
                        src: "602:5:1",
                        type: "",
                      },
                    ],
                    src: "545:143:1",
                  },
                  {
                    body: {
                      nativeSrc: "771:274:1",
                      nodeType: "YulBlock",
                      src: "771:274:1",
                      statements: [
                        {
                          body: {
                            nativeSrc: "817:83:1",
                            nodeType: "YulBlock",
                            src: "817:83:1",
                            statements: [
                              {
                                expression: {
                                  arguments: [],
                                  functionName: {
                                    name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                    nativeSrc: "819:77:1",
                                    nodeType: "YulIdentifier",
                                    src: "819:77:1",
                                  },
                                  nativeSrc: "819:79:1",
                                  nodeType: "YulFunctionCall",
                                  src: "819:79:1",
                                },
                                nativeSrc: "819:79:1",
                                nodeType: "YulExpressionStatement",
                                src: "819:79:1",
                              },
                            ],
                          },
                          condition: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "dataEnd",
                                    nativeSrc: "792:7:1",
                                    nodeType: "YulIdentifier",
                                    src: "792:7:1",
                                  },
                                  {
                                    name: "headStart",
                                    nativeSrc: "801:9:1",
                                    nodeType: "YulIdentifier",
                                    src: "801:9:1",
                                  },
                                ],
                                functionName: {
                                  name: "sub",
                                  nativeSrc: "788:3:1",
                                  nodeType: "YulIdentifier",
                                  src: "788:3:1",
                                },
                                nativeSrc: "788:23:1",
                                nodeType: "YulFunctionCall",
                                src: "788:23:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "813:2:1",
                                nodeType: "YulLiteral",
                                src: "813:2:1",
                                type: "",
                                value: "32",
                              },
                            ],
                            functionName: {
                              name: "slt",
                              nativeSrc: "784:3:1",
                              nodeType: "YulIdentifier",
                              src: "784:3:1",
                            },
                            nativeSrc: "784:32:1",
                            nodeType: "YulFunctionCall",
                            src: "784:32:1",
                          },
                          nativeSrc: "781:119:1",
                          nodeType: "YulIf",
                          src: "781:119:1",
                        },
                        {
                          nativeSrc: "910:128:1",
                          nodeType: "YulBlock",
                          src: "910:128:1",
                          statements: [
                            {
                              nativeSrc: "925:15:1",
                              nodeType: "YulVariableDeclaration",
                              src: "925:15:1",
                              value: {
                                kind: "number",
                                nativeSrc: "939:1:1",
                                nodeType: "YulLiteral",
                                src: "939:1:1",
                                type: "",
                                value: "0",
                              },
                              variables: [
                                {
                                  name: "offset",
                                  nativeSrc: "929:6:1",
                                  nodeType: "YulTypedName",
                                  src: "929:6:1",
                                  type: "",
                                },
                              ],
                            },
                            {
                              nativeSrc: "954:74:1",
                              nodeType: "YulAssignment",
                              src: "954:74:1",
                              value: {
                                arguments: [
                                  {
                                    arguments: [
                                      {
                                        name: "headStart",
                                        nativeSrc: "1000:9:1",
                                        nodeType: "YulIdentifier",
                                        src: "1000:9:1",
                                      },
                                      {
                                        name: "offset",
                                        nativeSrc: "1011:6:1",
                                        nodeType: "YulIdentifier",
                                        src: "1011:6:1",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nativeSrc: "996:3:1",
                                      nodeType: "YulIdentifier",
                                      src: "996:3:1",
                                    },
                                    nativeSrc: "996:22:1",
                                    nodeType: "YulFunctionCall",
                                    src: "996:22:1",
                                  },
                                  {
                                    name: "dataEnd",
                                    nativeSrc: "1020:7:1",
                                    nodeType: "YulIdentifier",
                                    src: "1020:7:1",
                                  },
                                ],
                                functionName: {
                                  name: "abi_decode_t_uint256_fromMemory",
                                  nativeSrc: "964:31:1",
                                  nodeType: "YulIdentifier",
                                  src: "964:31:1",
                                },
                                nativeSrc: "964:64:1",
                                nodeType: "YulFunctionCall",
                                src: "964:64:1",
                              },
                              variableNames: [
                                {
                                  name: "value0",
                                  nativeSrc: "954:6:1",
                                  nodeType: "YulIdentifier",
                                  src: "954:6:1",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    name: "abi_decode_tuple_t_uint256_fromMemory",
                    nativeSrc: "694:351:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "headStart",
                        nativeSrc: "741:9:1",
                        nodeType: "YulTypedName",
                        src: "741:9:1",
                        type: "",
                      },
                      {
                        name: "dataEnd",
                        nativeSrc: "752:7:1",
                        nodeType: "YulTypedName",
                        src: "752:7:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "value0",
                        nativeSrc: "764:6:1",
                        nodeType: "YulTypedName",
                        src: "764:6:1",
                        type: "",
                      },
                    ],
                    src: "694:351:1",
                  },
                ],
              },
              contents:
                "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
              id: 1,
              language: "Yul",
              name: "#utility.yul",
            },
          ],
          linkReferences: {},
          object:
            "6080604052348015600e575f80fd5b50604051610c6b380380610c6b8339818101604052810190602e919060ab565b335f806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806003819055505060d1565b5f80fd5b5f819050919050565b608d81607d565b81146096575f80fd5b50565b5f8151905060a5816086565b92915050565b5f6020828403121560bd5760bc6079565b5b5f60c8848285016099565b91505092915050565b610b8d806100de5f395ff3fe608060405234801561000f575f80fd5b5060043610610060575f3560e01c8063439ce76f146100645780636d763a6e146100825780638da5cb5b146100a0578063aff0b297146100be578063b0860ac2146100da578063d47875d0146100f6575b5f80fd5b61006c610126565b60405161007991906107f9565b60405180910390f35b61008a61012c565b6040516100979190610935565b60405180910390f35b6100a86101e6565b6040516100b59190610964565b60405180910390f35b6100d860048036038101906100d391906109ab565b610209565b005b6100f460048036038101906100ef91906109ab565b6102a6565b005b610110600480360381019061010b9190610a00565b61033d565b60405161011d91906107f9565b60405180910390f35b60035481565b60606002805480602002602001604051908101604052809291908181526020015f905b828210156101dd578382905f5260205f2090600202016040518060400160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250508152602001906001019061014f565b50505050905090565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b8060015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055503373ffffffffffffffffffffffffffffffffffffffff167f20543b375b064b28d9e95eb06e1cba06204cfcc93bd4cb399a496db70fc102dc8260405161029191906107f9565b60405180910390a26102a33382610383565b50565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610333576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032a90610a85565b60405180910390fd5b8060038190555050565b5f60015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f805b600280549050811015610471578373ffffffffffffffffffffffffffffffffffffffff16600282815481106103be576103bd610aa3565b5b905f5260205f2090600202015f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610464576002818154811061041b5761041a610aa3565b5b905f5260205f2090600202016001015483111561045f57826002828154811061044757610446610aa3565b5b905f5260205f20906002020160010181905550600191505b610471565b8080600101915050610386565b50801580156104865750600354600280549050105b1561053357600260405180604001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200184815250908060018154018082558091505060019003905f5260205f2090600202015f909190919091505f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101555050600190505b80156107dc575f600160028054905061054c9190610afd565b90505b5f81111561078c5760026001826105669190610afd565b8154811061057757610576610aa3565b5b905f5260205f209060020201600101546002828154811061059b5761059a610aa3565b5b905f5260205f209060020201600101541115610779575f60026001836105c19190610afd565b815481106105d2576105d1610aa3565b5b905f5260205f2090600202016040518060400160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152505090506002828154811061065d5761065c610aa3565b5b905f5260205f20906002020160026001846106789190610afd565b8154811061068957610688610aa3565b5b905f5260205f2090600202015f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018201548160010155905050806002838154811061071a57610719610aa3565b5b905f5260205f2090600202015f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155905050505b808061078490610b30565b91505061054f565b508273ffffffffffffffffffffffffffffffffffffffff167f24e225604268d6416871b32db1be8e49f497caf8360393b31d71a34a4ce26693836040516107d391906107f9565b60405180910390a25b505050565b5f819050919050565b6107f3816107e1565b82525050565b5f60208201905061080c5f8301846107ea565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6108648261083b565b9050919050565b6108748161085a565b82525050565b610883816107e1565b82525050565b604082015f82015161089d5f85018261086b565b5060208201516108b0602085018261087a565b50505050565b5f6108c18383610889565b60408301905092915050565b5f602082019050919050565b5f6108e382610812565b6108ed818561081c565b93506108f88361082c565b805f5b8381101561092857815161090f88826108b6565b975061091a836108cd565b9250506001810190506108fb565b5085935050505092915050565b5f6020820190508181035f83015261094d81846108d9565b905092915050565b61095e8161085a565b82525050565b5f6020820190506109775f830184610955565b92915050565b5f80fd5b61098a816107e1565b8114610994575f80fd5b50565b5f813590506109a581610981565b92915050565b5f602082840312156109c0576109bf61097d565b5b5f6109cd84828501610997565b91505092915050565b6109df8161085a565b81146109e9575f80fd5b50565b5f813590506109fa816109d6565b92915050565b5f60208284031215610a1557610a1461097d565b5b5f610a22848285016109ec565b91505092915050565b5f82825260208201905092915050565b7f43616c6c6572206973206e6f7420746865206f776e65720000000000000000005f82015250565b5f610a6f601783610a2b565b9150610a7a82610a3b565b602082019050919050565b5f6020820190508181035f830152610a9c81610a63565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610b07826107e1565b9150610b12836107e1565b9250828203905081811115610b2a57610b29610ad0565b5b92915050565b5f610b3a826107e1565b91505f8203610b4c57610b4b610ad0565b5b60018203905091905056fea2646970667358221220a2bb545439df9255540a086421bb3cdd276510d4dac5463cfe8e29b586dc022364736f6c63430008190033",
          opcodes:
            "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH1 0xE JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH2 0xC6B CODESIZE SUB DUP1 PUSH2 0xC6B DUP4 CODECOPY DUP2 DUP2 ADD PUSH1 0x40 MSTORE DUP2 ADD SWAP1 PUSH1 0x2E SWAP2 SWAP1 PUSH1 0xAB JUMP JUMPDEST CALLER PUSH0 DUP1 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP DUP1 PUSH1 0x3 DUP2 SWAP1 SSTORE POP POP PUSH1 0xD1 JUMP JUMPDEST PUSH0 DUP1 REVERT JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x8D DUP2 PUSH1 0x7D JUMP JUMPDEST DUP2 EQ PUSH1 0x96 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP PUSH1 0xA5 DUP2 PUSH1 0x86 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH1 0xBD JUMPI PUSH1 0xBC PUSH1 0x79 JUMP JUMPDEST JUMPDEST PUSH0 PUSH1 0xC8 DUP5 DUP3 DUP6 ADD PUSH1 0x99 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xB8D DUP1 PUSH2 0xDE PUSH0 CODECOPY PUSH0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x60 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x439CE76F EQ PUSH2 0x64 JUMPI DUP1 PUSH4 0x6D763A6E EQ PUSH2 0x82 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0xA0 JUMPI DUP1 PUSH4 0xAFF0B297 EQ PUSH2 0xBE JUMPI DUP1 PUSH4 0xB0860AC2 EQ PUSH2 0xDA JUMPI DUP1 PUSH4 0xD47875D0 EQ PUSH2 0xF6 JUMPI JUMPDEST PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x6C PUSH2 0x126 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x79 SWAP2 SWAP1 PUSH2 0x7F9 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x8A PUSH2 0x12C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x97 SWAP2 SWAP1 PUSH2 0x935 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xA8 PUSH2 0x1E6 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xB5 SWAP2 SWAP1 PUSH2 0x964 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xD8 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xD3 SWAP2 SWAP1 PUSH2 0x9AB JUMP JUMPDEST PUSH2 0x209 JUMP JUMPDEST STOP JUMPDEST PUSH2 0xF4 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xEF SWAP2 SWAP1 PUSH2 0x9AB JUMP JUMPDEST PUSH2 0x2A6 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x110 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x10B SWAP2 SWAP1 PUSH2 0xA00 JUMP JUMPDEST PUSH2 0x33D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x11D SWAP2 SWAP1 PUSH2 0x7F9 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x2 DUP1 SLOAD DUP1 PUSH1 0x20 MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 SWAP1 JUMPDEST DUP3 DUP3 LT ISZERO PUSH2 0x1DD JUMPI DUP4 DUP3 SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE SWAP1 DUP2 PUSH0 DUP3 ADD PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x1 DUP3 ADD SLOAD DUP2 MSTORE POP POP DUP2 MSTORE PUSH1 0x20 ADD SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x14F JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 DUP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST DUP1 PUSH1 0x1 PUSH0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x20543B375B064B28D9E95EB06E1CBA06204CFCC93BD4CB399A496DB70FC102DC DUP3 PUSH1 0x40 MLOAD PUSH2 0x291 SWAP2 SWAP1 PUSH2 0x7F9 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 PUSH2 0x2A3 CALLER DUP3 PUSH2 0x383 JUMP JUMPDEST POP JUMP JUMPDEST PUSH0 DUP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x333 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x32A SWAP1 PUSH2 0xA85 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x3 DUP2 SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x1 PUSH0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP1 JUMPDEST PUSH1 0x2 DUP1 SLOAD SWAP1 POP DUP2 LT ISZERO PUSH2 0x471 JUMPI DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x2 DUP3 DUP2 SLOAD DUP2 LT PUSH2 0x3BE JUMPI PUSH2 0x3BD PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH0 ADD PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x464 JUMPI PUSH1 0x2 DUP2 DUP2 SLOAD DUP2 LT PUSH2 0x41B JUMPI PUSH2 0x41A PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x1 ADD SLOAD DUP4 GT ISZERO PUSH2 0x45F JUMPI DUP3 PUSH1 0x2 DUP3 DUP2 SLOAD DUP2 LT PUSH2 0x447 JUMPI PUSH2 0x446 PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x1 ADD DUP2 SWAP1 SSTORE POP PUSH1 0x1 SWAP2 POP JUMPDEST PUSH2 0x471 JUMP JUMPDEST DUP1 DUP1 PUSH1 0x1 ADD SWAP2 POP POP PUSH2 0x386 JUMP JUMPDEST POP DUP1 ISZERO DUP1 ISZERO PUSH2 0x486 JUMPI POP PUSH1 0x3 SLOAD PUSH1 0x2 DUP1 SLOAD SWAP1 POP LT JUMPDEST ISZERO PUSH2 0x533 JUMPI PUSH1 0x2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP5 DUP2 MSTORE POP SWAP1 DUP1 PUSH1 0x1 DUP2 SLOAD ADD DUP1 DUP3 SSTORE DUP1 SWAP2 POP POP PUSH1 0x1 SWAP1 SUB SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH0 SWAP1 SWAP2 SWAP1 SWAP2 SWAP1 SWAP2 POP PUSH0 DUP3 ADD MLOAD DUP2 PUSH0 ADD PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE POP POP PUSH1 0x1 SWAP1 POP JUMPDEST DUP1 ISZERO PUSH2 0x7DC JUMPI PUSH0 PUSH1 0x1 PUSH1 0x2 DUP1 SLOAD SWAP1 POP PUSH2 0x54C SWAP2 SWAP1 PUSH2 0xAFD JUMP JUMPDEST SWAP1 POP JUMPDEST PUSH0 DUP2 GT ISZERO PUSH2 0x78C JUMPI PUSH1 0x2 PUSH1 0x1 DUP3 PUSH2 0x566 SWAP2 SWAP1 PUSH2 0xAFD JUMP JUMPDEST DUP2 SLOAD DUP2 LT PUSH2 0x577 JUMPI PUSH2 0x576 PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x1 ADD SLOAD PUSH1 0x2 DUP3 DUP2 SLOAD DUP2 LT PUSH2 0x59B JUMPI PUSH2 0x59A PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x1 ADD SLOAD GT ISZERO PUSH2 0x779 JUMPI PUSH0 PUSH1 0x2 PUSH1 0x1 DUP4 PUSH2 0x5C1 SWAP2 SWAP1 PUSH2 0xAFD JUMP JUMPDEST DUP2 SLOAD DUP2 LT PUSH2 0x5D2 JUMPI PUSH2 0x5D1 PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE SWAP1 DUP2 PUSH0 DUP3 ADD PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x1 DUP3 ADD SLOAD DUP2 MSTORE POP POP SWAP1 POP PUSH1 0x2 DUP3 DUP2 SLOAD DUP2 LT PUSH2 0x65D JUMPI PUSH2 0x65C PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x2 PUSH1 0x1 DUP5 PUSH2 0x678 SWAP2 SWAP1 PUSH2 0xAFD JUMP JUMPDEST DUP2 SLOAD DUP2 LT PUSH2 0x689 JUMPI PUSH2 0x688 PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH0 DUP3 ADD PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH0 ADD PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x1 DUP3 ADD SLOAD DUP2 PUSH1 0x1 ADD SSTORE SWAP1 POP POP DUP1 PUSH1 0x2 DUP4 DUP2 SLOAD DUP2 LT PUSH2 0x71A JUMPI PUSH2 0x719 PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH0 DUP3 ADD MLOAD DUP2 PUSH0 ADD PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE SWAP1 POP POP POP JUMPDEST DUP1 DUP1 PUSH2 0x784 SWAP1 PUSH2 0xB30 JUMP JUMPDEST SWAP2 POP POP PUSH2 0x54F JUMP JUMPDEST POP DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x24E225604268D6416871B32DB1BE8E49F497CAF8360393B31D71A34A4CE26693 DUP4 PUSH1 0x40 MLOAD PUSH2 0x7D3 SWAP2 SWAP1 PUSH2 0x7F9 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 JUMPDEST POP POP POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x7F3 DUP2 PUSH2 0x7E1 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x80C PUSH0 DUP4 ADD DUP5 PUSH2 0x7EA JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x864 DUP3 PUSH2 0x83B JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x874 DUP2 PUSH2 0x85A JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x883 DUP2 PUSH2 0x7E1 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x40 DUP3 ADD PUSH0 DUP3 ADD MLOAD PUSH2 0x89D PUSH0 DUP6 ADD DUP3 PUSH2 0x86B JUMP JUMPDEST POP PUSH1 0x20 DUP3 ADD MLOAD PUSH2 0x8B0 PUSH1 0x20 DUP6 ADD DUP3 PUSH2 0x87A JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x8C1 DUP4 DUP4 PUSH2 0x889 JUMP JUMPDEST PUSH1 0x40 DUP4 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x8E3 DUP3 PUSH2 0x812 JUMP JUMPDEST PUSH2 0x8ED DUP2 DUP6 PUSH2 0x81C JUMP JUMPDEST SWAP4 POP PUSH2 0x8F8 DUP4 PUSH2 0x82C JUMP JUMPDEST DUP1 PUSH0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x928 JUMPI DUP2 MLOAD PUSH2 0x90F DUP9 DUP3 PUSH2 0x8B6 JUMP JUMPDEST SWAP8 POP PUSH2 0x91A DUP4 PUSH2 0x8CD JUMP JUMPDEST SWAP3 POP POP PUSH1 0x1 DUP2 ADD SWAP1 POP PUSH2 0x8FB JUMP JUMPDEST POP DUP6 SWAP4 POP POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x94D DUP2 DUP5 PUSH2 0x8D9 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x95E DUP2 PUSH2 0x85A JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x977 PUSH0 DUP4 ADD DUP5 PUSH2 0x955 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x98A DUP2 PUSH2 0x7E1 JUMP JUMPDEST DUP2 EQ PUSH2 0x994 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x9A5 DUP2 PUSH2 0x981 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x9C0 JUMPI PUSH2 0x9BF PUSH2 0x97D JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x9CD DUP5 DUP3 DUP6 ADD PUSH2 0x997 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x9DF DUP2 PUSH2 0x85A JUMP JUMPDEST DUP2 EQ PUSH2 0x9E9 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x9FA DUP2 PUSH2 0x9D6 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xA15 JUMPI PUSH2 0xA14 PUSH2 0x97D JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0xA22 DUP5 DUP3 DUP6 ADD PUSH2 0x9EC JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x43616C6C6572206973206E6F7420746865206F776E6572000000000000000000 PUSH0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH0 PUSH2 0xA6F PUSH1 0x17 DUP4 PUSH2 0xA2B JUMP JUMPDEST SWAP2 POP PUSH2 0xA7A DUP3 PUSH2 0xA3B JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0xA9C DUP2 PUSH2 0xA63 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0xB07 DUP3 PUSH2 0x7E1 JUMP JUMPDEST SWAP2 POP PUSH2 0xB12 DUP4 PUSH2 0x7E1 JUMP JUMPDEST SWAP3 POP DUP3 DUP3 SUB SWAP1 POP DUP2 DUP2 GT ISZERO PUSH2 0xB2A JUMPI PUSH2 0xB29 PUSH2 0xAD0 JUMP JUMPDEST JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH2 0xB3A DUP3 PUSH2 0x7E1 JUMP JUMPDEST SWAP2 POP PUSH0 DUP3 SUB PUSH2 0xB4C JUMPI PUSH2 0xB4B PUSH2 0xAD0 JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 SUB SWAP1 POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 LOG2 0xBB SLOAD SLOAD CODECOPY 0xDF SWAP3 SSTORE SLOAD EXP ADDMOD PUSH5 0x21BB3CDD27 PUSH6 0x10D4DAC5463C INVALID DUP15 0x29 0xB5 DUP7 0xDC MUL 0x23 PUSH5 0x736F6C6343 STOP ADDMOD NOT STOP CALLER ",
          sourceMap:
            "60:2231:0:-:0;;;579:120;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;636:10;628:5;;:18;;;;;;;;;;;;;;;;;;675:16;657:15;:34;;;;579:120;60:2231;;88:117:1;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:143::-;602:5;633:6;627:13;618:22;;649:33;676:5;649:33;:::i;:::-;545:143;;;;:::o;694:351::-;764:6;813:2;801:9;792:7;788:23;784:32;781:119;;;819:79;;:::i;:::-;781:119;939:1;964:64;1020:7;1011:6;1000:9;996:22;964:64;:::i;:::-;954:74;;910:128;694:351;;;;:::o;60:2231:0:-;;;;;;;",
        },
        deployedBytecode: {
          functionDebugData: {
            "@_updateLeaderboard_218": {
              entryPoint: 899,
              id: 218,
              parameterSlots: 2,
              returnSlots: 0,
            },
            "@changeLeaderboardSize_252": {
              entryPoint: 678,
              id: 252,
              parameterSlots: 1,
              returnSlots: 0,
            },
            "@getLeaderboard_240": {
              entryPoint: 300,
              id: 240,
              parameterSlots: 0,
              returnSlots: 1,
            },
            "@getScore_230": {
              entryPoint: 829,
              id: 230,
              parameterSlots: 1,
              returnSlots: 1,
            },
            "@leaderboardSize_18": {
              entryPoint: 294,
              id: 18,
              parameterSlots: 0,
              returnSlots: 0,
            },
            "@owner_8": {
              entryPoint: 486,
              id: 8,
              parameterSlots: 0,
              returnSlots: 0,
            },
            "@submitScore_82": {
              entryPoint: 521,
              id: 82,
              parameterSlots: 1,
              returnSlots: 0,
            },
            abi_decode_t_address: {
              entryPoint: 2540,
              id: null,
              parameterSlots: 2,
              returnSlots: 1,
            },
            abi_decode_t_uint256: {
              entryPoint: 2455,
              id: null,
              parameterSlots: 2,
              returnSlots: 1,
            },
            abi_decode_tuple_t_address: {
              entryPoint: 2560,
              id: null,
              parameterSlots: 2,
              returnSlots: 1,
            },
            abi_decode_tuple_t_uint256: {
              entryPoint: 2475,
              id: null,
              parameterSlots: 2,
              returnSlots: 1,
            },
            abi_encodeUpdatedPos_t_struct$_Player_$6_memory_ptr_to_t_struct$_Player_$6_memory_ptr:
              {
                entryPoint: 2230,
                id: null,
                parameterSlots: 2,
                returnSlots: 1,
              },
            abi_encode_t_address_to_t_address: {
              entryPoint: 2155,
              id: null,
              parameterSlots: 2,
              returnSlots: 0,
            },
            abi_encode_t_address_to_t_address_fromStack: {
              entryPoint: 2389,
              id: null,
              parameterSlots: 2,
              returnSlots: 0,
            },
            abi_encode_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_fromStack:
              {
                entryPoint: 2265,
                id: null,
                parameterSlots: 2,
                returnSlots: 1,
              },
            abi_encode_t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33_to_t_string_memory_ptr_fromStack:
              {
                entryPoint: 2659,
                id: null,
                parameterSlots: 1,
                returnSlots: 1,
              },
            abi_encode_t_struct$_Player_$6_memory_ptr_to_t_struct$_Player_$6_memory_ptr:
              {
                entryPoint: 2185,
                id: null,
                parameterSlots: 2,
                returnSlots: 0,
              },
            abi_encode_t_uint256_to_t_uint256: {
              entryPoint: 2170,
              id: null,
              parameterSlots: 2,
              returnSlots: 0,
            },
            abi_encode_t_uint256_to_t_uint256_fromStack: {
              entryPoint: 2026,
              id: null,
              parameterSlots: 2,
              returnSlots: 0,
            },
            abi_encode_tuple_t_address__to_t_address__fromStack_reversed: {
              entryPoint: 2404,
              id: null,
              parameterSlots: 2,
              returnSlots: 1,
            },
            abi_encode_tuple_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr__fromStack_reversed:
              {
                entryPoint: 2357,
                id: null,
                parameterSlots: 2,
                returnSlots: 1,
              },
            abi_encode_tuple_t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33__to_t_string_memory_ptr__fromStack_reversed:
              {
                entryPoint: 2693,
                id: null,
                parameterSlots: 1,
                returnSlots: 1,
              },
            abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed: {
              entryPoint: 2041,
              id: null,
              parameterSlots: 2,
              returnSlots: 1,
            },
            allocate_unbounded: {
              entryPoint: null,
              id: null,
              parameterSlots: 0,
              returnSlots: 1,
            },
            array_dataslot_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr:
              {
                entryPoint: 2092,
                id: null,
                parameterSlots: 1,
                returnSlots: 1,
              },
            array_length_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr:
              {
                entryPoint: 2066,
                id: null,
                parameterSlots: 1,
                returnSlots: 1,
              },
            array_nextElement_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr:
              {
                entryPoint: 2253,
                id: null,
                parameterSlots: 1,
                returnSlots: 1,
              },
            array_storeLengthForEncoding_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_fromStack:
              {
                entryPoint: 2076,
                id: null,
                parameterSlots: 2,
                returnSlots: 1,
              },
            array_storeLengthForEncoding_t_string_memory_ptr_fromStack: {
              entryPoint: 2603,
              id: null,
              parameterSlots: 2,
              returnSlots: 1,
            },
            checked_sub_t_uint256: {
              entryPoint: 2813,
              id: null,
              parameterSlots: 2,
              returnSlots: 1,
            },
            cleanup_t_address: {
              entryPoint: 2138,
              id: null,
              parameterSlots: 1,
              returnSlots: 1,
            },
            cleanup_t_uint160: {
              entryPoint: 2107,
              id: null,
              parameterSlots: 1,
              returnSlots: 1,
            },
            cleanup_t_uint256: {
              entryPoint: 2017,
              id: null,
              parameterSlots: 1,
              returnSlots: 1,
            },
            decrement_t_uint256: {
              entryPoint: 2864,
              id: null,
              parameterSlots: 1,
              returnSlots: 1,
            },
            panic_error_0x11: {
              entryPoint: 2768,
              id: null,
              parameterSlots: 0,
              returnSlots: 0,
            },
            panic_error_0x32: {
              entryPoint: 2723,
              id: null,
              parameterSlots: 0,
              returnSlots: 0,
            },
            revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db:
              {
                entryPoint: null,
                id: null,
                parameterSlots: 0,
                returnSlots: 0,
              },
            revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b:
              {
                entryPoint: 2429,
                id: null,
                parameterSlots: 0,
                returnSlots: 0,
              },
            store_literal_in_memory_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33:
              {
                entryPoint: 2619,
                id: null,
                parameterSlots: 1,
                returnSlots: 0,
              },
            validator_revert_t_address: {
              entryPoint: 2518,
              id: null,
              parameterSlots: 1,
              returnSlots: 0,
            },
            validator_revert_t_uint256: {
              entryPoint: 2433,
              id: null,
              parameterSlots: 1,
              returnSlots: 0,
            },
          },
          generatedSources: [
            {
              ast: {
                nativeSrc: "0:7650:1",
                nodeType: "YulBlock",
                src: "0:7650:1",
                statements: [
                  {
                    body: {
                      nativeSrc: "52:32:1",
                      nodeType: "YulBlock",
                      src: "52:32:1",
                      statements: [
                        {
                          nativeSrc: "62:16:1",
                          nodeType: "YulAssignment",
                          src: "62:16:1",
                          value: {
                            name: "value",
                            nativeSrc: "73:5:1",
                            nodeType: "YulIdentifier",
                            src: "73:5:1",
                          },
                          variableNames: [
                            {
                              name: "cleaned",
                              nativeSrc: "62:7:1",
                              nodeType: "YulIdentifier",
                              src: "62:7:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "cleanup_t_uint256",
                    nativeSrc: "7:77:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "34:5:1",
                        nodeType: "YulTypedName",
                        src: "34:5:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "cleaned",
                        nativeSrc: "44:7:1",
                        nodeType: "YulTypedName",
                        src: "44:7:1",
                        type: "",
                      },
                    ],
                    src: "7:77:1",
                  },
                  {
                    body: {
                      nativeSrc: "155:53:1",
                      nodeType: "YulBlock",
                      src: "155:53:1",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                name: "pos",
                                nativeSrc: "172:3:1",
                                nodeType: "YulIdentifier",
                                src: "172:3:1",
                              },
                              {
                                arguments: [
                                  {
                                    name: "value",
                                    nativeSrc: "195:5:1",
                                    nodeType: "YulIdentifier",
                                    src: "195:5:1",
                                  },
                                ],
                                functionName: {
                                  name: "cleanup_t_uint256",
                                  nativeSrc: "177:17:1",
                                  nodeType: "YulIdentifier",
                                  src: "177:17:1",
                                },
                                nativeSrc: "177:24:1",
                                nodeType: "YulFunctionCall",
                                src: "177:24:1",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nativeSrc: "165:6:1",
                              nodeType: "YulIdentifier",
                              src: "165:6:1",
                            },
                            nativeSrc: "165:37:1",
                            nodeType: "YulFunctionCall",
                            src: "165:37:1",
                          },
                          nativeSrc: "165:37:1",
                          nodeType: "YulExpressionStatement",
                          src: "165:37:1",
                        },
                      ],
                    },
                    name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                    nativeSrc: "90:118:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "143:5:1",
                        nodeType: "YulTypedName",
                        src: "143:5:1",
                        type: "",
                      },
                      {
                        name: "pos",
                        nativeSrc: "150:3:1",
                        nodeType: "YulTypedName",
                        src: "150:3:1",
                        type: "",
                      },
                    ],
                    src: "90:118:1",
                  },
                  {
                    body: {
                      nativeSrc: "312:124:1",
                      nodeType: "YulBlock",
                      src: "312:124:1",
                      statements: [
                        {
                          nativeSrc: "322:26:1",
                          nodeType: "YulAssignment",
                          src: "322:26:1",
                          value: {
                            arguments: [
                              {
                                name: "headStart",
                                nativeSrc: "334:9:1",
                                nodeType: "YulIdentifier",
                                src: "334:9:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "345:2:1",
                                nodeType: "YulLiteral",
                                src: "345:2:1",
                                type: "",
                                value: "32",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nativeSrc: "330:3:1",
                              nodeType: "YulIdentifier",
                              src: "330:3:1",
                            },
                            nativeSrc: "330:18:1",
                            nodeType: "YulFunctionCall",
                            src: "330:18:1",
                          },
                          variableNames: [
                            {
                              name: "tail",
                              nativeSrc: "322:4:1",
                              nodeType: "YulIdentifier",
                              src: "322:4:1",
                            },
                          ],
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                name: "value0",
                                nativeSrc: "402:6:1",
                                nodeType: "YulIdentifier",
                                src: "402:6:1",
                              },
                              {
                                arguments: [
                                  {
                                    name: "headStart",
                                    nativeSrc: "415:9:1",
                                    nodeType: "YulIdentifier",
                                    src: "415:9:1",
                                  },
                                  {
                                    kind: "number",
                                    nativeSrc: "426:1:1",
                                    nodeType: "YulLiteral",
                                    src: "426:1:1",
                                    type: "",
                                    value: "0",
                                  },
                                ],
                                functionName: {
                                  name: "add",
                                  nativeSrc: "411:3:1",
                                  nodeType: "YulIdentifier",
                                  src: "411:3:1",
                                },
                                nativeSrc: "411:17:1",
                                nodeType: "YulFunctionCall",
                                src: "411:17:1",
                              },
                            ],
                            functionName: {
                              name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                              nativeSrc: "358:43:1",
                              nodeType: "YulIdentifier",
                              src: "358:43:1",
                            },
                            nativeSrc: "358:71:1",
                            nodeType: "YulFunctionCall",
                            src: "358:71:1",
                          },
                          nativeSrc: "358:71:1",
                          nodeType: "YulExpressionStatement",
                          src: "358:71:1",
                        },
                      ],
                    },
                    name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                    nativeSrc: "214:222:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "headStart",
                        nativeSrc: "284:9:1",
                        nodeType: "YulTypedName",
                        src: "284:9:1",
                        type: "",
                      },
                      {
                        name: "value0",
                        nativeSrc: "296:6:1",
                        nodeType: "YulTypedName",
                        src: "296:6:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "tail",
                        nativeSrc: "307:4:1",
                        nodeType: "YulTypedName",
                        src: "307:4:1",
                        type: "",
                      },
                    ],
                    src: "214:222:1",
                  },
                  {
                    body: {
                      nativeSrc: "537:40:1",
                      nodeType: "YulBlock",
                      src: "537:40:1",
                      statements: [
                        {
                          nativeSrc: "548:22:1",
                          nodeType: "YulAssignment",
                          src: "548:22:1",
                          value: {
                            arguments: [
                              {
                                name: "value",
                                nativeSrc: "564:5:1",
                                nodeType: "YulIdentifier",
                                src: "564:5:1",
                              },
                            ],
                            functionName: {
                              name: "mload",
                              nativeSrc: "558:5:1",
                              nodeType: "YulIdentifier",
                              src: "558:5:1",
                            },
                            nativeSrc: "558:12:1",
                            nodeType: "YulFunctionCall",
                            src: "558:12:1",
                          },
                          variableNames: [
                            {
                              name: "length",
                              nativeSrc: "548:6:1",
                              nodeType: "YulIdentifier",
                              src: "548:6:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "array_length_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr",
                    nativeSrc: "442:135:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "520:5:1",
                        nodeType: "YulTypedName",
                        src: "520:5:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "length",
                        nativeSrc: "530:6:1",
                        nodeType: "YulTypedName",
                        src: "530:6:1",
                        type: "",
                      },
                    ],
                    src: "442:135:1",
                  },
                  {
                    body: {
                      nativeSrc: "715:73:1",
                      nodeType: "YulBlock",
                      src: "715:73:1",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                name: "pos",
                                nativeSrc: "732:3:1",
                                nodeType: "YulIdentifier",
                                src: "732:3:1",
                              },
                              {
                                name: "length",
                                nativeSrc: "737:6:1",
                                nodeType: "YulIdentifier",
                                src: "737:6:1",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nativeSrc: "725:6:1",
                              nodeType: "YulIdentifier",
                              src: "725:6:1",
                            },
                            nativeSrc: "725:19:1",
                            nodeType: "YulFunctionCall",
                            src: "725:19:1",
                          },
                          nativeSrc: "725:19:1",
                          nodeType: "YulExpressionStatement",
                          src: "725:19:1",
                        },
                        {
                          nativeSrc: "753:29:1",
                          nodeType: "YulAssignment",
                          src: "753:29:1",
                          value: {
                            arguments: [
                              {
                                name: "pos",
                                nativeSrc: "772:3:1",
                                nodeType: "YulIdentifier",
                                src: "772:3:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "777:4:1",
                                nodeType: "YulLiteral",
                                src: "777:4:1",
                                type: "",
                                value: "0x20",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nativeSrc: "768:3:1",
                              nodeType: "YulIdentifier",
                              src: "768:3:1",
                            },
                            nativeSrc: "768:14:1",
                            nodeType: "YulFunctionCall",
                            src: "768:14:1",
                          },
                          variableNames: [
                            {
                              name: "updated_pos",
                              nativeSrc: "753:11:1",
                              nodeType: "YulIdentifier",
                              src: "753:11:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "array_storeLengthForEncoding_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_fromStack",
                    nativeSrc: "583:205:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "pos",
                        nativeSrc: "687:3:1",
                        nodeType: "YulTypedName",
                        src: "687:3:1",
                        type: "",
                      },
                      {
                        name: "length",
                        nativeSrc: "692:6:1",
                        nodeType: "YulTypedName",
                        src: "692:6:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "updated_pos",
                        nativeSrc: "703:11:1",
                        nodeType: "YulTypedName",
                        src: "703:11:1",
                        type: "",
                      },
                    ],
                    src: "583:205:1",
                  },
                  {
                    body: {
                      nativeSrc: "887:60:1",
                      nodeType: "YulBlock",
                      src: "887:60:1",
                      statements: [
                        {
                          nativeSrc: "897:11:1",
                          nodeType: "YulAssignment",
                          src: "897:11:1",
                          value: {
                            name: "ptr",
                            nativeSrc: "905:3:1",
                            nodeType: "YulIdentifier",
                            src: "905:3:1",
                          },
                          variableNames: [
                            {
                              name: "data",
                              nativeSrc: "897:4:1",
                              nodeType: "YulIdentifier",
                              src: "897:4:1",
                            },
                          ],
                        },
                        {
                          nativeSrc: "918:22:1",
                          nodeType: "YulAssignment",
                          src: "918:22:1",
                          value: {
                            arguments: [
                              {
                                name: "ptr",
                                nativeSrc: "930:3:1",
                                nodeType: "YulIdentifier",
                                src: "930:3:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "935:4:1",
                                nodeType: "YulLiteral",
                                src: "935:4:1",
                                type: "",
                                value: "0x20",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nativeSrc: "926:3:1",
                              nodeType: "YulIdentifier",
                              src: "926:3:1",
                            },
                            nativeSrc: "926:14:1",
                            nodeType: "YulFunctionCall",
                            src: "926:14:1",
                          },
                          variableNames: [
                            {
                              name: "data",
                              nativeSrc: "918:4:1",
                              nodeType: "YulIdentifier",
                              src: "918:4:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "array_dataslot_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr",
                    nativeSrc: "794:153:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "ptr",
                        nativeSrc: "874:3:1",
                        nodeType: "YulTypedName",
                        src: "874:3:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "data",
                        nativeSrc: "882:4:1",
                        nodeType: "YulTypedName",
                        src: "882:4:1",
                        type: "",
                      },
                    ],
                    src: "794:153:1",
                  },
                  {
                    body: {
                      nativeSrc: "998:81:1",
                      nodeType: "YulBlock",
                      src: "998:81:1",
                      statements: [
                        {
                          nativeSrc: "1008:65:1",
                          nodeType: "YulAssignment",
                          src: "1008:65:1",
                          value: {
                            arguments: [
                              {
                                name: "value",
                                nativeSrc: "1023:5:1",
                                nodeType: "YulIdentifier",
                                src: "1023:5:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "1030:42:1",
                                nodeType: "YulLiteral",
                                src: "1030:42:1",
                                type: "",
                                value:
                                  "0xffffffffffffffffffffffffffffffffffffffff",
                              },
                            ],
                            functionName: {
                              name: "and",
                              nativeSrc: "1019:3:1",
                              nodeType: "YulIdentifier",
                              src: "1019:3:1",
                            },
                            nativeSrc: "1019:54:1",
                            nodeType: "YulFunctionCall",
                            src: "1019:54:1",
                          },
                          variableNames: [
                            {
                              name: "cleaned",
                              nativeSrc: "1008:7:1",
                              nodeType: "YulIdentifier",
                              src: "1008:7:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "cleanup_t_uint160",
                    nativeSrc: "953:126:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "980:5:1",
                        nodeType: "YulTypedName",
                        src: "980:5:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "cleaned",
                        nativeSrc: "990:7:1",
                        nodeType: "YulTypedName",
                        src: "990:7:1",
                        type: "",
                      },
                    ],
                    src: "953:126:1",
                  },
                  {
                    body: {
                      nativeSrc: "1130:51:1",
                      nodeType: "YulBlock",
                      src: "1130:51:1",
                      statements: [
                        {
                          nativeSrc: "1140:35:1",
                          nodeType: "YulAssignment",
                          src: "1140:35:1",
                          value: {
                            arguments: [
                              {
                                name: "value",
                                nativeSrc: "1169:5:1",
                                nodeType: "YulIdentifier",
                                src: "1169:5:1",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_uint160",
                              nativeSrc: "1151:17:1",
                              nodeType: "YulIdentifier",
                              src: "1151:17:1",
                            },
                            nativeSrc: "1151:24:1",
                            nodeType: "YulFunctionCall",
                            src: "1151:24:1",
                          },
                          variableNames: [
                            {
                              name: "cleaned",
                              nativeSrc: "1140:7:1",
                              nodeType: "YulIdentifier",
                              src: "1140:7:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "cleanup_t_address",
                    nativeSrc: "1085:96:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "1112:5:1",
                        nodeType: "YulTypedName",
                        src: "1112:5:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "cleaned",
                        nativeSrc: "1122:7:1",
                        nodeType: "YulTypedName",
                        src: "1122:7:1",
                        type: "",
                      },
                    ],
                    src: "1085:96:1",
                  },
                  {
                    body: {
                      nativeSrc: "1242:53:1",
                      nodeType: "YulBlock",
                      src: "1242:53:1",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                name: "pos",
                                nativeSrc: "1259:3:1",
                                nodeType: "YulIdentifier",
                                src: "1259:3:1",
                              },
                              {
                                arguments: [
                                  {
                                    name: "value",
                                    nativeSrc: "1282:5:1",
                                    nodeType: "YulIdentifier",
                                    src: "1282:5:1",
                                  },
                                ],
                                functionName: {
                                  name: "cleanup_t_address",
                                  nativeSrc: "1264:17:1",
                                  nodeType: "YulIdentifier",
                                  src: "1264:17:1",
                                },
                                nativeSrc: "1264:24:1",
                                nodeType: "YulFunctionCall",
                                src: "1264:24:1",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nativeSrc: "1252:6:1",
                              nodeType: "YulIdentifier",
                              src: "1252:6:1",
                            },
                            nativeSrc: "1252:37:1",
                            nodeType: "YulFunctionCall",
                            src: "1252:37:1",
                          },
                          nativeSrc: "1252:37:1",
                          nodeType: "YulExpressionStatement",
                          src: "1252:37:1",
                        },
                      ],
                    },
                    name: "abi_encode_t_address_to_t_address",
                    nativeSrc: "1187:108:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "1230:5:1",
                        nodeType: "YulTypedName",
                        src: "1230:5:1",
                        type: "",
                      },
                      {
                        name: "pos",
                        nativeSrc: "1237:3:1",
                        nodeType: "YulTypedName",
                        src: "1237:3:1",
                        type: "",
                      },
                    ],
                    src: "1187:108:1",
                  },
                  {
                    body: {
                      nativeSrc: "1356:53:1",
                      nodeType: "YulBlock",
                      src: "1356:53:1",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                name: "pos",
                                nativeSrc: "1373:3:1",
                                nodeType: "YulIdentifier",
                                src: "1373:3:1",
                              },
                              {
                                arguments: [
                                  {
                                    name: "value",
                                    nativeSrc: "1396:5:1",
                                    nodeType: "YulIdentifier",
                                    src: "1396:5:1",
                                  },
                                ],
                                functionName: {
                                  name: "cleanup_t_uint256",
                                  nativeSrc: "1378:17:1",
                                  nodeType: "YulIdentifier",
                                  src: "1378:17:1",
                                },
                                nativeSrc: "1378:24:1",
                                nodeType: "YulFunctionCall",
                                src: "1378:24:1",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nativeSrc: "1366:6:1",
                              nodeType: "YulIdentifier",
                              src: "1366:6:1",
                            },
                            nativeSrc: "1366:37:1",
                            nodeType: "YulFunctionCall",
                            src: "1366:37:1",
                          },
                          nativeSrc: "1366:37:1",
                          nodeType: "YulExpressionStatement",
                          src: "1366:37:1",
                        },
                      ],
                    },
                    name: "abi_encode_t_uint256_to_t_uint256",
                    nativeSrc: "1301:108:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "1344:5:1",
                        nodeType: "YulTypedName",
                        src: "1344:5:1",
                        type: "",
                      },
                      {
                        name: "pos",
                        nativeSrc: "1351:3:1",
                        nodeType: "YulTypedName",
                        src: "1351:3:1",
                        type: "",
                      },
                    ],
                    src: "1301:108:1",
                  },
                  {
                    body: {
                      nativeSrc: "1591:401:1",
                      nodeType: "YulBlock",
                      src: "1591:401:1",
                      statements: [
                        {
                          nativeSrc: "1601:26:1",
                          nodeType: "YulVariableDeclaration",
                          src: "1601:26:1",
                          value: {
                            arguments: [
                              {
                                name: "pos",
                                nativeSrc: "1617:3:1",
                                nodeType: "YulIdentifier",
                                src: "1617:3:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "1622:4:1",
                                nodeType: "YulLiteral",
                                src: "1622:4:1",
                                type: "",
                                value: "0x40",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nativeSrc: "1613:3:1",
                              nodeType: "YulIdentifier",
                              src: "1613:3:1",
                            },
                            nativeSrc: "1613:14:1",
                            nodeType: "YulFunctionCall",
                            src: "1613:14:1",
                          },
                          variables: [
                            {
                              name: "tail",
                              nativeSrc: "1605:4:1",
                              nodeType: "YulTypedName",
                              src: "1605:4:1",
                              type: "",
                            },
                          ],
                        },
                        {
                          nativeSrc: "1637:173:1",
                          nodeType: "YulBlock",
                          src: "1637:173:1",
                          statements: [
                            {
                              nativeSrc: "1681:43:1",
                              nodeType: "YulVariableDeclaration",
                              src: "1681:43:1",
                              value: {
                                arguments: [
                                  {
                                    arguments: [
                                      {
                                        name: "value",
                                        nativeSrc: "1711:5:1",
                                        nodeType: "YulIdentifier",
                                        src: "1711:5:1",
                                      },
                                      {
                                        kind: "number",
                                        nativeSrc: "1718:4:1",
                                        nodeType: "YulLiteral",
                                        src: "1718:4:1",
                                        type: "",
                                        value: "0x00",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nativeSrc: "1707:3:1",
                                      nodeType: "YulIdentifier",
                                      src: "1707:3:1",
                                    },
                                    nativeSrc: "1707:16:1",
                                    nodeType: "YulFunctionCall",
                                    src: "1707:16:1",
                                  },
                                ],
                                functionName: {
                                  name: "mload",
                                  nativeSrc: "1701:5:1",
                                  nodeType: "YulIdentifier",
                                  src: "1701:5:1",
                                },
                                nativeSrc: "1701:23:1",
                                nodeType: "YulFunctionCall",
                                src: "1701:23:1",
                              },
                              variables: [
                                {
                                  name: "memberValue0",
                                  nativeSrc: "1685:12:1",
                                  nodeType: "YulTypedName",
                                  src: "1685:12:1",
                                  type: "",
                                },
                              ],
                            },
                            {
                              expression: {
                                arguments: [
                                  {
                                    name: "memberValue0",
                                    nativeSrc: "1771:12:1",
                                    nodeType: "YulIdentifier",
                                    src: "1771:12:1",
                                  },
                                  {
                                    arguments: [
                                      {
                                        name: "pos",
                                        nativeSrc: "1789:3:1",
                                        nodeType: "YulIdentifier",
                                        src: "1789:3:1",
                                      },
                                      {
                                        kind: "number",
                                        nativeSrc: "1794:4:1",
                                        nodeType: "YulLiteral",
                                        src: "1794:4:1",
                                        type: "",
                                        value: "0x00",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nativeSrc: "1785:3:1",
                                      nodeType: "YulIdentifier",
                                      src: "1785:3:1",
                                    },
                                    nativeSrc: "1785:14:1",
                                    nodeType: "YulFunctionCall",
                                    src: "1785:14:1",
                                  },
                                ],
                                functionName: {
                                  name: "abi_encode_t_address_to_t_address",
                                  nativeSrc: "1737:33:1",
                                  nodeType: "YulIdentifier",
                                  src: "1737:33:1",
                                },
                                nativeSrc: "1737:63:1",
                                nodeType: "YulFunctionCall",
                                src: "1737:63:1",
                              },
                              nativeSrc: "1737:63:1",
                              nodeType: "YulExpressionStatement",
                              src: "1737:63:1",
                            },
                          ],
                        },
                        {
                          nativeSrc: "1820:165:1",
                          nodeType: "YulBlock",
                          src: "1820:165:1",
                          statements: [
                            {
                              nativeSrc: "1856:43:1",
                              nodeType: "YulVariableDeclaration",
                              src: "1856:43:1",
                              value: {
                                arguments: [
                                  {
                                    arguments: [
                                      {
                                        name: "value",
                                        nativeSrc: "1886:5:1",
                                        nodeType: "YulIdentifier",
                                        src: "1886:5:1",
                                      },
                                      {
                                        kind: "number",
                                        nativeSrc: "1893:4:1",
                                        nodeType: "YulLiteral",
                                        src: "1893:4:1",
                                        type: "",
                                        value: "0x20",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nativeSrc: "1882:3:1",
                                      nodeType: "YulIdentifier",
                                      src: "1882:3:1",
                                    },
                                    nativeSrc: "1882:16:1",
                                    nodeType: "YulFunctionCall",
                                    src: "1882:16:1",
                                  },
                                ],
                                functionName: {
                                  name: "mload",
                                  nativeSrc: "1876:5:1",
                                  nodeType: "YulIdentifier",
                                  src: "1876:5:1",
                                },
                                nativeSrc: "1876:23:1",
                                nodeType: "YulFunctionCall",
                                src: "1876:23:1",
                              },
                              variables: [
                                {
                                  name: "memberValue0",
                                  nativeSrc: "1860:12:1",
                                  nodeType: "YulTypedName",
                                  src: "1860:12:1",
                                  type: "",
                                },
                              ],
                            },
                            {
                              expression: {
                                arguments: [
                                  {
                                    name: "memberValue0",
                                    nativeSrc: "1946:12:1",
                                    nodeType: "YulIdentifier",
                                    src: "1946:12:1",
                                  },
                                  {
                                    arguments: [
                                      {
                                        name: "pos",
                                        nativeSrc: "1964:3:1",
                                        nodeType: "YulIdentifier",
                                        src: "1964:3:1",
                                      },
                                      {
                                        kind: "number",
                                        nativeSrc: "1969:4:1",
                                        nodeType: "YulLiteral",
                                        src: "1969:4:1",
                                        type: "",
                                        value: "0x20",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nativeSrc: "1960:3:1",
                                      nodeType: "YulIdentifier",
                                      src: "1960:3:1",
                                    },
                                    nativeSrc: "1960:14:1",
                                    nodeType: "YulFunctionCall",
                                    src: "1960:14:1",
                                  },
                                ],
                                functionName: {
                                  name: "abi_encode_t_uint256_to_t_uint256",
                                  nativeSrc: "1912:33:1",
                                  nodeType: "YulIdentifier",
                                  src: "1912:33:1",
                                },
                                nativeSrc: "1912:63:1",
                                nodeType: "YulFunctionCall",
                                src: "1912:63:1",
                              },
                              nativeSrc: "1912:63:1",
                              nodeType: "YulExpressionStatement",
                              src: "1912:63:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "abi_encode_t_struct$_Player_$6_memory_ptr_to_t_struct$_Player_$6_memory_ptr",
                    nativeSrc: "1493:499:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "1578:5:1",
                        nodeType: "YulTypedName",
                        src: "1578:5:1",
                        type: "",
                      },
                      {
                        name: "pos",
                        nativeSrc: "1585:3:1",
                        nodeType: "YulTypedName",
                        src: "1585:3:1",
                        type: "",
                      },
                    ],
                    src: "1493:499:1",
                  },
                  {
                    body: {
                      nativeSrc: "2120:141:1",
                      nodeType: "YulBlock",
                      src: "2120:141:1",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                name: "value0",
                                nativeSrc: "2206:6:1",
                                nodeType: "YulIdentifier",
                                src: "2206:6:1",
                              },
                              {
                                name: "pos",
                                nativeSrc: "2214:3:1",
                                nodeType: "YulIdentifier",
                                src: "2214:3:1",
                              },
                            ],
                            functionName: {
                              name: "abi_encode_t_struct$_Player_$6_memory_ptr_to_t_struct$_Player_$6_memory_ptr",
                              nativeSrc: "2130:75:1",
                              nodeType: "YulIdentifier",
                              src: "2130:75:1",
                            },
                            nativeSrc: "2130:88:1",
                            nodeType: "YulFunctionCall",
                            src: "2130:88:1",
                          },
                          nativeSrc: "2130:88:1",
                          nodeType: "YulExpressionStatement",
                          src: "2130:88:1",
                        },
                        {
                          nativeSrc: "2227:28:1",
                          nodeType: "YulAssignment",
                          src: "2227:28:1",
                          value: {
                            arguments: [
                              {
                                name: "pos",
                                nativeSrc: "2245:3:1",
                                nodeType: "YulIdentifier",
                                src: "2245:3:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "2250:4:1",
                                nodeType: "YulLiteral",
                                src: "2250:4:1",
                                type: "",
                                value: "0x40",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nativeSrc: "2241:3:1",
                              nodeType: "YulIdentifier",
                              src: "2241:3:1",
                            },
                            nativeSrc: "2241:14:1",
                            nodeType: "YulFunctionCall",
                            src: "2241:14:1",
                          },
                          variableNames: [
                            {
                              name: "updatedPos",
                              nativeSrc: "2227:10:1",
                              nodeType: "YulIdentifier",
                              src: "2227:10:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "abi_encodeUpdatedPos_t_struct$_Player_$6_memory_ptr_to_t_struct$_Player_$6_memory_ptr",
                    nativeSrc: "1998:263:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value0",
                        nativeSrc: "2093:6:1",
                        nodeType: "YulTypedName",
                        src: "2093:6:1",
                        type: "",
                      },
                      {
                        name: "pos",
                        nativeSrc: "2101:3:1",
                        nodeType: "YulTypedName",
                        src: "2101:3:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "updatedPos",
                        nativeSrc: "2109:10:1",
                        nodeType: "YulTypedName",
                        src: "2109:10:1",
                        type: "",
                      },
                    ],
                    src: "1998:263:1",
                  },
                  {
                    body: {
                      nativeSrc: "2363:38:1",
                      nodeType: "YulBlock",
                      src: "2363:38:1",
                      statements: [
                        {
                          nativeSrc: "2373:22:1",
                          nodeType: "YulAssignment",
                          src: "2373:22:1",
                          value: {
                            arguments: [
                              {
                                name: "ptr",
                                nativeSrc: "2385:3:1",
                                nodeType: "YulIdentifier",
                                src: "2385:3:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "2390:4:1",
                                nodeType: "YulLiteral",
                                src: "2390:4:1",
                                type: "",
                                value: "0x20",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nativeSrc: "2381:3:1",
                              nodeType: "YulIdentifier",
                              src: "2381:3:1",
                            },
                            nativeSrc: "2381:14:1",
                            nodeType: "YulFunctionCall",
                            src: "2381:14:1",
                          },
                          variableNames: [
                            {
                              name: "next",
                              nativeSrc: "2373:4:1",
                              nodeType: "YulIdentifier",
                              src: "2373:4:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "array_nextElement_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr",
                    nativeSrc: "2267:134:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "ptr",
                        nativeSrc: "2350:3:1",
                        nodeType: "YulTypedName",
                        src: "2350:3:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "next",
                        nativeSrc: "2358:4:1",
                        nodeType: "YulTypedName",
                        src: "2358:4:1",
                        type: "",
                      },
                    ],
                    src: "2267:134:1",
                  },
                  {
                    body: {
                      nativeSrc: "2655:734:1",
                      nodeType: "YulBlock",
                      src: "2655:734:1",
                      statements: [
                        {
                          nativeSrc: "2665:89:1",
                          nodeType: "YulVariableDeclaration",
                          src: "2665:89:1",
                          value: {
                            arguments: [
                              {
                                name: "value",
                                nativeSrc: "2748:5:1",
                                nodeType: "YulIdentifier",
                                src: "2748:5:1",
                              },
                            ],
                            functionName: {
                              name: "array_length_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr",
                              nativeSrc: "2679:68:1",
                              nodeType: "YulIdentifier",
                              src: "2679:68:1",
                            },
                            nativeSrc: "2679:75:1",
                            nodeType: "YulFunctionCall",
                            src: "2679:75:1",
                          },
                          variables: [
                            {
                              name: "length",
                              nativeSrc: "2669:6:1",
                              nodeType: "YulTypedName",
                              src: "2669:6:1",
                              type: "",
                            },
                          ],
                        },
                        {
                          nativeSrc: "2763:114:1",
                          nodeType: "YulAssignment",
                          src: "2763:114:1",
                          value: {
                            arguments: [
                              {
                                name: "pos",
                                nativeSrc: "2865:3:1",
                                nodeType: "YulIdentifier",
                                src: "2865:3:1",
                              },
                              {
                                name: "length",
                                nativeSrc: "2870:6:1",
                                nodeType: "YulIdentifier",
                                src: "2870:6:1",
                              },
                            ],
                            functionName: {
                              name: "array_storeLengthForEncoding_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_fromStack",
                              nativeSrc: "2770:94:1",
                              nodeType: "YulIdentifier",
                              src: "2770:94:1",
                            },
                            nativeSrc: "2770:107:1",
                            nodeType: "YulFunctionCall",
                            src: "2770:107:1",
                          },
                          variableNames: [
                            {
                              name: "pos",
                              nativeSrc: "2763:3:1",
                              nodeType: "YulIdentifier",
                              src: "2763:3:1",
                            },
                          ],
                        },
                        {
                          nativeSrc: "2886:92:1",
                          nodeType: "YulVariableDeclaration",
                          src: "2886:92:1",
                          value: {
                            arguments: [
                              {
                                name: "value",
                                nativeSrc: "2972:5:1",
                                nodeType: "YulIdentifier",
                                src: "2972:5:1",
                              },
                            ],
                            functionName: {
                              name: "array_dataslot_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr",
                              nativeSrc: "2901:70:1",
                              nodeType: "YulIdentifier",
                              src: "2901:70:1",
                            },
                            nativeSrc: "2901:77:1",
                            nodeType: "YulFunctionCall",
                            src: "2901:77:1",
                          },
                          variables: [
                            {
                              name: "baseRef",
                              nativeSrc: "2890:7:1",
                              nodeType: "YulTypedName",
                              src: "2890:7:1",
                              type: "",
                            },
                          ],
                        },
                        {
                          nativeSrc: "2987:21:1",
                          nodeType: "YulVariableDeclaration",
                          src: "2987:21:1",
                          value: {
                            name: "baseRef",
                            nativeSrc: "3001:7:1",
                            nodeType: "YulIdentifier",
                            src: "3001:7:1",
                          },
                          variables: [
                            {
                              name: "srcPtr",
                              nativeSrc: "2991:6:1",
                              nodeType: "YulTypedName",
                              src: "2991:6:1",
                              type: "",
                            },
                          ],
                        },
                        {
                          body: {
                            nativeSrc: "3077:287:1",
                            nodeType: "YulBlock",
                            src: "3077:287:1",
                            statements: [
                              {
                                nativeSrc: "3091:34:1",
                                nodeType: "YulVariableDeclaration",
                                src: "3091:34:1",
                                value: {
                                  arguments: [
                                    {
                                      name: "srcPtr",
                                      nativeSrc: "3118:6:1",
                                      nodeType: "YulIdentifier",
                                      src: "3118:6:1",
                                    },
                                  ],
                                  functionName: {
                                    name: "mload",
                                    nativeSrc: "3112:5:1",
                                    nodeType: "YulIdentifier",
                                    src: "3112:5:1",
                                  },
                                  nativeSrc: "3112:13:1",
                                  nodeType: "YulFunctionCall",
                                  src: "3112:13:1",
                                },
                                variables: [
                                  {
                                    name: "elementValue0",
                                    nativeSrc: "3095:13:1",
                                    nodeType: "YulTypedName",
                                    src: "3095:13:1",
                                    type: "",
                                  },
                                ],
                              },
                              {
                                nativeSrc: "3138:112:1",
                                nodeType: "YulAssignment",
                                src: "3138:112:1",
                                value: {
                                  arguments: [
                                    {
                                      name: "elementValue0",
                                      nativeSrc: "3231:13:1",
                                      nodeType: "YulIdentifier",
                                      src: "3231:13:1",
                                    },
                                    {
                                      name: "pos",
                                      nativeSrc: "3246:3:1",
                                      nodeType: "YulIdentifier",
                                      src: "3246:3:1",
                                    },
                                  ],
                                  functionName: {
                                    name: "abi_encodeUpdatedPos_t_struct$_Player_$6_memory_ptr_to_t_struct$_Player_$6_memory_ptr",
                                    nativeSrc: "3145:85:1",
                                    nodeType: "YulIdentifier",
                                    src: "3145:85:1",
                                  },
                                  nativeSrc: "3145:105:1",
                                  nodeType: "YulFunctionCall",
                                  src: "3145:105:1",
                                },
                                variableNames: [
                                  {
                                    name: "pos",
                                    nativeSrc: "3138:3:1",
                                    nodeType: "YulIdentifier",
                                    src: "3138:3:1",
                                  },
                                ],
                              },
                              {
                                nativeSrc: "3263:91:1",
                                nodeType: "YulAssignment",
                                src: "3263:91:1",
                                value: {
                                  arguments: [
                                    {
                                      name: "srcPtr",
                                      nativeSrc: "3347:6:1",
                                      nodeType: "YulIdentifier",
                                      src: "3347:6:1",
                                    },
                                  ],
                                  functionName: {
                                    name: "array_nextElement_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr",
                                    nativeSrc: "3273:73:1",
                                    nodeType: "YulIdentifier",
                                    src: "3273:73:1",
                                  },
                                  nativeSrc: "3273:81:1",
                                  nodeType: "YulFunctionCall",
                                  src: "3273:81:1",
                                },
                                variableNames: [
                                  {
                                    name: "srcPtr",
                                    nativeSrc: "3263:6:1",
                                    nodeType: "YulIdentifier",
                                    src: "3263:6:1",
                                  },
                                ],
                              },
                            ],
                          },
                          condition: {
                            arguments: [
                              {
                                name: "i",
                                nativeSrc: "3039:1:1",
                                nodeType: "YulIdentifier",
                                src: "3039:1:1",
                              },
                              {
                                name: "length",
                                nativeSrc: "3042:6:1",
                                nodeType: "YulIdentifier",
                                src: "3042:6:1",
                              },
                            ],
                            functionName: {
                              name: "lt",
                              nativeSrc: "3036:2:1",
                              nodeType: "YulIdentifier",
                              src: "3036:2:1",
                            },
                            nativeSrc: "3036:13:1",
                            nodeType: "YulFunctionCall",
                            src: "3036:13:1",
                          },
                          nativeSrc: "3017:347:1",
                          nodeType: "YulForLoop",
                          post: {
                            nativeSrc: "3050:18:1",
                            nodeType: "YulBlock",
                            src: "3050:18:1",
                            statements: [
                              {
                                nativeSrc: "3052:14:1",
                                nodeType: "YulAssignment",
                                src: "3052:14:1",
                                value: {
                                  arguments: [
                                    {
                                      name: "i",
                                      nativeSrc: "3061:1:1",
                                      nodeType: "YulIdentifier",
                                      src: "3061:1:1",
                                    },
                                    {
                                      kind: "number",
                                      nativeSrc: "3064:1:1",
                                      nodeType: "YulLiteral",
                                      src: "3064:1:1",
                                      type: "",
                                      value: "1",
                                    },
                                  ],
                                  functionName: {
                                    name: "add",
                                    nativeSrc: "3057:3:1",
                                    nodeType: "YulIdentifier",
                                    src: "3057:3:1",
                                  },
                                  nativeSrc: "3057:9:1",
                                  nodeType: "YulFunctionCall",
                                  src: "3057:9:1",
                                },
                                variableNames: [
                                  {
                                    name: "i",
                                    nativeSrc: "3052:1:1",
                                    nodeType: "YulIdentifier",
                                    src: "3052:1:1",
                                  },
                                ],
                              },
                            ],
                          },
                          pre: {
                            nativeSrc: "3021:14:1",
                            nodeType: "YulBlock",
                            src: "3021:14:1",
                            statements: [
                              {
                                nativeSrc: "3023:10:1",
                                nodeType: "YulVariableDeclaration",
                                src: "3023:10:1",
                                value: {
                                  kind: "number",
                                  nativeSrc: "3032:1:1",
                                  nodeType: "YulLiteral",
                                  src: "3032:1:1",
                                  type: "",
                                  value: "0",
                                },
                                variables: [
                                  {
                                    name: "i",
                                    nativeSrc: "3027:1:1",
                                    nodeType: "YulTypedName",
                                    src: "3027:1:1",
                                    type: "",
                                  },
                                ],
                              },
                            ],
                          },
                          src: "3017:347:1",
                        },
                        {
                          nativeSrc: "3373:10:1",
                          nodeType: "YulAssignment",
                          src: "3373:10:1",
                          value: {
                            name: "pos",
                            nativeSrc: "3380:3:1",
                            nodeType: "YulIdentifier",
                            src: "3380:3:1",
                          },
                          variableNames: [
                            {
                              name: "end",
                              nativeSrc: "3373:3:1",
                              nodeType: "YulIdentifier",
                              src: "3373:3:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "abi_encode_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_fromStack",
                    nativeSrc: "2489:900:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "2634:5:1",
                        nodeType: "YulTypedName",
                        src: "2634:5:1",
                        type: "",
                      },
                      {
                        name: "pos",
                        nativeSrc: "2641:3:1",
                        nodeType: "YulTypedName",
                        src: "2641:3:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "end",
                        nativeSrc: "2650:3:1",
                        nodeType: "YulTypedName",
                        src: "2650:3:1",
                        type: "",
                      },
                    ],
                    src: "2489:900:1",
                  },
                  {
                    body: {
                      nativeSrc: "3585:267:1",
                      nodeType: "YulBlock",
                      src: "3585:267:1",
                      statements: [
                        {
                          nativeSrc: "3595:26:1",
                          nodeType: "YulAssignment",
                          src: "3595:26:1",
                          value: {
                            arguments: [
                              {
                                name: "headStart",
                                nativeSrc: "3607:9:1",
                                nodeType: "YulIdentifier",
                                src: "3607:9:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "3618:2:1",
                                nodeType: "YulLiteral",
                                src: "3618:2:1",
                                type: "",
                                value: "32",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nativeSrc: "3603:3:1",
                              nodeType: "YulIdentifier",
                              src: "3603:3:1",
                            },
                            nativeSrc: "3603:18:1",
                            nodeType: "YulFunctionCall",
                            src: "3603:18:1",
                          },
                          variableNames: [
                            {
                              name: "tail",
                              nativeSrc: "3595:4:1",
                              nodeType: "YulIdentifier",
                              src: "3595:4:1",
                            },
                          ],
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "headStart",
                                    nativeSrc: "3642:9:1",
                                    nodeType: "YulIdentifier",
                                    src: "3642:9:1",
                                  },
                                  {
                                    kind: "number",
                                    nativeSrc: "3653:1:1",
                                    nodeType: "YulLiteral",
                                    src: "3653:1:1",
                                    type: "",
                                    value: "0",
                                  },
                                ],
                                functionName: {
                                  name: "add",
                                  nativeSrc: "3638:3:1",
                                  nodeType: "YulIdentifier",
                                  src: "3638:3:1",
                                },
                                nativeSrc: "3638:17:1",
                                nodeType: "YulFunctionCall",
                                src: "3638:17:1",
                              },
                              {
                                arguments: [
                                  {
                                    name: "tail",
                                    nativeSrc: "3661:4:1",
                                    nodeType: "YulIdentifier",
                                    src: "3661:4:1",
                                  },
                                  {
                                    name: "headStart",
                                    nativeSrc: "3667:9:1",
                                    nodeType: "YulIdentifier",
                                    src: "3667:9:1",
                                  },
                                ],
                                functionName: {
                                  name: "sub",
                                  nativeSrc: "3657:3:1",
                                  nodeType: "YulIdentifier",
                                  src: "3657:3:1",
                                },
                                nativeSrc: "3657:20:1",
                                nodeType: "YulFunctionCall",
                                src: "3657:20:1",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nativeSrc: "3631:6:1",
                              nodeType: "YulIdentifier",
                              src: "3631:6:1",
                            },
                            nativeSrc: "3631:47:1",
                            nodeType: "YulFunctionCall",
                            src: "3631:47:1",
                          },
                          nativeSrc: "3631:47:1",
                          nodeType: "YulExpressionStatement",
                          src: "3631:47:1",
                        },
                        {
                          nativeSrc: "3687:158:1",
                          nodeType: "YulAssignment",
                          src: "3687:158:1",
                          value: {
                            arguments: [
                              {
                                name: "value0",
                                nativeSrc: "3831:6:1",
                                nodeType: "YulIdentifier",
                                src: "3831:6:1",
                              },
                              {
                                name: "tail",
                                nativeSrc: "3840:4:1",
                                nodeType: "YulIdentifier",
                                src: "3840:4:1",
                              },
                            ],
                            functionName: {
                              name: "abi_encode_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_fromStack",
                              nativeSrc: "3695:135:1",
                              nodeType: "YulIdentifier",
                              src: "3695:135:1",
                            },
                            nativeSrc: "3695:150:1",
                            nodeType: "YulFunctionCall",
                            src: "3695:150:1",
                          },
                          variableNames: [
                            {
                              name: "tail",
                              nativeSrc: "3687:4:1",
                              nodeType: "YulIdentifier",
                              src: "3687:4:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "abi_encode_tuple_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr__fromStack_reversed",
                    nativeSrc: "3395:457:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "headStart",
                        nativeSrc: "3557:9:1",
                        nodeType: "YulTypedName",
                        src: "3557:9:1",
                        type: "",
                      },
                      {
                        name: "value0",
                        nativeSrc: "3569:6:1",
                        nodeType: "YulTypedName",
                        src: "3569:6:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "tail",
                        nativeSrc: "3580:4:1",
                        nodeType: "YulTypedName",
                        src: "3580:4:1",
                        type: "",
                      },
                    ],
                    src: "3395:457:1",
                  },
                  {
                    body: {
                      nativeSrc: "3923:53:1",
                      nodeType: "YulBlock",
                      src: "3923:53:1",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                name: "pos",
                                nativeSrc: "3940:3:1",
                                nodeType: "YulIdentifier",
                                src: "3940:3:1",
                              },
                              {
                                arguments: [
                                  {
                                    name: "value",
                                    nativeSrc: "3963:5:1",
                                    nodeType: "YulIdentifier",
                                    src: "3963:5:1",
                                  },
                                ],
                                functionName: {
                                  name: "cleanup_t_address",
                                  nativeSrc: "3945:17:1",
                                  nodeType: "YulIdentifier",
                                  src: "3945:17:1",
                                },
                                nativeSrc: "3945:24:1",
                                nodeType: "YulFunctionCall",
                                src: "3945:24:1",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nativeSrc: "3933:6:1",
                              nodeType: "YulIdentifier",
                              src: "3933:6:1",
                            },
                            nativeSrc: "3933:37:1",
                            nodeType: "YulFunctionCall",
                            src: "3933:37:1",
                          },
                          nativeSrc: "3933:37:1",
                          nodeType: "YulExpressionStatement",
                          src: "3933:37:1",
                        },
                      ],
                    },
                    name: "abi_encode_t_address_to_t_address_fromStack",
                    nativeSrc: "3858:118:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "3911:5:1",
                        nodeType: "YulTypedName",
                        src: "3911:5:1",
                        type: "",
                      },
                      {
                        name: "pos",
                        nativeSrc: "3918:3:1",
                        nodeType: "YulTypedName",
                        src: "3918:3:1",
                        type: "",
                      },
                    ],
                    src: "3858:118:1",
                  },
                  {
                    body: {
                      nativeSrc: "4080:124:1",
                      nodeType: "YulBlock",
                      src: "4080:124:1",
                      statements: [
                        {
                          nativeSrc: "4090:26:1",
                          nodeType: "YulAssignment",
                          src: "4090:26:1",
                          value: {
                            arguments: [
                              {
                                name: "headStart",
                                nativeSrc: "4102:9:1",
                                nodeType: "YulIdentifier",
                                src: "4102:9:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "4113:2:1",
                                nodeType: "YulLiteral",
                                src: "4113:2:1",
                                type: "",
                                value: "32",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nativeSrc: "4098:3:1",
                              nodeType: "YulIdentifier",
                              src: "4098:3:1",
                            },
                            nativeSrc: "4098:18:1",
                            nodeType: "YulFunctionCall",
                            src: "4098:18:1",
                          },
                          variableNames: [
                            {
                              name: "tail",
                              nativeSrc: "4090:4:1",
                              nodeType: "YulIdentifier",
                              src: "4090:4:1",
                            },
                          ],
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                name: "value0",
                                nativeSrc: "4170:6:1",
                                nodeType: "YulIdentifier",
                                src: "4170:6:1",
                              },
                              {
                                arguments: [
                                  {
                                    name: "headStart",
                                    nativeSrc: "4183:9:1",
                                    nodeType: "YulIdentifier",
                                    src: "4183:9:1",
                                  },
                                  {
                                    kind: "number",
                                    nativeSrc: "4194:1:1",
                                    nodeType: "YulLiteral",
                                    src: "4194:1:1",
                                    type: "",
                                    value: "0",
                                  },
                                ],
                                functionName: {
                                  name: "add",
                                  nativeSrc: "4179:3:1",
                                  nodeType: "YulIdentifier",
                                  src: "4179:3:1",
                                },
                                nativeSrc: "4179:17:1",
                                nodeType: "YulFunctionCall",
                                src: "4179:17:1",
                              },
                            ],
                            functionName: {
                              name: "abi_encode_t_address_to_t_address_fromStack",
                              nativeSrc: "4126:43:1",
                              nodeType: "YulIdentifier",
                              src: "4126:43:1",
                            },
                            nativeSrc: "4126:71:1",
                            nodeType: "YulFunctionCall",
                            src: "4126:71:1",
                          },
                          nativeSrc: "4126:71:1",
                          nodeType: "YulExpressionStatement",
                          src: "4126:71:1",
                        },
                      ],
                    },
                    name: "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                    nativeSrc: "3982:222:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "headStart",
                        nativeSrc: "4052:9:1",
                        nodeType: "YulTypedName",
                        src: "4052:9:1",
                        type: "",
                      },
                      {
                        name: "value0",
                        nativeSrc: "4064:6:1",
                        nodeType: "YulTypedName",
                        src: "4064:6:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "tail",
                        nativeSrc: "4075:4:1",
                        nodeType: "YulTypedName",
                        src: "4075:4:1",
                        type: "",
                      },
                    ],
                    src: "3982:222:1",
                  },
                  {
                    body: {
                      nativeSrc: "4250:35:1",
                      nodeType: "YulBlock",
                      src: "4250:35:1",
                      statements: [
                        {
                          nativeSrc: "4260:19:1",
                          nodeType: "YulAssignment",
                          src: "4260:19:1",
                          value: {
                            arguments: [
                              {
                                kind: "number",
                                nativeSrc: "4276:2:1",
                                nodeType: "YulLiteral",
                                src: "4276:2:1",
                                type: "",
                                value: "64",
                              },
                            ],
                            functionName: {
                              name: "mload",
                              nativeSrc: "4270:5:1",
                              nodeType: "YulIdentifier",
                              src: "4270:5:1",
                            },
                            nativeSrc: "4270:9:1",
                            nodeType: "YulFunctionCall",
                            src: "4270:9:1",
                          },
                          variableNames: [
                            {
                              name: "memPtr",
                              nativeSrc: "4260:6:1",
                              nodeType: "YulIdentifier",
                              src: "4260:6:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "allocate_unbounded",
                    nativeSrc: "4210:75:1",
                    nodeType: "YulFunctionDefinition",
                    returnVariables: [
                      {
                        name: "memPtr",
                        nativeSrc: "4243:6:1",
                        nodeType: "YulTypedName",
                        src: "4243:6:1",
                        type: "",
                      },
                    ],
                    src: "4210:75:1",
                  },
                  {
                    body: {
                      nativeSrc: "4380:28:1",
                      nodeType: "YulBlock",
                      src: "4380:28:1",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nativeSrc: "4397:1:1",
                                nodeType: "YulLiteral",
                                src: "4397:1:1",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nativeSrc: "4400:1:1",
                                nodeType: "YulLiteral",
                                src: "4400:1:1",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nativeSrc: "4390:6:1",
                              nodeType: "YulIdentifier",
                              src: "4390:6:1",
                            },
                            nativeSrc: "4390:12:1",
                            nodeType: "YulFunctionCall",
                            src: "4390:12:1",
                          },
                          nativeSrc: "4390:12:1",
                          nodeType: "YulExpressionStatement",
                          src: "4390:12:1",
                        },
                      ],
                    },
                    name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                    nativeSrc: "4291:117:1",
                    nodeType: "YulFunctionDefinition",
                    src: "4291:117:1",
                  },
                  {
                    body: {
                      nativeSrc: "4503:28:1",
                      nodeType: "YulBlock",
                      src: "4503:28:1",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nativeSrc: "4520:1:1",
                                nodeType: "YulLiteral",
                                src: "4520:1:1",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nativeSrc: "4523:1:1",
                                nodeType: "YulLiteral",
                                src: "4523:1:1",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nativeSrc: "4513:6:1",
                              nodeType: "YulIdentifier",
                              src: "4513:6:1",
                            },
                            nativeSrc: "4513:12:1",
                            nodeType: "YulFunctionCall",
                            src: "4513:12:1",
                          },
                          nativeSrc: "4513:12:1",
                          nodeType: "YulExpressionStatement",
                          src: "4513:12:1",
                        },
                      ],
                    },
                    name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                    nativeSrc: "4414:117:1",
                    nodeType: "YulFunctionDefinition",
                    src: "4414:117:1",
                  },
                  {
                    body: {
                      nativeSrc: "4580:79:1",
                      nodeType: "YulBlock",
                      src: "4580:79:1",
                      statements: [
                        {
                          body: {
                            nativeSrc: "4637:16:1",
                            nodeType: "YulBlock",
                            src: "4637:16:1",
                            statements: [
                              {
                                expression: {
                                  arguments: [
                                    {
                                      kind: "number",
                                      nativeSrc: "4646:1:1",
                                      nodeType: "YulLiteral",
                                      src: "4646:1:1",
                                      type: "",
                                      value: "0",
                                    },
                                    {
                                      kind: "number",
                                      nativeSrc: "4649:1:1",
                                      nodeType: "YulLiteral",
                                      src: "4649:1:1",
                                      type: "",
                                      value: "0",
                                    },
                                  ],
                                  functionName: {
                                    name: "revert",
                                    nativeSrc: "4639:6:1",
                                    nodeType: "YulIdentifier",
                                    src: "4639:6:1",
                                  },
                                  nativeSrc: "4639:12:1",
                                  nodeType: "YulFunctionCall",
                                  src: "4639:12:1",
                                },
                                nativeSrc: "4639:12:1",
                                nodeType: "YulExpressionStatement",
                                src: "4639:12:1",
                              },
                            ],
                          },
                          condition: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "value",
                                    nativeSrc: "4603:5:1",
                                    nodeType: "YulIdentifier",
                                    src: "4603:5:1",
                                  },
                                  {
                                    arguments: [
                                      {
                                        name: "value",
                                        nativeSrc: "4628:5:1",
                                        nodeType: "YulIdentifier",
                                        src: "4628:5:1",
                                      },
                                    ],
                                    functionName: {
                                      name: "cleanup_t_uint256",
                                      nativeSrc: "4610:17:1",
                                      nodeType: "YulIdentifier",
                                      src: "4610:17:1",
                                    },
                                    nativeSrc: "4610:24:1",
                                    nodeType: "YulFunctionCall",
                                    src: "4610:24:1",
                                  },
                                ],
                                functionName: {
                                  name: "eq",
                                  nativeSrc: "4600:2:1",
                                  nodeType: "YulIdentifier",
                                  src: "4600:2:1",
                                },
                                nativeSrc: "4600:35:1",
                                nodeType: "YulFunctionCall",
                                src: "4600:35:1",
                              },
                            ],
                            functionName: {
                              name: "iszero",
                              nativeSrc: "4593:6:1",
                              nodeType: "YulIdentifier",
                              src: "4593:6:1",
                            },
                            nativeSrc: "4593:43:1",
                            nodeType: "YulFunctionCall",
                            src: "4593:43:1",
                          },
                          nativeSrc: "4590:63:1",
                          nodeType: "YulIf",
                          src: "4590:63:1",
                        },
                      ],
                    },
                    name: "validator_revert_t_uint256",
                    nativeSrc: "4537:122:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "4573:5:1",
                        nodeType: "YulTypedName",
                        src: "4573:5:1",
                        type: "",
                      },
                    ],
                    src: "4537:122:1",
                  },
                  {
                    body: {
                      nativeSrc: "4717:87:1",
                      nodeType: "YulBlock",
                      src: "4717:87:1",
                      statements: [
                        {
                          nativeSrc: "4727:29:1",
                          nodeType: "YulAssignment",
                          src: "4727:29:1",
                          value: {
                            arguments: [
                              {
                                name: "offset",
                                nativeSrc: "4749:6:1",
                                nodeType: "YulIdentifier",
                                src: "4749:6:1",
                              },
                            ],
                            functionName: {
                              name: "calldataload",
                              nativeSrc: "4736:12:1",
                              nodeType: "YulIdentifier",
                              src: "4736:12:1",
                            },
                            nativeSrc: "4736:20:1",
                            nodeType: "YulFunctionCall",
                            src: "4736:20:1",
                          },
                          variableNames: [
                            {
                              name: "value",
                              nativeSrc: "4727:5:1",
                              nodeType: "YulIdentifier",
                              src: "4727:5:1",
                            },
                          ],
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                name: "value",
                                nativeSrc: "4792:5:1",
                                nodeType: "YulIdentifier",
                                src: "4792:5:1",
                              },
                            ],
                            functionName: {
                              name: "validator_revert_t_uint256",
                              nativeSrc: "4765:26:1",
                              nodeType: "YulIdentifier",
                              src: "4765:26:1",
                            },
                            nativeSrc: "4765:33:1",
                            nodeType: "YulFunctionCall",
                            src: "4765:33:1",
                          },
                          nativeSrc: "4765:33:1",
                          nodeType: "YulExpressionStatement",
                          src: "4765:33:1",
                        },
                      ],
                    },
                    name: "abi_decode_t_uint256",
                    nativeSrc: "4665:139:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "offset",
                        nativeSrc: "4695:6:1",
                        nodeType: "YulTypedName",
                        src: "4695:6:1",
                        type: "",
                      },
                      {
                        name: "end",
                        nativeSrc: "4703:3:1",
                        nodeType: "YulTypedName",
                        src: "4703:3:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "value",
                        nativeSrc: "4711:5:1",
                        nodeType: "YulTypedName",
                        src: "4711:5:1",
                        type: "",
                      },
                    ],
                    src: "4665:139:1",
                  },
                  {
                    body: {
                      nativeSrc: "4876:263:1",
                      nodeType: "YulBlock",
                      src: "4876:263:1",
                      statements: [
                        {
                          body: {
                            nativeSrc: "4922:83:1",
                            nodeType: "YulBlock",
                            src: "4922:83:1",
                            statements: [
                              {
                                expression: {
                                  arguments: [],
                                  functionName: {
                                    name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                    nativeSrc: "4924:77:1",
                                    nodeType: "YulIdentifier",
                                    src: "4924:77:1",
                                  },
                                  nativeSrc: "4924:79:1",
                                  nodeType: "YulFunctionCall",
                                  src: "4924:79:1",
                                },
                                nativeSrc: "4924:79:1",
                                nodeType: "YulExpressionStatement",
                                src: "4924:79:1",
                              },
                            ],
                          },
                          condition: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "dataEnd",
                                    nativeSrc: "4897:7:1",
                                    nodeType: "YulIdentifier",
                                    src: "4897:7:1",
                                  },
                                  {
                                    name: "headStart",
                                    nativeSrc: "4906:9:1",
                                    nodeType: "YulIdentifier",
                                    src: "4906:9:1",
                                  },
                                ],
                                functionName: {
                                  name: "sub",
                                  nativeSrc: "4893:3:1",
                                  nodeType: "YulIdentifier",
                                  src: "4893:3:1",
                                },
                                nativeSrc: "4893:23:1",
                                nodeType: "YulFunctionCall",
                                src: "4893:23:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "4918:2:1",
                                nodeType: "YulLiteral",
                                src: "4918:2:1",
                                type: "",
                                value: "32",
                              },
                            ],
                            functionName: {
                              name: "slt",
                              nativeSrc: "4889:3:1",
                              nodeType: "YulIdentifier",
                              src: "4889:3:1",
                            },
                            nativeSrc: "4889:32:1",
                            nodeType: "YulFunctionCall",
                            src: "4889:32:1",
                          },
                          nativeSrc: "4886:119:1",
                          nodeType: "YulIf",
                          src: "4886:119:1",
                        },
                        {
                          nativeSrc: "5015:117:1",
                          nodeType: "YulBlock",
                          src: "5015:117:1",
                          statements: [
                            {
                              nativeSrc: "5030:15:1",
                              nodeType: "YulVariableDeclaration",
                              src: "5030:15:1",
                              value: {
                                kind: "number",
                                nativeSrc: "5044:1:1",
                                nodeType: "YulLiteral",
                                src: "5044:1:1",
                                type: "",
                                value: "0",
                              },
                              variables: [
                                {
                                  name: "offset",
                                  nativeSrc: "5034:6:1",
                                  nodeType: "YulTypedName",
                                  src: "5034:6:1",
                                  type: "",
                                },
                              ],
                            },
                            {
                              nativeSrc: "5059:63:1",
                              nodeType: "YulAssignment",
                              src: "5059:63:1",
                              value: {
                                arguments: [
                                  {
                                    arguments: [
                                      {
                                        name: "headStart",
                                        nativeSrc: "5094:9:1",
                                        nodeType: "YulIdentifier",
                                        src: "5094:9:1",
                                      },
                                      {
                                        name: "offset",
                                        nativeSrc: "5105:6:1",
                                        nodeType: "YulIdentifier",
                                        src: "5105:6:1",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nativeSrc: "5090:3:1",
                                      nodeType: "YulIdentifier",
                                      src: "5090:3:1",
                                    },
                                    nativeSrc: "5090:22:1",
                                    nodeType: "YulFunctionCall",
                                    src: "5090:22:1",
                                  },
                                  {
                                    name: "dataEnd",
                                    nativeSrc: "5114:7:1",
                                    nodeType: "YulIdentifier",
                                    src: "5114:7:1",
                                  },
                                ],
                                functionName: {
                                  name: "abi_decode_t_uint256",
                                  nativeSrc: "5069:20:1",
                                  nodeType: "YulIdentifier",
                                  src: "5069:20:1",
                                },
                                nativeSrc: "5069:53:1",
                                nodeType: "YulFunctionCall",
                                src: "5069:53:1",
                              },
                              variableNames: [
                                {
                                  name: "value0",
                                  nativeSrc: "5059:6:1",
                                  nodeType: "YulIdentifier",
                                  src: "5059:6:1",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    name: "abi_decode_tuple_t_uint256",
                    nativeSrc: "4810:329:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "headStart",
                        nativeSrc: "4846:9:1",
                        nodeType: "YulTypedName",
                        src: "4846:9:1",
                        type: "",
                      },
                      {
                        name: "dataEnd",
                        nativeSrc: "4857:7:1",
                        nodeType: "YulTypedName",
                        src: "4857:7:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "value0",
                        nativeSrc: "4869:6:1",
                        nodeType: "YulTypedName",
                        src: "4869:6:1",
                        type: "",
                      },
                    ],
                    src: "4810:329:1",
                  },
                  {
                    body: {
                      nativeSrc: "5188:79:1",
                      nodeType: "YulBlock",
                      src: "5188:79:1",
                      statements: [
                        {
                          body: {
                            nativeSrc: "5245:16:1",
                            nodeType: "YulBlock",
                            src: "5245:16:1",
                            statements: [
                              {
                                expression: {
                                  arguments: [
                                    {
                                      kind: "number",
                                      nativeSrc: "5254:1:1",
                                      nodeType: "YulLiteral",
                                      src: "5254:1:1",
                                      type: "",
                                      value: "0",
                                    },
                                    {
                                      kind: "number",
                                      nativeSrc: "5257:1:1",
                                      nodeType: "YulLiteral",
                                      src: "5257:1:1",
                                      type: "",
                                      value: "0",
                                    },
                                  ],
                                  functionName: {
                                    name: "revert",
                                    nativeSrc: "5247:6:1",
                                    nodeType: "YulIdentifier",
                                    src: "5247:6:1",
                                  },
                                  nativeSrc: "5247:12:1",
                                  nodeType: "YulFunctionCall",
                                  src: "5247:12:1",
                                },
                                nativeSrc: "5247:12:1",
                                nodeType: "YulExpressionStatement",
                                src: "5247:12:1",
                              },
                            ],
                          },
                          condition: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "value",
                                    nativeSrc: "5211:5:1",
                                    nodeType: "YulIdentifier",
                                    src: "5211:5:1",
                                  },
                                  {
                                    arguments: [
                                      {
                                        name: "value",
                                        nativeSrc: "5236:5:1",
                                        nodeType: "YulIdentifier",
                                        src: "5236:5:1",
                                      },
                                    ],
                                    functionName: {
                                      name: "cleanup_t_address",
                                      nativeSrc: "5218:17:1",
                                      nodeType: "YulIdentifier",
                                      src: "5218:17:1",
                                    },
                                    nativeSrc: "5218:24:1",
                                    nodeType: "YulFunctionCall",
                                    src: "5218:24:1",
                                  },
                                ],
                                functionName: {
                                  name: "eq",
                                  nativeSrc: "5208:2:1",
                                  nodeType: "YulIdentifier",
                                  src: "5208:2:1",
                                },
                                nativeSrc: "5208:35:1",
                                nodeType: "YulFunctionCall",
                                src: "5208:35:1",
                              },
                            ],
                            functionName: {
                              name: "iszero",
                              nativeSrc: "5201:6:1",
                              nodeType: "YulIdentifier",
                              src: "5201:6:1",
                            },
                            nativeSrc: "5201:43:1",
                            nodeType: "YulFunctionCall",
                            src: "5201:43:1",
                          },
                          nativeSrc: "5198:63:1",
                          nodeType: "YulIf",
                          src: "5198:63:1",
                        },
                      ],
                    },
                    name: "validator_revert_t_address",
                    nativeSrc: "5145:122:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "5181:5:1",
                        nodeType: "YulTypedName",
                        src: "5181:5:1",
                        type: "",
                      },
                    ],
                    src: "5145:122:1",
                  },
                  {
                    body: {
                      nativeSrc: "5325:87:1",
                      nodeType: "YulBlock",
                      src: "5325:87:1",
                      statements: [
                        {
                          nativeSrc: "5335:29:1",
                          nodeType: "YulAssignment",
                          src: "5335:29:1",
                          value: {
                            arguments: [
                              {
                                name: "offset",
                                nativeSrc: "5357:6:1",
                                nodeType: "YulIdentifier",
                                src: "5357:6:1",
                              },
                            ],
                            functionName: {
                              name: "calldataload",
                              nativeSrc: "5344:12:1",
                              nodeType: "YulIdentifier",
                              src: "5344:12:1",
                            },
                            nativeSrc: "5344:20:1",
                            nodeType: "YulFunctionCall",
                            src: "5344:20:1",
                          },
                          variableNames: [
                            {
                              name: "value",
                              nativeSrc: "5335:5:1",
                              nodeType: "YulIdentifier",
                              src: "5335:5:1",
                            },
                          ],
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                name: "value",
                                nativeSrc: "5400:5:1",
                                nodeType: "YulIdentifier",
                                src: "5400:5:1",
                              },
                            ],
                            functionName: {
                              name: "validator_revert_t_address",
                              nativeSrc: "5373:26:1",
                              nodeType: "YulIdentifier",
                              src: "5373:26:1",
                            },
                            nativeSrc: "5373:33:1",
                            nodeType: "YulFunctionCall",
                            src: "5373:33:1",
                          },
                          nativeSrc: "5373:33:1",
                          nodeType: "YulExpressionStatement",
                          src: "5373:33:1",
                        },
                      ],
                    },
                    name: "abi_decode_t_address",
                    nativeSrc: "5273:139:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "offset",
                        nativeSrc: "5303:6:1",
                        nodeType: "YulTypedName",
                        src: "5303:6:1",
                        type: "",
                      },
                      {
                        name: "end",
                        nativeSrc: "5311:3:1",
                        nodeType: "YulTypedName",
                        src: "5311:3:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "value",
                        nativeSrc: "5319:5:1",
                        nodeType: "YulTypedName",
                        src: "5319:5:1",
                        type: "",
                      },
                    ],
                    src: "5273:139:1",
                  },
                  {
                    body: {
                      nativeSrc: "5484:263:1",
                      nodeType: "YulBlock",
                      src: "5484:263:1",
                      statements: [
                        {
                          body: {
                            nativeSrc: "5530:83:1",
                            nodeType: "YulBlock",
                            src: "5530:83:1",
                            statements: [
                              {
                                expression: {
                                  arguments: [],
                                  functionName: {
                                    name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                    nativeSrc: "5532:77:1",
                                    nodeType: "YulIdentifier",
                                    src: "5532:77:1",
                                  },
                                  nativeSrc: "5532:79:1",
                                  nodeType: "YulFunctionCall",
                                  src: "5532:79:1",
                                },
                                nativeSrc: "5532:79:1",
                                nodeType: "YulExpressionStatement",
                                src: "5532:79:1",
                              },
                            ],
                          },
                          condition: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "dataEnd",
                                    nativeSrc: "5505:7:1",
                                    nodeType: "YulIdentifier",
                                    src: "5505:7:1",
                                  },
                                  {
                                    name: "headStart",
                                    nativeSrc: "5514:9:1",
                                    nodeType: "YulIdentifier",
                                    src: "5514:9:1",
                                  },
                                ],
                                functionName: {
                                  name: "sub",
                                  nativeSrc: "5501:3:1",
                                  nodeType: "YulIdentifier",
                                  src: "5501:3:1",
                                },
                                nativeSrc: "5501:23:1",
                                nodeType: "YulFunctionCall",
                                src: "5501:23:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "5526:2:1",
                                nodeType: "YulLiteral",
                                src: "5526:2:1",
                                type: "",
                                value: "32",
                              },
                            ],
                            functionName: {
                              name: "slt",
                              nativeSrc: "5497:3:1",
                              nodeType: "YulIdentifier",
                              src: "5497:3:1",
                            },
                            nativeSrc: "5497:32:1",
                            nodeType: "YulFunctionCall",
                            src: "5497:32:1",
                          },
                          nativeSrc: "5494:119:1",
                          nodeType: "YulIf",
                          src: "5494:119:1",
                        },
                        {
                          nativeSrc: "5623:117:1",
                          nodeType: "YulBlock",
                          src: "5623:117:1",
                          statements: [
                            {
                              nativeSrc: "5638:15:1",
                              nodeType: "YulVariableDeclaration",
                              src: "5638:15:1",
                              value: {
                                kind: "number",
                                nativeSrc: "5652:1:1",
                                nodeType: "YulLiteral",
                                src: "5652:1:1",
                                type: "",
                                value: "0",
                              },
                              variables: [
                                {
                                  name: "offset",
                                  nativeSrc: "5642:6:1",
                                  nodeType: "YulTypedName",
                                  src: "5642:6:1",
                                  type: "",
                                },
                              ],
                            },
                            {
                              nativeSrc: "5667:63:1",
                              nodeType: "YulAssignment",
                              src: "5667:63:1",
                              value: {
                                arguments: [
                                  {
                                    arguments: [
                                      {
                                        name: "headStart",
                                        nativeSrc: "5702:9:1",
                                        nodeType: "YulIdentifier",
                                        src: "5702:9:1",
                                      },
                                      {
                                        name: "offset",
                                        nativeSrc: "5713:6:1",
                                        nodeType: "YulIdentifier",
                                        src: "5713:6:1",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nativeSrc: "5698:3:1",
                                      nodeType: "YulIdentifier",
                                      src: "5698:3:1",
                                    },
                                    nativeSrc: "5698:22:1",
                                    nodeType: "YulFunctionCall",
                                    src: "5698:22:1",
                                  },
                                  {
                                    name: "dataEnd",
                                    nativeSrc: "5722:7:1",
                                    nodeType: "YulIdentifier",
                                    src: "5722:7:1",
                                  },
                                ],
                                functionName: {
                                  name: "abi_decode_t_address",
                                  nativeSrc: "5677:20:1",
                                  nodeType: "YulIdentifier",
                                  src: "5677:20:1",
                                },
                                nativeSrc: "5677:53:1",
                                nodeType: "YulFunctionCall",
                                src: "5677:53:1",
                              },
                              variableNames: [
                                {
                                  name: "value0",
                                  nativeSrc: "5667:6:1",
                                  nodeType: "YulIdentifier",
                                  src: "5667:6:1",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    name: "abi_decode_tuple_t_address",
                    nativeSrc: "5418:329:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "headStart",
                        nativeSrc: "5454:9:1",
                        nodeType: "YulTypedName",
                        src: "5454:9:1",
                        type: "",
                      },
                      {
                        name: "dataEnd",
                        nativeSrc: "5465:7:1",
                        nodeType: "YulTypedName",
                        src: "5465:7:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "value0",
                        nativeSrc: "5477:6:1",
                        nodeType: "YulTypedName",
                        src: "5477:6:1",
                        type: "",
                      },
                    ],
                    src: "5418:329:1",
                  },
                  {
                    body: {
                      nativeSrc: "5849:73:1",
                      nodeType: "YulBlock",
                      src: "5849:73:1",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                name: "pos",
                                nativeSrc: "5866:3:1",
                                nodeType: "YulIdentifier",
                                src: "5866:3:1",
                              },
                              {
                                name: "length",
                                nativeSrc: "5871:6:1",
                                nodeType: "YulIdentifier",
                                src: "5871:6:1",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nativeSrc: "5859:6:1",
                              nodeType: "YulIdentifier",
                              src: "5859:6:1",
                            },
                            nativeSrc: "5859:19:1",
                            nodeType: "YulFunctionCall",
                            src: "5859:19:1",
                          },
                          nativeSrc: "5859:19:1",
                          nodeType: "YulExpressionStatement",
                          src: "5859:19:1",
                        },
                        {
                          nativeSrc: "5887:29:1",
                          nodeType: "YulAssignment",
                          src: "5887:29:1",
                          value: {
                            arguments: [
                              {
                                name: "pos",
                                nativeSrc: "5906:3:1",
                                nodeType: "YulIdentifier",
                                src: "5906:3:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "5911:4:1",
                                nodeType: "YulLiteral",
                                src: "5911:4:1",
                                type: "",
                                value: "0x20",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nativeSrc: "5902:3:1",
                              nodeType: "YulIdentifier",
                              src: "5902:3:1",
                            },
                            nativeSrc: "5902:14:1",
                            nodeType: "YulFunctionCall",
                            src: "5902:14:1",
                          },
                          variableNames: [
                            {
                              name: "updated_pos",
                              nativeSrc: "5887:11:1",
                              nodeType: "YulIdentifier",
                              src: "5887:11:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                    nativeSrc: "5753:169:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "pos",
                        nativeSrc: "5821:3:1",
                        nodeType: "YulTypedName",
                        src: "5821:3:1",
                        type: "",
                      },
                      {
                        name: "length",
                        nativeSrc: "5826:6:1",
                        nodeType: "YulTypedName",
                        src: "5826:6:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "updated_pos",
                        nativeSrc: "5837:11:1",
                        nodeType: "YulTypedName",
                        src: "5837:11:1",
                        type: "",
                      },
                    ],
                    src: "5753:169:1",
                  },
                  {
                    body: {
                      nativeSrc: "6034:67:1",
                      nodeType: "YulBlock",
                      src: "6034:67:1",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "memPtr",
                                    nativeSrc: "6056:6:1",
                                    nodeType: "YulIdentifier",
                                    src: "6056:6:1",
                                  },
                                  {
                                    kind: "number",
                                    nativeSrc: "6064:1:1",
                                    nodeType: "YulLiteral",
                                    src: "6064:1:1",
                                    type: "",
                                    value: "0",
                                  },
                                ],
                                functionName: {
                                  name: "add",
                                  nativeSrc: "6052:3:1",
                                  nodeType: "YulIdentifier",
                                  src: "6052:3:1",
                                },
                                nativeSrc: "6052:14:1",
                                nodeType: "YulFunctionCall",
                                src: "6052:14:1",
                              },
                              {
                                hexValue:
                                  "43616c6c6572206973206e6f7420746865206f776e6572",
                                kind: "string",
                                nativeSrc: "6068:25:1",
                                nodeType: "YulLiteral",
                                src: "6068:25:1",
                                type: "",
                                value: "Caller is not the owner",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nativeSrc: "6045:6:1",
                              nodeType: "YulIdentifier",
                              src: "6045:6:1",
                            },
                            nativeSrc: "6045:49:1",
                            nodeType: "YulFunctionCall",
                            src: "6045:49:1",
                          },
                          nativeSrc: "6045:49:1",
                          nodeType: "YulExpressionStatement",
                          src: "6045:49:1",
                        },
                      ],
                    },
                    name: "store_literal_in_memory_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                    nativeSrc: "5928:173:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "memPtr",
                        nativeSrc: "6026:6:1",
                        nodeType: "YulTypedName",
                        src: "6026:6:1",
                        type: "",
                      },
                    ],
                    src: "5928:173:1",
                  },
                  {
                    body: {
                      nativeSrc: "6253:220:1",
                      nodeType: "YulBlock",
                      src: "6253:220:1",
                      statements: [
                        {
                          nativeSrc: "6263:74:1",
                          nodeType: "YulAssignment",
                          src: "6263:74:1",
                          value: {
                            arguments: [
                              {
                                name: "pos",
                                nativeSrc: "6329:3:1",
                                nodeType: "YulIdentifier",
                                src: "6329:3:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "6334:2:1",
                                nodeType: "YulLiteral",
                                src: "6334:2:1",
                                type: "",
                                value: "23",
                              },
                            ],
                            functionName: {
                              name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                              nativeSrc: "6270:58:1",
                              nodeType: "YulIdentifier",
                              src: "6270:58:1",
                            },
                            nativeSrc: "6270:67:1",
                            nodeType: "YulFunctionCall",
                            src: "6270:67:1",
                          },
                          variableNames: [
                            {
                              name: "pos",
                              nativeSrc: "6263:3:1",
                              nodeType: "YulIdentifier",
                              src: "6263:3:1",
                            },
                          ],
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                name: "pos",
                                nativeSrc: "6435:3:1",
                                nodeType: "YulIdentifier",
                                src: "6435:3:1",
                              },
                            ],
                            functionName: {
                              name: "store_literal_in_memory_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                              nativeSrc: "6346:88:1",
                              nodeType: "YulIdentifier",
                              src: "6346:88:1",
                            },
                            nativeSrc: "6346:93:1",
                            nodeType: "YulFunctionCall",
                            src: "6346:93:1",
                          },
                          nativeSrc: "6346:93:1",
                          nodeType: "YulExpressionStatement",
                          src: "6346:93:1",
                        },
                        {
                          nativeSrc: "6448:19:1",
                          nodeType: "YulAssignment",
                          src: "6448:19:1",
                          value: {
                            arguments: [
                              {
                                name: "pos",
                                nativeSrc: "6459:3:1",
                                nodeType: "YulIdentifier",
                                src: "6459:3:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "6464:2:1",
                                nodeType: "YulLiteral",
                                src: "6464:2:1",
                                type: "",
                                value: "32",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nativeSrc: "6455:3:1",
                              nodeType: "YulIdentifier",
                              src: "6455:3:1",
                            },
                            nativeSrc: "6455:12:1",
                            nodeType: "YulFunctionCall",
                            src: "6455:12:1",
                          },
                          variableNames: [
                            {
                              name: "end",
                              nativeSrc: "6448:3:1",
                              nodeType: "YulIdentifier",
                              src: "6448:3:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "abi_encode_t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33_to_t_string_memory_ptr_fromStack",
                    nativeSrc: "6107:366:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "pos",
                        nativeSrc: "6241:3:1",
                        nodeType: "YulTypedName",
                        src: "6241:3:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "end",
                        nativeSrc: "6249:3:1",
                        nodeType: "YulTypedName",
                        src: "6249:3:1",
                        type: "",
                      },
                    ],
                    src: "6107:366:1",
                  },
                  {
                    body: {
                      nativeSrc: "6650:248:1",
                      nodeType: "YulBlock",
                      src: "6650:248:1",
                      statements: [
                        {
                          nativeSrc: "6660:26:1",
                          nodeType: "YulAssignment",
                          src: "6660:26:1",
                          value: {
                            arguments: [
                              {
                                name: "headStart",
                                nativeSrc: "6672:9:1",
                                nodeType: "YulIdentifier",
                                src: "6672:9:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "6683:2:1",
                                nodeType: "YulLiteral",
                                src: "6683:2:1",
                                type: "",
                                value: "32",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nativeSrc: "6668:3:1",
                              nodeType: "YulIdentifier",
                              src: "6668:3:1",
                            },
                            nativeSrc: "6668:18:1",
                            nodeType: "YulFunctionCall",
                            src: "6668:18:1",
                          },
                          variableNames: [
                            {
                              name: "tail",
                              nativeSrc: "6660:4:1",
                              nodeType: "YulIdentifier",
                              src: "6660:4:1",
                            },
                          ],
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "headStart",
                                    nativeSrc: "6707:9:1",
                                    nodeType: "YulIdentifier",
                                    src: "6707:9:1",
                                  },
                                  {
                                    kind: "number",
                                    nativeSrc: "6718:1:1",
                                    nodeType: "YulLiteral",
                                    src: "6718:1:1",
                                    type: "",
                                    value: "0",
                                  },
                                ],
                                functionName: {
                                  name: "add",
                                  nativeSrc: "6703:3:1",
                                  nodeType: "YulIdentifier",
                                  src: "6703:3:1",
                                },
                                nativeSrc: "6703:17:1",
                                nodeType: "YulFunctionCall",
                                src: "6703:17:1",
                              },
                              {
                                arguments: [
                                  {
                                    name: "tail",
                                    nativeSrc: "6726:4:1",
                                    nodeType: "YulIdentifier",
                                    src: "6726:4:1",
                                  },
                                  {
                                    name: "headStart",
                                    nativeSrc: "6732:9:1",
                                    nodeType: "YulIdentifier",
                                    src: "6732:9:1",
                                  },
                                ],
                                functionName: {
                                  name: "sub",
                                  nativeSrc: "6722:3:1",
                                  nodeType: "YulIdentifier",
                                  src: "6722:3:1",
                                },
                                nativeSrc: "6722:20:1",
                                nodeType: "YulFunctionCall",
                                src: "6722:20:1",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nativeSrc: "6696:6:1",
                              nodeType: "YulIdentifier",
                              src: "6696:6:1",
                            },
                            nativeSrc: "6696:47:1",
                            nodeType: "YulFunctionCall",
                            src: "6696:47:1",
                          },
                          nativeSrc: "6696:47:1",
                          nodeType: "YulExpressionStatement",
                          src: "6696:47:1",
                        },
                        {
                          nativeSrc: "6752:139:1",
                          nodeType: "YulAssignment",
                          src: "6752:139:1",
                          value: {
                            arguments: [
                              {
                                name: "tail",
                                nativeSrc: "6886:4:1",
                                nodeType: "YulIdentifier",
                                src: "6886:4:1",
                              },
                            ],
                            functionName: {
                              name: "abi_encode_t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33_to_t_string_memory_ptr_fromStack",
                              nativeSrc: "6760:124:1",
                              nodeType: "YulIdentifier",
                              src: "6760:124:1",
                            },
                            nativeSrc: "6760:131:1",
                            nodeType: "YulFunctionCall",
                            src: "6760:131:1",
                          },
                          variableNames: [
                            {
                              name: "tail",
                              nativeSrc: "6752:4:1",
                              nodeType: "YulIdentifier",
                              src: "6752:4:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "abi_encode_tuple_t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33__to_t_string_memory_ptr__fromStack_reversed",
                    nativeSrc: "6479:419:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "headStart",
                        nativeSrc: "6630:9:1",
                        nodeType: "YulTypedName",
                        src: "6630:9:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "tail",
                        nativeSrc: "6645:4:1",
                        nodeType: "YulTypedName",
                        src: "6645:4:1",
                        type: "",
                      },
                    ],
                    src: "6479:419:1",
                  },
                  {
                    body: {
                      nativeSrc: "6932:152:1",
                      nodeType: "YulBlock",
                      src: "6932:152:1",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nativeSrc: "6949:1:1",
                                nodeType: "YulLiteral",
                                src: "6949:1:1",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nativeSrc: "6952:77:1",
                                nodeType: "YulLiteral",
                                src: "6952:77:1",
                                type: "",
                                value:
                                  "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nativeSrc: "6942:6:1",
                              nodeType: "YulIdentifier",
                              src: "6942:6:1",
                            },
                            nativeSrc: "6942:88:1",
                            nodeType: "YulFunctionCall",
                            src: "6942:88:1",
                          },
                          nativeSrc: "6942:88:1",
                          nodeType: "YulExpressionStatement",
                          src: "6942:88:1",
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nativeSrc: "7046:1:1",
                                nodeType: "YulLiteral",
                                src: "7046:1:1",
                                type: "",
                                value: "4",
                              },
                              {
                                kind: "number",
                                nativeSrc: "7049:4:1",
                                nodeType: "YulLiteral",
                                src: "7049:4:1",
                                type: "",
                                value: "0x32",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nativeSrc: "7039:6:1",
                              nodeType: "YulIdentifier",
                              src: "7039:6:1",
                            },
                            nativeSrc: "7039:15:1",
                            nodeType: "YulFunctionCall",
                            src: "7039:15:1",
                          },
                          nativeSrc: "7039:15:1",
                          nodeType: "YulExpressionStatement",
                          src: "7039:15:1",
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nativeSrc: "7070:1:1",
                                nodeType: "YulLiteral",
                                src: "7070:1:1",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nativeSrc: "7073:4:1",
                                nodeType: "YulLiteral",
                                src: "7073:4:1",
                                type: "",
                                value: "0x24",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nativeSrc: "7063:6:1",
                              nodeType: "YulIdentifier",
                              src: "7063:6:1",
                            },
                            nativeSrc: "7063:15:1",
                            nodeType: "YulFunctionCall",
                            src: "7063:15:1",
                          },
                          nativeSrc: "7063:15:1",
                          nodeType: "YulExpressionStatement",
                          src: "7063:15:1",
                        },
                      ],
                    },
                    name: "panic_error_0x32",
                    nativeSrc: "6904:180:1",
                    nodeType: "YulFunctionDefinition",
                    src: "6904:180:1",
                  },
                  {
                    body: {
                      nativeSrc: "7118:152:1",
                      nodeType: "YulBlock",
                      src: "7118:152:1",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nativeSrc: "7135:1:1",
                                nodeType: "YulLiteral",
                                src: "7135:1:1",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nativeSrc: "7138:77:1",
                                nodeType: "YulLiteral",
                                src: "7138:77:1",
                                type: "",
                                value:
                                  "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nativeSrc: "7128:6:1",
                              nodeType: "YulIdentifier",
                              src: "7128:6:1",
                            },
                            nativeSrc: "7128:88:1",
                            nodeType: "YulFunctionCall",
                            src: "7128:88:1",
                          },
                          nativeSrc: "7128:88:1",
                          nodeType: "YulExpressionStatement",
                          src: "7128:88:1",
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nativeSrc: "7232:1:1",
                                nodeType: "YulLiteral",
                                src: "7232:1:1",
                                type: "",
                                value: "4",
                              },
                              {
                                kind: "number",
                                nativeSrc: "7235:4:1",
                                nodeType: "YulLiteral",
                                src: "7235:4:1",
                                type: "",
                                value: "0x11",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nativeSrc: "7225:6:1",
                              nodeType: "YulIdentifier",
                              src: "7225:6:1",
                            },
                            nativeSrc: "7225:15:1",
                            nodeType: "YulFunctionCall",
                            src: "7225:15:1",
                          },
                          nativeSrc: "7225:15:1",
                          nodeType: "YulExpressionStatement",
                          src: "7225:15:1",
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nativeSrc: "7256:1:1",
                                nodeType: "YulLiteral",
                                src: "7256:1:1",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nativeSrc: "7259:4:1",
                                nodeType: "YulLiteral",
                                src: "7259:4:1",
                                type: "",
                                value: "0x24",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nativeSrc: "7249:6:1",
                              nodeType: "YulIdentifier",
                              src: "7249:6:1",
                            },
                            nativeSrc: "7249:15:1",
                            nodeType: "YulFunctionCall",
                            src: "7249:15:1",
                          },
                          nativeSrc: "7249:15:1",
                          nodeType: "YulExpressionStatement",
                          src: "7249:15:1",
                        },
                      ],
                    },
                    name: "panic_error_0x11",
                    nativeSrc: "7090:180:1",
                    nodeType: "YulFunctionDefinition",
                    src: "7090:180:1",
                  },
                  {
                    body: {
                      nativeSrc: "7321:149:1",
                      nodeType: "YulBlock",
                      src: "7321:149:1",
                      statements: [
                        {
                          nativeSrc: "7331:25:1",
                          nodeType: "YulAssignment",
                          src: "7331:25:1",
                          value: {
                            arguments: [
                              {
                                name: "x",
                                nativeSrc: "7354:1:1",
                                nodeType: "YulIdentifier",
                                src: "7354:1:1",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nativeSrc: "7336:17:1",
                              nodeType: "YulIdentifier",
                              src: "7336:17:1",
                            },
                            nativeSrc: "7336:20:1",
                            nodeType: "YulFunctionCall",
                            src: "7336:20:1",
                          },
                          variableNames: [
                            {
                              name: "x",
                              nativeSrc: "7331:1:1",
                              nodeType: "YulIdentifier",
                              src: "7331:1:1",
                            },
                          ],
                        },
                        {
                          nativeSrc: "7365:25:1",
                          nodeType: "YulAssignment",
                          src: "7365:25:1",
                          value: {
                            arguments: [
                              {
                                name: "y",
                                nativeSrc: "7388:1:1",
                                nodeType: "YulIdentifier",
                                src: "7388:1:1",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nativeSrc: "7370:17:1",
                              nodeType: "YulIdentifier",
                              src: "7370:17:1",
                            },
                            nativeSrc: "7370:20:1",
                            nodeType: "YulFunctionCall",
                            src: "7370:20:1",
                          },
                          variableNames: [
                            {
                              name: "y",
                              nativeSrc: "7365:1:1",
                              nodeType: "YulIdentifier",
                              src: "7365:1:1",
                            },
                          ],
                        },
                        {
                          nativeSrc: "7399:17:1",
                          nodeType: "YulAssignment",
                          src: "7399:17:1",
                          value: {
                            arguments: [
                              {
                                name: "x",
                                nativeSrc: "7411:1:1",
                                nodeType: "YulIdentifier",
                                src: "7411:1:1",
                              },
                              {
                                name: "y",
                                nativeSrc: "7414:1:1",
                                nodeType: "YulIdentifier",
                                src: "7414:1:1",
                              },
                            ],
                            functionName: {
                              name: "sub",
                              nativeSrc: "7407:3:1",
                              nodeType: "YulIdentifier",
                              src: "7407:3:1",
                            },
                            nativeSrc: "7407:9:1",
                            nodeType: "YulFunctionCall",
                            src: "7407:9:1",
                          },
                          variableNames: [
                            {
                              name: "diff",
                              nativeSrc: "7399:4:1",
                              nodeType: "YulIdentifier",
                              src: "7399:4:1",
                            },
                          ],
                        },
                        {
                          body: {
                            nativeSrc: "7441:22:1",
                            nodeType: "YulBlock",
                            src: "7441:22:1",
                            statements: [
                              {
                                expression: {
                                  arguments: [],
                                  functionName: {
                                    name: "panic_error_0x11",
                                    nativeSrc: "7443:16:1",
                                    nodeType: "YulIdentifier",
                                    src: "7443:16:1",
                                  },
                                  nativeSrc: "7443:18:1",
                                  nodeType: "YulFunctionCall",
                                  src: "7443:18:1",
                                },
                                nativeSrc: "7443:18:1",
                                nodeType: "YulExpressionStatement",
                                src: "7443:18:1",
                              },
                            ],
                          },
                          condition: {
                            arguments: [
                              {
                                name: "diff",
                                nativeSrc: "7432:4:1",
                                nodeType: "YulIdentifier",
                                src: "7432:4:1",
                              },
                              {
                                name: "x",
                                nativeSrc: "7438:1:1",
                                nodeType: "YulIdentifier",
                                src: "7438:1:1",
                              },
                            ],
                            functionName: {
                              name: "gt",
                              nativeSrc: "7429:2:1",
                              nodeType: "YulIdentifier",
                              src: "7429:2:1",
                            },
                            nativeSrc: "7429:11:1",
                            nodeType: "YulFunctionCall",
                            src: "7429:11:1",
                          },
                          nativeSrc: "7426:37:1",
                          nodeType: "YulIf",
                          src: "7426:37:1",
                        },
                      ],
                    },
                    name: "checked_sub_t_uint256",
                    nativeSrc: "7276:194:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "x",
                        nativeSrc: "7307:1:1",
                        nodeType: "YulTypedName",
                        src: "7307:1:1",
                        type: "",
                      },
                      {
                        name: "y",
                        nativeSrc: "7310:1:1",
                        nodeType: "YulTypedName",
                        src: "7310:1:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "diff",
                        nativeSrc: "7316:4:1",
                        nodeType: "YulTypedName",
                        src: "7316:4:1",
                        type: "",
                      },
                    ],
                    src: "7276:194:1",
                  },
                  {
                    body: {
                      nativeSrc: "7519:128:1",
                      nodeType: "YulBlock",
                      src: "7519:128:1",
                      statements: [
                        {
                          nativeSrc: "7529:33:1",
                          nodeType: "YulAssignment",
                          src: "7529:33:1",
                          value: {
                            arguments: [
                              {
                                name: "value",
                                nativeSrc: "7556:5:1",
                                nodeType: "YulIdentifier",
                                src: "7556:5:1",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nativeSrc: "7538:17:1",
                              nodeType: "YulIdentifier",
                              src: "7538:17:1",
                            },
                            nativeSrc: "7538:24:1",
                            nodeType: "YulFunctionCall",
                            src: "7538:24:1",
                          },
                          variableNames: [
                            {
                              name: "value",
                              nativeSrc: "7529:5:1",
                              nodeType: "YulIdentifier",
                              src: "7529:5:1",
                            },
                          ],
                        },
                        {
                          body: {
                            nativeSrc: "7590:22:1",
                            nodeType: "YulBlock",
                            src: "7590:22:1",
                            statements: [
                              {
                                expression: {
                                  arguments: [],
                                  functionName: {
                                    name: "panic_error_0x11",
                                    nativeSrc: "7592:16:1",
                                    nodeType: "YulIdentifier",
                                    src: "7592:16:1",
                                  },
                                  nativeSrc: "7592:18:1",
                                  nodeType: "YulFunctionCall",
                                  src: "7592:18:1",
                                },
                                nativeSrc: "7592:18:1",
                                nodeType: "YulExpressionStatement",
                                src: "7592:18:1",
                              },
                            ],
                          },
                          condition: {
                            arguments: [
                              {
                                name: "value",
                                nativeSrc: "7577:5:1",
                                nodeType: "YulIdentifier",
                                src: "7577:5:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "7584:4:1",
                                nodeType: "YulLiteral",
                                src: "7584:4:1",
                                type: "",
                                value: "0x00",
                              },
                            ],
                            functionName: {
                              name: "eq",
                              nativeSrc: "7574:2:1",
                              nodeType: "YulIdentifier",
                              src: "7574:2:1",
                            },
                            nativeSrc: "7574:15:1",
                            nodeType: "YulFunctionCall",
                            src: "7574:15:1",
                          },
                          nativeSrc: "7571:41:1",
                          nodeType: "YulIf",
                          src: "7571:41:1",
                        },
                        {
                          nativeSrc: "7621:20:1",
                          nodeType: "YulAssignment",
                          src: "7621:20:1",
                          value: {
                            arguments: [
                              {
                                name: "value",
                                nativeSrc: "7632:5:1",
                                nodeType: "YulIdentifier",
                                src: "7632:5:1",
                              },
                              {
                                kind: "number",
                                nativeSrc: "7639:1:1",
                                nodeType: "YulLiteral",
                                src: "7639:1:1",
                                type: "",
                                value: "1",
                              },
                            ],
                            functionName: {
                              name: "sub",
                              nativeSrc: "7628:3:1",
                              nodeType: "YulIdentifier",
                              src: "7628:3:1",
                            },
                            nativeSrc: "7628:13:1",
                            nodeType: "YulFunctionCall",
                            src: "7628:13:1",
                          },
                          variableNames: [
                            {
                              name: "ret",
                              nativeSrc: "7621:3:1",
                              nodeType: "YulIdentifier",
                              src: "7621:3:1",
                            },
                          ],
                        },
                      ],
                    },
                    name: "decrement_t_uint256",
                    nativeSrc: "7476:171:1",
                    nodeType: "YulFunctionDefinition",
                    parameters: [
                      {
                        name: "value",
                        nativeSrc: "7505:5:1",
                        nodeType: "YulTypedName",
                        src: "7505:5:1",
                        type: "",
                      },
                    ],
                    returnVariables: [
                      {
                        name: "ret",
                        nativeSrc: "7515:3:1",
                        nodeType: "YulTypedName",
                        src: "7515:3:1",
                        type: "",
                      },
                    ],
                    src: "7476:171:1",
                  },
                ],
              },
              contents:
                '{\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_length_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function array_dataslot_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr(ptr) -> data {\n        data := ptr\n\n        data := add(ptr, 0x20)\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    // struct RoadKillLeaderboard.Player -> struct RoadKillLeaderboard.Player\n    function abi_encode_t_struct$_Player_$6_memory_ptr_to_t_struct$_Player_$6_memory_ptr(value, pos)  {\n        let tail := add(pos, 0x40)\n\n        {\n            // playerAddress\n\n            let memberValue0 := mload(add(value, 0x00))\n            abi_encode_t_address_to_t_address(memberValue0, add(pos, 0x00))\n        }\n\n        {\n            // score\n\n            let memberValue0 := mload(add(value, 0x20))\n            abi_encode_t_uint256_to_t_uint256(memberValue0, add(pos, 0x20))\n        }\n\n    }\n\n    function abi_encodeUpdatedPos_t_struct$_Player_$6_memory_ptr_to_t_struct$_Player_$6_memory_ptr(value0, pos) -> updatedPos {\n        abi_encode_t_struct$_Player_$6_memory_ptr_to_t_struct$_Player_$6_memory_ptr(value0, pos)\n        updatedPos := add(pos, 0x40)\n    }\n\n    function array_nextElement_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr(ptr) -> next {\n        next := add(ptr, 0x20)\n    }\n\n    // struct RoadKillLeaderboard.Player[] -> struct RoadKillLeaderboard.Player[]\n    function abi_encode_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_fromStack(value, pos)  -> end  {\n        let length := array_length_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_fromStack(pos, length)\n        let baseRef := array_dataslot_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr(value)\n        let srcPtr := baseRef\n        for { let i := 0 } lt(i, length) { i := add(i, 1) }\n        {\n            let elementValue0 := mload(srcPtr)\n            pos := abi_encodeUpdatedPos_t_struct$_Player_$6_memory_ptr_to_t_struct$_Player_$6_memory_ptr(elementValue0, pos)\n            srcPtr := array_nextElement_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr(srcPtr)\n        }\n        end := pos\n    }\n\n    function abi_encode_tuple_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_to_t_array$_t_struct$_Player_$6_memory_ptr_$dyn_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33(memPtr) {\n\n        mstore(add(memPtr, 0), "Caller is not the owner")\n\n    }\n\n    function abi_encode_t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 23)\n        store_literal_in_memory_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        diff := sub(x, y)\n\n        if gt(diff, x) { panic_error_0x11() }\n\n    }\n\n    function decrement_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0x00) { panic_error_0x11() }\n        ret := sub(value, 1)\n    }\n\n}\n',
              id: 1,
              language: "Yul",
              name: "#utility.yul",
            },
          ],
          immutableReferences: {},
          linkReferences: {},
          object:
            "608060405234801561000f575f80fd5b5060043610610060575f3560e01c8063439ce76f146100645780636d763a6e146100825780638da5cb5b146100a0578063aff0b297146100be578063b0860ac2146100da578063d47875d0146100f6575b5f80fd5b61006c610126565b60405161007991906107f9565b60405180910390f35b61008a61012c565b6040516100979190610935565b60405180910390f35b6100a86101e6565b6040516100b59190610964565b60405180910390f35b6100d860048036038101906100d391906109ab565b610209565b005b6100f460048036038101906100ef91906109ab565b6102a6565b005b610110600480360381019061010b9190610a00565b61033d565b60405161011d91906107f9565b60405180910390f35b60035481565b60606002805480602002602001604051908101604052809291908181526020015f905b828210156101dd578382905f5260205f2090600202016040518060400160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820154815250508152602001906001019061014f565b50505050905090565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b8060015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055503373ffffffffffffffffffffffffffffffffffffffff167f20543b375b064b28d9e95eb06e1cba06204cfcc93bd4cb399a496db70fc102dc8260405161029191906107f9565b60405180910390a26102a33382610383565b50565b5f8054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610333576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032a90610a85565b60405180910390fd5b8060038190555050565b5f60015f8373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20549050919050565b5f805b600280549050811015610471578373ffffffffffffffffffffffffffffffffffffffff16600282815481106103be576103bd610aa3565b5b905f5260205f2090600202015f015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1603610464576002818154811061041b5761041a610aa3565b5b905f5260205f2090600202016001015483111561045f57826002828154811061044757610446610aa3565b5b905f5260205f20906002020160010181905550600191505b610471565b8080600101915050610386565b50801580156104865750600354600280549050105b1561053357600260405180604001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200184815250908060018154018082558091505060019003905f5260205f2090600202015f909190919091505f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101555050600190505b80156107dc575f600160028054905061054c9190610afd565b90505b5f81111561078c5760026001826105669190610afd565b8154811061057757610576610aa3565b5b905f5260205f209060020201600101546002828154811061059b5761059a610aa3565b5b905f5260205f209060020201600101541115610779575f60026001836105c19190610afd565b815481106105d2576105d1610aa3565b5b905f5260205f2090600202016040518060400160405290815f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201548152505090506002828154811061065d5761065c610aa3565b5b905f5260205f20906002020160026001846106789190610afd565b8154811061068957610688610aa3565b5b905f5260205f2090600202015f82015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018201548160010155905050806002838154811061071a57610719610aa3565b5b905f5260205f2090600202015f820151815f015f6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155905050505b808061078490610b30565b91505061054f565b508273ffffffffffffffffffffffffffffffffffffffff167f24e225604268d6416871b32db1be8e49f497caf8360393b31d71a34a4ce26693836040516107d391906107f9565b60405180910390a25b505050565b5f819050919050565b6107f3816107e1565b82525050565b5f60208201905061080c5f8301846107ea565b92915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6108648261083b565b9050919050565b6108748161085a565b82525050565b610883816107e1565b82525050565b604082015f82015161089d5f85018261086b565b5060208201516108b0602085018261087a565b50505050565b5f6108c18383610889565b60408301905092915050565b5f602082019050919050565b5f6108e382610812565b6108ed818561081c565b93506108f88361082c565b805f5b8381101561092857815161090f88826108b6565b975061091a836108cd565b9250506001810190506108fb565b5085935050505092915050565b5f6020820190508181035f83015261094d81846108d9565b905092915050565b61095e8161085a565b82525050565b5f6020820190506109775f830184610955565b92915050565b5f80fd5b61098a816107e1565b8114610994575f80fd5b50565b5f813590506109a581610981565b92915050565b5f602082840312156109c0576109bf61097d565b5b5f6109cd84828501610997565b91505092915050565b6109df8161085a565b81146109e9575f80fd5b50565b5f813590506109fa816109d6565b92915050565b5f60208284031215610a1557610a1461097d565b5b5f610a22848285016109ec565b91505092915050565b5f82825260208201905092915050565b7f43616c6c6572206973206e6f7420746865206f776e65720000000000000000005f82015250565b5f610a6f601783610a2b565b9150610a7a82610a3b565b602082019050919050565b5f6020820190508181035f830152610a9c81610a63565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610b07826107e1565b9150610b12836107e1565b9250828203905081811115610b2a57610b29610ad0565b5b92915050565b5f610b3a826107e1565b91505f8203610b4c57610b4b610ad0565b5b60018203905091905056fea2646970667358221220a2bb545439df9255540a086421bb3cdd276510d4dac5463cfe8e29b586dc022364736f6c63430008190033",
          opcodes:
            "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0xF JUMPI PUSH0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0x60 JUMPI PUSH0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x439CE76F EQ PUSH2 0x64 JUMPI DUP1 PUSH4 0x6D763A6E EQ PUSH2 0x82 JUMPI DUP1 PUSH4 0x8DA5CB5B EQ PUSH2 0xA0 JUMPI DUP1 PUSH4 0xAFF0B297 EQ PUSH2 0xBE JUMPI DUP1 PUSH4 0xB0860AC2 EQ PUSH2 0xDA JUMPI DUP1 PUSH4 0xD47875D0 EQ PUSH2 0xF6 JUMPI JUMPDEST PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x6C PUSH2 0x126 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x79 SWAP2 SWAP1 PUSH2 0x7F9 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x8A PUSH2 0x12C JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x97 SWAP2 SWAP1 PUSH2 0x935 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xA8 PUSH2 0x1E6 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xB5 SWAP2 SWAP1 PUSH2 0x964 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xD8 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xD3 SWAP2 SWAP1 PUSH2 0x9AB JUMP JUMPDEST PUSH2 0x209 JUMP JUMPDEST STOP JUMPDEST PUSH2 0xF4 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xEF SWAP2 SWAP1 PUSH2 0x9AB JUMP JUMPDEST PUSH2 0x2A6 JUMP JUMPDEST STOP JUMPDEST PUSH2 0x110 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x10B SWAP2 SWAP1 PUSH2 0xA00 JUMP JUMPDEST PUSH2 0x33D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x11D SWAP2 SWAP1 PUSH2 0x7F9 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x3 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x60 PUSH1 0x2 DUP1 SLOAD DUP1 PUSH1 0x20 MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 SWAP1 JUMPDEST DUP3 DUP3 LT ISZERO PUSH2 0x1DD JUMPI DUP4 DUP3 SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE SWAP1 DUP2 PUSH0 DUP3 ADD PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x1 DUP3 ADD SLOAD DUP2 MSTORE POP POP DUP2 MSTORE PUSH1 0x20 ADD SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x14F JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH0 DUP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 JUMP JUMPDEST DUP1 PUSH1 0x1 PUSH0 CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 DUP2 SWAP1 SSTORE POP CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x20543B375B064B28D9E95EB06E1CBA06204CFCC93BD4CB399A496DB70FC102DC DUP3 PUSH1 0x40 MLOAD PUSH2 0x291 SWAP2 SWAP1 PUSH2 0x7F9 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 PUSH2 0x2A3 CALLER DUP3 PUSH2 0x383 JUMP JUMPDEST POP JUMP JUMPDEST PUSH0 DUP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND CALLER PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND EQ PUSH2 0x333 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x32A SWAP1 PUSH2 0xA85 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x3 DUP2 SWAP1 SSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x1 PUSH0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH0 KECCAK256 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP1 JUMPDEST PUSH1 0x2 DUP1 SLOAD SWAP1 POP DUP2 LT ISZERO PUSH2 0x471 JUMPI DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x2 DUP3 DUP2 SLOAD DUP2 LT PUSH2 0x3BE JUMPI PUSH2 0x3BD PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH0 ADD PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x464 JUMPI PUSH1 0x2 DUP2 DUP2 SLOAD DUP2 LT PUSH2 0x41B JUMPI PUSH2 0x41A PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x1 ADD SLOAD DUP4 GT ISZERO PUSH2 0x45F JUMPI DUP3 PUSH1 0x2 DUP3 DUP2 SLOAD DUP2 LT PUSH2 0x447 JUMPI PUSH2 0x446 PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x1 ADD DUP2 SWAP1 SSTORE POP PUSH1 0x1 SWAP2 POP JUMPDEST PUSH2 0x471 JUMP JUMPDEST DUP1 DUP1 PUSH1 0x1 ADD SWAP2 POP POP PUSH2 0x386 JUMP JUMPDEST POP DUP1 ISZERO DUP1 ISZERO PUSH2 0x486 JUMPI POP PUSH1 0x3 SLOAD PUSH1 0x2 DUP1 SLOAD SWAP1 POP LT JUMPDEST ISZERO PUSH2 0x533 JUMPI PUSH1 0x2 PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD DUP5 DUP2 MSTORE POP SWAP1 DUP1 PUSH1 0x1 DUP2 SLOAD ADD DUP1 DUP3 SSTORE DUP1 SWAP2 POP POP PUSH1 0x1 SWAP1 SUB SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH0 SWAP1 SWAP2 SWAP1 SWAP2 SWAP1 SWAP2 POP PUSH0 DUP3 ADD MLOAD DUP2 PUSH0 ADD PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE POP POP PUSH1 0x1 SWAP1 POP JUMPDEST DUP1 ISZERO PUSH2 0x7DC JUMPI PUSH0 PUSH1 0x1 PUSH1 0x2 DUP1 SLOAD SWAP1 POP PUSH2 0x54C SWAP2 SWAP1 PUSH2 0xAFD JUMP JUMPDEST SWAP1 POP JUMPDEST PUSH0 DUP2 GT ISZERO PUSH2 0x78C JUMPI PUSH1 0x2 PUSH1 0x1 DUP3 PUSH2 0x566 SWAP2 SWAP1 PUSH2 0xAFD JUMP JUMPDEST DUP2 SLOAD DUP2 LT PUSH2 0x577 JUMPI PUSH2 0x576 PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x1 ADD SLOAD PUSH1 0x2 DUP3 DUP2 SLOAD DUP2 LT PUSH2 0x59B JUMPI PUSH2 0x59A PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x1 ADD SLOAD GT ISZERO PUSH2 0x779 JUMPI PUSH0 PUSH1 0x2 PUSH1 0x1 DUP4 PUSH2 0x5C1 SWAP2 SWAP1 PUSH2 0xAFD JUMP JUMPDEST DUP2 SLOAD DUP2 LT PUSH2 0x5D2 JUMPI PUSH2 0x5D1 PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE SWAP1 DUP2 PUSH0 DUP3 ADD PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x1 DUP3 ADD SLOAD DUP2 MSTORE POP POP SWAP1 POP PUSH1 0x2 DUP3 DUP2 SLOAD DUP2 LT PUSH2 0x65D JUMPI PUSH2 0x65C PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH1 0x2 PUSH1 0x1 DUP5 PUSH2 0x678 SWAP2 SWAP1 PUSH2 0xAFD JUMP JUMPDEST DUP2 SLOAD DUP2 LT PUSH2 0x689 JUMPI PUSH2 0x688 PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH0 DUP3 ADD PUSH0 SWAP1 SLOAD SWAP1 PUSH2 0x100 EXP SWAP1 DIV PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 PUSH0 ADD PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x1 DUP3 ADD SLOAD DUP2 PUSH1 0x1 ADD SSTORE SWAP1 POP POP DUP1 PUSH1 0x2 DUP4 DUP2 SLOAD DUP2 LT PUSH2 0x71A JUMPI PUSH2 0x719 PUSH2 0xAA3 JUMP JUMPDEST JUMPDEST SWAP1 PUSH0 MSTORE PUSH1 0x20 PUSH0 KECCAK256 SWAP1 PUSH1 0x2 MUL ADD PUSH0 DUP3 ADD MLOAD DUP2 PUSH0 ADD PUSH0 PUSH2 0x100 EXP DUP2 SLOAD DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF MUL NOT AND SWAP1 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND MUL OR SWAP1 SSTORE POP PUSH1 0x20 DUP3 ADD MLOAD DUP2 PUSH1 0x1 ADD SSTORE SWAP1 POP POP POP JUMPDEST DUP1 DUP1 PUSH2 0x784 SWAP1 PUSH2 0xB30 JUMP JUMPDEST SWAP2 POP POP PUSH2 0x54F JUMP JUMPDEST POP DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x24E225604268D6416871B32DB1BE8E49F497CAF8360393B31D71A34A4CE26693 DUP4 PUSH1 0x40 MLOAD PUSH2 0x7D3 SWAP2 SWAP1 PUSH2 0x7F9 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 JUMPDEST POP POP POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x7F3 DUP2 PUSH2 0x7E1 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x80C PUSH0 DUP4 ADD DUP5 PUSH2 0x7EA JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP2 SWAP1 POP PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x864 DUP3 PUSH2 0x83B JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0x874 DUP2 PUSH2 0x85A JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH2 0x883 DUP2 PUSH2 0x7E1 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x40 DUP3 ADD PUSH0 DUP3 ADD MLOAD PUSH2 0x89D PUSH0 DUP6 ADD DUP3 PUSH2 0x86B JUMP JUMPDEST POP PUSH1 0x20 DUP3 ADD MLOAD PUSH2 0x8B0 PUSH1 0x20 DUP6 ADD DUP3 PUSH2 0x87A JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH0 PUSH2 0x8C1 DUP4 DUP4 PUSH2 0x889 JUMP JUMPDEST PUSH1 0x40 DUP4 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH2 0x8E3 DUP3 PUSH2 0x812 JUMP JUMPDEST PUSH2 0x8ED DUP2 DUP6 PUSH2 0x81C JUMP JUMPDEST SWAP4 POP PUSH2 0x8F8 DUP4 PUSH2 0x82C JUMP JUMPDEST DUP1 PUSH0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x928 JUMPI DUP2 MLOAD PUSH2 0x90F DUP9 DUP3 PUSH2 0x8B6 JUMP JUMPDEST SWAP8 POP PUSH2 0x91A DUP4 PUSH2 0x8CD JUMP JUMPDEST SWAP3 POP POP PUSH1 0x1 DUP2 ADD SWAP1 POP PUSH2 0x8FB JUMP JUMPDEST POP DUP6 SWAP4 POP POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0x94D DUP2 DUP5 PUSH2 0x8D9 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x95E DUP2 PUSH2 0x85A JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0x977 PUSH0 DUP4 ADD DUP5 PUSH2 0x955 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP1 REVERT JUMPDEST PUSH2 0x98A DUP2 PUSH2 0x7E1 JUMP JUMPDEST DUP2 EQ PUSH2 0x994 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x9A5 DUP2 PUSH2 0x981 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0x9C0 JUMPI PUSH2 0x9BF PUSH2 0x97D JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0x9CD DUP5 DUP3 DUP6 ADD PUSH2 0x997 JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x9DF DUP2 PUSH2 0x85A JUMP JUMPDEST DUP2 EQ PUSH2 0x9E9 JUMPI PUSH0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0x9FA DUP2 PUSH2 0x9D6 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xA15 JUMPI PUSH2 0xA14 PUSH2 0x97D JUMP JUMPDEST JUMPDEST PUSH0 PUSH2 0xA22 DUP5 DUP3 DUP6 ADD PUSH2 0x9EC JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x43616C6C6572206973206E6F7420746865206F776E6572000000000000000000 PUSH0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH0 PUSH2 0xA6F PUSH1 0x17 DUP4 PUSH2 0xA2B JUMP JUMPDEST SWAP2 POP PUSH2 0xA7A DUP3 PUSH2 0xA3B JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH0 DUP4 ADD MSTORE PUSH2 0xA9C DUP2 PUSH2 0xA63 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH0 REVERT JUMPDEST PUSH0 PUSH2 0xB07 DUP3 PUSH2 0x7E1 JUMP JUMPDEST SWAP2 POP PUSH2 0xB12 DUP4 PUSH2 0x7E1 JUMP JUMPDEST SWAP3 POP DUP3 DUP3 SUB SWAP1 POP DUP2 DUP2 GT ISZERO PUSH2 0xB2A JUMPI PUSH2 0xB29 PUSH2 0xAD0 JUMP JUMPDEST JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH0 PUSH2 0xB3A DUP3 PUSH2 0x7E1 JUMP JUMPDEST SWAP2 POP PUSH0 DUP3 SUB PUSH2 0xB4C JUMPI PUSH2 0xB4B PUSH2 0xAD0 JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP3 SUB SWAP1 POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 LOG2 0xBB SLOAD SLOAD CODECOPY 0xDF SWAP3 SSTORE SLOAD EXP ADDMOD PUSH5 0x21BB3CDD27 PUSH6 0x10D4DAC5463C INVALID DUP15 0x29 0xB5 DUP7 0xDC MUL 0x23 PUSH5 0x736F6C6343 STOP ADDMOD NOT STOP CALLER ",
          sourceMap:
            "60:2231:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;293:30;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2068:101;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;182:20;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;707:183;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2177:111;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1954:106;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;293:30;;;;:::o;2068:101::-;2115:15;2150:11;2143:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2068:101;:::o;182:20::-;;;;;;;;;;;;:::o;707:183::-;783:6;762;:18;769:10;762:18;;;;;;;;;;;;;;;:27;;;;814:10;805:28;;;826:6;805:28;;;;;;:::i;:::-;;;;;;;;844:38;863:10;875:6;844:18;:38::i;:::-;707:183;:::o;2177:111::-;518:5;;;;;;;;;;504:19;;:10;:19;;;496:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;2272:8:::1;2254:15;:26;;;;2177:111:::0;:::o;1954:106::-;2010:7;2037:6;:15;2044:7;2037:15;;;;;;;;;;;;;;;;2030:22;;1954:106;;;:::o;898:1048::-;979:10;1013:9;1008:320;1032:11;:18;;;;1028:1;:22;1008:320;;;1108:7;1076:39;;:11;1088:1;1076:14;;;;;;;;:::i;:::-;;;;;;;;;;;;:28;;;;;;;;;;;;:39;;;1072:245;;1149:11;1161:1;1149:14;;;;;;;;:::i;:::-;;;;;;;;;;;;:20;;;1140:6;:29;1136:142;;;1217:6;1194:11;1206:1;1194:14;;;;;;;;:::i;:::-;;;;;;;;;;;;:20;;:29;;;;1254:4;1246:12;;1136:142;1296:5;;1072:245;1052:3;;;;;;;1008:320;;;;1345:5;1344:6;:46;;;;;1375:15;;1354:11;:18;;;;:36;1344:46;1340:171;;;1407:11;1424:47;;;;;;;;1447:7;1424:47;;;;;;1463:6;1424:47;;;1407:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1495:4;1487:12;;1340:171;1527:5;1523:416;;;1554:9;1587:1;1566:11;:18;;;;:22;;;;:::i;:::-;1554:34;;1549:324;1594:1;1590;:5;1549:324;;;1648:11;1664:1;1660;:5;;;;:::i;:::-;1648:18;;;;;;;;:::i;:::-;;;;;;;;;;;;:24;;;1625:11;1637:1;1625:14;;;;;;;;:::i;:::-;;;;;;;;;;;;:20;;;:47;1621:237;;;1697:18;1718:11;1734:1;1730;:5;;;;:::i;:::-;1718:18;;;;;;;;:::i;:::-;;;;;;;;;;;;1697:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1780:11;1792:1;1780:14;;;;;;;;:::i;:::-;;;;;;;;;;;;1759:11;1775:1;1771;:5;;;;:::i;:::-;1759:18;;;;;;;;:::i;:::-;;;;;;;;;;;;:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1834:4;1817:11;1829:1;1817:14;;;;;;;;:::i;:::-;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1674:184;1621:237;1597:3;;;;;:::i;:::-;;;;1549:324;;;;1911:7;1892:35;;;1920:6;1892:35;;;;;;:::i;:::-;;;;;;;;1523:416;968:978;898:1048;;:::o;7:77:1:-;44:7;73:5;62:16;;7:77;;;:::o;90:118::-;177:24;195:5;177:24;:::i;:::-;172:3;165:37;90:118;;:::o;214:222::-;307:4;345:2;334:9;330:18;322:26;;358:71;426:1;415:9;411:17;402:6;358:71;:::i;:::-;214:222;;;;:::o;442:135::-;530:6;564:5;558:12;548:22;;442:135;;;:::o;583:205::-;703:11;737:6;732:3;725:19;777:4;772:3;768:14;753:29;;583:205;;;;:::o;794:153::-;882:4;905:3;897:11;;935:4;930:3;926:14;918:22;;794:153;;;:::o;953:126::-;990:7;1030:42;1023:5;1019:54;1008:65;;953:126;;;:::o;1085:96::-;1122:7;1151:24;1169:5;1151:24;:::i;:::-;1140:35;;1085:96;;;:::o;1187:108::-;1264:24;1282:5;1264:24;:::i;:::-;1259:3;1252:37;1187:108;;:::o;1301:::-;1378:24;1396:5;1378:24;:::i;:::-;1373:3;1366:37;1301:108;;:::o;1493:499::-;1622:4;1617:3;1613:14;1718:4;1711:5;1707:16;1701:23;1737:63;1794:4;1789:3;1785:14;1771:12;1737:63;:::i;:::-;1637:173;1893:4;1886:5;1882:16;1876:23;1912:63;1969:4;1964:3;1960:14;1946:12;1912:63;:::i;:::-;1820:165;1591:401;1493:499;;:::o;1998:263::-;2109:10;2130:88;2214:3;2206:6;2130:88;:::i;:::-;2250:4;2245:3;2241:14;2227:28;;1998:263;;;;:::o;2267:134::-;2358:4;2390;2385:3;2381:14;2373:22;;2267:134;;;:::o;2489:900::-;2650:3;2679:75;2748:5;2679:75;:::i;:::-;2770:107;2870:6;2865:3;2770:107;:::i;:::-;2763:114;;2901:77;2972:5;2901:77;:::i;:::-;3001:7;3032:1;3017:347;3042:6;3039:1;3036:13;3017:347;;;3118:6;3112:13;3145:105;3246:3;3231:13;3145:105;:::i;:::-;3138:112;;3273:81;3347:6;3273:81;:::i;:::-;3263:91;;3077:287;3064:1;3061;3057:9;3052:14;;3017:347;;;3021:14;3380:3;3373:10;;2655:734;;;2489:900;;;;:::o;3395:457::-;3580:4;3618:2;3607:9;3603:18;3595:26;;3667:9;3661:4;3657:20;3653:1;3642:9;3638:17;3631:47;3695:150;3840:4;3831:6;3695:150;:::i;:::-;3687:158;;3395:457;;;;:::o;3858:118::-;3945:24;3963:5;3945:24;:::i;:::-;3940:3;3933:37;3858:118;;:::o;3982:222::-;4075:4;4113:2;4102:9;4098:18;4090:26;;4126:71;4194:1;4183:9;4179:17;4170:6;4126:71;:::i;:::-;3982:222;;;;:::o;4291:117::-;4400:1;4397;4390:12;4537:122;4610:24;4628:5;4610:24;:::i;:::-;4603:5;4600:35;4590:63;;4649:1;4646;4639:12;4590:63;4537:122;:::o;4665:139::-;4711:5;4749:6;4736:20;4727:29;;4765:33;4792:5;4765:33;:::i;:::-;4665:139;;;;:::o;4810:329::-;4869:6;4918:2;4906:9;4897:7;4893:23;4889:32;4886:119;;;4924:79;;:::i;:::-;4886:119;5044:1;5069:53;5114:7;5105:6;5094:9;5090:22;5069:53;:::i;:::-;5059:63;;5015:117;4810:329;;;;:::o;5145:122::-;5218:24;5236:5;5218:24;:::i;:::-;5211:5;5208:35;5198:63;;5257:1;5254;5247:12;5198:63;5145:122;:::o;5273:139::-;5319:5;5357:6;5344:20;5335:29;;5373:33;5400:5;5373:33;:::i;:::-;5273:139;;;;:::o;5418:329::-;5477:6;5526:2;5514:9;5505:7;5501:23;5497:32;5494:119;;;5532:79;;:::i;:::-;5494:119;5652:1;5677:53;5722:7;5713:6;5702:9;5698:22;5677:53;:::i;:::-;5667:63;;5623:117;5418:329;;;;:::o;5753:169::-;5837:11;5871:6;5866:3;5859:19;5911:4;5906:3;5902:14;5887:29;;5753:169;;;;:::o;5928:173::-;6068:25;6064:1;6056:6;6052:14;6045:49;5928:173;:::o;6107:366::-;6249:3;6270:67;6334:2;6329:3;6270:67;:::i;:::-;6263:74;;6346:93;6435:3;6346:93;:::i;:::-;6464:2;6459:3;6455:12;6448:19;;6107:366;;;:::o;6479:419::-;6645:4;6683:2;6672:9;6668:18;6660:26;;6732:9;6726:4;6722:20;6718:1;6707:9;6703:17;6696:47;6760:131;6886:4;6760:131;:::i;:::-;6752:139;;6479:419;;;:::o;6904:180::-;6952:77;6949:1;6942:88;7049:4;7046:1;7039:15;7073:4;7070:1;7063:15;7090:180;7138:77;7135:1;7128:88;7235:4;7232:1;7225:15;7259:4;7256:1;7249:15;7276:194;7316:4;7336:20;7354:1;7336:20;:::i;:::-;7331:25;;7370:20;7388:1;7370:20;:::i;:::-;7365:25;;7414:1;7411;7407:9;7399:17;;7438:1;7432:4;7429:11;7426:37;;;7443:18;;:::i;:::-;7426:37;7276:194;;;;:::o;7476:171::-;7515:3;7538:24;7556:5;7538:24;:::i;:::-;7529:33;;7584:4;7577:5;7574:15;7571:41;;7592:18;;:::i;:::-;7571:41;7639:1;7632:5;7628:13;7621:20;;7476:171;;;:::o",
        },
        gasEstimates: {
          creation: {
            codeDepositCost: "591400",
            executionCost: "infinite",
            totalCost: "infinite",
          },
          external: {
            "changeLeaderboardSize(uint256)": "24747",
            "getLeaderboard()": "infinite",
            "getScore(address)": "2917",
            "leaderboardSize()": "2403",
            "owner()": "2527",
            "submitScore(uint256)": "infinite",
          },
          internal: {
            "_updateLeaderboard(address,uint256)": "infinite",
          },
        },
        methodIdentifiers: {
          "changeLeaderboardSize(uint256)": "b0860ac2",
          "getLeaderboard()": "6d763a6e",
          "getScore(address)": "d47875d0",
          "leaderboardSize()": "439ce76f",
          "owner()": "8da5cb5b",
          "submitScore(uint256)": "aff0b297",
        },
      },
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_leaderboardSize",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "player",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "score",
              type: "uint256",
            },
          ],
          name: "LeaderboardUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "player",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "score",
              type: "uint256",
            },
          ],
          name: "NewScore",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_newSize",
              type: "uint256",
            },
          ],
          name: "changeLeaderboardSize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "getLeaderboard",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "playerAddress",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "score",
                  type: "uint256",
                },
              ],
              internalType: "struct RoadKillLeaderboard.Player[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_player",
              type: "address",
            },
          ],
          name: "getScore",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "leaderboardSize",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_score",
              type: "uint256",
            },
          ],
          name: "submitScore",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  ];

  const leaderboardContract = new web3.eth.Contract(
    leaderboardContractABI,
    leaderboardContractAddress
  );

  try {
    await leaderboardContract.methods
      .updateScore(account, score)
      .send({ from: account });
    console.log("Score pushed to leaderboard");
  } catch (error) {
    console.error("Error pushing score to leaderboard:", error);
  }
}

const SkinsScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function SkinsScene() {
    Phaser.Scene.call(this, { key: "SkinsScene" });
  },
  preload: preloadSkins,
  create: createSkins,
});

function preloadSkins() {
  this.load.image("car_red", "assets/car_red_1.png");
  this.load.image("car_blue", "assets/car_blue_1.png");
  this.load.image("car_green", "assets/car_green_1.png");
}

function createSkins() {
  this.sound.stopAll(); // Stop all sounds when switching scenes
  this.add
    .image(window.innerWidth / 2, window.innerHeight / 2, "menuBackground")
    .setDisplaySize(window.innerWidth, window.innerHeight);

  let carSkins = ["car_red", "car_blue", "car_green"];
  let selectedSkin = localStorage.getItem("selectedSkin") || "car_red";

  carSkins.forEach((skin, index) => {
    let skinButton = this.add
      .image(
        window.innerWidth / 2,
        window.innerHeight / 2 - 100 + index * 100,
        skin
      )
      .setInteractive()
      .setScale(0.5);

    skinButton.on("pointerdown", () => {
      localStorage.setItem("selectedSkin", skin);
      selectedSkin = skin;
      this.scene.start("MenuScene");
    });
  });

  let backButton = this.add
    .text(window.innerWidth / 2, window.innerHeight - 100, "Back", {
      fontSize: "32px",
      fill: "#FFFFFF",
      fontFamily: "'Creepster', cursive",
    })
    .setOrigin(0.5)
    .setInteractive();

  backButton.on("pointerdown", () => {
    this.scene.start("MenuScene");
  });

  this.sound.add("mainBackgroundSound", { loop: true }).play();
}

const GameScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function GameScene() {
    Phaser.Scene.call(this, { key: "GameScene" });
  },
  preload: preload,
  create: create,
  update: update,
});

let config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [MenuScene, GameScene],
  parent: "game-container",
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

let game = new Phaser.Game(config);

let player;
let cursors;
let obstacles;
let fuels;
let scores;
let health = 100; // Start health at 100
let fuelLevel = 10; // Fuel level starts at 100
let healthText;
let fuelText;
let score = 0;
let scoreText;
let road;
let roadWidth = 400; // Set the road width
let gameSpeed = 2; // Initial game speed
let dirtEmitter;
let level = 1; // Start at level 1
let maxLevel = localStorage.getItem("maxLevel") || 0; // Retrieve max level from local storage or set to 0 if not available

function preloadMenu() {
  this.load.image("menuBackground", "assets/menu_background.jpg");
  this.load.audio("mainBackgroundSound", "assets/main-background-sound.mp3");
}

function createMenu() {
  this.sound.stopAll(); // Stop all sounds when switching scenes
  this.add
    .image(window.innerWidth / 2, window.innerHeight / 2, "menuBackground")
    .setDisplaySize(window.innerWidth, window.innerHeight);

  let connectButton = this.add
    .text(
      window.innerWidth / 2,
      window.innerHeight / 2 - 100,
      "Connect Wallet",
      {
        fontSize: "64px",
        fill: "#FFFFFF",
        fontFamily: "'Creepster', cursive",
      }
    )
    .setOrigin(0.5)
    .setInteractive();

  let startButton = this.add
    .text(window.innerWidth / 2, window.innerHeight / 2, "Start Game", {
      fontSize: "64px",
      fill: "#FFFFFF", // Change color to white
      fontFamily: "'Creepster', cursive",
    })
    .setOrigin(0.5)
    .setInteractive();

  let skinsButton = this.add
    .text(window.innerWidth / 2, window.innerHeight / 2 + 100, "Skins", {
      fontSize: "64px", // Change font size to match "Start Game" button
      fill: "#FFFFFF",
      fontFamily: "'Creepster', cursive",
    })
    .setOrigin(0.5)
    .setInteractive();

  connectButton.on("pointerdown", async () => {
    await connectWallet();
    this.sound.add("mainBackgroundSound", { loop: true }).play();
  });

  skinsButton.on("pointerdown", () => {
    this.scene.start("SkinsScene");
  });

  startButton.on("pointerdown", () => {
    if (account) {
      this.scene.start("GameScene");
      this.sound.stopAll(); // Stop all sounds when switching scenes
    } else {
      alert("Please connect your wallet first.");
    }
  });

  // Display max level below the "Skins" button
  this.add
    .text(
      window.innerWidth / 2,
      window.innerHeight / 2 + 200,
      `Max Level: ${maxLevel}`,
      {
        fontSize: "32px",
        fill: "#FFFFFF",
        fontFamily: "'Creepster', cursive",
      }
    )
    .setOrigin(0.5);

  this.sound.add("mainBackgroundSound", { loop: true }).play();
}

function preload() {
  this.load.image("road", "assets/winter_road.png");
  this.load.image("car_red", "assets/car_red_1.png");
  this.load.image("obstacle", "assets/oil.png");
  this.load.image("fuel", "assets/fuel.png"); // Separate asset for fuel
  this.load.image("score", "assets/character_black_green.png"); // Separate asset for score
  this.load.image("blood", "assets/blood.png"); // Add blood particle image
  this.load.image("police", "assets/police.svg"); // Load the police car SVG
  this.load.image("sideBackground", "assets/side_background.jpg"); // Add side background image
  this.load.audio("normalGameSound", "assets/normal-game-sound.mp3");
  this.load.audio("gasFuelSound", "assets/gas-fuel.mp3");
  this.load.audio("killscore", "assets/kill.mp3");
}

function startGame() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("game-over").style.display = "none";
  health = 100;
  fuelLevel = 10;
  score = 0;
  gameSpeed = 2;
  game.scene.start("default");
}

function update() {
  if (!this.scene.isPaused()) {
    scrollBackground();
    increaseGameSpeed();
    handlePlayerMovement();
  }
}

function scrollBackground() {
  road.tilePositionY -= gameSpeed;
}

function increaseGameSpeed() {
  gameSpeed += 0.001;
}

function handlePlayerMovement() {
  if (cursors.left.isDown && player.x > window.innerWidth / 2 - roadWidth / 2) {
    player.setVelocityX(-200);
    startDirtEmitters();
  } else if (
    cursors.right.isDown &&
    player.x < window.innerWidth / 2 + roadWidth / 2
  ) {
    player.setVelocityX(200);
    startDirtEmitters();
  } else {
    player.setVelocityX(0);
    stopDirtEmitters();
  }

  if (cursors.up.isDown) {
    player.setVelocityY(-200);
  } else if (cursors.down.isDown) {
    player.setVelocityY(200);
  } else {
    player.setVelocityY(0);
  }
}

function startDirtEmitters() {
  dirtEmitterLeft.setPosition(player.x - 20, player.y + 60);
  dirtEmitterRight.setPosition(player.x + 20, player.y + 60);
  dirtEmitterLeft.start();
  dirtEmitterRight.start();
}

function stopDirtEmitters() {
  dirtEmitterLeft.stop();
  dirtEmitterRight.stop();
}

function hitObstacle(player, obstacle) {
  const isPolice = obstacle.getData("isPolice");

  if (isPolice === true) {
    endGame.call(this, "You are arrested!");
  } else {
    health -= 10;
    healthText.setText("Health: " + health);

    if (health <= 0) {
      endGame.call(this, "Game Over! You lost all your health.");
    }
  }

  obstacle.destroy();
}

function levelUp() {
  level += 1;
  levelText.setText("Level: " + level);
  gameSpeed += 1; // Increase game speed with level

  // Store the max level reached
  if (level > maxLevel) {
    maxLevel = level;
    localStorage.setItem("maxLevel", maxLevel);
  }

  this.time.addEvent({
    delay: 2000,
    callback: () => {
      let levelUpText = this.add
        .text(window.innerWidth / 2, window.innerHeight / 2, "Level Up!", {
          fontSize: "64px",
          fill: "#ff0000",
          fontFamily: "'Creepster', cursive",
          align: "center",
        })
        .setOrigin(0.5);

      this.time.addEvent({
        delay: 1000,
        callback: () => {
          levelUpText.destroy();
        },
        callbackScope: this,
        loop: false,
      });
    },
    callbackScope: this,
    loop: false,
  });
}

function collectFuel(player, fuel) {
  fuel.destroy();
  fuelLevel = Math.min(fuelLevel + 6, 100); // Increase fuel level but cap at 100
  fuelText.setText("Fuel: " + fuelLevel);
  this.sound.play("gasFuelSound");
}

function collectScore(player, scoreItem) {
  scoreItem.destroy();
  score += 1; // Increment score by 1 year
  scoreText.setText("Years: " + score);

  // Check for level-up condition
  if (score % 5 === 0) {
    levelUp.call(this);
  }

  this.sound.play("killscore");

  // Add blood splash animation
  let bloodEmitter = this.add.particles("blood").createEmitter({
    x: scoreItem.x,
    y: scoreItem.y,
    speed: { min: -400, max: 400 },
    angle: { min: 0, max: 360 },
    scale: { start: 0.3, end: 0 }, // Reduce the size of the particles
    blendMode: "ADD",
    lifespan: 300, // Shorten the lifespan for quicker particles
    quantity: 10,
    tint: 0xff0000, // Set the color to red
  });
  this.time.addEvent({
    delay: 300,
    callback: () => bloodEmitter.stop(),
  });
}

function decreaseFuel() {
  fuelLevel -= 2; // Decrease fuel level
  fuelText.setText("Fuel: " + fuelLevel);

  // End game if fuel runs out
  if (fuelLevel <= 0) {
    endGame.call(this, "Game Over! You ran out of fuel.");
  }
}

function spawnObstacle() {
  let x = Phaser.Math.Between(
    window.innerWidth / 2 - roadWidth / 2 + 50,
    window.innerWidth / 2 + roadWidth / 2 - 50
  );
  let obstacleType = Phaser.Math.Between(0, 1); // Randomly decide between regular obstacle and police car
  let obstacle;

  if (obstacleType === 0) {
    obstacle = obstacles.create(x, 0, "obstacle");
  } else {
    obstacle = obstacles.create(x, 0, "police");
    obstacle.setScale(0.2); // Scale down the police car to 10% of its original size
    obstacle.setRotation(Phaser.Math.DegToRad(180)); // Rotate the car by 180 degrees

    obstacle.setData("isPolice", true); // Mark this as a police car
    console.log("Police car spawned:", obstacle.getData("isPolice"));

    let policeDirtEmitterLeft = this.add.particles("dirt").createEmitter({
      speed: { min: -50, max: 50 },
      angle: { min: 160, max: 200 },
      scale: { start: 0.2, end: 0 },
      blendMode: "ADD",
      lifespan: 300,
      quantity: 5,
      on: false,
    });

    // Add right dirt particle emitter for the police car
    let policeDirtEmitterRight = this.add.particles("dirt").createEmitter({
      speed: { min: -50, max: 50 },
      angle: { min: 160, max: 200 },
      scale: { start: 0.2, end: 0 },
      blendMode: "ADD",
      lifespan: 300,
      quantity: 5,
      on: false,
    });

    // Set the position of the dirt emitters to the back of the police car
    policeDirtEmitterLeft.startFollow(obstacle, -20, -50);
    policeDirtEmitterRight.startFollow(obstacle, 20, -50);
    policeDirtEmitterLeft.start();
    policeDirtEmitterRight.start();
  }

  obstacle.setVelocityY((200 * gameSpeed) / 2); // Adjust the speed of obstacles
}

function spawnFuel() {
  let x = Phaser.Math.Between(
    window.innerWidth / 2 - roadWidth / 2 + 50,
    window.innerWidth / 2 + roadWidth / 2 - 50
  );
  let fuel = fuels.create(x, 0, "fuel");
  fuel.setVelocityY((200 * gameSpeed) / 2); // Adjust the speed of fuels
  fuel.setScale(0.1); // Adjust the scale as needed
}

function spawnScore() {
  let x = Phaser.Math.Between(
    window.innerWidth / 2 - roadWidth / 2 + 50,
    window.innerWidth / 2 + roadWidth / 2 - 50
  );
  let scoreItem = scores.create(x, 0, "score");
  scoreItem.setVelocityY((200 * gameSpeed) / 2); // Adjust the speed of score items
}

function create() {
  sideBackgroundLeft = this.add.tileSprite(
    window.innerWidth / 2 - roadWidth / 2 - 200, // Adjust position for left side
    window.innerHeight / 2,
    400,
    window.innerHeight,
    "sideBackground"
  );

  sideBackgroundRight = this.add.tileSprite(
    window.innerWidth / 2 + roadWidth / 2 + 200, // Adjust position for right side
    window.innerHeight / 2,
    400,
    window.innerHeight,
    "sideBackground"
  );

  // Add road background
  road = this.add.tileSprite(
    window.innerWidth / 2,
    window.innerHeight / 2,
    roadWidth,
    window.innerHeight,
    "road"
  );

  // Add player car
  player = this.physics.add.image(
    window.innerWidth / 2,
    window.innerHeight - 100,
    "car_red"
  );
  player.setCollideWorldBounds(true);

  // Initialize keyboard input
  cursors = this.input.keyboard.createCursorKeys();

  // Add obstacles, fuels, and scores
  obstacles = this.physics.add.group();
  fuels = this.physics.add.group();
  scores = this.physics.add.group();

  // Add collisions
  this.physics.add.collider(player, obstacles, hitObstacle, null, this);
  this.physics.add.overlap(player, fuels, collectFuel, null, this);
  this.physics.add.overlap(player, scores, collectScore, null, this);

  // Add UI elements
  healthText = this.add.text(16, 16, "Health: 100", {
    fontSize: "32px",
    fill: "#00ff00", // Green color
    fontFamily: "'Creepster', cursive",
  });

  fuelText = this.add.text(16, 50, "Fuel: 100", {
    fontSize: "32px",
    fill: "#FFFFFF", // White color
    fontFamily: "'Creepster', cursive",
  });

  scoreText = this.add.text(16, 84, "Jail Sentence: Good Citizen", {
    fontSize: "32px",
    fill: "#ff0000", // Red color
    fontFamily: "'Creepster', cursive",
  });

  // Add level text
  levelText = this.add
    .text(window.innerWidth / 2, 16, "Level: 1", {
      fontSize: "32px",
      fill: "#FFFFFF", // White color
      fontFamily: "'Creepster', cursive",
    })
    .setOrigin(0.5);

  health = 100;
  fuelLevel = 10;
  score = 0;
  level = 1;
  gameSpeed = 2;

  // Spawn obstacles, fuels, and scores periodically
  this.time.addEvent({
    delay: 2000,
    callback: spawnObstacle,
    callbackScope: this,
    loop: true,
  });
  this.time.addEvent({
    delay: 3000,
    callback: spawnFuel,
    callbackScope: this,
    loop: true,
  });
  this.time.addEvent({
    delay: 2500,
    callback: spawnScore,
    callbackScope: this,
    loop: true,
  });

  // Decrease fuel over time
  this.time.addEvent({
    delay: 1000, // Decrease fuel every second
    callback: decreaseFuel,
    callbackScope: this,
    loop: true,
  });

  // Add dirt particle emitter
  dirtEmitterLeft = this.add.particles("dirt").createEmitter({
    speed: { min: -50, max: 50 },
    angle: { min: 160, max: 200 },
    scale: { start: 0.2, end: 0 },
    blendMode: "ADD",
    lifespan: 300,
    quantity: 5,
    on: false,
  });

  dirtEmitterRight = this.add.particles("dirt").createEmitter({
    speed: { min: -50, max: 50 },
    angle: { min: 160, max: 200 },
    scale: { start: 0.2, end: 0 },
    blendMode: "ADD",
    lifespan: 300,
    quantity: 5,
    on: false,
  });

  this.sound.add("normalGameSound", { loop: true }).play();
}

async function endGame(message) {
  this.scene.pause();

  // Store the max level reached
  if (level > maxLevel) {
    maxLevel = level;
    localStorage.setItem("maxLevel", maxLevel);
  }

  console.log("Pushing score to leaderboard...");
  try {
    await pushScoreToLeaderboard(score);
    console.log("Score pushed successfully.");
  } catch (error) {
    console.error("Failed to push score to leaderboard:", error);
  }

  let gameOverText = this.add
    .text(
      window.innerWidth / 2,
      window.innerHeight / 2,
      message + "\nYour score: " + score,
      {
        fontSize: "48px",
        fill: "#ff0000",
        fontFamily: "'Creepster', cursive",
        align: "center",
      }
    )
    .setOrigin(0.5);

  // Display the play again button
  let playAgainButton = document.getElementById("play-again");
  playAgainButton.style.display = "block";

  playAgainButton.onclick = () => {
    // Restart the MenuScene
    this.scene.start("MenuScene");

    // Hide the play again button
    playAgainButton.style.display = "none";
  };
}
