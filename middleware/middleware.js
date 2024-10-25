const { Gateway, Wallets } = require('fabric-network');
const FabricCAServices = require('fabric-ca-client');
const path = require('path');
const fs = require('fs');

async function registerUser(username, password) {
  const ccpPath = path.resolve(__dirname, 'connection-org1.json');
  const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

  const caURL = ccp.certificateAuthorities['ca.org1.example.com'].url;
  const ca = new FabricCAServices(caURL);

  const wallet = await Wallets.newFileSystemWallet('./wallet');

  const identity = await wallet.get('admin');
  if (!identity) {
    throw new Error('Admin identity not found in wallet');
  }

  const provider = wallet.getProviderRegistry().getProvider(identity.type);
  const adminUser = await provider.getUserContext(identity, 'admin');

  const secret = await ca.register({
    affiliation: 'org1.department1',
    enrollmentID: username,
    role: 'client'
  }, adminUser);

  const enrollment = await ca.enroll({
    enrollmentID: username,
    enrollmentSecret: secret
  });

  const x509Identity = {
    credentials: {
      certificate: enrollment.certificate,
      privateKey: enrollment.key.toBytes(),
    },
    mspId: 'Org1MSP',
    type: 'X.509',
  };

  await wallet.put(username, x509Identity);
  console.log(`Successfully registered and enrolled user ${username} and imported it into the wallet`);
}

registerUser('testUser', 'password123');
