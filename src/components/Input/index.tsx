import React, {
  FC,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { BiShowAlt, BiHide } from 'react-icons/bi';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  hasError?(hasError: boolean): void;
}

const Input: FC<InputProps> = ({
  name,
  hasError,
  className,
  type,
  onFocus,
  onBlur,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocuses, setIsFocuses] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const [typeInput, setTypeInput] = useState('password');

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (hasError) {
      hasError(!!error);
    }
  }, [error, hasError]);

  const handleInputFocus = useCallback(
    (e) => {
      if (onFocus) {
        onFocus(e);
      }
      setIsFocuses(true);
    },
    [onFocus]
  );

  const handleInputBlur = useCallback(
    (e) => {
      if (onBlur) {
        onBlur(e);
      }
      setIsFocuses(false);
      setIsFilled(!!inputRef.current?.value);
    },
    [onBlur]
  );

  const handleClick = useCallback(() => {
    setTypeInput((state) => (state === 'password' ? 'text' : 'password'));
  }, []);

  return (
    <>
      <Container
        className={className}
        isErrored={!!error}
        isFilled={isFilled}
        isFocuses={isFocuses}
      >
        <div>
          {type !== 'password' ? (
            <input
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              defaultValue={defaultValue}
              ref={inputRef}
              type={type || 'text'}
              {...rest}
            />
          ) : (
            <input
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              defaultValue={defaultValue}
              ref={inputRef}
              type={typeInput}
              {...rest}
            />
          )}
          {type === 'password' && (
            <button type="button" className="button-show" onClick={handleClick}>
              {typeInput === 'password' ? <BiShowAlt /> : <BiHide />}
            </button>
          )}
        </div>
      </Container>
      {error && <span className="small text-danger error">{error}</span>}
    </>
  );
};

export default Input;
