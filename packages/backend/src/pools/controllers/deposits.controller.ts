import { Controller, Get, Post, Param, Body } from '@nestjs/common'
import { DepositsService } from '../services/deposits.service'
import { Deposits as DepositsModel, Prisma } from '@prisma/client'

@Controller('deposits')
export class DepositsController {
  constructor(private readonly depositsService: DepositsService) {}

  @Get()
  async getDepoists(): Promise<DepositsModel[]> {
    return this.depositsService.allDeposits()
  }

  @Get(':poolName')
  async getDeposits(
    @Param('poolName') poolName?: string,
  ): Promise<DepositsModel[]> {
    return this.depositsService.deposits({
      where: {
        pool: {
          name: poolName,
        },
      },
    })
  }

  @Post('deposit')
  async createDeposit(
    @Body() depositData: { amount: number; userId: number; poolId: number },
  ): Promise<DepositsModel> {
    const { amount, userId, poolId } = depositData
    return this.depositsService.createDeposit({
      data: {
        amount: new Prisma.Decimal(amount),
        userId: userId,
        poolId: poolId,
      },
    })
  }
}
