import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Box, Button, Typography, Alert } from '@mui/material';

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (error) {
        setError(error.message);
        setProcessing(false);
        return;
      }

      // Aquí normalmente enviarías el paymentMethod.id a tu backend
      console.log('PaymentMethod:', paymentMethod);
      
      // Simulamos un pago exitoso
      setTimeout(() => {
        setProcessing(false);
        navigate('/'); // Redirige al inicio después del pago
      }, 2000);

    } catch (err) {
      setError('Ocurrió un error al procesar el pago');
      setProcessing(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Información de Pago
      </Typography>
      
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Box sx={{ 
          border: '1px solid #ccc', 
          p: 2, 
          borderRadius: 1,
          mb: 2 
        }}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </Box>
      </form>
    </Box>
  );
}

export default PaymentForm; 