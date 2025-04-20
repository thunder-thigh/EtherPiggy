const CONTRACT_ADDRESS = "0xC0988fbd17b7156B813191c264c4b0d404E92916"; // <-- Paste your contract address here
const ABI = [ {
  "inputs": [],
  "name": "SavingsVault__GoalDoesNotExist",
  "type": "error"
},
{
  "inputs": [],
  "name": "SavingsVault__TargetAlreadyReached",
  "type": "error"
},
{
  "inputs": [],
  "name": "SavingsVault__TargetMustBeGreaterThanZero",
  "type": "error"
},
{
  "inputs": [],
  "name": "SavingsVault__TargetNotYetReached",
  "type": "error"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "user",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "goalId",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  "name": "Deposited",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "user",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "goalId",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "targetAmount",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "string",
      "name": "name",
      "type": "string"
    },
    {
      "indexed": false,
      "internalType": "string",
      "name": "description",
      "type": "string"
    }
  ],
  "name": "GoalCreated",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "user",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "string",
      "name": "name",
      "type": "string"
    }
  ],
  "name": "UsernameSet",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "user",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "goalId",
      "type": "uint256"
    },
    {
      "indexed": false,
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  "name": "Withdrawn",
  "type": "event"
},
{
  "inputs": [
    {
      "internalType": "uint256",
      "name": "_targetAmount",
      "type": "uint256"
    },
    {
      "internalType": "string",
      "name": "_name",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "_description",
      "type": "string"
    }
  ],
  "name": "createGoal",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "uint256",
      "name": "_goalId",
      "type": "uint256"
    }
  ],
  "name": "deposit",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "user",
      "type": "address"
    }
  ],
  "name": "getAllGoals",
  "outputs": [
    {
      "components": [
        {
          "internalType": "uint256",
          "name": "targetAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountSaved",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "targetReached",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        }
      ],
      "internalType": "struct SavingsVault.Goal[]",
      "name": "",
      "type": "tuple[]"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "user",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "goalId",
      "type": "uint256"
    }
  ],
  "name": "getGoal",
  "outputs": [
    {
      "components": [
        {
          "internalType": "uint256",
          "name": "targetAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amountSaved",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "targetReached",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "description",
          "type": "string"
        }
      ],
      "internalType": "struct SavingsVault.Goal",
      "name": "",
      "type": "tuple"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "user",
      "type": "address"
    }
  ],
  "name": "getUsername",
  "outputs": [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "name": "s_goalCount",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  "name": "s_userGoals",
  "outputs": [
    {
      "internalType": "uint256",
      "name": "targetAmount",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "amountSaved",
      "type": "uint256"
    },
    {
      "internalType": "bool",
      "name": "targetReached",
      "type": "bool"
    },
    {
      "internalType": "string",
      "name": "name",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "description",
      "type": "string"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "name": "s_userNames",
  "outputs": [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ],
  "stateMutability": "view",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "string",
      "name": "_username",
      "type": "string"
    }
  ],
  "name": "setUsername",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "uint256",
      "name": "_goalId",
      "type": "uint256"
    }
  ],
  "name": "withdraw",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}
  // <-- Paste your ABI array here (from artifacts)
];

let provider, signer, contract;

async function connectWallet() {
  if (!window.ethereum) return alert("Install MetaMask!");

  provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = await provider.getSigner();
  contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

  const address = await signer.getAddress();
  document.getElementById("walletAddress").innerText = address;
  document.getElementById("connectButton").style.display = "none";
  document.getElementById("disconnectButton").style.display = "inline-block";

  await loadGoals();
}

async function disconnectWallet() {
  provider = null;
  signer = null;
  contract = null;

  document.getElementById("walletAddress").innerText = "";
  document.getElementById("connectButton").style.display = "inline-block";
  document.getElementById("disconnectButton").style.display = "none";
}

async function setUsername() {
  const username = document.getElementById("usernameInput").value;
  if (!username) return alert("Please enter a username.");

  const { chainId } = await provider.getNetwork();
  if (Number(chainId) !== 421614) {
    alert("Please switch to Arbitrum Sepolia in MetaMask.");
    return;
  }

  if (!contract || typeof contract.setUsername !== "function") {
    alert("Contract method not available. ABI might be incorrect.");
    return;
  }

  try {
    const tx = await contract.setUsername(username);
    await tx.wait();
    alert("Username updated!");
    document.getElementById("usernameModal").style.display = "none";
  } catch (err) {
    console.error("Set username failed:", err);
    alert("Failed to send transaction.");
  }
}

async function createGoal() {
  const name = document.getElementById("goalName").value;
  const desc = document.getElementById("goalDesc").value;
  const ethAmount = document.getElementById("goalAmount").value;

  if (!name || !desc || !ethAmount) return alert("Please fill in all fields");

  const targetAmount = ethers.parseEther(ethAmount);

  try {
    const tx = await contract.createGoal(targetAmount, name, desc);
    await tx.wait();
    alert("Goal created!");
    await loadGoals();
  } catch (err) {
    console.error("Create goal failed:", err);
    alert("Failed to create goal.");
  }
}

async function depositToGoal() {
  const goalId = document.getElementById("depositGoalId").value;
  const amount = document.getElementById("depositAmount").value;

  if (!goalId || !amount) return alert("Please enter goal ID and amount");

  const value = ethers.parseEther(amount);

  try {
    const tx = await contract.deposit(goalId, { value });
    await tx.wait();
    alert("Deposit successful!");
    await loadGoals();
  } catch (err) {
    console.error("Deposit failed:", err);
    alert("Failed to deposit.");
  }
}

async function withdrawGoal(goalId) {
  try {
    const tx = await contract.withdraw(goalId);
    await tx.wait();
    alert("Withdrawal complete!");
    await loadGoals();
  } catch (err) {
    console.error("Withdraw failed:", err);
    alert("Failed to withdraw.");
  }
}

async function loadGoals() {
  if (!contract || !signer) return;

  const userAddress = await signer.getAddress();
  let goals;
  try {
    goals = await contract.getAllGoals(userAddress);
  } catch (err) {
    console.error("Fetch goals failed:", err);
    return;
  }

  const container = document.getElementById("goalsList");
  container.innerHTML = "";

  if (goals.length === 0) {
    container.innerHTML = "<p>No goals yet. Create one!</p>";
    return;
  }

  goals.forEach((goal, index) => {
    const { name, description, targetAmount, amountSaved, targetReached } = goal;
    const progress = (Number(amountSaved) / Number(targetAmount)) * 100;

    const card = document.createElement("div");
    card.style = "border:1px solid #ccc; padding:16px; margin:12px 0; border-radius:8px; background:white;";

    card.innerHTML = `
      <h4>${name}</h4>
      <p><strong>Goal ID:</strong> ${index}</p>
      <p>${description}</p>
      <p><strong>Saved:</strong> ${ethers.formatEther(amountSaved)} / ${ethers.formatEther(targetAmount)} ETH</p>
      <p>Status: ${targetReached ? "✅ Complete" : "🔄 In Progress"}</p>
    `;

    if (targetReached && Number(amountSaved) > 0) {
      const withdrawBtn = document.createElement("button");
      withdrawBtn.textContent = "Withdraw";
      withdrawBtn.onclick = () => withdrawGoal(index);
      card.appendChild(withdrawBtn);
    }

    container.appendChild(card);
  });
}

// Button bindings
window.onload = () => {
  document.getElementById("connectButton").onclick = connectWallet;
  document.getElementById("disconnectButton").onclick = disconnectWallet;
  document.getElementById("openUsernameModalButton").onclick = () => {
    document.getElementById("usernameModal").style.display = "flex";
  };
  document.getElementById("closeUsernameModalButton").onclick = () => {
    document.getElementById("usernameModal").style.display = "none";
  };
  document.getElementById("confirmUsernameButton").onclick = setUsername;
  document.getElementById("createGoalButton").onclick = createGoal;
  document.getElementById("depositButton").onclick = depositToGoal;
};
