export default function NewsPage() {
  return <h1>Hi world</h1>;
}
// import { useState } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   TextField,
//   DialogContentText,
//   IconButton,
// } from '@mui/material';
// import Button from '@mui/material/Button/Button';
// import DialogActions from '@mui/material/DialogActions/DialogActions';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// const { REACT_APP_NAME: envName, REACT_APP_PASSWORD: envPass } = process.env;

// export default function NewsPage() {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const [nameError, setNameError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setName(value);
//     if (value.length >= 5) {
//       setNameError(value !== envName);
//     }
//   };
//   const handleNameBlur = () => {
//     setNameError(name !== envName);
//   };

//   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setPassword(value);
//     if (value.length >= 5) {
//       console.log(process.env);

//       setPasswordError(value !== envPass);
//     }
//   };

//   const handlePasswordBlur = () => {
//     setPasswordError(password !== envPass);
//   };
//   const handleTogglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   const handleSubmit = () => {
//     if (name === envName && password === envPass) {
//       // perform login action
//       console.log('Login successful');
//     } else {
//       setNameError(name !== envName);
//       setPasswordError(password !== envPass);
//     }
//   };

//   return (
//     <Dialog open={true} aria-labelledby="registration">
//       <DialogTitle id="registration">Log in</DialogTitle>
//       <DialogContent>
//         <DialogContentText>Press something</DialogContentText>
//         <TextField
//           // autoFocus
//           required
//           margin="dense"
//           id="name"
//           label={nameError ? 'Please enter "admin"' : 'Your name'}
//           type="text"
//           fullWidth
//           value={name}
//           onChange={handleNameChange}
//           onBlur={handleNameBlur}
//           error={nameError}
//         />
//         <TextField
//           required
//           margin="dense"
//           id="password"
//           label={passwordError ? 'Please enter "12345"' : 'Password'}
//           type={showPassword ? 'text' : 'password'}
//           fullWidth
//           value={password}
//           onChange={handlePasswordChange}
//           onBlur={handlePasswordBlur}
//           error={passwordError}
//           InputProps={{
//             endAdornment: (
//               <IconButton onClick={handleTogglePasswordVisibility}>
//                 {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
//               </IconButton>
//             ),
//           }}
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={() => console.log('Cancelled')}>Cancel</Button>
//         <Button onClick={handleSubmit}>Submit</Button>
//       </DialogActions>
//     </Dialog>
//   );
// }
