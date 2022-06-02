// This module exports fake data fetching functionality.
// In a real app, this would grab data from the internet, but
// this module just waits a little bit before responding.
//
// You don't need to look at this, but you can if you want!

import Amir from './img/amir-mohammad-unsplash.jpg';
import Craig from './img/craig-mckay-unsplash.jpg';
import Joseph from './img/joseph-gonzalez-unsplash.jpg';


const FAKE_USER_DATA = {
  یوسف: {
      name: 'یوسف گنزالس',
      bio: "من یوسف هستم!",
      profilePictureUrl:
      {Joseph}.Joseph,
      friends: ['کریگ'],
    },
    امیر: {
      name: 'امیر محمد',
      bio: "من امیر هستم :) !",
      profilePictureUrl:
        {Amir}.Amir,
      friends: ['کریگ'],
    },
    کریگ: {
      name: 'کریگ مک‌کی',
      bio: "من کریگ هستم. میخوای بیشتر بدونی تماس بگیر",
      profilePictureUrl:
        {Craig}.Craig,
      friends: ['امیر', 'یوسف'],
    },
  };
  
  const timeoutByFetchId = new Map();
  
  class Fetch {
    constructor() {
      Object.defineProperty(this, '_id', {
        value: Date.now() + Math.random().toString().substr(2),
      });
    }
  }
  
  export function fetchUserData(username, callback) {
    if (!FAKE_USER_DATA.hasOwnProperty(username)) {
      throw new Error(
        'نام کاربری غلط است. آن باید یکی از "امیر"، "یوسف"، یا "کریگ" باشد.'
      );
    }
  
    const fetch = new Fetch();
  
    const delay = Math.floor(Math.random() * 1000) + 500;
    const timeout = setTimeout(() => {
      timeoutByFetchId.delete(fetch._id);
      callback(FAKE_USER_DATA[username]);
    }, delay);
  
    timeoutByFetchId.set(fetch._id, timeout);
  
    return fetch;
  }
  
  export function cancelFetch(fetch) {
    if (!fetch || typeof fetch !== 'object') {
      return;
    }
    const timeout = timeoutByFetchId.get(fetch._id);
    clearTimeout(timeout);
    timeoutByFetchId.delete(fetch._id);
  }