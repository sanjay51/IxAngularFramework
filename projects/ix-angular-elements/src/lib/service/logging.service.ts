import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IxLoggingService {
  public level = LEVEL.DEBUG;

  constructor() { }

  public debug(message: any) {
    if (this.level <= LEVEL.DEBUG)
      console.log("[DEBUG]" + message);
  }

  public info(message: any) {
    if (this.level <= LEVEL.INFO)
      console.log("[INFO]", message);
  }

  public warn(message: any) {
    if (this.level <= LEVEL.WARN)
      console.log("[WARN]", message);
  }

  public error(message: any) {
    if (this.level <= LEVEL.ERROR)
      console.log("[ERROR]", message);
  }

  public fatal(message: any) {
    if (this.level <= LEVEL.FATAL)
      console.log("[FATAL]", message);
  }
}

export enum LEVEL {
  ALL,
  DEBUG,
  INFO,
  WARN,
  ERROR,
  FATAL,
  OFF
}