import {LoggingService} from './logging.service';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class AccountService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>();
  constructor(private __loggingService: LoggingService) {

  }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.__loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.__loggingService.logStatusChange(status);
  }

}
