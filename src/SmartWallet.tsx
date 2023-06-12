import {useAddress,useWallet, useSigner, useContract} from "@thirdweb-dev/react";
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";

const contractAddress = "0x1EF72717d258445E04Dbad3056B48ef792F4217b";
export default function SmartWallet() {
    const address = useAddress();
    const wallet = useWallet();
    const signer = useSigner();
    const { contract } = useContract("0x1EF72717d258445E04Dbad3056B48ef792F4217b");

    const getCurrentWalletAddress = async () => {
        return wallet?.getPersonalWallet()?.getSigner().then((signer) => signer.getAddress());
    }
    return (

            <div>
            <ConnectWallet />
            <h1> This is app </h1>
                {address ? (
                    <div>
                        <p>Address: {address}</p>
                        <button onClick={async () => {
                            console.log(await getCurrentWalletAddress())
                        }}>Log current wallet address</button>
                        <Web3Button contractAddress={contractAddress}
                                    action={async (contract) => contract.smartWalletFactory.createWallet(await getCurrentWalletAddress() || '')}>
                            Create EIP4337 wallet
                        </Web3Button>
                        <Web3Button contractAddress='0x0fC04873a7B51FB4a16EE54Fb3447DbF3C944A3d' action={(contract) => contract.erc20.transfer('0xeaBcd21B75349c59a4177E10ed17FBf2955fE697', 100)}>
                            Try transfer 100 wei of ERC20
                        </Web3Button>
                    </div>
                ) : (
                    <p>Login to execute!</p>
                )}
            </div>
    );
}
