import { createActions } from 'redux-actions';
import * as types from './actionTypes';
// 命名必须要与后面常量保持一致
export const { increment, decrement } = createActions(
  types.INCREMENT,
  types.DECREMENT
);
