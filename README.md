# EtherPiggy

A decentralized, goal-based ETH savings app deployed on **Arbitrum Sepolia**. Users can:
- Set a public username
- Create multiple ETH savings goals
- Deposit into goals until a target is reached
- Withdraw once the goal is completed

Built with:
- Solidity Smart Contract (SavingsVault)
- Hardhat for deployment
- Ethers.js for frontend interaction
- HTML/CSS + JavaScript frontend

---

## 🚀 Features
- ✅ Wallet connect/disconnect (MetaMask)
- ✅ Username management (stored on-chain)
- ✅ Create ETH savings goals with name/description/target
- ✅ Deposit ETH toward specific goals
- ✅ Withdraw ETH once goal target is reached
- ✅ Dashboard showing all user goals

---

## 🛠️ Setup & Run

### 1. Clone the repo
```bash
cd your-project-directory
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file:
```bash
PRIVATE_KEY=your-wallet-private-key-here
```

> ⚠️ Never share this key. Keep `.env` in `.gitignore`.

### 4. Compile the contract
```bash
npx hardhat compile
```

### 5. Deploy to Arbitrum Sepolia
```bash
npx hardhat run scripts/deploy.js --network arbitrumSepolia
```
Copy the deployed contract address.

### 6. Update `frontend/app.js`
Paste your contract address and ABI in:
```js
const CONTRACT_ADDRESS = "0xYourDeployedContractAddress";
const ABI = [ /* Paste ABI here */ ];
```

### 7. Start the frontend
```bash
cd frontend
npx live-server
```
Visit [http://127.0.0.1:8080](http://127.0.0.1:8080) or similar in your browser.

---

## 🧪 Interacting with the dApp

- **Connect Wallet** → Connect MetaMask to Arbitrum Sepolia
- **Set Username** → Opens modal to store name on-chain
- **Create Goal** → Enter goal name, description, ETH target
- **Deposit** → Enter goal ID and amount in ETH to fund goal
- **Withdraw** → Button appears on completed goals to claim funds

---

## 🗂️ Directory Structure
```
├── contracts/
│   └── SavingsVault.sol         # Smart contract
├── scripts/
│   └── deploy.js                # Deployment script
├── frontend/
│   ├── index.html               # UI layout
│   ├── app.js                   # Ethers.js interaction
│   └── SavingsVault_ABI.json    # ABI file
├── .env                         # Private key (not committed)
├── .gitignore                  # Ignore sensitive/built files
├── hardhat.config.js           # Hardhat network setup
└── package.json
```

---

## ✅ Requirements
- Node.js >= 16
- MetaMask browser extension
- ETH on Arbitrum Sepolia testnet

Use [https://faucet.quicknode.com/arbitrum/sepolia](https://faucet.quicknode.com/arbitrum/sepolia) to get free test ETH.

---

## 🙌 Credits
Created by [Your Name]. Contract authored under `CodeStorm`.

---

## 📜 License
MIT License. Feel free to build on top of this dApp.
