import React, { useState } from 'react';
import { generateMnemonic } from 'bip39';
import { Buffer } from 'buffer';
import * as ed from '@noble/ed25519';
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  Alert
} from '@mui/material';

window.Buffer = Buffer; // Make Buffer globally available

const Render = () => {
  const [generation, setGeneration] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  // Generate mnemonic phrase
  function mnemonic() {
    const generate = generateMnemonic();
    setGeneration(generate);
    console.log(generate);
    setSuccessMessage(false); // Reset success message
  }

  // Generate public and private keys
  async function generatePublicKeyAndPrivateKey() {
    try {
      const privateKeyBytes = ed.utils.randomPrivateKey(); // Generate private key (Uint8Array)
      setPrivateKey(Buffer.from(privateKeyBytes).toString('hex')); // Convert private key to hex string

      const publicKeyBytes = await ed.getPublicKeyAsync(privateKeyBytes); // Generate public key
      setPublicKey(Buffer.from(publicKeyBytes).toString('hex')); // Convert public key to hex string

      const message = new TextEncoder().encode('hello world');
      const signature = await ed.signAsync(message, privateKeyBytes); // Sign message

      const isValid = await ed.verifyAsync(signature, message, publicKeyBytes); // Verify signature
      console.log('Signature valid:', isValid);

      if (isValid) {
        setSuccessMessage(true); // Display success message
      }
    } catch (error) {
      console.error('Error generating keys:', error);
    }
  }

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Crypto World
      </Typography>
      <Typography variant="h5" gutterBottom>
        Generate Mnemonic Phrases
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={mnemonic}
        sx={{ mt: 2 }}
      >
        Generate Mnemonics
      </Button>

      {generation && (
        <Card sx={{ mt: 4, p: 2, textAlign: 'center' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Your Mnemonic Phrase:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {generation}
            </Typography>
            <Box mt={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={generatePublicKeyAndPrivateKey}
              >
                Generate Keys
              </Button>
            </Box>
          </CardContent>
        </Card>
      )}

      {successMessage && (
        <Alert severity="success" sx={{ mt: 4 }}>
          Keys Generated Successfully!
        </Alert>
      )}

      {(publicKey || privateKey) && (
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Public Key</Typography>
                <Typography variant="body2" color="text.secondary">
                  {publicKey}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h6">Private Key</Typography>
                <Typography variant="body2" color="text.secondary">
                  {privateKey}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Render;
