/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TigerBasicNFT, TigerBasicNFTInterface } from "../TigerBasicNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_artist",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startingPrice",
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
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tigerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "TigerForSale",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tigerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "TigerSold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tigerId",
        type: "uint256",
      },
    ],
    name: "TigerWithdrawnFromSale",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tigerId",
        type: "uint256",
      },
    ],
    name: "buyTiger",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getBalance",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tigerId",
        type: "uint256",
      },
    ],
    name: "getOwner",
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
        name: "tigerId",
        type: "uint256",
      },
    ],
    name: "isForSale",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pendingWithdrawals",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tigerId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minSalePriceInWei",
        type: "uint256",
      },
    ],
    name: "putUpForSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tigerByOwnerAndIndex",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tigersForSale",
    outputs: [
      {
        internalType: "bool",
        name: "isForSale",
        type: "bool",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
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
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tigerId",
        type: "uint256",
      },
    ],
    name: "withdrawFromSale",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610d38380380610d3883398101604081905261002f91610073565b6001600160a01b03821661004257600080fd5b600180546001600160a01b039093166001600160a01b031993841617905560025560008054909116331790556100ad565b6000806040838503121561008657600080fd5b82516001600160a01b038116811461009d57600080fd5b6020939093015192949293505050565b610c7c806100bc6000396000f3fe6080604052600436106100b15760003560e01c806390f83fa711610069578063c41a360a1161004e578063c41a360a146101f7578063f3f437031461022f578063f8b2cb4f1461025c57600080fd5b806390f83fa7146101c4578063abe572a3146101d757600080fd5b80635e96c6941161009a5780635e96c694146101005780638546d002146101205780638861c2af1461015757600080fd5b806318160ddd146100b6578063321a3e2f146100de575b600080fd5b3480156100c257600080fd5b506100cb606481565b6040519081526020015b60405180910390f35b3480156100ea57600080fd5b506100fe6100f9366004610b5a565b610292565b005b34801561010c57600080fd5b506100fe61011b366004610b73565b6103d8565b34801561012c57600080fd5b5061014061013b366004610b5a565b610526565b6040805192151583526020830191909152016100d5565b34801561016357600080fd5b5061019f610172366004610b5a565b6007602052600090815260409020805460019091015460ff82169161010090046001600160a01b03169083565b6040805193151584526001600160a01b039092166020840152908201526060016100d5565b6100fe6101d2366004610b5a565b61059e565b3480156101e357600080fd5b506100cb6101f2366004610bac565b610810565b34801561020357600080fd5b50610217610212366004610b5a565b6108ac565b6040516001600160a01b0390911681526020016100d5565b34801561023b57600080fd5b506100cb61024a366004610bd6565b60086020526000908152604090205481565b34801561026857600080fd5b506100cb610277366004610bd6565b6001600160a01b031660009081526004602052604090205490565b606481106102dc5760405162461bcd60e51b8152602060048201526012602482015271696e646578206f7574206f662072616e676560701b60448201526064015b60405180910390fd5b336102e6826108ac565b6001600160a01b0316146103285760405162461bcd60e51b81526020600482015260096024820152683737ba1037bbb732b960b91b60448201526064016102d3565b6040805160608101825260008082526020808301828152838501838152868452600790925284832093518454915174ffffffffffffffffffffffffffffffffffffffffff1990921690151574ffffffffffffffffffffffffffffffffffffffff001916176101006001600160a01b0390921691909102178355516001909201919091559051829133917f07095a31592b9631fa0e785c4e16b90af4a9e393080031fb4d468a2f6bbbad6e9190a350565b6064821061041d5760405162461bcd60e51b8152602060048201526012602482015271696e646578206f7574206f662072616e676560701b60448201526064016102d3565b33610427836108ac565b6001600160a01b0316146104695760405162461bcd60e51b81526020600482015260096024820152683737ba1037bbb732b960b91b60448201526064016102d3565b60408051606081018252600180825233602080840182815284860187815260008981526007845287902095518654925174ffffffffffffffffffffffffffffffffffffffffff1990931690151574ffffffffffffffffffffffffffffffffffffffff001916176101006001600160a01b0390931692909202919091178555519390920192909255915183815284927fcc7d5ae60860406bc3b5f896fa4db504ac337ad03c51fe881e387efb7140a1af910160405180910390a35050565b6000806064831061056e5760405162461bcd60e51b8152602060048201526012602482015271696e646578206f7574206f662072616e676560701b60448201526064016102d3565b600061057984610924565b8051909150156105925760400151600194909350915050565b50600093849350915050565b606481106105e35760405162461bcd60e51b8152602060048201526012602482015271696e646578206f7574206f662072616e676560701b60448201526064016102d3565b60006105ee82610924565b805190915061063f5760405162461bcd60e51b815260206004820152600c60248201527f6e6f7420666f722073616c65000000000000000000000000000000000000000060448201526064016102d3565b80604001513410156106935760405162461bcd60e51b815260206004820152600d60248201527f7072696365206e6f74206d65740000000000000000000000000000000000000060448201526064016102d3565b61069c826108ac565b6001600160a01b031681602001516001600160a01b0316146107005760405162461bcd60e51b815260206004820152601560248201527f73656c6c6572206e6f206c6f6e676572206f776e73000000000000000000000060448201526064016102d3565b61070f823383602001516109d5565b60408051606081018252600080825260208083018281528385018381528784526007835285842094518554925174ffffffffffffffffffffffffffffffffffffffffff1990931690151574ffffffffffffffffffffffffffffffffffffffff001916176101006001600160a01b039384160217855551600190940193909355848101519092168152600890915290812080543492906107af908490610c0e565b9250508190555081336001600160a01b031682602001516001600160a01b03167ff69a3a36e924ed1fedca536c3db60545f23868a494eef4414643b4d9cbe4a86f846040015160405161080491815260200190565b60405180910390a45050565b6001600160a01b03821660009081526004602052604081205482106108835760405162461bcd60e51b815260206004820152602360248201527f6f776e657220646f65736e277420686176652074686174206d616e792074696760448201526265727360e81b60648201526084016102d3565b506001600160a01b03919091166000908152600560209081526040808320938352929052205490565b6000606482106108f35760405162461bcd60e51b8152602060048201526012602482015271696e646578206f7574206f662072616e676560701b60448201526064016102d3565b6000828152600360205260409020546001600160a01b03168061091e57506001546001600160a01b03165b92915050565b60408051606081018252600080825260208201819052918101919091526000828152600360205260409020546001600160a01b031661098a575050604080516060810182526001808252546001600160a01b031660208201526002549181019190915290565b506000818152600760209081526040918290208251606081018452815460ff81161515825261010090046001600160a01b03169281019290925260010154918101919091525b919050565b600083815260036020908152604080832080546001600160a01b038781167fffffffffffffffffffffffff00000000000000000000000000000000000000008316811790935591855260049093529083208054929091161592610a3783610c26565b919050555080610afa576001600160a01b0382166000908152600460205260408120805491610a6583610c41565b90915550506001600160a01b038216600090815260046020908152604080832054878452600690925290912054808214610ad3576001600160a01b03841660009081526005602090815260408083208584528252808320548484528184208190558352600690915290208190555b506001600160a01b0383166000908152600560209081526040808320938352929052908120555b6001600160a01b038316600090815260046020526040812054610b1f90600190610c58565b6001600160a01b0390941660009081526005602090815260408083208784528252808320889055968252600690529490942092909255505050565b600060208284031215610b6c57600080fd5b5035919050565b60008060408385031215610b8657600080fd5b50508035926020909101359150565b80356001600160a01b03811681146109d057600080fd5b60008060408385031215610bbf57600080fd5b610bc883610b95565b946020939093013593505050565b600060208284031215610be857600080fd5b610bf182610b95565b9392505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610c2157610c21610bf8565b500190565b6000600019821415610c3a57610c3a610bf8565b5060010190565b600081610c5057610c50610bf8565b506000190190565b600082821015610c6a57610c6a610bf8565b50039056fea164736f6c6343000809000a";

type TigerBasicNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TigerBasicNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TigerBasicNFT__factory extends ContractFactory {
  constructor(...args: TigerBasicNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TigerBasicNFT";
  }

  deploy(
    _artist: string,
    _startingPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TigerBasicNFT> {
    return super.deploy(
      _artist,
      _startingPrice,
      overrides || {}
    ) as Promise<TigerBasicNFT>;
  }
  getDeployTransaction(
    _artist: string,
    _startingPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_artist, _startingPrice, overrides || {});
  }
  attach(address: string): TigerBasicNFT {
    return super.attach(address) as TigerBasicNFT;
  }
  connect(signer: Signer): TigerBasicNFT__factory {
    return super.connect(signer) as TigerBasicNFT__factory;
  }
  static readonly contractName: "TigerBasicNFT";
  public readonly contractName: "TigerBasicNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TigerBasicNFTInterface {
    return new utils.Interface(_abi) as TigerBasicNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TigerBasicNFT {
    return new Contract(address, _abi, signerOrProvider) as TigerBasicNFT;
  }
}
