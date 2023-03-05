import { useEffect, useState, MouseEvent, useRef } from 'react';
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
import { useAppDispatch } from 'hooks/hook';
import { useCreateTokenMutation } from 'redux/api/token';
import { setToken } from 'redux/slice/tokenSlice';
import { useNavigate } from 'react-router-dom';
import { changeDialogTrigger, changeLoaderTrigger } from 'redux/slice/trigers';
import { useTranslation } from 'react-i18next';

const { REACT_APP_NAME: envName, REACT_APP_PASSWORD: envPassword } =
  process.env;

export default function DialogForm() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const closeRef = useRef(null);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [createToken, { isSuccess, data }] = useCreateTokenMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data.token));
      dispatch(changeDialogTrigger(false));
      dispatch(changeLoaderTrigger(false));
      nav('profile');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
    if (value.length >= 5) {
      setNameError(value !== envName);
    }
  };

  const handleNameBlur = () => {
    setNameError(name !== envName);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);
    if (value.length >= 5) {
      setPasswordError(value !== envPassword);
    }
  };

  const handlePasswordBlur = () => {
    setPasswordError(password !== envPassword);
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = () => {
    if (name === envName && password === envPassword) {
      createToken({ username: name, password: Number(password) });
      dispatch(changeDialogTrigger(true));
      dispatch(changeLoaderTrigger(true));
    } else {
      setNameError(name !== envName);
      setPasswordError(password !== envPassword);
    }
  };

  function cancelHandler() {
    dispatch(changeDialogTrigger(false));
  }

  return (
    <Dialog
      ref={closeRef}
      onClose={cancelHandler}
      open={true}
      aria-labelledby="registration"
    >
      <DialogTitle id="registration">{t('dialogForm.title')}</DialogTitle>
      <DialogContent>
        <DialogContentText>{t('dialogForm.context')}</DialogContentText>
        <TextField
          required
          margin="dense"
          id="name"
          label={
            nameError
              ? `${t('dialogForm.nameLabel.first')} ${envName}`
              : t('dialogForm.nameLabel.second')
          }
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
          label={
            passwordError
              ? `${t('dialogForm.passwordLabel.first')} ${envPassword}`
              : t('dialogForm.passwordLabel.second')
          }
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
        <Button onClick={cancelHandler}>
          {t('dialogForm.buttons.cancel')}
        </Button>
        <Button onClick={handleSubmit}>{t('dialogForm.buttons.submit')}</Button>
      </DialogActions>
    </Dialog>
  );
}
