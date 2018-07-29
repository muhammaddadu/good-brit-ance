import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const USER_KEY = 'USER';

@Injectable()
export class UserProvider {
  _data: any;

  constructor(
    public http: HttpClient,
    public storage: Storage
  ) {
    
  }

  getData() {
    return this.storage.get(USER_KEY)
      .then((data) => {
        if (!data) {
          return this.storage.set(USER_KEY, {});
        }

        return data;
      });
  }

  setData(value) {
    return this.storage.set(USER_KEY, value);
  }
}
