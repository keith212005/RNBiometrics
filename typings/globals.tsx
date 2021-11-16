/* eslint-disable no-undef */
import _ from 'lodash';
import { localize } from '@languages';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '@actions';

declare global {
  const ld: _.LoDashStatic;
  var loc: typeof localize;
  var connects: typeof connect;
  var BindActionCreators: typeof bindActionCreators;
  var ActionCreators: typeof actionCreators;
}

loc = localize;
connects = connect;
BindActionCreators = bindActionCreators;
ActionCreators = actionCreators;

export {};
