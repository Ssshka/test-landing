'use client'
import { tokenIcons, walletIcons } from '@web3icons/react'
import { cn } from '@/lib/utils'

const TOKENS = [
  [tokenIcons.TokenBTC, 'Bitcoin', 'BTC'], [tokenIcons.TokenETH, 'Ethereum', 'ETH'],
  [tokenIcons.TokenSOL, 'Solana', 'SOL'], [tokenIcons.TokenBNB, 'BNB', 'BNB'],
  [tokenIcons.TokenUSDT, 'Tether', 'USDT'], [tokenIcons.TokenXRP, 'XRP', 'XRP'],
  [tokenIcons.TokenADA, 'Cardano', 'ADA'], [tokenIcons.TokenDOGE, 'Dogecoin', 'DOGE'],
  [tokenIcons.TokenAVAX, 'Avalanche', 'AVAX'], [tokenIcons.TokenTON, 'TON', 'TON'],
  [tokenIcons.TokenMATIC, 'Polygon', 'MATIC'], [tokenIcons.TokenTRX, 'TRON', 'TRX'],
  [tokenIcons.TokenDOT, 'Polkadot', 'DOT'], [tokenIcons.TokenLINK, 'Chainlink', 'LINK'],
  [tokenIcons.TokenUNI, 'Uniswap', 'UNI'], [tokenIcons.TokenUSDC, 'USD Coin', 'USDC'],
  [tokenIcons.TokenOP, 'Optimism', 'OP'], [tokenIcons.TokenARB, 'Arbitrum', 'ARB'],
  [tokenIcons.TokenSUI, 'Sui', 'SUI'], [tokenIcons.TokenAPT, 'Aptos', 'APT'],
] as const

const WALLETS = [
  [walletIcons.WalletMetamask, 'MetaMask'], [walletIcons.WalletPhantom, 'Phantom'],
  [walletIcons.WalletTrust, 'Trust Wallet'], [walletIcons.WalletCoinbase, 'Coinbase'],
  [walletIcons.WalletExodus, 'Exodus'], [walletIcons.WalletLedger, 'Ledger'],
  [walletIcons.WalletRainbow, 'Rainbow'], [walletIcons.WalletOkx, 'OKX Wallet'],
  [walletIcons.WalletRabby, 'Rabby'], [walletIcons.WalletZerion, 'Zerion'],
  [walletIcons.WalletBackpack, 'Backpack'], [walletIcons.WalletKeplr, 'Keplr'],
] as const

export function TokensMarquee() {
  return (
    <div className={cn('mt-14', 'sm:mt-20', '-mx-4', 'sm:-mx-6', 'md:-mx-8', 'overflow-hidden', 'space-y-3')}>
      <div className="flex" style={{ animation: 'marquee-left 40s linear infinite' }}>
        {[...Array(2)].map((_, ri) => (
          <div key={ri} className={cn('flex', 'shrink-0', 'gap-3', 'pr-3')}>
            {TOKENS.map(([Icon, name, symbol]) => (
              <div key={symbol} className={cn('flex', 'items-center', 'gap-2', 'bg-[oklch(0.14_0_0)]', 'rounded-xl', 'px-3', 'py-2', 'shrink-0')}>
                <Icon size={22} variant="branded" />
                <span className={cn('text-xs', 'font-medium', 'text-foreground/80', 'whitespace-nowrap')}>{name}</span>
                <span className={cn('text-[10px]', 'text-muted-foreground')}>{symbol}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex" style={{ animation: 'marquee-right 40s linear infinite' }}>
        {[...Array(2)].map((_, ri) => (
          <div key={ri} className={cn('flex', 'shrink-0', 'gap-3', 'pr-3')}>
            {WALLETS.map(([Icon, name]) => (
              <div key={name} className={cn('flex', 'items-center', 'gap-2', 'bg-[oklch(0.14_0_0)]', 'rounded-xl', 'px-3', 'py-2', 'shrink-0')}>
                <Icon size={22} variant="branded" />
                <span className={cn('text-xs', 'font-medium', 'text-foreground/80', 'whitespace-nowrap')}>{name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
