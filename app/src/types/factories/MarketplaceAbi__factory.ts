/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MarketplaceAbi,
  MarketplaceAbiInterface,
} from "../MarketplaceAbi";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_identityManagerAddress",
        type: "address",
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
        name: "buyer",
        type: "address",
      },
    ],
    name: "DemandCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "volume",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "DemandCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "matchId",
        type: "uint256",
      },
    ],
    name: "MatchAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "matchId",
        type: "uint256",
      },
    ],
    name: "MatchCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "matchId",
        type: "uint256",
      },
    ],
    name: "MatchDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "matchId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
    ],
    name: "MatchProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "matchId",
        type: "uint256",
      },
    ],
    name: "MatchRejected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "OfferCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "volume",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "OfferCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "demands",
    outputs: [
      {
        internalType: "bool",
        name: "isMatched",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "volume",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "matches",
    outputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "volume",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isAccepted",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "offers",
    outputs: [
      {
        internalType: "uint256",
        name: "matches",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "volume",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "remainingVolume",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_volume",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "createOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
    ],
    name: "cancelOffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_volume",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "createDemand",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelDemand",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_volume",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "proposeMatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_matchId",
        type: "uint256",
      },
    ],
    name: "cancelProposedMatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_matchId",
        type: "uint256",
      },
    ],
    name: "acceptMatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_matchId",
        type: "uint256",
      },
    ],
    name: "rejectMatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_matchId",
        type: "uint256",
      },
    ],
    name: "deleteMatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b506040516116d43803806116d483398101604081905261003491610059565b600080546001600160a01b0319166001600160a01b0392909216919091179055610087565b60006020828403121561006a578081fd5b81516001600160a01b0381168114610080578182fd5b9392505050565b61163e806100966000396000f3fe608060405234801561001057600080fd5b50600436106100b35760003560e01c80636353d0ce116100715780636353d0ce146101e45780639512ada2146101ec5780639b8a74f0146101ff578063bebcd21e14610212578063dd29757a14610225578063f11610231461027557600080fd5b8062fbf79d146100b85780631b6b2601146100cd5780631c6c7128146100e0578063220ec9d2146100f3578063413bf38f146101065780634768d4ef14610162575b600080fd5b6100cb6100c63660046112ea565b610288565b005b6100cb6100db36600461137b565b610617565b6100cb6100ee36600461132f565b61076e565b6100cb610101366004611363565b6109e5565b61013d6101143660046112ab565b600260208190526000918252604090912080546001820154928201546003909201549092919084565b6040805194855260208501939093529183015260608201526080015b60405180910390f35b6101af610170366004611363565b6004602081905260009182526040909120805460018201546002830154600384015493909401546001600160a01b039283169492909116929060ff1685565b604080516001600160a01b0396871681529590941660208601529284019190915260608301521515608082015260a001610159565b6100cb610a88565b6100cb6101fa366004611363565b610b5b565b6100cb61020d3660046112ab565b610d74565b6100cb610220366004611363565b610f6c565b6102586102333660046112ab565b60036020526000908152604090208054600182015460029092015460ff909116919083565b604080519315158452602084019290925290820152606001610159565b6100cb610283366004611363565b61105a565b82336001600160a01b038216146102ba5760405162461bcd60e51b81526004016102b190611405565b60405180910390fd5b6001600160a01b0385166000908152600260205260409020600101546103195760405162461bcd60e51b815260206004820152601460248201527313d999995c88191bd95cc81b9bdd08195e1a5cdd60621b60448201526064016102b1565b6001600160a01b0384166000908152600360205260409020600101546103795760405162461bcd60e51b815260206004820152601560248201527411195b585b9908191bd95cc81b9bdd08195e1a5cdd605a1b60448201526064016102b1565b6001600160a01b03841660009081526003602052604090205460ff16156103e25760405162461bcd60e51b815260206004820152601960248201527f44656d616e6420697320616c7265616479206d6174636865640000000000000060448201526064016102b1565b6001600160a01b03851660009081526002602052604090206003015482101561044d5760405162461bcd60e51b815260206004820152601760248201527f44656d616e6420707269636520697320746f6f206c6f7700000000000000000060448201526064016102b1565b6001600160a01b038516600090815260026020819052604090912001548311156104c35760405162461bcd60e51b815260206004820152602160248201527f4f666665722072656d61696e696e6720766f6c756d6520697320746f6f206c6f6044820152607760f81b60648201526084016102b1565b600180549060006104d38361159f565b90915550506040805160a0810182526001600160a01b0380881680835287821660208085019182528486018981526060860189815260006080880181815260018054835260048087528b84209a518b54908b166001600160a01b0319918216178c559751918b01805492909a169190971617909755915160028089019190915590516003880155945195909201805495151560ff199096169590951790945590815291529081208054916105868361159f565b90915550506001600160a01b038516600090815260026020819052604082200180548592906105b6908490611571565b90915550506001600160a01b03808516600081815260036020526040808220805460ff19166001908117909155549051929389169290917fe4d8e0f7da725faec426061c134daa691fa7ab36a63d5a70093e1408a3b7006d91a45050505050565b8181600082116106695760405162461bcd60e51b815260206004820152601f60248201527f4361706163697479206d7573742062652067726561746572207468616e20300060448201526064016102b1565b600081116106b95760405162461bcd60e51b815260206004820152601c60248201527f5072696365206d7573742062652067726561746572207468616e20300000000060448201526064016102b1565b3360009081526003602052604090205460ff16156106e95760405162461bcd60e51b81526004016102b19061150d565b60408051606081018252600080825260208083018881528385018881523380855260038452938690209451855460ff191690151517855590516001850155516002909301929092558251878152918201869052917fc87629af897fb7ab00e4fc3e1f1a7979fc163449b23c2c82f5ff24f1380766ab910160405180910390a250505050565b8181600082116107c05760405162461bcd60e51b815260206004820152601f60248201527f4361706163697479206d7573742062652067726561746572207468616e20300060448201526064016102b1565b600081116108105760405162461bcd60e51b815260206004820152601c60248201527f5072696365206d7573742062652067726561746572207468616e20300000000060448201526064016102b1565b846001600160a01b0381166108675760405162461bcd60e51b815260206004820152601b60248201527f417373657420616464726573732063616e6e6f7420626520307830000000000060448201526064016102b1565b6000546040516310e67a9d60e31b81526001600160a01b03838116600483015290911690638733d4e89060240160206040518083038186803b1580156108ac57600080fd5b505afa1580156108c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e491906112ce565b6001600160a01b0316336001600160a01b0316146109145760405162461bcd60e51b81526004016102b1906114c9565b6001600160a01b03861660009081526002602052604090205486901561094c5760405162461bcd60e51b81526004016102b190611447565b60408051608081018252600080825260208083018a81528385018b8152606085018b81526001600160a01b038e16808652600280865295889020965187559251600187015590519385019390935591516003909301929092558251898152918201889052917fe899a6e29fab942958a400b4db4c5dec136446a7966a69e0011735027a33fff3910160405180910390a250505050505050565b6000818152600460205260409020600101546001600160a01b0316338114610a1f5760405162461bcd60e51b81526004016102b190611405565b6000828152600460205260409020600201548290610a4f5760405162461bcd60e51b81526004016102b190611492565b610a588361119e565b60405183907f700135b4fe8746e2d2c85a9baa43c62887740aebfeb3a439f71a083fe5d5675990600090a2505050565b3360009081526003602052604090205460ff1615610ab85760405162461bcd60e51b81526004016102b19061150d565b33600090815260036020526040902060010154610b0f5760405162461bcd60e51b815260206004820152601560248201527411195b585b9908191bd95cc81b9bdd08195e1a5cdd605a1b60448201526064016102b1565b33600081815260036020526040808220805460ff1916815560018101839055600201829055517fbb0484f4cc4b64d8fcffeafa625bb8a5513907608f51d2f670592eabc26df8699190a2565b6000818152600460205260409020600201548190610b8b5760405162461bcd60e51b81526004016102b190611492565b6000818152600460208190526040909120015460ff16610bed5760405162461bcd60e51b815260206004820181905260248201527f546865206d61746368206d757374207374696c6c20626520616363657074656460448201526064016102b1565b6000828152600460208190526040909120015460ff16610c605760405162461bcd60e51b815260206004820152602860248201527f4d61746368206d757374206265206163636570746564206f722072656a656374604482015267195908199a5c9cdd60c21b60648201526084016102b1565b6000828152600460205260409020600101546001600160a01b0316331480610d20575060008054838252600460208190526040928390205492516310e67a9d60e31b81526001600160a01b0393841691810191909152339290911690638733d4e89060240160206040518083038186803b158015610cdd57600080fd5b505afa158015610cf1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d1591906112ce565b6001600160a01b0316145b610d3c5760405162461bcd60e51b81526004016102b19061139c565b610d458261119e565b60405182907f4a5a134b29f0b3201b6013517626460a42e26046e6827189dc25ed7de0a87b6390600090a25050565b806001600160a01b038116610dcb5760405162461bcd60e51b815260206004820152601b60248201527f417373657420616464726573732063616e6e6f7420626520307830000000000060448201526064016102b1565b6000546040516310e67a9d60e31b81526001600160a01b03838116600483015290911690638733d4e89060240160206040518083038186803b158015610e1057600080fd5b505afa158015610e24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4891906112ce565b6001600160a01b0316336001600160a01b031614610e785760405162461bcd60e51b81526004016102b1906114c9565b6001600160a01b038216600090815260026020526040902054829015610eb05760405162461bcd60e51b81526004016102b190611447565b6001600160a01b038316600090815260026020526040902060010154610f0f5760405162461bcd60e51b815260206004820152601460248201527313d999995c88191bd95cc81b9bdd08195e1a5cdd60621b60448201526064016102b1565b6001600160a01b0383166000818152600260208190526040808320838155600181018490559182018390556003909101829055517f58c450e79e079445cb4236ae6f118053d819a6d6477d4b4e91b3552a8ef00fc89190a2505050565b6000818152600460205260409020600201548190610f9c5760405162461bcd60e51b81526004016102b190611492565b6000828152600460205260409020600101546001600160a01b031633146110115760405162461bcd60e51b815260206004820152602360248201527f4f6e6c79207468652062757965722063616e2061636365707420746865206d616044820152620e8c6d60eb1b60648201526084016102b1565b6000828152600460208190526040808320909101805460ff191660011790555183917f73715571185459f4f39409a64e51c86a3d41bb71cf95d02554c190501fdf948891a25050565b600081815260046020526040902060020154819061108a5760405162461bcd60e51b81526004016102b190611492565b6000828152600460205260409020600101546001600160a01b031633148061114a575060008054838252600460208190526040928390205492516310e67a9d60e31b81526001600160a01b0393841691810191909152339290911690638733d4e89060240160206040518083038186803b15801561110757600080fd5b505afa15801561111b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113f91906112ce565b6001600160a01b0316145b6111665760405162461bcd60e51b81526004016102b19061139c565b61116f8261119e565b60405182907f745319c15fac54211db76094086fd5c643ecd171d1ce911b754e852944b6f2e490600090a25050565b6000818152600460208181526040808420815160a08101835281546001600160a01b0390811680835260018401549091168286015260028084015483860181905260038501546060850152939096015460ff1615156080830152865292849052908420909201805491939091611215908490611559565b909155505080516001600160a01b0316600090815260026020526040812080549161123f83611588565b90915550506020908101516001600160a01b0316600090815260038083526040808320805460ff19908116909155948352600493849052822080546001600160a01b03199081168255600182018054909116905560028101839055908101919091550180549091169055565b6000602082840312156112bc578081fd5b81356112c7816115d0565b9392505050565b6000602082840312156112df578081fd5b81516112c7816115d0565b600080600080608085870312156112ff578283fd5b843561130a816115d0565b9350602085013561131a816115d0565b93969395505050506040820135916060013590565b600080600060608486031215611343578283fd5b833561134e816115d0565b95602085013595506040909401359392505050565b600060208284031215611374578081fd5b5035919050565b6000806040838503121561138d578182fd5b50508035926020909101359150565b60208082526043908201527f546865206f7065726174696f6e2063616e20626520706572666f726d6564206f60408201527f6e6c7920627920746865206275796572206f7220746865206173736574206f776060820152623732b960e91b608082015260a00190565b60208082526034908201526000805160206115e983398151915260408201527337baba10313c9030b71030b3b3b932b3b0ba37b960611b606082015260800190565b6020808252603f908201526000805160206115e983398151915260408201527f6f7574207768656e2074686520617373657420697320756e6d61746368656400606082015260800190565b60208082526018908201527f546865206d6174636820646f65736e2774206578697374730000000000000000604082015260600190565b60208082526036908201526000805160206115e983398151915260408201527537baba10313c903a34329030b9b9b2ba1037bbb732b960511b606082015260800190565b602080825260409082018190526000805160206115e9833981519152908201527f6f7574207768656e207468652064656d616e6420697320756e6d617463686564606082015260800190565b6000821982111561156c5761156c6115ba565b500190565b600082821015611583576115836115ba565b500390565b600081611597576115976115ba565b506000190190565b60006000198214156115b3576115b36115ba565b5060010190565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146115e557600080fd5b5056fe5468697320616374696f6e2063616e206f6e6c79206265206361727269656420a2646970667358221220f1579a35f81940d705f9be09fcf172caf73adfe3ffefd8b9f7f32aceba2af0f264736f6c63430008040033";

export class MarketplaceAbi__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _identityManagerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MarketplaceAbi> {
    return super.deploy(
      _identityManagerAddress,
      overrides || {}
    ) as Promise<MarketplaceAbi>;
  }
  getDeployTransaction(
    _identityManagerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_identityManagerAddress, overrides || {});
  }
  attach(address: string): MarketplaceAbi {
    return super.attach(address) as MarketplaceAbi;
  }
  connect(signer: Signer): MarketplaceAbi__factory {
    return super.connect(signer) as MarketplaceAbi__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceAbiInterface {
    return new utils.Interface(_abi) as MarketplaceAbiInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketplaceAbi {
    return new Contract(address, _abi, signerOrProvider) as MarketplaceAbi;
  }
}