import { Module } from '@nestjs/common';
import { MinerEngineService } from './miner-engine.service';

@Module({
  providers: [MinerEngineService],
  exports: [MinerEngineService],
})
export class MinerEngineModule {}
