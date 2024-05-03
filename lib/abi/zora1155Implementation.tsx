export const zora1155Implementation = [
  {
    type: 'constructor',
    name: '',
    inputs: [
      {
        type: 'address',
        name: '_mintFeeRecipient',
        internalType: 'address',
      },
      {
        type: 'address',
        name: '_upgradeGate',
        internalType: 'address',
      },
      {
        type: 'address',
        name: '_protocolRewards',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    name: 'ADDRESS_DELEGATECALL_TO_NON_CONTRACT',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ADDRESS_LOW_LEVEL_CALL_FAILED',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'Burn_NotOwnerOrApproved',
    inputs: [
      {
        type: 'address',
        name: 'operator',
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
      },
    ],
    outputs: [],
  },
  {
    type: 'error',
    name: 'CREATOR_FUNDS_RECIPIENT_NOT_SET',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'CallFailed',
    inputs: [
      {
        type: 'bytes',
        name: 'reason',
        internalType: 'bytes',
      },
    ],
    outputs: [],
  },
  {
    type: 'error',
    name: 'Call_TokenIdMismatch',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'CallerNotZoraCreator1155',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'CannotMintMoreTokens',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'quantity',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'totalMinted',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'maxSupply',
        internalType: 'uint256',
      },
    ],
    outputs: [],
  },
  {
    type: 'error',
    name: 'Config_TransferHookNotSupported',
    inputs: [
      {
        type: 'address',
        name: 'proposedAddress',
        internalType: 'address',
      },
    ],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1155_ACCOUNTS_AND_IDS_LENGTH_MISMATCH',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1155_ADDRESS_ZERO_IS_NOT_A_VALID_OWNER',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1155_BURN_AMOUNT_EXCEEDS_BALANCE',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1155_BURN_FROM_ZERO_ADDRESS',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1155_CALLER_IS_NOT_TOKEN_OWNER_OR_APPROVED',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1155_ERC1155RECEIVER_REJECTED_TOKENS',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1155_IDS_AND_AMOUNTS_LENGTH_MISMATCH',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1155_INSUFFICIENT_BALANCE_FOR_TRANSFER',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1155_MINT_TO_ZERO_ADDRESS',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1155_MINT_TO_ZERO_ADDRESS',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1155_SETTING_APPROVAL_FOR_SELF',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1155_TRANSFER_TO_NON_ERC1155RECEIVER_IMPLEMENTER',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1155_TRANSFER_TO_ZERO_ADDRESS',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1967_NEW_IMPL_NOT_CONTRACT',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1967_NEW_IMPL_NOT_UUPS',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ERC1967_UNSUPPORTED_PROXIABLEUUID',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ETHWithdrawFailed',
    inputs: [
      {
        type: 'address',
        name: 'recipient',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
    ],
    outputs: [],
  },
  {
    type: 'error',
    name: 'FUNCTION_MUST_BE_CALLED_THROUGH_ACTIVE_PROXY',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'FUNCTION_MUST_BE_CALLED_THROUGH_DELEGATECALL',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'FundsWithdrawInsolvent',
    inputs: [
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'contractValue',
        internalType: 'uint256',
      },
    ],
    outputs: [],
  },
  {
    type: 'error',
    name: 'INITIALIZABLE_CONTRACT_ALREADY_INITIALIZED',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'INITIALIZABLE_CONTRACT_IS_NOT_INITIALIZING',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'INVALID_ADDRESS_ZERO',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'INVALID_ETH_AMOUNT',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'InvalidMerkleProof',
    inputs: [
      {
        type: 'address',
        name: 'mintTo',
        internalType: 'address',
      },
      {
        type: 'bytes32[]',
        name: 'merkleProof',
        internalType: 'bytes32[]',
      },
      {
        type: 'bytes32',
        name: 'merkleRoot',
        internalType: 'bytes32',
      },
    ],
    outputs: [],
  },
  {
    type: 'error',
    name: 'InvalidMintSchedule',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'InvalidSignatureVersion',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'MintNotYetStarted',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'Mint_InsolventSaleTransfer',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'Mint_TokenIDMintNotAllowed',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'Mint_UnknownCommand',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'Mint_ValueTransferFail',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'MinterContractAlreadyExists',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'MinterContractDoesNotExist',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'NewOwnerNeedsToBeAdmin',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'NoRendererForToken',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ONLY_CREATE_REFERRAL',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'PremintDeleted',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'ProtocolRewardsWithdrawFailed',
    inputs: [
      {
        type: 'address',
        name: 'caller',
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'recipient',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
    ],
    outputs: [],
  },
  {
    type: 'error',
    name: 'RendererNotValid',
    inputs: [
      {
        type: 'address',
        name: 'renderer',
        internalType: 'address',
      },
    ],
    outputs: [],
  },
  {
    type: 'error',
    name: 'Renderer_NotValidRendererContract',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'SaleEnded',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'SaleHasNotStarted',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'Sale_CannotCallNonSalesContract',
    inputs: [
      {
        type: 'address',
        name: 'targetContract',
        internalType: 'address',
      },
    ],
    outputs: [],
  },
  {
    type: 'error',
    name: 'TokenIdMismatch',
    inputs: [
      {
        type: 'uint256',
        name: 'expected',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'actual',
        internalType: 'uint256',
      },
    ],
    outputs: [],
  },
  {
    type: 'error',
    name: 'UUPS_UPGRADEABLE_MUST_NOT_BE_CALLED_THROUGH_DELEGATECALL',
    inputs: [],
    outputs: [],
  },
  {
    type: 'error',
    name: 'UserExceedsMintLimit',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'limit',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'requestedAmount',
        internalType: 'uint256',
      },
    ],
    outputs: [],
  },
  {
    type: 'error',
    name: 'UserMissingRoleForToken',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'role',
        internalType: 'uint256',
      },
    ],
    outputs: [],
  },
  {
    type: 'error',
    name: 'WrongValueSent',
    inputs: [],
    outputs: [],
  },
  {
    type: 'event',
    name: 'AdminChanged',
    inputs: [
      {
        type: 'address',
        name: 'previousAdmin',
        indexed: false,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'newAdmin',
        indexed: false,
        internalType: 'address',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ApprovalForAll',
    inputs: [
      {
        type: 'address',
        name: 'account',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'operator',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'bool',
        name: 'approved',
        indexed: false,
        internalType: 'bool',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'BeaconUpgraded',
    inputs: [
      {
        type: 'address',
        name: 'beacon',
        indexed: true,
        internalType: 'address',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ConfigUpdated',
    inputs: [
      {
        type: 'address',
        name: 'updater',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'uint8',
        name: 'updateType',
        indexed: true,
        internalType: 'enum IZoraCreator1155.ConfigUpdate',
      },
      {
        type: 'tuple',
        name: 'newConfig',
        components: [
          {
            type: 'address',
            name: 'owner',
            internalType: 'address',
          },
          {
            type: 'uint96',
            name: '__gap1',
            internalType: 'uint96',
          },
          {
            type: 'address',
            name: 'fundsRecipient',
            internalType: 'address payable',
          },
          {
            type: 'uint96',
            name: '__gap2',
            internalType: 'uint96',
          },
          {
            type: 'address',
            name: 'transferHook',
            internalType: 'contract ITransferHookReceiver',
          },
          {
            type: 'uint96',
            name: '__gap3',
            internalType: 'uint96',
          },
        ],
        indexed: false,
        internalType: 'struct IZoraCreator1155TypesV1.ContractConfig',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ContractMetadataUpdated',
    inputs: [
      {
        type: 'address',
        name: 'updater',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'string',
        name: 'uri',
        indexed: false,
        internalType: 'string',
      },
      {
        type: 'string',
        name: 'name',
        indexed: false,
        internalType: 'string',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ContractRendererUpdated',
    inputs: [
      {
        type: 'address',
        name: 'renderer',
        indexed: false,
        internalType: 'contract IRenderer1155',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'CreatorAttribution',
    inputs: [
      {
        type: 'bytes32',
        name: 'structHash',
        indexed: false,
        internalType: 'bytes32',
      },
      {
        type: 'string',
        name: 'domainName',
        indexed: false,
        internalType: 'string',
      },
      {
        type: 'string',
        name: 'version',
        indexed: false,
        internalType: 'string',
      },
      {
        type: 'address',
        name: 'creator',
        indexed: false,
        internalType: 'address',
      },
      {
        type: 'bytes',
        name: 'signature',
        indexed: false,
        internalType: 'bytes',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Initialized',
    inputs: [
      {
        type: 'uint8',
        name: 'version',
        indexed: false,
        internalType: 'uint8',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'OwnershipTransferred',
    inputs: [
      {
        type: 'address',
        name: 'lastOwner',
        indexed: false,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'newOwner',
        indexed: false,
        internalType: 'address',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Purchased',
    inputs: [
      {
        type: 'address',
        name: 'sender',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'minter',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'tokenId',
        indexed: true,
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'quantity',
        indexed: false,
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'value',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'RendererUpdated',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        indexed: true,
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: 'renderer',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'user',
        indexed: true,
        internalType: 'address',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'SetupNewToken',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        indexed: true,
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: 'sender',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'string',
        name: 'newURI',
        indexed: false,
        internalType: 'string',
      },
      {
        type: 'uint256',
        name: 'maxSupply',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'TransferBatch',
    inputs: [
      {
        type: 'address',
        name: 'operator',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'from',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'to',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'uint256[]',
        name: 'ids',
        indexed: false,
        internalType: 'uint256[]',
      },
      {
        type: 'uint256[]',
        name: 'values',
        indexed: false,
        internalType: 'uint256[]',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'TransferSingle',
    inputs: [
      {
        type: 'address',
        name: 'operator',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'from',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'to',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'id',
        indexed: false,
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'value',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'URI',
    inputs: [
      {
        type: 'string',
        name: 'value',
        indexed: false,
        internalType: 'string',
      },
      {
        type: 'uint256',
        name: 'id',
        indexed: true,
        internalType: 'uint256',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'UpdatedPermissions',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        indexed: true,
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: 'user',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'permissions',
        indexed: true,
        internalType: 'uint256',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'UpdatedRoyalties',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        indexed: true,
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: 'user',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'tuple',
        name: 'configuration',
        components: [
          {
            type: 'uint32',
            name: 'royaltyMintSchedule',
            internalType: 'uint32',
          },
          {
            type: 'uint32',
            name: 'royaltyBPS',
            internalType: 'uint32',
          },
          {
            type: 'address',
            name: 'royaltyRecipient',
            internalType: 'address',
          },
        ],
        indexed: false,
        internalType: 'struct ICreatorRoyaltiesControl.RoyaltyConfiguration',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'UpdatedToken',
    inputs: [
      {
        type: 'address',
        name: 'from',
        indexed: true,
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'tokenId',
        indexed: true,
        internalType: 'uint256',
      },
      {
        type: 'tuple',
        name: 'tokenData',
        components: [
          {
            type: 'string',
            name: 'uri',
            internalType: 'string',
          },
          {
            type: 'uint256',
            name: 'maxSupply',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'totalMinted',
            internalType: 'uint256',
          },
        ],
        indexed: false,
        internalType: 'struct IZoraCreator1155TypesV1.TokenData',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Upgraded',
    inputs: [
      {
        type: 'address',
        name: 'implementation',
        indexed: true,
        internalType: 'address',
      },
    ],
    outputs: [],
    anonymous: false,
  },
  {
    type: 'function',
    name: 'CONTRACT_BASE_ID',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'PERMISSION_BIT_ADMIN',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'PERMISSION_BIT_FUNDS_MANAGER',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'PERMISSION_BIT_METADATA',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'PERMISSION_BIT_MINTER',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'PERMISSION_BIT_SALES',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'addPermission',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'permissionBits',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'adminMint',
    inputs: [
      {
        type: 'address',
        name: 'recipient',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'quantity',
        internalType: 'uint256',
      },
      {
        type: 'bytes',
        name: 'data',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'adminMintBatch',
    inputs: [
      {
        type: 'address',
        name: 'recipient',
        internalType: 'address',
      },
      {
        type: 'uint256[]',
        name: 'tokenIds',
        internalType: 'uint256[]',
      },
      {
        type: 'uint256[]',
        name: 'quantities',
        internalType: 'uint256[]',
      },
      {
        type: 'bytes',
        name: 'data',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'assumeLastTokenIdMatches',
    inputs: [
      {
        type: 'uint256',
        name: 'lastTokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'balanceOf',
    inputs: [
      {
        type: 'address',
        name: 'account',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'id',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'balanceOfBatch',
    inputs: [
      {
        type: 'address[]',
        name: 'accounts',
        internalType: 'address[]',
      },
      {
        type: 'uint256[]',
        name: 'ids',
        internalType: 'uint256[]',
      },
    ],
    outputs: [
      {
        type: 'uint256[]',
        name: 'batchBalances',
        internalType: 'uint256[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'burnBatch',
    inputs: [
      {
        type: 'address',
        name: 'from',
        internalType: 'address',
      },
      {
        type: 'uint256[]',
        name: 'tokenIds',
        internalType: 'uint256[]',
      },
      {
        type: 'uint256[]',
        name: 'amounts',
        internalType: 'uint256[]',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'callRenderer',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'bytes',
        name: 'data',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'callSale',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: 'salesConfig',
        internalType: 'contract IMinter1155',
      },
      {
        type: 'bytes',
        name: 'data',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'computeFreeMintRewards',
    inputs: [
      {
        type: 'uint256',
        name: 'numTokens',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'tuple',
        name: '',
        components: [
          {
            type: 'uint256',
            name: 'creatorReward',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'createReferralReward',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'mintReferralReward',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'firstMinterReward',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'zoraReward',
            internalType: 'uint256',
          },
        ],
        internalType: 'struct RewardsSettings',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'computePaidMintRewards',
    inputs: [
      {
        type: 'uint256',
        name: 'numTokens',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'tuple',
        name: '',
        components: [
          {
            type: 'uint256',
            name: 'creatorReward',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'createReferralReward',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'mintReferralReward',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'firstMinterReward',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'zoraReward',
            internalType: 'uint256',
          },
        ],
        internalType: 'struct RewardsSettings',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'computeTotalReward',
    inputs: [
      {
        type: 'uint256',
        name: 'numTokens',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'config',
    inputs: [],
    outputs: [
      {
        type: 'address',
        name: 'owner',
        internalType: 'address',
      },
      {
        type: 'uint96',
        name: '__gap1',
        internalType: 'uint96',
      },
      {
        type: 'address',
        name: 'fundsRecipient',
        internalType: 'address payable',
      },
      {
        type: 'uint96',
        name: '__gap2',
        internalType: 'uint96',
      },
      {
        type: 'address',
        name: 'transferHook',
        internalType: 'contract ITransferHookReceiver',
      },
      {
        type: 'uint96',
        name: '__gap3',
        internalType: 'uint96',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'contractURI',
    inputs: [],
    outputs: [
      {
        type: 'string',
        name: '',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'contractVersion',
    inputs: [],
    outputs: [
      {
        type: 'string',
        name: '',
        internalType: 'string',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'createReferrals',
    inputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'customRenderers',
    inputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'contract IRenderer1155',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'delegateSetupNewToken',
    inputs: [
      {
        type: 'bytes',
        name: 'premintConfig',
        internalType: 'bytes',
      },
      {
        type: 'bytes32',
        name: 'premintVersion',
        internalType: 'bytes32',
      },
      {
        type: 'bytes',
        name: 'signature',
        internalType: 'bytes',
      },
      {
        type: 'address',
        name: 'sender',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        type: 'uint256',
        name: 'newTokenId',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'delegatedTokenId',
    inputs: [
      {
        type: 'uint32',
        name: '',
        internalType: 'uint32',
      },
    ],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'firstMinters',
    inputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getCreatorRewardRecipient',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getCustomRenderer',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'address',
        name: 'customRenderer',
        internalType: 'contract IRenderer1155',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getRoyalties',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'tuple',
        name: '',
        components: [
          {
            type: 'uint32',
            name: 'royaltyMintSchedule',
            internalType: 'uint32',
          },
          {
            type: 'uint32',
            name: 'royaltyBPS',
            internalType: 'uint32',
          },
          {
            type: 'address',
            name: 'royaltyRecipient',
            internalType: 'address',
          },
        ],
        internalType: 'struct ICreatorRoyaltiesControl.RoyaltyConfiguration',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getTokenInfo',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'tuple',
        name: '',
        components: [
          {
            type: 'string',
            name: 'uri',
            internalType: 'string',
          },
          {
            type: 'uint256',
            name: 'maxSupply',
            internalType: 'uint256',
          },
          {
            type: 'uint256',
            name: 'totalMinted',
            internalType: 'uint256',
          },
        ],
        internalType: 'struct IZoraCreator1155TypesV1.TokenData',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'implementation',
    inputs: [],
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'initialize',
    inputs: [
      {
        type: 'string',
        name: 'contractName',
        internalType: 'string',
      },
      {
        type: 'string',
        name: 'newContractURI',
        internalType: 'string',
      },
      {
        type: 'tuple',
        name: 'defaultRoyaltyConfiguration',
        components: [
          {
            type: 'uint32',
            name: 'royaltyMintSchedule',
            internalType: 'uint32',
          },
          {
            type: 'uint32',
            name: 'royaltyBPS',
            internalType: 'uint32',
          },
          {
            type: 'address',
            name: 'royaltyRecipient',
            internalType: 'address',
          },
        ],
        internalType: 'struct ICreatorRoyaltiesControl.RoyaltyConfiguration',
      },
      {
        type: 'address',
        name: 'defaultAdmin',
        internalType: 'address payable',
      },
      {
        type: 'bytes[]',
        name: 'setupActions',
        internalType: 'bytes[]',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'isAdminOrRole',
    inputs: [
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'role',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isApprovedForAll',
    inputs: [
      {
        type: 'address',
        name: 'account',
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'operator',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'metadataRendererContract',
    inputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'mint',
    inputs: [
      {
        type: 'address',
        name: 'minter',
        internalType: 'contract IMinter1155',
      },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'quantity',
        internalType: 'uint256',
      },
      {
        type: 'address[]',
        name: 'rewardsRecipients',
        internalType: 'address[]',
      },
      {
        type: 'bytes',
        name: 'minterArguments',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'mintFee',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'mintWithRewards',
    inputs: [
      {
        type: 'address',
        name: 'minter',
        internalType: 'contract IMinter1155',
      },
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'quantity',
        internalType: 'uint256',
      },
      {
        type: 'bytes',
        name: 'minterArguments',
        internalType: 'bytes',
      },
      {
        type: 'address',
        name: 'mintReferral',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'multicall',
    inputs: [
      {
        type: 'bytes[]',
        name: 'data',
        internalType: 'bytes[]',
      },
    ],
    outputs: [
      {
        type: 'bytes[]',
        name: 'results',
        internalType: 'bytes[]',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'name',
    inputs: [],
    outputs: [
      {
        type: 'string',
        name: '',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'nextTokenId',
    inputs: [],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'owner',
    inputs: [],
    outputs: [
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'permissions',
    inputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: '',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'proxiableUUID',
    inputs: [],
    outputs: [
      {
        type: 'bytes32',
        name: '',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'removePermission',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: 'user',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'permissionBits',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'royalties',
    inputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'uint32',
        name: 'royaltyMintSchedule',
        internalType: 'uint32',
      },
      {
        type: 'uint32',
        name: 'royaltyBPS',
        internalType: 'uint32',
      },
      {
        type: 'address',
        name: 'royaltyRecipient',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'royaltyInfo',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'salePrice',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'address',
        name: 'receiver',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'royaltyAmount',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'safeBatchTransferFrom',
    inputs: [
      {
        type: 'address',
        name: 'from',
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'to',
        internalType: 'address',
      },
      {
        type: 'uint256[]',
        name: 'ids',
        internalType: 'uint256[]',
      },
      {
        type: 'uint256[]',
        name: 'amounts',
        internalType: 'uint256[]',
      },
      {
        type: 'bytes',
        name: 'data',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'safeTransferFrom',
    inputs: [
      {
        type: 'address',
        name: 'from',
        internalType: 'address',
      },
      {
        type: 'address',
        name: 'to',
        internalType: 'address',
      },
      {
        type: 'uint256',
        name: 'id',
        internalType: 'uint256',
      },
      {
        type: 'uint256',
        name: 'amount',
        internalType: 'uint256',
      },
      {
        type: 'bytes',
        name: 'data',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setApprovalForAll',
    inputs: [
      {
        type: 'address',
        name: 'operator',
        internalType: 'address',
      },
      {
        type: 'bool',
        name: 'approved',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setFundsRecipient',
    inputs: [
      {
        type: 'address',
        name: 'fundsRecipient',
        internalType: 'address payable',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setOwner',
    inputs: [
      {
        type: 'address',
        name: 'newOwner',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setTokenMetadataRenderer',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: 'renderer',
        internalType: 'contract IRenderer1155',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setTransferHook',
    inputs: [
      {
        type: 'address',
        name: 'transferHook',
        internalType: 'contract ITransferHookReceiver',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setupNewToken',
    inputs: [
      {
        type: 'string',
        name: 'newURI',
        internalType: 'string',
      },
      {
        type: 'uint256',
        name: 'maxSupply',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setupNewTokenWithCreateReferral',
    inputs: [
      {
        type: 'string',
        name: 'newURI',
        internalType: 'string',
      },
      {
        type: 'uint256',
        name: 'maxSupply',
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: 'createReferral',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        type: 'uint256',
        name: '',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'supportedPremintSignatureVersions',
    inputs: [],
    outputs: [
      {
        type: 'string[]',
        name: '',
        internalType: 'string[]',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'supportsInterface',
    inputs: [
      {
        type: 'bytes4',
        name: 'interfaceId',
        internalType: 'bytes4',
      },
    ],
    outputs: [
      {
        type: 'bool',
        name: '',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'symbol',
    inputs: [],
    outputs: [
      {
        type: 'string',
        name: '',
        internalType: 'string',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'updateContractMetadata',
    inputs: [
      {
        type: 'string',
        name: '_newURI',
        internalType: 'string',
      },
      {
        type: 'string',
        name: '_newName',
        internalType: 'string',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateCreateReferral',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'address',
        name: 'recipient',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateRoyaltiesForToken',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'tuple',
        name: 'newConfiguration',
        components: [
          {
            type: 'uint32',
            name: 'royaltyMintSchedule',
            internalType: 'uint32',
          },
          {
            type: 'uint32',
            name: 'royaltyBPS',
            internalType: 'uint32',
          },
          {
            type: 'address',
            name: 'royaltyRecipient',
            internalType: 'address',
          },
        ],
        internalType: 'struct ICreatorRoyaltiesControl.RoyaltyConfiguration',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'updateTokenURI',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
      {
        type: 'string',
        name: '_newURI',
        internalType: 'string',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'upgradeTo',
    inputs: [
      {
        type: 'address',
        name: 'newImplementation',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'upgradeToAndCall',
    inputs: [
      {
        type: 'address',
        name: 'newImplementation',
        internalType: 'address',
      },
      {
        type: 'bytes',
        name: 'data',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'uri',
    inputs: [
      {
        type: 'uint256',
        name: 'tokenId',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        type: 'string',
        name: '',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'withdraw',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'receive',
    name: '',
    inputs: [],
    outputs: [],
    stateMutability: 'payable',
  },
] as const;
