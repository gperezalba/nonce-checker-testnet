const URL = "http://52.28.106.166:23001";

const MANUEL1 = "";
const MANUEL2 = "";
const MANUEL3 = "";

const JOHAN1 = "";
const JOHAN2 = "";
const JOHAN3 = "";

const GUILLE1 = "0xf93e2E6B8018D4c3aaf455cfE2b20463E10162d0";
const GUILLE2 = "0xA246C82ddd6D13c8C2cBF7A6e2838A9e65c8DA19";
const GUILLE3 = "0xa9C4b0EB0Ede565539B6E80cd14096B3f276F79A";

async function updateInfo() {
	document.getElementById(GUILLE1).innerHTML = await getTransactionCount(GUILLE1);
	document.getElementById(GUILLE2).innerHTML = await getTransactionCount(GUILLE2);
	document.getElementById(GUILLE3).innerHTML = await getTransactionCount(GUILLE3);
}

async function getTransactionCount(wallet) {
	let provider = getProvider();
	let nonce = await provider.getTransactionCount(wallet);
	return nonce;
}

function getProvider() {
	return new ethers.providers.JsonRpcProvider(URL);
}
