import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogContentText,
  IconButton,
} from '@mui/material';
import Button from '@mui/material/Button/Button';
import DialogActions from '@mui/material/DialogActions/DialogActions';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function NewsPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
    if (value.length >= 5) {
      setNameError(value !== 'admin');
    }
  };
  const handleNameBlur = () => {
    setNameError(name !== 'admin');
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    if (value.length >= 5) {
      setPasswordError(value !== '12345');
    }
  };

  const handlePasswordBlur = () => {
    setPasswordError(password !== '12345');
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = () => {
    if (name === 'admin' && password === '12345') {
      // perform login action
      console.log('Login successful');
    } else {
      setNameError(name !== 'admin');
      setPasswordError(password !== '12345');
    }
  };

  return (
    <Dialog open={true} aria-labelledby="registration">
      <DialogTitle id="registration">Log in</DialogTitle>
      <DialogContent>
        <DialogContentText>Press something</DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          label={nameError ? 'Please enter "admin"' : 'Your name'}
          type="text"
          fullWidth
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameBlur}
          error={nameError}
        />
        <TextField
          required
          margin="dense"
          id="password"
          label={passwordError ? 'Please enter "12345"' : 'Password'}
          type={showPassword ? 'text' : 'password'}
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={passwordError}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleTogglePasswordVisibility}>
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            ),
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => console.log('Cancelled')}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
