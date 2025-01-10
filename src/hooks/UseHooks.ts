import { useEffect } from 'react';
import { EventEmitter } from 'eventemitter3';
import ButtonType from '../lib/ButtonType';

const emitter = new EventEmitter();

export const useSub = (event : string, callback : any) => {
  const unsubscribe = () => {
    emitter.off(event, callback);
  };

  useEffect(() => {
    emitter.on(event, callback);
    return unsubscribe;
  }, []);

  return unsubscribe;
};

export const usePub = () => {
  return (event : string, data: ButtonType) => {
    emitter.emit(event, data);
  };
};