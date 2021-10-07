import { Injectable } from '@nestjs/common';
import { parse } from 'dotenv';

import * as fs from 'fs';

@Injectable()
export class ConfigService {
  private readonly envConfig: { [key: string]: string };
  constructor() {
    const isDevelopementEnv = process.env.NODE_ENV !== 'production';
    if (isDevelopementEnv) {
      const envFilePath = __dirname + '/../../.env';
      const existPath = fs.existsSync(envFilePath);
      if (!existPath) {
        console.log('Archivo .env no existe');
        process.exit(0);
      }

      this.envConfig = parse(fs.readFileSync(envFilePath));
    } else {
      this.envConfig = {
        PORT: process.env.PORT,
      };
    }
  }
  get(key: string): string {
    return this.envConfig[key];
  }
}
