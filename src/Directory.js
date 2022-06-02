import React from 'react';
import { Userlist } from './Userlist';

export function Directory(props) {
  return (
    <div className="Directory">
      <h2>فهرست کاربران</h2>
      <Userlist
        usernames={['امیر', 'یوسف', 'کریگ']}
        onChoose={props.onChoose}
      />
    </div>
  );
}