import { AbiItem } from 'web3-utils'

type Artifact = {
  addresses: {chainId: number, address: string}[],
  abi: AbiItem[]
}

const PoolAddressesProviderRegistryArtifact: Artifact = {
  addresses: [
    {
      chainId: 5,
      address: '0x73D94B5D5C0a68Fe279a91b23D2165D2DAaA41d3'
    },
    {
      chainId: 11155111,
      address: '0xb13Cfa6f8B2Eed2C37fB00fF0c1A59807C585810'
    }
  ]
  ,
  abi: [
    {
      inputs: [
        {
          internalType: 'contract IPoolAddressesProvider',
          name: 'addressesProvider',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'ADDRESSES_PROVIDER',
      outputs: [
        {
          internalType: 'contract IPoolAddressesProvider',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'getATokenTotalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAllATokens',
      outputs: [
        {
          components: [
            {
              internalType: 'string',
              name: 'symbol',
              type: 'string',
            },
            {
              internalType: 'address',
              name: 'tokenAddress',
              type: 'address',
            },
          ],
          internalType: 'struct AaveProtocolDataProvider.TokenData[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getAllReservesTokens',
      outputs: [
        {
          components: [
            {
              internalType: 'string',
              name: 'symbol',
              type: 'string',
            },
            {
              internalType: 'address',
              name: 'tokenAddress',
              type: 'address',
            },
          ],
          internalType: 'struct AaveProtocolDataProvider.TokenData[]',
          name: '',
          type: 'tuple[]',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'getDebtCeiling',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getDebtCeilingDecimals',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'getInterestRateStrategyAddress',
      outputs: [
        {
          internalType: 'address',
          name: 'irStrategyAddress',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'getLiquidationProtocolFee',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'getPaused',
      outputs: [
        {
          internalType: 'bool',
          name: 'isPaused',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'getReserveCaps',
      outputs: [
        {
          internalType: 'uint256',
          name: 'borrowCap',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'supplyCap',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'getReserveConfigurationData',
      outputs: [
        {
          internalType: 'uint256',
          name: 'decimals',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'ltv',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'liquidationThreshold',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'liquidationBonus',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'reserveFactor',
          type: 'uint256',
        },
        {
          internalType: 'bool',
          name: 'usageAsCollateralEnabled',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: 'borrowingEnabled',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: 'stableBorrowRateEnabled',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: 'isActive',
          type: 'bool',
        },
        {
          internalType: 'bool',
          name: 'isFrozen',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'getReserveData',
      outputs: [
        {
          internalType: 'uint256',
          name: 'unbacked',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'accruedToTreasuryScaled',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'totalAToken',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'totalStableDebt',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'totalVariableDebt',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'liquidityRate',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'variableBorrowRate',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'stableBorrowRate',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'averageStableBorrowRate',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'liquidityIndex',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'variableBorrowIndex',
          type: 'uint256',
        },
        {
          internalType: 'uint40',
          name: 'lastUpdateTimestamp',
          type: 'uint40',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'getReserveEModeCategory',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'getReserveTokensAddresses',
      outputs: [
        {
          internalType: 'address',
          name: 'aTokenAddress',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'stableDebtTokenAddress',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'variableDebtTokenAddress',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'getSiloedBorrowing',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'getTotalDebt',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
      ],
      name: 'getUnbackedMintCap',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'asset',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'user',
          type: 'address',
        },
      ],
      name: 'getUserReserveData',
      outputs: [
        {
          internalType: 'uint256',
          name: 'currentATokenBalance',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'currentStableDebt',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'currentVariableDebt',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'principalStableDebt',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'scaledVariableDebt',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'stableBorrowRate',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'liquidityRate',
          type: 'uint256',
        },
        {
          internalType: 'uint40',
          name: 'stableRateLastUpdated',
          type: 'uint40',
        },
        {
          internalType: 'bool',
          name: 'usageAsCollateralEnabled',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
}

export default PoolAddressesProviderRegistryArtifact
