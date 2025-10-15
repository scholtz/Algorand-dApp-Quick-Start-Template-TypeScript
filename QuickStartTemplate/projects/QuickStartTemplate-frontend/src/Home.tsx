// Home.tsx
// Main landing UI: shows navbar, hero text, and feature cards.
// This file only handles layout and modals — safe place to customize design.

import React, { useState } from 'react'
import { useWallet } from '@txnlab/use-wallet-react'
import { AiOutlineSend, AiOutlineStar, AiOutlineDeploymentUnit } from 'react-icons/ai'
import { BsArrowUpRightCircle, BsWallet2, BsShieldCheck } from 'react-icons/bs'

// Frontend modals
import ConnectWallet from './components/ConnectWallet'
import Transact from './components/Transact'
import NFTmint from './components/NFTmint'
import Tokenmint from './components/Tokenmint'

// Smart contract demo modal (backend app calls)
import AppCalls from './components/AppCalls'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false)
  const [openMintModal, setOpenMintModal] = useState<boolean>(false)
  const [openTokenModal, setOpenTokenModal] = useState<boolean>(false)
  const [openAppCallsModal, setOpenAppCallsModal] = useState<boolean>(false)

  const { activeAddress } = useWallet()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 flex flex-col">
      {/* ---------------- Navbar ---------------- */}
      <nav className="w-full bg-slate-900/50 backdrop-blur-xl border-b border-slate-800/50 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <BsShieldCheck className="text-white text-xl" />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
            Algorand dApp
          </h1>
        </div>
        <button
          className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-sm font-semibold text-white transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
          onClick={() => setOpenWalletModal(true)}
        >
          <BsWallet2 className="text-lg" />
          <span className="hidden sm:inline">{activeAddress ? 'Wallet Connected' : 'Connect Wallet'}</span>
          <span className="sm:hidden">{activeAddress ? 'Connected' : 'Connect'}</span>
        </button>
      </nav>

      {/* ---------------- Hero Section ---------------- */}
      <header className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-cyan-400">TestNet Enabled</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 sm:mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
              Build the Future
            </span>
            <br />
            <span className="text-white">on Algorand</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            Experience the power of blockchain technology with our comprehensive dApp starter kit. Connect your wallet, send transactions,
            mint NFTs, create tokens, and interact with smart contracts — all from one sleek interface.
          </p>

          {!activeAddress && (
            <button
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-base sm:text-lg font-bold text-white transition-all shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transform"
              onClick={() => setOpenWalletModal(true)}
            >
              <BsWallet2 className="text-2xl" />
              <span>Get Started</span>
              <BsArrowUpRightCircle className="text-xl" />
            </button>
          )}
        </div>
      </header>

      {/* ---------------- Features Grid ---------------- */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        {activeAddress ? (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Explore Features</h3>
              <p className="text-gray-400 text-sm sm:text-base">Choose from our suite of blockchain tools and start building</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Send Payment */}
              <div className="group relative p-6 sm:p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800/50 hover:border-emerald-500/50 transition-all hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
                    <AiOutlineSend className="text-2xl text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Send Payment</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  Try sending 1 ALGO to any address on TestNet. Experience seamless peer-to-peer transactions with instant finality.
                </p>
                <button
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40"
                  onClick={() => setOpenPaymentModal(true)}
                >
                  Send Payment
                </button>
              </div>

              {/* Mint NFT */}
              <div className="group relative p-6 sm:p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800/50 hover:border-pink-500/50 transition-all hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-shadow">
                    <AiOutlineStar className="text-2xl text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Mint NFT</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  Upload an image and mint it as an NFT on Algorand. Your metadata is stored securely on IPFS via Pinata.
                </p>
                <button
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-semibold transition-all shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40"
                  onClick={() => setOpenMintModal(true)}
                >
                  Mint NFT
                </button>
              </div>

              {/* Create Token */}
              <div className="group relative p-6 sm:p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800/50 hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
                    <BsArrowUpRightCircle className="text-2xl text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Create Token (ASA)</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  Launch your own Algorand Standard Asset in seconds. Perfect for experimenting with tokenomics and distribution.
                </p>
                <button
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-semibold transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                  onClick={() => setOpenTokenModal(true)}
                >
                  Create Token
                </button>
              </div>

              {/* Contract Interactions */}
              <div className="group relative p-6 sm:p-8 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800/50 hover:border-amber-500/50 transition-all hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
                    <AiOutlineDeploymentUnit className="text-2xl text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Smart Contracts</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  Interact with live smart contracts on-chain. Discover how stateful applications power the Web3 ecosystem.
                </p>
                <button
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
                  onClick={() => setOpenAppCallsModal(true)}
                >
                  Explore Contracts
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-8 sm:p-12 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-slate-800/50">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-2xl shadow-cyan-500/20">
                <BsWallet2 className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Connect Your Wallet</h3>
              <p className="text-gray-400 mb-8">
                Get started by connecting your Algorand wallet to unlock all features and begin exploring the blockchain.
              </p>
              <button
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-base font-bold text-white transition-all shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50"
                onClick={() => setOpenWalletModal(true)}
              >
                <BsWallet2 className="text-xl" />
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="w-full border-t border-slate-800/50 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-slate-900/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>Built with ❤️ on Algorand TestNet</p>
          <p>Powered by AlgoKit & TailwindCSS</p>
        </div>
      </footer>

      {/* ---------------- Modals ---------------- */}
      <ConnectWallet openModal={openWalletModal} closeModal={() => setOpenWalletModal(false)} />
      <Transact openModal={openPaymentModal} setModalState={setOpenPaymentModal} />
      <NFTmint openModal={openMintModal} setModalState={setOpenMintModal} />
      <Tokenmint openModal={openTokenModal} setModalState={setOpenTokenModal} />
      <AppCalls openModal={openAppCallsModal} setModalState={setOpenAppCallsModal} />
    </div>
  )
}

export default Home
